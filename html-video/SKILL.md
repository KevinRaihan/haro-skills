---
name: html-video
description: Make product-launch / demo / explainer videos as code - an HTML page animated by a deterministic seek(t), rendered frame by frame to a 1080p60 MP4 with headless Chromium + ffmpeg. Use when asked for a launch video, product teaser, sneak peek, animated walkthrough, motion graphics, or "record a demo" where an AI video model or PowerPoint would fall short (real UI, real numbers, exact text, any length).
---

# HTML launch videos

Why this way: AI video models garble UI and text and cap length; PowerPoint animation must be done by hand.
An HTML page with a time-driven `seek(t)` gives exact text, real fonts, real data, any length, and
re-renders in minutes after a one-line change.

## Setup (once per working folder, use the scratchpad)
```bash
npm init -y >/dev/null && npm i playwright          # uses an existing ~/.cache/ms-playwright/chromium-*
python3 -m venv venv && venv/bin/pip install imageio-ffmpeg pymupdf   # ffmpeg binary + contact sheets
cp ~/.claude/skills/html-video/scripts/{render.js,lint.js,sheet.py,wordtimes.py} .
cp ~/.claude/skills/html-video/templates/starter.html video.html
```
The pip ffmpeg is only needed when `ffmpeg` is not on PATH (render.js finds it in ./venv).

## Workflow
0. **Intake (one message, skip what is already known)**: subject / product, audience, target length, aspect ratio(s)
   (16:9 default; 9:16, 1:1, 4:5 for social), tone/look (brand tokens or reference screenshots), audio (none / user's
   music / narration), real data available. Do not start building before the user has answered.
1. **Storyboard first**: a table of time ranges → scene → what moves → narration/caption text. **Approval gate**:
   show it and wait for a yes before building, for anything over ~20 s. Typical launch: intro lockup (0-8 s) → problem/bridge (5 s) → demo scenes (10-15 s each, one feature each,
   caption on the side) → trust/rules cards → end card. 60-75 s total.
2. **Gather real assets before animating**: logos/fonts/colours from the product's frontend code
   (tokens.css, Sidebar.vue, etc.), real outputs (charts, documents, replies). Keep content + timing in a
   separate `script.js` (`SCRIPT = {...}`) and the animation in an `engine.js`, so text and timing edits never
   touch the engine.
3. **Build `seek(t)`**, then render stills at the key moments and review them as one contact sheet:
   ```bash
   node render.js video.html stills/k 60 3,9.5,13.5,22,34,47,60
   venv/bin/python sheet.py stills/k 3 3 9.5 13.5 22 34 47 60   # -> stills/sheet.png, then Read it
   ```
   Fix, re-shoot only the frames that changed. **Approval gate #2**: show the contact sheet and wait for a yes
   before the slow full render. Run the layout lint on the settled frames too (see Quality checks).
   Then render the full MP4 (~1.2 s of render per 1 s of video):
   `node render.js video.html out.mp4 60` (run in background for > 30 s videos).
4. Other aspect ratios are a re-layout, not a crop: `--size 1080x1920` (9:16), `1080x1080` (1:1), `1080x1350` (4:5).
   Render stills at the new size and re-check the sheet; fix with `body.portrait` / `body.square` CSS (see starter).
5. Deliver the MP4 plus the sources (html/js/assets) so the user can re-render.

## Rules for seek(t)
- Every visual property is a pure function of `t` (use `seg/lerp/easeOut/back/fade` from the starter).
  No CSS transitions, no `setTimeout`, no `Date.now()`; anything random must be seeded/fixed per element.
- Live preview: start a `requestAnimationFrame` loop only when `!navigator.webdriver`, after `load`.
- **Measure layout after load** (first `seek` call), never at script parse time: images not yet loaded measure as
  0 height (image bubbles collapse).
- Chat-style lists: column anchored at the bottom; each item's wrapper height animates 0 → measured height, so
  older items scroll up smoothly. Status bubbles ("still thinking…") collapse back to 0 when replaced.
