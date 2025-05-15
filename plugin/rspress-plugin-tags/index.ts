import path from 'node:path';

import {
  PresetConfigMutator,
  RemarkInsertComponentPluginFactory,
  type WithDefaultLocale,
} from 'rspress-plugin-devkit';

import type { RspressPlugin } from '@rspress/shared';

export default function rspressPluginTags(): RspressPlugin {


  const remarkInsertTags = new RemarkInsertComponentPluginFactory({
    components: [
      {
        position: 'after-first-heading',
        componentPath: path.join(__dirname, './Tags.tsx'),
        propsProvider: () => ({
          
        }),
      },
    ],
  });

  return {
    name: 'rspress-plugin-tags',
    config(config) {
      return new PresetConfigMutator(config).disableMdxRs().toConfig();
    },
    markdown: {
      remarkPlugins: [remarkInsertTags.remarkPlugin],
      globalComponents: remarkInsertTags.mdxComponents,
    },
    builderConfig: remarkInsertTags.builderConfig,
  };
}