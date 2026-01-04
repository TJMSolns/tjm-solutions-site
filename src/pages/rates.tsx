import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import styles from './rates.module.css';

interface EngagementModel {
  title: string;
  amount: string;
  period: string;
  description: string;
}

const engagements: EngagementModel[] = [
  {
    title: 'Consulting',
    amount: '$300',
    period: '/hour',
    description: 'Tactical work including system discovery, mapping, orchestration planning, and technical guidance.',
  },
  {
    title: 'Strategy',
    amount: '$400',
    period: '/hour',
    description: 'Executive advisory for operational planning and directional guidance on digital commerce initiatives.',
  },
  {
    title: 'Workshop',
    amount: '$6,000',
    period: '/day',
    description: 'Full-day sessions for requirement discovery, system mapping, training, and collaborative planning.',
  },
  {
    title: 'Retainer',
    amount: '$6,000',
    period: '/month',
    description: 'Ongoing support with priority access for strategic guidance and on-call expertise.',
  },
];

export default function Rates(): ReactNode {
  return (
    <Layout>
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
                <div className={styles.rateAmount}>
                  <span className={styles.amount}>{engagement.amount}</span>
                  <span className={styles.period}>{engagement.period}</span>
                </div>
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
              Ready to explore engagement options? Get in touch to discuss your specific needs and 
              find the right engagement model for your organization.
            </p>
            <a href="/about#get-in-touch" className={styles.ctaButton}>
              Contact Us
            </a>
          </section>
        </main>
      </div>
    </Layout>
  );
}
