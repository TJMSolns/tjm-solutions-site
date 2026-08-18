# POL-003: Accessibility Gate Coverage Strategy

**Status:** Active
**Date:** 2026-08-18

## Context

POL-002 gate 1 requires WCAG AA compliance, in **both** themes, before every deploy. The
implementation has never satisfied it. `npm run wcag:check` checks exactly four hardcoded URLs
(`/`, `/about`, `/rates`, `/articles`) in **dark** theme only — the site sets
`colorMode.defaultMode: 'dark'` with `respectPrefersColorScheme: true`, so an unconfigured pa11y run
renders dark, a fact nobody had checked. Against a 74-page site that is **5%
page coverage and 50% theme coverage**, and it includes not one article page and not one offer
page — the two page types that grow.

WQ-052 was raised to decide how to close that gap without the gate becoming slow enough to be
skipped, or non-deterministic enough to be distrusted. Three options were tabled: (a) per-page
checked-timestamps with incremental re-checks, (b) all nav pages plus a 10% random sample,
(c) a combination of nav pages, changed pages, and one representative per template.

All three are answers to a question that turns out to be false. Nobody had measured the full
sweep. Measured 2026-08-18 on this site (8 cores, pa11y WCAG2AA against a served production build):
**74 pages in 60.3s** via the pa11y CLI at `xargs -P 6` (fresh browser per page), and **74 pages in
15.6s** via the programmatic pa11y API with a shared Puppeteer browser at concurrency 6. Both themes
on the faster path is about **31 seconds**; the CLI path's 148 runs would be roughly **2 minutes**.

Neither figure is a gate anyone needs to optimise. Every sampling and caching scheme proposed
exists to avoid a cost that does not exist, while adding failure modes that do:

- **Option (a) is unsound and was already known to be.** A page's accessibility depends on shared
  CSS, shared components, design tokens and the Docusaurus version, not on its own source. WQ-042's
  gray-scale token bug broke dark mode across multiple pages without editing any of them; every one
  would have carried a valid-looking "checked, passed" stamp. A correct cache key would have to
  cover the entire render input, at which point almost every commit invalidates the whole cache and
  the mechanism buys nothing but a way to be wrong.
- **Option (b) makes the gate non-deterministic.** The same code passes one run and fails the next.
  That trains people to re-run rather than to trust, which is worse than no gate.
- **Option (c) is sound but unnecessary.** It is the right design for a site where the full sweep is
  genuinely too slow. This site is not that, and the complexity is real: deciding what "changed"
  means, maintaining the template-representative list, and keeping both correct as the site evolves.

The decisive evidence arrived while measuring. The first full sweep ever run against this site
immediately found a **live WCAG2AA violation on production**: syntax-highlighting comment tokens
render at a 3.03:1 contrast ratio against the code-block background, on 5 elements across 3 pages
(queued as WQ-056). It is one shared token, so any page with a commented code block is affected.
The four-URL gate could never have found it, because none of those four pages contains a code
comment. Under option (b) it would have surfaced only when the random draw happened to include an
affected page — nondeterministically, possibly months later.

## Decision

**Check every page, in both themes, on every run. No caching, no sampling, no rotation.**

1. **Enumerate targets from the built output** (`build/sitemap.xml`), never from a hardcoded list.
   New pages are covered the day they ship, with no one remembering to add them.
2. **Both themes for every page.** Drive the theme explicitly rather than relying on the default;
   Docusaurus persists it in `localStorage.theme`.
3. **Run in parallel.** `-P 6` is the measured configuration; tune to the runner, but parallelism is
   what makes full coverage affordable.
4. **The runner must print what it covered and what it skipped**, with counts, on every run. A
   partial run that reads as a full one is how the month-long silent deploy failure (WQ-038) stayed
   hidden. If any page is skipped for any reason — timeout, fetch failure, exclusion — it is named
   in the output, and a skip is a failure unless explicitly allowlisted.
5. **CI is the enforcing gate**, since deployment is CI-driven. The same command must be runnable
   locally and behave identically.

**Revisit trigger.** This decision rests on a measurement, so it expires when the measurement does.
If the full dual-theme sweep exceeds **5 minutes** wall-clock, reopen this policy and adopt option
(c) — nav pages, changed pages, and one representative per template — which remains the correct
fallback design. At the measured shared-browser rate the threshold is well over a thousand pages; on
the slower CLI path it is roughly 145 pages, about double the
present site.

## Rationale

Chosen over (a), (b) and (c) because measurement removed the constraint they were designed around.
Full coverage is the only option with no false-negative class: it cannot mis-key a cache, cannot
miss a page the sampler did not draw, and cannot report a stale pass. It is also the simplest thing
to implement and the easiest to keep correct, which matters more than elegance for a gate that must
stay trustworthy across many sessions.

The explicit revisit trigger is the part that makes this safe. The usual failure of a "just check
everything" policy is that it silently becomes untenable as the site grows and is then quietly
skipped. Naming the threshold, and the specific design to adopt when it is crossed, means the
policy degrades deliberately instead of by neglect.

## Consequences

- **Enables:** WQ-051 to proceed with a decided strategy — enumerate from sitemap, both themes, full
  sweep, honest coverage reporting.
- **Enables:** systemic, shared-CSS defects to be caught, which is the class that actually occurs
  here (WQ-042's token bug, WQ-056's comment-token contrast).
- **Constrains:** roughly 31 seconds added to CI per run at present size on the programmatic path
  (about 2 minutes on the CLI path).
- **Constrains:** POL-002 gate 1 becomes genuinely enforceable rather than nominally so. **Expect the
  gate to fail loudly on first full enablement: 7 pages / 233 errors in light theme, 3 pages / 5 errors
  in dark, 238 total (WQ-056).** That is the gate working, not the gate broken.
- **Constrains:** the theme must be driven via the **programmatic pa11y API** with a supplied Puppeteer
  `page`. pa11y 9.0.1's CLI has no `--actions` flag and no `beforeScript`, and the config-file
  `actions` route (clicking the colour-mode toggle) fails on this site — the toggle reports as not
  clickable, then times out at ~32s per page, roughly 40x slower than the measured path.
- **Obligation:** if the sweep crosses 5 minutes, this policy must be reopened rather than the gate
  narrowed ad hoc.
