# Provenance and license: `uk-petrol-gc.csv`

**Source**: University of Dundee, "Ground Truth Data Set of UK Ignitable Liquids at varying
degrees of evaporation": https://doi.org/10.15132/10000178, cited there as Miller, J.,
Puch-Solis, R., Nic Daeid, N. and Mat Desa, W. N. S. (10 Mar 2022). Ground Truth Data Set of UK
Ignitable Liquids at varying degrees of evaporation. University of Dundee. Described in Miller
et al., "A UK-based ground truth data set of GCMS analysed ignitable liquid samples", Data in
Brief 45 (2022) 108670, https://pmc.ncbi.nlm.nih.gov/articles/PMC9679696/.

**Fetched**: 2026-11-15. The dataset is one 3.1 GB zip,
`CuratedIgnitableLiquidsWithMetaData_V3.zip`; only its feature table,
`IgnitableLiquidsDataSet/feature-table_peaks_ILweathered_metadata_with-peak-labels.csv`
(2,458,571 bytes, sha256 `c126001a01ab4b86652866db5b069d5a25f1576694328e44d2d1cdf62574db91`),
was read from it, by HTTP range requests.

**What the source is**: GC-MS runs (HP 6890/5973, ASTM E1618) of 35 petrol, light, medium and
heavy petroleum distillate samples from UK retailers, each evaporated to 0, 10, 25, 50, 75, 90
and 95 percent and run three times: 735 rows, one per run, whose columns are the areas of the
detected peaks, each named for its compound (or `Unknown`) and its retention time in minutes.

## What sga changed

This file is derived, not the source verbatim. `PetrolWindows.scala`
(`driver/test/jvm/src/solutions/tjm/sga/driver/`) writes it from the feature table:

- Keeps the petrol runs at 0 and 10 percent evaporation from the eight retailers (Asda, BP, Esso,
  Jet, Morrison, Sainsbury, Shell, Tesco), and drops the leaded 4-star sample, which names no
  retailer: 78 runs. BP, Esso, Sainsbury, Shell and Tesco each sold a regular and a super petrol,
  so they have 12 runs; the others have 6.
- Drops the internal standard (`ISTD`) and the pentane solvent peaks.
- Sums the remaining peak areas into 0.1-minute retention-time windows from 1.00 minutes, keeps
  the 59 windows with a peak in any of the 78 runs, and divides each by the run's total area, so
  each feature is that window's share of the chromatogram. A window is named for where it starts:
  `rt_03.70` is 3.70 to 3.80 minutes.
- The label is the retailer, in the column `retailer`.

Verified against the written file: 78 rows after a header row, 59 feature columns and the label,
each row's features summing to 1; sha256 `140f7610c6823da0a216c11757b688269838c84e1641c1056058a94726a37931`.

## License: CC BY 4.0, verified from the raw page text

Grepped from the fetched HTML of the dataset's page, not paraphrased: "Data made available under
Creative Commons Attribution 4.0 International (CC BY 4.0) Licence" (2026-11-15). Attribution
required, changes indicated (above), commercial use permitted.
