import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://danferg.com',
  integrations: [tailwind(), image(), sitemap(), mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  }
});