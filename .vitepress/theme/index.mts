// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Tab, Tabs } from 'vue3-tabs-component'
import '@red-asuka/vitepress-plugin-tabs/dist/style.css'
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import { NolebaseBreadcrumbs } from '@nolebase/vitepress-plugin-breadcrumbs/client'
import { h } from 'vue'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Tab', Tab)
    app.component('Tabs', Tabs)
    app.use(ElementPlus)
    app.use(NolebaseGitChangelogPlugin) 
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 将面包屑导航组件添加到文档上方
      'doc-before': () => h(NolebaseBreadcrumbs), 
    })
  }
} satisfies Theme