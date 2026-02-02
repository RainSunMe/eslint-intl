# 基本用法

## 快速开始

### 使用翻译

1. 打开任何 JavaScript 或 TypeScript 文件
2. 确保该文件中有 ESLint 错误（红色波浪线）
3. 将鼠标悬停在 ESLint 错误上
4. 在弹出的提示中查看翻译和修复建议

### 示例

**代码:**

```javascript
const unused = 42;
console.log("Hello");
```

**ESLint 错误:**

```
'unused' is assigned a value but never used. (no-unused-vars)
```

**ESLint Intl 翻译 (中文):**

```
变量 'unused' 已被赋值但从未使用。

💡 修复建议: 删除未使用的变量或在代码中使用它
```

## 快速操作

在悬停提示中，你可以点击 "Quick Fix" 按钮来应用自动修复。

## 切换语言

### 方法 1: 通过设置

1. 打开 VS Code 设置 (`Ctrl+,`)
2. 搜索 `eslintIntl.targetLanguage`
3. 选择你想要的语言

### 方法 2: 通过命令面板

_此功能即将推出_

## 启用/禁用翻译

### 方法 1: 通过设置

1. 打开设置 (`Ctrl+,`)
2. 搜索 `eslintIntl.enabled`
3. 勾选或取消勾选

### 方法 2: 通过命令

打开命令面板 (`Ctrl+Shift+P`), 然后运行:

```
ESLint Intl: Toggle Translation
```

## 显示原始错误

有时你可能想看到原始的英文错误消息。启用此功能:

1. 打开设置 (`Ctrl+,`)
2. 搜索 `eslintIntl.showOriginal`
3. 勾选启用

现在在悬停提示中会同时显示翻译和原始错误。

## 使用不同的 API

### 切换 API 提供商

通过修改以下设置来使用不同的 API:

```json
{
  "eslintIntl.openai.baseUrl": "https://your-api.com/v1",
  "eslintIntl.openai.apiKey": "your-key",
  "eslintIntl.openai.model": "your-model"
}
```

### 支持的 API 提供商

- **OpenAI**: `https://api.openai.com/v1`
- **Azure OpenAI**: `https://{resource}.openai.azure.com/v1`
- **Ollama** (本地): `http://localhost:11434/v1`
- **自定义服务**: 任何兼容 OpenAI API 的服务

## 文件类型支持

ESLint Intl 支持所有 ESLint 能检查的文件类型:

- ✅ `.js` - JavaScript
- ✅ `.jsx` - React JSX
- ✅ `.ts` - TypeScript
- ✅ `.tsx` - TypeScript JSX
- ✅ `.json` - JSON (如果 ESLint 配置了)
- ✅ `.vue` - Vue (如果 ESLint 配置了)
- ✅ `.html` - HTML (如果 ESLint 配置了)

## 工作区特定的配置

在项目的 `.vscode/settings.json` 中配置特定项目的设置:

```json
{
  "eslintIntl.targetLanguage": "zh-CN",
  "eslintIntl.openai.model": "specific-model"
}
```

这些设置只对当前项目生效。

## 键盘快捷键

目前 ESLint Intl 没有预定义的快捷键。你可以自定义:

1. 打开键盘快捷键编辑器 (`Ctrl+K Ctrl+S`)
2. 搜索 "ESLint Intl"
3. 点击快捷键列，设置你想要的快捷键

建议的快捷键:

```json
[
  {
    "key": "ctrl+alt+e",
    "command": "eslintIntl.toggleEnabled"
  },
  {
    "key": "ctrl+alt+c",
    "command": "eslintIntl.clearCache"
  }
]
```

## 多工作区设置

在多工作区中使用 ESLint Intl:

1. 在工作区级别配置 (`.vscode/settings.json`):

   ```json
   {
     "eslintIntl.openai.apiKey": "${env:OPENAI_API_KEY}",
     "eslintIntl.targetLanguage": "zh-CN"
   }
   ```

2. 不同的工作区文件夹可以有不同的设置

3. 文件夹级别的设置优先于工作区级别

## 性能优化

### 启用缓存

缓存默认启用。缓存的翻译有 7 天的有效期。

### 禁用以获得最新翻译

如果你想总是获得最新翻译，清除缓存:

```
ESLint Intl: Clear Translation Cache
```

### 批量翻译

悬停在多个错误上以填充缓存，后续相同错误的翻译会更快。

## 调试

### 查看输出日志

打开命令面板 (`Ctrl+Shift+P`), 运行:

```
ESLint Intl: Show Output Log
```

### 启用详细日志

目前通过 "Show Output Log" 命令可以看到所有操作日志。

### 检查缓存状态

缓存状态信息会在输出日志中显示。

## 故障排除

### 翻译不显示

1. 确保 `eslintIntl.enabled` 为 `true`
2. 检查文件中确实有 ESLint 错误
3. 检查输出日志是否有错误信息
4. 重启 VS Code

### API 连接错误

1. 检查 API Key 是否正确
2. 检查网络连接
3. 验证 Base URL 是否正确
4. 查看输出日志了解详细错误

### 翻译质量差

1. 尝试更换模型: `eslintIntl.openai.model`
2. 清除缓存获得最新翻译
3. 检查 API 服务是否正常

## 更多帮助

- 📖 查看 [常见问题](/guide/faq)
- 🔧 查看 [配置指南](/guide/configuration)
- 🐛 [提交 Issue](https://github.com)
