# tjm-solutions-site — Decision Register

Append-only. New entries at the top.

| DR-ID | Date | Title | Type | Status |
|-------|------|-------|------|--------|
| DR-002 | 2026-07-08 | Deployment quality gates (WCAG, canonical links, dark-mode pattern) | POL | Active |
| DR-001 | 2026-07-07 | No Docusaurus swizzle | POL | Active |

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
