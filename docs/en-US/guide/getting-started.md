# Getting Started

Welcome to ESLint Intl! This guide will help you get started quickly.

## What is ESLint Intl?

ESLint Intl is a VS Code extension that uses AI to translate ESLint error messages into your preferred language in real-time. Simply hover over an ESLint error and instantly see the translation with fix suggestions.

## Key Features

- 🌍 **Support for 10 Languages** - Choose from your preferred language easily
- 💡 **Smart Fix Suggestions** - Not only translates errors but also provides solutions
- 💾 **Smart Cache** - Avoids duplicate requests to improve performance
- 🔧 **Flexible Configuration** - Support for any OpenAI-compatible API
- ⚡ **Instant Response** - No waiting, translations appear immediately
- 🎨 **Beautiful UI** - Native VS Code styling integration

## Installation

### Via VS Code Marketplace

1. Open VS Code Extensions Marketplace
2. Search for "ESLint Intl"
3. Click the "Install" button

### Manual Installation

1. Download the latest `.vsix` file from [GitHub Releases](https://github.com/RainSunMe/eslint-intl/releases)
2. Open VS Code and press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
3. Click the `...` menu in the top right and select "Install from VSIX..."
4. Select the downloaded file

## Initial Configuration

### Step 1: Configure API Key

1. Open VS Code Settings (`Ctrl+,`)
2. Search for "ESLint Intl"
3. Configure the following items:
   - **API Key**: Your OpenAI-compatible API key
   - **Base URL**: API base URL (optional, default is OpenAI)
   - **Model**: Model name to use (optional)

### Step 2: Choose Target Language

In VS Code Settings, find `eslintIntl.targetLanguage` and select your preferred language:

- Simplified Chinese (zh-CN)
- Traditional Chinese (zh-TW)
- Korean (ko)
- German (de)
- French (fr)
- Spanish (es)
- Russian (ru)
- Portuguese (pt)
- Italian (it)
- Arabic (ar)

### Step 3: Enable the Extension

Make sure `eslintIntl.enabled` is set to `true` (enabled by default)

## Usage

1. Open any JavaScript/TypeScript file with ESLint errors
2. Hover your mouse over a red squiggly line indicating an ESLint error
3. In the hover tooltip, you'll see:
   - ✅ Translated error message
   - 💡 Fix suggestion
   - 🔗 Original error rule link

## Common Commands

Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette, then type:

- **ESLint Intl: Clear Translation Cache** - Clear all cached translations
- **ESLint Intl: Toggle Translation** - Quickly toggle translation feature on/off
- **ESLint Intl: Show Output Log** - Display debug logs

## Example

### Example Code

```javascript
const x = 1;
// ESLint: 'x' is assigned a value but never used. (no-unused-vars)
```

### Translation Result (English)

```
Variable 'x' is assigned a value but never used.

💡 Fix Suggestion: Delete the unused variable or use it in your code
```

## Next Steps

- 📖 Learn more about [Configuration](/en-US/guide/configuration)
- 🌐 View [Supported Languages](/en-US/guide/languages)
- ❓ Check [FAQ](/en-US/guide/faq)
- 🚀 Read [Developer Guide](/en-US/guide/development)

## Need Help?

- 📱 Check [FAQ](/en-US/guide/faq)
- 🐛 [Submit an Issue](https://github.com/RainSunMe/eslint-intl/issues)
- 💬 [Join the Discussion](https://github.com/RainSunMe/eslint-intl/discussions)

---

Ready to use ESLint Intl? Let's get started and make your coding experience smoother!
