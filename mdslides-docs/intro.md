---
sidebar_position: 1
title: Introduction
---

# MD-Slides

**Markdown to HTML presentations — structured, validated, and speaker-ready.**

**[Try the live demo](https://www.tjm.solutions/mdslides/demo/)** — open it on your phone too. It's the feature tour below, rendered with the latest release.

MD-Slides converts structured Markdown files into self-contained HTML presentations with keyboard, clicker, and touch navigation, speaker view, syntax-highlighted code blocks, and a flexible theme system. Write slides in plain text; present anywhere a browser runs, including a phone or tablet.

## Quick start

**Requirements:** Java 11 or higher.

```bash
# Download the JAR and the feature tour (a 51-slide tutorial of every feature)
curl -L https://github.com/TJMSolns/MD-Slides/releases/latest/download/md-slides.jar -o md-slides.jar
curl -L https://github.com/TJMSolns/MD-Slides/releases/latest/download/feature-tour.md -o feature-tour.md

# Render and open
java -jar md-slides.jar render feature-tour --theme dark
open feature-tour/index.html          # macOS
xdg-open feature-tour/index.html     # Linux
start feature-tour/index.html         # Windows
```

Press **S** to open speaker view — every slide in the feature tour has speaker notes. The tour uses every feature, and each feature slide has a **Try it** step, so it doubles as a tutorial. It's the fastest way to see what MD-Slides can do.

### Writing your own slides

```bash
java -jar md-slides.jar render my-talk --theme light
```

`my-talk/` is a self-contained output folder — `index.html`, `speaker.html`, support scripts and copied images. See [Writing Slides](./writing-slides) for the full format.

## What MD-Slides does

- **Six templates** — `title`, `content`, `section-title`, `two-column`, `diagram`, `closing` — each with enforced layout and density constraints
- **Validated** — all structure, density, and accessibility errors collected and reported together in one pass
- **Speaker-ready** — speaker view with notes, the next slide's heading and an elapsed timer, kept in step with the presentation
- **Keyboard, clicker, and touch navigation** — arrows, Page Up/Down, swipe and tap, break mode, goto, history, timer controls, and `#N` links to any slide
- **Fits any screen** — slides scale to fit laptops, projectors, phones, and tablets; wide tables re-wrap instead of overflowing
- **Session analytics** — press **L** to save a session log; `report` shows time per slide, breaks and the path you took
- **Themeable** — built-in light and dark themes; custom themes via JSON with per-template configuration
- **Self-contained output** — one folder, works without a server; share by zip, host on GitHub Pages, or print to PDF (one page per slide)
- **Zero friction** — one JAR, Java 11+. No account, no cloud, no build step for users

## Commands

| Command | Description |
|---------|-------------|
| `render DECK_NAME [options]` | Convert Markdown to HTML |
| `display DECK_NAME` | Open the rendered presentation in your browser |
| `report DECK_NAME [--log FILE]` | Analyse a saved session log |
| `config` | Show active configuration |
| `DECK_NAME` | Smart default: show the last session's report, render if needed, open |
| `--help`, `--version` | Show options or the version |

There is also an MCP server, `mdslides-mcp.jar` on the [releases page](https://github.com/TJMSolns/MD-Slides/releases/latest), so an AI assistant can render and check decks (`render_deck`, `validate_deck`, `list_themes`, `get_deck_info`).
