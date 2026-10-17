---
sidebar_position: 5
title: Navigation
---

# Navigation

MD-Slides works with a keyboard, a presentation clicker, a mouse, or a touch screen. You can present from a laptop, a phone, or a tablet.

## Keyboard reference

| Key | Action |
|-----|--------|
| `→` / `↓` / `Space` / `Enter` / `Page Down` | Next slide |
| `←` / `↑` / `Page Up` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `F` | Toggle fullscreen |
| `S` | Open speaker view |
| `B` | Toggle break mode |
| `G` | Goto: type a slide number, press Enter (or tap the slide counter) |
| `P` | History back |
| `N` | History forward (or next slide if no forward history) |
| `T` | Pause / resume timer |
| `R` | Reset timer to 00:00:00 |
| `L` | Save the session log (see [Session analytics](./distribution#session-analytics)) |

Shortcuts are ignored while you type in a field, while the goto dialog is open, or while Ctrl, Cmd, or Alt is held, so browser shortcuts keep working.

Speaker view supports the navigation keys (next, previous, `Home`, `End`) and `Esc` to close it. Break mode, goto, history, and the timer keys work in the main window. See [Speaker View](./speaker-view).

## Presentation clickers

Most wireless clickers send `Page Down` / `Page Up` or the arrow keys, and some send `Enter`. MD-Slides handles all of them, so a clicker works without any setup.

## Touch screens: phones and tablets

- **Swipe** left for the next slide, right for the previous one.
- **Tap** the right 70% of the screen for the next slide, the left 30% for the previous one.
- **On-screen buttons**: `‹` and `›` beside the slide counter, and a fullscreen button where the browser supports fullscreen.

Taps navigate only for touch and pen input. Mouse clicks don't change slides, so you can still select text on a desktop. Vertical drags, panning while pinch-zoomed, and scrolling a wide code block sideways don't change slides either.

On a phone, the layout respects the notch and rounded corners. It also uses the visible screen height, so the browser toolbar doesn't cut slides off. Text sizes adjust to the screen, and two-column slides stack into one column in portrait.

To present from a phone, put the deck where the phone can reach it, such as GitHub Pages or any web server (see [Distribution](./distribution)), and open its URL.

## Fit to the screen

Each slide is scaled to fit the screen it's shown on. Wide tables, Mermaid diagrams, code blocks, and images first shrink to the available width, then the whole slide is scaled to the largest size that fits. Scaled content is re-laid out at full width, so a wide table re-wraps instead of just getting smaller. Slides re-fit when you change slides, resize the window, or rotate the device.

If a slide would have to shrink below 35% to fit, it scrolls instead. That usually means the slide has too much on it. [Validation](./validation) catches most of these cases before you present.

## Linking to a slide

The address bar tracks the current slide as `#N`, for example `my-talk/index.html#12`. Reloading the page keeps you on the same slide, and you can send someone a link that opens a specific slide.

Changing slides doesn't add browser history entries, so the browser's Back button (or a phone's back gesture) leaves the deck instead of stepping back one slide at a time. Use `P` and `N` for slide history.

## Break mode

Press `B` to hide the presentation from your audience while you take a break. The timer pauses automatically. Press `B` again to resume.

While break mode is active you still see your current slide and notes in speaker view.

Set a custom break screen image when you render:

```bash
java -jar md-slides.jar render my-talk --break-screen ./images/break.png
```

Or set it once in your project config (`.mdslides/config.json`, see [Configuration](./configuration)):

```json
{ "breakScreen": "images/break.png" }
```

The path is relative to your deck (or the folder you run the command in), and the image is copied into the output.

## Goto

Press `G` (or tap the slide counter), type a slide number, then press `Enter`. Or pick the slide from the list of titles. Useful during Q&A when someone asks to revisit a specific slide. The timer pauses while goto is open, and goto is unavailable during break mode.

## History navigation

MD-Slides records your full navigation path — not just the slide sequence.

- `P` — back through your navigation history
- `N` — forward through history, or next slide if there is no forward history

History navigation is useful for non-linear Q&A sessions where you jump between slides out of order.

## Timer

The elapsed timer starts on your first navigation, not on page load.

- `T` — pause or resume without entering break mode
- `R` — reset to 00:00:00 (useful when rehearsing)

Display the live timer value on slides using the `{{timer}}` token in a `header:` or `footer:` frontmatter key.

## Fullscreen

Press `F`, or use the fullscreen button beside the slide counter. Your browser's own fullscreen works too:

- **Windows / Linux:** `F11`
- **macOS:** `Ctrl + Cmd + F`

All MD-Slides shortcuts continue to work in fullscreen mode. The fullscreen button is hidden where the browser doesn't support fullscreen, as on iPhone.

**Browsers:** tested in desktop Chrome and in Chrome's phone emulation. Speaker view sync needs both windows in the same browser.
