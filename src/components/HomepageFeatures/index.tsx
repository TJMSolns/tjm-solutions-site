import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type OfferLink = {
  id: string;
  label: string;
  href: string;
};

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: ReactNode;
  offers?: OfferLink[];
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Commerce Strategy',
    imageUrl: '/img/commerce-strategy.jpg',
    description: (
      <>
        Need based evaluation of platforms, tools, processes and systems related to commerce for new installs, migrations, upgrades and enhancements. Opportunistic enhancement via adoption of new search, marketplace and intelligent systems. Transition to agentic commerce.
      </>
    ),
    offers: [
      {id: 'CS-2', label: 'Marketplace Integration Strategy', href: '/services/marketplace-integration-strategy'},
      {id: 'CS-4', label: 'Composable Commerce Architecture Review', href: '/services/composable-commerce-architecture-review'},
      {id: 'CS-3', label: 'Agent-Commerce Readiness Audit', href: '/services/agent-commerce-readiness-audit'},
    ],
  },
  {
    title: 'Digital Transformation',
    imageUrl: '/img/digital-transformation.jpg',
    description: (
      <>
        Align technical road map to business objectives. Deploy microservices to modernize while reducing technical debt. Optimize resources according to fit & function. Adoption of headless/API-first & content driven strategies. Incorporation of GenAI, RAG, and Knowledge Bases into current processes.
      </>
    ),
    offers: [
      {id: 'DT-2', label: 'KCS Knowledge Base Implementation', href: '/services/kcs-knowledge-base'},
      {id: 'DT-3', label: 'Microservices Modernization Assessment', href: '/services/microservices-modernization-assessment'},
      {id: 'DT-5', label: 'Reactive Systems & Reliability Review', href: '/services/reactive-systems-reliability-review'},
    ],
  },
  {
    title: 'Experience Engineering',
    imageUrl: '/img/experience-engineering.jpg',
    description: (
      <>
        Recommend strategic steps to boost engagement. Marry architecture & tooling to your community, education and retail goals. Evaluate dashboards and business user tools against operational needs to maximize out-of-the-box functionality with process and outcomes.
      </>
    ),
    offers: [
      {id: 'EE-1', label: 'Commerce Search & Discovery Audit', href: '/services/commerce-search-discovery-audit'},
      {id: 'EE-5', label: 'Agent-Ready Experience Design', href: '/services/agent-ready-experience-design'},
      {id: 'EE-4', label: 'Engagement Architecture Review', href: '/services/engagement-architecture-review'},
    ],
  },
  {
    title: 'Workshop Management',
    imageUrl: '/img/workshop-management.jpg',
    description: (
      <>
        Organize and drive sessions with stakeholders to manage requirement discovery & elaboration, system mapping, gap/overlap analysis. Analyze organizational agility & readiness. Explore benefits and practical approaches to MSA, ML/AI Agentic frameworks.
      </>
    ),
  },
];

function Feature({title, imageUrl, description, offers}: FeatureItem) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceImage}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.serviceContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        {offers && offers.length > 0 && (
          <ul className={styles.offerList}>
            {offers.map((offer) => (
              <li key={offer.id}>
                <Link to={offer.href}>{offer.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.servicesGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
