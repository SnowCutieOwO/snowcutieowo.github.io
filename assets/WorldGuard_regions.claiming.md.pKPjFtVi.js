import{_ as a,c as i,o,al as r}from"./chunks/framework.LK_RS8Nx.js";const g=JSON.parse('{"title":"认领","description":"","frontmatter":{},"headers":[],"relativePath":"WorldGuard/regions.claiming.md","filePath":"WorldGuard/regions.claiming.md"}'),l={name:"WorldGuard/regions.claiming.md"};function d(t,e,n,s,c,p){return o(),i("div",null,e[0]||(e[0]=[r('<h1 id="认领" tabindex="-1">认领 <a class="header-anchor" href="#认领" aria-label="Permalink to &quot;认领&quot;">​</a></h1><p>WorldGuard 中存在着一套面向玩家的基础认领系统。通过命令 <code>/rg define</code> 可以创建区域，但玩家必须使用分别的权限才可使用指定的命令。WorldEdit 仍然需要安装，因为圈定选区少不了它，且在此之前需要为玩家分配好 <code>worldguard.selection</code> 权限。</p><p>玩家可以使用 <code>/rg claim</code> 命令认领指定的区域：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg claim 区域名称</span></span></code></pre></div><p>输入命令的玩家即会自动成为该区域的拥有者。使用该命令的权限为 <code>worldguard.region.claim</code>。</p><h2 id="规则" tabindex="-1">规则 <a class="header-anchor" href="#规则" aria-label="Permalink to &quot;规则&quot;">​</a></h2><ul><li>**最大区域数量：**除非玩家拥有权限 <code>worldguard.region.unlimited</code>，否则玩家认领的区域就不能超过在配置文本中所设置的数量；</li><li>**最大区域容量：**除非玩家拥有权限 <code> worldguard.region.unlimited</code>，否则玩家认领区域的大小就不能超过配置文本中 <code>regions.max-claim-volume</code> 所设置的值；</li><li>**覆盖保护：**已认领区域不可替换已有的同名区域；</li><li>**重叠保护：**玩家所认领的区域不可与自己不拥有的区域重叠；</li><li>**认领重叠：**如果配置文本中启用了 <code>regions.claim-only-inside-existing-regions</code> 项，那么该区域必须完全处于玩家所拥有的区域内。需要注意的是认领区域<em>不</em>需要完全和上述玩家所拥有的区域重叠（见<a href="https://github.com/EngineHub/WorldGuard/issues/753" target="_blank" rel="noreferrer">漏洞报告 #753</a>）</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>目前为止，插件尚未支持非矩形选区。见<a href="https://github.com/EngineHub/WorldGuard/issues/1537" target="_blank" rel="noreferrer">漏洞报告 #1537</a>。</p></div><h2 id="其他命令" tabindex="-1">其他命令 <a class="header-anchor" href="#其他命令" aria-label="Permalink to &quot;其他命令&quot;">​</a></h2><p>你可以让玩家通过分配正确的权限使用其他的命令（例如设置标签和添加成员）。</p>',10)]))}const m=a(l,[["render",d]]);export{g as __pageData,m as default};
