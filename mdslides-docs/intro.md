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
# 1. Download the latest release JAR
curl -L https://github.com/TJMSolns/MD-Slides/releases/latest/download/md-slides.jar -o md-slides.jar

# 2. Render a presentation
java -jar md-slides.jar render my-talk --theme light

# 3. Open in your browser
open my-talk/index.html          # macOS
xdg-open my-talk/index.html     # Linux
start my-talk/index.html         # Windows
```

`my-talk.md` is your Markdown source; `my-talk/` is the generated output directory containing `index.html` and all copied assets.

## What makes MD-Slides different

- **Structured** — templates enforce slide layout; density constraints mean your audience can actually read the slides.
- **Validated** — all errors reported together in one pass, not one at a time.
- **Speaker-ready** — synchronized speaker view with notes, next-slide preview, and elapsed timer.
- **Zero friction** — one JAR, Java 11+. No account, no cloud, no build step for users.
- **Themeable** — built-in light and dark themes, plus a JSON schema for custom themes.

## Commands

| Command | Description |
|---------|-------------|
| `render DECK_NAME [options]` | Convert Markdown to HTML |
| `display DECK_NAME` | Open presentation in browser |
| `report DECK_NAME` | Show session analytics |
| `config` | Show active configuration |
| `DECK_NAME` | Smart default: report → render → display |
