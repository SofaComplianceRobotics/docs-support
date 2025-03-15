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
  url: 'https://docs-support.compliance-robotics.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SofaComplianceRobotics', // Usually your GitHub org/user name.
  projectName: 'docs-support', // Usually your repo name.

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
          admonitions: {
            keywords: ['note', 'tip', 'info', 'warning', 'danger', 'verified'],
            extendDefaults: true,
          },
          sidebarPath: './sidebars.ts'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
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
          label: 'Documentation',
        },
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
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          html: `
          <a href="https://www.linkedin.com/company/compliance-robotics">
             <img src="/img/footer_icon_linkedin.png" width="30" height="30" />
          </a>
          `
        },
        {
          html: `
          <a href="https://www.youtube.com/@ComplianceRobotics">
             <img src="/img/footer_icon_youtube.png" width="30" height="30" />
          </a>
          `
        },
        {
          html: `
          <a href="https://www.compliance-robotics.com">
             <img src="/img/footer_icon_CR.png" width="30" height="30" />
          </a>
          `
        }
      ],
      copyright: `Copyright © 2024 - ${new Date().getFullYear()} Compliance Robotics. All rights reserved. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
