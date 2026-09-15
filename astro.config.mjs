import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },
    i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
    routing: {
      // false = 預設語言（中文）不加前綴：/about
      // 英文才加前綴：/en/about
      prefixDefaultLocale: false,
    },
  }
});