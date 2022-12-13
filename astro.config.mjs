import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://danferg.com",
  integrations: [react(), tailwind(), image(), sitemap(), mdx(), robotsTxt()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  trailingSlash: "never",
  output: "server",
  adapter: vercel()
});