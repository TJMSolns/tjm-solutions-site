# tjm-solutions-site — Work Queue

---

## Active

| ID | Item | Owner | Status | Depends On |
|----|------|-------|--------|-----------|
| WQ-014 | SEO Group 3: article og:type + BlogPosting JSON-LD via BlogPostPage swizzle [PROPOSED] | Claude | Proposed | — | Add `og:type: article`, `article:published_time`, `article:author` per blog post; add BlogPosting JSON-LD. Requires swizzling `BlogPostPage` theme component — creates maintenance burden, so do intentionally. |
| WQ-002 | Complete remaining parts of FP series | Tony | Queued | — |
| WQ-005 | Enhance Commerce Strategy card: list ≥3 battle-tested CS offers with links | Claude | Blocked | ≥3 CS offers battle-tested — PDR-001 (packaged-offers org) |
| WQ-006 | Enhance Digital Transformation card: list ≥3 battle-tested DT offers with links | Claude | Blocked | ≥3 DT offers battle-tested — PDR-001 (packaged-offers org) |
| WQ-007 | Enhance Experience Engineering card: list ≥3 battle-tested EE offers with links | Claude | Blocked | ≥3 EE offers battle-tested — PDR-001 (packaged-offers org) |
| WQ-003 | Remove workshops card from homepage | Claude | Blocked | WQ-005, WQ-006, WQ-007 (each card must have ≥3 offers listed) |
| WQ-009 | Create individual offer detail pages (one per offer at Level 1+) [PROPOSED] | Claude | Proposed | WQ-005 / WQ-006 / WQ-007 — offer pages needed before card links can be wired. Rationale: card enhancements link to detail pages; pages must exist before cards go live. |
| WQ-011 | Set up automated link-check CI (verify internal + offer links don't 404) [PROPOSED] | Claude | Proposed | — | Rationale: offer detail pages and card links will multiply; catching regressions early is low-cost. |
| WQ-013 | Update rates page to match rate card + add Strategy tier [PROPOSED] | Claude | Proposed | — | Restructure `rates.tsx` to align with actual rate card: Remote Consulting $250/hr · On-Site $300/hr+expenses; Remote Daily $1,800 (≤8hr) · On-Site $2,200+expenses; Strategy Remote $350/hr · On-Site $400/hr; Monthly Retainer $3,000 (≤16hr); Quarterly $8,000 (≤48hr); Annual $25,000 (≤192hr). All addl hours at tier hourly rate. Update JSON-LD serviceSchema to match. Also add remote/on-site distinction throughout. |

---

## Done

| ID | Item | Evidence |
|----|------|---------|
| WQ-000 | Apply org rails (skills, hooks, docs/agents/, settings.json) | `tjm-solutions-site/.claude/` — HL-001 |
| WQ-004 | SEO Groups 1+2: sitemap priorities, canonical tags, OG image dimensions/alt, title separator | `docusaurus.config.ts`, `src/pages/index.tsx`, `about.tsx`, `rates.tsx` — 2026-05-16 |
| WQ-015 | SEO Group 4: tag taxonomy sweep — dropped blog/paper/mcp, absorbed headless-commerce+concurrency, renamed agent-commerce→agentic-commerce | All 21 `blog/*.mdx` files + `CLAUDE.md` — 2026-05-16 |
| WQ-012 | MD-Slides site section: marketing page, multi-instance docs plugin, 8 scaffolded doc pages, navbar entry | `src/pages/mdslides.tsx`, `mdslides-docs/`, `docusaurus.config.ts` — 2026-05-16 |
| WQ-001 | Fill in 4 stub pre-2026 articles (content fetched from Medium, truncate markers added) | `blog/2021-03-14-*.mdx`, `2021-07-07-*.mdx`, `2022-12-16-*.mdx`, `2022-12-20-*.mdx` — 2026-05-16 |
| WQ-010 | Testimonials / social-proof section | Dropped — no testimonials available |
| WQ-008 | Install GitHub App on repo | Consolidated to WQ-P4-023 (org WQ) — 2026-05-15 |

---

## Notes

- **Unblocked and ready:** WQ-004 (SEO), WQ-001 (article stubs), WQ-002 (FP series). Any of these can proceed immediately.
- **Blocked on org gate:** WQ-005–007 are blocked on PDR-001 (packaged-offers org) — ≥3 battle-tested offers per card required before listing. DT-2 (KB offer, org WQ-P4-011) is first to qualify and sets the pattern for CS and EE cards.
- **Cascade block:** WQ-003 (remove workshops card) cannot proceed until WQ-005, WQ-006, and WQ-007 are all complete — 4 cards remain until 3 cards each have ≥3 offers listed.
- **Offer detail pages:** Each card enhancement (WQ-005–007) should link to individual offer detail pages (WQ-009 [PROPOSED]). Pages should be created when the first offer per card reaches Level 1.
- **WQ-008 closed:** GitHub App installation consolidated to org-level WQ-P4-023; no separate site-level item needed.
- **WQ-012 blocked on mdslides release:** Trigger this item when mdslides ships. All implementation steps are captured in the queue entry — no re-derivation needed.
