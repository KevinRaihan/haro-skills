// Layout lint for html-video pages: finds text that is clipped, off-canvas, or overlapping other text.
//
//   node lint.js page.html [--size WxH] [--step 1] [--times 3,9.5,22]
//
// Samples seek(t) at every --step seconds (default 1) plus any --times, and for each sample checks every
// visible text-bearing element:
//   offcanvas  text box leaves the viewport
//   clipped    text is cut by its own box (scrollWidth/Height > client, with overflow hidden) or by a clipping ancestor
//   overlap    two visible text boxes intersect by more than 15% of the smaller one
// Exit code 2 when anything is found. render.js --lint calls lintPage() directly.
//
// Known false positives: elements mid-animation (a word rolling out, a wrapper growing 0 -> h) can be flagged at the
// instant they move. Lint at the *settled* times you care about with --times, and ignore one-frame hits.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// runs inside the page; returns [{kind, t, a, b?, detail}]
function inPage(t) {
  seek(t);
  const vw = innerWidth, vh = innerHeight, found = [];
  const label = el => (el.id ? '#' + el.id : el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/)[0] : el.tagName.toLowerCase())
    + ' "' + el.textContent.trim().replace(/\s+/g, ' ').slice(0, 24) + '"';
  const visible = el => {
    for (let e = el; e && e !== document.body; e = e.parentElement) {
      const cs = getComputedStyle(e);
      if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity < 0.05) return false;
    }
    return true;
  };
  // "leaf text" elements: own non-whitespace text node
  const els = [...document.querySelectorAll('body *')].filter(el =>
    [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()) && visible(el));
  const boxes = [];
  for (const el of els) {
    const r = document.createRange(); r.selectNodeContents(el);
    const b = r.getBoundingClientRect();
    if (b.width < 2 || b.height < 2) continue;
    boxes.push({ el, b });
    if (b.left < -1 || b.top < -1 || b.right > vw + 1 || b.bottom > vh + 1)
      found.push({ kind: 'offcanvas', t, a: label(el), detail: `box ${[b.left, b.top, b.right, b.bottom].map(Math.round)} vs ${vw}x${vh}` });
    const cs = getComputedStyle(el);
    if ((cs.overflow !== 'visible') && (el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1) && el.clientWidth > 0)
      found.push({ kind: 'clipped', t, a: label(el), detail: `scroll ${el.scrollWidth}x${el.scrollHeight} > client ${el.clientWidth}x${el.clientHeight}` });
    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {   // clipped by an ancestor
      if (getComputedStyle(p).overflow === 'visible') continue;
      const pb = p.getBoundingClientRect();
      if (pb.width && (b.left < pb.left - 1 || b.right > pb.right + 1 || (b.top < pb.top - 1 || b.bottom > pb.bottom + 1)) && p.clientHeight > 0 && p.clientWidth > 0) {
        found.push({ kind: 'clipped', t, a: label(el), detail: `cut by ancestor ${label(p)}` }); break;
      }
    }
  }
  for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
    const A = boxes[i], B = boxes[j];
    if (A.el.contains(B.el) || B.el.contains(A.el)) continue;
    const w = Math.min(A.b.right, B.b.right) - Math.max(A.b.left, B.b.left);
    const h = Math.min(A.b.bottom, B.b.bottom) - Math.max(A.b.top, B.b.top);
    if (w <= 0 || h <= 0) continue;
    const small = Math.min(A.b.width * A.b.height, B.b.width * B.b.height);
    if (w * h > 0.15 * small) found.push({ kind: 'overlap', t, a: label(A.el), b: label(B.el), detail: `${Math.round(w * h / small * 100)}% of smaller box` });
  }
  return found;
}

async function lintPage(page, { step = 1, times = [] } = {}) {
  const dur = await page.evaluate(() => DURATION);
  const ts = new Set(times);
  for (let t = 0; t <= dur; t += step) ts.add(+t.toFixed(3));
  const all = [];
  for (const t of [...ts].sort((x, y) => x - y)) all.push(...await page.evaluate(inPage, t));
  // collapse repeats of the same finding across consecutive samples
  const seen = new Map();
  for (const f of all) {
    const k = [f.kind, f.a, f.b].join('|');
    if (!seen.has(k)) seen.set(k, { ...f, ts: [f.t] }); else seen.get(k).ts.push(f.t);
  }
  for (const f of seen.values())
    console.log(`${f.kind.padEnd(9)} t=${f.ts.length > 3 ? `${f.ts[0]}..${f.ts[f.ts.length - 1]} (${f.ts.length} samples)` : f.ts.join(',')}  ${f.a}${f.b ? '  x  ' + f.b : ''}  [${f.detail}]`);
  const errors = seen.size;
  console.log(errors ? `lint: ${errors} issue(s)` : `lint: clean (${ts.size} samples, ${dur}s)`);
  return { errors };
}

module.exports = { lintPage };

if (require.main === module) {
  const argv = process.argv.slice(2), pos = [], o = { size: '1920x1080', step: 1, times: [] };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--size') o.size = argv[++i];
    else if (argv[i] === '--step') o.step = +argv[++i];
    else if (argv[i] === '--times') o.times = argv[++i].split(',').map(Number);
    else pos.push(argv[i]);
  }
  if (!pos[0] || !(o.step > 0)) { console.error('usage: node lint.js page.html [--size WxH] [--step 1] [--times t1,t2]'); process.exit(1); }
  const [W, H] = o.size.split('x').map(Number);
  (async () => {
    const root = path.join(process.env.HOME, '.cache/ms-playwright');
    let exe = process.env.CHROMIUM;
    if (!exe && fs.existsSync(root)) for (const d of fs.readdirSync(root).filter(d => /^chromium-\d+$/.test(d)).sort().reverse()) {
      const p = path.join(root, d, 'chrome-linux64/chrome'); if (fs.existsSync(p)) { exe = p; break; }
    }
    const browser = await chromium.launch({ executablePath: exe, args: ['--allow-file-access-from-files', '--font-render-hinting=none'] });
    const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
    await page.goto(`file://${path.resolve(pos[0])}?w=${W}&h=${H}`);
    await page.waitForLoadState('networkidle'); await page.evaluate(() => document.fonts.ready);
    const r = await lintPage(page, o); await browser.close(); process.exit(r.errors ? 2 : 0);
  })().catch(e => { console.error(e); process.exit(1); });
}
