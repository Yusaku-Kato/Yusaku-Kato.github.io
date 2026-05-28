import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://Yusaku-Kato.github.io',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});