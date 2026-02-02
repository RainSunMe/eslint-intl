# 基本用法

## 快速開始

### 使用翻譯

1. 打開任何 JavaScript 或 TypeScript 檔案
2. 確保該檔案中有 ESLint 錯誤（紅色波浪線）
3. 將滑鼠懸停在 ESLint 錯誤上
4. 在彈出的提示中查看翻譯和修復建議

### 示例

**代碼:**

```javascript
const unused = 42;
console.log("Hello");
```

**ESLint 錯誤:**

```
'unused' is assigned a value but never used. (no-unused-vars)
```

**ESLint Intl 翻譯 (繁體中文):**

```
變數 'unused' 已被賦值但從未使用。

💡 修復建議: 刪除未使用的變數或在代碼中使用它
```

## 切換語言

### 方法 1: 透過設定

1. 打開 VS Code 設定 (`Ctrl+,`)
2. 搜尋 `eslintIntl.targetLanguage`
3. 選擇你想要的語言

### 方法 2: 透過命令面板

_此功能即將推出_

## 啟用/禁用翻譯

### 方法 1: 透過設定

1. 打開設定 (`Ctrl+,`)
2. 搜尋 `eslintIntl.enabled`
3. 勾選或取消勾選

### 方法 2: 透過命令

打開命令面板 (`Ctrl+Shift+P`), 然後運行:

```
ESLint Intl: Toggle Translation
```

## 顯示原始錯誤

有時你可能想看到原始的英文錯誤訊息。啟用此功能:

1. 打開設定 (`Ctrl+,`)
2. 搜尋 `eslintIntl.showOriginal`
3. 勾選啟用

現在在懸停提示中會同時顯示翻譯和原始錯誤。

## 使用不同的 API

### 切換 API 提供商

透過修改以下設定來使用不同的 API:

```json
{
  "eslintIntl.openai.baseUrl": "https://your-api.com/v1",
  "eslintIntl.openai.apiKey": "your-key",
  "eslintIntl.openai.model": "your-model"
}
```

## 效能優化

### 啟用快取

快取預設啟用。快取的翻譯有 7 天的有效期。

### 批量翻譯

懸停在多個錯誤上以填充快取，後續相同錯誤的翻譯會更快。

## 調試

### 查看輸出日誌

打開命令面板 (`Ctrl+Shift+P`), 運行:

```
ESLint Intl: Show Output Log
```

## 故障排除

### 翻譯不顯示

1. 確保 `eslintIntl.enabled` 為 `true`
2. 檢查檔案中確實有 ESLint 錯誤
3. 檢查輸出日誌是否有錯誤訊息
4. 重啟 VS Code

### API 連線錯誤

1. 檢查 API Key 是否正確
2. 檢查網路連線
3. 驗證 Base URL 是否正確
4. 查看輸出日誌了解詳細錯誤

## 更多幫助

- 📖 查看 [常見問題](/zh-TW/guide/faq)
- 🔧 查看 [配置指南](/zh-TW/guide/configuration)
- 🐛 [提交 Issue](https://github.com)
