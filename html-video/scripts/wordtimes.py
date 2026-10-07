"""Word-level timestamps for a narration file, so on-screen text can be keyed to speech.

    venv/bin/python wordtimes.py narration.mp3 > words.json
    # [{"w": "Meet", "t0": 0.42, "t1": 0.71}, ...]  -> paste/load into script.js as WORDS, drive seek(t) from it

Needs: venv/bin/pip install faster-whisper   (downloads the model on first run; CPU is fine, small.en is plenty)
Re-record the voice -> re-run this -> animation re-times itself, nothing else changes.
"""
import json
import sys

from faster_whisper import WhisperModel

if len(sys.argv) != 2:
    sys.exit("usage: wordtimes.py narration.mp3 > words.json")
model = WhisperModel("small.en", device="cpu", compute_type="int8")
segments, _ = model.transcribe(sys.argv[1], word_timestamps=True)
words = [{"w": w.word.strip(), "t0": round(w.start, 3), "t1": round(w.end, 3)} for s in segments for w in s.words]
json.dump(words, sys.stdout, ensure_ascii=False, indent=1)
