import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import CategoryIcon, {type Category} from '@site/src/components/CategoryIcon';
import styles from './styles.module.css';

type OfferLink = {
  id: string;
  label: string;
  href: string;
};

type FeatureItem = {
  code: Category;
  title: string;
  description: ReactNode;
  offers: OfferLink[];
};

const FeatureList: FeatureItem[] = [
  {
    code: 'CS',
    title: 'Commerce Strategy',
    description: (
      <>
        Evaluating platforms, search, and marketplace systems — for new builds, migrations, and the move to agentic commerce.
      </>
    ),
    offers: [
      {id: 'CS-1', label: 'Commerce Platform Assessment', href: '/services/commerce-platform-assessment'},
      {id: 'CS-2', label: 'Marketplace Integration Strategy', href: '/services/marketplace-integration-strategy'},
      {id: 'CS-3', label: 'Agent-Commerce Readiness Audit', href: '/services/agent-commerce-readiness-audit'},
      {id: 'CS-4', label: 'Composable Commerce Architecture Review', href: '/services/composable-commerce-architecture-review'},
      {id: 'CS-5', label: 'Agentic Commerce Transition Roadmap', href: '/services/agentic-commerce-transition-roadmap'},
      {id: 'CS-6', label: 'Commerce Technology Due Diligence', href: '/services/commerce-technology-due-diligence'},
      {id: 'CS-7', label: 'B2B Commerce Modernization Strategy', href: '/services/b2b-commerce-modernization-strategy'},
      {id: 'CS-8', label: 'Commerce Vendor/SI GTM Advisory', href: '/services/commerce-vendor-si-gtm-advisory'},
      {id: 'CS-9', label: 'Commerce Platform Selection', href: '/services/commerce-platform-selection'},
    ],
  },
  {
    code: 'DT',
    title: 'Digital Transformation',
    description: (
      <>
        Modernizing architecture — microservices, headless/API-first systems, and AI-adjacent knowledge bases — without a rewrite.
      </>
    ),
    offers: [
      {id: 'DT-1', label: 'AI Adoption Roadmap', href: '/services/ai-adoption-roadmap'},
      {id: 'DT-2', label: 'KCS Knowledge Base Implementation', href: '/services/kcs-knowledge-base'},
      {id: 'DT-3', label: 'Microservices Modernization Assessment', href: '/services/microservices-modernization-assessment'},
      {id: 'DT-4', label: 'Data Readiness for AI', href: '/services/data-readiness-for-ai'},
      {id: 'DT-5', label: 'Reactive Systems & Reliability Review', href: '/services/reactive-systems-reliability-review'},
      {id: 'DT-6', label: 'Technical Roadmap & Business Alignment', href: '/services/technical-roadmap-business-alignment'},
    ],
  },
  {
    code: 'EE',
    title: 'Experience Engineering',
    description: (
      <>
        Architecture and tooling built around how your team and customers actually engage — not just what shipped out of the box.
      </>
    ),
    offers: [
      {id: 'EE-1', label: 'Commerce Search & Discovery Audit', href: '/services/commerce-search-discovery-audit'},
      {id: 'EE-2', label: 'Merchandising & Business User Tools Assessment', href: '/services/merchandising-business-tools-assessment'},
      {id: 'EE-3', label: 'Personalization & Intelligent Recommendations Strategy', href: '/services/personalization-recommendations-strategy'},
      {id: 'EE-4', label: 'Engagement Architecture Review', href: '/services/engagement-architecture-review'},
      {id: 'EE-5', label: 'Agent-Ready Experience Design', href: '/services/agent-ready-experience-design'},
      {id: 'EE-6', label: 'Digital Experience Platform Assessment', href: '/services/digital-experience-platform-assessment'},
      {id: 'EE-7', label: 'Customer Engagement Analytics & Dashboard Review', href: '/services/customer-engagement-analytics-review'},
    ],
  },
];

function Feature({code, title, description, offers}: FeatureItem) {
  return (
    <div className={styles.categoryRow} id={code === 'CS' ? 'commerce-strategy' : code === 'DT' ? 'digital-transformation' : 'experience-engineering'}>
      <div className={styles.categoryIcon}>
        <CategoryIcon category={code} size={26} />
      </div>
      <div className={styles.categoryContent}>
        <div className={styles.categoryHeader}>
          <span className={`${styles.categoryCode} cat-${code.toLowerCase()}`}>{code}</span>
          <h3 className={styles.categoryName}>{title}</h3>
          <span className={styles.categoryCount}>{offers.length} OFFERS</span>
        </div>
        <p className={styles.categoryDescription}>{description}</p>
        <ul className={styles.offerChips}>
          {offers.map((offer) => (
            <li key={offer.id}>
              <Link
                to={offer.href}
                className={styles.offerChip}
                style={{borderColor: `var(--cat-${code.toLowerCase()})`}}
              >
                <span className={`${styles.offerChipCode} cat-${code.toLowerCase()}`}>{offer.id}</span>
                <span className={styles.offerChipName}>{offer.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.servicesIndex}>
          {FeatureList.map((props) => (
            <Feature key={props.code} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
