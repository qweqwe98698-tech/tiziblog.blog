// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * The canonical origin of the deployed site.
 */
const DEFAULT_SITE = 'https://tiziblog.blog';

export default defineConfig({
  site: process.env.SITE_URL ?? DEFAULT_SITE,

  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },

  compressHTML: true,

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
