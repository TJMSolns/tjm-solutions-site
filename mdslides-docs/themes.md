---
sidebar_position: 7
title: Themes
---

# Themes

## Built-in themes

```bash
java -jar md-slides.jar render my-talk --theme light   # default
java -jar md-slides.jar render my-talk --theme dark
java -jar md-slides.jar render my-talk --theme corporate
```

**light** — white background, dark text, blue accents. Clean and professional for most venues.

**dark** — dark background, light text, teal accents. High contrast for dark rooms and screen sharing.

**corporate** — light grey background, dark text, blue accents.

All three pass WCAG 2.1 AA contrast requirements.

## Custom themes

A custom theme is a folder containing a `theme.json`. MD-Slides looks for it by name in `./themes` (relative to where you run the command), or in the folder set by `paths.themesDir` in your [global config](./configuration):

```
themes/
  mytheme/
    theme.json
    images/          ← optional: background images used by the theme
```

```bash
java -jar md-slides.jar render my-talk --theme mytheme
```

Every section of the schema below is required; a theme with missing sections is rejected. Copy it and change what you need.

### Theme schema

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

## Background images

Add an image to the deck-wide background, and per-template images with `templateBackgrounds`:

```json
{
  "background": { "color": "#1e1e1e", "image": "images/deck-bg.jpg" },
  "templateBackgrounds": {
    "section-title": "images/section.png",
    "closing": "images/closing.png"
  }
}
```

Image paths are relative to the theme folder (`themes/mytheme/images/deck-bg.jpg`). They are copied into your output when you render.

Backgrounds follow a priority order — higher wins:

1. **Per-slide frontmatter** — `background: images/emphasis.jpg` in the slide (see [Writing Slides](./writing-slides))
2. **Per-template** — `templateBackgrounds` in the theme
3. **Deck-wide** — `background` in the theme

## Per-template configuration

Give a template its own header, footer, alignment or colours with `templateConfig`, keyed by template name:

```json
{
  "templateConfig": {
    "section-title": {
      "header": "{{pageNumber}} / {{totalPages}}",
      "verticalAlign": "top"
    },
    "closing": {
      "footer": "{{title}} · {{date}}",
      "colors": { "heading": "#c00000" }
    }
  }
}
```

| Key | Effect |
|-----|--------|
| `header` | Header text, with [tokens](./writing-slides#header-and-footer-tokens) |
| `footer` | Footer text, with tokens |
| `verticalAlign` | `top`, `center` or `bottom` |
| `colors` | Any of `heading`, `subtitle`, `body`, `author` |

Every slide of that template gets this configuration automatically. Per-slide frontmatter still wins for a single slide.

## Setting a default theme

Commit a project config so everyone rendering the deck uses the same theme without passing `--theme` each time:

```json
{ "theme": "dark" }
```

Save as `.mdslides/config.json` in the same directory as your deck. See [Configuration](./configuration).
