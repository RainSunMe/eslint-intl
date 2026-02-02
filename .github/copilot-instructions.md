# ESLint Intl - Copilot Instructions

## Project Overview

A VS Code extension that uses AI (OpenAI-compatible APIs) to translate ESLint error messages into multiple languages. The extension intercepts ESLint diagnostics via hover providers and displays translated messages with fix suggestions.

## Architecture

```
src/
├── extension.ts   # Entry point: activation, commands, HoverProvider registration
├── translator.ts  # OpenAI API calls, prompt building, request deduplication
├── cache.ts       # Two-tier cache: memory + VS Code globalState persistence
└── logger.ts      # Output channel logging utilities
```

**Data Flow**: ESLint diagnostic → HoverProvider → Cache check → Translator (if miss) → OpenAI API → JSON response → Formatted MarkdownString hover

## Key Patterns

### Internationalization (i18n)

This extension uses VS Code's l10n system with two separate mechanisms:

1. **Runtime strings** (`l10n/bundle.l10n.*.json`): Use `vscode.l10n.t("key")` with placeholders like `{0}`, `{1}`
2. **Package manifest** (`package.nls*.json`): Use `%key%` syntax in `package.json` for configuration labels

```typescript
// Runtime - use vscode.l10n.t()
log(vscode.l10n.t("Translating: \"{0}\" -> {1}", message, lang));

// Package manifest - use %key% in package.json
"description": "%config.apiKey%"
```

### Configuration Access

All settings use the `eslintIntl` prefix. Access via `vscode.workspace.getConfiguration("eslintIntl")`:

```typescript
const config = vscode.workspace.getConfiguration("eslintIntl");
const apiKey = config.get<string>("openai.apiKey", "");
```

### Translation Response Format

The translator expects JSON responses from the AI:

```json
{ "translation": "translated message", "fix": "brief fix suggestion" }
```

Graceful fallback to raw text if JSON parsing fails (see [extension.ts](src/extension.ts#L203-L212)).

### Request Deduplication

`Translator.pendingTranslations` Map prevents duplicate API calls for the same message while a translation is in-flight.

### Cache Strategy

- **Memory cache**: Fast lookup during session
- **Persistent cache**: VS Code globalState with 7-day TTL
- **Cache key format**: `${targetLanguage}:${originalMessage}`

## Development Commands

```bash
npm install          # Install dependencies
npm run compile      # One-time build
npm run watch        # Watch mode for development
npm run lint         # Run ESLint
```

**Debug**: Press F5 to launch Extension Development Host.

## Adding New Features

### New Configuration Option

1. Add to `package.json` under `contributes.configuration.properties`
2. Add label key to all `package.nls*.json` files
3. Access in code via `config.get<Type>("newOption", defaultValue)`

### New Supported Language

1. Add to `targetLanguage.enum` in [package.json](package.json#L44-L55)
2. Add display name to `LANGUAGE_NAMES` in [translator.ts](src/translator.ts#L23-L34)
3. Add translations to all `bundle.l10n.*.json` files

### New Command

1. Register in `package.json` under `contributes.commands`
2. Implement in `extension.ts` using `vscode.commands.registerCommand`
3. Add to `context.subscriptions` for proper disposal

## Code Conventions

- Use `const CONFIG_PREFIX = "eslintIntl"` for consistent command/config naming
- Wrap all user-facing strings with `vscode.l10n.t()` for i18n
- Log operations via `log()` / `logError()` from logger.ts, not console
- HTTP requests use Node.js native `http`/`https` modules (no axios/fetch)
- Error handling: resolve to `null` rather than throwing in Translator API calls
