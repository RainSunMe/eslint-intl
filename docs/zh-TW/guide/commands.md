# 命令參考

所有 ESLint Intl 命令都可以透過命令面板訪問。打開命令面板 (`Ctrl+Shift+P` 或 `Cmd+Shift+P`), 然後搜尋命令。

## 可用命令

### ESLint Intl: Clear Translation Cache

**命令ID**: `eslintIntl.clearCache`

清除所有已快取的翻譯。

**何時使用:**

- 修改翻譯目標語言後獲取新翻譯
- 更換 API 密鑰或模型後
- 想要強制重新翻譯所有錯誤
- 節省存儲空間

### ESLint Intl: Toggle Translation

**命令ID**: `eslintIntl.toggleEnabled`

快速啟用/禁用 ESLint Intl 翻譯功能。

**何時使用:**

- 快速關閉翻譯（例如當 API 出問題時）
- 臨時禁用翻譯以提高效能
- 在不同的翻譯狀態之間快速切換

### ESLint Intl: Show Output Log

**命令ID**: `eslintIntl.showOutput`

打開 ESLint Intl 的輸出日誌視窗。

**何時使用:**

- 調試 API 連線問題
- 查看翻譯請求的詳細資訊
- 檢查錯誤訊息
- 驗證快取操作

## 從代碼調用命令

你可以從其他擴充套件或指令碼中調用這些命令:

```typescript
// 清除快取
await vscode.commands.executeCommand("eslintIntl.clearCache");

// 切換翻譯
await vscode.commands.executeCommand("eslintIntl.toggleEnabled");

// 顯示輸出
await vscode.commands.executeCommand("eslintIntl.showOutput");
```

## 命令快速參考表

| 命令                    | ID                         | 說明          |
| ----------------------- | -------------------------- | ------------- |
| Clear Translation Cache | `eslintIntl.clearCache`    | 清除所有快取  |
| Toggle Translation      | `eslintIntl.toggleEnabled` | 啟用/禁用翻譯 |
| Show Output Log         | `eslintIntl.showOutput`    | 顯示日誌視窗  |

## 故障排除

### 命令未顯示在命令面板中

- 確保 ESLint Intl 已安裝
- 重啟 VS Code
- 檢查擴充套件是否啟用

## 需要幫助？

- 📖 查看 [基本用法](/zh-TW/guide/usage)
- 🐛 [提交 Issue](https://github.com/RainSunMe/eslint-intl/issues)
