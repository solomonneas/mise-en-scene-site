# mise-en-scene-site

Astro static site for mise-en-scene.escoffierlabs.dev.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run check && npm run build
```

Output lands in `dist/`.

## Deploy

Deployed on Vercel (project `mise-en-scene-site`, repo root). DNS is an A record
`mise-en-scene` -> `76.76.21.21` (DNS-only) on the escoffierlabs.dev zone.
