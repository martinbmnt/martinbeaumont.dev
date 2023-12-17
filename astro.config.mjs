import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.martinbeaumont.dev',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  integrations: [
    sitemap()
  ],
  markdown: {
    remarkRehype: {
      footnoteLabel: 'À propos',
      footnoteBackLabel: 'Revenir au contenu',
    },
  },
});
