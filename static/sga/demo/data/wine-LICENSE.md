# Provenance and license — `wine.data`

**Source**: UCI Machine Learning Repository, "Wine" —
https://archive.ics.uci.edu/dataset/109/wine

**Fetched**: 2026-08-24, verbatim via `curl` (the official zip release,
not paraphrased or reconstructed).

**What this file is**: `wine.data`, chemical/spectrophotometric analysis
of 178 wines grown in the same Italian region from 3 different cultivars.
Verified against the real file: 178 rows, class column (1) counts
59/71/48, matching the source documentation exactly. No header row — the
13 real feature names below are from `wine.names` (also in the zip, not
vendored here since only the data file is needed):

1. class (label: 1/2/3)
2. Alcohol
3. Malic acid
4. Ash
5. Alcalinity of ash
6. Magnesium
7. Total phenols
8. Flavanoids
9. Nonflavanoid phenols
10. Proanthocyanins
11. Color intensity
12. Hue
13. OD280/OD315 of diluted wines
14. Proline

**Format**: comma-delimited, no header row — loaded via `Csv.parse`'s
`headers` parameter (caller-supplied names, not a synthetic header line),
same mechanism proven in `CsvSuite`.

## License — CC BY 4.0, verified from the raw page text

Grepped directly from the fetched HTML, not paraphrased: "Creative
Commons Attribution 4.0 International" appears on the source page.
Attribution required, commercial use permitted — the strongest license
of any real dataset in this repo (Iris is credited the same way, see
`iris-LICENSE.md`; the gas-sensor dataset is research-use-only).
