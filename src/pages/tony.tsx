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

const citations = [
  {
    authors: 'Lavine, B.K., Moores, A., Helfend, L.K.',
    title: 'A genetic algorithm for pattern recognition analysis of pyrolysis gas chromatographic data',
    journal: 'Journal of Analytical and Applied Pyrolysis',
    year: '1999',
    doi: 'https://doi.org/10.1016/S0165-2370(99)00002-9',
  },
  {
    authors: 'Lavine, B.K., Moores, A.J.',
    title: 'Genetic algorithms for pattern recognition analysis and fusion of sensor data',
    journal: 'Proceedings of SPIE 3854',
    year: '1999',
    doi: 'https://doi.org/10.1117/12.372891',
  },
  {
    authors: 'Lavine, B.K., Ritter, J., Moores, A.J., Wilson, M., Faruque, A., Mayfield, H.T.',
    title: 'Source Identification of Underground Fuel Spills by Solid-Phase Microextraction/High-Resolution Gas Chromatography/Genetic Algorithms',
    journal: 'Analytical Chemistry',
    year: '2000',
    doi: 'https://doi.org/10.1021/ac9904967',
  },
  {
    authors: 'Lavine, B.K., Davidson, C.E., Moores, A.J., Griffiths, P.R.',
    title: 'Raman Spectroscopy and Genetic Algorithms for the Classification of Wood Types',
    journal: 'Applied Spectroscopy',
    year: '2001',
    doi: 'https://doi.org/10.1366/0003702011953108',
  },
];

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
                I started at Clarkson University in 1996, in Barry Lavine's lab, doing applied
                machine learning before most people used that phrase. We built genetic algorithms
                and principal component analysis into tools that could pull a usable signal out of
                a chromatograph's mass of data points, then classify what it was looking at. My
                undergraduate thesis was chemical pattern recognition by genetic algorithm; my
                master's was in hybrid machine learning. We co-authored papers on it together, on
                jet fuel identification, on wood classification by Raman spectroscopy, on the
                feature-selection method itself. None of it looked like the AI industry that exists
                now. All of it was the same problem: too much data, and something that has to
                decide which part of it actually matters.
              </p>

              <ul className={styles.citationList}>
                {citations.map((c) => (
                  <li key={c.doi} className={styles.citationItem}>
                    {c.authors} ({c.year}). "{c.title}." <em>{c.journal}</em>.{' '}
                    <a href={c.doi} target="_blank" rel="noopener noreferrer">DOI</a>
                  </li>
                ))}
              </ul>

              <p>
                In 1999, Clarkson's Internet Consulting Group put me on a pilot with Andersen: a
                consumer-to-business-to-business commerce model that became marketstreetmall.com. I
                designed the site in BroadVision. The client then mandated ATG instead, so I rebuilt
                it and wrote the servlet chain that ran it. It was multi-vendor commerce before
                anyone called it a marketplace, and the ATG trainers who saw the rebuild were
                reportedly impressed enough that it became the reason I had a career there at all.
              </p>

              <p>
                I joined ATG in 2000 as a technical trainer in San Francisco. ATG was synonymous
                with personalization for most of a decade, and I taught it: system administration
                on IBM WebSphere, the portal and JSR 168 material, and I outlined what became the
                new ATG fundamentals course.
              </p>

              <p>
                In 2005 I moved to Cambridge as a Principal Solution Engineer, closing more than 40
                transactions over the next six years and mentoring six new solution engineers, while
                building and maintaining the reference architecture and sizing tools the rest of the
                team used. ATG acquired Primus partway through that run, and my scope expanded into
                search, natural language processing, knowledge-centered support, and Bayesian models
                for automated email response, which is a chatbot in the vocabulary of 2006 rather
                than 2026. I paired off with the Primus solution engineer: I taught him commerce, he
                taught me service, and that was the whole integration, one person at a time.
              </p>

              <p>
                Oracle acquired ATG in 2011, and I became a Master Principal Sales Consultant, lead
                sales engineer on enterprise opportunities that booked more than $20M and more than
                $9M, with several more above $3M each. The FatWire teams arrived in the same period,
                and the pattern repeated: I taught them commerce, and learned content management
                from them. My job title changed twice in three years; the actual work was the same
                conversation, again, with new people.
              </p>

              <p>
                In 2014 I became CTO at Professional Access, an enterprise commerce systems
                integrator in New York. My job there was to widen a practice that had been built
                around one vendor, so I expanded it into Magento, commercetools, and custom
                microservices. I hired the two practice leads who ran product management for order
                management and UX/UI, and mentored and directed both. In that time, the work I led
                influenced more than $50M in service sales and more than $10M in renewals.
              </p>

              <p>
                I left in 2017 to start TJM Solutions, the advisory practice I still run. The
                following year I took on a seven-month run as Principal Solutions Consultant at
                Mirakl, doing marketplace implementation and integration consulting. I mapped the
                HA/DR strategy that helped unblock a sale above $1M for a major electronic component
                supplier, and led the roadmap work that helped rescue a four-year renewal above $2M
                for a major international retailer. I was also the subject-matter expert the Paris
                product team used to capture US Marketplace Facilitator Tax requirements, nineteen
                years after I had first built a multi-vendor storefront through a university
                consulting pilot.
              </p>

              <p>
                From 2019 to 2021 I was Director of Product Management at Oracle, leading developer
                evangelism and adoption for CX Commerce across the Americas and performing many of
                the duties of a product manager across the wider CX product line.
              </p>

              <p>
                Since 2022 I have been CTO at RETISIO, a composable commerce platform provider,
                where I own long-term direction across API-first architecture, multi-tenancy,
                search, DevSecOps, and now agentic commerce readiness: the same question I was
                asking in a chemistry lab in 1996, about how a system decides what to pay attention
                to, now applied to a world where the customer might be another piece of software.
                That work runs alongside TJM Solutions, which I have kept going the entire time.
              </p>

              <p>
                Personalization became recommendation. Multi-vendor malls became marketplaces.
                Bayesian email routing became agents. I write about the current version of that
                pattern, and the platforms built to hold it, in an ongoing column. Most days it
                still starts with the same question a chromatograph asked me back at Clarkson: out
                of everything here, what actually matters.
              </p>

              <h3>Selected Writing</h3>

              <p>
                I write regularly on agentic commerce, capability surfaces, composable architecture,
                functional programming, and distributed operational truth. A few pieces I return to
                most:
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
