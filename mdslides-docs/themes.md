---
sidebar_position: 7
title: Themes
---

# Themes

## Built-in themes

```bash
java -jar md-slides.jar render my-talk --theme light   # default
java -jar md-slides.jar render my-talk --theme dark
```

**light** — white background, dark text, blue accents. Clean and professional for most venues.

**dark** — dark background, light text, teal accents. High contrast for dark rooms and screen sharing.

Both built-in themes pass WCAG 2.1 AA contrast requirements.

## Custom themes

Create a JSON file and pass its path as the `--theme` argument:

```bash
java -jar md-slides.jar render my-talk --theme ./themes/mytheme/theme.json
```

Only include keys you want to change — everything else falls back to built-in defaults.

### Full theme schema

```json
{
  "name": "mytheme",
  "version": "1.0.0",
  "background": { "color": "#ffffff" },
  "colors": {
    "text": "#333333",
    "heading": "#000000",
    "accent": "#0066cc",
    "link": "#0066cc",
    "linkHover": "#0044aa",
    "codeBackground": "#f5f5f5",
    "codeText": "#333333"
  },
  "fonts": {
    "body": "Arial, sans-serif",
    "heading": "Arial, sans-serif",
    "code": "monospace"
  },
  "spacing": {
    "slideMargin": "2rem",
    "headingMargin": "1rem 0",
    "paragraphMargin": "0.5rem 0",
    "lineHeight": "1.6"
  },
  "syntax": {
    "keyword": "#0000ff",
    "string": "#00aa00",
    "comment": "#888888",
    "function": "#aa00aa",
    "number": "#aa5500",
    "operator": "#333333"
  },
  "slideCounter": {
    "color": "#666666",
    "background": "rgba(255,255,255,0.9)",
    "fontSize": "0.9rem"
  },
  "breakScreen": "images/break.png"
}
```

## Background configuration

Backgrounds follow a priority order — higher wins:

1. **Per-slide frontmatter** — `background: images/emphasis.jpg` in the slide frontmatter
2. **Per-template JSON** — `templateConfigurations` in the theme JSON
3. **Deck-wide theme** — `"background": { "color": "#1e1e1e" }` in the theme JSON
4. **None**

For a full-bleed image: `"background": { "image": "images/deck-bg.jpg" }`.

## Per-template configuration

Give specific templates a distinct visual identity without per-slide frontmatter — useful for `section-title` and `closing` slides:

```json
{
  "templateConfigurations": [
    {
      "template": "section-title",
      "background": { "image": "images/section-bg.png" },
      "header": "{{pageNumber}} / {{totalPages}}"
    },
    {
      "template": "closing",
      "background": { "color": "#111111" }
    }
  ]
}
```

| Key | Effect |
|-----|--------|
| `template` | Which slide type this applies to |
| `background` | Color or image for this template |
| `header` | Default header text with token support |
| `footer` | Default footer text with token support |

Every slide of the specified type gets this configuration automatically.

## Setting a default theme

Commit a project config so everyone rendering the deck uses the same theme without passing `--theme` each time:

```json
{ "theme": "dark" }
```

Save as `.mdslides/config.json` in the same directory as your deck. See [Configuration](./configuration).
