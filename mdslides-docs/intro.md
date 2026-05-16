---
sidebar_position: 1
title: Introduction
---

# MD-Slides

**Markdown to HTML presentations — structured, validated, and speaker-ready.**

MD-Slides converts structured Markdown files into self-contained HTML presentations with keyboard navigation, speaker view, syntax-highlighted code blocks, and a flexible theme system. Write slides in plain text; present anywhere a browser runs.

## Quick start

**Requirements:** Java 11 or higher.

```bash
# Download the JAR and the feature tour (a 45-slide demo of every feature)
curl -L https://github.com/TJMSolns/MD-Slides/releases/latest/download/md-slides.jar -o md-slides.jar
curl -L https://github.com/TJMSolns/MD-Slides/releases/latest/download/feature-tour.md -o feature-tour.md

# Render and open
java -jar md-slides.jar render feature-tour --theme dark
open feature-tour/index.html          # macOS
xdg-open feature-tour/index.html     # Linux
start feature-tour/index.html         # Windows
```

Press **S** to open speaker view — every slide in the feature tour has speaker notes. The tour exercises all six templates, every content type, images, tables, two-column layouts, themes, and the full validation ruleset. It's the fastest way to see what MD-Slides can do.

### Writing your own slides

```bash
java -jar md-slides.jar render my-talk --theme light
```

`my-talk/` is a self-contained output directory — `index.html`, `speaker.html`, and all copied assets. See [Writing Slides](./writing-slides) for the full format.

## What MD-Slides does

- **Six templates** — `title`, `content`, `section-title`, `two-column`, `diagram`, `closing` — each with enforced layout and density constraints
- **Validated** — all structure, density, and accessibility errors collected and reported together in one pass
- **Speaker-ready** — synchronized speaker view with notes, next-slide preview, and elapsed timer
- **Full keyboard navigation** — arrows, break mode, goto, history, timer controls
- **Session analytics** — `display` logs every navigation event; `report` shows per-slide timing and path
- **Themeable** — built-in light and dark themes; custom themes via JSON with per-template configuration
- **Self-contained output** — one directory, works without a server; share by zip, deploy to GitHub Pages, or print to PDF
- **Zero friction** — one JAR, Java 11+. No account, no cloud, no build step for users

## Commands

| Command | Description |
|---------|-------------|
| `render DECK_NAME [options]` | Convert Markdown to HTML |
| `display DECK_NAME` | Render with session logging |
| `report DECK_NAME` | Show session analytics |
| `config` | Show active configuration |
| `DECK_NAME` | Smart default: render or display based on context |
