---
layout: home

hero:
  name: "ESLint Intl"
  text: "AI-powered ESLint Error Translation"
  tagline: 将 ESLint 错误消息实时翻译成你的语言
  image:
    src: /logo.svg
    alt: ESLint Intl
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com

features:
  - icon: 🌍
    title: 支持 10 种语言
    details: 简体中文、繁体中文、韩语、德语、法语、西班牙语、俄语、葡萄牙语、意大利语、阿拉伯语

  - icon: 💡
    title: 智能修复建议
    details: 翻译的同时提供简短而有用的修复方案，帮助你更快解决问题

  - icon: 💾
    title: 双层智能缓存
    details: 内存缓存快速响应 + 持久化缓存跨会话使用，7 天自动过期

  - icon: 🔧
    title: 兼容任意 API
    details: 支持任何 OpenAI 兼容的 API 服务，灵活部署

  - icon: ⚡
    title: 即时翻译
    details: 在编辑器中悬停就能看到翻译结果，无需额外操作

  - icon: 🎨
    title: 美观的界面
    details: 集成原生 VS Code 样式，提供一致的用户体验
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

html:not(.dark) {
  --vp-c-bg-mute: #f6f6f6;
}

.dark {
  --vp-c-bg-mute: #1a1a2e;
}
</style>
