// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Tab, Tabs } from 'vue3-tabs-component'
import '@red-asuka/vitepress-plugin-tabs/dist/style.css'
import { NolebaseBreadcrumbs } from '@nolebase/vitepress-plugin-breadcrumbs/client'
import { h } from 'vue'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import errorLayout from './error.vue'
import '../theme/theme.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Tab', Tab)
    app.component('Tabs', Tabs)
    app.use(NolebaseGitChangelogPlugin) 
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 将面包屑导航组件添加到文档上方
      'doc-before': () => h(NolebaseBreadcrumbs),
      'not-found': () => h(errorLayout), 
      /* 
        This part of code is contributed & suggested by Discord@brc_dd in VueLand, thanks!
      */
    })
  }
} satisfies Theme