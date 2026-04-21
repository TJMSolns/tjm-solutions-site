import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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
    mermaid: true,
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
        docs: false,
        blog: {
          path: 'blog',
          routeBasePath: 'articles',
          blogTitle: 'Articles & Insights',
          blogDescription: 'Thoughts on Digital Commerce, Architecture, and Technology Strategy',
          blogSidebarCount: 0,
          postsPerPage: 'ALL',
          blogListComponent: '@site/src/components/ArticlesList/index',
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'TJM Solutions Articles',
            description: 'Thoughts on Digital Commerce, Architecture, and Technology Strategy',
            copyright: `Copyright © ${new Date().getFullYear()} TJM Solutions LLC`,
          },
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
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/tony-moores/',
            },
            {
              label: 'Schedule a Call',
              href: 'https://calendly.com/tjm-solns/',
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

  // === Additional Themes ===
  themes: ['@docusaurus/theme-mermaid'],

  // === Stylesheets ===
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
