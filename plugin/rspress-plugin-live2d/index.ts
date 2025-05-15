import { RspressPlugin } from '@rspress/shared';
import path from 'path';
import {Options} from 'oh-my-live2d'

// 假设 loadOml2d 存在对应的类型定义，这里将其作为类型使用
export default function live2d( live2dProps:  Options): RspressPlugin {
  // 组件路径
const componentPath = path.join(__dirname, 'oh-my-live2d.tsx');
  return {
    // 插件名称
    name: 'plugin-live2d',
    // 全局组件的路径
    globalUIComponents: [componentPath],
    builderConfig: {
        source: {
          define: {
            'process.env.live2dProps': JSON.stringify(live2dProps),
          },
        },
      },
  };
}