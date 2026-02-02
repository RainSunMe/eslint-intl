# Installation Guide

## System Requirements

- VS Code 1.85.0 or higher
- Node.js 16+ (only needed for development)

## Installation Methods

### Method 1: VS Code Marketplace (Recommended)

1. Open VS Code
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac) to open Extensions
3. Search for "ESLint Intl"
4. Click the "Install" button

### Method 2: Manual VSIX Installation

1. Download the latest `.vsix` file from [GitHub Releases](https://github.com)
2. In VS Code:
   - Press `Ctrl+Shift+X` to open Extensions
   - Click the `...` menu in the top right
   - Select "Install from VSIX..."
   - Select the downloaded `.vsix` file

### Method 3: Command Line Installation

```bash
# Install a specific version
code --install-extension eslint-intl-0.1.0.vsix

# Or install from Marketplace
code --install-extension mimo.eslint-intl
```

## First-time Configuration

After installation, you need to configure the following to use it:

### 1. Configure API Key

> **Important**: ESLint Intl requires an OpenAI-compatible API Key to translate error messages.

Open VS Code Settings:

- Windows/Linux: `Ctrl+,`
- Mac: `Cmd+,`

Search for `eslintIntl.openai.apiKey` and enter your API Key.

### 2. Configure API Settings (Optional)

If using a non-official OpenAI API, configure:

- **eslintIntl.openai.baseUrl**: API base URL
- **eslintIntl.openai.model**: Model name to use

### 3. Select Language

Search for `eslintIntl.targetLanguage` and select your target language.

## Upgrading

### Upgrade from Marketplace

VS Code will automatically check for updates. You can also manually upgrade:

1. Open Extensions panel
2. Search for "ESLint Intl"
3. If an update is available, click the "Update" button

### Version Upgrades

Upgrading to a new version doesn't require special steps; the new version automatically replaces the old one.

**Note**: Cache is preserved unless you manually clear it.

## Uninstallation

### Via UI

1. Open Extensions panel (`Ctrl+Shift+X`)
2. Search for "ESLint Intl"
3. Click the gear icon
4. Select "Uninstall"

### Via Command Line

```bash
code --uninstall-extension mimo.eslint-intl
```

### Clear Data

When uninstalling, the following data is retained (optional deletion):

- Cached translations (VS Code globalState)
- Settings and configuration

To manually clear all data:

1. Open Command Palette (`Ctrl+Shift+P`)
2. Type "ESLint Intl: Clear Translation Cache"
3. Press Enter to confirm

## Troubleshooting

### Extension Won't Load

- Check if VS Code version >= 1.85.0
- Try disabling and re-enabling the extension
- View output log: `ESLint Intl: Show Output Log`

### API Key Configuration Error

- Make sure API Key is correct and valid
- Check if Base URL is correct
- See [API Configuration Guide](/en-US/guide/configuration)

### Translation Not Working

- Check if ESLint Intl is enabled: `eslintIntl.enabled = true`
- Confirm file has ESLint errors
- Check output log for detailed error information

### Performance Issues

- Clear cache: `ESLint Intl: Clear Translation Cache`
- Check API response time
- See [FAQ](/en-US/guide/faq) for performance optimization tips

## Development Version Installation

To install the development version or build from source:

```bash
# Clone repository
git clone https://github.com/xxx/eslint-intl.git
cd eslint-intl

# Install dependencies
npm install

# Build VSIX file
npm install -g @vscode/vsce
vsce package

# Install local VSIX
code --install-extension eslint-intl-*.vsix
```

## Need Help?

- 📖 Check [FAQ](/en-US/guide/faq)
- 🐛 [Submit an Issue](https://github.com)
- 💬 [Join the Discussion](https://github.com)
