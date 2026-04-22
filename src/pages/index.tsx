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
  name: 'TJM Solutions',
  url: 'https://www.tjm.solutions',
  logo: 'https://www.tjm.solutions/img/tjm-solutions-logo.png',
  foundingDate: '2017',
  founder: { '@type': 'Person', name: 'Tony Moores' },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'tony@tjm.solutions',
    contactType: 'customer service',
  },
  sameAs: [
    'https://linkedin.com/in/tony-moores/',
    'https://tmoores.medium.com',
    'https://github.com/TJMSolns',
  ],
};

const DESCRIPTION =
  'Senior technology advisory, platform strategy, and enterprise architecture consulting — led by Tony Moores, 20+ years in digital commerce, distributed systems, and AI-adjacent product development.';

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
      title={`${siteConfig.title} — ${siteConfig.tagline}`}
      description={DESCRIPTION}>
      <Head>
        <meta property="og:title" content="TJM Solutions — Architecture, Engineering, and Advisory" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://www.tjm.solutions" />
        <meta property="og:image" content="https://www.tjm.solutions/img/banner.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
