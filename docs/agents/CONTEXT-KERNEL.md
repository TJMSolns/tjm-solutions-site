# tjm-solutions-site — Context Kernel

## Status

**Dormancy decision (POL-009):** active — gated by WQ-P4-011 revenue chain — 2026-05-28 — Site offer cards (WQ-005/006/007) require ≥3 battle-tested offers per PDR-001; bandwidth on DT-2 engagement.

---

## Charter

**Mission:** To support TJM Solutions LLC's commercial growth by providing the corporate website that establishes market presence, publishes thought leadership (including the FP series), and presents TJM's packaged offers to prospective clients.

## What This Is

TJM Solutions LLC corporate website. Built on Docusaurus 3, deployed to GitHub Pages at
https://www.tjm.solutions via the `gh-pages` branch on `TJMSolns/tjm-solutions-site`.

## Current Phase

**Live — ongoing content and maintenance.** Site serves as the primary marketing and
thought leadership channel.

## Non-Negotiables

- WCAG AA compliance on all pages — run `npm run wcag` before every deploy
- No broken internal links — `onBrokenLinks: 'throw'` is enforced in build; fix immediately
- Node.js ≥ 20.0 required
- All articles must have canonical links back to original Medium publication
- No Docusaurus swizzle — prefer CSS variable overrides in `custom.css`
- Dark mode overrides: use `[data-theme='dark'] .className` in CSS modules, never `@media (prefers-color-scheme: dark)`

## Tech Stack

- Docusaurus 3 (TypeScript)
- React (JSX/TSX) for custom pages
- Blog plugin at `/articles` (docs plugin disabled)
- Brand colors: Red `#c00000`, Dark Gray `#1f1f20`
- Deploy: `npm run deploy` → `gh-pages` branch

## Active Priorities

1. Fill in 4 stub pre-2026 articles (add content + `<!-- truncate -->` markers)
2. Continue "Functional Programming Isn't Just for Academics" series — Parts 2–11 in progress

## Tag Taxonomy (use exactly)

`functional-programming`, `architecture`, `digital-commerce`, `strategy`, `ai`, `microservices`
