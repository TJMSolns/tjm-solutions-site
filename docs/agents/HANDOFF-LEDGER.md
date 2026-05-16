# tjm-solutions-site — Handoff Ledger

Append-only. New entries at the top.

---

## HL-004 — 2026-05-16 — Article SEO: og:type + BlogPosting JSON-LD

**Session:** Tony + Claude (/next autonomous run, continued)

**What happened:**
- All 21 `blog/*.mdx` updated — `og:type: article`, `article:published_time`, `article:author`, and `BlogPosting` JSON-LD injected via each article's `<head>` block. No swizzle used: JSON-LD delivered as a JSX template-literal script child `{``...``}` inside the existing `<head>` element. The 17 Medium-canonical articles retain their Medium canonical; the 4 original April 2026 papers gained a self-canonical in the same pass.
- CONTEXT-KERNEL non-negotiable ("No Docusaurus swizzle") fully honored — resolved by using per-article `<head>` blocks rather than theme component override.
- Python script applied the change uniformly across all 21 files in one pass.
- Deployed to www.tjm.solutions — commit 8289b95.

**Decisions made:** none formally recorded; the swizzle-free approach is now the established pattern for per-article head injection.

**Harvest candidates:** per-article `<head>` block pattern for JSON-LD + og meta — reusable for any Docusaurus blog without swizzle, applicable to belsouri or other Docusaurus sites.

