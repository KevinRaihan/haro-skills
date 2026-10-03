"""Tile still frames into one contact sheet so a whole storyboard can be checked in one image.

    venv/bin/python sheet.py stills/x 3 6 9.6 13.5 ...   -> stills/sheet.png (3 columns, time label on each)

Needs pymupdf (venv/bin/pip install pymupdf).
"""
import sys

import pymupdf

prefix, cols, times = sys.argv[1], int(sys.argv[2]), sys.argv[3:]
W, H = 1920 // cols, 1080 // cols
rows = (len(times) + cols - 1) // cols
page = pymupdf.open().new_page(width=cols * W, height=rows * H)
for i, t in enumerate(times):
    r = pymupdf.Rect((i % cols) * W, (i // cols) * H, (i % cols + 1) * W, (i // cols + 1) * H)
    page.insert_image(r, filename=f"{prefix}-{t}.png")
    page.draw_rect(r, color=(.7, .7, .7))
    page.insert_text((r.x0 + 6, r.y0 + 18), t, fontsize=16, color=(0, 0, 1))
out = prefix.rsplit("/", 1)[0] + "/sheet.png" if "/" in prefix else "sheet.png"
page.get_pixmap(dpi=72).save(out)
print(out)
