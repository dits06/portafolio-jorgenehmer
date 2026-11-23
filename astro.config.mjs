// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://jorgenehmer.com',
  integrations: [mdx()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'TikTok Sans',
      cssVariable: '--font-tiktok-sans',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
