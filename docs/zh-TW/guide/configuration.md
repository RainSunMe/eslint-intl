# 配置指南

所有配置項都在 VS Code 設定中以 `eslintIntl` 為前綴。

## 打開設定

1. 按 `Ctrl+,` (Windows/Linux) 或 `Cmd+,` (Mac)
2. 搜尋 "eslintIntl"

或直接編輯 `settings.json`:

```json
{
  "eslintIntl.openai.apiKey": "your-api-key",
  "eslintIntl.targetLanguage": "zh-TW",
  "eslintIntl.enabled": true
}
```

## 核心配置

### API 配置

#### `eslintIntl.openai.apiKey`

- **類型**: `string`
- **預設值**: `""`
- **必需**: ✅ 是
- **說明**: OpenAI 相容 API 的密鑰

::: warning
請勿將 API Key 提交到版本控制系統。VS Code 會將其安全地存儲在本地。
:::

#### `eslintIntl.openai.baseUrl`

- **類型**: `string`
- **預設值**: `"https://api.openai.com/v1"`
- **必需**: ❌ 否
- **說明**: API 的基礎 URL

使用自訂 API 服務時需要修改此項。

#### `eslintIntl.openai.model`

- **類型**: `string`
- **預設值**: `"gpt-4o-mini"`
- **必需**: ❌ 否
- **說明**: 要使用的模型名稱

## 功能配置

### `eslintIntl.enabled`

- **類型**: `boolean`
- **預設值**: `true`
- **說明**: 是否啟用 ESLint Intl 擴充套件

### `eslintIntl.targetLanguage`

- **類型**: `string`
- **預設值**: `"zh-CN"`
- **說明**: 目標翻譯語言

### `eslintIntl.showOriginal`

- **類型**: `boolean`
- **預設值**: `false`
- **說明**: 在翻譯下方顯示原始錯誤訊息

## 快取配置

ESLint Intl 使用兩層快取:

1. **記憶體快取** - 當前工作階段中快速查找
2. **持久化快取** - 跨工作階段保存，7 天有效期

### 清除快取

透過命令面板 (`Ctrl+Shift+P`):

```
ESLint Intl: Clear Translation Cache
```

## 配置示例

### 快速開始 (推薦)

```json
{
  "eslintIntl.openai.apiKey": "your-api-key",
  "eslintIntl.targetLanguage": "zh-TW",
  "eslintIntl.enabled": true
}
```

### 使用 GPT-4

```json
{
  "eslintIntl.openai.apiKey": "sk-...",
  "eslintIntl.openai.model": "gpt-4-turbo",
  "eslintIntl.targetLanguage": "zh-TW"
}
```

### 使用本地 Ollama

```json
{
  "eslintIntl.openai.baseUrl": "http://localhost:11434/v1",
  "eslintIntl.openai.model": "mixtral:8x7b",
  "eslintIntl.targetLanguage": "zh-TW"
}
```

## 故障排除

### "API Key 無效" 錯誤

- 檢查 API Key 是否正確複製
- 確認 API Key 未過期
- 驗證 Base URL 是否正確

### "無法連線到 API" 錯誤

- 檢查網路連線
- 驗證 Base URL 是否可訪問
- 檢查防火牆或代理設定

### 翻譯超時

- 調整 API 超時設定
- 嘗試使用更快的模型
- 檢查 API 服務的負載

## 需要幫助？

- 📖 查看 [常見問題](/zh-TW/guide/faq)
- 🐛 [提交 Issue](https://github.com/RainSunMe/eslint-intl/issues)
- 📧 聯繫支援
