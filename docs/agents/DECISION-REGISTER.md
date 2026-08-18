# tjm-solutions-site — Decision Register

Append-only. New entries at the top.

| DR-ID | Date | Title | Type | Status |
|-------|------|-------|------|--------|
| DR-003 | 2026-08-18 | Accessibility gate coverage strategy (full sweep, both themes) | POL | Active |
| DR-002 | 2026-07-08 | Deployment quality gates (WCAG, canonical links, dark-mode pattern) | POL | Active |
| DR-001 | 2026-07-07 | No Docusaurus swizzle | POL | Active |

---

## DR-003 — 2026-08-18 — Accessibility gate coverage strategy (full sweep, both themes)
**Decision:** The accessibility gate checks **every** page, in **both** themes, on every run — no
caching, no sampling, no rotation. Targets are enumerated from the built `sitemap.xml` rather than a
hardcoded list; the runner must print what it covered *and* what it skipped; CI is the enforcing gate.
Revisit trigger: if the full dual-theme sweep exceeds 5 minutes wall-clock, reopen and adopt the
nav-pages + changed-pages + one-representative-per-template design instead.
**Rationale:** WQ-052 tabled three strategies (per-page timestamp cache, random 10% sample, combination)
all aimed at keeping the gate fast. None had been measured. Measurement showed the full sweep takes
**15.6 seconds for 74 pages** via the programmatic pa11y API with a shared Puppeteer browser (60.3s via
the pa11y CLI spawning a browser per page), so both themes is roughly **31 seconds** — removing the
constraint the three options existed to work around. Full coverage is the only option with no
false-negative class: it cannot mis-key a cache, miss an undrawn page, or report a stale pass. The
timestamp-cache option was already known unsound (WQ-042's shared-token bug broke pages without editing
them), and random sampling makes failures irreproducible. The first full sweep immediately found live production WCAG2AA
violations the 4-URL gate could never reach: **238 errors across 8 pages** (WQ-056) — 233 in light
theme across 4 prism tokens, 5 in dark. It also exposed that the site's default render is **dark**
(`colorMode.defaultMode: 'dark'`), so the light half had never been checked by anything.
**Type:** POL
**Ref:** docs/governance/POL/POL-003-accessibility-gate-coverage.md
**Status:** Active

---

## DR-002 — 2026-07-08 — Deployment quality gates (WCAG, canonical links, dark-mode pattern)
**Decision:** Formalizes three existing CONTEXT-KERNEL/CLAUDE.md rules as a single POL: WCAG AA
(dual-theme `npm run wcag`) required before every deploy; every Medium-sourced article must carry a
canonical link back to Medium; CSS Modules use `[data-theme='dark'] .className` for dark-mode overrides,
never `@media (prefers-color-scheme: dark)`.
**Rationale:** Closes the last gap from the WQ-P4-037 CONTEXT-KERNEL audit (POL-001 already closed the
swizzle-restriction gap from the same audit) — gives three already-enforced rules a durable record and
amendment path instead of leaving them as prose-only bullets.
**Type:** POL
**Ref:** docs/governance/POL/POL-002-deployment-quality-gates.md
**Status:** Active

---

## DR-001 — 2026-07-07 — No Docusaurus swizzle
**Decision:** This codebase never uses `yarn swizzle`/theme-component ejection — per-article customization
uses `<head>` block injection, page/theme styling uses CSS variable overrides.
**Rationale:** Swizzling creates a permanent per-upgrade maintenance burden; the head-block + CSS-variable
patterns already proven in WQ-004/WQ-014 cover every customization need encountered so far.
**Type:** POL
**Ref:** docs/governance/POL/POL-001-no-swizzle.md
**Status:** Active
