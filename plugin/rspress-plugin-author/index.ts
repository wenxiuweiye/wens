import path from 'node:path';

import {
  PresetConfigMutator,
  RemarkInsertComponentPluginFactory,
} from 'rspress-plugin-devkit';

import type { RspressPlugin } from '@rspress/shared';

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
    config(config) {
      return new PresetConfigMutator(config).disableMdxRs().toConfig();
    },
    markdown: {
      remarkPlugins: [remarkInsertAuthor.remarkPlugin],
      globalComponents: remarkInsertAuthor.mdxComponents,
    },
    builderConfig: remarkInsertAuthor.builderConfig,
  };
}