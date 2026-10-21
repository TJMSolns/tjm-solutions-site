---
sidebar_position: 9
title: Validation
---

# Validation

MD-Slides checks every slide before it writes anything, and reports every problem in one pass — you see them all at once, not one per render.

Problems come in two kinds:

- **Errors** stop the render. Fix them and render again.
- **Warnings** are reported, and the presentation is still written. When there are errors too, the warnings
  are listed after them, so one render shows you everything.

```
✗ Validation failed with 4 problem(s):
  - Slide 3: Structure Error - Required slot 'heading' is missing
  - Slide 3: Structure Error - Required slot 'body' is missing
  - Slide 4: Unknown template 'bogus'. Valid templates: title, content, diagram, closing, section-title, two-column
  - Slide 5: image file 'images/lamp.png' does not exist (looked for images/lamp.png)
```

```
✓ Validation passed with 1 warning(s):
  - Slide 2: Density Warning in 'body' slot - Content exceeds recommended line limit (actual: 17, guidance: reduce to 12 lines for readability)
```

## Errors

- A required slot is missing (for example a `content` slide with no `##` heading)
- An unknown template name
- A `two-column` slide without exactly one `---column---` line
- An image without alt text — `![](photo.png)` is reported with its slide and path; write `![what the photo shows](photo.png)`
- An image file that doesn't exist

## Warnings

**Density** — guidance for what an audience can read:

| Template | Heading | Body |
|----------|---------|------|
| `title` | — | Title ≤ 2 lines, subtitle ≤ 2 lines, author ≤ 80 chars |
| `content` | ≤ 80 chars | ≤ 12 lines, ≤ 150 words |
| `section-title` | ≤ 80 chars | ≤ 12 lines, ≤ 150 words |
| `two-column` | ≤ 80 chars | Each column ≤ 10 lines, ≤ 75 words |
| `closing` | ≤ 80 chars | ≤ 12 lines, ≤ 150 words |

Code blocks don't count toward the 12-line body limit.

**Theme contrast (WCAG 2.1 AA)** — the theme's text, heading, link and accent colours must reach 4.5:1 against its background. All built-in themes pass. A custom theme that doesn't is reported, and the presentation is still written.

## Accessibility flags

```bash
# Skip the theme contrast check (structure, density and alt-text checks still run)
java -jar md-slides.jar render my-talk --skip-accessibility

# Write the accessibility results to a JSON file (useful in CI)
java -jar md-slides.jar render my-talk --accessibility-report report.json
```

## Why all problems at once?

Stopping at the first problem means a loop: fix, render, find the next one, fix, render. Showing everything at once respects your time. The domain model uses `Either[NonEmptyList[ValidationError], SlideDeck]` — errors accumulate rather than short-circuit.

## Why density guidance?

Dense slides are the most common presentation failure — content that looks fine in an editor is unreadable on a projector. MD-Slides flags them at render time so you catch the problem before you're in front of an audience. On screens where a slide still doesn't fit, it is [scaled to fit](./navigation#fit-to-the-screen). If you keep hitting the guidance, that's usually a signal to split the slide.
