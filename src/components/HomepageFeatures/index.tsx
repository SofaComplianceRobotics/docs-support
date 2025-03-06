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
    title: 'Emio',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link: "/docs/category/emio",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Simulation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    link: "/docs/category/simulation",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Support Request',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    link: "/emio-support-form",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3 col--offset-1', 'card')}>
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
