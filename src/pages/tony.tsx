import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './tony.module.css';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anthony (Tony) Moores',
  alternateName: 'Tony Moores',
  jobTitle: 'Chief Technology Officer',
  worksFor: { '@type': 'Organization', name: 'RETISIO Inc.' },
  affiliation: { '@type': 'Organization', name: 'TJM Solutions LLC' },
  url: 'https://www.tjm.solutions/tony',
  email: 'tony@tjm.solutions',
  telephone: '+16037382122',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Manchester',
    addressRegion: 'NH',
    addressCountry: 'US',
  },
  alumniOf: { '@type': 'EducationalOrganization', name: 'Clarkson University' },
  knowsAbout: [
    'Platform strategy', 'Enterprise architecture', 'Composable commerce',
    'Agentic commerce', 'API-first architecture', 'Marketplace platforms',
    'Digital transformation', 'Distributed systems', 'Functional programming',
    'Applied innovation',
  ],
  sameAs: [
    'https://linkedin.com/in/tony-moores/',
    'https://tmoores.medium.com',
    'https://github.com/TJMSolns',
  ],
};

const TITLE = 'Tony Moores | Chief Technology Officer, Platform Strategy';
const DESCRIPTION =
  'Tony Moores is a Chief Technology Officer and senior technology executive with 20+ years in platform strategy, digital commerce, enterprise architecture, and AI-adjacent product development.';

const competencies = [
  'Technology Strategy & Platform Direction',
  'Product Strategy & Road Map Development',
  'Enterprise & Solution Architecture',
  'Customer/Executive-facing Technical Leadership',
  'Digital Transformation — Modernization, Automation, Intelligence',
  'Technical Sales Support & Strategic Deal Support',
  'Solution Evangelism & Partner Enablement',
  'Reactive Distributed Systems',
  'Digital Commerce & Marketplace Platforms',
  'AI-Adjacent Product Evolution',
];

const writing = [
  {
    href: '/articles/2026/04/09/the-invisible-buyer-has-arrived',
    title: 'The Invisible Buyer Has Arrived',
    argument:
      'Agents are becoming the buyer, not the interface to one — and commerce systems built for human attention do not survive the change.',
  },
  {
    href: '/articles/2026/06/15/large-action-models-need-small-action-surfaces',
    title: 'Large Action Models Need Small Action Surfaces',
    argument:
      'The constraint on agent-driven systems is not model capability but the breadth of what we let a model touch.',
  },
  {
    href: '/articles/2026/03/15/is-the-fp-juice-worth-the-squeeze',
    title: 'Is the FP Juice Worth the Squeeze?',
    argument:
      'An honest accounting of where functional discipline pays for itself in production systems — and where it does not.',
  },
];

