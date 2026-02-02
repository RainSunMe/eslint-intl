# 安装指南

## 系统要求

- VS Code 1.85.0 或更高版本
- Node.js 16+ (仅在开发时需要)

## 安装方式

### 方式 1: VS Code Marketplace (推荐)

1. 打开 VS Code
2. 按 `Ctrl+Shift+X` (Windows/Linux) 或 `Cmd+Shift+X` (Mac) 打开扩展面板
3. 搜索 "ESLint Intl"
4. 点击"安装"按钮

### 方式 2: 手动安装 VSIX 文件

1. 从 [GitHub Releases](https://github.com/RainSunMe/eslint-intl/releases) 下载最新的 `.vsix` 文件
2. 在 VS Code 中：
   - 按 `Ctrl+Shift+X` 打开扩展面板
   - 点击右上角的 `...` 菜单
   - 选择"从 VSIX 安装..."
   - 选择下载的 `.vsix` 文件

### 方式 3: 命令行安装

```bash
# 安装特定版本
code --install-extension eslint-intl-0.1.0.vsix

# 或者从 Marketplace 安装
code --install-extension mimo.eslint-intl
```

## 首次配置

安装后需要进行以下配置才能使用：

### 1. 配置 API Key

> **重要**: ESLint Intl 需要 OpenAI 兼容的 API Key 来翻译错误消息。

打开 VS Code 设置:

- Windows/Linux: `Ctrl+,`
- Mac: `Cmd+,`

搜索 `eslintIntl.openai.apiKey` 并输入你的 API Key。

### 2. 配置 API 信息 (可选)

如果使用非官方 OpenAI API，配置以下项：

- **eslintIntl.openai.baseUrl**: API 的基础 URL
- **eslintIntl.openai.model**: 要使用的模型名称

### 3. 选择语言

搜索 `eslintIntl.targetLanguage` 并选择你想要的目标语言。

## 升级

### 从 Marketplace 升级

VS Code 会自动检查和安装更新。您也可以手动升级：

1. 打开扩展面板
2. 搜索 "ESLint Intl"
3. 如果有更新，点击"更新"按钮

### 升级到新版本

从一个版本升级到另一个版本不需要特殊操作，新版本会自动替换旧版本。

**注意**: 缓存会被保留，除非您手动清除。

## 卸载

### 通过 UI 卸载

1. 打开扩展面板 (`Ctrl+Shift+X`)
2. 搜索 "ESLint Intl"
3. 点击齿轮图标
4. 选择"卸载"

### 通过命令行卸载

```bash
code --uninstall-extension mimo.eslint-intl
```

### 清除数据

卸载时，以下数据会被保留（可选删除）：

- 缓存的翻译 (VS Code globalState)
- 设置和配置

手动清除所有数据：

1. 打开命令面板 (`Ctrl+Shift+P`)
2. 输入 "ESLint Intl: Clear Translation Cache"
3. 按 Enter 确认

## 故障排除

### 扩展无法加载

- 检查 VS Code 版本是否 >= 1.85.0
- 尝试禁用然后重新启用扩展
- 查看输出日志: `ESLint Intl: Show Output Log`

### API Key 配置错误

- 确保 API Key 正确且有效
- 检查 Base URL 是否正确
- 查看 [API 配置指南](/guide/configuration)

### 翻译无法工作

- 检查 ESLint Intl 是否启用: `eslintIntl.enabled = true`
- 确认文件中有 ESLint 错误
- 查看输出日志了解详细错误信息

### 性能问题

- 清除缓存: `ESLint Intl: Clear Translation Cache`
- 检查 API 响应时间
- 查看 [常见问题](/guide/faq) 中的性能优化建议

## 开发版本安装

如果你想安装开发版本或从源代码构建：

```bash
# 克隆仓库
git clone https://github.com/RainSunMe/eslint-intl.git
cd eslint-intl

# 安装依赖
npm install

# 打包 VSIX 文件
npm install -g @vscode/vsce
vsce package

# 安装本地 VSIX
code --install-extension eslint-intl-*.vsix
```

## 需要帮助？

- 📖 查看 [常见问题](/guide/faq)
- 🐛 [提交 Issue](https://github.com/RainSunMe/eslint-intl/issues)
- 💬 [参与讨论](https://github.com/RainSunMe/eslint-intl/discussions)
