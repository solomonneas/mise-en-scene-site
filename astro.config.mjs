import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mise-en-scene.escoffierlabs.dev',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
