import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './projects.module.css';

const TITLE = 'Projects | TJM Solutions';
const DESCRIPTION =
  'Tools and products from TJM Solutions LLC — built for developers and practitioners.';

interface Project {
  icon: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  status: string;
  to: string;
  docsTo: string;
  github?: string;
}

const projects: Project[] = [
  {
    icon: '📊',
    name: 'MD-Slides',
    tagline: 'Markdown to HTML presentations',
    description:
      'A CLI tool that converts structured Markdown into self-contained HTML presentations. Speaker view, keyboard navigation, density validation, and a JSON theme system are all built in. Plain-text input makes it naturally scriptable — generate slide content with an LLM, a build pipeline, or a shell script, then render with a single command. One JAR, Java 11+.',
    tags: ['Scala 3', 'Mill', 'CLI', 'MIT'],
    status: 'Released',
    to: '/mdslides',
    docsTo: '/mdslides/docs/intro',
    github: 'https://github.com/TJMSolns/MD-Slides',
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{project.icon}</span>
        <div className={styles.cardMeta}>
          <h2>{project.name}</h2>
          <span className={styles.cardStatus}>{project.status}</span>
        </div>
      </div>
      <div className={styles.cardBody}>
        <p>{project.description}</p>
        <div className={styles.cardTags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles.cardFooter}>
        <Link to={project.to} className={styles.linkPrimary}>Overview</Link>
        <Link to={project.docsTo} className={styles.linkSecondary}>Docs</Link>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkSecondary}>GitHub</a>
        )}
      </div>
    </div>
  );
}

export default function Projects(): ReactNode {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <Head>
        <link rel="canonical" href="https://www.tjm.solutions/projects" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://www.tjm.solutions/projects" />
        <meta property="og:image" content="https://www.tjm.solutions/img/tjm-solutions-logo.png" />
        <meta property="og:image:alt" content="TJM Solutions Open Source Projects" />
        <meta property="og:image:width" content="576" />
        <meta property="og:image:height" content="571" />
      </Head>

      <div className={styles.grid}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