**Open items carried forward:**
- WQ-016: DT-2 offer detail page — blocked on PO-007 (case study draft)
- WQ-017: DT card "Learn more" link — blocked on WQ-016
- WQ-002: FP series (Tony's writing)
- WQ-005/006/007/003/009: Blocked on PDR-001

**Next owner:** Tony — queue is exhausted for Claude. PO-007 (case study draft) unblocks WQ-016/017.

---

## HL-003 — 2026-05-16 — Rates update + link-check CI

**Session:** Tony + Claude (/next autonomous run)

**What happened:**
- `src/pages/rates.tsx` — restructured to remote/on-site split pricing; Consulting ($250/$300/hr), Strategy ($350/$400/hr), Daily Intensive ($1,800/$2,200/day, ≤8 hrs); Retainer tiers Monthly $3,000 (≤16 hrs), Quarterly $8,000 (≤48 hrs), Annual $25,000 (≤192 hrs); overage at consulting rate. New `RateRow`/`EngagementModel` interfaces replacing flat `amount`+`period`.
- `src/pages/rates.module.css` — added `.rateRows`, `.rateRow`, `.rateLabel`, `.rateValue`, `.rowAmount`, `.rateNote`, `.overageNote` for row-based card layout; all dark mode via `[data-theme='dark']`
- `serviceSchema` JSON-LD updated to 9 distinct Offers (Remote + On-Site variants for hourly tiers; 3 retainer Offers)
- `.github/workflows/ci.yml` (NEW) — build job on every push/PR; link-check job on push + weekly schedule using lychee; excludes LinkedIn/Twitter/X; accepts 429 for Medium rate-limiting
- Committed + pushed both; rates deployed to www.tjm.solutions

**Decisions made:** none

**Open items carried forward:**
- WQ-014 [Proposed]: Article og:type + BlogPosting JSON-LD — **blocked by CONTEXT-KERNEL non-negotiable** (`No Docusaurus swizzle`). Needs a governance decision (update CONTEXT-KERNEL or find a swizzle-free alternative) before proceeding.
- WQ-016: DT-2 offer detail page — blocked on PO-007 (case study draft, packaged-offers project)
- WQ-017: Add card link to DT card — blocked on WQ-016
- WQ-002: FP series (Tony's writing)
- WQ-005/006/007/003/009: Blocked on PDR-001

**Next owner:** Tony — two decisions needed: (1) WQ-014: lift swizzle ban for semantic/SEO use cases or find alternative approach; (2) WQ-016: write PO-007 case study draft to unblock offer page

---

## HL-002 — 2026-05-16 — SEO, MD-Slides, article stubs

**Session:** Tony + Claude (tjm-solutions-site roadmap + execution)

**What happened:**
- `docusaurus.config.ts` — `createSitemapItems` priority tiers (1.0/0.8/0.6/0.5); title separator `—` → `|`; multi-instance docs plugin for MD-Slides; navbar entry "MD-Slides" → "Projects"
- `src/pages/index.tsx`, `about.tsx`, `rates.tsx` — canonical tags, og:image:alt/width/height per page
- `src/pages/projects.tsx` (NEW) — /projects landing page; card-only layout; github link optional; MD-Slides card with scripting/LLM angle; extensible for future releases
- `src/components/ArticlesList/index.tsx` — default tag `'blog'` → `'all'` (3 sites); /articles now matches /articles?tag=all
- All 21 `blog/*.mdx` — tag taxonomy sweep: dropped `blog`, `paper`, `mcp`; absorbed `headless-commerce` → `digital-commerce`, `concurrency` → `architecture`; renamed `agent-commerce` → `agentic-commerce`; CLAUDE.md updated with canonical tag list
- 4 stub articles filled from Medium: `2021-03-14-why-do-they-call-them-apartments.mdx`, `2021-07-07-agility-and-the-headless-commerce-debate.mdx`, `2022-12-16-headless-commerce-advice-for-goal-hangers.mdx`, `2022-12-20-an-introduction-to-reactive-commerce.mdx`
- `mdslides-docs/` — 10 doc pages: `intro.md`, `installation.md`, `writing-slides.md`, `navigation.md` (new), `speaker-view.md`, `themes.md`, `configuration.md`, `validation.md`, `distribution.md` (new), `contributing.md`; updated for all new features (analytics, smart default, WCAG flags, all 6 templates, header/footer tokens)
- WQ-010 dropped (no testimonials available)
- All changes committed, pushed origin/main, deployed to gh-pages → live at www.tjm.solutions

**Decisions made:** none (DR table still empty)

**Harvest candidates:** Projects page pattern (optional github link, card-only, extensible) — reusable for any TJM project landing page

**Open items carried forward:**
- WQ-013 [Proposed]: Rates page update — align to rate card, add Strategy tier ($350/$400 remote/on-site), add remote/on-site distinction throughout, update JSON-LD serviceSchema
- WQ-014 [Proposed]: Article og:type + BlogPosting JSON-LD via BlogPostPage swizzle
- WQ-011 [Proposed]: Automated link-check CI
- WQ-002: Complete remaining FP series parts (Tony's writing)
- WQ-005/006/007: Service card enhancements — blocked on PDR-001 (≥3 battle-tested offers)
- WQ-003: Remove workshops card — blocked on WQ-005/006/007
- WQ-009 [Proposed]: Individual offer detail pages — blocked on WQ-005/006/007

**Next owner:** any — `/next` to pick up WQ-013 (rates page, unblocked) or WQ-014 (article JSON-LD, unblocked)

---

## HL-001 — 2026-05-01 — Org rails applied

**Session:** Tony + Claude (TJMSolns org rails pass — WQ-P4-006)

**What happened:**
- Created `.claude/skills/` with all 8 canonical skills: next, status, handoff, decide, groom, health, retro, audit
- Created `.claude/hooks/session-start.sh` and `session-stop.sh` (chmod +x)
- Updated `.claude/settings.json` to add SessionStart hook (kept existing PreToolUse typecheck + Stop wcag reminder)
- Created `docs/agents/` with CONTEXT-KERNEL.md, WORK-QUEUE.md, HANDOFF-LEDGER.md, DECISION-REGISTER.md
- Created `docs/governance/ADR/`, `docs/governance/POL/`, `docs/governance/PDR/`

**Decisions made:** none

**Open items carried forward:**
- WQ-001: Fill in 4 stub pre-2026 articles
- WQ-002: Complete remaining FP series parts

**Next owner:** Tony — run `/status` to verify, `/next` to start working

---
