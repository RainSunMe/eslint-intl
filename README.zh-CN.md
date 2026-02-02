# ESLint Intl - AI 翻译助手

> 🌍 使用 AI 将 ESLint 错误消息实时翻译成你的母语，让代码错误不再成为语言障碍！

[![GitHub stars](https://img.shields.io/github/stars/RainSunMe/eslint-intl?style=social)](https://github.com/RainSunMe/eslint-intl/stargazers)
[![GitHub license](https://img.shields.io/github/license/RainSunMe/eslint-intl)](https://github.com/RainSunMe/eslint-intl/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/RainSunMe/eslint-intl)](https://github.com/RainSunMe/eslint-intl/issues)
[![Version](https://img.shields.io/badge/version-0.1.0-brightgreen)](https://github.com/RainSunMe/eslint-intl/releases)
[![Documentation](https://img.shields.io/badge/docs-online-blue)](https://eslint-intl.vercel.app/)
[![VS Code](https://img.shields.io/badge/VS%20Code-1.85.0+-007ACC?logo=visual-studio-code)](https://code.visualstudio.com/)

## ✨ 主要特性

### 🌏 多语言支持

支持 **10 种主流语言**的实时翻译：

- 🇨🇳 简体中文 / 繁體中文
- 🇰🇷 한국어 / 🇩🇪 Deutsch
- 🇫🇷 Français / 🇪🇸 Español
- 🇷🇺 Русский / 🇵🇹 Português
- 🇮🇹 Italiano / 🇸🇦 العربية

### 💡 智能修复建议

不仅翻译错误消息，还提供简短、实用的修复建议，帮助你快速解决问题。

### ⚡ 极速响应

- **双层缓存机制**：内存缓存 + 持久化存储
- **7 天有效期**：常见错误只翻译一次
- **无感体验**：悬停即显示，无需等待

### 🔧 灵活配置

支持任何 **OpenAI 兼容的 API**：

- OpenAI / Azure OpenAI
- 通义千问 / 智谱 AI / 文心一言
- DeepSeek / Ollama（本地部署）
- 任何兼容 OpenAI 格式的自定义 API

## 📦 快速开始

### 前置要求

> ⚠️ **重要**: 本扩展需要先安装 [ESLint 官方扩展](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

确保你的项目中已经配置了 ESLint，并且安装了 VS Code 的 ESLint 扩展。

### 第一步：安装扩展

在 VS Code 扩展市场搜索 "ESLint Intl" 并安装，或直接点击安装按钮。

### 第二步：配置 API

打开 VS Code 设置（`Ctrl/Cmd + ,`），搜索 `eslintIntl`：

```json
{
  "eslintIntl.openai.apiKey": "你的-API-密钥",
  "eslintIntl.targetLanguage": "zh-CN"
}
```

### 第三步：开始使用

将鼠标悬停在任何 ESLint 错误上，即可看到翻译后的错误消息和修复建议！

## ⚙️ 配置选项

| 配置项                      | 说明                 | 默认值                      |
| --------------------------- | -------------------- | --------------------------- |
| `eslintIntl.openai.apiKey`  | API 密钥（**必填**） | -                           |
| `eslintIntl.openai.baseUrl` | API 基础地址         | `https://api.openai.com/v1` |
| `eslintIntl.openai.model`   | 使用的模型           | `gpt-4o-mini`               |
| `eslintIntl.targetLanguage` | 目标翻译语言         | `zh-CN`                     |
| `eslintIntl.enabled`        | 是否启用翻译         | `true`                      |
| `eslintIntl.showOriginal`   | 同时显示原文         | `false`                     |

## 🎯 实用功能

### 命令面板操作

按 `Ctrl/Cmd + Shift + P` 打开命令面板：

- **ESLint Intl: Clear Translation Cache** - 清除翻译缓存
- **ESLint Intl: Toggle Translation** - 快速开关翻译功能
- **ESLint Intl: Show Output Log** - 查看调试日志

## 🔌 API 配置示例

<details>
<summary><b>OpenAI</b></summary>

```json
{
  "eslintIntl.openai.baseUrl": "https://api.openai.com/v1",
  "eslintIntl.openai.apiKey": "sk-...",
  "eslintIntl.openai.model": "gpt-4o-mini"
}
```

</details>

<details>
<summary><b>通义千问</b></summary>

```json
{
  "eslintIntl.openai.baseUrl": "https://dashscope.aliyuncs.com/compatible-mode/v1",
  "eslintIntl.openai.apiKey": "sk-...",
  "eslintIntl.openai.model": "qwen-turbo"
}
```

</details>

<details>
<summary><b>智谱 AI</b></summary>

```json
{
  "eslintIntl.openai.baseUrl": "https://open.bigmodel.cn/api/paas/v4",
  "eslintIntl.openai.apiKey": "...",
  "eslintIntl.openai.model": "glm-4-flash"
}
```

</details>

<details>
<summary><b>Ollama (本地)</b></summary>

```json
{
  "eslintIntl.openai.baseUrl": "http://localhost:11434/v1",
  "eslintIntl.openai.apiKey": "ollama",
  "eslintIntl.openai.model": "qwen2.5:7b"
}
```

</details>

## 📚 更多资源

- 📖 [完整文档](https://eslint-intl.vercel.app/) - 详细的使用指南和配置说明
- 🐛 [报告问题](https://github.com/RainSunMe/eslint-intl/issues) - 反馈 Bug 或建议新功能
- 💬 [参与讨论](https://github.com/RainSunMe/eslint-intl/discussions) - 与社区交流使用经验

## 🤝 贡献

欢迎贡献代码、报告问题或提出建议！查看我们的 [GitHub 仓库](https://github.com/RainSunMe/eslint-intl) 了解更多。

## 📄 开源协议

本项目采用 [MIT](LICENSE) 协议开源。

---

**享受编码，不再为语言烦恼！** 💻✨
