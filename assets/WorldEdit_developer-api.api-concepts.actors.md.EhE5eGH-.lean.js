import{_ as o,c as r,o as s,j as e,a as t}from"./chunks/framework.LK_RS8Nx.js";const f=JSON.parse('{"title":"操作方","description":"","frontmatter":{},"headers":[],"relativePath":"WorldEdit/developer-api.api-concepts.actors.md","filePath":"WorldEdit/developer-api.api-concepts.actors.md"}'),d={name:"WorldEdit/developer-api.api-concepts.actors.md"};function c(i,a,l,p,n,m){return s(),r("div",null,a[0]||(a[0]=[e("h1",{id:"操作方",tabindex:"-1"},[t("操作方 "),e("a",{class:"header-anchor",href:"#操作方","aria-label":'Permalink to "操作方"'},"​")],-1),e("p",null,[e("code",null,"Actor"),t(" 可以是任何使用 WorldEdit 命令或调用它特定部分 API 的对象。通常来讲，操作方是玩家，但它们也可以是一个命令方块、控制台，甚至是一个实体。需要厘清的一个事实是，一个操作方对象并不需要知道它在世界的哪个位置，尽管很多操作方对象集成了 "),e("code",null,"Locatable"),t(" 用于获取位置。模组/插件并不经常需要向 WorldEdit API 提供操作方，但在某个对接例如 "),e("code",null,"EditSessionEvent"),t(" 事件（见“"),e("a",{href:"./developer-api.api-concepts.edit-sessions.html"},"编辑会话事件"),t("”章节）会提供操作方对象，这允许你基于操作方的不同而做出一些个性化的选择。")],-1)]))}const u=o(d,[["render",c]]);export{f as __pageData,u as default};
