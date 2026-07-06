import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './mdslides.module.css';

const TITLE = 'MD-Slides | TJM Solutions';
const DESCRIPTION =
  'Markdown to HTML presentations — structured, validated, and speaker-ready. One JAR, Java 11+. No account, no cloud, no build step.';

const features = [
  {
    icon: '📐',
    title: 'Structured by design',
    body: 'Templates enforce slide layout. Density constraints mean your audience can actually read what you write.',
  },
  {
    icon: '✓',
    title: 'Validated up front',
    body: 'All errors reported together in one pass — not one at a time. Fix everything, then render.',
  },
  {
    icon: '🎤',
    title: 'Speaker-ready',
    body: 'Synchronized speaker view with your notes, next-slide preview, and elapsed timer. Press S during any presentation.',
  },
  {
    icon: '📦',
    title: 'Zero friction',
    body: 'One JAR, Java 11+. Download and run. No account, no cloud, no framework to install.',
  },
  {
    icon: '🎨',
    title: 'Themeable',
    body: 'Built-in light and dark themes, plus a JSON schema for fully custom themes with per-template backgrounds.',
  },
  {
    icon: '⚙️',
    title: 'Configurable',
    body: 'CLI flags, project config, and global config — highest priority wins. Set your preferences once.',
  },
];

export default function MDSlides(): ReactNode {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <Head>
        <link rel="canonical" href="https://www.tjm.solutions/mdslides" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://www.tjm.solutions/mdslides" />
        <meta property="og:image" content="https://www.tjm.solutions/img/tjm-solutions-logo.png" />
        <meta property="og:image:alt" content="MD-Slides — Markdown presentation tool by TJM Solutions" />
        <meta property="og:image:width" content="576" />
        <meta property="og:image:height" content="571" />
      </Head>

      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroEyebrow}>Open Source · MIT License</p>
          <h1 className={styles.heroTitle}>
            Write in <em>Markdown</em>.<br />Present Anywhere.
          </h1>
          <p className={styles.heroSubtitle}>
            Markdown to self-contained HTML presentations. One JAR. Java 11+.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/mdslides/docs/intro" className={styles.ctaPrimary}>
              Get Started
            </Link>
            <a
              href="https://github.com/TJMSolns/MD-Slides"
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
          <h2>Up and running in 30 seconds</h2>
          <pre>
            <code>{`curl -L https://github.com/TJMSolns/MD-Slides/releases/latest/download/md-slides.jar -o md-slides.jar
java -jar md-slides.jar render my-talk --theme light
open my-talk/index.html`}</code>
          </pre>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.featuresHeading}>Everything you need. Nothing you don't.</h2>
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
          <p>Full installation guide, slide format reference, and contributor docs.</p>
          <Link to="/mdslides/docs/intro" className={styles.ctaPrimary}>
            Read the Docs
          </Link>
        </div>
      </section>
    </Layout>
  );
}
