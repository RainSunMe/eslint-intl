# Configuration Guide

All configuration options are prefixed with `eslintIntl` in VS Code settings.

## Opening Settings

1. Press `Ctrl+,` (Windows/Linux) or `Cmd+,` (Mac)
2. Search for "eslintIntl"

Or edit `settings.json` directly:

```json
{
  "eslintIntl.openai.apiKey": "your-api-key",
  "eslintIntl.targetLanguage": "en",
  "eslintIntl.enabled": true
}
```

## Core Configuration

### API Configuration

#### `eslintIntl.openai.apiKey`

- **Type**: `string`
- **Default**: `""`
- **Required**: ✅ Yes
- **Description**: OpenAI-compatible API key

::: warning
Never commit API Keys to version control. VS Code stores it securely locally.
:::

#### `eslintIntl.openai.baseUrl`

- **Type**: `string`
- **Default**: `"https://api.openai.com/v1"`
- **Required**: ❌ No
- **Description**: API base URL

Use when connecting to a custom API service.

#### `eslintIntl.openai.model`

- **Type**: `string`
- **Default**: `"gpt-4o-mini"`
- **Required**: ❌ No
- **Description**: Model name to use

## Feature Configuration

### `eslintIntl.enabled`

- **Type**: `boolean`
- **Default**: `true`
- **Description**: Enable/disable ESLint Intl extension

You can also quickly toggle with: `ESLint Intl: Toggle Translation`

### `eslintIntl.targetLanguage`

- **Type**: `string`
- **Default**: `"zh-CN"`
- **Description**: Target translation language

Supported languages: zh-CN, zh-TW, ko, de, fr, es, ru, pt, it, ar

### `eslintIntl.showOriginal`

- **Type**: `boolean`
- **Default**: `false`
- **Description**: Show original error message below translation

## Cache Configuration

ESLint Intl uses a two-layer cache:

1. **Memory cache** - Fast lookup within current session
2. **Persistent cache** - Saved across sessions, 7-day expiration

### Clear Cache

From Command Palette (`Ctrl+Shift+P`):

```
ESLint Intl: Clear Translation Cache
```

## Common Configuration Examples

### Quick Start (Recommended)

```json
{
  "eslintIntl.openai.apiKey": "your-api-key",
  "eslintIntl.targetLanguage": "en",
  "eslintIntl.enabled": true
}
```

### Using GPT-4

```json
{
  "eslintIntl.openai.apiKey": "sk-...",
  "eslintIntl.openai.model": "gpt-4-turbo",
  "eslintIntl.targetLanguage": "en"
}
```

### Using Local Ollama

```json
{
  "eslintIntl.openai.baseUrl": "http://localhost:11434/v1",
  "eslintIntl.openai.model": "mixtral:8x7b",
  "eslintIntl.targetLanguage": "en"
}
```

## Troubleshooting

### "Invalid API Key" Error

- Check if API Key is correctly copied
- Confirm API Key hasn't expired
- Verify Base URL is correct

### "Cannot Connect to API" Error

- Check network connection
- Verify Base URL is accessible
- Check firewall or proxy settings

### Translation Timeout

- Adjust API timeout settings
- Try using a faster model
- Check API service load

## Need Help?

- 📖 Check [FAQ](/en-US/guide/faq)
- 🐛 [Submit an Issue](https://github.com)
- 📧 Contact support
