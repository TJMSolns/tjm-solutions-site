# tjm-solutions-site — Context Kernel

## Status

**Dormancy decision (POL-009):** active — 2026-05-28, restated GL-032 (2026-07-22). The original gate cited here (PDR-001's "≥3 battle-tested offers per card") was **retired by PDR-008 / DR-034 on 2026-06-26** — offers are listable when complete AND credibility-backed. WQ-005/006/007 are implementation-complete. The live gate on this queue is no longer offer-readiness but the Done-transition backlog (see WQ-048) and WQ-045's PDR-008-vs-WQ-042 reconciliation.

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
- **Medium-parity invariant (WQ-027, Tony directive 2026-06-10):** `/articles` must be a **superset** of https://tmoores.medium.com/ — every Medium article must exist on the site (site-only articles are fine; the reverse is not required). Check at every parity-relevant session: diff the Medium index (sitemap + profile page — the sitemap can lag recent posts) against `blog/*.mdx` canonicals; queue one WQ item per missing article
- No Docusaurus swizzle — prefer CSS variable overrides in `custom.css`
- Dark mode overrides: use `[data-theme='dark'] .className` in CSS modules, never `@media (prefers-color-scheme: dark)`

## Tech Stack

- Docusaurus 3 (TypeScript)
- React (JSX/TSX) for custom pages
- Blog plugin at `/articles` (docs plugin disabled)
- Brand colors: Red `#c00000`, Dark Gray `#1f1f20`
- Deploy: `npm run deploy` → `gh-pages` branch

## Active Priorities

_Refreshed GL-032 (2026-07-22) — the two prior entries were stale: "fill in 4 stub pre-2026 articles" closed as WQ-001 on 2026-05-16, and the FP series is at Part 20, not "Parts 2–11 in progress"._

1. **Clear the Done-transition backlog (WQ-048)** — 14 implementation-complete items are stuck behind ESC-001. The `verifier` agent type spawned successfully on 2026-07-22, so the blocker's stated cause no longer holds in this environment.
2. **Resolve WQ-045** (Tony) — PDR-008 credibility-backing vs. WQ-042's site-wide removal. Root blocker under WQ-016; open 51+ sessions.
3. **Hold Medium parity** — restored 2026-07-22 (3 gap articles added). Re-check every parity-relevant session per the non-negotiable below.
4. Continue "Functional Programming Isn't Just for Academics" — Part 20 is the latest on-site; new parts land via the Medium-parity check.

## Tag Taxonomy (use exactly)

`functional-programming`, `architecture`, `digital-commerce`, `strategy`, `ai`, `microservices`, `agentic-commerce`

_(`agentic-commerce` added GL-032 — it was already in `CLAUDE.md`'s taxonomy and in active use across `blog/*.mdx`, but missing from this list. Verified: the 7 tags above are exactly the set in use.)_
