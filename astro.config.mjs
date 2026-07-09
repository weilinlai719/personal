import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; 
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  site: 'https://weilinlai719.github.io',
  outDir: 'dist',
  base: '/personal',
  integrations: [tailwind()],
output: 'server',
adapter: vercel(),
  build: {
    format: 'directory'
  }
});