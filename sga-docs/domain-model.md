---
sidebar_position: 3
title: "Domain Model — Ubiquitous Language"
---

# Domain Model — Ubiquitous Language

**Status:** the project's ubiquitous language in one place. The design principles behind it
(a representation-agnostic `Genome[A]`, invariants named explicitly rather than left implicit)
come from two articles: [Great Martinis & Algorithms are DRY](https://www.tjm.solutions/articles/2026/08/16/great-martinis-and-algorithms-are-dry) and
[Name the Dragon](https://www.tjm.solutions/articles/2026/07/11/name-the-dragon). Every term here is checked against the real type signatures in
`sga/src`.

**Why this matters beyond documentation**: a domain model isn't decoration for a BDD/TDD blend,
it's the thing both depend on. BDD scenarios are only as precise as the vocabulary they're
written in; TDD test names only trace back to intent if that vocabulary is stated once and
reused, not reinvented per file. See "The blend" at the end of this doc for how these three
practices are meant to connect in this project, and where that connection is real versus still a
gap.

---

## The core protocol vocabulary (root package — Mitchell's SGA shape)

| Term | Real signature | What it is, precisely |
|---|---|---|
| **Genome** (`G`) | a fully abstract type parameter | The candidate representation — a bit string, a permutation, a tree, whatever a problem needs. Never wrapped in a `population`/`genome` type of its own; the engine never inspects it. |
| **Population** | `Vector[G]` | Plain data. Not a named type — a wrapper here would itself be an unwarranted representation commitment. |
| **Fitness** | `Fitness[G] = G => Double` | A function, not a value — "fitness" the function and "fitness" the score are different things and must not merge (see below). |
| **Scored** | `final case class Scored[G](genome: G, fitness: Double)` | A genome paired with its evaluated fitness — the score, not the function. |
| **Selector** | `Selector[G] = Vector[Scored[G]] => Rand[G]` | Picks *one* parent from a scored population. Called twice per offspring pair by `Breed` — not a whole-population replacement function standing in for the reproductive cycle. |
| **Crossover** | recombines two genomes into two offspring | Representation-specific (single-point for bit strings, ordered crossover for permutations) — supplied by the caller, never branched on inside the engine. |
| **Mutation** | varies one genome | Same supplied-by-caller discipline as `Crossover`. |
| **Replacement** | `Replacement[G] = (Vector[G], Vector[G]) => Vector[G]` | Decides the next generation's population from the current one and the offspring — plain genomes, no fitness attached. |
| **Termination** | `Termination[G] = RunState[G] => Boolean` | Decides when a run stops. A named, composable predicate (the ["name the dragon"](https://www.tjm.solutions/articles/2026/07/11/name-the-dragon) principle — this was deliberately *not* built as a `StopDecision` ADT; a predicate was enough as long as it's named and composable). |
| **RunState** | `final case class RunState[G](generation: Int, population: Vector[G], scored: Vector[Scored[G]])` | What a run *is*, at any point in time — generation number, current population, current scores. |
| **RunReport** | seed, populationSize, generationsRun, fitnessTrajectory, bestGenome, bestFitness | What a *completed* run produced — best-ever, not just the final generation's — plus enough to reproduce it exactly (the seed). |
| **Breed** | select twice → crossover → mutate twice | The actual reproductive step Mitchell's SGA performs to produce one offspring pair. |
| **Step** | advances a `RunState` by exactly one generation | The pure "what would happen next" function — `Run` is the loop that actually performs it repeatedly. |
| **Run** | loops `Step` until `Termination` | The evolutionary lifecycle, executed. |
| **MultiSeed** | repeated `Run`s across seeds | Robustness signal beyond one lucky run — `fitnessSummary`, `featureSelectionFrequency`. |

## PCKaNN's vocabulary — a genuinely different reproduction pipeline, not a mode flag

| Term | Real signature | Why it's a different shape, not a variant of the above |
|---|---|---|
| **Culling** | `Culling[G] = Vector[Scored[G]] => Vector[Scored[G]]` | Pre-selection *pruning* of a scored population — a different arity and intent from `Selector` (which picks one genome; `Culling` filters a whole population). |
| **ElitistReplacement** | `ElitistReplacement[G] = (Vector[Scored[G]], Vector[Scored[G]]) => Vector[Scored[G]]` | Operates on *scored* genomes on both sides — `Replacement` operates on plain genomes. This type difference is why `PcknnStep` had to be its own function, not a `GeneticAlgorithm` config swap — confirmed by type-checking, not asserted (`README.md`'s own Architecture section makes the same point with a diagram). |

## Data vocabulary (`data` package)

| Term | What it is |
|---|---|
| **Sample[L]** | One measurement: a feature vector plus a label of type `L`. |
| **Dataset[L]** | `Vector[Sample[L]]`, with a real invariant (every sample's feature vector is the same length). |
| **Scaling** | Fit/apply-split autoscaling — the fitted parameters and the transform are separate, so a model is never re-fit on data it's later asked to predict against. |

## The `io` seam vocabulary

| Term | What it is |
|---|---|
| **RawRow** | `Map[String, String]` — the source-agnostic boundary every decoder (`Csv`, `Libsvm`, `Rruff`, `Postgres`) produces, regardless of where the data actually came from. |
| **Decoder** | Not a named type, a role: any function producing `Vector[RawRow]` from a real source. `RawRow.toDataset` is the one function that turns that into a typed `Dataset[L]`, and it has proven unmodified across every decoder built so far. |

---

## Terms that look alike and must not merge

Naming this explicitly is itself a DDD practice this project already benefits from informally
(`Classification.scala`'s own docstring already draws the fitness-function/fitness-score
distinction) — stated once, here, rather than re-derived per docstring:

- **Genome** (the abstract representation `G`) vs. **chromosome** (Mitchell's own term for his
  specific bit-string instantiation) — a chromosome *is* a genome; not every genome is a
  chromosome.
- **Fitness** the function (`Fitness[G] = G => Double`) vs. **fitness** the score
  (`Scored[G].fitness: Double`) — the same English word, two different things, one call away
  from each other in every piece of code that touches both.
- **Selection** (Mitchell's SGA — `Selector` picks one parent) vs. **Culling** (PCKaNN —
  filters a whole population) — surface-similar ("which genomes survive"), structurally
  different operations, see the table above.
- **Replacement** (plain genomes) vs. **ElitistReplacement** (scored genomes) — same English
  word, different type signature, different pipeline.

---

## The blend — where DDD → BDD → TDD actually connects, and where it's still a gap

**The intended flow**: a domain model (this doc) states the vocabulary precisely → BDD scenarios
are written *in that vocabulary*, describing observable behavior a domain expert or user would
recognize → TDD drives the implementation, with test names and structure tracing back to both the
domain terms and the scenarios they satisfy. Each layer should make the next one easier to write
correctly, not exist as a separate, disconnected activity.

**What's real today**:
- TDD is genuinely strong and this project's dominant practice — hundreds of tests, real property-based
  tests where a claim is "holds for all inputs" rather than "holds for this one example"
  (the project's stated standard), real data throughout.
- DDD is *practiced* at the code level — representation-agnostic `Genome[A]`, invariants named
  as typed decision points rather than left implicit, the terms-that-look-alike discipline above
  already showing up in real docstrings before this doc existed.
- BDD exists in exactly one place — `docs/operator-panel-bdd-scenarios.md`, for the still-unbuilt
  operator panel — and now has this doc to draw its vocabulary from precisely, rather than
  informally.

**What's still a real gap, named rather than glossed over**:
- The CLI (`Cli`/`Main`) is this project's *other* real user-facing surface — a human runs a
  command and observes specific behavior (a runtime warning instead of a silent hang, a modeled
  error instead of a stack trace, format dispatch between `csv`/`libsvm`/`postgres`) — and it has
  zero BDD coverage today, only unit tests (`CliSuite`, 31 tests). This is the same shape of gap
  the operator panel had before its own scenarios got written, just not yet closed here.
- The operator-panel scenarios were written *before* this doc existed, so the connection is
  retroactive, not yet proven forward — the real test of whether this actually closes the loop
  is whether a future BDD-scenario pass (the CLI, or the operator panel once it's built) visibly
  reuses this doc's terms rather than reinventing them.
