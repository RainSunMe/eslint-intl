# 常見問題 (FAQ)

## 安裝和配置

### Q: 安裝後不能工作？

**A:** 請檢查以下步驟:

1. 確認 VS Code 版本是否 >= 1.85.0
2. 重啟 VS Code (`Ctrl+Shift+P` → "Reload Window")
3. 在設定中配置 API Key
4. 查看輸出日誌: `ESLint Intl: Show Output Log`

### Q: 如何知道 API Key 是否正確？

**A:**

1. 打開命令面板 → `ESLint Intl: Show Output Log`
2. 在代碼中懸停在 ESLint 錯誤上
3. 如果顯示翻譯，說明 API Key 正確
4. 如果有錯誤訊息，查看輸出日誌的詳細內容

### Q: API 提供商支持哪些？

**A:**

- **OpenAI**: https://api.openai.com/v1
- **Azure OpenAI**: https://{resource}.openai.azure.com/v1
- **Ollama (本地)**: http://localhost:11434/v1
- **自訂服務**: 任何 OpenAI 相容的服務

## 功能和使用

### Q: 為什麼懸停時不顯示翻譯？

**A:** 請檢查:

1. ESLint Intl 是否啟用: `eslintIntl.enabled = true`
2. 檔案中是否有 ESLint 錯誤 (紅色波浪線)
3. 是否正確懸停在錯誤上
4. API Key 是否配置正確
5. 網路連線是否正常

### Q: 翻譯很慢怎麼辦？

**A:**

1. **檢查網路**: 測試 API 的回應時間
2. **切換模型**: 嘗試使用更快的模型
3. **清除過期快取**: 運行 `ESLint Intl: Clear Translation Cache`
4. **批量懸停**: 讓擴充套件快取多個翻譯

### Q: 如何更改目標語言？

**A:**

1. 打開設定 (`Ctrl+,`)
2. 搜尋 `eslintIntl.targetLanguage`
3. 從列表中選擇語言
4. 運行 `ESLint Intl: Clear Translation Cache` 獲取新語言的翻譯

### Q: 翻譯品質不好，怎麼辦？

**A:**

1. **升級模型**:

   ```json
   {
     "eslintIntl.openai.model": "gpt-4-turbo"
   }
   ```

2. **清除快取**: 運行 `ESLint Intl: Clear Translation Cache`

3. **反饋**: [提交 Issue](https://github.com/RainSunMe/eslint-intl/issues) 報告具體問題

## 快取和效能

### Q: 快取存儲在哪裡？

**A:**

快取存儲在 VS Code 的 `globalState` 中：

- **Windows**: `%APPDATA%\Code\User\globalStorage`
- **Mac**: `~/Library/Application Support/Code/User/globalStorage`
- **Linux**: `~/.config/Code/User/globalStorage`

### Q: 如何清除快取？

**A:**

1. 打開命令面板 (`Ctrl+Shift+P`)
2. 運行 `ESLint Intl: Clear Translation Cache`

或透過代碼:

```typescript
vscode.commands.executeCommand("eslintIntl.clearCache");
```

## 多語言和國際化

### Q: 支援哪些語言？

**A:**

ESLint Intl 目前支援 10 種語言:

- 簡體中文 (zh-CN)
- 繁體中文 (zh-TW)
- 韓語 (ko)
- 德語 (de)
- 法語 (fr)
- 西班牙語 (es)
- 俄語 (ru)
- 葡萄牙語 (pt)
- 意大利語 (it)
- 阿拉伯語 (ar)

### Q: 如何申請添加新語言？

**A:**

[提交 Issue](https://github.com/RainSunMe/eslint-intl/issues) 並:

1. 指定所需的語言
2. 提供語言代碼 (ISO 639-1)
3. 說明為什麼需要這個語言

## 錯誤和故障排除

### Q: 出現 "API Key 無效" 錯誤？

**A:**

1. 檢查 API Key 是否正確複製 (沒有多餘空格)
2. 確認 API Key 未過期
3. 檢查 Base URL 是否正確

### Q: 出現 "無法連線到 API" 錯誤？

**A:**

1. 檢查網路連線
2. 驗證 Base URL 是否可訪問
3. 檢查是否需要代理配置
4. 查看防火牆或安全軟體設定

### Q: 擴充套件崩潰或無反應？

**A:**

1. 查看輸出日誌: `ESLint Intl: Show Output Log`
2. 重啟 VS Code
3. 禁用然後重新啟用擴充套件
4. 清除快取
5. 如果問題持續，[提交 Issue](https://github.com/RainSunMe/eslint-intl/issues)

## 隱私和安全

### Q: 我的 API Key 是否安全？

**A:**

- API Key 存儲在 VS Code 的安全存儲中
- 絕不會發送到 ESLint Intl 服務器
- 只發送給你配置的 API 提供商

### Q: 代碼是否會被發送到第三方？

**A:**

- 只有 ESLint 錯誤訊息被發送到 API
- 不會發送完整的代碼
- 錯誤訊息通常不包含敏感資訊

## 許可證和使用

### Q: ESLint Intl 是免費的嗎？

**A:**

是的，ESLint Intl 本身完全免費，採用 MIT 許可證。

但使用 API 可能需要付費。

## 還有問題？

- 🔍 搜尋現有 [Issues](https://github.com/RainSunMe/eslint-intl/issues)
- 🐛 [提交新 Issue](https://github.com/RainSunMe/eslint-intl/issues/new)
- 💬 [參與討論](https://github.com/RainSunMe/eslint-intl/discussions)

---

無法找到答案？請告訴我們！
