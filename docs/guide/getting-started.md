# 快速开始

欢迎使用 ESLint Intl！本指南将帮助你快速开始使用。

## 什么是 ESLint Intl？

ESLint Intl 是一个 VS Code 扩展，使用 AI 技术将 ESLint 错误消息实时翻译成你需要的语言。只需悬停在 ESLint 错误上，就能立即看到翻译和修复建议。

## 主要特性

- 🌍 **支持 10 种语言** - 轻松选择你喜欢的语言
- 💡 **智能修复建议** - 不仅翻译错误，还提供修复方案
- 💾 **智能缓存** - 避免重复请求，提升性能
- 🔧 **灵活配置** - 支持任何 OpenAI 兼容的 API
- ⚡ **即时响应** - 无需等待，立即显示翻译

## 安装

### 通过 VS Code Marketplace

1. 打开 VS Code 扩展市场
2. 搜索 "ESLint Intl"
3. 点击"安装"按钮

### 手动安装

1. 从 [GitHub Releases](https://github.com) 下载 `.vsix` 文件
2. 在 VS Code 中按 `Ctrl+Shift+X` (Windows/Linux) 或 `Cmd+Shift+X` (Mac) 打开扩展面板
3. 点击右上角的 `...` 菜单，选择"从 VSIX 安装"
4. 选择下载的文件

## 初始配置

### 步骤 1: 设置 API Key

1. 打开 VS Code 设置 (`Ctrl+,`)
2. 搜索 "ESLint Intl"
3. 配置以下项目：
   - **API Key**: 你的 OpenAI 兼容 API 的密钥
   - **Base URL**: API 的基础 URL（可选，默认为 OpenAI）
   - **Model**: 使用的模型名称（可选）

### 步骤 2: 选择目标语言

在 VS Code 设置中找到 `eslintIntl.targetLanguage`，选择你想要的语言：

- 简体中文 (zh-CN)
- 繁体中文 (zh-TW)
- 한국어 (ko)
- Deutsch (de)
- Français (fr)
- Español (es)
- Русский (ru)
- Português (pt)
- Italiano (it)
- العربية (ar)

### 步骤 3: 启用扩展

确保 `eslintIntl.enabled` 设置为 `true`（默认启用）

## 使用

1. 打开任何有 ESLint 错误的 JavaScript/TypeScript 文件
2. 将鼠标悬停在红色波浪线的 ESLint 错误上
3. 在悬停提示中查看：
   - ✅ 翻译后的错误消息
   - 💡 修复建议
   - 🔗 原始错误规则链接

## 常用命令

按 `Ctrl+Shift+P` (或 `Cmd+Shift+P` on Mac) 打开命令面板，然后输入：

- **ESLint Intl: Clear Translation Cache** - 清除所有缓存的翻译
- **ESLint Intl: Toggle Translation** - 快速切换翻译功能
- **ESLint Intl: Show Output Log** - 显示调试日志

## 示例

### 示例代码

```javascript
const x = 1;
// ESLint: 'x' is assigned a value but never used. (no-unused-vars)
```

### 翻译结果 (zh-CN)

```
变量 'x' 已被赋值但从未使用。

💡 修复建议：删除未使用的变量或将其用于计算
```

## 下一步

- 📖 了解更多 [配置项说明](/guide/configuration)
- 🌐 查看 [支持的语言](/guide/languages)
- ❓ 查看 [常见问题](/guide/faq)
- 🚀 了解 [开发指南](/guide/development)

## 需要帮助？

- 📱 检查 [常见问题](/guide/faq)
- 🐛 [提交 Issue](https://github.com)
- 💬 [讨论](https://github.com)

---

准备好了吗？让我们开始使用 ESLint Intl，让你的编码体验更加流畅！
