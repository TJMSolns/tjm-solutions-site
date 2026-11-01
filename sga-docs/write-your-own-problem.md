---
sidebar_position: 2
title: "Write your own problem"
---

# Write your own problem

`sga`'s charter says it's a *protocol, not a variant*: given a genome
representation, a fitness function, and a set of variation operators
supplied by the caller, it evolves a population toward higher fitness —
without the engine ever needing to know what a genome represents or what
"fitness" means for the caller's problem. Every demo in this repo so far
has used the same genome shape, though: `Vector[Boolean]`, a feature-
selection mask. That's real evidence the engine works, but it doesn't by
itself prove the "any genome" claim.

This guide does, with a problem `sga` has never seen: the Traveling
Salesman Problem (TSP) — find the shortest tour visiting every city
exactly once and returning to the start. A tour isn't a feature mask,
it's an *ordering*. Writing it forces every extension point the charter
promises, not just the one every existing demo happens to exercise.

The real, tested, working code behind this guide is
[`TspDemoSuite.scala`](https://github.com/TJMSolns/sga/blob/master/sga/test/src/solutions/tjm/sga/TspDemoSuite.scala)
— every snippet below is drawn from it, not written fresh for the guide.

## Step 1 — pick a genome representation

Every existing demo represents a genome as `Vector[Boolean]`: one bit per
feature, selected or not. A TSP tour is fundamentally different — it's a
*permutation* of city indices, where **order is the entire point**.
Splicing two different tours together the way `singlePointCrossover`
splices two feature masks would produce a `Vector[Int]` with duplicate
cities and missing ones — not a corrupted-but-recoverable answer, a
genuinely invalid tour. The representation itself has an invariant
(every value 0 until n appears exactly once) that a generic `Vector[A]`
crossover/mutation can't preserve without knowing about it.

So the genome type here is `Vector[Int]`, where `tour(i)` is the index of
the `i`th city visited.

## Step 2 — write a `Fitness`

```scala
private val cities: Vector[(Double, Double)] =
  (0 until 6).map(k => (math.cos(math.toRadians(60.0 * k)), math.sin(math.toRadians(60.0 * k)))).toVector

private def distance(a: Int, b: Int): Double =
  norm(subtract(Vector(cities(a)._1, cities(a)._2), Vector(cities(b)._1, cities(b)._2)))

private def tourLength(tour: Vector[Int]): Double =
  tour.indices.map(i => distance(tour(i), tour((i + 1) % tour.length))).sum

val fitness: Fitness[Vector[Int]] = tour => 1.0 / (1.0 + tourLength(tour))
```

`Fitness[G] = G => Double` doesn't care what `G` is — this is the whole
point. `distance`/`tourLength` reuse `linalg.norm`/`subtract`, already
built for entirely unrelated reasons (PCA, Mahalanobis distance), because
"Euclidean distance between two points" was never actually PCA-specific
or TSP-specific — it's just linear algebra.

The one real design decision: `sga`'s GA *maximizes* fitness, but a tour
length wants *minimizing*. `1.0 / (1.0 + tourLength(tour))` inverts that
— bounded in `(0, 1]`, strictly higher for shorter tours, and always
positive (so `Selector.rouletteSelection`'s fallback for a non-positive
fitness sum never triggers). This is a problem-specific decision every
minimization problem needs to make; the engine doesn't have an opinion.

## Step 3 — pick (or write) operators that respect the representation

This is where the "any genome" claim gets tested for real. `Crossover`/
`Mutation` are plain function types (`(G, G) => Rand[(G, G)]` and
`G => Rand[G]`) — nothing in their signature assumes bits. But the
*existing* implementations do assume something weaker and still real:
`singlePointCrossover`/`bitwiseMutation` treat every locus as
independently perturbable, which is exactly what a permutation can't
tolerate.

Three new, genuinely reusable primitives exist for exactly this
representation — not TSP-specific, usable by any problem that searches
over orderings (job-shop scheduling, a route through waypoints, ...):

- **`Initializer.permutationPopulation(length)`** — a starting population
  of random permutations of `0 until length`, via the existing `shuffle`
  combinator. The permutation analogue of `randomBitPopulation`.
- **`Crossover.orderCrossover(pc)`** — with probability `pc`, keeps one
  parent's segment between two random cut points fixed at its original
  position, then fills the remaining positions with the other parent's
  elements in their own relative order, skipping anything already
  placed. Both children are guaranteed to stay real permutations — the
  segment can't introduce a duplicate, and the fill step explicitly
  skips values the segment already used.
- **`Mutation.swapMutation(pm)`** — with probability `pm`, swaps two
  randomly chosen positions. A permutation-preserving perturbation, the
  same role `bitwiseMutation` plays for bit strings.

```scala
val ga = GeneticAlgorithm[Vector[Int]](
  initialize = Initializer.permutationPopulation(length = 6),
  fitness = fitness,
  select = Selector.rouletteSelection,
  crossover = Crossover.orderCrossover(pc = 0.7),
  mutate = Mutation.swapMutation(pm = 1.0 / 6),
  replace = Replacement.generationalReplacement,
  terminate = Termination.afterGenerations(maximum = 50)
)
```

`Selector.rouletteSelection`, `Replacement.generationalReplacement`, and
`Termination.afterGenerations` are unchanged from every other demo —
selection/replacement/termination don't care about genome shape at all,
only about fitness values and population size. That's not a coincidence;
it's the actual boundary the charter draws.

## Step 4 — run it

```scala
val report = runWithReport(ga, populationSize = 30, seed = 42L)
```

Same `runWithReport` every other demo calls, completely unmodified.

## Step 5 — verify against real ground truth

`TspDemoSuite` doesn't just check "some tour came back" — it checks
against a real, independently computable optimum. Six cities are placed
at the vertices of a regular hexagon (real floating-point coordinates,
`math.cos`/`math.sin`, not idealized numbers). For points in convex
position, the shortest Hamiltonian cycle is always the boundary order —
a real geometric fact, not a claim specific to this guide — so the
perimeter tour is the *true* global optimum, computed directly at
exactly `6.0` (a regular hexagon's side length equals its circumradius,
here `1.0`, times 6 sides). A genuinely crossing tour on the same 6
cities measures `~9.93` — a large, non-borderline gap, not a coin-flip
comparison.

Run for real: the GA converges to the true `6.0`-length optimal tour —
checked directly against 20 different seeds while building this guide,
not just the one committed to the test file, and it found the optimum
every single time.

## What's reusable, and what isn't

The proof this guide is actually making: `Initializer.
permutationPopulation`, `Crossover.orderCrossover`, and `Mutation.
swapMutation` are real additions to `sga`'s own library — genuinely
reusable by *any* permutation-genome problem, not vendored into a TSP
module. Everything else in `TspDemoSuite` (`cities`, `distance`,
`tourLength`, the fitness inversion) is TSP-specific and lives entirely
in the demo file, exactly where problem-specific code belongs. `sga`
itself never grew a `Tsp` module, a `City` type, or any TSP-aware code —
the same test this guide opened with, passed.
