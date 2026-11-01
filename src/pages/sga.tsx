import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './sga.module.css';

const TITLE = 'sga | TJM Solutions';
const DESCRIPTION =
  'A genetic algorithm built as a functional meta-algorithm: the evolutionary loop is reusable, and representation, fitness, selection, crossover, mutation and termination are functions you pass in. Scala 3, MIT.';

const features = [
  {
    icon: '🔁',
    title: 'The loop is the reusable part',
    body: 'Representation, fitness, selection, crossover, mutation, replacement and termination are all functions you pass in. The engine never needs to know what a genome means.',
  },
  {
    icon: '🧪',
    title: 'Tested on real chemistry',
    body: 'Feature selection run against olive oils, wines, gas sensors, Raman spectra and molecular descriptors, with every headline result reproduced by a test.',
  },
  {
    icon: '🎲',
    title: 'Same seed, same run',
    body: 'Randomness is a value threaded through pure functions, never hidden state, so every run can be reproduced exactly.',
  },
  {
    icon: '🧩',
    title: 'Bring your own problem',
    body: 'A travelling-salesman ordering runs on the same engine as feature selection. New problems are new functions, not new branches in the loop.',
  },
  {
    icon: '📊',
    title: 'More than one way to choose',
    body: 'Boruta, mRMR, hierarchical clustering, RFECV and boosted or bagged ensembles sit beside the GA, built from the same pieces, for honest comparison.',
  },
  {
    icon: '📦',
    title: 'Small and plain',
    body: 'Scala 3 and Mill, JDK 17+. Dependency-free linear algebra. One runtime dependency, and only if you read from Postgres.',
  },
];

export default function Sga(): ReactNode {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <Head>
        <link rel="canonical" href="https://www.tjm.solutions/sga" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://www.tjm.solutions/sga" />
        <meta property="og:image" content="https://www.tjm.solutions/img/tjm-solutions-logo.png" />
        <meta property="og:image:alt" content="sga, a functional genetic algorithm by TJM Solutions" />
        <meta property="og:image:width" content="576" />
        <meta property="og:image:height" content="571" />
      </Head>

      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroEyebrow}>Open Source · MIT License</p>
          <h1 className={styles.heroTitle}>
            Evolve the <em>answer</em>.<br />Reuse the algorithm.
          </h1>
          <p className={styles.heroSubtitle}>
            A genetic algorithm built as a functional meta-algorithm. Scala 3, JDK 17+.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/sga/docs/intro" className={styles.ctaPrimary}>
              Get Started
            </Link>
            {/* Static page outside the Docusaurus router: plain link, full page load */}
            <a href="/sga/demo/" className={styles.ctaSecondary}>
              See real runs
            </a>
            <a
              href="https://github.com/TJMSolns/sga"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className={styles.quickStart}>
        <div className="container">
          <h2>One loop, every piece supplied</h2>
          <pre>
            <code>{`val ga = GeneticAlgorithm[Vector[Boolean]](
  initialize = Initializer.randomBitPopulation(chromosomeLength = 4),
  fitness    = Classification.fitness(k = 5, Distance.euclidean)(data),
  select     = Selector.rouletteSelection,
  crossover  = Crossover.singlePointCrossover(pc = 0.7),
  mutate     = Mutation.bitwiseMutation(pm = 1.0 / 4),
  replace    = Replacement.generationalReplacement,
  terminate  = Termination.afterGenerations(maximum = 30)
)

val report = runWithReport(ga, populationSize = 20, seed = 42L)`}</code>
          </pre>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.featuresHeading}>A protocol, not a program.</h2>
          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.install}>
        <div className="container">
          <h2>Ready to try it?</h2>
          <p>Quick start, a worked example on a problem the engine has never seen, and the full API reference.</p>
          <Link to="/sga/docs/intro" className={styles.ctaPrimary}>
            Read the Docs
          </Link>
        </div>
      </section>
    </Layout>
  );
}
