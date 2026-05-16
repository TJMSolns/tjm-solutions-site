---
sidebar_position: 5
title: Navigation
---

# Navigation

MD-Slides is fully keyboard-driven. All shortcuts work in both the main window and speaker view.

## Keyboard reference

| Key | Action |
|-----|--------|
| `→` / `Space` | Next slide |
| `←` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `S` | Open speaker view |
| `B` | Toggle break mode |
| `G` | Goto: type a slide number, press Enter |
| `P` | History back |
| `N` | History forward (or next slide if no forward history) |
| `T` | Pause / resume timer |
| `R` | Reset timer to 00:00:00 |

## Break mode

Press `B` to hide the presentation from your audience while you take a break. The timer pauses automatically. Press `B` again to resume.

While break mode is active you still see your current slide and notes in speaker view.

Configure a custom break screen image in your theme JSON:

```json
{
  "breakScreen": "images/break.png"
}
```

Or pass it at render time:

```bash
java -jar md-slides.jar render my-talk --break-screen ./images/break.png
```

## Goto

Press `G`, type a slide number (1-indexed, matching the slide counter), then press `Enter`. Jumps directly to that slide — useful during Q&A when someone asks to revisit a specific slide.

## History navigation

MD-Slides records your full navigation path — not just the slide sequence.

- `P` — back through your navigation history
- `N` — forward through history, or next slide if there is no forward history

History navigation is useful for non-linear Q&A sessions where you jump between slides out of order.

## Timer

The elapsed timer starts on your first navigation (arrow key or space), not on page load.

- `T` — pause or resume without entering break mode
- `R` — reset to 00:00:00 (useful when rehearsing)

Display the live timer value on slides using the `{{timer}}` token in a `header:` or `footer:` frontmatter key.

## Fullscreen

Use your browser's built-in fullscreen:

- **Windows / Linux:** `F11`
- **macOS:** `Ctrl + Cmd + F`

All MD-Slides keyboard shortcuts continue to work in fullscreen mode.

**Recommended browsers:** Chrome or Firefox — both support the BroadcastChannel API required for speaker view synchronization.
