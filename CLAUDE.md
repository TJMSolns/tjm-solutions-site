# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run start        # Dev server with hot reload at localhost:3000
npm run build        # Production build to build/
npm run serve        # Preview production build locally
npm run typecheck    # TypeScript validation (tsc)
npm run clear        # Clear Docusaurus cache (use when builds behave strangely)
npm run wcag         # Full WCAG2AA accessibility check (spins up server + runs pa11y)
npm run wcag:check   # pa11y only (requires server already running on port 3000)
npm run deploy       # Build and push to gh-pages branch (USE_SSH=true or GIT_USER=<user>)
```

## Architecture

The site uses the Docusaurus blog plugin (served at `/articles`) for full article content, plus custom React pages for all other sections. Docs plugin remains disabled.

**Articles** (`blog/`): MDX files with filename format `YYYY-MM-DD-slug.mdx`. The blog plugin serves them at `/articles/{slug}` and lists all of them at `/articles`. New articles go here, not in `src/pages/`.

**Pages** (`src/pages/`): Each page is a `<name>.tsx` + `<name>.module.css` pair. Every page must wrap its content in `<Layout>` from `@theme/Layout` to get the navbar and footer. Export the page component as the default export returning `ReactNode`.

**Components** (`src/components/`): Shared React components used across pages.

**Global styles** (`src/css/custom.css`): Infima CSS variable overrides. Brand colors: Red `#c00000`, Dark Gray `#1f1f20`.

**Config** (`docusaurus.config.ts`): Single source of truth for site metadata, navbar items, footer links, and deployment settings (deploys to `https://www.tjm.solutions` via `gh-pages` branch on `TJMSolns/tjm-solutions-site`).

## CSS / Dark Mode Rules

- **Global theme variables**: Override `--ifm-*` variables in `:root` (light) and `[data-theme='dark']` (dark) in `custom.css`.
- **CSS Modules**: Use `[data-theme='dark'] .className` for dark-mode overrides — **never** `@media (prefers-color-scheme: dark)` inside modules.
- **WCAG contrast**: Minimum 4.5:1 for body text. Run `npm run wcag` to verify before deploying.

## Writing Articles

Use `.mdx` (preferred) or `.md` for new articles. Filename: `blog/YYYY-MM-DD-slug.mdx`.

**MDX article (canonical via `<head>` block):**
```mdx
---
title: "Title"
description: "One sentence description"
date: YYYY-MM-DD
authors: [tony]          # defined in blog/authors.yml
tags: [tag1, tag2]
image: /img/image.jpg
series: "Series Name"    # optional
series_part: 4           # optional, omit for series intro articles
---

<head>
  <link rel="canonical" href="https://tmoores.medium.com/..." />
</head>

Opening paragraph(s) shown on the listing page.

<!-- truncate -->

Rest of article content...
```

**Plain `.md` article (canonical via frontmatter):**
```yaml
canonical: https://tmoores.medium.com/...
```
The `src/theme/BlogPostPage/index.tsx` wrapper injects this as a `<link rel="canonical">` head tag automatically. No JSX needed.

**Tag taxonomy** (use these exactly): `functional-programming`, `architecture`, `digital-commerce`, `strategy`, `ai`, `microservices`

**Series:** "Functional Programming Isn't Just for Academics" — Parts 2–11 currently in `blog/`. Add `series:` + `series_part:` frontmatter to any new articles that continue it.

- Mermaid diagrams: fenced code blocks with ` ```mermaid `
- Math/LaTeX: inline `$...$`, block `$$...$$` (KaTeX)
- The 4 older articles (pre-2026) are stubs — add content and `<!-- truncate -->` marker when filling them in.
- Use `/ingest-article` slash command to add new Medium articles with proper frontmatter.
- Use `/reorganize-articles` to audit tag consistency and series coverage.

## Key Constraints

- `onBrokenLinks: 'throw'` — broken internal links fail the build. Fix immediately.
- Node.js ≥ 20.0 required.
- Prefer CSS variable overrides in `custom.css` over `yarn swizzle` (swizzling ejects theme components and creates long-term maintenance burden).
- Import path aliases: `@site/` → project root, `@theme/` → Docusaurus theme components.
- SVG imports: `require('@site/static/img/file.svg').default` for use as React components.
