# Command Reference

All ESLint Intl commands are accessible from the Command Palette. Open it with `Ctrl+Shift+P` or `Cmd+Shift+P`, then search for commands.

## Available Commands

### ESLint Intl: Clear Translation Cache

**Command ID**: `eslintIntl.clearCache`

Clear all cached translations.

**When to use:**

- After changing translation target language to get new translations
- After switching API key or model
- To force retranslation of all errors
- To save storage space

**Suggested Shortcut**:

```json
{
  "key": "ctrl+alt+c",
  "command": "eslintIntl.clearCache"
}
```

---

### ESLint Intl: Toggle Translation

**Command ID**: `eslintIntl.toggleEnabled`

Quickly enable/disable ESLint Intl translation feature.

**When to use:**

- Quickly turn off translation (e.g., API issues)
- Temporarily disable for performance
- Switch between translation states

**Suggested Shortcut**:

```json
{
  "key": "ctrl+alt+e",
  "command": "eslintIntl.toggleEnabled"
}
```

**Behavior**:

- If currently enabled → disable
- If currently disabled → enable

---

### ESLint Intl: Show Output Log

**Command ID**: `eslintIntl.showOutput`

Open ESLint Intl output log window.

**When to use:**

- Debug API connection issues
- View translation request details
- Check error messages
- Verify cache operations

**Suggested Shortcut**:

```json
{
  "key": "ctrl+alt+o",
  "command": "eslintIntl.showOutput"
}
```

**Example Output**:

```
[14:32:15] ESLint Intl activated
[14:32:20] Translating: "unused variable" -> en
[14:32:21] Translation cached: "Variable is unused"
[14:33:45] Translation cache cleared
```

---

## Calling Commands from Code

You can call these commands from other extensions or scripts:

```typescript
// Clear cache
await vscode.commands.executeCommand("eslintIntl.clearCache");

// Toggle translation
await vscode.commands.executeCommand("eslintIntl.toggleEnabled");

// Show output
await vscode.commands.executeCommand("eslintIntl.showOutput");
```

## Quick Keyboard Shortcuts

Set custom shortcuts in `keybindings.json`:

```json
[
  {
    "key": "ctrl+alt+c",
    "command": "eslintIntl.clearCache"
  },
  {
    "key": "ctrl+alt+e",
    "command": "eslintIntl.toggleEnabled"
  },
  {
    "key": "ctrl+alt+o",
    "command": "eslintIntl.showOutput"
  }
]
```

## Command Quick Reference

| Command            | ID                         | Shortcut | Description     |
| ------------------ | -------------------------- | -------- | --------------- |
| Clear Cache        | `eslintIntl.clearCache`    | -        | Clear all cache |
| Toggle Translation | `eslintIntl.toggleEnabled` | -        | Enable/disable  |
| Show Output Log    | `eslintIntl.showOutput`    | -        | View logs       |

## Troubleshooting

### Command Not Showing in Palette

- Ensure ESLint Intl is installed
- Restart VS Code
- Check if extension is enabled

### Shortcut Not Working

- Check for conflicts with other shortcuts
- Verify syntax in `keybindings.json`
- Restart VS Code

### Command Unresponsive

- Check output window for errors
- Restart VS Code
- Check extension status

## Need Help?

- 📖 See [Basic Usage](/en-US/guide/usage)
- 🐛 [Submit an Issue](https://github.com)
- 💬 [Join the Discussion](https://github.com)
