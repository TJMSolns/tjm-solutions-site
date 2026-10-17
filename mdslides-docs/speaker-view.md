---
sidebar_position: 6
title: Speaker View
---

# Speaker View

Press `S` during any presentation to open a synchronized speaker window.

## What you see

The speaker view shows:

- **Slide counter** — which slide the audience is on, out of the total
- **Next slide heading** — so you can bridge transitions smoothly
- **Speaker notes** — your notes for the current slide, or "No notes for this slide"
- **Elapsed timer** — starts on first navigation, HH:MM:SS format

## Output files

`my-talk/index.html` is the presentation for your audience, and `my-talk/speaker.html` is speaker view for your laptop. Both load `sync.js`, which keeps them in step. See [Distribution](./distribution#self-contained-output) for the full output folder.

Both windows stay synchronized: navigate from either and the other follows.

Synchronization uses the browser's local storage events, which connect windows and tabs of the same browser on the same device. A speaker view open on your phone doesn't follow a presentation running on a laptop.

## Navigating from speaker view

| Input | Action |
|-------|--------|
| `→` / `↓` / `Space` / `Enter` / `Page Down` | Next slide |
| `←` / `↑` / `Page Up` | Previous slide |
| `Home` / `End` | First / last slide |
| `‹` / `›` buttons | Previous / next slide |
| Swipe left / right | Next / previous slide |
| `Esc` | Close speaker view (when it was opened with `S`) |

Break mode, goto, history, and the timer keys work in the main window. See [Navigation](./navigation).

## On a phone or tablet

On screens narrower than 700px, speaker view switches to a single column: the header and timer at the top, your notes in the middle with most of the room, and the next-slide preview below them. The `‹` `›` buttons and swipe gestures work here too, and the layout keeps clear of the notch and rounded corners.

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

Press these in the main window.

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

Alternatively, allow pop-ups for the page in your browser settings.
