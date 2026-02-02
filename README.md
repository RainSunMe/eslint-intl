# ESLint Intl - AI Translator

使用 AI 将 ESLint 错误消息翻译成多种语言的 VS Code 扩展。

## 安装

### 下载最新版本

- [v0.1.0](releases/eslint-intl-0.1.0.vsix) - 最新版本

在 VS Code 中使用：`Extensions > Install from VSIX...` 选择下载的 `.vsix` 文件。

## 功能

- 🌍 支持 10 种语言：简体中文、繁体中文、韩语、德语、法语、西班牙语、俄语、葡萄牙语、意大利语、阿拉伯语
- 💡 智能修复建议：翻译的同时提供简短的修复方案
- 💾 智能缓存：内存 + 持久化双层缓存，7 天有效期
- 🔧 支持任意 OpenAI 兼容 API

## 使用方法

1. 配置 API Key
2. 将鼠标悬停在 ESLint 错误上
3. 查看翻译和修复建议

## 配置项

在 VS Code 设置中搜索 `eslintIntl`：

| 配置项                      | 说明         | 默认值                      |
| --------------------------- | ------------ | --------------------------- |
| `eslintIntl.openai.baseUrl` | API 基础 URL | `https://api.openai.com/v1` |
| `eslintIntl.openai.apiKey`  | API Key      | -                           |
| `eslintIntl.openai.model`   | 使用的模型   | `gpt-4o-mini`               |
| `eslintIntl.enabled`        | 是否启用     | `true`                      |
| `eslintIntl.targetLanguage` | 目标语言     | `zh-CN`                     |
| `eslintIntl.showOriginal`   | 显示原文     | `false`                     |

## 命令

- `ESLint Intl: Clear Translation Cache` - 清除所有已缓存的翻译
- `ESLint Intl: Toggle Translation` - 切换翻译功能
- `ESLint Intl: Show Output Log` - 显示输出日志

## 开发

```bash
# 安装依赖
npm install

# 编译
npm run compile

# 监听模式
npm run watch
```

## 调试

1. 按 F5 启动扩展开发宿主
2. 打开一个有 ESLint 错误的文件
3. 悬停在错误上查看翻译和修复建议

## 打包发布

```bash
# 安装 vsce
npm install -g @vscode/vsce

# 打包
vsce package

# 会生成 eslint-intl-x.x.x.vsix
```

## 支持的 API

支持任何 OpenAI 兼容的 API：

- OpenAI
- Azure OpenAI
- 通义千问
- 智谱 AI
- Ollama (本地)
- 等等...

只需修改 `baseUrl` 和 `model` 配置即可。

## License

MIT
