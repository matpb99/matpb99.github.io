// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://neonmint.efeele.dev",
  integrations: [preact(), icon(),],

  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ['**/*.mp4'],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },
});