export default function Tony(): ReactNode {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <Head>
        <link rel="canonical" href="https://www.tjm.solutions/tony" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://www.tjm.solutions/tony" />
        <meta property="og:image" content="https://www.tjm.solutions/img/tjm-solutions-logo.png" />
        <meta property="og:image:alt" content="Tony Moores — Chief Technology Officer" />
        <meta property="og:image:width" content="576" />
        <meta property="og:image:height" content="571" />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Head>
      <div className={styles.aboutContainer}>
        <section className={styles.hero}>
          <div className="container">
            <h1>Tony Moores — Chief Technology Officer</h1>
            <p className={styles.subtitle}>
              Platform Strategy · Enterprise Architecture · Digital Commerce
            </p>
            <p className={styles.positioning}>
              Advising and building at the intersection of platform strategy and applied
              innovation. Open to the right executive mandate.
            </p>
          </div>
        </section>

        <main className="container">
          <section className={styles.bioSection}>
            <div className={styles.bioContent}>
              <h2>Tony Moores</h2>
              <h3 style={{ marginTop: '8px' }}>
                CTO, RETISIO Inc. · Founder, TJM Solutions LLC
              </h3>

              <p>
                Tony is a senior technology executive with more than 20 years of experience spanning
                platform strategy, product direction, enterprise architecture, customer-facing technical
                leadership, consulting, and software modernization. He operates at the intersection of
                product, platform, solutions, and executive communication — translating customer and
                market needs into practical technical direction, and connecting architectural decisions
                to business outcomes.
              </p>

              <p>
                His background spans enterprise software, digital commerce, B2B/B2B marketplaces,
                API-first platforms, distributed systems, and modernization initiatives — with deep
                experience in AI-adjacent product evolution and reactive microservice architecture.
                He is comfortable operating across engineering, product, sales, partnerships, support,
                and executive stakeholders.
              </p>

              <h3>Core Competencies</h3>
              <ul className={styles.competencyList}>
                {competencies.map((c) => (
                  <li key={c} className={styles.competencyItem}>{c}</li>
                ))}
              </ul>

              <h3>Career Background</h3>

              <p>
                Tony's career began at Art Technology Group (ATG), where he spent a decade in technical
                training and solution engineering — building deep expertise in enterprise commerce,
                search, and knowledge management, and helping close significant deals across the
                Americas and Europe. When Oracle acquired ATG, he moved into a Master Principal Sales
                Consultant role supporting strategic enterprise opportunities across Oracle's CX
                commerce, marketing, and service platforms.
              </p>

              <p>
                He subsequently served as CTO at Professional Access, a Java development and systems
                integration firm focused on enterprise commerce, where he expanded the firm's practice
                into Magento, commercetools, and custom microservices. A stint as Principal Solutions
                Consultant at Mirakl followed, where he led enterprise marketplace consulting across
                implementation strategy, integration design, and customer success.
              </p>

              <p>
                Tony founded TJM Solutions in 2017, advising software and services organizations on
                platform strategy, microservice architecture, go-to-market alignment, and
                technical-business communication. He simultaneously held a Director of Product
                Management role at Oracle Americas, leading product management and developer
                evangelism for CX Commerce across the Americas.
              </p>

              <h3>Today</h3>

              <p>
                Tony currently serves as Chief Technology Officer at RETISIO Inc., leading technology
                strategy, product direction, and architectural evolution for a digital commerce
                platform provider. He owns long-term platform direction across composable, API-first,
                and multi-tenant architecture, guides product evolution toward enterprise-grade
                scalability and agent-driven systems, and supports strategic customer opportunities
                through executive-level solution architecture.
              </p>

              <p>
                Through <Link to="/about">TJM Solutions</Link>, he continues to advise clients on
                platform strategy, microservice architecture, functional programming, and AI-adjacent
                product development — helping organizations connect technical direction to business
                outcomes.
              </p>

              <h3>Selected Writing</h3>

              <p>
                Tony writes regularly on architecture, functional programming, and the shift toward
                agent-mediated commerce. A few pieces that carry the arguments he returns to most:
              </p>

              <ul className={styles.writingList}>
                {writing.map((w) => (
                  <li key={w.href} className={styles.writingItem}>
                    <Link to={w.href}>{w.title}</Link>
                    <p>{w.argument}</p>
                  </li>
                ))}
              </ul>

              <p style={{ marginTop: '20px' }}>
                The full archive is at <Link to="/articles">tjm.solutions/articles</Link>.
              </p>

              <div className={styles.contactCard}>
                <h3>Get in Touch</h3>
                <div className={styles.contactInfo}>
                  <p><strong>Email:</strong> <a href="mailto:tony@tjm.solutions">tony@tjm.solutions</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+16037382122">+1 603.738.2122</a></p>
                  <p><strong>Location:</strong> Manchester, New Hampshire, USA</p>
                  <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/tony-moores/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tony-moores</a></p>
                  <p><strong>Writing:</strong> <a href="https://tmoores.medium.com" target="_blank" rel="noopener noreferrer">tmoores.medium.com</a></p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
