# 命令参考

所有 ESLint Intl 命令都可以通过命令面板访问。打开命令面板 (`Ctrl+Shift+P` 或 `Cmd+Shift+P`), 然后搜索命令。

## 可用命令

### ESLint Intl: Clear Translation Cache

**命令ID**: `eslintIntl.clearCache`

清除所有已缓存的翻译。

**何时使用:**

- 修改翻译目标语言后获取新翻译
- 更换 API 密钥或模型后
- 想要强制重新翻译所有错误
- 节省存储空间

**快捷键**: 自定义快捷键

```json
{
  "key": "ctrl+alt+c",
  "command": "eslintIntl.clearCache"
}
```

**输出**:

```
ESLint Intl: Translation cache cleared
```

---

### ESLint Intl: Toggle Translation

**命令ID**: `eslintIntl.toggleEnabled`

快速启用/禁用 ESLint Intl 翻译功能。

**何时使用:**

- 快速关闭翻译（例如当 API 出问题时）
- 临时禁用翻译以提高性能
- 在不同的翻译状态之间快速切换

**快捷键**: 自定义快捷键

```json
{
  "key": "ctrl+alt+e",
  "command": "eslintIntl.toggleEnabled"
}
```

**行为**:

- 如果当前启用 → 禁用
- 如果当前禁用 → 启用

**状态指示**:
在输出窗口中会显示切换后的状态:

```
ESLint Intl: Translation enabled
```

或

```
ESLint Intl: Translation disabled
```

---

### ESLint Intl: Show Output Log

**命令ID**: `eslintIntl.showOutput`

打开 ESLint Intl 的输出日志窗口。

**何时使用:**

- 调试 API 连接问题
- 查看翻译请求的详细信息
- 检查错误消息
- 验证缓存操作

**快捷键**: 自定义快捷键

```json
{
  "key": "ctrl+alt+o",
  "command": "eslintIntl.showOutput"
}
```

**输出示例**:

```
[14:32:15] ESLint Intl activated
[14:32:20] Translating: "unused variable" -> zh-CN
[14:32:21] Translation cached: "未使用的变量"
[14:33:45] Translation cache cleared
```

---

## 从代码调用命令

你可以从其他扩展或脚本中调用这些命令:

```typescript
// 清除缓存
await vscode.commands.executeCommand("eslintIntl.clearCache");

// 切换翻译
await vscode.commands.executeCommand("eslintIntl.toggleEnabled");

// 显示输出
await vscode.commands.executeCommand("eslintIntl.showOutput");
```

## 命令面板快速访问

### 快捷方式

在命令面板中输入命令的缩写:

- `eic` - Clear Cache
- `eit` - Toggle Translation
- `eio` - Show Output

### 按字母搜索

在命令面板中输入:

```
ESLint Intl:
```

会显示所有可用命令。

## 键盘快捷键配置

### 打开快捷键编辑器

- Windows/Linux: `Ctrl+K Ctrl+S`
- Mac: `Cmd+K Cmd+S`

### 添加自定义快捷键

编辑 `keybindings.json`:

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
  },
  {
    "key": "ctrl+shift+alt+c",
    "command": "eslintIntl.clearCache",
    "when": "editorTextFocus"
  }
]
```

### 快捷键约定

建议使用:

- `Ctrl+Alt+` (Windows/Linux) 或 `Cmd+Option+` (Mac) 作为前缀
- 避免与系统快捷键冲突
- 避免与 VS Code 内置快捷键冲突

## 命令快速参考表

| 命令                    | ID                         | 快捷键 | 说明          |
| ----------------------- | -------------------------- | ------ | ------------- |
| Clear Translation Cache | `eslintIntl.clearCache`    | -      | 清除所有缓存  |
| Toggle Translation      | `eslintIntl.toggleEnabled` | -      | 启用/禁用翻译 |
| Show Output Log         | `eslintIntl.showOutput`    | -      | 显示日志窗口  |

## 故障排除

### 命令未显示在命令面板中

- 确保 ESLint Intl 已安装
- 重启 VS Code
- 检查扩展是否启用

### 快捷键不工作

- 检查快捷键是否与其他快捷键冲突
- 打开快捷键编辑器验证配置
- 检查 `keybindings.json` 中的语法

### 命令执行无反应

- 检查输出窗口是否显示错误
- 重启 VS Code
- 检查扩展的激活状态

## 高级用法

### 条件执行

只在特定情况下执行命令:

```json
{
  "key": "ctrl+alt+c",
  "command": "eslintIntl.clearCache",
  "when": "resourceLangId == javascript || resourceLangId == typescript"
}
```

### 链式执行命令

在 VSCode 中暂不直接支持，但可以通过扩展实现。

## 需要帮助？

- 📖 查看 [基本用法](/guide/usage)
- 🐛 [提交 Issue](https://github.com)
- 💬 [参与讨论](https://github.com)
