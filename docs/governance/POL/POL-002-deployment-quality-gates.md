# POL-002: Deployment Quality Gates

**Status:** Active
**Date:** 2026-07-08

## Context

Three quality rules have governed this site since early sessions but existed only as prose bullets in
`docs/agents/CONTEXT-KERNEL.md`'s Non-Negotiables section (and, for the dark-mode rule, duplicated in
`CLAUDE.md`'s CSS / Dark Mode Rules section): WCAG AA compliance before every deploy, canonical links
back to Medium on every article, and the `[data-theme='dark']`-only pattern for dark-mode CSS overrides.
None of the three had a formal governance artifact — POL-001 formalized the adjacent swizzle restriction
(closing LL-001's gap for that one rule) but left these three as the last un-formalized items from the
same `WQ-P4-037` CONTEXT-KERNEL audit that originally surfaced the swizzle gap. This POL closes that
remaining gap: it does not change any rule's substance, only gives each an ADR/POL record with a
resolution path, consistent with the precedent POL-001 set.

## Decision

This codebase enforces three deployment quality gates, unchanged from their existing CONTEXT-KERNEL /
CLAUDE.md wording:

1. **WCAG AA compliance.** `npm run wcag` (pa11y WCAG2AA, dual-theme) must be run before every deploy;
   text must meet minimum 4.5:1 contrast. Both light and dark theme must be checked explicitly — a
   single-theme pass does not satisfy this gate (see LL-007/WQ-042, which found a real dark-mode-only
   contrast bug that a light-theme-only pa11y run had missed).
2. **Canonical links on every article.** Every `blog/*.mdx`/`.md` file whose content originated on
   `tmoores.medium.com` must carry a `<link rel="canonical">` (MDX `<head>` block) or `canonical:`
   frontmatter field (plain `.md`, injected automatically by `src/theme/BlogPostPage/index.tsx`) pointing
   at the original Medium URL. Site-original articles get a self-canonical instead (established in
   WQ-004/HL-004).
3. **Dark-mode override pattern.** CSS Modules use `[data-theme='dark'] .className` for dark-mode
   overrides. `@media (prefers-color-scheme: dark)` is never used inside a CSS Module — it reacts to OS
   preference, not the site's manual theme toggle, and would silently diverge from what the user actually
   selected (the exact bug class WQ-042 found and fixed at the rates page).

## Rationale

All three rules were already load-bearing constraints in day-to-day work — every deploy has run
`npm run wcag`, every article-adding WQ item has followed the canonical-link pattern, and every dark-mode
CSS change has followed the `[data-theme='dark']` convention — but none had a durable record a future
session could cite or amend without re-deriving the reasoning from scratch. POL-001 already established
the pattern of converting an informal CONTEXT-KERNEL bullet into a formal POL once a rule has proven
itself in practice; these three had the same informal-only status POL-001 fixed for the swizzle ban, just
without yet having caused a stall the way LL-001's gap did. Formalizing before a stall occurs (rather than
after, as with POL-001) is strictly cheaper.

## Consequences

- `docs/agents/CONTEXT-KERNEL.md`'s Non-Negotiables and `CLAUDE.md`'s CSS/Dark Mode Rules and Key
  Constraints sections are now backed by this formal record; no wording change is required in either,
  since both already state the rules this POL formalizes.
- Any future proposal to relax or change any of the three gates (e.g. accepting a lower contrast ratio,
  dropping the canonical-link requirement for some article class, or permitting
  `@media (prefers-color-scheme: dark)` in a specific case) requires a new ADR proposing an amendment to
  this POL — not an ad hoc exception made inline during an unrelated WQ item.
- Future sessions citing "the WCAG gate," "the canonical-link rule," or "the dark-mode pattern" can point
  to this POL as the durable record, the same way POL-001 is now cited for the swizzle ban.

## Alternatives Rejected

- **Leave all three as CONTEXT-KERNEL/CLAUDE.md prose only.** Rejected: this is the status quo POL-001
  already moved away from for the swizzle rule on the grounds that an informal restriction with no
  ADR/POL has no resolution path if a future session needs to question or amend it (LL-001). The same
  reasoning applies equally to these three gates.
- **One POL per gate (three separate documents).** Rejected: unlike the swizzle ban (which arose from one
  specific stalled session, WQ-014/HL-003), these three gates share a single origin (the `WQ-P4-037`
  CONTEXT-KERNEL audit) and a single character (pre-deploy quality checks, as opposed to an architectural
  restriction) — one combined POL matches how WQ-020 scoped the work and avoids three near-duplicate
  documents with no independent decision history to separate them.
