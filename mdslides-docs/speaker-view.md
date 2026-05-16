---
sidebar_position: 6
title: Speaker View
---

# Speaker View

Press `S` during any presentation to open a synchronized speaker window.

## What you see

The speaker view shows:

- **Current slide** — small preview of what the audience sees
- **Next slide heading** — so you can bridge transitions smoothly
- **Speaker notes** — your notes for the current slide, or "No notes for this slide"
- **Elapsed timer** — starts on first navigation, HH:MM:SS format

## Output files

When you render a deck, MD-Slides generates three files:

| File | Purpose |
|------|---------|
| `my-talk/index.html` | Main presentation — show this to your audience |
| `my-talk/speaker.html` | Speaker view — open on your laptop |
| `my-talk/sync.js` | Synchronization module (required by both) |

Both windows stay synchronized: navigate from either and the other follows.

## Adding notes

```markdown
---
template: content
---

## My Slide

Content here.

<!-- Speaker notes: The key point here is X. Don't forget to mention Y.
Notes can span multiple lines. -->
```

Notes are stripped from the audience view and appear only in `speaker.html`.

## Timer controls

| Key | Action |
|-----|--------|
| `T` | Pause / resume timer |
| `R` | Reset to 00:00:00 |

The timer starts on your first navigation, not on page load. Use `{{timer}}` in a `header:` or `footer:` frontmatter key to show the live value on slides.

## Recommended workflow

```bash
# Generate the presentation
java -jar md-slides.jar render my-talk --theme light

# Open audience view on the projector
open my-talk/index.html

# Press S from the main window — or open speaker view directly on your laptop
open my-talk/speaker.html
```

## Popup blockers

If the speaker view window won't open, your browser's popup blocker may be blocking the `file://` URL. Fix with a local HTTP server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080/my-talk/
```

Alternatively, allow popups for the `file://` origin in your browser settings. Chrome and Firefox both support the BroadcastChannel API required for speaker view sync.
