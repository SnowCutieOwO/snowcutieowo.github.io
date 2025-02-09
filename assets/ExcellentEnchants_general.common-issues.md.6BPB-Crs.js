import{_ as e,c as a,o as t,al as o}from"./chunks/framework.ySGSHPST.js";const p=JSON.parse('{"title":"常见插件问题","description":"","frontmatter":{},"headers":[],"relativePath":"ExcellentEnchants/general.common-issues.md","filePath":"ExcellentEnchants/general.common-issues.md"}'),l={name:"ExcellentEnchants/general.common-issues.md"};function n(c,s,r,i,m,f){return t(),a("div",null,s[0]||(s[0]=[o('<h1 id="常见插件问题" tabindex="-1">常见插件问题 <a class="header-anchor" href="#常见插件问题" aria-label="Permalink to &quot;常见插件问题&quot;">​</a></h1><details class="details custom-block"><summary>重载命令不修改 xxx！</summary><p>部分改动需要重启服务器才可生效。配置文件的对应部分注释里会提及。</p></details><details class="details custom-block"><summary>附魔不显示！</summary><p>如果你的附魔是通过其他插件添加的，那就经常可能会出现这个问题。鉴于 Minecraft 客户端没有能力知道这些全新的附魔，我们只能手动在其在描述中显示。只需将物品丢出后捡起即可触发附魔描述更新。<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p></details><details class="details custom-block"><summary>自定义附魔在附魔台中不显示！</summary><p>这不是漏洞，更大程度上算是一个客户端问题。客户端不能翻译自定义附魔名称，因为客户端根本就不认识这些自定义附魔。不可能修复。</p></details><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>有时候对附魔配置文件的修改（如修改附魔名称/描述等）会导致描述重复更新，插件并无能力移除原本的描述。 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',6)]))}const u=e(l,[["render",n]]);export{p as __pageData,u as default};
