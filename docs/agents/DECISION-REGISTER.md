# tjm-solutions-site — Decision Register

Append-only. New entries at the top.

| DR-ID | Date | Title | Type | Status |
|-------|------|-------|------|--------|
| DR-001 | 2026-07-07 | No Docusaurus swizzle | POL | Active |

---

## DR-001 — 2026-07-07 — No Docusaurus swizzle
**Decision:** This codebase never uses `yarn swizzle`/theme-component ejection — per-article customization
uses `<head>` block injection, page/theme styling uses CSS variable overrides.
**Rationale:** Swizzling creates a permanent per-upgrade maintenance burden; the head-block + CSS-variable
patterns already proven in WQ-004/WQ-014 cover every customization need encountered so far.
**Type:** POL
**Ref:** docs/governance/POL/POL-001-no-swizzle.md
**Status:** Active
