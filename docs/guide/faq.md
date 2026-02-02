# 常见问题 (FAQ)

## 安装和配置

### Q: 安装后不能工作？

**A:** 请检查以下步骤:

1. 确认 VS Code 版本 >= 1.85.0
2. 重启 VS Code (`Ctrl+Shift+P` → "Reload Window")
3. 在设置中配置 API Key
4. 查看输出日志: `ESLint Intl: Show Output Log`

### Q: 如何知道 API Key 是否正确？

**A:**

1. 打开命令面板 → `ESLint Intl: Show Output Log`
2. 在代码中悬停在 ESLint 错误上
3. 如果显示翻译，说明 API Key 正确
4. 如果有错误信息，查看输出日志的详细内容

### Q: 我不知道我的 API Key 是什么？

**A:** 这取决于你使用的 API:

- **OpenAI**: 登录 [OpenAI Platform](https://platform.openai.com/api-keys) 获取
- **Azure OpenAI**: 在 Azure 门户中查找
- **Ollama (本地)**: 通常不需要 API Key
- **自定义服务**: 咨询你的 API 提供商

### Q: Base URL 应该是什么？

**A:** 取决于你的 API 提供商:

| 提供商        | Base URL                                 |
| ------------- | ---------------------------------------- |
| OpenAI (默认) | `https://api.openai.com/v1`              |
| Azure OpenAI  | `https://{resource}.openai.azure.com/v1` |
| Ollama (本地) | `http://localhost:11434/v1`              |
| 自定义        | 联系你的提供商                           |

### Q: 在企业环境中如何使用？

**A:**

1. 使用环境变量存储敏感信息:

```json
{
  "eslintIntl.openai.apiKey": "${env:COMPANY_API_KEY}"
}
```

2. 在系统中设置环境变量
3. 配置公司 API 的 Base URL
4. 在 `.vscode/settings.json` 中保存项目配置

## 功能和使用

### Q: 为什么悬停时不显示翻译？

**A:** 请检查:

1. ESLint Intl 是否启用: `eslintIntl.enabled = true`
2. 文件中是否有 ESLint 错误 (红色波浪线)
3. 是否正确悬停在错误上
4. API Key 是否配置正确
5. 网络连接是否正常

### Q: 翻译很慢怎么办？

**A:**

1. **检查网络**: 测试 API 的响应时间
2. **切换模型**: 尝试使用更快的模型
   ```json
   {
     "eslintIntl.openai.model": "gpt-3.5-turbo"
   }
   ```
3. **清除过期缓存**: 运行 `ESLint Intl: Clear Translation Cache`
4. **批量悬停**: 让扩展缓存多个翻译

### Q: 如何更改目标语言？

**A:**

1. 打开设置 (`Ctrl+,`)
2. 搜索 `eslintIntl.targetLanguage`
3. 从列表中选择语言
4. 运行 `ESLint Intl: Clear Translation Cache` 获取新语言的翻译

### Q: 翻译质量不好，怎么办？

**A:**

1. **升级模型**:

   ```json
   {
     "eslintIntl.openai.model": "gpt-4-turbo"
   }
   ```

2. **清除缓存**: 运行 `ESLint Intl: Clear Translation Cache`

3. **更换 API**: 尝试不同的 API 提供商

4. **反馈**: [提交 Issue](https://github.com) 报告具体问题

### Q: 如何显示原始英文错误？

**A:**

1. 打开设置 (`Ctrl+,`)
2. 搜索 `eslintIntl.showOriginal`
3. 启用此选项
4. 现在悬停时会显示原始和翻译后的消息

### Q: 支持 Vue/Angular/其他框架吗？

**A:**

ESLint Intl 支持任何 ESLint 能检查的文件类型:

- ✅ `.js`, `.jsx`
- ✅ `.ts`, `.tsx`
- ✅ `.vue` (如果 ESLint 配置了)
- ✅ `.html` (如果 ESLint 配置了)

配置 ESLint 后，ESLint Intl 会自动工作。

### Q: 如何禁用某些规则的翻译？

**A:**

暂不支持按规则禁用。解决方案:

1. 在项目的 ESLint 配置中禁用该规则
2. 或者禁用整个 ESLint Intl (`eslintIntl.enabled = false`)

## 缓存和性能

### Q: 缓存存储在哪里？

**A:**

缓存存储在 VS Code 的 `globalState` 中:

- **Windows**: `%APPDATA%\Code\User\globalStorage`
- **Mac**: `~/Library/Application Support/Code/User/globalStorage`
- **Linux**: `~/.config/Code/User/globalStorage`

缓存数据是 JSON 格式，会自动过期 (7 天)。

### Q: 如何清除缓存？

**A:**

1. 打开命令面板 (`Ctrl+Shift+P`)
2. 运行 `ESLint Intl: Clear Translation Cache`

或通过代码:

```typescript
vscode.commands.executeCommand("eslintIntl.clearCache");
```

### Q: 缓存会占用多少空间？

**A:**

很少:

- 平均每个翻译 ~100 字节
- 1000 个翻译 ~100KB
- VS Code 会自动管理

### Q: 可以禁用缓存吗？

**A:**

暂不支持禁用缓存。但你可以:

- 定期清除缓存
- 使用 `eslintIntl.showOriginal = true` 查看原始消息
- 提出 Issue 请求此功能

## 多语言和国际化

### Q: 支持哪些语言？

**A:**

ESLint Intl 目前支持 10 种语言:

- 简体中文 (zh-CN)
- 繁体中文 (zh-TW)
- 韩语 (ko)
- 德语 (de)
- 法语 (fr)
- 西班牙语 (es)
- 俄语 (ru)
- 葡萄牙语 (pt)
- 意大利语 (it)
- 阿拉伯语 (ar)

### Q: 如何申请添加新语言？

**A:**

[提交 Issue](https://github.com) 并:

1. 指定所需的语言
2. 提供语言代码 (ISO 639-1)
3. 说明为什么需要这个语言

我们会优先考虑有更多用户请求的语言。

### Q: RTL 语言 (阿拉伯语) 显示是否正确？

**A:**

阿拉伯语等 RTL 语言应该能正确显示，但需要:

1. VS Code 的 RTL 支持
2. 适当的字体支持
3. 系统语言设置

如果显示有问题，[提交 Issue](https://github.com)。

## 错误和故障排除

### Q: 出现 "API Key 无效" 错误？

**A:**

1. 检查 API Key 是否正确复制 (没有多余空格)
2. 确认 API Key 未过期
3. 检查 Base URL 是否正确
4. 尝试使用该 API Key 进行其他调用以验证

### Q: 出现 "无法连接到 API" 错误？

**A:**

1. 检查网络连接
2. 验证 Base URL 是否可访问
3. 检查是否需要代理配置
4. 查看防火墙或安全软件设置
5. 在浏览器中测试 Base URL 的可访问性

### Q: 出现 "JSON 解析错误"？

**A:**

1. API 返回的不是有效 JSON
2. 可能使用了错误的模型
3. 尝试更换模型或 API 提供商

### Q: 扩展崩溃或无响应？

**A:**

1. 查看输出日志: `ESLint Intl: Show Output Log`
2. 重启 VS Code
3. 禁用然后重新启用扩展
4. 清除缓存
5. 如果问题持续，[提交 Issue](https://github.com)

## 隐私和安全

### Q: 我的 API Key 是否安全？

**A:**

- API Key 存储在 VS Code 的安全存储中
- 绝不会发送到 ESLint Intl 服务器
- 只发送给你配置的 API 提供商

### Q: 代码是否会被发送到第三方？

**A:**

- 只有 ESLint 错误消息被发送到 API
- 不会发送完整的代码
- 错误消息通常不包含敏感信息

### Q: 翻译是否被记录？

**A:**

- 翻译在本地缓存
- 可以清除缓存: `ESLint Intl: Clear Translation Cache`
- 不会自动上传到任何地方

## 许可证和使用

### Q: ESLint Intl 是免费的吗？

**A:**

是的，ESLint Intl 本身完全免费，采用 MIT 许可证。

但使用 API 可能需要付费:

- **OpenAI**: 按使用量计费
- **Ollama**: 免费 (本地运行)
- **其他**: 取决于提供商

### Q: 可以用于商业用途吗？

**A:**

是的，MIT 许可证允许商业使用。

## 还有问题？

- 🔍 搜索现有 [Issues](https://github.com)
- 🐛 [提交新 Issue](https://github.com)
- 💬 [参与讨论](https://github.com)
- 📧 联系维护者

---

无法找到答案？请告诉我们！
