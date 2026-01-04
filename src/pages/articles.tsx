import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import styles from './articles.module.css';

interface Article {
  title: string;
  subtitle: string;
  url: string;
}

const articles: Article[] = [
  {
    title: 'An Introduction to Reactive Commerce',
    subtitle: 'How to Invigorate Digital Commerce by Applying Reactive Microservice Architectures and Where it Makes a Difference',
    url: 'https://tmoores.medium.com/an-introduction-to-reactive-commerce-1fe9eaccf9f8',
  },
  {
    title: 'Headless Commerce: Advice for Goal Hangers',
    subtitle: 'Strategic guidance on implementing headless commerce architectures',
    url: 'https://tmoores.medium.com/headless-commerce-advice-for-goal-hangers-5e8dbab354cb',
  },
  {
    title: 'Agility and the Headless Commerce Debate',
    subtitle: 'Making a Decision for the Whole Business',
    url: 'https://tmoores.medium.com/agility-and-the-headless-commerce-debate-making-a-decision-for-the-whole-business-253ead850070',
  },
  {
    title: 'Why Do They Call Them Apartments When They\'re All Stuck Together?',
    subtitle: 'Exploring microservices architecture and system boundaries',
    url: 'https://tmoores.medium.com/why-do-they-call-them-apartments-when-theyre-all-stuck-together-450268cd1c88',
  },
];

export default function Articles(): ReactNode {
  return (
    <Layout>
      <div className={styles.articlesContainer}>
        <section className={styles.hero}>
          <div className="container">
            <h1>Articles & Insights</h1>
            <p className={styles.subtitle}>Thoughts on Digital Commerce, Architecture, and Technology Strategy</p>
          </div>
        </section>

        <main className="container">
          <section className={styles.featuredSection}>
            <h2>Featured Articles on Medium</h2>
            <div className={styles.articlesList}>
              {articles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.articleCard}
                >
                  <div className={styles.articleContent}>
                    <h3>{article.title}</h3>
                    <p className={styles.articleSubtitle}>{article.subtitle}</p>
                    <span className={styles.readMore}>Read on Medium →</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className={styles.mediumSection}>
            <h2>More Content</h2>
            <p>
              Explore additional insights and articles on digital commerce, microservices architecture, 
              and technology strategy.
            </p>
            <a
              href="https://tmoores.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mediumButton}
            >
              Visit Tony Moores on Medium
            </a>
          </section>
        </main>
      </div>
    </Layout>
  );
}
