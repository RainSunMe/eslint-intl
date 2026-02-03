# GitHub Actions 工作流说明

## 概述

本仓库包含两个 GitHub Actions 工作流，用于自动化构建、测试和发布流程。

## 工作流文件

### 1. CI 工作流 (`ci.yml`)

#### 触发条件
- 推送到 `master`、`main` 或 `develop` 分支
- 针对 `master`、`main` 或 `develop` 分支的 Pull Request

#### 功能
- 在 Node.js 18.x 和 20.x 上运行测试
- 运行 ESLint 代码检查
- 编译 TypeScript 代码
- 构建 VSIX 扩展包
- 上传 VSIX 文件作为构建产物（保留 7 天）

#### 目的
确保每次代码变更都能成功构建，并且满足代码质量标准。

### 2. 发布工作流 (`release.yml`)

#### 触发条件
- 推送到 `master` 或 `main` 分支（排除文档和许可证变更）

#### 自动版本管理
工作流会根据 [Conventional Commits](https://www.conventionalcommits.org/) 规范自动确定版本号：

- **Major 版本** (x.0.0): 包含破坏性变更
  - 提交信息包含 `BREAKING CHANGE:`
  - 提交类型后跟 `!` (例如 `feat!:` 或 `fix!:`)
  
- **Minor 版本** (0.x.0): 新功能（向后兼容）
  - 提交信息以 `feat:` 开头
  
- **Patch 版本** (0.0.x): Bug 修复或其他变更
  - 提交信息以 `fix:` 开头
  - 其他类型的提交 (chore, docs, style, refactor, perf, test, build, ci 等)

#### 发布流程

1. **确定版本号**: 分析自上次标签以来的提交信息
2. **更新 package.json**: 自动更新版本号
3. **编译代码**: 运行 lint 和 TypeScript 编译
4. **构建 VSIX**: 生成 VS Code 扩展包
5. **提交版本变更**: 提交更新后的 package.json
6. **推送版本提交**: 将版本变更推送到仓库
7. **生成更新日志**: 从提交信息生成 changelog
8. **创建标签**: 创建并推送 git 标签 (例如 `v0.2.0`)
9. **创建 GitHub Release**: 自动创建 Release 并附加 VSIX 文件

## 使用指南

### 提交信息规范

为了让自动版本管理正常工作，请遵循 Conventional Commits 规范：

```bash
# 新功能 (minor bump)
git commit -m "feat: 添加多语言翻译功能"
git commit -m "feat(translator): 支持自定义 API endpoint"

# Bug 修复 (patch bump)
git commit -m "fix: 修复缓存过期问题"
git commit -m "fix(cache): 处理空值情况"

# 破坏性变更 (major bump)
git commit -m "feat!: 重构 API 接口

BREAKING CHANGE: API 参数结构已改变"

# 其他变更 (patch bump)
git commit -m "chore: 更新依赖"
git commit -m "docs: 更新 README"
git commit -m "style: 格式化代码"
```

### 发布流程

1. **开发功能**: 在功能分支上开发
2. **创建 PR**: 提交 Pull Request 到 `main` 分支
3. **CI 检查**: CI 工作流会自动运行测试和构建
4. **合并 PR**: 审查通过后合并到 `main`
5. **自动发布**: 发布工作流自动运行：
   - 确定新版本号
   - 更新 package.json
   - 构建 VSIX
   - 创建 Git 标签
   - 创建 GitHub Release

### 查看发布

发布完成后，您可以：

1. 在 **Releases** 页面查看新版本
2. 下载 VSIX 文件
3. 查看自动生成的更新日志

### 手动触发发布

如果需要手动创建发布（不推荐），可以：

1. 手动更新 `package.json` 中的版本号
2. 提交并推送到 `main` 分支
3. 工作流会检测到这是首次发布并创建相应的标签和 Release

## 工作流配置

### CI 工作流权限
- `contents: read` - 只读访问仓库内容

### 发布工作流权限
- `contents: write` - 写入权限，用于创建标签和 Release

## 依赖工具

- **Node.js**: 18.x 和 20.x
- **@vscode/vsce**: VS Code 扩展打包工具
- **GitHub Actions**: 
  - `actions/checkout@v4`
  - `actions/setup-node@v4`
  - `actions/upload-artifact@v4`
  - `softprops/action-gh-release@v1`

## 故障排查

### CI 失败
- 检查 ESLint 错误
- 检查 TypeScript 编译错误
- 查看 Actions 日志了解详细信息

### 发布失败
- 确保提交信息遵循 Conventional Commits 规范
- 检查是否有权限问题
- 查看工作流日志了解具体错误

## 最佳实践

1. **使用规范的提交信息**: 确保提交信息符合 Conventional Commits
2. **小而频繁的提交**: 便于生成清晰的更新日志
3. **及时合并**: 避免多个 PR 同时合并导致版本冲突
4. **测试 PR**: 在合并前确保 CI 检查通过

## 相关文档

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [VS Code Extension Publishing](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
