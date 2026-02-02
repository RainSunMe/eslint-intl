# 開發指南

本指南幫助開發者了解 ESLint Intl 的架構、設置開發環境和貢獻代碼。

## 專案架構

```
src/
├── extension.ts       # 入口：VS Code 擴充套件主檔案
├── translator.ts      # 翻譯核心：OpenAI API 調用
├── cache.ts          # 快取系統：雙層快取管理
└── logger.ts         # 日誌工具：輸出通道
```

## 開發環境設置

### 系統要求

- Node.js 16+
- npm 7+
- VS Code 1.85.0+
- Git

### 安裝步驟

```bash
# 1. 複製倉庫
git clone https://github.com/RainSunMe/eslint-intl.git
cd eslint-intl

# 2. 安裝依賴
npm install

# 3. 安裝 VS Code CLI
npm install -g @vscode/vsce

# 4. 打開專案
code .
```

## 開發命令

```bash
# 編譯 TypeScript
npm run compile

# 監聽檔案變化並編譯
npm run watch

# 運行 ESLint 檢查
npm run lint

# 打包 VSIX 檔案
vsce package

# 發佈到 Marketplace
vsce publish
```

## 調試

### 啟動調試器

按 `F5` 或點擊 Debug 側邊欄的 "Run and Debug"

這會打開一個新的 VS Code 視窗 (Extension Development Host)

## 代碼約定

### TypeScript

- 使用 `const` 而非 `let`
- 顯式類型註解用於複雜類型
- 使用介面定義對象形狀

### 國際化 (i18n)

所有使用者面向的字串必須使用 `vscode.l10n.t()`:

```typescript
// ✅ 正確
log(vscode.l10n.t('Translating: "{0}"', message));

// ❌ 錯誤
log("Translating: " + message);
```

### 日誌記錄

使用提供的日誌函數:

```typescript
import { log, logError } from "./logger";

log("Translation completed");
logError("Failed to fetch: " + error.message);
```

## 資源

- [VS Code Extension API](https://code.visualstudio.com/api)
- [VS Code 國際化文檔](https://code.visualstudio.com/docs/extensibility/l10n)
- [TypeScript 文檔](https://www.typescriptlang.org/docs/)
- [OpenAI API 文檔](https://platform.openai.com/docs)

## 獲取幫助

- 📖 查看現有代碼和註釋
- 🐛 [提交 Issue](https://github.com/RainSunMe/eslint-intl/issues)
- 💬 [參與討論](https://github.com/RainSunMe/eslint-intl/discussions)
- 📧 聯繫維護者

---

感謝你對 ESLint Intl 的貢獻！
