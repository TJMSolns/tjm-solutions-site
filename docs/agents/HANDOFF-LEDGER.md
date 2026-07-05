# tjm-solutions-site — Handoff Ledger

Append-only. New entries at the top.

---

## HL-006 — 2026-07-05 — PDR-008 offer-listing chain: pages, cards, deploy

**Session:** Claude, driving the WQ-031 → WQ-009 → WQ-005/006/007 → WQ-003 → deploy chain per Tony's
direction (org-level PDR-008 offer selection already confirmed 2026-06-26; this session executed the
site-side implementation).

**What happened:**

- **WQ-031** (commit 5221d39) — Finished the PDR-008 re-baseline: flipped WQ-016/005/006/007 to
  Unblocked (PDR-008), promoted WQ-009 from Proposed to Queued, reordered the queue per GL-028. Built the
  full credibility map (below) — every offer backed by a named prior engagement or published article,
  never a claim of internal TJMSolns battle-testing. Evidence: `docs/agents/evidence/WQ-031.md`.

  **Credibility map (Tony-confirmed selection, 2026-06-26):**

  | Card | Offer | Credibility source |
  |------|-------|---------------------|
  | Commerce Strategy | CS-2 Marketplace Integration Strategy | Named engagement: Principal Solutions Consultant, Mirakl |
  | Commerce Strategy | CS-4 Composable Commerce Architecture Review | Named engagement: CTO, RETISIO Inc. |
  | Commerce Strategy | CS-3 Agent-Commerce Readiness Audit | Published articles: Invisible Buyer / Economics of Agent-Mediated Commerce / Capability Surfaces / Protocol Stack |
  | Digital Transformation | DT-2 KCS Knowledge Base Implementation | Named engagement: decade at ATG (search & knowledge mgmt) — **not** the paused internal SCKB dogfood engagement |
  | Digital Transformation | DT-3 Microservices Modernization Assessment | Named engagement: CTO, Professional Access |
  | Digital Transformation | DT-5 Reactive Systems & Reliability Review | Named engagement: CTO, RETISIO Inc. + published FP series |
  | Experience Engineering | EE-1 Commerce Search & Discovery Audit | Named engagement: decade at ATG (search) |
  | Experience Engineering | EE-4 Engagement Architecture Review | Named engagement: Director of Product Management, Oracle Americas |
  | Experience Engineering | EE-5 Agent-Ready Experience Design | Published articles (same 4 as CS-3, explicitly cited in the EE-5 offer doc itself) |

- **WQ-009** (commit 090f720) — New shared `src/components/OfferPage/` component + 9 detail pages under
  `src/pages/services/`: `marketplace-integration-strategy`, `agent-commerce-readiness-audit`,
  `composable-commerce-architecture-review`, `kcs-knowledge-base`,
  `microservices-modernization-assessment`, `reactive-systems-reliability-review`,
  `commerce-search-discovery-audit`, `engagement-architecture-review`,
  `agent-ready-experience-design`. Content sourced from each offer's Level 1 doc in
  `Projects/packaged-offers/`. Each page carries a credibility section per the map above.

- **WQ-005/006/007** (commit 39b7862) — Redesigned `HomepageFeatures` card layout (top-image banner +
  content below, replacing the absolute-overlay style) and wired each of the three homepage cards to its
  3 offer detail pages, in Tony's confirmed order.

- **WQ-003** (commit 68d9e90) — Removed the "Workshop Management" placeholder card; rebalanced the
  services grid to 3 columns.

- **Verification:** `npm run build` (onBrokenLinks: throw) passed after every change. `npm run wcag`
  (pa11y WCAG2AA) run against the homepage, `/about`, `/rates`, `/articles`, plus 3 sampled `/services/*`
  pages — no issues found on any.

- **Deploy:** Pushed all commits to `origin/main` (5221d39 → 19cd961). Ran
  `GIT_USER=TJMSolns npm run deploy` (per HL-005's documented HTTPS/gh-credential-helper note) —
  succeeded, pushed to `gh-pages` at a982dc0. Confirmed via `git ls-tree origin/gh-pages` that all 9
  `/services/*.html` files and the updated `index.html` (new cards, no workshops card) are present in the
  deployed branch, and via the GitHub deployments API
  (`GET /repos/TJMSolns/tjm-solutions-site/deployments`) that GitHub's `github-pages` app processed
  deployment `5319492061` for sha a982dc0 successfully. **Live-site propagation status:** see the
  addendum immediately below this entry, or `docs/agents/evidence/` — a Fastly/CDN cache delay was
  observed on the custom domain (www.tjm.solutions) at session-writing time; content correctness at the
  origin/branch level is independently confirmed regardless of CDN propagation timing.

- **ESC-001 (infra blocker):** The Done-transition gate (`pretooluse-done-gate.py`, DN-006) requires
  spawning a real `verifier` subagent. In this session's environment, `subagent_type: "verifier"` could
  not be invoked at all — confirmed identically at two different requested model tiers (opus, sonnet),
  which rules out the DN-007 tier-unavailable case (whose redraw-with-exclusion remedy only changes the
  model argument, not agent-type registration). This is logged as `docs/agents/ESCALATIONS.md` ESC-001
  (status: open) rather than worked around — no PASS was fabricated, no gate bypassed. As a result,
  WQ-031/009/005/006/007/003 are all implemented, committed, pushed, and deployed, but remain in the
  Active table annotated **"Implementation complete — Done-transition blocked (ESC-001)"** rather than
  moved to Done. Evidence files for all six items exist at `docs/agents/evidence/WQ-{031,009,005,006,007,003}.md`
  with `Verifier-verdict: PENDING`.

- **WQ-016/WQ-009 overlap flagged, not resolved:** WQ-009 built the DT-2 detail page at the exact path
  WQ-016 specifies (`/services/kcs-knowledge-base`) with equivalent scope. WQ-016 itself was left
  untouched — out of this session's assigned chain (WQ-031→WQ-009→WQ-005/006/007→WQ-003→deploy only, per
  explicit instruction to stop at this chain). Flagged in WORK-QUEUE Notes for `/groom` to reconcile.

