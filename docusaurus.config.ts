import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import EmioSupportForm from './src/pages/emio-support-form';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Compliance Robotics | Docs & Support',
  tagline: 'A different kind of robotics',
  favicon: 'img/CRIcon.svg',

  // Set the production url of your site here
  // url: 'https://SofaComplianceRobotics.github.io',
  url: 'https://docs-support.compliance-robotics.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SofaComplianceRobotics', // Usually your GitHub org/user name.
  projectName: 'docs-support', // Usually your repo name.
  // deploymentBranch: '', // The name of the deployment branch. 
  // It defaults to 'gh-pages' for non-organization GitHub Pages repos (projectName not ending in .github.io). 
  // Otherwise, it needs to be explicit as a config field or environment variable.
  trailingSlash: true, //GitHub Pages adds a trailing slash to Docusaurus URLs by default. 
  // It is recommended to set a trailingSlash config (true or false, not undefined).

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          lastVersion: "v25.06",
          versions: {
            current: {
              label: 'v25.12-coming',
              path: 'next',
            },
            "v25.06": {
              label: 'v25.06',
              path: 'v25.06',
            },
            "v24.12": {
              label: 'v24.12',
              path: 'v24.12',
            },
          },
          admonitions: {
            keywords: ['note', 'tip', 'info', 'warning', 'danger', 'verified'],
            extendDefaults: true,
          },
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: {
          blogTitle: 'News',
          postsPerPage: 3,
          blogSidebarTitle: 'All news',
          blogSidebarCount: 'ALL',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    navbar: {
      logo: {
        alt: 'Compliance Robotics Logo',
        src: 'img/CRLogo_A2L.svg',
        srcDark: 'img/CRLogo_B2L.svg',
        height: "50%",
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'blog', 
          label: 'News', 
          position: 'left'}, 
        {
          type: 'dropdown',
          label: 'Support',
          position: 'left',
          items: [
            {
              label: 'Emio',
              to: 'emio-support-form',
            }
          ],
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          html: `
          <a href="https://www.linkedin.com/company/compliance-robotics">
             <img src='https://sofacompliancerobotics.github.io/docs-support/img/footer_icon_linkedin.png' width="30" height="30" />
          </a>
          `
        },
        {
          html: `
          <a href="https://www.youtube.com/@ComplianceRobotics">
             <img src='https://sofacompliancerobotics.github.io/docs-support/img/footer_icon_youtube.png' width="30" height="30" />
          </a>
          `
        },
        {
          html: `
          <a href="https://www.compliance-robotics.com">
             <img src='https://sofacompliancerobotics.github.io/docs-support/img/footer_icon_CR.png' width="30" height="30" />
          </a>
          `
        }
      ],
      copyright: `Copyright © 2024 - ${new Date().getFullYear()} Compliance Robotics. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell','bash','markdown'],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/v24.12/EmioLabs/find-labs/',
            from: '/Find-your-Labs-13c582ce7d3a802bbe72d37b72e02e50',
          },
          {
            to: '/docs/v24.12/EmioLabs/create-your-lab/',
            from: '/Create-your-own-Labs-13c582ce7d3a80ceb636ca3153f5594a',
          },
        ],
      },
    ],
  ],
};

export default config;
