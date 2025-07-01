import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import {useDocsPreferredVersion} from '@docusaurus/theme-common';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Emio Labs',
    Svg: require('@site/static/img/logo_emio_labs_round.svg').default,
    link: "/category/emio-labs", 
    description: (
      <>
        Find all the documentation about Emio, our reconfigurable continuum parallel robot for academia. 
        Find your labs, learn how to create your own teaching content, and more.
      </>
    ),
  },
  {
    title: 'SOFA Robotics',
    Svg: require('@site/static/img/logo_sofa_robotics_round.svg').default,
    link: "/category/sofa-robotics",
    description: (
      <>
        Need help to use the simulation software with our robotic oriented GUI ? Find all the documentation here. 
      </>
    ),
  },
  {
    title: 'Emio Support',
    Svg: require('@site/static/img/icon_support_round.svg').default,
    link: "/emio-support-form",
    description: (
      <>
        Browse the documentation and frequently asked questions. 
        If you can't find the answer to your question, feel free to reach out to us using this form.
      </>
    ),
  },
];

function Feature({title, Svg, link, description}: FeatureItem) {
  const preferredVersion = useDocsPreferredVersion();
  const preferredVersionPath = `${preferredVersion.preferredVersion?preferredVersion.preferredVersion.path:"/"}`;
  const linkWithVersion = link.startsWith('/category') ? `${preferredVersionPath}${link}` : link;
  return (
    <div className={clsx('col col--3 col--offset-1')}>
    <div className="card__image">
      <div className="text--center">
        <a href={linkWithVersion}> 
          <Svg className={styles.featureSvg} role="img" /> 
        </a>
      </div>
    </div>
    <div className="card__body text--center">
      <h4>{title}</h4>
      <small>
        {description}
      </small>
    </div>
  </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
