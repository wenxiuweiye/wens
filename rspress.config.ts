import * as path from 'node:path';
import type { UserConfig } from '@rspress/core';
import { defineConfig } from '@rspress/core';
import readingTime from 'rspress-plugin-reading-time';
import mermaid from 'rspress-plugin-mermaid';
import { pluginLess } from '@rsbuild/plugin-less';

import live2d from './plugin/rspress-plugin-live2d';

import author from './plugin/rspress-plugin-author';

export default defineConfig({

  root: 'docs',
  title: 'wens|文思泉涌',
  icon: '/wens-icon.svg',
  logo: {
    light: '/wens-light-logo.svg',
    dark: '/wens-dark-logo.svg',
  },
  globalStyles: path.join(__dirname, 'styles/index.css'),
  themeConfig: {
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    lastUpdated: true,
    hideNavbar: 'auto',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
  builderConfig: {
    plugins: [pluginLess()], 
    "performance": {
      "buildCache": false
    },
    "dev": {
      "hmr": true,
      "liveReload": true,
    },

  },
  plugins: [
    readingTime(),
    mermaid(),
    author(),
    live2d({
      models: [
        {
          path: path.join('/椿/椿.model3.json'),
          position: [0, 60],
          scale: 0.09,
        },

      ],
    }),
  ],
"ssg" : false
} as UserConfig);
