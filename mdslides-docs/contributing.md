---
sidebar_position: 11
title: Contributing
---

# Contributing

Contributions are welcome. MD-Slides is built with Scala 3 and Mill.

## Building from source

**Requirements:** Java 11+, Mill 0.11.6.

```bash
# Install Mill (macOS/Linux)
curl -L https://github.com/com-lihaoyi/mill/releases/download/0.11.6/0.11.6 > mill
chmod +x mill && sudo mv mill /usr/local/bin/mill

# Clone and build
git clone https://github.com/TJMSolns/MD-Slides.git
cd MD-Slides

mill __.compile
mill __.test

# Build the standalone JAR
mill cli.assembly
# → out/cli/assembly.dest/out.jar
```

## Architecture

MD-Slides is a three-module Mill project. Dependencies flow in one direction only: `cli → infrastructure → domain`.

```
┌─────────────────────────────────────────────────────┐
│  cli                                                │
│  Cats Effect IOApp · Decline argument parsing       │
│  Wires modules. Contains no business logic.         │
└───────────────────────────┬─────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────┐
│  infrastructure                                     │
│  Markdown parser (Flexmark anticorruption layer)    │
│  HTML renderer (Scalatags)                          │
│  Theme loader (Circe) · Asset copier (os-lib)       │
└───────────────────────────┬─────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────┐
│  domain                                             │
│  Pure functions — no I/O, no side effects           │
│  Slide · SlideDeck · Template · Theme               │
│  Validation pipeline · Error accumulation           │
└─────────────────────────────────────────────────────┘
```

**Domain layer** — pure Scala 3. Opaque types, smart constructors, `Either[NonEmptyList[ValidationError], A]` for error accumulation. No `cats-effect`, no file I/O, no knowledge of HTML or Markdown.

**Infrastructure layer** — all I/O lives here. Third-party libraries (Flexmark, Circe) are wrapped behind domain-facing interfaces so they never leak into domain types.

**CLI layer** — thin: parse arguments, call infrastructure, handle errors, exit with the correct code.

## Technology stack

| Dependency | Purpose |
|-----------|---------|
| Scala 3.3.1 LTS | Language |
| Mill 0.11.6 | Build tool |
| Cats Core 2.10.0 | Functional primitives (`Either`, `NonEmptyList`) |
| Cats Effect 3.5.4 | Effect system for I/O |
| Decline 2.4.1 | CLI argument parsing |
| Flexmark 0.64.8 | Markdown parsing |
| Scalatags 0.12.0 | Type-safe HTML generation |
| Circe 0.14.6 | JSON (theme files) |
| os-lib 0.9.3 | File I/O |
| MUnit 0.7.29 | Test framework |
| ScalaCheck 1.17.0 | Property-based testing |

## Guidelines

- Keep the domain layer pure — no I/O, no third-party types leaking in.
- Wrap all external library types behind domain-facing interfaces in the infrastructure layer.
- New templates and themes should follow existing patterns; see `docs/decisions/` for the design rationale.
- Read [CONTRIBUTING.md](https://github.com/TJMSolns/MD-Slides/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/TJMSolns/MD-Slides/blob/main/CODE_OF_CONDUCT.md) before opening a PR.
