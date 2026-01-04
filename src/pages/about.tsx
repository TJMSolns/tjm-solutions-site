import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

export default function About(): ReactNode {
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <section className={styles.hero}>
          <div className="container">
            <h1>About TJM Solutions</h1>
            <p className={styles.subtitle}>Delivering Immersive Digital Community Experiences</p>
          </div>
        </section>

        <main className="container">
          <section className={styles.bioSection}>
            <div className={styles.bioContent}>
              <h2>Tony Moores</h2>
              <h3 style={{ color: '#c00000', marginTop: '8px' }}>
                Founder & Principal Consultant
              </h3>

              <p>
                Tony Moores is the founder of TJM Solutions, a firm dedicated to helping organizations 
                deliver immersive and collaborative digital experiences. He is a veteran digital commerce 
                practitioner who has been developing, teaching and consulting in that domain for two decades.
              </p>

              <p>
                Tony has been a technical SME for strategic customer endeavors related to all aspects of 
                omni-channel commerce with deep industry knowledge related to retail & B2B commerce.
              </p>

              <h3>Career Background</h3>

              <p>
                Prior to his career as an independent consultant, Tony worked in education, consulting 
                and sales for ATG and Oracle where he shaped the talents of hundreds of business and 
                technical commerce practitioners, guided solution development and provided expert advice 
                on all manners of omnichannel retail.
              </p>

              <p>
                He left Oracle to lead Professional Access's technical direction as their Chief Technology 
                Officer, guiding their solution offering and asset development.
              </p>

              <h3>Today</h3>

              <p>
                Now, Tony is bringing over 20 years of experience in business development, technology 
                orchestration, process optimization, training, troubleshooting and architectural design 
                to his own customers.
              </p>

              <div className={styles.contactCard}>
                <h3>Get in Touch</h3>
                <div className={styles.contactInfo}>
                  <p><strong>Company:</strong> TJM Solutions LLC</p>
                  <p><strong>Email:</strong> <a href="mailto:tony@tjm.solutions">tony@tjm.solutions</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+16037382122">+1 603.738.2122</a></p>
                  <p><strong>Location:</strong> Manchester, New Hampshire, USA</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
