---
sidebar_position: 6
title: Configuration
---

# Configuration

MD-Slides applies configuration in priority order — highest wins:

1. **CLI flags** — `--theme dark`
2. **Project config** — `.mdslides/config.json` committed with your repo
3. **Global config** — `~/.mdslides/config.json` for personal preferences
4. **Built-in defaults**

## Project config

Commit `.mdslides/config.json` to set defaults for everyone working on a deck:

```json
{
  "theme": "dark",
  "outputDir": "dist"
}
```

## Global config

`~/.mdslides/config.json` applies to all decks on your machine — useful for your personal theme preference:

```json
{
  "theme": "light"
}
```

## Viewing active config

```bash
mdslides config
```

Prints the resolved configuration showing which value came from which source.
