# tjm-solutions-site — Lessons Learned

---

## LL-008 — 2026-07-07 — Never redefine the shared neutral-gray token scale per theme

**Finding:** During the WQ-039 visual identity overhaul, redefining `--color-gray-50`..`900` per theme
(as part of the broader palette rework) broke every pre-existing dark-mode override elsewhere in the
codebase that assumed the scale was a fixed/absolute reference — a real regression, caught only by the
dual-theme pa11y pass described in [[LL-007]]. The neutral gray scale must stay one absolute set of
values in both `:root` and `[data-theme='dark']`; theme-specific adjustments belong on semantic tokens
(e.g. `--accent-soft`) layered on top, never on the raw gray scale itself.
**Scope:** tjm-solutions-site
**Action taken:** Documented as a hard rule for any future palette work — do not touch the gray scale
per theme; add or adjust semantic tokens instead. Source: WQ-039/WQ-042 session (HL-007).

---

## LL-007 — 2026-07-07 — localStorage-injection dual-theme Puppeteer+pa11y verification

**Finding:** Testing only the site's default theme (dark) missed real WCAG contrast failures that only
manifested in light mode, or in an OS/site theme mismatch. Forcing a theme reliably before running pa11y
requires setting `localStorage` *before* the page's own theme-detection script runs —
`page.evaluateOnNewDocument(() => localStorage.setItem('theme', 'dark'))` prior to navigation — then
confirming `document.documentElement.getAttribute('data-theme')` actually matches before running pa11y.
Default-theme-only testing would not have caught either of the two real contrast bugs WQ-042 found (the
banned `@media (prefers-color-scheme: dark)` pattern in `rates.module.css`, and `--color-gray-500`
failing light-mode contrast in 6 places).
**Scope:** tjm-solutions-site (reusable for any Docusaurus or React site with light/dark theming)
**Action taken:** Adopted as the standard verification step for any change touching CSS or theme
tokens — run pa11y in both themes via this injection pattern, not just whichever theme is default.
Source: WQ-039/WQ-042 session (HL-007).

---

## LL-006 — 2026-07-07 — Shared detail-page component + thin per-item data pages

**Finding:** Rather than hand-building near-identical offer detail pages one at a time, WQ-009 built a
single shared `src/components/OfferPage/` component encapsulating the spec-sheet layout (problem
statement, value prop, deliverables table, duration, credibility section), with each
`/services/<slug>` page reduced to a thin data file that passes its own content into the shared
component. This scaled cleanly from the initial 9 offer pages to the full 22-offer catalog (WQ-036)
without duplicating layout code or drifting in structure between pages.
**Scope:** tjm-solutions-site (reusable for any "N similar detail pages" need)
**Action taken:** Established as the pattern for future collections of similar pages — build the shared
component first, then thin data pages. Source: HL-006/WQ-009.

---

## LL-005 — 2026-07-07 — Card-only landing page pattern

**Finding:** `src/pages/projects.tsx` established a reusable pattern for landing pages that are just a
grid of cards: card-only layout, an optional external link (e.g. GitHub) rendered conditionally rather
than assumed present on every card, and a structure that accepts new cards without a layout rewrite.
**Scope:** tjm-solutions-site
**Action taken:** Reused as the template for any future "landing page of cards" page. Source: HL-002.

---

## LL-004 — 2026-07-07 — Per-article `<head>` JSON-LD + og:meta without swizzle

**Finding:** Docusaurus swizzle is banned ([[LL-001]], CONTEXT-KERNEL non-negotiable), but per-article
SEO enrichment (`og:type`, `article:published_time`, `article:author`, `BlogPosting` JSON-LD) is still
achievable by adding a `<head>` block directly inside each MDX file, with the JSON-LD delivered as a JSX
template-literal script child (`{`` `...` ``}`) inside that `<head>` element. Applied uniformly across
all 21 `blog/*.mdx` files in one pass without ejecting any theme component.
**Scope:** tjm-solutions-site (reusable for any Docusaurus blog needing swizzle-free per-post head
customization)
**Action taken:** Documented as the canonical technique — reuse for future article SEO field additions
instead of reaching for a `BlogPostPage` swizzle. Source: HL-004.

---

## LL-003 — 2026-05-18 — LESSONS-LEARNED.md must exist before harvest candidates can close the loop

**Finding:** WQ-018 and WQ-019 were queued from retro-generated patterns (per-article head block, swizzle ban formalization) but LESSONS-LEARNED.md did not exist — so there was no file to write the LL entries to. Harvest candidates captured in HANDOFF-LEDGER entries (HL-002, HL-004) had no durable home. This is a chicken-and-egg problem: the file must be created when the first harvest candidate is identified, not after the first retro.
**Scope:** tjm-solutions-site
**Action taken:** This file. WQ-018 (harvest Docusaurus patterns into LESSONS-LEARNED) now has a target file to write to.

---

## LL-002 — 2026-05-18 — Decisions need formal records, not just CONTEXT-KERNEL mentions

**Finding:** Two full sessions of substantive decisions (swizzle approach, tag taxonomy, canonical strategy, rate card structure) were made without a single DECISION-REGISTER entry. The DECISION-REGISTER table was explicitly noted as "still empty" at HL-002. Without formal records, decisions can't be cited, amended, or referenced by future sessions — they only exist in conversation history.
**Scope:** tjm-solutions-site
**Action taken:** Informational — practice corrected by WQ-020 (formalize quality gates as POL-002). Ongoing: any decision that blocks or enables work should be recorded in DECISION-REGISTER at the session it is made.

---

## LL-001 — 2026-05-18 — Informal CONTEXT-KERNEL restrictions block work without a resolution path

**Finding:** The Docusaurus swizzle ban lived only in CONTEXT-KERNEL prose. When WQ-014 (og:type + JSON-LD) was proposed, the natural implementation (BlogPostPage swizzle) was blocked — but there was no ADR to amend, no formal artifact to override, and no documented rationale. Resolution required Tony to make a governance decision mid-implementation. One full session was lost. Pattern: CONTEXT-KERNEL non-negotiables must have a corresponding POL or ADR before they can block work.
**Scope:** tjm-solutions-site
**Action taken:** WQ-019 queued (write POL-001 formalizing the swizzle restriction with rationale). The per-article head-injection pattern is the documented alternative.

---
