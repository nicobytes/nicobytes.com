import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compressor from 'astro-compressor';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import rehypeExternalLinks from 'rehype-external-links';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://nicobytes.com/',
  image: {
    remotePatterns: [
      {
        protocol: 'https',
      },
    ],
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer']
        }
      ],
    ]
  },
  integrations: [
    mdx({
      shikiConfig: {
        theme: 'night-owl',
        wrap: false,
      },
      gfm: false,
    }),
    compressor({
      gzip: true,
      brotli: true,
    }),
    sitemap(),
    tailwind(),
    robotsTxt(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  redirects: {
    '/discord': 'https://discord.gg/6tHdeJPB4x',
  },
});
