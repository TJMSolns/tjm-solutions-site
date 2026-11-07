# Provenance and license — `qsar-biodeg.csv`

**Source**: UCI Machine Learning Repository, "QSAR Biodegradation" —
https://archive.ics.uci.edu/dataset/254/qsar+biodegradation

**Fetched**: 2026-08-24, verbatim via `curl` (the official zip release).

**What this file is**: `biodeg.csv`, 41 computed molecular descriptors
(topological, geometric, electronic properties derived algorithmically
from each molecule's structure — NOT a physical measurement, unlike
every other real dataset in this repo) plus a binary biodegradability
label. Verified against the real file: 1055 rows, 42 fields, label
column (last) counts RB=356/NRB=699, matching UCI's own documentation.
Semicolon-delimited, no header row.

**The 41 descriptor names**, from UCI's own dataset API
(`additional_info.variable_info`, fetched directly, not paraphrased —
column meanings are documented only in this separate metadata, not in
the file itself):

1. SpMax_L — Leading eigenvalue from Laplace matrix
2. J_Dz(e) — Balaban-like index from Barysz matrix weighted by Sanderson electronegativity
3. nHM — Number of heavy atoms
4. F01[N-N] — Frequency of N-N at topological distance 1
5. F04[C-N] — Frequency of C-N at topological distance 4
6. NssssC — Number of atoms of type ssssC
7. nCb- — Number of substituted benzene C(sp2)
8. C% — Percentage of C atoms
9. nCp — Number of terminal primary C(sp3)
10. nO — Number of oxygen atoms
11. F03[C-N] — Frequency of C-N at topological distance 3
12. SdssC — Sum of dssC E-states
13. HyWi_B(m) — Hyper-Wiener-like index (log function) from Burden matrix weighted by mass
14. LOC — Lopping centric index
15. SM6_L — Spectral moment of order 6 from Laplace matrix
16. F03[C-O] — Frequency of C-O at topological distance 3
17. Me — Mean atomic Sanderson electronegativity (scaled on Carbon atom)
18. Mi — Mean first ionization potential (scaled on Carbon atom)
19. nN-N — Number of N hydrazines
20. nArNO2 — Number of nitro groups (aromatic)
21. nCRX3 — Number of CRX3
22. SpPosA_B(p) — Normalized spectral positive sum from Burden matrix weighted by polarizability
23. nCIR — Number of circuits
24. B01[C-Br] — Presence/absence of C-Br at topological distance 1
25. B03[C-Cl] — Presence/absence of C-Cl at topological distance 3
26. N-073 — Ar2NH / Ar3N / Ar2N-Al / R..N..R
27. SpMax_A — Leading eigenvalue from adjacency matrix (Lovasz-Pelikan index)
28. Psi_i_1d — Intrinsic state pseudoconnectivity index, type 1d
29. B04[C-Br] — Presence/absence of C-Br at topological distance 4
30. SdO — Sum of dO E-states
31. TI2_L — Second Mohar index from Laplace matrix
32. nCrt — Number of ring tertiary C(sp3)
33. C-026 — R--CX--R
34. F02[C-N] — Frequency of C-N at topological distance 2
35. nHDon — Number of donor atoms for H-bonds (N and O)
36. SpMax_B(m) — Leading eigenvalue from Burden matrix weighted by mass
37. Psi_i_A — Intrinsic state pseudoconnectivity index, type S average
38. nN — Number of Nitrogen atoms
39. SM6_B(m) — Spectral moment of order 6 from Burden matrix weighted by mass
40. nArCOOR — Number of esters (aromatic)
41. nX — Number of halogen atoms
42. class — RB (ready biodegradable) / NRB (not ready biodegradable)

Loaded with cleaned, code-safe column names (special characters stripped
for use as plain `String` keys) — see `QsarBiodegDemoSuite`'s
`allColumns` for the exact mapping back to the names above.

**Format**: semicolon-delimited, no header row — the first real exercise
of `Csv.parse`'s `delimiter` parameter combined with `headers`.

## License — CC BY 4.0, verified from the raw page text

Grepped directly from the fetched HTML: "Creative Commons Attribution
4.0 International" appears on the source page. Same license as
`wine.data`/`glass.data`.
