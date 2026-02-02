import { defineConfig } from "vitepress";

export default defineConfig({
  title: "ESLint Intl",
  description: "AI-powered internationalization for ESLint error messages",

  ignoreDeadLinks: true,

  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    ["meta", { name: "theme-color", content: "#3c366b" }],
  ],

  appearance: "dark", // 支持深色模式
  lastUpdated: true, // 显示最后更新时间

  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/",
      themeConfig: {
        nav: [
          { text: "首页", link: "/" },
          { text: "指南", link: "/guide/getting-started" },
          { text: "配置", link: "/guide/configuration" },
          { text: "常见问题", link: "/guide/faq" },
        ],
        footer: {
          message: "采用 MIT 许可证发布",
          copyright: "Copyright © 2024-present",
        },
        lastUpdatedText: "最后更新",
      },
    },
    "en-US": {
      label: "English",
      lang: "en-US",
      link: "/en-US/",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en-US/" },
          { text: "Guide", link: "/en-US/guide/getting-started" },
          { text: "Configuration", link: "/en-US/guide/configuration" },
          { text: "FAQ", link: "/en-US/guide/faq" },
        ],
        footer: {
          message: "Released under the MIT License",
          copyright: "Copyright © 2024-present",
        },
        lastUpdatedText: "Last Updated",
      },
    },
    "zh-TW": {
      label: "繁體中文",
      lang: "zh-TW",
      link: "/zh-TW/",
      themeConfig: {
        nav: [
          { text: "首頁", link: "/zh-TW/" },
          { text: "指南", link: "/zh-TW/guide/getting-started" },
          { text: "配置", link: "/zh-TW/guide/configuration" },
          { text: "常見問題", link: "/zh-TW/guide/faq" },
        ],
        footer: {
          message: "採用 MIT 許可證發佈",
          copyright: "Copyright © 2024-present",
        },
        lastUpdatedText: "最後更新",
      },
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "ESLint Intl",

    // 搜索功能
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: { selectText: "选择", navigateText: "切换" },
              },
            },
          },
          "en-US": {
            translations: {
              button: { buttonText: "Search", buttonAriaLabel: "Search" },
              modal: {
                noResultsText: "No results found",
                resetButtonTitle: "Reset search",
                footer: {
                  selectText: "to select",
                  navigateText: "to navigate",
                },
              },
            },
          },
          "zh-TW": {
            translations: {
              button: { buttonText: "搜尋文檔", buttonAriaLabel: "搜尋文檔" },
              modal: {
                noResultsText: "無法找到相關結果",
                resetButtonTitle: "清除查詢條件",
                footer: { selectText: "選擇", navigateText: "切換" },
              },
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/RainSunMe/eslint-intl" },
    ],

    // 编辑链接
    editLink: {
      pattern: "https://github.com/RainSunMe/eslint-intl/edit/main/docs/:path",
    },

    // 自定义页脚
    footer: {
      message: "采用 MIT 许可证发布",
      copyright: "Copyright © 2024-present",
    },

    sidebar: {
      "/guide/": [
        {
          text: "开始使用",
          items: [
            { text: "快速开始", link: "/guide/getting-started" },
            { text: "安装", link: "/guide/installation" },
          ],
        },
        {
          text: "配置",
          items: [
            { text: "配置项说明", link: "/guide/configuration" },
            { text: "支持的语言", link: "/guide/languages" },
          ],
        },
        {
          text: "使用",
          items: [
            { text: "基本用法", link: "/guide/usage" },
            { text: "命令", link: "/guide/commands" },
          ],
        },
        {
          text: "开发",
          items: [
            { text: "开发指南", link: "/guide/development" },
            { text: "常见问题", link: "/guide/faq" },
          ],
        },
      ],

      "/en-US/guide/": [
        {
          text: "Getting Started",
          items: [
            { text: "Quick Start", link: "/en-US/guide/getting-started" },
            { text: "Installation", link: "/en-US/guide/installation" },
          ],
        },
        {
          text: "Configuration",
          items: [
            { text: "Configuration Guide", link: "/en-US/guide/configuration" },
            { text: "Supported Languages", link: "/en-US/guide/languages" },
          ],
        },
        {
          text: "Usage",
          items: [
            { text: "Basic Usage", link: "/en-US/guide/usage" },
            { text: "Commands", link: "/en-US/guide/commands" },
          ],
        },
        {
          text: "Development",
          items: [
            { text: "Developer Guide", link: "/en-US/guide/development" },
            { text: "FAQ", link: "/en-US/guide/faq" },
          ],
        },
      ],

      "/zh-TW/guide/": [
        {
          text: "開始使用",
          items: [
            { text: "快速開始", link: "/zh-TW/guide/getting-started" },
            { text: "安裝", link: "/zh-TW/guide/installation" },
          ],
        },
        {
          text: "配置",
          items: [
            { text: "配置項說明", link: "/zh-TW/guide/configuration" },
            { text: "支援的語言", link: "/zh-TW/guide/languages" },
          ],
        },
        {
          text: "使用",
          items: [
            { text: "基本用法", link: "/zh-TW/guide/usage" },
            { text: "命令", link: "/zh-TW/guide/commands" },
          ],
        },
        {
          text: "開發",
          items: [
            { text: "開發指南", link: "/zh-TW/guide/development" },
            { text: "常見問題", link: "/zh-TW/guide/faq" },
          ],
        },
      ],
    },
  },
});
