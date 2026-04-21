# Ingest Article

Ingest a new article into the TJM Solutions site blog at `/articles`.

## What to ask for

Ask for one of:
1. A Medium article URL (e.g. `https://tmoores.medium.com/...`)
2. A path to an existing `.md` or `.mdx` file

## Steps

### If given a Medium URL
1. Fetch the article content from the URL using WebFetch
2. Extract: title, subtitle/description, publication date, full body text
3. Identify whether the article belongs to the FP series ("Functional Programming Isn't Just for Academics")
   — look for "Part N" in the subtitle or opening line

### For all sources, create the blog file

**Filename:** `blog/YYYY-MM-DD-slug.mdx`
- Use `.mdx` (not `.md`) to support the `<head>` canonical block
- Slug: lowercase, hyphens, no special chars, max 60 chars

**Required frontmatter:**
```yaml
---
title: "Article Title"
description: "One sentence subtitle or description"
date: YYYY-MM-DD
authors: [tony]
tags: [tag1, tag2]     # match existing taxonomy (see below)
image: /img/...        # reuse closest match from /static/img/
series: "..."          # if part of a series
series_part: N         # if numbered in a series (omit for series intro articles)
---
```

**After frontmatter, add the canonical head block:**
```mdx
<head>
  <link rel="canonical" href="https://tmoores.medium.com/..." />
</head>
```

**Add `<!-- truncate -->` after the first 1–2 paragraph intro**, before the rest of the content.

### Tag taxonomy (use these exactly)
- `functional-programming` — FP series, Scala, immutability, pure functions
- `architecture` — system design, patterns, microservices
- `digital-commerce` — commerce platforms, headless, checkout
- `strategy` — business alignment, decision-making, tradeoffs
- `ai` — LLMs, agentic systems, automation
- `microservices` — distributed systems, service decomposition

### FP series reference
The series "Functional Programming Isn't Just for Academics" has these parts:
- Intro (no part number): 2026-01-04
- Part 2–11: 2026-01-11 through 2026-03-15

If the new article continues this series, determine the next part number and add `series_part: N`.

### Verification
After creating the file, run `npm run build` to confirm no broken links or build errors.
