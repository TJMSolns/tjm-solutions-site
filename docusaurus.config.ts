import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'TJM Solutions',
  tagline: 'Architecture, Engineering, and Advisory',
  favicon: 'img/favicon.ico',

  // === Site URL configuration ===
  // Primary public site
  url: 'https://www.tjm.solutions',
  baseUrl: '/',

  // === GitHub Pages / repo metadata ===
  organizationName: 'TJMSolns',
  projectName: 'tjm-solutions-site',

  // Useful for edit links later (optional, but correct)
  trailingSlash: false,

  // Handle broken links strictly (you want to know)
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // === Internationalization ===
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // === Presets ===
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/TJMSolns/tjm-solutions-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/TJMSolns/tjm-solutions-site/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  // === Theme configuration ===
  themeConfig: {
    image: 'img/social-card.png',

    navbar: {
      title: 'TJM Solutions',
      logo: {
        alt: 'TJM Solutions Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/intro',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/TJMSolns',
          label: 'GitHub',
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
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/TJMSolns',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TJM Solutions`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  // === Plugins ===
  plugins: [],
};

export default config;
