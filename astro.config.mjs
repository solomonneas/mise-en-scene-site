import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mise-en-scene.escoffierlabs.dev',
  output: 'static',
  trailingSlash: 'never',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
