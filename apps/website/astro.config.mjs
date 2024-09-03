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
    shikiConfig: {
      theme: 'night-owl',
      wrap: false,
    },
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
  ]
});
