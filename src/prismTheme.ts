// WQ-056: prism-react-renderer's stock `github` and `dracula` themes both ship token colors
// that fail WCAG2AA 4.5:1 contrast against this site's code-block background. Rather than swizzle
// the theme (POL-001), override just the failing token colors here and pass these objects to
// `prism.theme`/`prism.darkTheme` in docusaurus.config.ts.
//
// Backgrounds: light `#f6f8fa` (github theme's own `plain.backgroundColor`), dark `#282a36`
// (dracula theme's own `plain.backgroundColor`). Every color below was verified via the WCAG
// relative-luminance formula against its theme's background, target >= 4.5:1, hue preserved
// (only lightness adjusted) so the syntax highlighting still reads as the same palette.
//
// | Theme    | Token types                                                          | Before    | Ratio | After     | Ratio |
// |----------|-----------------------------------------------------------------------|-----------|-------|-----------|-------|
// | github   | comment, prolog, doctype, cdata                                      | `#999988` | 2.71  | `#727262` | 4.59  |
// | github   | string, attr-value                                                   | `#e3116c` | 4.32  | `#dc1069` | 4.56  |
// | github   | entity, url, symbol, number, boolean, variable, constant, property,  | `#36acaa` | 2.58  | `#277d7c` | 4.58  |
// |          | regex, inserted                                                      |           |       |           |       |
// | github   | atrule, keyword, attr-name, selector                                 | `#00a4db` | 2.69  | `#007aa3` | 4.57  |
// | github   | function, deleted, tag                                               | `#d73a49` | 4.30  | `#d53241` | 4.52  |
// | dracula  | comment                                                              | `#6272a4` | 3.03  | `#8490b8` | 4.52  |
//
// The `function, deleted, tag` failure (github) was not in WQ-056's original 4-token diagnosis;
// found while computing the fix for the other four, since it shares the same class of defect.
// All 6 confirmed via `npx pa11y` against `/tony` and `/about` in forced light theme, and against
// the 8 pages WQ-056 originally named, before and after this change.

import { themes as prismThemes } from 'prism-react-renderer';
import type { PrismTheme } from 'prism-react-renderer';

function withColorOverrides(theme: PrismTheme, overrides: Record<string, string>): PrismTheme {
  return {
    ...theme,
    styles: theme.styles.map((entry) => {
      const currentColor = entry.style.color;
      if (typeof currentColor === 'string' && overrides[currentColor]) {
        return { ...entry, style: { ...entry.style, color: overrides[currentColor] } };
      }
      return entry;
    }),
  };
}

export const lightCodeTheme = withColorOverrides(prismThemes.github, {
  '#999988': '#727262',
  '#e3116c': '#dc1069',
  '#36acaa': '#277d7c',
  '#00a4db': '#007aa3',
  '#d73a49': '#d53241',
});

export const darkCodeTheme = withColorOverrides(prismThemes.dracula, {
  'rgb(98, 114, 164)': '#8490b8',
});
