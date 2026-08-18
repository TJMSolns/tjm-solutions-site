// Docusaurus TypeScript module declarations.
//
// Without the theme-classic reference, `@theme/*` resolves only to the minimal
// fallback declarations in @docusaurus/module-type-aliases -- where, for example,
// `@theme/Layout`'s Props exposes just `children`. That made every page passing
// `title`/`description` to <Layout> a type error (WQ-046), even though the props
// are real and the build has always accepted them.
//
// This is the setup documented at https://docusaurus.io/docs/typescript-support
/// <reference types="@docusaurus/module-type-aliases" />
/// <reference types="@docusaurus/theme-classic" />
