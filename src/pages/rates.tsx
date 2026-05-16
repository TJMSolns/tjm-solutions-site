import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import styles from './rates.module.css';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TJM Solutions',
  url: 'https://www.tjm.solutions',
  priceRange: '$$$',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Advisory Engagements',
    itemListElement: [
      { '@type': 'Offer', name: 'Consulting — Remote', priceSpecification: { '@type': 'UnitPriceSpecification', price: '250', priceCurrency: 'USD', unitText: 'HOUR' } },
      { '@type': 'Offer', name: 'Consulting — On-Site', priceSpecification: { '@type': 'UnitPriceSpecification', price: '300', priceCurrency: 'USD', unitText: 'HOUR' } },
      { '@type': 'Offer', name: 'Strategy — Remote', priceSpecification: { '@type': 'UnitPriceSpecification', price: '350', priceCurrency: 'USD', unitText: 'HOUR' } },
      { '@type': 'Offer', name: 'Strategy — On-Site', priceSpecification: { '@type': 'UnitPriceSpecification', price: '400', priceCurrency: 'USD', unitText: 'HOUR' } },
      { '@type': 'Offer', name: 'Daily Intensive — Remote', priceSpecification: { '@type': 'UnitPriceSpecification', price: '1800', priceCurrency: 'USD', unitText: 'DAY' } },
      { '@type': 'Offer', name: 'Daily Intensive — On-Site', priceSpecification: { '@type': 'UnitPriceSpecification', price: '2200', priceCurrency: 'USD', unitText: 'DAY' } },
      { '@type': 'Offer', name: 'Monthly Retainer', priceSpecification: { '@type': 'UnitPriceSpecification', price: '3000', priceCurrency: 'USD', unitText: 'MON' } },
      { '@type': 'Offer', name: 'Quarterly Retainer', priceSpecification: { '@type': 'UnitPriceSpecification', price: '8000', priceCurrency: 'USD', unitText: 'MON' } },
      { '@type': 'Offer', name: 'Annual Retainer', priceSpecification: { '@type': 'UnitPriceSpecification', price: '25000', priceCurrency: 'USD', unitText: 'ANN' } },
    ],
  },
};

const TITLE = 'Advisory Rates | TJM Solutions';
const DESCRIPTION =
  'Technology advisory and consulting rates for digital commerce, platform strategy, and enterprise architecture engagements. Remote and on-site hourly, daily intensive, and retainer options.';

interface RateRow {
  label: string;
  amount: string;
  period: string;
  note?: string;
}

interface EngagementModel {
  title: string;
  description: string;
  rateRows: RateRow[];
  overage?: string;
}

const engagements: EngagementModel[] = [
  {
    title: 'Consulting',
    description: 'Tactical advisory including discovery, system mapping, orchestration planning, and technical guidance.',
    rateRows: [
      { label: 'Remote', amount: '$250', period: '/hr' },
      { label: 'On-Site', amount: '$300', period: '/hr', note: '+ expenses' },
    ],
  },
  {
    title: 'Strategy',
    description: 'Executive advisory for operational planning and directional guidance on digital commerce and platform initiatives.',
    rateRows: [
      { label: 'Remote', amount: '$350', period: '/hr' },
      { label: 'On-Site', amount: '$400', period: '/hr', note: '+ expenses' },
    ],
  },
  {
    title: 'Daily Intensive',
    description: 'Full-day working sessions for discovery, system mapping, training, and collaborative planning. Up to 8 hours.',
    rateRows: [
      { label: 'Remote', amount: '$1,800', period: '/day' },
      { label: 'On-Site', amount: '$2,200', period: '/day', note: '+ expenses' },
    ],
  },
  {
    title: 'Retainer',
    description: 'Priority access for ongoing strategic guidance and on-call expertise.',
    rateRows: [
      { label: 'Monthly', amount: '$3,000', period: '/month', note: '≤16 hrs' },
      { label: 'Quarterly', amount: '$8,000', period: '/quarter', note: '≤48 hrs' },
      { label: 'Annual', amount: '$25,000', period: '/year', note: '≤192 hrs' },
    ],
    overage: 'Additional hours at consulting rate.',
  },
];

export default function Rates(): ReactNode {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <Head>
        <link rel="canonical" href="https://www.tjm.solutions/rates" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://www.tjm.solutions/rates" />
        <meta property="og:image" content="https://www.tjm.solutions/img/banner.jpg" />
        <meta property="og:image:alt" content="TJM Solutions — Technology Advisory and Consulting" />
        <meta property="og:image:width" content="5742" />
        <meta property="og:image:height" content="3569" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>
      <div className={styles.ratesContainer}>
        <section className={styles.hero}>
          <div className="container">
            <h1>Executive Advisory Rates</h1>
            <p className={styles.subtitle}>Technology & Digital Commerce Consulting</p>
          </div>
        </section>

        <main className="container">
          <section className={styles.engagementGrid}>
            {engagements.map((engagement, index) => (
              <div key={index} className={styles.engagementCard}>
                <h3>{engagement.title}</h3>
                <p className={styles.engagementDescription}>{engagement.description}</p>
                <div className={styles.rateRows}>
                  {engagement.rateRows.map((row, i) => (
                    <div key={i} className={styles.rateRow}>
                      <span className={styles.rateLabel}>{row.label}</span>
                      <div className={styles.rateValue}>
                        <span className={styles.rowAmount}>{row.amount}</span>
                        <span className={styles.period}>{row.period}</span>
                        {row.note && <span className={styles.rateNote}>{row.note}</span>}
                      </div>
                    </div>
                  ))}
                </div>
                {engagement.overage && (
                  <p className={styles.overageNote}>{engagement.overage}</p>
                )}
              </div>
            ))}
          </section>

          <section className={styles.disclaimer}>
            <p>
              <strong>All rates quoted in USD are exclusive of expenses and subject to adjustment
              based on negotiated terms of service.</strong>
            </p>
          </section>

          <section className={styles.ctaSection}>
            <h2>Let's Discuss Your Project</h2>
            <p>
              Ready to explore engagement options? Schedule a call to discuss your specific needs and
              find the right engagement model for your organization.
            </p>
            <a href="https://calendly.com/tjm-solns/" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Schedule a Call
            </a>
          </section>
        </main>
      </div>
    </Layout>
  );
}
