# wens 知识库

基于 Rspress 构建的现代化文档网站，集成 Live2D 模型交互功能。

## ✨ 特性

- 📚 多主题文档管理（技术/生活/创作）
- 🎮 Live2D 模型交互支持
- 🏷️ 自动化标签系统
- 📊 Mermaid 图表支持
- ⏱️ 阅读时间统计
- 🎨 深色/浅色主题切换

## 🚀 快速开始

### 前置要求
- Node.js >= 16.14
- pnpm >= 7.x

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview

```

## 📂 项目结构
```plaintext
wens/
├── docs/                   # 文档内容
│   ├── creation/          # 创作相关文档
│   ├── life/              # 生活分类文档
│   └── tech/              # 技术文档
├── plugin/                # 自定义插件
│   ├── rspress-plugin-live2d/    # Live2D 集成
│   ├── rspress-plugin-tags/      # 标签系统
│   └── rspress-plugin-author/    # 作者信息组件
├── public/                 # 静态资源
│   └── [模型目录]/         # Live2D 模型文件
├── rspress.config.ts       # 主配置
└── package.json            # 依赖配置
```