import{_ as e,c as l,o as s,b0 as a}from"./chunks/framework.w6NQj85O.js";const h=JSON.parse('{"title":"建筑权限","description":"","frontmatter":{},"headers":[],"relativePath":"WorldGuard/permissions.build-permissions.md","filePath":"WorldGuard/permissions.build-permissions.md"}'),d={name:"WorldGuard/permissions.build-permissions.md"};function t(o,i,r,n,c,p){return s(),l("div",null,i[0]||(i[0]=[a(`<h1 id="建筑权限" tabindex="-1">建筑权限 <a class="header-anchor" href="#建筑权限" aria-label="Permalink to &quot;建筑权限&quot;">​</a></h1><p>这是一个额外的功能，允许你以权限节点的方式决定玩家的建筑行为。可以在配置文本中如下位置启用这个功能：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build-permission-nodes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;--- 这里</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    deny-message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span></code></pre></div><p>可以设置在玩家试图破坏无权限挖掘的区域时发出的提示消息，可设可不设。</p><h2 id="权限列表" tabindex="-1">权限列表 <a class="header-anchor" href="#权限列表" aria-label="Permalink to &quot;权限列表&quot;">​</a></h2><ul><li>放置方块: <code>worldguard.build.block.place.&lt;材料名&gt;</code></li><li>破坏方块: <code>worldguard.build.block.remove.&lt;材料名&gt;</code></li><li>与方块交互: <code>worldguard.build.block.interact.&lt;材料名&gt;</code></li><li>实体放置: <code>worldguard.build.entity.place.&lt;实体种类&gt;</code></li><li>实体破坏: <code>worldguard.build.entity.remove.&lt;实体种类&gt;</code></li><li>与实体交互: <code>worldguard.build.entity.interact.&lt;实体种类&gt;</code></li><li>攻击实体: <code>worldguard.build.entity.damage.&lt;实体种类&gt;</code></li><li>使用物品: <code>worldguard.build.item.use.&lt;材料名&gt;</code></li></ul><p>权限节点也可以 <code>worldguard.build.block.&lt;材料名&gt;.&lt;操作种类&gt;</code> 的格式检查，所以诸如 <code>worldguard.build.block.&lt;材料名&gt;.place</code> 的权限节点也会生效。</p><p>可用材料名称的列表来自于 Bukkit 的材料名称列表文档。例如，允许放置床方块的权限是 <code>worldguard.build.block.place.red_bed</code>。需要注意的是<em>材料名</em>处填入的既可以是物品名称，也可是方块名称。</p>`,8)]))}const g=e(d,[["render",t]]);export{h as __pageData,g as default};
