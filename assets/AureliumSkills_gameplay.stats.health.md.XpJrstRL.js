import{_ as e,c as t,o as l,b0 as o}from"./chunks/framework.w6NQj85O.js";const _=JSON.parse('{"title":"生命值相关","description":"","frontmatter":{},"headers":[],"relativePath":"AureliumSkills/gameplay.stats.health.md","filePath":"AureliumSkills/gameplay.stats.health.md"}'),r={name:"AureliumSkills/gameplay.stats.health.md"};function h(i,a,s,c,d,n){return l(),t("div",null,a[0]||(a[0]=[o('<h1 id="生命值相关" tabindex="-1">生命值相关 <a class="header-anchor" href="#生命值相关" aria-label="Permalink to &quot;生命值相关&quot;">​</a></h1><p>对生命值属性设置的相关介绍。</p><p>生命属性提升玩家的最大生命值，通过对 GENERIC_MAX_HEALTH 属性添加修改器实现。在玩家加入（PlayerJoinEvent）、生命值属性改变或配置文本重载时生效。</p><h2 id="计算" tabindex="-1">计算 <a class="header-anchor" href="#计算" aria-label="Permalink to &quot;计算&quot;">​</a></h2><p>生命值基于生命属性计算：<br><code>GENERIC_MAX_HEALTH = 20.0 + (Stat.HEALTH * health.modifier)</code><br> Stat.HEALTH 为玩家当前拥有的生命属性点数，可在 /stats 菜单中查看。health.modifier 为配置文本中的 <code>health.modifier</code> 项（该值默认为 0.5）。</p><p>当 <code>health.modifier</code> 项值为 1.0 时，意味着每点生命值属性能为玩家提供 1 点生命值上限。</p><h2 id="血量压缩" tabindex="-1">血量压缩 <a class="header-anchor" href="#血量压缩" aria-label="Permalink to &quot;血量压缩&quot;">​</a></h2><p>若 <code>health.health-scaling</code> 项被设置为 true，显示在玩家屏幕上的血量将会被压缩，以防止遮挡屏幕。这意味着当玩家拥有大于 20.0 的血量时，屏幕上的一颗心将不再等于 2 点血量值。</p><p>显示在屏幕上的心数量可以在配置文本（config.yml）的 <code>health.hearts</code> 处调整。键名为心的数量，而值则是游戏中玩家的生命值上限。例如，有两项配置为 &#39;12&#39;: 29 和 &#39;13&#39;: 37，那么这意味着当玩家最大生命值在 29~37（均包含）点时，屏幕上将会显示 12 颗心。</p><p>该选项支持少于 10 颗心和多于 20 颗心的设置，按上述示例一般添加即可。键值需要有顺序，否则较高生命值的设置会覆盖较低生命值的设置。</p><p>血量压缩显示是纯粹装饰性的，只是修改客户端的血量显示，并不影响玩家的实际血量。并且它仅会在 <code>health.health-scaling</code> 选项设置为 true 时压缩玩家的血量。</p><h2 id="生命显示压缩" tabindex="-1">生命显示压缩 <a class="header-anchor" href="#生命显示压缩" aria-label="Permalink to &quot;生命显示压缩&quot;">​</a></h2><p>生命显示压缩的玩家的原血量值所显示在 ActionBar 上所乘以的倍数。可在配置文本的 health.hp-indicator-scaling 项修改。默认值 1 表示在 ActionBar 上显示的血量与实际血量一致。这也是装饰性的，不会影响到玩家的实际血量。</p>',13)]))}const m=e(r,[["render",h]]);export{_ as __pageData,m as default};
