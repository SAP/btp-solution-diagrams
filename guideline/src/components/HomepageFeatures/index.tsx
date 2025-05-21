import clsx from 'clsx';
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from './styles.module.css';


type FeatureItem = {
  title: string;
  //Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [

  {
    title: 'BTP Solution Diagrams',
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    image: "/img/patterns.png",
    description: (
      <>

        BTP Solution Diagrams are schematic visualizations of BTP Architectures. They vary from ...

        THis text should briefly explain who the target audience is,
        what they will find here and what they can use it for.
        Also we need to make visible what the most recent guidelien is and that there is ways to connect with others internally at SAP (community etc.)
        The Button will go directly to the REPO..
      </>
    ),
  },
  {
    title: 'Based on SAP Fiori Horizon',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    image: "/img/layouts.png",
    description: (
      <>
        This has been designed in accordance with the SAP Fiori Horizon principles
        and color palette which provides a holistic and pleasing aesthetic and
        user experience. your can find more in the <code>docs</code> directory.
      </>
    ),
  },
];
function Feature({ title, image, description }: FeatureItem) {
  return (

    <div className={clsx("col col--4")}>

      <div className="text--center">
        <img
          className={styles.featureImg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures(): JSX.Element {
  return (

    <section className={styles.features}>

      <div className="container">
        <div className="section">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}

/*
<div>
       <Separator />
       </div>
      <div className="container">
*/
