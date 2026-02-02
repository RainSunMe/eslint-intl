---
layout: home

hero:
  name: "ESLint Intl"
  text: "AI-powered ESLint Error Translation"
  tagline: Translate ESLint error messages to your language in real-time
  image:
    src: /logo.svg
    alt: ESLint Intl
  actions:
    - theme: brand
      text: Get Started
      link: /en-US/guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/RainSunMe/eslint-intl

features:
  - icon: 🌍
    title: Support for 10 Languages
    details: Simplified Chinese, Traditional Chinese, Korean, German, French, Spanish, Russian, Portuguese, Italian, Arabic

  - icon: 💡
    title: Smart Fix Suggestions
    details: Provides concise and helpful fix suggestions alongside translations to solve issues faster

  - icon: 💾
    title: Dual-layer Smart Cache
    details: Memory cache for instant response + persistent cache across sessions with 7-day auto-expiration

  - icon: 🔧
    title: Compatible with Any API
    details: Support for any OpenAI-compatible API service, flexible deployment options

  - icon: ⚡
    title: Instant Translation
    details: See translations immediately by hovering over errors in the editor, no extra steps needed

  - icon: 🎨
    title: Beautiful UI
    details: Integrates with native VS Code styling for a consistent user experience
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
