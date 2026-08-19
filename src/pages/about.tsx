import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './about.module.css';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TJM Solutions LLC',
  alternateName: 'TJM Solutions',
  url: 'https://www.tjm.solutions/about',
  logo: 'https://www.tjm.solutions/img/tjm-solutions-logo.png',
  description:
    'Technology advisory practice specialising in platform strategy, enterprise architecture, digital commerce, and AI-adjacent product development.',
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

const TITLE = 'About TJM Solutions | Architecture, Engineering, and Advisory';
const DESCRIPTION =
  'TJM Solutions LLC is a technology advisory practice covering platform strategy, enterprise architecture, digital commerce, and AI-adjacent product development. Founded 2017 in Manchester, New Hampshire.';

const practice = [
  {
    title: 'Commerce Strategy',
    body: 'Evaluating platforms, search, and marketplace systems, for new builds, migrations, and the move to agentic commerce.',
  },
  {
    title: 'Digital Transformation',
    body: 'Modernizing architecture: microservices, headless/API-first systems, and AI-adjacent knowledge bases, without a rewrite.',
  },
  {
    title: 'Experience Engineering',
    body: 'Architecture and tooling built around how your team and customers actually engage, not just what shipped out of the box.',
  },
];

export default function About(): ReactNode {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <Head>
        <link rel="canonical" href="https://www.tjm.solutions/about" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://www.tjm.solutions/about" />
        <meta property="og:image" content="https://www.tjm.solutions/img/tjm-solutions-logo.png" />
        <meta property="og:image:alt" content="TJM Solutions, Technology Advisory and Consulting" />
        <meta property="og:image:width" content="576" />
        <meta property="og:image:height" content="571" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Head>
      <div className={styles.aboutContainer}>
        <section className={styles.hero}>
          <div className="container">
            <h1>About TJM Solutions</h1>
            <p className={styles.subtitle}>
              Architecture, Engineering, and Advisory
            </p>
            <p className={styles.personBanner}>
              Looking for the person rather than the practice?{' '}
              <Link to="/tony">About Tony Moores →</Link>
            </p>
          </div>
        </section>

        <main className="container">
          <section className={styles.bioSection}>
            <div className={styles.bioContent}>
              <h2>The Practice</h2>

              <p>
                TJM Solutions LLC is a technology advisory practice founded in 2017 and based in
                Manchester, New Hampshire. It advises software vendors, services organizations, and
                enterprise teams on platform strategy, architecture, and the technical decisions that
                carry commercial consequences.
              </p>

              <p>
                The work is deliberately narrow. It is architecture and advisory rather than staffing
                or delivery, assessments, reviews, roadmaps, and strategy engagements that produce a
                decision and the reasoning behind it. Engagements are led personally by{' '}
                <Link to="/tony">Tony Moores</Link>, who brings nearly three decades across enterprise commerce,
                distributed systems, and AI-adjacent product development.
              </p>

              <h3>What We Do</h3>

              <ul className={styles.practiceList}>
                {practice.map((p) => (
                  <li key={p.title} className={styles.practiceItem}>
                    <h4>{p.title}</h4>
                    <p>{p.body}</p>
                  </li>
                ))}
              </ul>

              <p>
                These three areas cover 21 packaged offers, each scoped to a defined deliverable.
                The full catalogue, with what each engagement produces, is on the{' '}
                <Link to="/">home page</Link>.
              </p>

              <h3>Typical Engagements</h3>

              <p>
                Most work falls into one of three shapes. An <strong>assessment</strong> examines a
                platform, architecture, or capability against where the business intends to go, and
                reports what holds and what does not. A <strong>roadmap</strong> takes an agreed
                destination and sequences the work to reach it, with the trade-offs made explicit.
                An <strong>advisory retainer</strong> puts architectural judgement alongside a team
                continuously, for organizations making a series of connected decisions rather than
                one.
              </p>

              <h3>How to Start</h3>

              <ol className={styles.stepList}>
                <li>
                  <strong>A conversation.</strong> Thirty minutes on what you are trying to decide
                  and whether this practice is the right instrument for it. No charge, and no
                  obligation to continue.
                </li>
                <li>
                  <strong>A scoped proposal.</strong> If there is a fit, you get the deliverable,
                  the timeline, and the price in writing before any work begins.
                </li>
                <li>
                  <strong>The engagement.</strong> Delivered against that scope, with the reasoning
                  documented so the decision survives the people who made it.
                </li>
              </ol>

              <p>
                Day and weekly rates, along with retainer structures, are published on the{' '}
                <Link to="/rates">Rates</Link> page. Publishing them means you can judge fit before
                spending a call finding out.
              </p>

              <div className={styles.contactCard}>
                <h3>Get in Touch</h3>
                <div className={styles.contactInfo}>
                  <p><strong>Company:</strong> TJM Solutions LLC</p>
                  <p><strong>Email:</strong> <a href="mailto:tony@tjm.solutions">tony@tjm.solutions</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+16037382122">+1 603.738.2122</a></p>
                  <p><strong>Location:</strong> Manchester, New Hampshire, USA</p>
                  <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/tony-moores/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tony-moores</a></p>
                </div>
                <a href="https://calendly.com/tjm-solns/" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                  Schedule a Call
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
