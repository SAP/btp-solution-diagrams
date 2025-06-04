import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BTP Solution Diagrams',
  tagline: 'A SAP Business Technology Platform (BTP) solution diagram typically illustrates the architecture and components of a solution built on SAP BTP. It showcases how different services and technologies within the platform are utilized to address specific business requirements. The diagram provides a visual representation of the overall solution structure and flow.',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://github.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/sap/btp-diagram-guideline',
  baseUrl: '/btp-solution-diagrams/',
  githubHost:'github.com',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sap', // Usually your GitHub org/user name.
  projectName: 'btp-diagram-guideline', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'throw',

   plugins: [
    [require.resolve('docusaurus-plugin-image-zoom'), {}],
    './src/plugins/init-ui5-theme',
    [
     require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        removeDefaultStopWordFilter: true,
        removeDefaultStemmer: true,
      }
    ], 
  ], 

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {         
          sidebarPath: './sidebars.ts',
        },     
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: 
    {
    image: 'img/fav_sd.png',
    metadata: [
      {
          name: 'keywords',
          content: 'sap, btp, architecture, diagrams, solution-diagrams, icons, guideline, sap-btp-diagram-guideline, sap-btp-solution-diagrams',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
      disableSwitch: false
      },
    navbar: {
      title: 'BTP Solution Diagrams',
      logo: {
        alt: 'SAP Logo',
        src: 'img/logo.svg',
      },
      hideOnScroll: false,
      items: [
      
        {
          type: 'docSidebar',
          sidebarId: 'btp_guideline',
          position: 'right',
          
          label: 'Diagram Guideline',
          className: 'navbar__link--demo__res',
        },
        {
          position: 'right',
          title: 'Visit GitHub Repository',
          className: 'navbar__link--demo__repo',
          href: 'https://github.com/SAP/btp-solution-diagrams/tree/main',
         
        },
      ], 
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy',
              href: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
          },
          {
              label: 'Terms of Use',
              href: 'https://www.sap.com/about/legal/terms-of-use.html',
          },
            {
              label: 'Legal Statement',
              href: 'https://www.sap.com/corporate/en/legal/impressum.html'
            }
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/SAP/btp-solution-diagrams',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/SAP/btp-solution-diagrams/issues',
            },
            {
              label: 'Explore Diagram Guideline',
              to: '/docs/solution_diagr_intro/big_picture/',
            }
          ],
        },
        {
          title: 'SAP Community',
          items: [
           
            {
              label: 'SAP Community',
              href: 'https://community.sap.com/',
            },
            {
              label: 'SAP Community Blogs',
              href: 'https://community.sap.com/t5/all-sap-community-blogs/ct-p/all-blogs',
            },
            {
              label: 'SAP Community Events',
              href: 'https://community.sap.com/t5/events/ct-p/events',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'SAP Architecture Center',
              href: 'https://architecture.learning.sap.com/',
            },
            {
              label: 'SAP Discovery Center',
              href: 'https://discovery-center.cloud.sap/',
            },
            {
              label: 'SAP Learning',
              href: 'https://learning.sap.com/',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}  SAP SE or SAP affiliate company. All rights reserved.`,

    },
    
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        background: {
          dark: '#171717',
          light: '#ffffff'
        }
      }
    },
    } satisfies Preset.ThemeConfig,
};

module.exports = config;