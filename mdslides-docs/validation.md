---
sidebar_position: 9
title: Validation
---

# Validation

MD-Slides validates every slide before rendering. All errors are collected and reported together — you see every problem in one pass, not one at a time. No output is written until every slide passes.

```
✗ Validation failed:
  - Slide 3: body exceeds max 12 lines (has 17)
  - Slide 5: heading exceeds max 80 characters (has 94)
  - Slide 7: image is missing alt text
  - Slide 12: two-column left exceeds max 10 lines (has 13)
```

Fix them all, then re-render.

## What gets validated

**Structure:** required slots present, template declared, frontmatter well-formed, `two-column` has exactly one `---column---`.

**Density:**

| Template | Heading | Body |
|----------|---------|------|
| `title` | — | Title ≤ 2 lines, subtitle ≤ 2 lines, author ≤ 80 chars |
| `content` | ≤ 80 chars | ≤ 12 lines, ≤ 150 words |
| `section-title` | ≤ 80 chars | ≤ 12 lines, ≤ 150 words |
| `two-column` | ≤ 80 chars | Each column ≤ 10 lines, ≤ 75 words |
| `closing` | ≤ 80 chars | ≤ 12 lines, ≤ 150 words |

**Accessibility (WCAG 2.1 AA):**
- Images must have alt text
- Text/background contrast ratios must meet 4.5:1 minimum

## Accessibility flags

```bash
# Skip WCAG contrast checks (structural and density validation still runs)
java -jar md-slides.jar render my-talk --skip-accessibility

# Write validation results to a JSON file (useful in CI)
java -jar md-slides.jar render my-talk --accessibility-report report.json
```

## Why all errors at once?

Stopping at the first error means a loop: fix, render, find next error, fix, render. Showing everything at once respects your time. The domain model uses `Either[NonEmptyList[ValidationError], SlideDeck]` — errors accumulate rather than short-circuit. An empty error list is a type-level impossibility.

## Why density limits?

Dense slides are the most common presentation failure mode — content that looks fine in an editor is unreadable on a projector. MD-Slides enforces limits at render time so you catch the problem before you're standing in front of an audience. If you find yourself fighting the limits, that's usually a signal to split the slide.
