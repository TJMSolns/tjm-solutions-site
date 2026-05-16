---
sidebar_position: 10
title: Distribution & Analytics
---

# Distribution & Analytics

## Self-contained output

Every render produces a self-contained directory — `index.html`, `speaker.html`, `sync.js`, and all copied image assets. It works in any browser without a server.

```
my-talk/
  index.html      ← main presentation (share this)
  speaker.html    ← speaker view
  sync.js         ← speaker view sync module
  images/         ← copied assets
```

## Sharing options

**Zip and email:**

```bash
zip -r my-talk.zip my-talk/
```

**Web server:**

```bash
scp -r my-talk/ user@server:/var/www/html/
```

**GitHub Pages** — put the output in a `docs/` folder or push to a `gh-pages` branch.

**Local HTTP server** (also resolves speaker view popup-blocker issues):

```bash
python3 -m http.server 8080
# open http://localhost:8080/my-talk/
```

## PDF export

**Browser print** — simplest option:

1. Open `my-talk/index.html`
2. `File → Print` (Ctrl/Cmd + P)
3. Destination → Save as PDF
4. Print

**Headless Chrome** — more control over page size:

```bash
chromium --headless --print-to-pdf=my-talk.pdf my-talk/index.html
```

Speaker notes are in `speaker.html` — they are not included in the PDF export.

## Session analytics

Use `display` instead of opening `index.html` directly to enable session logging:

```bash
java -jar md-slides.jar display my-talk
```

This opens the presentation in your browser and writes every navigation event to `my-talk/deck.log`:

- Navigation events with method (arrow, goto, history)
- Timer start, pause, and resume
- Break mode toggles
- Session start and end

After presenting, run `report` to analyze the session:

```bash
java -jar md-slides.jar report my-talk
```

The report shows:

- Total presentation time (excluding breaks)
- Per-slide time spent
- Navigation path taken
- Break durations

Review after each talk to improve pacing and identify which slides consistently run long.

## Smart default

MD-Slides infers what you want from context — no subcommand required:

```bash
java -jar md-slides.jar my-talk       # → render (first time)
java -jar md-slides.jar my-talk       # → display (if deck.log exists)
java -jar md-slides.jar my-talk.md    # → render
```

If the output directory already contains `deck.log`, the smart default switches to `display` automatically — it assumes you're re-presenting an existing deck. Pass `--display` explicitly to force session logging on a fresh render:

```bash
java -jar md-slides.jar my-talk --display
```
