import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TJM Solutions LLC',
  alternateName: 'TJM Solutions',
  url: 'https://www.tjm.solutions',
  logo: 'https://www.tjm.solutions/img/tjm-solutions-logo.png',
  description:
    'Technology advisory practice specializing in platform strategy, enterprise architecture, digital commerce, and AI-adjacent product development.',
  foundingDate: '2017',
  founder: { '@type': 'Person', name: 'Tony Moores', url: 'https://www.tjm.solutions/tony' },
  email: 'tony@tjm.solutions',
  telephone: '+16037382122',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Manchester',
    addressRegion: 'NH',
    addressCountry: 'US',
  },
  knowsAbout: [
    'Platform strategy', 'Enterprise architecture', 'Composable commerce',
    'Agentic commerce', 'API-first architecture', 'Marketplace platforms',
    'Digital transformation',
  ],
  sameAs: [
    'https://linkedin.com/in/tony-moores/',
    'https://tmoores.medium.com',
    'https://github.com/TJMSolns',
  ],
};

const DESCRIPTION =
  'Senior technology advisory, platform strategy, and enterprise architecture consulting, led by Tony Moores, nearly three decades in digital commerce, distributed systems, and AI-adjacent product development.';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroTitle}>
          {siteConfig.title}
        </h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description={DESCRIPTION}>
      <Head>
        <link rel="canonical" href="https://www.tjm.solutions" />
        <meta property="og:title" content="TJM Solutions | Architecture, Engineering, and Advisory Services" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://www.tjm.solutions" />
        <meta property="og:image" content="https://www.tjm.solutions/img/tjm-solutions-logo.png" />
        <meta property="og:image:alt" content="TJM Solutions, Technology Advisory and Consulting" />
        <meta property="og:image:width" content="576" />
        <meta property="og:image:height" content="571" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Head>
      <HomepageHeader />
      <main>
        <section className={styles.introSection}>
          <div className="container">
            <div className={styles.introGrid}>
              <p>
                TJM Solutions is an advisory practice, founded in 2017, based in Manchester, New
                Hampshire. It advises software vendors, services organizations, and enterprise
                teams on platform strategy and architecture, the decisions that are expensive to
                get wrong and hard to undo once shipped.
              </p>
              <p>
                The work is narrow on purpose: architecture and advisory, not staffing or
                delivery. You get a specific answer, not an embedded team: an assessment that
                says plainly what holds and what doesn't, a roadmap with the trade-offs made
                explicit, a decision with the reasoning written down.{' '}
                <Link to="/tony">Tony Moores</Link> leads every engagement personally, nearly
                three decades spent making exactly these calls, so you're not the first platform
                decision he's had to get right.
              </p>
            </div>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
