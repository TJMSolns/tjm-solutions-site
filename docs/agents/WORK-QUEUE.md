# tjm-solutions-site — Work Queue

Last groomed: 2026-06-10 (GL-027; verify-only — no drift since GL-026; active-idle per POL-018 DR-027 (clock stopped); WQ-023 remains Tony-action head, revenue-chain blocked behind SCKB-275 → WQ-P4-011)

Updated 2026-06-10 post-GL-027: WQ-023 resolved (Medium numbering stands, Tony confirmed) — WQ-021/WQ-024 unblocked, WQ-028/WQ-029 added, WQ-022 blocked on Medium publication. Claude-unblocked items now head the queue (WQ-027 first).

---

## Active

| ID | Item | Owner | Status | Depends On |
|----|------|-------|--------|-----------|
| WQ-030 | Add article "Modeling Distribution on Tracing Ideals: A Novice's View on COVID-19 Vaccine Management" (https://tmoores.medium.com/modeling-distribution-on-tracing-ideals-a-novices-view-on-covid-19-vaccine-management-39d13158a5a3; Medium 2020-12-06). Oldest Medium article; pre-dates all site content. Themes: vaccine distribution logistics, contact tracing, blockchain in healthcare. Fetch content from Medium; apply `<head>` JSON-LD + canonical-link pattern; filename `blog/2020-12-06-modeling-distribution-on-tracing-ideals.mdx`; tags per taxonomy after content review (likely architecture + strategy — no FP/commerce angle). Source: WQ-027 full parity audit 2026-06-10 (sitemap diff — only gap beyond Parts 12–15). | Claude | Queued | — |
| WQ-018 | Harvest Docusaurus patterns into `docs/agents/LESSONS-LEARNED.md` (create file): (1) per-article `<head>` JSON-LD + og:meta without swizzle (HL-004 pattern); (2) projects page card pattern (optional GitHub link, card-only, extensible) (HL-002 pattern). Source: retro-all RL-001. | Claude | Queued | — |
| WQ-019 | Formalize swizzle restriction: write `docs/governance/POL/POL-001-no-swizzle.md` — rule is "no Docusaurus swizzle; use per-article head block injection pattern instead" (pattern established in WQ-014). Makes the informal CONTEXT-KERNEL note durable and searchable. Source: retro-all RL-001. | Claude | Queued | — |
| WQ-020 | Formalize remaining CONTEXT-KERNEL quality gates into `docs/governance/POL/POL-002-deployment-quality-gates.md`: (1) WCAG AA compliance required on all pages (`npm run wcag` before every deploy); (2) all articles must have canonical links back to original Medium publication; (3) dark mode overrides use `[data-theme='dark'] .className` in CSS modules — never `@media (prefers-color-scheme: dark)`. Source: WQ-P4-037 CONTEXT-KERNEL audit. | Claude | Queued | — |
| WQ-002 | Complete remaining parts of FP series (umbrella; create discrete WQ per article going forward — see WQ-021 as pattern) | Tony | Queued | — |
| WQ-021 | Add Part 12 of FP series — "When Good Enough Is Not" (https://tmoores.medium.com/when-good-enough-is-not-9b1287979f49; Medium 2026-04-28). Bridges FP series to agentic-commerce arc: argues FP is mandatory (not optional) for agent-consumable systems. Apply same `<head>` JSON-LD + canonical-link + tag-taxonomy pattern as other articles. Tags: agentic-commerce, functional-programming. Source: discovered missing 2026-05-19 during fp-blogs synthesis. Part number confirmed via WQ-023 (Medium numbering stands, 2026-06-10). | Claude | Queued | — |
| WQ-022 | Add "Authentication Is Not Authority" to FP series (part number TBD — likely Part 16; Tony-authored draft 2026-05-19; full text at `Projects/fp-blogs/candidate-articles/part-14-authentication-is-not-authority.md` — draft filename's "part-14" is superseded, Part 14 on Medium is "The Aggregate Cost of Composition"). Themes: capability surfaces, governed decisions, delegated authority, policy-as-code, audit. Apply same JSON-LD + canonical + tag pattern. Tags: agentic-commerce, functional-programming, capability-surfaces, authorization. **Do not publish on site before it is live on Medium** (Tony directive 2026-06-10; canonical-link non-negotiable). Confirmed not on Medium as of 2026-06-10. | Claude | Blocked | Medium publication (Tony) |
| WQ-024 | Add Part 14 of FP series — "The Aggregate Cost of Composition" (https://tmoores.medium.com/the-aggregate-cost-of-composition-4432547c5352; Medium 2026-05-30; Tony-authored draft at `Projects/fp-blogs/candidate-articles/part-12-aggregate-cost-of-composition.md` — draft filename's "part-12" is superseded, Medium numbering stands per WQ-023). Themes: composition tax, chargebacks, ambiguity-as-debt, durable facts, idempotency. Apply same JSON-LD + canonical + tag pattern. Tags: agentic-commerce, functional-programming, distributed-systems. | Claude | Queued | — |
| WQ-028 | Add Part 13 of FP series — "It Was Never about the Money" (https://tmoores.medium.com/it-was-never-about-the-money-1bdbdc75afce; Medium 2026-05-23). Apply same `<head>` JSON-LD + canonical-link + tag-taxonomy pattern as other articles; fetch content from Medium; tags per taxonomy after content review (functional-programming + likely agentic-commerce). Source: discovered missing 2026-06-10 during Medium parity check (WQ-027 recent-window diff). | Claude | Queued | — |
| WQ-029 | Add Part 15 of FP series — "A Case for Capabilities" (https://tmoores.medium.com/a-case-for-capabilities-9db4366a07d0; Medium ~2026-06-07). Apply same `<head>` JSON-LD + canonical-link + tag-taxonomy pattern; fetch content from Medium; tags per taxonomy after content review (functional-programming + likely agentic-commerce, capability-surfaces themes). Source: discovered missing 2026-06-10 during Medium parity check (WQ-027 recent-window diff). | Claude | Queued | — |
| WQ-016 | Create DT-2 offer detail page at `/services/kcs-knowledge-base` — React/MDX page in `src/pages/`; content from DT-2 offer doc (problem statement, value prop, deliverables table, duration, pricing-deferred note); link to case study blog post when published | Claude | Blocked | PO-007 (packaged-offers) ← WQ-P4-011 (org; Tony action). **WQ-P4-011 re-paused 2026-05-28** — new gate is SCKB-275 (DT-2 journey-readiness audit; in_progress). DT-2 engagement paused per HL-063. No deploy ETA until SCKB-275 → WQ-P4-011 → PO-007 → WQ-016 chain completes. |
| WQ-017 | Add "Learn more → KCS Knowledge Base" link to Digital Transformation services card on homepage; points to WQ-016 page; does NOT require ≥3 offers; does NOT close WQ-006 | Claude | Blocked | WQ-016 |
| WQ-005 | Enhance Commerce Strategy card: list ≥3 battle-tested CS offers with links | Claude | Blocked | ≥3 CS offers battle-tested — PDR-001 (packaged-offers org) |
| WQ-006 | Enhance Digital Transformation card: list ≥3 battle-tested DT offers with links | Claude | Blocked | ≥3 DT offers battle-tested — PDR-001 (packaged-offers org) |
| WQ-007 | Enhance Experience Engineering card: list ≥3 battle-tested EE offers with links | Claude | Blocked | ≥3 EE offers battle-tested — PDR-001 (packaged-offers org) |
| WQ-003 | Remove workshops card from homepage | Claude | Blocked | WQ-005, WQ-006, WQ-007 (each card must have ≥3 offers listed) |
| WQ-009 | Create individual offer detail pages (one per offer at Level 1+) [PROPOSED] | Claude | Proposed | WQ-005 / WQ-006 / WQ-007 — offer pages needed before card links can be wired. Rationale: card enhancements link to detail pages; pages must exist before cards go live. |
| WQ-025 | Verify site is current on live deployment — confirm all commits through HL-004 are live at www.tjm.solutions; run `npm run wcag` and link-check against deployed site; document result in HANDOFF-LEDGER. [PROPOSED] | Claude | Proposed | — |

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
| WQ-013 | Update rates page to match rate card + add Strategy tier | `src/pages/rates.tsx`, `rates.module.css` — commit 70f51be — 2026-05-16 |
| WQ-014 | SEO Group 3: og:type + BlogPosting JSON-LD on all 21 articles (no swizzle) | All `blog/*.mdx` — commit 8289b95 — 2026-05-16 |
| WQ-011 | Set up automated link-check CI | `.github/workflows/ci.yml` — commit 2d4b72b — 2026-05-16 |
| WQ-026 | Record dormancy status decision — site classified active-idle; dormancy clock reset | WQ-P4-121 Part 1 / HL-064 / site CONTEXT-KERNEL Status section (POL-009 / POL-018 / DR-027) — 2026-05-28 |
| WQ-027 | Medium-parity invariant: codify standing rule + initial parity audit | (a) Rule codified: CLAUDE.md Key Constraints + CONTEXT-KERNEL Non-Negotiables (audit procedure included: sitemap + profile diff vs blog canonicals). (b) Full audit run 2026-06-10: Medium has 22 articles (21 in sitemap + Part 15 profile-only — sitemap lags); site has 17 Medium-canonical; 5 missing = Parts 12/13/14/15 (WQ-021/028/024/029, pre-queued) + COVID vaccine modeling article (WQ-030, queued this audit). Site is parity-complete once WQ-021/024/028/029/030 land. Commit: see HL-005. — 2026-06-10 |
| WQ-023 | Reconcile Part 12 numbering | Resolved: Medium live numbering stands (Tony confirmed 2026-06-10) — Part 12 = "When Good Enough Is Not", Part 13 = "It Was Never about the Money", Part 14 = "The Aggregate Cost of Composition", Part 15 = "A Case for Capabilities". Evidence: https://tmoores.medium.com/ profile fetch 2026-06-10. Draft-file "part-12"/"part-14" labels superseded. WQ-021/WQ-024 unblocked; WQ-028/WQ-029 queued. |
| WQ-008 | Install GitHub App on repo | Consolidated to WQ-P4-023 (org WQ) — 2026-05-15 |

---

## Notes

- **Ordering convention (GL-017/GL-018, updated 2026-06-10):** Claude-unblocked (WQ-030/018/019/020/021/024/028/029/002) → blocked-on-Medium-publication (WQ-022; Tony action) → blocked-on-revenue-chain (WQ-016/017) → hard-blocked on org gate (WQ-005–007; WQ-003). WQ-027 closed — parity audit complete; site is parity-complete once the 5 article items land.
- **Dormancy status (GL-026):** WQ-026 closed — dormancy decision landed via WQ-P4-121 Part 1 / HL-064. Site classified **active-idle** per POL-018 (DR-027); POL-009 dormancy clock reset 2026-05-28. Gate: offer cards (WQ-005/006/007) require ≥3 battle-tested offers per PDR-001; bandwidth on DT-2 engagement. No further dormancy action needed.
- **WQ-023 resolved 2026-06-10:** Medium live numbering stands (Tony confirmed) — see Done table. WQ-021 (Part 12) and WQ-024 (Part 14) unblocked and relabeled; WQ-028 (Part 13) and WQ-029 (Part 15) queued from the same parity check. WQ-022 ("Authentication Is Not Authority") relabeled part-TBD and **blocked on Medium publication** — Tony directive 2026-06-10: do not publish on site before it is live on Medium.
- **WQ-017 reclassified Blocked (GL-017):** was listed as Queued but is blocked on WQ-016.
- **Revenue chain (GL-026 update):** WQ-016 (offer page) → WQ-017 (card link) → deploy. Active blocker chain: WQ-016 ← PO-007 (packaged-offers case study) ← WQ-P4-011 (org; re-paused 2026-05-28) ← SCKB-275 (DT-2 journey-readiness audit; in_progress). DT-2 engagement paused per HL-063. No deploy ETA until SCKB-275 → WQ-P4-011 → PO-007 → WQ-016 chain completes.
- **Blocked on org gate:** WQ-005–007 are blocked on PDR-001 (packaged-offers org) — ≥3 battle-tested offers per card required before listing.
- **Cascade block:** WQ-003 (remove workshops card) cannot proceed until WQ-005, WQ-006, and WQ-007 are all complete.
- **Offer detail pages:** Each card enhancement (WQ-005–007) should link to individual offer detail pages (WQ-009 [PROPOSED]). Pages should be created when the first offer per card reaches Level 1.
- **WQ-008 closed:** GitHub App installation consolidated to org-level WQ-P4-023; no separate site-level item needed.
