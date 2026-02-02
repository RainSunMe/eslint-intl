---
layout: home

hero:
  name: "ESLint Intl"
  text: "AI-powered ESLint Error Translation"
  tagline: 將 ESLint 錯誤訊息實時翻譯成你的語言
  image:
    src: /logo.svg
    alt: ESLint Intl
  actions:
    - theme: brand
      text: 快速開始
      link: /zh-TW/guide/getting-started
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com

features:
  - icon: 🌍
    title: 支援 10 種語言
    details: 簡體中文、繁體中文、韓語、德語、法語、西班牙語、俄語、葡萄牙語、意大利語、阿拉伯語

  - icon: 💡
    title: 智慧修復建議
    details: 翻譯的同時提供簡短而有用的修復方案，幫助你更快解決問題

  - icon: 💾
    title: 雙層智慧快取
    details: 記憶體快取快速回應 + 持久化快取跨工作階段使用，7 天自動過期

  - icon: 🔧
    title: 相容任意 API
    details: 支援任何 OpenAI 相容的 API 服務，靈活部署

  - icon: ⚡
    title: 即時翻譯
    details: 在編輯器中懸停就能看到翻譯結果，無需額外操作

  - icon: 🎨
    title: 美觀的介面
    details: 整合原生 VS Code 樣式，提供一致的使用者體驗
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
