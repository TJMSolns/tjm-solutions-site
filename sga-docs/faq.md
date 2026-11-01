---
sidebar_position: 5
title: "FAQ"
---

# FAQ

Real questions this project's own documented design decisions and known
limitations already answer — collected here so a newcomer doesn't have to
dig through docstrings to find them.

## Why leave-one-out instead of a train/test split?

Training on a sample and testing on itself would make `k = 1`
nearest-neighbor classification trivially perfect — a real correctness bug,
not a subtlety, if the evaluation loop isn't careful about it. Leave-one-out
(classify each sample against every *other* sample) sidesteps that
correctly by construction, and needs no split-ratio parameter invented to
avoid the problem. See `Classification.leaveOneOutAccuracy`'s own
docstring for the exact reasoning.

The real cost: it's O(n²) in sample count (a pairwise distance computation
for every held-out sample). The CLI warns rather than refuses when a run's
estimated cost is high (`Cli.estimatedRuntimeWarning`) — see
[Known Limitations](./intro#limitations).

## Why no ZIO or other effect system?

`sga` is a computation, not a service. Every algorithm here is a pure,
synchronous function over immutable data — there's no I/O to sequence, no
concurrency to coordinate, no resource to acquire/release. An effect
system earns its complexity when a program's *shape* is asynchronous or
side-effecting; `sga`'s isn't. Randomness is threaded explicitly and
purely instead, via `Rand[A] = Rng => (A, Rng)` — a proper state-monad
type alias, not `scala.util.Random`, so runs stay deterministic and
reproducible from a seed.

## Why is AdaBoost binary-label only?

`ml.AdaBoost` operates on `Dataset[Boolean]` specifically — multi-class
boosting (SAMME, or a one-vs-rest decomposition) is real, documented,
not-yet-built work, not an oversight. See
[Known Limitations](./intro#limitations).

## Why is PCKaNN's reduction-reward weighting unresolved?

PCKaNN's fitness function — whether/how it weights feature-count reduction
alongside classification accuracy — is genuinely unresolved between its
two real primary sources (a 1998 article describing one weighting scheme,
a 2000 thesis stating the reduction term wasn't originally part of the
fitness function at all). Rather than guess or invent a resolution, `sga`
leaves this deferred and documents the disagreement directly in
`ml.Classification.fitness`'s own docstring. Both sources are listed
in the README's References.

## Does `sga` handle regression, not just classification?

Not yet. Every dataset `sga` currently works with is a classification
problem; two real regression-shaped datasets were deliberately set aside
during development for exactly this reason. `Fitness[G] = G => Double`
itself doesn't assume classification — a regression-fitness function is a
composition a caller could write today — but no regression-specific
tooling (an error-metric library, a regression demo) exists yet.

## Is this genuinely a general-purpose GA library, or a feature-selection tool with extra steps?

Every demo in this repo before
[`docs/write-your-own-problem.md`](./write-your-own-problem) used
`Vector[Boolean]` feature-selection genomes, which is fair grounds for
skepticism about the "protocol, not variant" charter claim. That guide
exists specifically to answer this question with real, tested code
against a problem `sga` was never built for (the Traveling Salesman
Problem — an ordering search, not a feature mask) — not just assert the
claim again.

## What's the license situation with the bundled test-fixture datasets?

Three real tiers, not one blanket answer — see
[License section](./intro#license) for the full breakdown
per dataset. `sga`'s own code is MIT regardless; the vendored real-data
fixtures carry their own separate terms, checked and documented
individually (`*-LICENSE.md` files), not assumed uniform.
