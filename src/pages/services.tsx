import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import styles from './services.module.css';

interface Service {
  title: string;
  description: string;
  items: string[];
}

const services: Service[] = [
  {
    title: 'Commerce Strategy',
    description: 'Need-based evaluation of platforms, tools, processes and systems related to commerce for new installs, migrations, upgrades and enhancements. Opportunistic enhancement via adoption of new search, marketplace and intelligent systems.',
    items: [
      'Platform evaluation and selection',
      'Commerce migrations and upgrades',
      'Process optimization',
      'Search and marketplace integration',
      'Intelligent system adoption',
    ],
  },
  {
    title: 'Digital Transformation',
    description: 'Align technical road map to business objectives. Deploy microservices to modernize while reducing technical debt. Optimize resources according to fit & function. Adoption of headless/API-first & content driven strategies.',
    items: [
      'Technical roadmap alignment',
      'Microservices architecture',
      'Technical debt reduction',
      'Headless/API-first strategies',
      'Content-driven approaches',
    ],
  },
  {
    title: 'Experience Engineering',
    description: 'Recommend strategic steps to boost engagement. Marry architecture & tooling to your community, education and retail goals. Evaluate dashboards and business user tools against operational needs.',
    items: [
      'Engagement optimization',
      'Architecture and tooling alignment',
      'Community and education platforms',
      'Business user tool evaluation',
      'Dashboard optimization',
    ],
  },
  {
    title: 'Workshop Management',
    description: 'Organize and drive sessions with stakeholders to manage requirement discovery & elaboration, system mapping, gap/overlap analysis. Analyze organizational agility & readiness.',
    items: [
      'Requirement discovery and elaboration',
      'System mapping',
      'Gap and overlap analysis',
      'Organizational agility assessment',
      'Readiness evaluation',
    ],
  },
];

export default function Services(): ReactNode {
  return (
    <Layout>
      <div className={styles.servicesContainer}>
        <section className={styles.hero}>
          <div className="container">
            <h1>Our Services</h1>
            <p className={styles.subtitle}>Comprehensive Digital Commerce & Technology Consulting</p>
          </div>
        </section>

        <main className="container">
          <section className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <h3>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <div className={styles.focusAreas}>
                  <h4>Key Focus Areas:</h4>
                  <ul>
                    {service.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>

          <section className={styles.ctaSection}>
            <h2>Ready to Transform Your Digital Experience?</h2>
            <p>
              Let's discuss how TJM Solutions can help your organization deliver immersive and 
              collaborative digital experiences.
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
