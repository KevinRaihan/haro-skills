// Render a deterministic HTML animation to MP4, or to still frames for review.
//
//   node render.js page.html out.mp4 [fps] [flags]             full video (H.264, yuv420p, faststart)
//   node render.js page.html stills/x 60 1.5,8,12.3 [flags]    PNG stills at those seconds -> stills/x-<t>.png
//
// Flags (anywhere after page.html):
//   --size WxH      viewport, default 1920x1080. 1080x1920 = 9:16, 1080x1080 = 1:1, 1080x1350 = 4:5.
//                   The page gets ?w=..&h=.. and body.portrait / body.square / body.landscape (see starter.html).
//   --audio FILE    mux a music/narration track (AAC 192k, 0.5 s fade-out, trimmed to video length).
//   --lint          run the layout lint (see lint.js) at 1 s steps first; exit 2 on errors, nothing is rendered.
//
// The page must define window.seek(t) (sets every element from t alone) and window.DURATION (seconds).
// Needs: `npm i playwright` in the working dir, an installed Chromium, and ffmpeg
// (FFMPEG env var, else `ffmpeg` on PATH, else the imageio-ffmpeg binary in ./venv).
const { chromium } = require('playwright');
const { spawn, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { lintPage } = require('./lint.js');

// ---- args: positional [page, out, fps, stills] + flags ----
const pos = [], flags = {};
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--lint') flags.lint = true;
  else if (argv[i] === '--size') flags.size = argv[++i];
  else if (argv[i] === '--audio') flags.audio = argv[++i];
  else pos.push(argv[i]);
}
const [pagePath, out, fpsArg, stills] = pos;
if (!pagePath) { console.error('usage: node render.js page.html out.mp4|stills/x [fps] [t1,t2,..] [--size WxH] [--audio FILE] [--lint]'); process.exit(1); }
const FPS = +(fpsArg || 60);
const [W, H] = (flags.size || '1920x1080').split('x').map(Number);
if (!(W > 0 && H > 0)) { console.error(`bad --size ${flags.size}, expected WxH`); process.exit(1); }

function findChromium() {
  if (process.env.CHROMIUM) return process.env.CHROMIUM;
  const root = path.join(process.env.HOME, '.cache/ms-playwright');
  const dirs = fs.existsSync(root) ? fs.readdirSync(root).filter(d => /^chromium-\d+$/.test(d)).sort().reverse() : [];
  for (const d of dirs) { const p = path.join(root, d, 'chrome-linux64/chrome'); if (fs.existsSync(p)) return p; }
  return undefined;   // let Playwright use its own default
}
function findFfmpeg() {
  if (process.env.FFMPEG) return process.env.FFMPEG;
  try { execSync('command -v ffmpeg', { stdio: 'ignore' }); return 'ffmpeg'; } catch (e) { /* not on PATH */ }
  const lib = path.join(process.cwd(), 'venv/lib');
  if (fs.existsSync(lib)) {
    for (const py of fs.readdirSync(lib)) {
      const d = path.join(lib, py, 'site-packages/imageio_ffmpeg/binaries');
      if (fs.existsSync(d)) { const f = fs.readdirSync(d).find(n => n.startsWith('ffmpeg')); if (f) return path.join(d, f); }
    }
  }
  throw new Error('no ffmpeg: set FFMPEG, install ffmpeg, or `python3 -m venv venv && venv/bin/pip install imageio-ffmpeg`');
}

(async () => {
  if (flags.audio && !fs.existsSync(flags.audio)) throw new Error(`audio file not found: ${flags.audio}`);
  const browser = await chromium.launch({ executablePath: findChromium(), args: ['--allow-file-access-from-files', '--font-render-hinting=none'] });
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await page.goto(`file://${path.resolve(pagePath)}?w=${W}&h=${H}`);
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);

  if (flags.lint) {
    const n = await lintPage(page, { step: 1 });
    await browser.close();
    process.exit(n.errors ? 2 : 0);
  }
  if (stills) {
    fs.mkdirSync(path.dirname(out), { recursive: true });
    for (const t of stills.split(',')) { await page.evaluate(t => seek(t), +t); await page.screenshot({ path: `${out}-${t}.png` }); }
    return browser.close();
  }

  const dur = await page.evaluate(() => DURATION);
  const silent = flags.audio ? out.replace(/\.mp4$/, '') + '.silent.mp4' : out;
  const ff = spawn(findFfmpeg(), ['-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'png', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', silent],
  { stdio: ['pipe', 'ignore', 'inherit'] });
  const N = Math.round(dur * FPS);
  for (let i = 0; i < N; i++) {
    await page.evaluate(t => seek(t), i / FPS);
    const buf = await page.screenshot({ type: 'png' });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (i % 600 === 0) process.stderr.write(`frame ${i}/${N}\n`);
  }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); await browser.close();

  if (flags.audio) {
    const fadeAt = Math.max(0, dur - 0.5);
    const mux = spawn(findFfmpeg(), ['-y', '-i', silent, '-i', flags.audio, '-map', '0:v', '-map', '1:a',
      '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-af', `afade=t=out:st=${fadeAt}:d=0.5`, '-t', String(dur), '-movflags', '+faststart', out],
    { stdio: ['ignore', 'ignore', 'inherit'] });
    const code = await new Promise(r => mux.on('close', r));
    if (code !== 0) throw new Error(`audio mux failed (ffmpeg exit ${code}); silent video kept at ${silent}`);
    fs.unlinkSync(silent);
  }
})().catch(e => { console.error(e); process.exit(1); });
