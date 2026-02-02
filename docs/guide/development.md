# 开发指南

本指南帮助开发者了解 ESLint Intl 的架构、设置开发环境和贡献代码。

## 项目架构

```
src/
├── extension.ts       # 入口：VS Code 扩展主文件
├── translator.ts      # 翻译核心：OpenAI API 调用
├── cache.ts          # 缓存系统：双层缓存管理
└── logger.ts         # 日志工具：输出通道
```

### 核心模块

#### `extension.ts` - 扩展入口

- 激活扩展
- 注册 HoverProvider
- 管理命令
- 处理生命周期

#### `translator.ts` - 翻译引擎

- 调用 OpenAI API
- 构建翻译提示词
- 解析响应 JSON
- 管理请求去重

#### `cache.ts` - 缓存管理

- 内存缓存 (快速)
- 持久化缓存 (globalState)
- 7 天过期时间

#### `logger.ts` - 日志工具

- 输出通道管理
- 结构化日志记录

## 开发环境设置

### 系统要求

- Node.js 16+
- npm 7+
- VS Code 1.85.0+
- Git

### 安装步骤

```bash
# 1. 克隆仓库
git clone https://github.com/RainSunMe/eslint-intl.git
cd eslint-intl

# 2. 安装依赖
npm install

# 3. 安装 VS Code CLI
npm install -g @vscode/vsce

# 4. 打开项目
code .
```

## 开发命令

```bash
# 编译 TypeScript
npm run compile

# 监听文件变化并编译
npm run watch

# 运行 ESLint 检查
npm run lint

# 打包 VSIX 文件
vsce package

# 发布到 Marketplace
vsce publish
```

## 调试

### 启动调试器

按 `F5` 或点击 Debug 侧边栏的 "Run and Debug"

这会打开一个新的 VS Code 窗口 (Extension Development Host)

### 调试技巧

1. **设置断点**: 在代码中点击行号左侧
2. **查看变量**: 在调试器的 "Variables" 面板中
3. **查看输出**: 在主窗口打开 "ESLint Intl" 输出通道
4. **重新加载**: 在 Development Host 中按 `Ctrl+R`

### 示例调试代码

```typescript
// 在 extension.ts 中设置断点
const message = diagnostic.message;
console.log("Debug:", message); // 会在输出中显示
```

## 代码约定

### TypeScript

- 使用 `const` 而非 `let`
- 显式类型注解用于复杂类型
- 使用接口定义对象形状

```typescript
interface Config {
  apiKey: string;
  targetLanguage: string;
}
```

### 国际化 (i18n)

所有用户面向的字符串必须使用 `vscode.l10n.t()`:

```typescript
// ✅ 正确
log(vscode.l10n.t('Translating: "{0}"', message));

// ❌ 错误
log("Translating: " + message);
```

### 日志记录

使用提供的日志函数:

```typescript
import { log, logError } from "./logger";

log("Translation completed");
logError("Failed to fetch: " + error.message);
```

### 错误处理

Promise 应该 resolve 为 `null` 而非抛出异常:

```typescript
// ✅ 好的
async function translate() {
  try {
    const result = await api.call();
    return result;
  } catch (error) {
    logError(error.message);
    return null; // 优雅降级
  }
}
```

## 添加新功能

### 添加新命令

1. 在 `package.json` 中注册:

```json
{
  "contributes": {
    "commands": [
      {
        "command": "eslintIntl.newCommand",
        "title": "%command.newCommand%"
      }
    ]
  }
}
```

2. 在 `extension.ts` 中实现:

```typescript
vscode.commands.registerCommand("eslintIntl.newCommand", async () => {
  // 实现逻辑
});
```

3. 在 `package.nls*.json` 中添加翻译

### 添加新配置项

1. 在 `package.json` 中:

```json
{
  "contributes": {
    "configuration": {
      "properties": {
        "eslintIntl.newOption": {
          "type": "string",
          "default": "value",
          "description": "%config.newOption%"
        }
      }
    }
  }
}
```

2. 在所有 `package.nls*.json` 中添加描述

3. 在代码中访问:

```typescript
const config = vscode.workspace.getConfiguration("eslintIntl");
const value = config.get<string>("newOption");
```

### 添加新语言

1. 更新 `package.json` 中的 `targetLanguage.enum`
2. 在 `translator.ts` 的 `LANGUAGE_NAMES` 中添加
3. 在所有 `l10n/bundle.l10n.*.json` 中添加翻译

## 国际化文件结构

```
l10n/
├── bundle.l10n.json          # 英文 (默认)
├── bundle.l10n.zh-cn.json    # 简体中文
├── bundle.l10n.zh-tw.json    # 繁体中文
└── bundle.l10n.*.json        # 其他语言

package.nls.json              # 英文 (清单)
package.nls.zh-cn.json        # 简体中文 (清单)
package.nls.zh-tw.json        # 繁体中文 (清单)
```

## 测试

### 手动测试

1. 按 `F5` 启动 Extension Development Host
2. 打开 JavaScript 或 TypeScript 文件
3. 在有 ESLint 错误的地方悬停

### 自动化测试

_项目当前未包含自动化测试，贡献者可以添加_

建议使用:

- `Jest` 用于单元测试
- `@vscode/test-electron` 用于集成测试

## 构建和发布

### 本地测试

```bash
# 编译
npm run compile

# 打包
vsce package

# 在 VS Code 中本地安装
code --install-extension eslint-intl-*.vsix
```

### 发布到 Marketplace

```bash
# 登录
vsce login <publisher-name>

# 发布
vsce publish

# 或发布特定版本
vsce publish minor  # 自动增加次版本号
```

## 代码审查检查清单

提交 PR 之前，确保:

- [ ] 代码通过 ESLint: `npm run lint`
- [ ] TypeScript 编译无错误: `npm run compile`
- [ ] 所有字符串已 i18n 化: `vscode.l10n.t()`
- [ ] 新文件添加了适当的许可证头
- [ ] 更新了 `README.md` (如果需要)
- [ ] 更新了所有相关翻译文件

## 常见问题

### Q: 如何本地测试 API 集成？

模拟 API 响应:

```typescript
// 在测试中
const mockApi = {
  translate: async () => ({
    translation: "Mock translation",
    fix: "Mock fix",
  }),
};
```

### Q: 如何调试缓存问题？

查看缓存内容:

```typescript
const cached = context.globalState.get("translations");
console.log(JSON.stringify(cached, null, 2));
```

### Q: 如何贡献翻译？

编辑相应的 `bundle.l10n.*.json` 文件并提交 PR。

## 资源

- [VS Code Extension API](https://code.visualstudio.com/api)
- [VS Code 国际化文档](https://code.visualstudio.com/docs/extensibility/l10n)
- [TypeScript 文档](https://www.typescriptlang.org/docs/)
- [OpenAI API 文档](https://platform.openai.com/docs)

## 获取帮助

- 📖 查看现有代码和注释
- 🐛 [提交 Issue](https://github.com/RainSunMe/eslint-intl/issues)
- 💬 [参与讨论](https://github.com/RainSunMe/eslint-intl/discussions)
- 📧 联系维护者

---

感谢你对 ESLint Intl 的贡献！
