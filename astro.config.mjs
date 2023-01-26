import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.martinbeaumont.dev',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ],
  markdown: {
    remarkRehype: {
      footnoteLabel: 'À propos',
      footnoteBackLabel: 'Revenir au contenu',
    },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'parts/part.[hash].js',
        },
      },
    },
  },
});
