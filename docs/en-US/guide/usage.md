# Basic Usage

## Quick Start

### Using Translation

1. Open any JavaScript or TypeScript file
2. Ensure the file has ESLint errors (red squiggly lines)
3. Hover over an ESLint error
4. View the translation and fix suggestion in the tooltip

### Example

**Code:**

```javascript
const unused = 42;
console.log("Hello");
```

**ESLint Error:**

```
'unused' is assigned a value but never used. (no-unused-vars)
```

**ESLint Intl Translation:**

```
Variable 'unused' is assigned a value but never used.

💡 Fix Suggestion: Delete the unused variable or use it in your code
```

## Switching Languages

### Method 1: Via Settings

1. Open VS Code Settings (`Ctrl+,`)
2. Search `eslintIntl.targetLanguage`
3. Select your preferred language

### Method 2: Via Command Palette

Open Command Palette (`Ctrl+Shift+P`) and run:

```
ESLint Intl: Toggle Translation
```

## Enable/Disable Translation

### Method 1: Via Settings

1. Open Settings (`Ctrl+,`)
2. Search `eslintIntl.enabled`
3. Check or uncheck

### Method 2: Via Command

Open Command Palette (`Ctrl+Shift+P`) and run:

```
ESLint Intl: Toggle Translation
```

## Show Original Error

Sometimes you may want to see the original English error message. Enable this feature:

1. Open Settings (`Ctrl+,`)
2. Search `eslintIntl.showOriginal`
3. Check to enable

Now the hover tooltip will show both translation and original error.

## Using Different APIs

### Switch API Provider

Modify the following settings to use different APIs:

```json
{
  "eslintIntl.openai.baseUrl": "https://your-api.com/v1",
  "eslintIntl.openai.apiKey": "your-key",
  "eslintIntl.openai.model": "your-model"
}
```

### Supported API Providers

- **OpenAI**: `https://api.openai.com/v1`
- **Azure OpenAI**: `https://{resource}.openai.azure.com/v1`
- **Ollama** (local): `http://localhost:11434/v1`
- **Custom Service**: Any OpenAI-compatible service

## File Type Support

ESLint Intl supports all file types that ESLint can check:

- ✅ `.js` - JavaScript
- ✅ `.jsx` - React JSX
- ✅ `.ts` - TypeScript
- ✅ `.tsx` - TypeScript JSX
- ✅ `.json` - JSON (if ESLint configured)
- ✅ `.vue` - Vue (if ESLint configured)
- ✅ `.html` - HTML (if ESLint configured)

## Performance Tips

### Enable Caching

Caching is enabled by default. Cached translations expire in 7 days.

### Force Fresh Translation

To always get the latest translation, clear cache:

```
ESLint Intl: Clear Translation Cache
```

### Batch Translation

Hover over multiple errors to fill the cache; subsequent same errors will be faster.

## Debugging

### View Output Log

Open Command Palette (`Ctrl+Shift+P`) and run:

```
ESLint Intl: Show Output Log
```

### Check Cache Status

Cache status information is displayed in the output log.

## Troubleshooting

### Translation Not Showing

1. Ensure `eslintIntl.enabled` is `true`
2. Check that file truly has ESLint errors
3. Check output log for error messages
4. Restart VS Code

### API Connection Error

1. Check if API Key is correct
2. Check network connection
3. Verify Base URL is correct
4. See output log for detailed errors

### Poor Translation Quality

1. Try switching models: `eslintIntl.openai.model`
2. Clear cache to get fresh translations
3. Check if API service is working properly

## More Help

- 📖 Check [FAQ](/en-US/guide/faq)
- 🔧 See [Configuration Guide](/en-US/guide/configuration)
- 🐛 [Submit an Issue](https://github.com/RainSunMe/eslint-intl/issues)
