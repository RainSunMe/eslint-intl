# 发布流程指南

## 🚀 自动化发布步骤

本项目使用 GitHub Actions 实现完全自动化的发布流程。

### 前置准备

#### 1. 获取 VS Code Marketplace 个人访问令牌（PAT）

1. 访问 [Azure DevOps](https://dev.azure.com/)
2. 点击右上角的用户设置 → Personal access tokens
3. 点击 "New Token"
4. 配置如下：
   - **Name**: `vscode-marketplace-token`
   - **Scopes**: 选择 `Marketplace` → `Manage`
   - **Expiration**: 根据需要选择有效期
5. 复制生成的令牌

#### 2. 添加 GitHub Secrets

1. 访问你的 GitHub 仓库
2. 进入 **Settings** → **Secrets and variables** → **Actions**
3. 点击 "New repository secret"
4. 添加以下 secret：
   - **Name**: `VSCODE_MARKETPLACE_TOKEN`
   - **Secret**: 粘贴上面复制的 PAT 令牌

### 发布步骤

#### 方式一：通过标签触发发布（推荐）

1. **更新版本号**

   ```bash
   npm version minor  # 或 patch/major
   ```

2. **推送到 GitHub**

   ```bash
   git push origin main --tags
   ```

3. **工作流自动运行**
   - 在 **Actions** 选项卡中查看发布进度
   - 自动发布到 VS Code Marketplace
   - 自动在 GitHub Releases 中创建版本

#### 方式二：手动触发发布

1. 进入仓库的 **Actions** 选项卡
2. 选择 **Publish Extension** 工作流
3. 点击 "Run workflow"
4. 选择分支（通常是 `main`）并运行

### 版本号约定

遵循 [Semantic Versioning](https://semver.org/)：

- **Patch** (`0.1.x`): 修复 bug

  ```bash
  npm version patch
  ```

- **Minor** (`0.x.0`): 添加新功能（向后兼容）

  ```bash
  npm version minor
  ```

- **Major** (`x.0.0`): 重大变更（可能破坏兼容性）
  ```bash
  npm version major
  ```

### 标签命名约定

标签应以 `v` 开头，如：

- `v0.1.0` - 稳定版
- `v0.2.0-alpha` - Alpha 测试版
- `v0.2.0-beta` - Beta 测试版
- `v1.0.0-rc1` - Release Candidate

包含 `pre`、`alpha`、`beta` 的标签会自动标记为预发布版本。

## 📋 发布前清单

发布前请确保：

- [ ] 所有代码已通过 ESLint 检查

  ```bash
  npm run lint
  ```

- [ ] 代码已成功编译

  ```bash
  npm run compile
  ```

- [ ] 更新了 `package.json` 中的版本号

  ```bash
  npm version minor
  ```

- [ ] 更新了 `CHANGELOG.md`（如果有）

- [ ] 提交了所有更改

  ```bash
  git add .
  git commit -m "chore: release v0.2.0"
  ```

- [ ] 推送到 GitHub
  ```bash
  git push origin main --tags
  ```

## 🔍 监控发布过程

1. **实时监控**: 在 GitHub Actions 选项卡中查看工作流运行状态
2. **失败重试**: 如果发布失败，修复问题后可以重新运行工作流
3. **版本验证**: 发布完成后，访问 [VS Code Marketplace](https://marketplace.visualstudio.com) 验证新版本

## 📊 工作流说明

### CI 工作流 (ci.yml)

- **触发条件**:
  - 推送到 `main` 或 `develop` 分支
  - 提交 Pull Request 到 `main` 或 `develop` 分支

- **执行步骤**:
  1. 检出代码
  2. 安装 Node.js 18 和 20 的双版本测试
  3. 安装依赖
  4. 运行 ESLint
  5. 编译 TypeScript
  6. 打包 `.vsix` 文件

### 发布工作流 (publish.yml)

- **触发条件**:
  - 推送以 `v` 开头的标签（如 `v0.1.0`）
  - 手动触发（通过 GitHub Actions UI）

- **执行步骤**:
  1. 检出代码
  2. 安装 Node.js 和依赖
  3. 运行代码检查和编译
  4. 提取版本号并更新 `package.json`
  5. 安装 VSCE CLI
  6. 打包扩展
  7. **发布到 VS Code Marketplace**
  8. 在 GitHub 上创建 Release

## 🔐 安全注意事项

- **不要**将 PAT 令牌提交到代码库
- **只在** GitHub Secrets 中存储敏感信息
- **定期**更新 PAT 令牌的过期时间
- **立即**轮换泄露的令牌

## 📝 常见问题

### Q: 如何取消已启动的发布？

A: 访问 Actions 选项卡，点击正在运行的工作流，然后点击 "Cancel workflow"。

### Q: 发布失败了怎么办？

A:

1. 查看工作流日志中的错误信息
2. 修复问题
3. 重新标记和推送标签：`git tag -d v0.1.0 && git push --delete origin v0.1.0`
4. 创建新标签并推送

### Q: 如何发布预发布版本？

A: 使用包含 `pre`、`alpha`、`beta` 等的标签，如 `v0.2.0-beta.1`。

### Q: 如何同时发布到 GitHub 和 VS Code Marketplace？

A: 工作流已配置为自动执行此操作。发布到 Marketplace 后，会自动在 GitHub Releases 中创建版本。

## 📚 更多资源

- [VS Code 官方发布指南](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [VSCE 文档](https://github.com/microsoft/vscode-vsce)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Semantic Versioning](https://semver.org/)
