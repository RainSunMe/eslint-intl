# ESLint Intl 文档

这是 ESLint Intl 项目的官方文档网站，使用 VitePress 构建。

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

启动开发服务器，支持热更新：

```bash
npm run docs:dev
```

然后打开 `http://localhost:5173` 查看文档。

### 构建生产版本

```bash
npm run docs:build
```

构建后的文件将在 `docs/.vitepress/dist` 目录中。

### 预览构建结果

```bash
npm run docs:preview
```

## 文档结构

```
docs/
├── .vitepress/
│   ├── config.ts           # VitePress 配置
│   └── theme/
│       ├── index.ts        # 主题配置
│       └── style.css       # 自定义样式
├── index.md                # 首页
└── guide/
    ├── getting-started.md  # 快速开始
    ├── installation.md     # 安装指南
    ├── configuration.md    # 配置指南
    ├── usage.md            # 基本用法
    ├── commands.md         # 命令参考
    ├── languages.md        # 语言支持
    ├── development.md      # 开发指南
    └── faq.md              # 常见问题
```

## 功能特性

- ✅ **多语言支持**: 简体中文、英文、繁体中文
- ✅ **响应式设计**: 适配所有设备
- ✅ **深色模式**: 自动适配系统主题
- ✅ **搜索功能**: 快速查找内容
- ✅ **代码高亮**: 支持多种语言
- ✅ **自定义主题**: 统一的视觉风格

## 编辑文档

### 添加新页面

1. 在 `docs/guide/` 或 `docs/` 中创建新的 `.md` 文件
2. 在 `docs/.vitepress/config.ts` 中更新导航和侧边栏配置
3. 使用 Markdown 编写内容

### 编辑现有页面

直接编辑相应的 `.md` 文件，保存后会自动热更新。

### Markdown 语法

支持标准 Markdown 和以下扩展：

```markdown
# 标题

## 代码块

\`\`\`typescript
const x = 1;
\`\`\`

## 自定义容器

::: info
这是一条信息
:::

::: warning
这是一条警告
:::

::: danger
这是一条危险提示
:::

## 链接

[链接文本](/guide/configuration)
```

## 部署

### 部署到 Vercel

```bash
# 连接 GitHub 账户
# 选择仓库
# 构建命令: npm run docs:build
# 输出目录: docs/.vitepress/dist
```

### 部署到 GitHub Pages

1. 在 `docs/.vitepress/config.ts` 中设置 `base` 为仓库名
2. 创建 `.github/workflows/deploy.yml`
3. 配置自动部署工作流

### 部署到其他平台

任何支持 Node.js 的平台都可以部署，关键是运行:

```bash
npm install
npm run docs:build
# 将 docs/.vitepress/dist 目录部署到服务器
```

## 配置说明

### VitePress 配置 (`config.ts`)

```typescript
export default {
  title: 'ESLint Intl',           // 网站标题
  description: '...',              // 网站描述

  locales: {                        // 多语言配置
    root: { ... },
    'en-US': { ... },
    'zh-TW': { ... }
  },

  themeConfig: {                    // 主题配置
    nav: [...],                     // 导航栏
    sidebar: {...},                 // 侧边栏
    socialLinks: [...]              // 社交链接
  }
}
```

### 主题配置

编辑 `docs/.vitepress/theme/index.ts` 来自定义主题。

### 样式自定义

编辑 `docs/.vitepress/theme/style.css` 来自定义样式。

## 常用命令

| 命令                   | 说明           |
| ---------------------- | -------------- |
| `npm run docs:dev`     | 启动开发服务器 |
| `npm run docs:build`   | 构建生产版本   |
| `npm run docs:preview` | 预览构建结果   |

## 搜索功能

VitePress 默认提供本地搜索。搜索索引在构建时自动生成。

## 反馈和贡献

- 📖 [查看在线文档](https://docs.example.com)
- 🐛 [提交 Issue](https://github.com/RainSunMe/eslint-intl/issues)
- 🤝 欢迎贡献和改进建议

## 许可证

MIT
