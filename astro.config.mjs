import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; 
import vercel from '@astrojs/vercel';

export default defineConfig({

  integrations: [tailwind()],
  output: 'server', // 👑 保持動態伺服器模式
  adapter: vercel(), // 👑 保持 Vercel 適配器

  build: {
    format: 'directory'
  }
});