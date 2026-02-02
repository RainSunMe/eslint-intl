# ESLint Intl - AI Translation Assistant

> 🌍 Translate ESLint error messages in real-time into your language using AI, breaking down language barriers in code debugging!

[![GitHub stars](https://img.shields.io/github/stars/RainSunMe/eslint-intl?style=social)](https://github.com/RainSunMe/eslint-intl/stargazers)
[![GitHub license](https://img.shields.io/github/license/RainSunMe/eslint-intl)](https://github.com/RainSunMe/eslint-intl/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/RainSunMe/eslint-intl)](https://github.com/RainSunMe/eslint-intl/issues)
[![Version](https://img.shields.io/badge/version-0.1.0-brightgreen)](https://github.com/RainSunMe/eslint-intl/releases)
[![Documentation](https://img.shields.io/badge/docs-online-blue)](https://eslint-intl.vercel.app/)
[![VS Code](https://img.shields.io/badge/VS%20Code-1.85.0+-007ACC?logo=visual-studio-code)](https://code.visualstudio.com/)

## ✨ Key Features

### 🌏 Multi-Language Support

Real-time translation support for **10 major languages**:

- 🇨🇳 Simplified Chinese / 🇹🇼 Traditional Chinese
- 🇰🇷 한국어 / 🇩🇪 Deutsch
- 🇫🇷 Français / 🇪🇸 Español
- 🇷🇺 Русский / 🇵🇹 Português
- 🇮🇹 Italiano / 🇸🇦 العربية

### 💡 Smart Fix Suggestions

Not only translates error messages, but also provides concise and practical fix suggestions to help you resolve issues quickly.

### ⚡ Lightning-Fast Response

- **Dual-layer caching**: Memory cache + persistent storage
- **7-day validity period**: Translate common errors only once
- **Seamless experience**: Display on hover, no waiting

### 🔧 Flexible Configuration

Support for any **OpenAI-compatible API**:

- OpenAI / Azure OpenAI
- Qwen / Zhipu AI / Qianfan
- DeepSeek / Ollama (self-hosted)
- Any OpenAI-format compatible custom API

## 📦 Quick Start

### Prerequisites

> ⚠️ **Important**: This extension requires the [official ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to be installed first.

Ensure ESLint is configured in your project and the VS Code ESLint extension is installed.

### Step 1: Install the Extension

Search for "ESLint Intl" in the VS Code extension marketplace and install it, or click the install button directly.

### Step 2: Configure API

Open VS Code settings (`Ctrl/Cmd + ,`), search for `eslintIntl`:

```json
{
  "eslintIntl.openai.apiKey": "your-api-key",
  "eslintIntl.targetLanguage": "en"
}
```

### Step 3: Start Using

Hover your mouse over any ESLint error to see the translated error message and fix suggestions!

## ⚙️ Configuration Options

| Option                      | Description                 | Default                     |
| --------------------------- | --------------------------- | --------------------------- |
| `eslintIntl.openai.apiKey`  | API Key (**Required**)      | -                           |
| `eslintIntl.openai.baseUrl` | API Base URL                | `https://api.openai.com/v1` |
| `eslintIntl.openai.model`   | Model to use                | `gpt-4o-mini`               |
| `eslintIntl.targetLanguage` | Target translation language | `en`                        |
| `eslintIntl.enabled`        | Enable translation          | `true`                      |
| `eslintIntl.showOriginal`   | Show original message       | `false`                     |

## 🎯 Useful Features

### Command Palette Operations

Press `Ctrl/Cmd + Shift + P` to open the command palette:

- **ESLint Intl: Clear Translation Cache** - Clear translation cache
- **ESLint Intl: Toggle Translation** - Toggle translation on/off
- **ESLint Intl: Show Output Log** - View debug logs

## 🔌 API Configuration Examples

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
<summary><b>Qwen</b></summary>

```json
{
  "eslintIntl.openai.baseUrl": "https://dashscope.aliyuncs.com/compatible-mode/v1",
  "eslintIntl.openai.apiKey": "sk-...",
  "eslintIntl.openai.model": "qwen-turbo"
}
```

</details>

<details>
<summary><b>Zhipu AI</b></summary>

```json
{
  "eslintIntl.openai.baseUrl": "https://open.bigmodel.cn/api/paas/v4",
  "eslintIntl.openai.apiKey": "...",
  "eslintIntl.openai.model": "glm-4-flash"
}
```

</details>

<details>
<summary><b>Ollama (Self-hosted)</b></summary>

```json
{
  "eslintIntl.openai.baseUrl": "http://localhost:11434/v1",
  "eslintIntl.openai.apiKey": "ollama",
  "eslintIntl.openai.model": "qwen2.5:7b"
}
```

</details>

## 📚 More Resources

- 📖 [Full Documentation](https://eslint-intl.vercel.app/) - Detailed usage guide and configuration instructions
- 🐛 [Report Issues](https://github.com/RainSunMe/eslint-intl/issues) - Report bugs or suggest new features
- 💬 [Join Discussions](https://github.com/RainSunMe/eslint-intl/discussions) - Share experiences with the community

## 🤝 Contributing

Contributions are welcome! Feel free to contribute code, report issues, or make suggestions. Check out our [GitHub repository](https://github.com/RainSunMe/eslint-intl) for more.

## 📄 License

This project is open-sourced under the [MIT](LICENSE) license.

---

**Enjoy coding without language barriers!** 💻✨
