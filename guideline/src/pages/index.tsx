import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Separator from "./Separator";
import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

import HeroSection from '../sections/HeroSection'
import OverviewSection from '../sections/Overview'
import GuidelineSection from '../sections/Guideline'
import CommunitySection from '../sections/Community'
import ResourcesSection from '../sections/Resources'
import LibrariesSection from '../sections/Libraries'

import styles from './index.module.css';
import Overview from '../sections/Overview';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="header_text">
          {siteConfig.title}
        </Heading>
        <ThemedImage
        alt="BTP Preview"
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
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      
      
      
      
      <main>
      
      <HeroSection />
      <OverviewSection />
      <GuidelineSection/>
     <LibrariesSection/>
     
      
      
      
        
      </main>
     
    </Layout>
  );
}
//<HomepageHeader />
//<HomepageFeatures />
//<HeroSection />
//<HomepageHeader />
//<Separator />
//