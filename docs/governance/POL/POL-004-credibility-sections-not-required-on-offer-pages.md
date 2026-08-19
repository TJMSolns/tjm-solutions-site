# POL-004: Credibility Sections Not Required on Offer Pages

**Status:** Active
**Date:** 2026-08-19

## Context

PDR-008 (2026-06-26, DR-034) retired the earlier PDR-001 "≥3 battle-tested offers per card" gate and
replaced it with a lighter listability condition: an offer is listable when complete (Level 1) AND
credibility-backed (a named prior engagement, published thought leadership, or a delivered engagement).

WQ-042's site-wide "consistency sweep" (commit 99feb28, 2026-07-22) removed the credibility section
from all 22 offer pages, for a separate, real reason: those sections risked implying an internal
delivery at TJM Solutions that did not occur, a legal-exposure concern (see WQ-039/042). An independent
verifier caught the resulting conflict during a WQ-016 groom-pass closure attempt: PDR-008 still
required credibility-backing, but 21 of 22 live offer pages carried none. Flagged as WQ-045, open since
2026-07-10, re-confirmed unresolved across 51 consecutive sessions (HL-008 through HL-058).

Tony partially addressed the underlying tension on 2026-07-22 by decoupling WQ-045 from the offer-page
sign-off chain (WQ-009's 22 pages shipped without waiting on it), stating "credibility question is
separate, websites are for merchandising." That unblocked the sign-off but was not itself a ruling on
PDR-008's conflicting requirement.

## Decision

Offer pages do not require a credibility section to be listable. The 20 remaining offer pages (of the
original 22; DT-2 was separately removed entirely on 2026-08-19, WQ-065, for an unrelated reason: its
specific credibility backing, SCKB, is not done) stay as-is, with no credibility section, matching how
the site has run since WQ-042 shipped.

Confirmed 2026-08-19 (Tony, direct question: "Leave as-is (Recommended): matches how the site has run
for weeks; closes this out as a non-issue").

## Rationale

The site has run for roughly a month with 21 of 22 offer pages carrying no credibility content, with no
adverse effect observed. Tony's own stated rationale from 2026-07-22 ("websites are for merchandising")
already pointed this direction; this decision formalizes it rather than leaving the policy and the live
site permanently disagreeing with each other.

## Consequences

- PDR-008's credibility-backing listability condition is effectively superseded for offer pages by this
  policy: an offer page needs only to be complete (Level 1) to be listable, not credibility-backed.
- WQ-045 closes. WQ-016 (which was blocked in substance on this same reconciliation) also closes, since
  its subject, restoring DT-2's credibility section, is moot twice over: DT-2 no longer exists (WQ-065),
  and credibility sections are no longer required at all.
- If a future offer page wants to carry a credibility section (a real named engagement, once one
  exists), nothing here prevents adding one; this decision sets a floor (not required), not a ceiling
  (not permitted).

## Alternatives Rejected

- **Restore credibility content in a legally-safe form** (the other option WQ-045 originally posed):
  rejected. Would require finding a way to reference real engagements without naming clients or
  implying internal TJM Solutions delivery, the exact tension WQ-039/042 removed the sections to avoid
  in the first place. No such safe form was proposed or requested.
