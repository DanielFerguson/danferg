import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://danferg.com",
  integrations: [
    react(),
    tailwind(),
    sitemap({
      customPages: [
        "https://danferg.com",
        "https://danferg.com/projects",
        "https://danferg.com/projects/guardian",
        "https://danferg.com/projects/helping-group",
        "https://danferg.com/projects/land-index",
        "https://danferg.com/projects/mates-motivate",
        "https://danferg.com/projects/observer",
        "https://danferg.com/projects/swin-lead",
        "https://danferg.com/projects/yfocus",
        "https://danferg.com/projects/airproxy",
        "https://danferg.com/newsletters",
        "https://danferg.com/newsletters/2022-05-09-concept-to-production",
        "https://danferg.com/newsletters/2022-05-16-lets-start-the-week-off-right",
        "https://danferg.com/newsletters/2022-05-23-ideas-ideas-ideas",
        "https://danferg.com/newsletters/2022-05-30-observer-mates-motivate-and-a-bit-of-burnout",
        "https://danferg.com/newsletters/2022-12-09-better-late-than-never",
        "https://danferg.com/articles",
        "https://danferg.com/articles/a-better-brighter-cleaner-future",
        "https://danferg.com/articles/burnout-lets-talk-about-it",
        "https://danferg.com/articles/welcome-to-website-v3",
        "https://danferg.com/articles/whats-next",
        "https://danferg.com/articles/you-are-the-product",
      ],
    }),
    mdx(),
    robotsTxt(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  trailingSlash: "never",
  output: "server",
  adapter: vercel(),
});
