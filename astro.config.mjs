import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    tailwind({
      // 💡 顯式指定 Tailwind 搜尋 HTML/Astro 檔案的路徑，消除 Warning
      config: {
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
      },
    }),
  ],
});