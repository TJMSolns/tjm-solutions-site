# Copilot Instructions for TJM Solutions Site

## Project Overview
This is a **Docusaurus 3.9.2** static site for TJM Solutions, built with TypeScript and React 19. The site is a marketing/branding site (not docs-heavy) with custom pages and professional consulting company focus.

## Architecture & Key Files

### Configuration
- **[docusaurus.config.ts](../docusaurus.config.ts)**: Central config with site metadata, navbar, footer, theme settings
  - Site deploys to `https://www.tjm.solutions` via GitHub Pages (`gh-pages` branch)
  - Organization: `TJMSolns`, Repo: `tjm-solutions-site`
  - Edit links point to `github.com/TJMSolns/tjm-solutions-site/tree/main/`
  - Strict broken link handling (`onBrokenLinks: 'throw'`)
  - Markdown hooks for broken links: `markdown.hooks.onBrokenMarkdownLinks: 'warn'`
- **[sidebars.ts](../sidebars.ts)**: Auto-generated sidebar from docs folder structure
- **[tsconfig.json](../tsconfig.json)**: Extends `@docusaurus/tsconfig` with `baseUrl: "."`

### Source Structure
- **`src/pages/`**: Custom React pages (homepage, about, services, rates, articles)
  - Each page: `<page>.tsx` (component) + `<page>.module.css` (scoped styles)
  - Use `Layout` component from `@theme/Layout` for consistent structure
- **`src/components/`**: Reusable React components (HomepageFeatures for service cards)
- **`src/css/custom.css`**: Global Infima CSS variable overrides and brand styling
  - Define color palette in `:root` for light mode
  - Define alternative palette in `[data-theme='dark']` for dark mode
  - TJM brand: Red `#c00000`, Dark Gray `#1f1f20`
- **`docs/`**: Documentation content (currently tutorial, can be customized or removed)
- **`blog/`**: Blog posts with authors/tags metadata
- **`static/img/`**: Static assets (logo, images)

## Development Workflows

### Commands (use `yarn` or `npm`)
```bash
yarn start          # Dev server with hot reload at localhost:3000
yarn build          # Production build to build/ directory
yarn serve          # Preview production build locally
yarn typecheck      # TypeScript validation
yarn clear          # Clear Docusaurus cache
yarn swizzle        # Eject/wrap Docusaurus theme components (use sparingly)
```

### Deployment
- **GitHub Pages**: `yarn deploy` (requires GIT_USER env or USE_SSH=true)
- Builds to `gh-pages` branch automatically

## Styling Best Practices

### CSS Architecture
1. **Global styles** (`src/css/custom.css`):
   - Override Infima CSS variables (prefix `--ifm-*`) for theme colors, typography
   - Define custom CSS variables for brand colors
   - Use `[data-theme='dark']` selector for dark mode overrides (NOT `@media (prefers-color-scheme: dark)`)
   
2. **CSS Modules** (`<page>.module.css`):
   - Scoped component styles using `.module.css` suffix
   - Import and use as: `import styles from './page.module.css'; className={styles.myClass}`
   - Dark mode in modules: Use `[data-theme='dark'] .className` selector, NOT media queries
   - Avoid targeting Infima/Docusaurus implementation details (BEM-prefixed classes)

### Color/Theme Implementation
- **Light mode**: Define primary colors in `:root` CSS variables
- **Dark mode**: Override same variables under `[data-theme='dark']` selector
- **WCAG compliance**: Ensure WCAG-AA contrast ratio (min 4.5:1 for text)
- **rgba colors**: Use light mode RGB with opacity for light backgrounds; use dark mode RGB with opacity for dark backgrounds
- **Example**:
  ```css
  /* Light mode */
  :root {
    --ifm-color-primary: #c00000;
    --ifm-color-primary-dark: #a50000;
  }
  
  /* Dark mode - different shades for dark background */
  [data-theme='dark'] {
    --ifm-color-primary: #ff4d4d;
    --ifm-color-primary-dark: #ff1a1a;
  }
  ```

### Responsive Design
- Mobile breakpoint: **996px** (Docusaurus standard)
- Use `@media (max-width: 768px)` for mobile-first refinements
- Prefer flexbox/grid over floats
- Test in both light and dark modes

## Conventions & Patterns

### TypeScript/React
- **React 19** with strict TypeScript (`typescript: ~5.6.2`)
- Return types: `ReactNode` for components, explicit types on props/state
- Path aliases: `@site/` → project root, `@theme/` → theme components
- Import Docusaurus components from `@docusaurus/`, `@theme/` (e.g., `Layout`, `Link`, `useDocusaurusContext`)
- Use CSS modules: `import styles from './file.module.css'`

### Page Components
- Wrap page in `<Layout>` from `@theme/Layout` for navbar/footer
- Export default as `ReactNode` type
- Use `useDocusaurusContext()` to access site config if needed
- Structure: Hero section → content sections → CTA sections

### Dark Mode Testing
- Always test changes in both light AND dark mode
- Use browser DevTools to toggle theme (inspect `<html>` for `data-theme` attribute)
- Check contrast ratios with accessibility tools

## Key Dependencies
- **Docusaurus**: `@docusaurus/core`, `@docusaurus/preset-classic` (docs, blog, theme)
- **Styling**: Infima framework (built into preset-classic), no extra CSS frameworks
- **Utilities**: `clsx` for conditional CSS classes
- **MDX**: `@mdx-js/react` for JSX in markdown

## Important Notes
- **Node.js**: Requires ≥20.0 (specified in `package.json` engines)
- **Build output**: `.docusaurus/` and `build/` are generated, excluded from git
- **Theme customization**: Prefer CSS variable overrides in `custom.css` over `yarn swizzle` (which ejects components)
- **Broken links**: Strict mode throws errors—fix immediately before deployment
- **SVG imports**: Use `require('@site/static/img/file.svg').default` for static SVG components
- **Avoid**: Media queries for dark mode in CSS modules (use `[data-theme='dark']` selector instead)
