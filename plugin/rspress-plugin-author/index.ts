import path from 'node:path';

import { RemarkInsertComponentPluginFactory } from 'rspress-plugin-devkit';

import type { RspressPlugin } from '@rspress/core';

export default function rspressPluginAuthor(): RspressPlugin {

  const remarkInsertAuthor = new RemarkInsertComponentPluginFactory({
    components: [
      {
        position: 'after-first-heading',
        componentPath: path.join(__dirname, './Author.tsx'),
        propsProvider: () => ({
          
        }),
      },
    ],
  });

  return {
    name: 'rspress-plugin-author',
    markdown: {
      remarkPlugins: [remarkInsertAuthor.remarkPlugin],
      globalComponents: remarkInsertAuthor.mdxComponents,
    },
    builderConfig: remarkInsertAuthor.builderConfig,
  };
}