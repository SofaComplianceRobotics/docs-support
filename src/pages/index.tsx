import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div style={{display: "flex", alignItems:"center"}}>
          <div className="container" style={{flex: "1 1 0%"}}>
            <Heading as="h1" className="hero__title">
              Compliance Robotics | 
              Docs & Support
            </Heading>
            <p className="hero__subtitle">Explore our documentation and get the help you need.</p>
            <br/>
            <div className={styles.buttons}>
              <Link
                className={clsx("button button--secondary button--lg", styles.whitebutton)}
                to="/docs">
                Get Started
              </Link>
            </div>
          </div>
          <img src="img/emio_SOFA.jpg" style={{width:"40%", height:"100%", borderRadius:"0", clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
}}/>
        </div>
      </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Learn how to use our products.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
