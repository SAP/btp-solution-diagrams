import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'
import HeroSection from '../sections/HeroSection'
import GuidelineSection from '../sections/Guideline'
import LibrariesSection from '../sections/Libraries'
import WhatsSection from '../sections/Whats'
import IconSection from '../sections/Icons'

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="header_text">
          {siteConfig.title}
        </Heading>
        <ThemedImage
          alt="BTP Solution Diagrams"
          sources={{
            light: useBaseUrl('img/btp-Spot-Tools.png'),
            dark: useBaseUrl('img/btp-Spot-Tools.png')
          }}
        />
        <p className="hero_body">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg" color="blue"
            to="/docs/intro">
            Start now 🚀
          </Link>

        </div>
      </div>

    </header>

  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HeroSection />
        <WhatsSection />
        <GuidelineSection />
        <LibrariesSection />
        <IconSection />
      </main>

    </Layout>
  );
}
