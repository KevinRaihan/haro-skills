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
cp ~/.claude/skills/html-video/scripts/{render.js,sheet.py} .
cp ~/.claude/skills/html-video/templates/starter.html video.html
```
The pip ffmpeg is only needed when `ffmpeg` is not on PATH (render.js finds it in ./venv).

## Workflow
1. **Storyboard first**: a table of time ranges → scene → what moves. Agree on it with the user for anything over ~20 s.
   Typical launch: intro lockup (0-8 s) → problem/bridge (5 s) → demo scenes (10-15 s each, one feature each,
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
   Fix, re-shoot only the frames that changed. Then render the full MP4 (~1.2 s of render per 1 s of video):
   `node render.js video.html out.mp4 60` (run in background for > 30 s videos).
4. Deliver the MP4 plus the sources (html/js/assets) so the user can re-render.

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

## Not done by default
- Audio. Add after the picture is approved: `ffmpeg -i out.mp4 -i music.mp3 -c:v copy -c:a aac -shortest final.mp4`
  (licensed / royalty-free track from the user).
