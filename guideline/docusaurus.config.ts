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

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        indexBlog: false
      }
    ],
  ],
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
    /*  announcementBar: {
        id: 'btp_new',
        
        content:
          '',
        backgroundColor: '#EBF8FF',
        textColor: '#CC00DC',
        isCloseable: false,
      },*/
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
      disableSwitch: true
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
          label: 'GitHub Repository',
          className: 'navbar__link--demo__repo',
          href: 'https://github.com/SAP/btp-solution-diagrams/tree/main',
         
        },
        { 
          label: 'GitHub Discussions',
          position: 'right',
          className: 'navbar__link--demo__faq',
          href: 'https://github.com/SAP/btp-solution-diagrams/discussions',
        },
       
        
      ],
      
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'About SAP BTP Solution Diagrams',
          items: [
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Starter Kit for draw.io',
              href: 'https://github.com/SAP/btp-solution-diagrams/tree/main/assets/all-in-one-starter-kits',
            },
            {
              label: 'Explore Diagram Guideline',
              to: '/docs/solution_diagr_intro/big_picture/',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
           
            {
              label: 'SAP Community',
              href: 'https://community.sap.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SAP/btp-solution-diagrams/discussions',
            }
          ],
        },
        {
          title: 'Get in Touch',
          items: [
           
            {
              label: 'GitHub',
              href: 'https://github.com/SAP/btp-solution-diagrams',
            },
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