**Decisions made:** none new (this session executed decisions already recorded — PDR-008/DR-034, and
Tony's 2026-06-26 offer selection — it did not make new governance decisions).

**CONTEXT-KERNEL change:** none (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty this session).

**Harvest candidates:**
- Shared detail-page component pattern (`OfferPage` + thin data pages) — **already has a WQ item**:
  folded into WQ-018's scope (harvest Docusaurus patterns into LESSONS-LEARNED.md), no new item needed.
- ESC-001's underlying gap — DN-007's tier-redraw remedy doesn't cover "custom agent-type unavailable in
  a nested/sub-agent session" as distinct from "model tier unavailable" — **harvest deferred**: this is a
  harness-evolution-owned mechanism (DN-006/DN-007), not a tjm-solutions-site-owned one, and cross-project
  discipline means it should be queued in a harness-evolution session, not written into this project's
  queue from here. Revisit by 2026-08-04 (within 30 days) — either in the next harness-evolution session
  or via org-level `/harvest-all`.

**Open items carried forward:**
- ESC-001 (open) — needs Tony's direction on how sub-agent sessions without custom agent-type access
  should satisfy the verifier gate.
- WQ-016/017 — untouched this session; WQ-016/WQ-009 overlap needs `/groom` reconciliation.
- WQ-030/021/028/024/029/018/019/020/002 — unaffected, still queued in prior order.
- WQ-025 [Proposed] — deployment-currency check; this session's own deploy addresses much of its intent
  but the item itself was not formally executed.

**Next owner:** Tony — resolve ESC-001 (how should the verifier gate work in this kind of session?), and
if desired, run `/groom` to reconcile the WQ-016/WQ-009 overlap and formally close WQ-031/009/005/006/007/003
once a verifier path is available.

---

## HL-005 — 2026-06-10 — Backlog sync, WQ-023 resolution, Medium-parity invariant (WQ-027)

**Session:** Tony + Claude (status review → queue decisions → /next WQ-027)

**What happened:**
- **Committed 3 weeks of uncommitted governance backlog** found at session start (org-level sessions had edited site files without running site /handoff): harness gates in commit 90470d8, governance state in c2a3418. Pushed; remote switched to HTTPS with `gh` credential helper after sandbox SSH failure (`gh auth setup-git`; use `GIT_USER=TJMSolns npm run deploy`, not `USE_SSH=true`).
- **WQ-023 resolved** (Tony confirmed: Medium live numbering stands): Part 12 = "When Good Enough Is Not", 13 = "It Was Never about the Money", 14 = "The Aggregate Cost of Composition", 15 = "A Case for Capabilities". WQ-021/WQ-024 unblocked; WQ-028/WQ-029 queued; WQ-022 ("Authentication Is Not Authority", part TBD) blocked on Medium publication per Tony directive — not on site before live on Medium.
- **WQ-027 executed:** (a) Medium-parity invariant codified in CLAUDE.md Key Constraints + CONTEXT-KERNEL Non-Negotiables, with audit procedure (sitemap + profile diff vs blog canonicals) — commit 44f8580. (b) Full parity audit: Medium 22 articles vs site 17 Medium-canonical; 5 missing = Parts 12–15 (pre-queued) + "Modeling Distribution on Tracing Ideals" (COVID vaccine, 2020-12-06) → **WQ-030 queued**. Site is parity-complete once WQ-021/024/028/029/030 land.
- **Org item WQ-P4-139 queued** (org WORK-QUEUE, lock protocol honored): extend org /handoff git-audit gate to sweep every repo touched in a session — closes the cross-repo gap that caused the backlog above.

**Decisions made:** Medium numbering stands (Tony, 2026-06-10 — supersedes draft-file part labels); WQ-022 gated on Medium publication; remote auth via HTTPS/gh.

**CONTEXT-KERNEL change:** Non-Negotiables — Medium-parity invariant added (WQ-027 / Tony directive 2026-06-10, org HL-068).

**Harvest candidates:** Medium sitemap-diff parity-audit procedure (sitemap + profile page vs canonical greps) — reusable for any republished-content site.

**Open items carried forward:**
- WQ-030/018/019/020: unblocked Claude items (WQ-030 now queue head)
- WQ-021/024/028/029: FP Parts 12–15 article adds — unblocked, content + pattern ready
- WQ-022: blocked on Medium publication (Tony)
- WQ-016/017: blocked on revenue chain (SCKB-275 → WQ-P4-011 → PO-007)
- WQ-005/006/007/003/009: blocked on PDR-001
- WQ-025 [PROPOSED]: deployment-currency check — awaiting groom promotion

**Next owner:** any — `/next` picks up WQ-030 (COVID article add) or the four FP article adds

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
