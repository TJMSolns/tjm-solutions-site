---
sidebar_position: 2
title: Installation
---

# Installation

## Requirements

- **Java 11 or higher** — Java 17+ recommended. Check with `java -version`.
- No other dependencies required.

## Download the JAR

```bash
curl -L https://github.com/TJMSolns/MD-Slides/releases/latest/download/md-slides.jar -o md-slides.jar
```

Or download directly from the [GitHub releases page](https://github.com/TJMSolns/MD-Slides/releases/latest).

## Make it convenient

The simplest setup is an alias:

```bash
# Add to ~/.bashrc or ~/.zshrc
alias mdslides='java -jar /path/to/md-slides.jar'
```

Or create a wrapper script and put it on your PATH:

```bash
#!/bin/bash
java -jar /usr/local/lib/md-slides.jar "$@"
```

**Windows** — create `mdslides.bat`:

```batch
@echo off
java -jar C:\path\to\md-slides.jar %*
```

## Verify the installation

```bash
mdslides --help
```

You should see the command list. Then test with a render:

```bash
java -jar md-slides.jar render my-talk --theme light
```

## Upgrading

Download the new JAR and replace the old one. Check [CHANGELOG.md](https://github.com/TJMSolns/MD-Slides/blob/main/CHANGELOG.md) for breaking changes before upgrading.

## Uninstalling

Delete the JAR and any wrapper script or alias you created. MD-Slides creates no global state other than `~/.mdslides/config.json` if you set a global config.
