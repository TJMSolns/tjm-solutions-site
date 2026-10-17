---
sidebar_position: 10
title: Distribution & Analytics
---

# Distribution & Analytics

## Self-contained output

Every render produces one folder you can open, copy or host as it is:

```
my-talk/
  index.html          ← the presentation (share this)
  speaker.html        ← speaker view
  sync.js             ← speaker view sync
  *.js                ← timer, goto, history, break mode, header/footer, session log
  images/             ← copied images
```

It works straight from disk (`file://`) or from any web server. Syntax highlighting and Google Fonts (if your theme uses them) load from the internet; everything else works offline.

## Sharing options

**Zip and email:**

```bash
zip -r my-talk.zip my-talk/
```

**Web server:**

```bash
scp -r my-talk/ user@server:/var/www/html/
```

**GitHub Pages** — put the output in a `docs/` folder or push it to a `gh-pages` branch.

**Presenting from a phone or tablet** — host the output on GitHub Pages or a web server, then open the URL on the device. Add `#N` to the URL to open a specific slide, for example `https://example.com/my-talk/#5`. See [Navigation](./navigation#touch-screens-phones-and-tablets) for touch controls. The [live demo](https://www.tjm.solutions/mdslides/demo/) is hosted this way.

**Local HTTP server** (also avoids pop-up blockers for speaker view):

```bash
python3 -m http.server 8080
# open http://localhost:8080/my-talk/
```

## PDF export

**Browser print** — simplest option. Each slide prints on its own landscape page, without the on-screen controls:

1. Open `my-talk/index.html`
2. `File → Print` (Ctrl/Cmd + P)
3. Destination → Save as PDF
4. Print

**Headless Chrome:**

```bash
chromium --headless --print-to-pdf=my-talk.pdf my-talk/index.html
```

Speaker notes are in `speaker.html` — they are not included in the PDF.

## Session analytics

While you present, the page records every slide change and how it happened (keyboard, swipe, tap, button, goto, history, speaker view, link), timer pauses and breaks. Nothing is sent anywhere; the record stays in the page until you save it.

1. **Present.** Open the deck however you like, or with `display`:

   ```bash
   java -jar md-slides.jar display my-talk
   ```

2. **Save the log.** Press **L** at the end (or at any point). The browser saves `my-talk-YYYYMMDD-HHMMSS.log.json`, usually to your Downloads folder, and the page confirms it on screen.

3. **Read the report:**

   ```bash
   java -jar md-slides.jar report my-talk
   ```

   `report` uses the newest log for that deck in the deck's output folder, the current folder, or `~/Downloads`. To use a specific file:

   ```bash
   java -jar md-slides.jar report my-talk --log path/to/my-talk-20261017-143000.log.json
   ```

The report shows:

- Session length, presenting time and breaks
- Time per slide (breaks excluded), with slide titles and number of visits
- The five longest slides
- The path you took through the deck
- How you navigated (keyboard, swipe, goto, ...)

A log saved part-way through is marked as such. Review after each rehearsal to find the slides that run long.

## Smart default

Run MD-Slides with just the deck name:

```bash
java -jar md-slides.jar my-talk
```

1. If a saved session log exists, it shows that session's report first.
2. It renders the deck if `my-talk.md` changed since the last render (or was never rendered).
3. It opens the presentation in your browser.

That makes a rehearsal loop: run it, present, press **L**, run it again.
