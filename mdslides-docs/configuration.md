---
sidebar_position: 8
title: Configuration
---

# Configuration

MD-Slides applies configuration in priority order — highest wins:

1. **CLI flags** — `--theme dark`
2. **Project config** — `.mdslides/config.json` committed with your deck
3. **Global config** — `~/.mdslides/config.json` for personal preferences
4. **Built-in defaults** — `light` theme, images copied, accessibility checks on

## Project config

Commit `.mdslides/config.json` next to your deck to set defaults for everyone working on it. MD-Slides also finds it in a parent folder.

```json
{
  "theme": "dark",
  "outputDir": "dist",
  "footer": "{{title}} · {{pageNumber}} / {{totalPages}}",
  "breakScreen": "images/break.png"
}
```

| Field | Meaning |
|-------|---------|
| `theme` | Theme name (see [Themes](./themes)) |
| `outputDir` | Where the rendered presentation goes |
| `copyImages` | `false` to skip copying images |
| `skipAccessibility` | `true` to skip the theme contrast check |
| `accessibilityReportPath` | Write the accessibility report to this file |
| `header`, `footer` | Deck-wide header and footer, with [tokens](./writing-slides#header-and-footer-tokens) |
| `breakScreen` | Image shown in [break mode](./navigation#break-mode) |

Unknown fields are rejected, so typos are caught.

## Global config

`~/.mdslides/config.json` applies to all decks on your machine. Settings go under `defaults`; `paths.themesDir` points at a folder of your own themes:

```json
{
  "defaults": {
    "theme": "light"
  },
  "paths": {
    "themesDir": "/home/me/slides/themes"
  }
}
```

The global file accepts `defaults` (`theme` is required there; also `copyImages`, `skipAccessibility`, `breakScreen`), `author`, and `paths`. Unknown fields are rejected: a top-level `"theme"` is reported as an unknown field and ignored.

## Viewing active config

```bash
java -jar md-slides.jar config
```

Shows each config file, whether it was found, the settings it contributes, and the priority order.
