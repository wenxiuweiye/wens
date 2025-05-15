import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import readingTime from 'rspress-plugin-reading-time';
import mermaid from 'rspress-plugin-mermaid'

import live2d from './plugin/rspress-plugin-live2d';
import tags from './plugin/rspress-plugin-tags';
import author from './plugin/rspress-plugin-author';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
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
  plugins:[
    tags(),
    readingTime(),
    mermaid(),
    author(),
    live2d({
      models: [
        {
          path: path.join('/IceGirl/IceGirl.model3.json'),
          position: [0, 60],
          scale: 0.08,
        },
        {
          path: path.join('/椿/椿.model3.json'),
          position: [0, 60],
          scale: 0.09,
        },
        {
          path: path.join('/ellot/ellot.model3.json'),
          position: [0, 60],
          scale: 0.12,
        },
      ],
    }),
  ]
});
