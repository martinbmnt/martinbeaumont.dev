import { defineConfig, sharpImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.martinbeaumont.dev',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  image: {
    service: sharpImageService(),
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
