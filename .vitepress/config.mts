import { defineConfig } from 'vitepress'
import { nav, sidebar, head, socialLinks } from './configs'

export default defineConfig({
  // 站点名称
  title: '玄学宝典',

  // 站点语言
  lang: 'cn',

  // 网站头部
  head,

  // 站点介绍
  description: '',

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  // 源目录
  srcDir: 'src',

  // markdown-it插件配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark-dimmed'
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  //'force-dark'强制开启深色模式 false强制开启浅色模式
  appearance: 'force-dark',

  // 站点地图
  sitemap: {
    hostname: 'https://xx.theovan.cn'
  },

  // 主题配置
  themeConfig: {
    // // logo
    logo: 'https://m.theovan.cn/avatar.png',

    // 社交链接
    socialLinks,

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    editLink: {
      pattern: 'https://github.com/Theo-messi/Metaphysical-Book/blob/main/src/:path',
      text: '为此页提供修改建议'
    },

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdated: { text: '上次更新' },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 外观
    darkModeSwitchLabel: '外观',

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 导航栏
    nav,

    // 侧边栏
    sidebar,

    // 底部信息
    footer: {
      message: `<font size="2">Released under the <a href="https://github.com/Theo-messi/Metaphysical-Book/blob/main/License" target="_blank">MIT License</a>.</font size="2">`,
      copyright: `<font size="2">Copyright © 2019 - ${new Date().getFullYear()} <a href="https://github.com/Theo-messi" target="_blank">Theo-Messi</a></br>
      <a href="https://111.com" target="_blank">鄂ICP备2022005864号-2</a>｜<a href="https://111.com" target="_blank">鄂公网安备12011202000677号</a></font size="2">`
    }
  }
})
