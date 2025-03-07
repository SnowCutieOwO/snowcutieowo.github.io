import{_ as n,C as a,c as r,o as s,b1 as l,G as o}from"./chunks/framework.CC7vnuC4.js";const m=JSON.parse('{"title":"顾虑","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/LibreLogin"},{"title":"顾虑","link":"/LibreLogin/considerations"}]},"headers":[],"relativePath":"LibreLogin/considerations.md","filePath":"LibreLogin/considerations.md"}'),p={name:"LibreLogin/considerations.md"};function c(d,e,_,b,g,h){const t=a("NolebaseGitContributors"),i=a("NolebaseGitChangelog");return s(),r("div",null,[e[0]||(e[0]=l('<h1 id="顾虑" tabindex="-1">顾虑 <a class="header-anchor" href="#顾虑" aria-label="Permalink to &quot;顾虑&quot;">​</a></h1><h2 id="mojang-api" tabindex="-1">Mojang API <a class="header-anchor" href="#mojang-api" aria-label="Permalink to &quot;Mojang API&quot;">​</a></h2><p>Mojang API 有 <strong>每 10 分钟单 IP 600 次</strong>的访问限制。</p><p>若插件达到这个速率，它会尝试从单独的 API 中获取玩家数据。</p><h2 id="数据冲突" tabindex="-1">数据冲突 <a class="header-anchor" href="#数据冲突" aria-label="Permalink to &quot;数据冲突&quot;">​</a></h2><p>假设有这样一个情况：</p><ul><li>一个叫做 Mati 的玩家，启用了免密登录。</li><li>一个叫做 Maty 的玩家，关闭了免密登录。</li></ul><p>玩家 Mati 改变了想法，将自己改名为 Maty。</p><p>他尝试进入服务器，正常情况下数据应该会被迁移至这个账号。但是，这里已经有一个叫做 Maty 的玩家了。</p><p>LibreLogin 将他踢出，表明他的账号存在数据冲突。</p><p>管理员需要手动解决这个问题。这里有如下几种方法可供参考。</p><ul><li>联系对应玩家并将其数据转移到新名称下。</li><li>直接删除对应玩家。</li></ul><p>在解决问题后，LibreLogin 会自动将免密登录的玩家数据迁移至该新名称。</p>',13)),o(t),o(i)])}const L=n(p,[["render",c]]);export{m as __pageData,L as default};
