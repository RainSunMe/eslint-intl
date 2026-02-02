# 快速開始

歡迎使用 ESLint Intl！本指南將幫助你快速開始使用。

## 什麼是 ESLint Intl？

ESLint Intl 是一個 VS Code 擴充套件，使用 AI 技術將 ESLint 錯誤訊息實時翻譯成你需要的語言。只需懸停在 ESLint 錯誤上，就能立即看到翻譯和修復建議。

## 主要特性

- 🌍 **支援 10 種語言** - 輕鬆選擇你喜歡的語言
- 💡 **智慧修復建議** - 不僅翻譯錯誤，還提供修復方案
- 💾 **智慧快取** - 避免重複請求，提升效能
- 🔧 **靈活配置** - 支援任何 OpenAI 相容的 API
- ⚡ **即時回應** - 無需等待，立即顯示翻譯

## 前置要求

在安裝 ESLint Intl 之前，請確保：

1. ✅ 你的專案中已經配置了 ESLint
2. ✅ 已安裝 [ESLint 官方擴充套件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

> ⚠️ **重要**: ESLint Intl 依賴於 ESLint 擴充套件提供的錯誤診斷資訊。如果沒有安裝 ESLint 擴充套件，本外掛將無法工作。

## 安裝

### 透過 VS Code Marketplace

1. 打開 VS Code 擴充套件市場
2. 搜尋 "ESLint Intl"
3. 點擊"安裝"按鈕
4. VS Code 會自動安裝 ESLint 擴充套件（如果尚未安裝）

### 手動安裝

1. 從 [GitHub Releases](https://github.com/RainSunMe/eslint-intl/releases) 下載 `.vsix` 檔案
2. 在 VS Code 中按 `Ctrl+Shift+X` (Windows/Linux) 或 `Cmd+Shift+X` (Mac) 打開擴充套件面板
3. 點擊右上角的 `...` 選單，選擇"從 VSIX 安裝"
4. 選擇下載的檔案

## 初始配置

### 步驟 1: 設定 API Key

1. 打開 VS Code 設定 (`Ctrl+,`)
2. 搜尋 "ESLint Intl"
3. 配置以下項目：
   - **API Key**: 你的 OpenAI 相容 API 的密鑰
   - **Base URL**: API 的基礎 URL（可選，預設為 OpenAI）
   - **Model**: 使用的模型名稱（可選）

### 步驟 2: 選擇目標語言

在 VS Code 設定中找到 `eslintIntl.targetLanguage`，選擇你想要的語言：

- 簡體中文 (zh-CN)
- 繁體中文 (zh-TW)
- 한국어 (ko)
- Deutsch (de)
- Français (fr)
- Español (es)
- Русский (ru)
- Português (pt)
- Italiano (it)
- العربية (ar)

### 步驟 3: 啟用擴充套件

確保 `eslintIntl.enabled` 設定為 `true`（預設啟用）

## 使用

1. 打開任何有 ESLint 錯誤的 JavaScript/TypeScript 檔案
2. 將滑鼠懸停在紅色波浪線的 ESLint 錯誤上
3. 在懸停提示中查看：
   - ✅ 翻譯後的錯誤訊息
   - 💡 修復建議
   - 🔗 原始錯誤規則連結

## 常用命令

按 `Ctrl+Shift+P` (或 `Cmd+Shift+P` on Mac) 打開命令面板，然後輸入：

- **ESLint Intl: Clear Translation Cache** - 清除所有快取的翻譯
- **ESLint Intl: Toggle Translation** - 快速切換翻譯功能
- **ESLint Intl: Show Output Log** - 顯示調試日誌

## 示例

### 示例代碼

```javascript
const x = 1;
// ESLint: 'x' is assigned a value but never used. (no-unused-vars)
```

### 翻譯結果 (zh-TW)

```
變數 'x' 已被賦值但從未使用。

💡 修復建議：刪除未使用的變數或將其用於計算
```

## 下一步

- 📖 了解更多 [配置項說明](/zh-TW/guide/configuration)
- 🌐 查看 [支援的語言](/zh-TW/guide/languages)
- ❓ 查看 [常見問題](/zh-TW/guide/faq)
- 🚀 了解 [開發指南](/zh-TW/guide/development)

## 需要幫助？

- 📱 檢查 [常見問題](/zh-TW/guide/faq)
- 🐛 [提交 Issue](https://github.com/RainSunMe/eslint-intl/issues)
- 💬 [討論](https://github.com/RainSunMe/eslint-intl/discussions)

---

準備好了嗎？讓我們開始使用 ESLint Intl，讓你的編碼體驗更加流暢！
