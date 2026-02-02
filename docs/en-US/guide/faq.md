# FAQ - Frequently Asked Questions

## Installation and Configuration

### Q: Extension doesn't work after installation?

**A:** Check these steps:

1. Confirm VS Code version >= 1.85.0
2. Reload Window (`Ctrl+Shift+P` → "Reload Window")
3. Configure API Key in settings
4. View output log: `ESLint Intl: Show Output Log`

### Q: How do I know if my API Key is correct?

**A:**

1. Open Command Palette → `ESLint Intl: Show Output Log`
2. Hover over an ESLint error in your code
3. If translation appears, API Key is correct
4. If error appears, check output log details

### Q: What API providers are supported?

**A:**

- **OpenAI**: https://api.openai.com/v1
- **Azure OpenAI**: https://{resource}.openai.azure.com/v1
- **Ollama (Local)**: http://localhost:11434/v1
- **Custom Service**: Any OpenAI-compatible API

## Features and Usage

### Q: Why doesn't translation appear on hover?

**A:** Check:

1. Is ESLint Intl enabled: `eslintIntl.enabled = true`
2. Does file have ESLint errors (red squiggly lines)
3. Are you hovering correctly over the error
4. Is API Key configured correctly
5. Is network connection working

### Q: Translation is very slow, what can I do?

**A:**

1. **Check network**: Test API response time
2. **Switch model**: Try faster model
   ```json
   {
     "eslintIntl.openai.model": "gpt-3.5-turbo"
   }
   ```
3. **Clear cache**: Run `ESLint Intl: Clear Translation Cache`
4. **Batch hover**: Let extension cache multiple translations

### Q: How do I change target language?

**A:**

1. Open Settings (`Ctrl+,`)
2. Search `eslintIntl.targetLanguage`
3. Select from list
4. Run `ESLint Intl: Clear Translation Cache` for new translations

### Q: How do I show original English error?

**A:**

1. Open Settings (`Ctrl+,`)
2. Search `eslintIntl.showOriginal`
3. Enable this option
4. Hover will show both original and translation

## Cache and Performance

### Q: Where is cache stored?

**A:**

Cache is stored in VS Code's `globalState`:

- **Windows**: `%APPDATA%\Code\User\globalStorage`
- **Mac**: `~/Library/Application Support/Code/User/globalStorage`
- **Linux**: `~/.config/Code/User/globalStorage`

Cache is JSON format with auto-expiration (7 days).

### Q: How do I clear cache?

**A:**

1. Open Command Palette (`Ctrl+Shift+P`)
2. Run `ESLint Intl: Clear Translation Cache`

Or via code:

```typescript
vscode.commands.executeCommand("eslintIntl.clearCache");
```

### Q: How much storage does cache use?

**A:**

Very little:

- Average ~100 bytes per translation
- 1000 translations ~100KB
- VS Code manages automatically

## Multi-language

### Q: What languages are supported?

**A:**

ESLint Intl supports 10 languages:

- 简体中文 (zh-CN)
- 繁體中文 (zh-TW)
- 한국어 (ko)
- Deutsch (de)
- Français (fr)
- Español (es)
- Русский (ru)
- Português (pt)
- Italiano (it)
- العربية (ar)

### Q: How do I request a new language?

**A:**

[Submit an Issue](https://github.com) and:

1. Specify desired language
2. Provide ISO 639-1 code
3. Explain why you need it

## Errors and Troubleshooting

### Q: "API Key Invalid" error?

**A:**

1. Check API Key is correctly copied (no extra spaces)
2. Confirm API Key hasn't expired
3. Check Base URL is correct
4. Test API Key with another tool

### Q: "Cannot Connect to API" error?

**A:**

1. Check network connection
2. Verify Base URL is accessible
3. Check for proxy configuration
4. Check firewall/security software

### Q: Extension crashes or hangs?

**A:**

1. View output log: `ESLint Intl: Show Output Log`
2. Restart VS Code
3. Disable then re-enable extension
4. Clear cache
5. [Submit Issue](https://github.com) if persists

## Privacy and Security

### Q: Is my API Key safe?

**A:**

- API Key stored in VS Code's secure storage
- Never sent to ESLint Intl servers
- Only sent to your configured API provider

### Q: Is my code sent to third parties?

**A:**

- Only ESLint error messages sent to API
- Full code not sent
- Error messages usually don't contain sensitive info

### Q: Are translations logged?

**A:**

- Translations cached locally
- Can be cleared: `ESLint Intl: Clear Translation Cache`
- Not automatically uploaded anywhere

## License and Usage

### Q: Is ESLint Intl free?

**A:**

Yes, ESLint Intl is completely free under MIT license.

But using APIs may cost:

- **OpenAI**: Charged by usage
- **Ollama**: Free (runs locally)
- **Others**: Depends on provider

### Q: Can I use for commercial purposes?

**A:**

Yes, MIT license allows commercial use.

## Still Have Questions?

- 🔍 Search existing [Issues](https://github.com)
- 🐛 [Submit new Issue](https://github.com)
- 💬 [Join Discussion](https://github.com)
- 📧 Contact maintainer

---

Can't find an answer? Let us know!
