# Provenance and license — `iris.csv`

**Source**: scikit-learn's bundled copy of Fisher's Iris data
(`sklearn/datasets/data/iris.csv`), reformatted to a plain column-header CSV: values unchanged,
the class index 0/1/2 mapped to setosa/versicolor/virginica, a header row added (see
`IrisFixtureSuite`). The data is Fisher's: R. A. Fisher, "The use of multiple measurements in
taxonomic problems," *Annals of Eugenics* 7(2), 1936.

**Which version**: scikit-learn's description says its copy is taken from Fisher's paper and
"is the same as in R, but not as in the UCI Machine Learning Repository, which has two wrong
data points." Checked against this file, 2026-11-03: setosa rows 35 and 38 read
`4.9,3.1,1.5,0.2` and `4.9,3.6,1.4,0.1`, Fisher's published values, not UCI's.

**What this file is**: 150 samples, 50 per species, four measurements in centimeters:
sepal length, sepal width, petal length, petal width.

## License — credited under CC BY 4.0

The UCI Machine Learning Repository's Iris page (https://archive.ics.uci.edu/dataset/53/iris,
cite as Fisher, R. (1936). Iris [Dataset]. https://doi.org/10.24432/C56C76) states "Creative
Commons Attribution 4.0 International". Checked 2026-11-03 by fetching the page and grepping
its text, not paraphrased. Other copies are marked CC0, and the measurements themselves were
published in 1936. Crediting Fisher and UCI under CC BY 4.0 meets the strictest of these
terms: attribution required, commercial use permitted. Earlier notes in this repository called
Iris public domain without checking. This file is the checked statement.
