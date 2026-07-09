import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; 
// https://astro.build/config
export default defineConfig({
  site: 'https://weilinlai719.github.io',
  outDir: 'dist',
  base: '/personal',
  integrations: [tailwind()],
output: 'server',
  build: {
    format: 'directory'
  }
});