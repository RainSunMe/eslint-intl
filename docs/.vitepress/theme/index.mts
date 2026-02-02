import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 你可以在这里添加自定义布局插槽
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 可以在这里注册全局组件或进行其他初始化
  }
} satisfies Theme
