# 安裝指南

## 系統要求

- VS Code 1.85.0 或更高版本
- Node.js 16+ (僅在開發時需要)

## 安裝方式

### 方式 1: VS Code Marketplace (推薦)

1. 打開 VS Code
2. 按 `Ctrl+Shift+X` (Windows/Linux) 或 `Cmd+Shift+X` (Mac) 打開擴充套件面板
3. 搜尋 "ESLint Intl"
4. 點擊"安裝"按鈕

### 方式 2: 手動安裝 VSIX 檔案

1. 從 [GitHub Releases](https://github.com) 下載最新的 `.vsix` 檔案
2. 在 VS Code 中：
   - 按 `Ctrl+Shift+X` 打開擴充套件面板
   - 點擊右上角的 `...` 選單
   - 選擇"從 VSIX 安裝..."
   - 選擇下載的 `.vsix` 檔案

### 方式 3: 命令列安裝

```bash
# 安裝特定版本
code --install-extension eslint-intl-0.1.0.vsix

# 或者從 Marketplace 安裝
code --install-extension mimo.eslint-intl
```

## 首次配置

安裝後需要進行以下配置才能使用：

### 1. 配置 API Key

> **重要**: ESLint Intl 需要 OpenAI 相容的 API Key 來翻譯錯誤訊息。

打開 VS Code 設定:

- Windows/Linux: `Ctrl+,`
- Mac: `Cmd+,`

搜尋 `eslintIntl.openai.apiKey` 並輸入你的 API Key。

### 2. 配置 API 資訊 (可選)

如果使用非官方 OpenAI API，配置以下項：

- **eslintIntl.openai.baseUrl**: API 的基礎 URL
- **eslintIntl.openai.model**: 要使用的模型名稱

### 3. 選擇語言

搜尋 `eslintIntl.targetLanguage` 並選擇你想要的目標語言。

## 升級

### 從 Marketplace 升級

VS Code 會自動檢查和安裝更新。您也可以手動升級：

1. 打開擴充套件面板
2. 搜尋 "ESLint Intl"
3. 如果有更新，點擊"更新"按鈕

### 升級到新版本

從一個版本升級到另一個版本不需要特殊操作，新版本會自動替換舊版本。

**注意**: 快取會被保留，除非您手動清除。

## 卸載

### 透過 UI 卸載

1. 打開擴充套件面板 (`Ctrl+Shift+X`)
2. 搜尋 "ESLint Intl"
3. 點擊齒輪圖示
4. 選擇"卸載"

### 透過命令列卸載

```bash
code --uninstall-extension mimo.eslint-intl
```

### 清除資料

卸載時，以下資料會被保留（可選刪除）：

- 快取的翻譯 (VS Code globalState)
- 設定和配置

手動清除所有資料：

1. 打開命令面板 (`Ctrl+Shift+P`)
2. 輸入 "ESLint Intl: Clear Translation Cache"
3. 按 Enter 確認

## 故障排除

### 擴充套件無法載入

- 檢查 VS Code 版本是否 >= 1.85.0
- 嘗試禁用然後重新啟用擴充套件
- 查看輸出日誌: `ESLint Intl: Show Output Log`

### API Key 配置錯誤

- 確保 API Key 正確且有效
- 檢查 Base URL 是否正確
- 查看 [API 配置指南](/zh-TW/guide/configuration)

### 翻譯無法工作

- 檢查 ESLint Intl 是否啟用: `eslintIntl.enabled = true`
- 確認檔案中有 ESLint 錯誤
- 查看輸出日誌了解詳細錯誤資訊

### 效能問題

- 清除快取: `ESLint Intl: Clear Translation Cache`
- 檢查 API 回應時間
- 查看 [常見問題](/zh-TW/guide/faq) 中的效能優化建議

## 開發版本安裝

如果你想安裝開發版本或從原始程式碼構建：

```bash
# 複製倉庫
git clone https://github.com/xxx/eslint-intl.git
cd eslint-intl

# 安裝依賴
npm install

# 打包 VSIX 檔案
npm install -g @vscode/vsce
vsce package

# 安裝本地 VSIX
code --install-extension eslint-intl-*.vsix
```

## 需要幫助？

- 📖 查看 [常見問題](/zh-TW/guide/faq)
- 🐛 [提交 Issue](https://github.com)
- 💬 [參與討論](https://github.com)
