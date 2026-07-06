export const SITE = {
  name: 'Mise en Scene',
  tagline: 'Interactive technical explainers from your sources.',
  seoTitle: 'Mise en Scene - interactive technical explainers from your sources',
  subtitle: 'Part of the Brigade fleet from Escoffier Labs',
  description:
    'Mise en Scene turns repos, OpenAPI specs, READMEs, incident reports, and architecture notes into self-contained interactive HTML/SVG explainers: audience modes, source-grounded facts, click-through scenes, and a standalone export that always matches the live studio.',
  metaDescription:
    'Turn repos, specs, incident reports, and architecture notes into self-contained interactive HTML/SVG explainers with audience modes and source-grounded facts.',
  url: 'https://mise-en-scene.escoffierlabs.dev',
  image: '/og-card.png',
  install: 'git clone https://github.com/escoffier-labs/mise-en-scene',
  version: 'early spike',
};

export const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'The scene', href: '#the-scene' },
  { label: 'Status', href: '#status' },
  { label: 'Studio', href: 'https://app.mise-en-scene.escoffierlabs.dev' },
];

export const EXTERNAL = {
  github: 'https://github.com/escoffier-labs/mise-en-scene',
  stargazers: 'https://github.com/escoffier-labs/mise-en-scene/stargazers',
  // Live shadcn-styled GitHub stars badge (shieldcn.dev). Two modes, swapped to match the theme toggle.
  starsBadgeDark: 'https://shieldcn.dev/github/stars/escoffier-labs/mise-en-scene.svg?variant=secondary&mode=dark',
  starsBadgeLight: 'https://shieldcn.dev/github/stars/escoffier-labs/mise-en-scene.svg?variant=secondary&mode=light',
  studio: 'https://app.mise-en-scene.escoffierlabs.dev',
  brigade: 'https://brigade.tools',
  cookbook: 'https://escoffierlabs.dev/cookbook',
};
