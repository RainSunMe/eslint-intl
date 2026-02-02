# 配置指南

所有配置项都在 VS Code 设置中以 `eslintIntl` 为前缀。

## 打开设置

1. 按 `Ctrl+,` (Windows/Linux) 或 `Cmd+,` (Mac)
2. 搜索 "eslintIntl"

或直接编辑 `settings.json`:

```json
{
  "eslintIntl.openai.apiKey": "your-api-key",
  "eslintIntl.targetLanguage": "zh-CN",
  "eslintIntl.enabled": true
}
```

## 核心配置

### API 配置

#### `eslintIntl.openai.apiKey`

- **类型**: `string`
- **默认值**: `""`
- **必需**: ✅ 是
- **说明**: OpenAI 兼容 API 的密钥

::: warning
请勿将 API Key 提交到版本控制系统。VS Code 会将其安全地存储在本地。
:::

```json
{
  "eslintIntl.openai.apiKey": "sk-..."
}
```

#### `eslintIntl.openai.baseUrl`

- **类型**: `string`
- **默认值**: `"https://api.openai.com/v1"`
- **必需**: ❌ 否
- **说明**: API 的基础 URL

使用自定义 API 服务时需要修改此项。

```json
{
  "eslintIntl.openai.baseUrl": "https://api.openai.com/v1"
}
```

常见的 API 提供商:

| 提供商       | Base URL                                 |
| ------------ | ---------------------------------------- |
| OpenAI       | `https://api.openai.com/v1`              |
| Azure OpenAI | `https://{resource}.openai.azure.com/v1` |
| 本地 Ollama  | `http://localhost:11434/v1`              |

#### `eslintIntl.openai.model`

- **类型**: `string`
- **默认值**: `"gpt-4o-mini"`
- **必需**: ❌ 否
- **说明**: 要使用的模型名称

```json
{
  "eslintIntl.openai.model": "gpt-4-turbo"
}
```

常见的模型:

| 模型            | 提供商 | 说明           |
| --------------- | ------ | -------------- |
| `gpt-4-turbo`   | OpenAI | 强大的通用模型 |
| `gpt-3.5-turbo` | OpenAI | 快速且成本低   |
| `mixtral-8x7b`  | Ollama | 本地开源模型   |
| `llama2`        | Ollama | 本地开源模型   |

## 功能配置

### `eslintIntl.enabled`

- **类型**: `boolean`
- **默认值**: `true`
- **说明**: 是否启用 ESLint Intl 扩展

```json
{
  "eslintIntl.enabled": true
}
```

::: tip
你可以使用命令 `ESLint Intl: Toggle Translation` 快速切换此设置。
:::

### `eslintIntl.targetLanguage`

- **类型**: `string`
- **默认值**: `"zh-CN"`
- **说明**: 目标翻译语言

```json
{
  "eslintIntl.targetLanguage": "zh-CN"
}
```

支持的语言:

| 代码    | 语言      |
| ------- | --------- |
| `zh-CN` | 简体中文  |
| `zh-TW` | 繁体中文  |
| `ko`    | 한국어    |
| `de`    | Deutsch   |
| `fr`    | Français  |
| `es`    | Español   |
| `ru`    | Русский   |
| `pt`    | Português |
| `it`    | Italiano  |
| `ar`    | العربية   |

### `eslintIntl.showOriginal`

- **类型**: `boolean`
- **默认值**: `false`
- **说明**: 在翻译下方显示原始错误消息

```json
{
  "eslintIntl.showOriginal": true
}
```

启用后，悬停提示将显示:

```
翻译后的消息

原始: Original error message
```

## 高级配置

### 针对特定项目的配置

在项目根目录的 `.vscode/settings.json` 中配置:

```json
{
  "eslintIntl.targetLanguage": "zh-CN",
  "eslintIntl.openai.model": "gpt-3.5-turbo"
}
```

这将仅对当前项目生效，不会影响全局设置。

### 针对工作区的配置

在工作区设置中配置多个项目的共同设置:

```json
{
  "eslintIntl.enabled": true,
  "eslintIntl.openai.baseUrl": "https://company-api.com/v1",
  "eslintIntl.openai.apiKey": "${env:ESLINT_INTL_API_KEY}"
}
```

### 使用环境变量

你可以在设置中使用环境变量:

```json
{
  "eslintIntl.openai.apiKey": "${env:OPENAI_API_KEY}",
  "eslintIntl.openai.baseUrl": "${env:OPENAI_BASE_URL}"
}
```

设置环境变量:

```bash
# Linux/Mac
export OPENAI_API_KEY="sk-..."
export OPENAI_BASE_URL="https://..."

# Windows
set OPENAI_API_KEY=sk-...
set OPENAI_BASE_URL=https://...
```

## 缓存配置

ESLint Intl 使用两层缓存:

1. **内存缓存** - 当前会话中快速查找
2. **持久化缓存** - 跨会话保存，7 天有效期

### 清除缓存

通过命令面板 (`Ctrl+Shift+P`):

```
ESLint Intl: Clear Translation Cache
```

或编程方式:

```typescript
vscode.commands.executeCommand("eslintIntl.clearCache");
```

缓存数据存储在 VS Code 的 `globalState` 中，不会占用本地磁盘空间。

## 配置示例

### 快速开始 (推荐)

```json
{
  "eslintIntl.openai.apiKey": "your-api-key",
  "eslintIntl.targetLanguage": "zh-CN",
  "eslintIntl.enabled": true
}
```

### 使用 GPT-4

```json
{
  "eslintIntl.openai.apiKey": "sk-...",
  "eslintIntl.openai.model": "gpt-4-turbo",
  "eslintIntl.targetLanguage": "en"
}
```

### 使用本地 Ollama

```json
{
  "eslintIntl.openai.baseUrl": "http://localhost:11434/v1",
  "eslintIntl.openai.model": "mixtral:8x7b",
  "eslintIntl.targetLanguage": "zh-CN"
}
```

### 企业环境

```json
{
  "eslintIntl.openai.apiKey": "${env:COMPANY_API_KEY}",
  "eslintIntl.openai.baseUrl": "https://company-api.example.com/v1",
  "eslintIntl.openai.model": "company-model-v1",
  "eslintIntl.targetLanguage": "zh-CN",
  "eslintIntl.showOriginal": true
}
```

## 故障排除

### "API Key 无效" 错误

- 检查 API Key 是否正确复制
- 确认 API Key 未过期
- 验证 Base URL 是否正确

### "无法连接到 API" 错误

- 检查网络连接
- 验证 Base URL 是否可访问
- 检查防火墙或代理设置

### 翻译超时

- 调整 API 超时设置
- 尝试使用更快的模型
- 检查 API 服务的负载

## 需要帮助？

- 📖 查看 [常见问题](/guide/faq)
- 🐛 [提交 Issue](https://github.com)
- 📧 联系支持
