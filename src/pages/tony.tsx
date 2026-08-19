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
  'Tony Moores is a Chief Technology Officer and senior technology executive with nearly three decades in platform strategy, digital commerce, enterprise architecture, and AI-adjacent product development.';

const writing = [
  {
    href: '/articles/2026/04/09/the-invisible-buyer-has-arrived',
    title: 'The Invisible Buyer Has Arrived',
    argument:
      'Agents are becoming the buyer, not the interface to one, and commerce systems built for human attention do not survive the change.',
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
      'An honest accounting of where functional discipline pays for itself in production systems, and where it does not.',
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
        <meta property="og:image:alt" content="Tony Moores, Chief Technology Officer" />
        <meta property="og:image:width" content="576" />
        <meta property="og:image:height" content="571" />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Head>
      <div className={styles.aboutContainer}>
        <section className={styles.hero}>
          <div className="container">
            <h1>Tony Moores, Chief Technology Officer</h1>
            <p className={styles.subtitle}>
              Platform Strategy · Enterprise Architecture · Digital Commerce
            </p>
            <p className={styles.positioning}>
              Advising and building at the intersection of platform strategy and applied innovation.
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
                I started working in Dr. Barry Lavine's lab in 1996 while attending Clarkson
                University. I was doing a lot of data science and engineering, though no one called
                it that yet. We built genetic algorithms and principal component analysis into tools
                to do chemometrics, specifically feature selection, classification, and source
                identification of compounds by the squiggly lines produced by various apparatus. My
                undergraduate thesis was chemical pattern recognition by genetic algorithm, but I
                couldn't graduate without taking so many credits from the business school.
              </p>

              <p>
                Fortunately, I was able to fill that requirement working for ICG, Clarkson's
                Internet Consulting Group, where myself and my future brother-in-law transformed
                that business from teaching MS Office to building real dynamic web applications for
                local businesses with help from Ron Chorba, who talked the local ISP into supporting
                Cold Fusion so we had a place to host them.
              </p>

              <p>
                That got the attention of an individual affiliated with Andersen, later Accenture,
                who threw some of their skunk works our way... we want you to build a prototype so
                people can shop the mall or the store... but it's got to be on BroadVision cause AC
                is all in on BroadVision, so that's how I designed it. But the client AC had in mind
                just bought Dynamo by Art Technology Group, so I redesigned it that way. Shortly
                after the launch, I accepted a job with ATG as a technical trainer.
              </p>

              <p>
                That was August 2000, when the Bay was high on VC money and IPO dreams, everybody
                had a crazy idea, everybody ran ATG. ATG was synonymous with personalization for
                most of a decade, and I taught it, used it, and consulted with every student who
                ever came to class with a, "how would you go about..." which was most of them. I was
                an SE by the time we bought Primus, so my scope expanded into search, natural
                language processing, knowledge-centered support, and Bayesian models for automated
                email response while picking up the knowledge and service management domains.
              </p>

              <p>
                Oracle acquired ATG in 2011; I was issued a robe and a light saber and dubbed Master
                Principal Sales Consultant before they took all the knives and the toaster oven out
                of all the office kitchens. In exchange, I got to learn about, and sometimes play
                with, the types of ERP systems with which we had been integrating, proxying, and
                interfacing for so many years.
              </p>

              <p>
                In 2014 I defected from the vendor side and joined a long-time service and delivery
                partner. As CTO at Professional Access, part of my job there was to widen a practice
                that had been built around one vendor, so we expanded it into Magento, commercetools,
                and custom microservices, and built practices around UX/UI and OMS.
              </p>

              <p>
                I left in 2017 to start TJM Solutions, the advisory practice I still run
                opportunistically. A gig turned into a short-term position with Mirakl, where I
                couldn't help but smile to think that the solutions we were hacking at to make
                MarketStreetMall.com work turned into a domain in its own right. Today I'm back on
                the product side, serving as CTO for RETISIO.
              </p>

              <h3>Selected Writing</h3>

              <p>
                I try to write regularly and post on Medium. Some topics include agentic commerce,
                capability surfaces, composable architecture, functional programming, and
                distributed operational truth. A few pieces I return to most:
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
                The full archive is at <Link to="/articles">tjm.solutions/articles</Link> or{' '}
                <a href="https://tmoores.medium.com" target="_blank" rel="noopener noreferrer">tmoores.medium.com</a>.
              </p>

              <div className={styles.contactCard}>
                <h3>Get in Touch</h3>
                <div className={styles.contactInfo}>
                  <p><strong>Email:</strong> <a href="mailto:tony@tjm.solutions">tony@tjm.solutions</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+16037382122">+1 603.738.2122</a></p>
                  <p><strong>Location:</strong> Manchester, New Hampshire, USA</p>
                  <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/tony-moores/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tony-moores</a></p>
                  <p><strong>Writing:</strong> <a href="https://tmoores.medium.com" target="_blank" rel="noopener noreferrer">tmoores.medium.com</a></p>
                  <p><strong>Résumé:</strong> <a href="/current-resume.pdf" target="_blank" rel="noopener noreferrer">current-resume.pdf</a></p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
