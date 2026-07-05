import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export interface OfferDeliverable {
  name: string;
  description: string;
  value: string;
}

export interface OfferCredibility {
  summary: string;
  links?: { label: string; href: string }[];
}

export interface OfferPageData {
  id: string;
  name: string;
  category: 'Commerce Strategy' | 'Digital Transformation' | 'Experience Engineering';
  categoryHref: string;
  slug: string;
  imageUrl: string;
  description: string;
  problemStatement: string;
  valueProposition: string;
  methodSummary: string[];
  deliverables: OfferDeliverable[];
  duration: string;
  costBenefit: string;
  credibility: OfferCredibility;
}

const CATEGORY_COLORS: Record<OfferPageData['category'], string> = {
  'Commerce Strategy': '#c00000',
  'Digital Transformation': '#c00000',
  'Experience Engineering': '#c00000',
};

export default function OfferPage({ offer }: { offer: OfferPageData }): ReactNode {
  const title = `${offer.name} | ${offer.category} | TJM Solutions`;
  const url = `https://www.tjm.solutions/services/${offer.slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: offer.name,
    name: offer.name,
    description: offer.description,
    provider: { '@type': 'Organization', name: 'TJM Solutions', url: 'https://www.tjm.solutions' },
    areaServed: 'Worldwide',
    category: offer.category,
  };

  return (
    <Layout title={title} description={offer.description}>
      <Head>
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={offer.description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`https://www.tjm.solutions${offer.imageUrl}`} />
        <meta property="og:image:alt" content={`${offer.category} — TJM Solutions`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <div className={styles.offerContainer}>
        <section className={styles.hero} style={{ backgroundImage: `url(${offer.imageUrl})` }}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow} style={{ color: CATEGORY_COLORS[offer.category] }}>
              {offer.category} &middot; {offer.id}
            </p>
            <h1>{offer.name}</h1>
            <p className={styles.heroDescription}>{offer.description}</p>
          </div>
        </section>

        <main className="container">
          <section className={styles.twoCol}>
            <div className={styles.colBlock}>
              <h2>The Situation</h2>
              <p>{offer.problemStatement}</p>
            </div>
            <div className={styles.colBlock}>
              <h2>The Value</h2>
              <p>{offer.valueProposition}</p>
            </div>
          </section>

          <section className={styles.block}>
            <h2>How It Works</h2>
            <ol className={styles.methodList}>
              {offer.methodSummary.map((phase, i) => (
                <li key={i}>{phase}</li>
              ))}
            </ol>
          </section>

          <section className={styles.block}>
            <h2>What You Get</h2>
            <div className={styles.tableWrap}>
              <table className={styles.deliverablesTable}>
                <thead>
                  <tr>
                    <th>Deliverable</th>
                    <th>Description</th>
                    <th>Value to You</th>
                  </tr>
                </thead>
                <tbody>
                  {offer.deliverables.map((d) => (
                    <tr key={d.name}>
                      <td>{d.name}</td>
                      <td>{d.description}</td>
                      <td>{d.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.twoCol}>
            <div className={styles.colBlock}>
              <h2>Typical Duration</h2>
              <p>{offer.duration}</p>
            </div>
            <div className={styles.colBlock}>
              <h2>Why Now</h2>
              <p>{offer.costBenefit}</p>
            </div>
          </section>

          <section className={styles.credibilitySection}>
            <h2>Grounded in Real Experience</h2>
            <p>{offer.credibility.summary}</p>
            {offer.credibility.links && offer.credibility.links.length > 0 && (
              <ul className={styles.credibilityLinks}>
                {offer.credibility.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className={styles.ctaSection}>
            <h2>Ready to Talk?</h2>
            <p>
              Schedule a call to discuss whether {offer.name} is the right starting point for your
              organization.
            </p>
            <a
              href="https://calendly.com/tjm-solns/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Schedule a Consultation
            </a>
          </section>
        </main>
      </div>
    </Layout>
  );
}
