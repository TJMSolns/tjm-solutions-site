---
sidebar_position: 4
title: "How sga compares"
---

# How sga compares

Real adoption decisions get made on "why this one," and leaving that
question to a newcomer's own research is an avoidable barrier. This is
based on each project's own public README/site, not a hands-on trial of
either — read that way, not as a benchmark or a claim of deep familiarity
with their internals.

## [Jenetics](https://jenetics.io/) (Java)

The most mature, most widely used general-purpose GA library on the JVM.
Zero runtime dependencies, a `Stream`-based evolution API, and real scope
`sga` doesn't attempt: Genetic Programming, Grammatical Evolution, and
multi-objective optimization alongside plain GAs, with extensible
chromosome types beyond bit strings. If you want a battle-tested,
feature-complete library and don't specifically need Scala idioms, this is
the obvious first choice — `sga` isn't trying to out-feature it.

`sga`'s difference isn't more features, it's a different design center:
`sga`'s whole engine is closed over 6 small, independently testable
function types (`Fitness`/`Selector`/`Crossover`/`Mutation`/`Replacement`/
`Termination`), genome-agnostic by construction rather than via a
`Chromosome` class hierarchy — see
[`docs/write-your-own-problem.md`](./write-your-own-problem) for what
that looks like in practice for a genuinely new representation.

## [mgo](https://github.com/openmole/mgo) (Scala)

The most-starred genuinely Scala-native GA library found, and the closest
in spirit — purely functional, immutability-enforced. Its actual scope is
narrower than "general GA library" though: it's built specifically for
**multi-objective** optimization (NSGA-II/NSGA-III and related algorithms)
over **continuous vector genomes**, and its heavier features (noisy-fitness
handling, distributed execution) are tied into the
[OpenMOLE](https://openmole.org/) platform it's part of. If your problem
is genuinely multi-objective and continuous-valued, it's a closer domain
fit than `sga`.

`sga` is single-objective, genome-representation-agnostic (bit strings,
permutations, or anything else a caller's `Fitness`/`Crossover`/`Mutation`
can express — not committed to continuous vectors), and has no ties to any
larger platform.

## Where `sga` actually sits

Smaller and younger than either — pre-1.0, single-objective only, no
genetic programming or grammatical evolution, no distributed execution.
What it commits to instead: a genuinely minimal, genome-agnostic core (no
`Chromosome`/`Genotype` class hierarchy, no platform dependency), zero
non-test runtime dependencies, and a real proof the "any genome" claim
holds — not just an assertion of it (see the TSP guide linked above). If
you want the most mature library, use Jenetics. If your problem is
multi-objective/continuous, look at mgo. If you want a small,
representation-agnostic core you can read start to finish and extend to a
problem type it's never seen, that's `sga`'s actual niche.
