import { defineConfig } from 'vitepress'

import { bili } from './extraSvg'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端备忘录",
  titleTemplate: '让知识主动进入大脑',
  description: "卡片式查询知识点,vue,react,js,css",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    search: {
      provider: 'local',
    },
    nav: [
      { text: '🔥CSS', link: '/css' },
      { text: 'JS', link: '' },
      { text: 'Vue', link: '' },
      { text: 'React', link: '' },
      { text: '前端算法', link: '' },
      { text: '设计模式', link: '' },
      {
        text: '🔥面试题',
        items: [
          {
            text: '全真题库', items: [
              { text: 'CSS 基础', link: '' },
              { text: 'Javascript', link: '' },
              { text: 'Vue 常考点', link: '' },
              { text: 'React 面试题', link: '' },
            ]
          },
          {
            text: '手写专题', items: [
              { text: '高频手写题', link: '' }
            ]
          },
        ]
      },
      { text: '踩坑卡片', link: '' },
      {
        text: '资源整理',
        items: [
          { text: '我的配置', link: '' },
          { text: '书籍阅读', link: '' },
          { text: '学习网站', link: '' },
          { text: '工具推荐', link: '' },
          { text: '文档索引', link: '' },
          { text: '优质博客', link: '' }
        ]
      },
      { text: '读书笔记', link: '' },
      { text: '关于我', link: '' }
    ],

    footer: {
      message: '轻松学习，高效记忆，让知识主动进入大脑',
      copyright: 'Copyright © 2024 前端备忘录 | 版权所有'
    },

    socialLinks: [
      { icon: { svg: bili }, link: 'https://space.bilibili.com/30569760' },
      { icon: 'github', link: 'https://github.com/llliuyang' }
    ]
  }
})
