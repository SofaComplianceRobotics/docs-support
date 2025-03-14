import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Emio Labs',
    Svg: require('@site/static/img/logo_emio_labs_light.svg').default,
    link: "/docs/category/emio-labs",
    description: (
      <>
        Find all the documentation about Emio, our reconfigurable continuum parallel robot for academia. 
        Find your labs, learn how to create your own teaching content, and more.
      </>
    ),
  },
  {
    title: 'SOFA Robotics',
    Svg: require('@site/static/img/logo_sofa_robotics_light.svg').default,
    link: "/docs/category/sofa-robotics",
    description: (
      <>
        Need help to use the simulation software with our robotic oriented GUI ? Find all the documentation here. 
      </>
    ),
  },
];

function Feature({title, Svg, link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3 col--offset-2')}>
    <div className="card__image">
      <div className="text--center">
        <a href={link}> 
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
