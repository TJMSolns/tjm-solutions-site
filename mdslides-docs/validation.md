---
sidebar_position: 7
title: Validation
---

# Validation

MD-Slides validates every slide before rendering. All errors are collected and reported together — you see every problem in one pass, not one at a time.

```
✗ Validation failed:
  - Slide 3: body exceeds max 12 lines (has 17)
  - Slide 5: heading exceeds max 80 characters (has 94)
  - Slide 7: image is missing alt text
```

Fix them all, then re-render.

## Constraints by template

### `title`

| Slot | Constraint |
|------|-----------|
| Title | Max 2 lines |
| Subtitle | Max 2 lines |
| Author | Max 80 characters |

### `content`

| Slot | Constraint |
|------|-----------|
| Heading | Max 80 characters |
| Body | Max 12 lines, max 150 words |

## Why constraints?

Dense slides are the most common presentation failure mode — content that looks fine in an editor is unreadable on a projector. MD-Slides enforces limits at render time so you catch the problem before you're standing in front of an audience.

The constraints are intentionally strict. If you find yourself fighting them, that's usually a signal to split the slide, not loosen the limit.
