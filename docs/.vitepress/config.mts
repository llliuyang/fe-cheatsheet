import { defineConfig } from 'vitepress'

import { bili } from './extraSvg'
import NavConfig from './config/navConfig'
import SidebarConfig from './config/sidebarConfig'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端备忘录",
  description: "卡片式查询知识点,vue,react,js,css",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    search: {
      provider: 'local',
    },
    nav: NavConfig,
    sidebar: SidebarConfig,
    footer: {
      message: '轻松学习，高效记忆，让知识主动进入大脑',
      copyright: 'Copyright © 2024 前端备忘录 | 版权所有'
    },
    socialLinks: [
      { icon: { svg: bili }, link: 'https://space.bilibili.com/30569760' },
      { icon: 'github', link: 'https://github.com/llliuyang' }
    ],
    lastUpdatedText: '最后更新于：',
    docFooter:{
      prev: '上一篇',
      next: '下一篇'
    },
    outline:{
      level: 'deep',
      label: '页面导航'
    }
  }
})
