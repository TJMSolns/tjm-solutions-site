# POL-001: No Docusaurus Swizzle

**Status:** Active
**Date:** 2026-07-07

## Context

The Docusaurus swizzle ban has existed since the site's founding only as prose in
`docs/agents/CONTEXT-KERNEL.md` ("No Docusaurus swizzle — prefer CSS variable overrides") and
`CLAUDE.md` ("Prefer CSS variable overrides in `custom.css` over `yarn swizzle`"). It was never backed
by a formal governance artifact. This caused a real problem: when WQ-014 (article `og:type` +
`BlogPosting` JSON-LD) was proposed, the natural implementation path was a `BlogPostPage` swizzle — but
there was no ADR or POL to consult, amend, or cite a documented alternative from, so the work stalled
mid-session until Tony made an ad hoc governance call. See `docs/agents/LESSONS-LEARNED.md` LL-001: an
informal CONTEXT-KERNEL restriction with no corresponding POL/ADR blocks work without a resolution path.

By the time WQ-014 actually shipped (commit 8289b95, HL-004), a swizzle-free technique — a per-article
`<head>` block with JSON-LD delivered as a JSX template-literal script child — had been found and proved
sufficient. That technique is now the established pattern (`docs/agents/LESSONS-LEARNED.md` LL-004) and
has since been reused for every per-page SEO/meta customization on the site without incident.

## Decision

This codebase does not use `yarn swizzle` (or any Docusaurus theme-component ejection) under any
circumstance. All page- and article-level customization — SEO meta tags, structured data (JSON-LD),
canonical links, and visual/theme overrides — is achieved instead through:

1. **Per-file `<head>` block injection** (MDX articles) for per-article SEO/meta/structured-data needs
   — see LL-004.
2. **CSS variable overrides** in `src/css/custom.css` (`:root` / `[data-theme='dark']`) for global theme
   styling, and `[data-theme='dark'] .className` overrides inside CSS Modules for component-level dark
   mode — never `yarn swizzle`, and never `@media (prefers-color-scheme: dark)` inside a module (that
   pattern ignores a manual theme toggle that disagrees with the OS preference).

## Rationale

Swizzling ejects a copy of a Docusaurus theme component into the codebase, which then must be manually
kept in sync with the upstream component on every future Docusaurus upgrade. For a small marketing site
with no dedicated frontend team, that is a permanent maintenance liability taken on for what is usually a
narrow, one-off customization need. Every customization requirement encountered on this site so far — SEO
fields, JSON-LD structured data, dark-mode styling — has been fully satisfiable through the head-block and
CSS-variable-override patterns without ejecting any component, which is direct evidence the ban does not
under-serve real needs.

## Consequences

- Any future page- or article-level customization must first be attempted via a `<head>` block injection
  or a CSS variable override before any other approach is considered.
- If a genuine need arises that neither pattern can satisfy, that is grounds to open a new ADR proposing
  an amendment to this POL — not grounds to swizzle first and seek a decision afterward. This gives the
  restriction the resolution path LL-001 found missing.
- `docs/agents/CONTEXT-KERNEL.md`'s existing "No Docusaurus swizzle" non-negotiable and `CLAUDE.md`'s
  "Prefer CSS variable overrides... over `yarn swizzle`" line are now backed by this formal record; no
  wording change is required in either, since both already state the rule this POL formalizes.

## Alternatives Rejected

- **Swizzle `BlogPostPage` (or any other theme component) for per-article customization** — considered
  during WQ-014 as the "natural" path for injecting `og:type`/JSON-LD, and rejected once the swizzle-free
  head-block pattern proved sufficient; rejected as a standing default because of the upgrade-sync
  maintenance burden described above. Remains available only via a future ADR amending this POL, not as
  a default fallback.
