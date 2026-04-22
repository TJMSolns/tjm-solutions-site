import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import styles from './about.module.css';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tony Moores',
  jobTitle: 'Chief Technology Officer',
  worksFor: { '@type': 'Organization', name: 'RETISIO Inc.' },
  url: 'https://www.tjm.solutions/about',
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
    'Digital Commerce', 'Platform Strategy', 'Enterprise Architecture',
    'Distributed Systems', 'Functional Programming', 'AI',
  ],
  sameAs: [
    'https://linkedin.com/in/tony-moores/',
    'https://tmoores.medium.com',
  ],
};

const TITLE = 'About Tony Moores | TJM Solutions';
const DESCRIPTION =
  'Tony Moores is a senior technology executive and principal consultant with 20+ years spanning platform strategy, digital commerce, enterprise architecture, and AI-adjacent product development.';

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

export default function About(): ReactNode {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <Head>
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://www.tjm.solutions/about" />
        <meta property="og:image" content="https://www.tjm.solutions/img/banner.jpg" />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Head>
      <div className={styles.aboutContainer}>
        <section className={styles.hero}>
          <div className="container">
            <h1>About Tony Moores</h1>
            <p className={styles.subtitle}>
              Senior Technology Executive &amp; Principal Consultant
            </p>
          </div>
        </section>

        <main className="container">
          <section className={styles.bioSection}>
            <div className={styles.bioContent}>
              <h2>Tony Moores</h2>
              <h3 style={{ color: '#c00000', marginTop: '8px' }}>
                Founder &amp; Principal Consultant, TJM Solutions · CTO, RETISIO Inc.
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
                Through TJM Solutions, he continues to advise clients on platform strategy,
                microservice architecture, functional programming, and AI-adjacent product
                development — helping organizations connect technical direction to business outcomes.
              </p>

              <div className={styles.contactCard}>
                <h3>Get in Touch</h3>
                <div className={styles.contactInfo}>
                  <p><strong>Company:</strong> TJM Solutions LLC</p>
                  <p><strong>Email:</strong> <a href="mailto:tony@tjm.solutions">tony@tjm.solutions</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+16037382122">+1 603.738.2122</a></p>
                  <p><strong>Location:</strong> Manchester, New Hampshire, USA</p>
                  <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/tony-moores/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tony-moores</a></p>
                  <p><strong>Writing:</strong> <a href="https://tmoores.medium.com" target="_blank" rel="noopener noreferrer">tmoores.medium.com</a></p>
                </div>
                <a href="https://calendly.com/tjm-solns/" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
