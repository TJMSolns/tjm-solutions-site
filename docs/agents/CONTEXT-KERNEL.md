# tjm-solutions-site — Context Kernel

## Status

**Dormancy decision (POL-009):** active — 2026-05-28, restated GL-032 (2026-07-22). The original gate cited here (PDR-001's "≥3 battle-tested offers per card") was **retired by PDR-008 / DR-034 on 2026-06-26** — offers are listable when complete AND credibility-backed. WQ-005/006/007 are implementation-complete. **Refreshed GL-033 (2026-08-18):** the Done-transition backlog is no longer the live gate — WQ-048 is 13/14 complete, with only WQ-031 outstanding and that only because it is held for Tony's visual review. The live gates are now (a) **WQ-056**, a live WCAG AA breach on production, which contradicts a stated non-negotiable, and (b) **WQ-045's PDR-008-vs-WQ-042 reconciliation**, unchanged and still Tony's call.

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

_Refreshed GL-033 (2026-08-18). The prior list led with WQ-048, which is now 13/14 done, and described the
FP series as being at Part 20 — it is at Part 23._

1. **Fix WQ-056 — 238 live WCAG2AA failures on production.** Syntax-highlight token contrast, 233 in light
   theme and 5 in dark, across 8 pages, all from four shared Prism tokens. Confirmed against the live site
   2026-08-18. This directly breaches the WCAG AA non-negotiable below and POL-002, and it is the only open
   item actively affecting visitors. Pre-existing (content unchanged since 2026-05-16), not a regression.
2. **Close WQ-051 behind it** — the accessibility gate covers 4 of 74 pages in one theme, which is why
   WQ-056 went unseen. Strategy decided in POL-003/DR-003; **note POL-003's evidence is still
   `Verifier-verdict: PENDING` and Tony has not ratified it.**
3. **Resolve WQ-045** (Tony) — PDR-008 credibility-backing vs WQ-042's site-wide removal. Open 51+ sessions.
   21 of 22 live offer pages currently carry no credibility content while PDR-008 says they must to be
   listable. Unchanged from the previous list; still the longest-standing open decision.
4. **Hold Medium parity** — restored 2026-08-18 (Parts 21–23 added). **Procedure correction: the Medium
   sitemap alone is insufficient.** Part 21 was three weeks old and absent from `sitemap.xml`; only the RSS
   feed carried it. Article and profile pages return 403 to automated fetch, but `/feed` returns 200 with
   full `content:encoded` bodies. Check **sitemap ∪ RSS**.
5. **Close out the implementation-complete items** — WQ-046 (typecheck fixed, shipped) and WQ-053 (Rule 4
   added to org methodology) both need evidence artifacts and verifier PASSes before they can move to Done.

## Tag Taxonomy (use exactly)

`functional-programming`, `architecture`, `digital-commerce`, `strategy`, `ai`, `microservices`, `agentic-commerce`

_(`agentic-commerce` added GL-032 — it was already in `CLAUDE.md`'s taxonomy and in active use across `blog/*.mdx`, but missing from this list. Verified: the 7 tags above are exactly the set in use.)_