- Streaming text: wrap each word in a span at build time, reveal the first N. Typing: slice a string by t.
- Word swaps in a lockup (e.g. "Acme Dashboard" → "Assistant" → "API"): letters roll out first, the next word
  starts ~0.4 s after the swap, and the box width eases from old to new width; re-centre the whole lockup from the
  measured widths every frame. Overlapping old/new words looked broken.
- Camera: one wrapper `translate(x,y) scale(s)`; zooms interpolate between named camera states. For a zoom onto
  an image then its caption, pan `y` from the image to the text inside the zoom window.
- Sidebar captions over a zoomed UI: a white left-to-transparent gradient veil behind them.

## Recreating product UI
- A faithful HTML replica beats a screen recording for control: copy layout, labels, colours and font from the
  real components (e.g. step labels from the UI components, brand colours from the design tokens, the app's web font).
- Mock phones (chat apps) and terminals are plain divs; mask secrets (`tok_••••••••`).
- Characters/mascots: redraw as inline SVG (parts you can move: eyes blink by scaleY, body roll/bounce) instead of
  animating a raster.

## Real data, honestly
- Prefer real outputs: ask the actual agent/tool the demo questions and use its replies and files verbatim;
  shorten only to fit, and tell the user what was shortened or written for the video.
- If an agent cannot answer a demo question (e.g. its knowledge is older than the feature), pick another question;
  don't fake its answer.
- Documents: Word COM on Windows converts .docx → PDF from WSL
  (`powershell.exe ... $w=New-Object -ComObject Word.Application; $d.SaveAs([ref]"C:\...\x.pdf",[ref]17)`),
  then `pymupdf` renders pages to PNG for a fanned page shot.
- Prod sessions and prod data: reusing a user's session token or reading prod data for a video can be blocked by
  the permission classifier. Ask once, explain; if refused, use data already obtained in the conversation or a
  replica, and say which numbers are real. Never delete a partial capture before the replacement exists.

## Quality checks (lint)
`node lint.js video.html [--size WxH] [--step 1] [--times 3,9.5,22]` (or `node render.js video.html x --lint`) seeks the
page at every step and reports text that is **offcanvas**, **clipped** (by its own box or an `overflow:hidden`
ancestor) or **overlapping** other text (>15% of the smaller box). Exit code 2 = issues. Run it before the full render
and after any copy or size change. Elements mid-animation can flag for a frame or two (a wrapper growing 0 → h, a word
rolling out); judge those at settled times with `--times`. Still read the contact sheet: lint cannot see ugly.

## Pacing (what makes it feel produced)
- Silence/stillness before the payoff: hold ~0.5-1 s of low motion, then land the hero moment (biggest move, brightest
  colour, music hit). Do not put the loudest beat in the middle of a busy stretch.
- One idea per scene; no scene under ~2 s unless it is a deliberate cut. A hero subject stays anchored while the rest moves.
- Between scenes, have the old content close/morph into the next (shared shape, wipe, or camera move) rather than hard cut.

## Audio (opt-in, after the picture is approved)
- **Music**: `node render.js video.html out.mp4 60 --audio music.mp3` muxes, fades out the last 0.5 s and trims to the
  video. Use a licensed / royalty-free track from the user. To hit beats, put cut times on the beat grid
  (`beat = 60 / bpm`) in `script.js` rather than guessing.
- **Narration**: record or generate the voice first (user's file, or a TTS connector they have), then
  `venv/bin/pip install faster-whisper && venv/bin/python wordtimes.py narration.mp3 > words.json`. Key on-screen text and
  scene changes to `t0` of the relevant words in `script.js`; a re-recorded voice just needs `wordtimes.py` re-run.
  Mux with `--audio narration.mp3` (mix music + voice first with ffmpeg `amix`, voice louder, if both).
- Keep `DURATION` >= audio length; the mux trims, it does not pad.
- No audio, no `--audio`: output is silent, same as before.
