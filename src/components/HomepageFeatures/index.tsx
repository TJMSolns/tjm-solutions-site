import type {ReactNode} from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Commerce Strategy',
    imageUrl: '/img/commerce-strategy.jpg',
    description: (
      <>
        Need based evaluation of platforms, tools, processes and systems related to commerce for new installs, migrations, upgrades and enhancements. Opportunistic enhancement via adoption of new search, marketplace and intelligent systems.
      </>
    ),
  },
  {
    title: 'Digital Transformation',
    imageUrl: '/img/digital-transformation.jpg',
    description: (
      <>
        Align technical road map to business objectives. Deploy microservices to modernize while reducing technical debt. Optimize resources according to fit & function. Adoption of headless/api-first & content driven strategies.
      </>
    ),
  },
  {
    title: 'Experience Engineering',
    imageUrl: '/img/experience-engineering.jpg',
    description: (
      <>
        Recommend strategic steps to boost engagement. Marry architecture & tooling to your community, education and retail goals. Evaluate dashboards and business user tools against operational needs to maximize out-of-the-box functionality with process and outcomes.
      </>
    ),
  },
  {
    title: 'Workshop Management',
    imageUrl: '/img/workshop-management.jpg',
    description: (
      <>
        Organize and drive sessions with stakeholders to manage requirement discovery & elaboration, system mapping, gap/overlap analysis. Analyze organizational agility & readiness. Explore benefits and practical approaches to msa adoption.
      </>
    ),
  },
];

function Feature({title, imageUrl, description}: FeatureItem) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceImage}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.serviceContent}>
        <h3>{title}</h3>
        <p>{description}</p>
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
