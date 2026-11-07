# Provenance and license — `glass.data`

**Source**: UCI Machine Learning Repository, "Glass Identification" —
https://archive.ics.uci.edu/dataset/42/glass+identification

**Fetched**: 2026-08-24, verbatim via `curl` (the official zip release).

**What this file is**: 214 glass samples, elemental/refractive-index
composition, forensic origin-identification (glass.names, donated by
B. German, Home Office Forensic Science Service). Verified against the
real file: 214 rows, class column (11, last) counts 70/76/17/13/9/29,
matching source documentation. Class 4 (vehicle windows, non-float) has
0 samples in this data — real, not synthetic, class imbalance.

No header row. Columns, from `glass.names`:

1. Id (1..214 — not a feature)
2. RI: refractive index
3. Na: Sodium (wt% oxide)
4. Mg: Magnesium
5. Al: Aluminum
6. Si: Silicon
7. K: Potassium
8. Ca: Calcium
9. Ba: Barium
10. Fe: Iron
11. Type of glass (label: 1 building-windows-float, 2 building-windows-
    non-float, 3 vehicle-windows-float, 5 containers, 6 tableware,
    7 headlamps — class 4 unused)

**Format**: comma-delimited, no header row — loaded via `Csv.parse`'s
`headers` parameter, same mechanism as `wine.data`. `Id` is excluded
from `featureColumns` in the demo (not a real feature).

## License — CC BY 4.0, verified from the raw page text

Grepped directly from the fetched HTML: "Creative Commons Attribution
4.0 International" appears on the source page. Same license as
`wine.data` and every other UCI-sourced fixture in this repo.
