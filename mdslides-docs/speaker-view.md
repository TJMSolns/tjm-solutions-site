---
sidebar_position: 4
title: Speaker View
---

# Speaker View

Press `S` during any presentation to open a synchronized speaker window.

## What you see

The speaker view shows:

- **Current slide notes** — your speaker notes for the active slide, or "No notes for this slide"
- **Next slide preview** — the heading or title of the next slide
- **Elapsed timer** — starts on first navigation, MM:SS format

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

<!-- Speaker notes: The key point here is X. Don't forget to mention Y. -->
```

Notes are stripped from the audience view and rendered only in `speaker.html`.

## Recommended workflow

```bash
# Generate the presentation
mdslides render my-talk --theme light

# Open audience view on the projector
open my-talk/index.html

# Open speaker view on your laptop — or press S from the audience view
open my-talk/speaker.html
```
