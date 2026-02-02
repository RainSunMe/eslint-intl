# Developer Guide

This guide helps developers understand ESLint Intl's architecture, setup a development environment, and contribute code.

## Project Architecture

```
src/
├── extension.ts       # Entry point: VS Code extension main
├── translator.ts      # Translation core: OpenAI API calls
├── cache.ts          # Cache system: dual-layer cache management
└── logger.ts         # Logging: output channel utilities
```

### Core Modules

#### `extension.ts` - Extension Entry Point

- Activates extension
- Registers HoverProvider
- Manages commands
- Handles lifecycle

#### `translator.ts` - Translation Engine

- Calls OpenAI API
- Builds translation prompts
- Parses response JSON
- Manages request deduplication

#### `cache.ts` - Cache Management

- Memory cache (fast)
- Persistent cache (globalState)
- 7-day expiration

#### `logger.ts` - Logging Utilities

- Output channel management
- Structured logging

## Development Environment Setup

### System Requirements

- Node.js 16+
- npm 7+
- VS Code 1.85.0+
- Git

### Installation Steps

```bash
# 1. Clone repository
git clone https://github.com/RainSunMe/eslint-intl.git
cd eslint-intl

# 2. Install dependencies
npm install

# 3. Install VS Code CLI
npm install -g @vscode/vsce

# 4. Open project
code .
```

## Development Commands

```bash
# Compile TypeScript
npm run compile

# Watch and compile on changes
npm run watch

# Check with ESLint
npm run lint

# Build VSIX file
vsce package

# Publish to Marketplace
vsce publish
```

## Debugging

### Launch Debugger

Press `F5` or click "Run and Debug" in sidebar

Opens a new VS Code window (Extension Development Host)

### Debugging Tips

1. **Set Breakpoints**: Click line number left margin
2. **View Variables**: In "Variables" panel
3. **View Output**: In main window open "ESLint Intl" output channel
4. **Reload**: In Development Host press `Ctrl+R`

## Code Conventions

### TypeScript

- Use `const` not `let`
- Explicit type annotations for complex types
- Use interfaces for object shapes

```typescript
interface Config {
  apiKey: string;
  targetLanguage: string;
}
```

### Internationalization (i18n)

All user-facing strings must use `vscode.l10n.t()`:

```typescript
// ✅ Correct
log(vscode.l10n.t('Translating: "{0}"', message));

// ❌ Wrong
log("Translating: " + message);
```

### Logging

Use provided logging functions:

```typescript
import { log, logError } from "./logger";

log("Translation completed");
logError("Failed to fetch: " + error.message);
```

### Error Handling

Promises should resolve to `null` instead of throwing:

```typescript
// ✅ Good
async function translate() {
  try {
    return await api.call();
  } catch (error) {
    logError(error.message);
    return null; // Graceful degradation
  }
}
```

## Adding New Features

### Add New Command

1. Register in `package.json`:

```json
{
  "contributes": {
    "commands": [
      {
        "command": "eslintIntl.newCommand",
        "title": "%command.newCommand%"
      }
    ]
  }
}
```

2. Implement in `extension.ts`:

```typescript
vscode.commands.registerCommand("eslintIntl.newCommand", async () => {
  // Implementation
});
```

3. Add translation in `package.nls*.json`

### Add New Configuration

1. In `package.json`:

```json
{
  "contributes": {
    "configuration": {
      "properties": {
        "eslintIntl.newOption": {
          "type": "string",
          "default": "value"
        }
      }
    }
  }
}
```

2. Add descriptions in all `package.nls*.json`

3. Access in code:

```typescript
const config = vscode.workspace.getConfiguration("eslintIntl");
const value = config.get<string>("newOption");
```

## Building and Publishing

### Local Testing

```bash
npm run compile
vsce package
code --install-extension eslint-intl-*.vsix
```

### Publishing to Marketplace

```bash
vsce login <publisher-name>
vsce publish
```

## Code Review Checklist

Before submitting PR:

- [ ] Code passes ESLint: `npm run lint`
- [ ] TypeScript compiles: `npm run compile`
- [ ] All strings i18n'd: `vscode.l10n.t()`
- [ ] License headers added
- [ ] README updated (if needed)
- [ ] Translation files updated

## Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [VS Code Internationalization](https://code.visualstudio.com/docs/extensibility/l10n)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [OpenAI API Documentation](https://platform.openai.com/docs)

## Getting Help

- 📖 Check existing code and comments
- 🐛 [Submit an Issue](https://github.com/RainSunMe/eslint-intl/issues)
- 💬 [Join the Discussion](https://github.com/RainSunMe/eslint-intl/discussions)
- 📧 Contact maintainer

---

Thank you for contributing to ESLint Intl!
