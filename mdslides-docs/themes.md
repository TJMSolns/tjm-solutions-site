---
sidebar_position: 5
title: Themes
---

# Themes

## Built-in themes

```bash
mdslides render my-talk --theme light   # default
mdslides render my-talk --theme dark
```

## Custom themes

Create a JSON file and pass its path as the `--theme` argument:

```bash
mdslides render my-talk --theme ./themes/mytheme/theme.json
```

### Minimal theme schema

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
  }
}
```

Per-template background images are also supported — see the [PDR-013 theme architecture decision](https://github.com/TJMSolns/MD-Slides/blob/main/docs/decisions/pdr/PDR-013-directory-based-theme-architecture.md) for the full schema.

## Setting a default theme

Set your preferred theme in your project or global config so you don't need to pass `--theme` every time. See [Configuration](./configuration).
