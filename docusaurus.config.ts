import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Docs & Support | Compliance Robotics',
  tagline: 'A different kind of robotics',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs-support.compliance-robotics.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SofaComplianceRobotics', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

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
          sidebarPath: './sidebars.ts'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      // title: 'Docs',
      logo: {
        alt: 'Compliance Robotics Logo',
        src: 'img/cr_1L.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://compliance-robotics.com',
          label: 'Compliance Robotics',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              html: `
                  <a href='https://www.youtube.com/channel/UCF3i0VVyEyDHjhjj9xRJoAQ' class="footer__link-item" target="_blank" rel="noreferrer noopener" aria-label="Link to Compliance Robotics Youtube Channel">Youtube
                  </a>
                `,
            },
            {
              html: `
                  <a href='https://www.linkedin.com/company/compliance-robotics' class="footer__link-item" target="_blank" rel="noreferrer noopener" aria-label="Link to Compliance Robotics LinkedIn">LinkedIn
                  </a>
                `,
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              html: `
                  <a href='https://compliance-robotics.com' class="footer__link-item" target="_blank" rel="noreferrer noopener" aria-label="Link to Compliance Robotics Website">Company Site
                  </a>
                `,
            },
            {
              html: `
                  <a href='https://github.com/SofaComplianceRobotics/docs' class="footer__link-item" target="_blank" rel="noreferrer noopener" aria-label="Link to GitHub Repo">GitHub
                  </a>
                `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Compliance Robotics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
