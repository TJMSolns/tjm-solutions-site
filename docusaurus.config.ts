import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'TJM Solutions',
  tagline: 'Architecture, Engineering, and Advisory',
  favicon: 'img/tjm-solutions-logo.png',

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

  // === Markdown Configuration ===
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'TJM Solutions',
      logo: {
        alt: 'TJM Solutions Logo',
        src: 'img/tjm-solutions-logo.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          to: '/rates',
          label: 'Rates',
          position: 'left',
        },
        {
          to: '/articles',
          label: 'Articles',
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
          title: 'Company',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Rates',
              to: '/rates',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Articles',
              to: '/articles',
            },
            {
              label: 'Medium',
              href: 'https://tmoores.medium.com/',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Email',
              href: 'mailto:tony@tjm.solutions',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/TJMSolns',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TJM Solutions LLC | Manchester, New Hampshire, USA`,
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
