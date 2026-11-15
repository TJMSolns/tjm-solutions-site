# Provenance and license: `sonar.all-data`

**Source**: UCI Machine Learning Repository, "Connectionist Bench (Sonar, Mines vs. Rocks)":
https://archive.ics.uci.edu/dataset/151/connectionist+bench+sonar+mines+vs+rocks, cited there as
Gorman, R. (1988). Connectionist Bench (Sonar, Mines vs. Rocks) [Dataset]. UCI Machine Learning
Repository. https://doi.org/10.24432/C5T01Q

**Fetched**: 2026-11-15, verbatim via `curl` (the official zip release), `sonar.all-data` from it.

**What this file is**: the data Gorman and Sejnowski used to classify sonar returns with a neural
network (`sonar.names`, in the zip). 208 sonar returns: 111 bounced off a metal cylinder (label
`M`, a mine) and 97 off a roughly cylindrical rock (`R`), each 60 numbers from 0.0 to 1.0, the
energy in one frequency band of the chirp, integrated over time. Verified against the real file:
208 rows, 61 comma-separated fields, the label last, 111 `M` and 97 `R`.

**Column names**: the file has none and `sonar.names` gives none; sga's presets call the 60
columns `band_01` to `band_60`, in the file's order.

**Format**: comma-delimited, no header row, loaded via `Csv.parse`'s `headers` parameter, the
same mechanism as `wine.data`.

## License: CC BY 4.0, verified from the raw page text

Grepped from the fetched HTML of the dataset's page, not paraphrased: "Creative Commons
Attribution 4.0 International" appears on it (2026-11-15). Attribution required, commercial use
permitted, the same license as `wine.data`, `glass.data` and `qsar-biodeg.csv`.
