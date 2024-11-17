import{_ as i,o as a,c as n,a7 as l}from"./chunks/framework.DSL0mkng.js";const g=JSON.parse('{"title":"标志计算","description":"","frontmatter":{},"headers":[],"relativePath":"WorldGuard/worldguard-api.working-with-regions.flag-calculation.md","filePath":"WorldGuard/worldguard-api.working-with-regions.flag-calculation.md"}'),t={name:"WorldGuard/worldguard-api.working-with-regions.flag-calculation.md"};function h(e,s,k,p,E,d){return a(),n("div",null,s[0]||(s[0]=[l(`<h1 id="标志计算" tabindex="-1">标志计算 <a class="header-anchor" href="#标志计算" aria-label="Permalink to &quot;标志计算&quot;">​</a></h1><p>若要检查标志，一个 <code>ApplicableRegionSet</code>（包含一个区域的列表）的示例必须提供。在“空间查询”章节有相吸讲述。</p><h2 id="查询标志" tabindex="-1">查询标志 <a class="header-anchor" href="#查询标志" aria-label="Permalink to &quot;查询标志&quot;">​</a></h2><p>给定列表查询指定标志的问题是，这里可能会有多个区域包含同一个标志（且值不同）。如果优先级和继承关系在之前已经正确配置，那么这里可能只会有一个“有效的”值，或者在其他情况下会有多个。</p><h3 id="获取所有值" tabindex="-1">获取所有值 <a class="header-anchor" href="#获取所有值" aria-label="Permalink to &quot;获取所有值&quot;">​</a></h3><p><code>queryAllValues(RegionAssociable, Flag)</code> 可以用于获取对一个标志设置的所有值。标志可以从 <code>Flags</code> 中获取。</p><div class="info custom-block"><p class="custom-block-title">示例：获取 greeting 标志设置的消息，将其设置在玩家上</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalPlayer localPlayer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuardPlugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wrapPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Collection&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; greetings </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> set.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">queryAllValues</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(localPlayer, Flags.GREET_MESSAGE);</span></span></code></pre></div></div><h3 id="获取单个值" tabindex="-1">获取单个值 <a class="header-anchor" href="#获取单个值" aria-label="Permalink to &quot;获取单个值&quot;">​</a></h3><p><code>queryValue(RegionAssociable, Flag)</code> 可以用于获取单个值。取决于标志种类，这可能是找到的第一个值，或者是“最匹配”的值。截至维基最后一次编辑前，仅 <code>StateFlags</code> 会实际意义上地选择“最匹配”的值。</p><div class="info custom-block"><p class="custom-block-title">示例：获取 greeting 标志设置的消息，将其设置在玩家上</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalPlayer localPlayer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuardPlugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wrapPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String greeting </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> set.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">queryValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(localPlayer, Flags.GREET_MESSAGE);</span></span></code></pre></div><p>若这个标志没有在任何区域上被设置，那么返回的值有可能是 <code>null</code>。</p></div><h3 id="获取-stateflag-的值" tabindex="-1">获取 StateFlag 的值 <a class="header-anchor" href="#获取-stateflag-的值" aria-label="Permalink to &quot;获取 StateFlag 的值&quot;">​</a></h3><p>如果你正在尝试查询一个 <code>StateFlag</code>（只有 allow/deny 两种值的标志），这就会有你可使用的额外方法。它们允许你指定多个状态标志，用于自动结合（请记住，“deny”会覆盖“allow”）。</p><ul><li><code>queryState(RegionAssociable, StateFlag...)</code> 需要一个或更多的标志，返回的值为 allow、deny 或 null；</li><li><code>testState(RegionAssociable, StateFlag...)</code> 功能大致相同，但会在标志为 allow 时返回 true。</li></ul><p>你仍然可以使用 <code>queryValue</code>，但你一次只能指定一个标志。</p><div class="info custom-block"><p class="custom-block-title">示例：测试 build 标志]</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalPlayer localPlayer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuardPlugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wrapPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">testState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(localPlayer, Flags.BUILD)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCancelled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div><h3 id="无玩家标志" tabindex="-1">无玩家标志 <a class="header-anchor" href="#无玩家标志" aria-label="Permalink to &quot;无玩家标志&quot;">​</a></h3><p>如果你正在尝试寻找不需要玩家的标志（例如，<code>creeper-explosion</code> 标志），那么你就可以在 <code>RegionAssociable</code> 参数的位置使用 <code>null</code>。</p><div class="info custom-block"><p class="custom-block-title">示例：测试爬行者爆炸摧毁（creeper-explosion）标志]</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">testState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Flags.CREEPER_EXPLOSION)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCancelled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>你也可以在与玩家有关的标志中使用 <code>null</code>，但在区域组标志中这不会正常工作。</p></div><h3 id="也可通过-regionquery" tabindex="-1">也可通过 RegionQuery <a class="header-anchor" href="#也可通过-regionquery" aria-label="Permalink to &quot;也可通过 RegionQuery&quot;">​</a></h3><p>该页面中描述的方法同样在 <code>RegionQuery</code> 中可直接获取。</p><div class="info custom-block"><p class="custom-block-title">示例：使用 <code>RegionQuery</code> 直接查询标志]</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalPlayer localPlayer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuardPlugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wrapPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Location loc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Location</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(world, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RegionContainer container </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlatform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRegionContainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RegionQuery query </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> container.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 不与之冲突:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ApplicableRegionSet set = query.getApplicableRegions(loc);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 只是直接测试标志:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">testState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(loc, localPlayer, Flags.BUILD);</span></span></code></pre></div><p>额外地，你可以使用 <code>testBuild</code> 等作为 <code>testState(..., Flags.BUILD, 你的标志)</code> 的快捷方式。</p></div><h3 id="非玩家操作" tabindex="-1">非玩家操作 <a class="header-anchor" href="#非玩家操作" aria-label="Permalink to &quot;非玩家操作&quot;">​</a></h3><p>除了在玩家上传递，你也可以在（一个非<code>LocalPlayer</code>的）<code>RegionAssociable</code> 中传递。这个对象用于决定是否对区域的拥有者、成员或非成员使用标志。</p><p>但是，让我们先考虑玩家方面会发生的事情。让玩家成为建筑团队的一个成员，而该区域组是主城区域和“builder&#39;s cloud”，返回的内容一定是 <code>OWNER</code>，如下所述：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ProtectedRegion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; regions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Arrays.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(spawnRegion, buildersClub);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">builderPlayer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAssociation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(regions) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Association.OWNER;</span></span></code></pre></div><p>你可能会担心，你不能将实体或方块作为成员添加至区域，所以它不可以像之前那样工作。若要这么做，一个特殊的 <code>RegionAssociable</code> 会被用于方块和实体：它会获取一个<strong>源区域</strong>的列表，以此决定哪一个目标位置的源区域是“成员”。如下所述。</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Set deepInside    </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> newHashSet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(spawn, mall);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Set inside        </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> newHashSet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(spawn);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Set outside       </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> newHashSet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 空置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 区域外 -&gt; 区域内 = 判断为 &quot;非成员&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegionOverlapAssociation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(outside).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAssociation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inside) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NON_MEMBER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 区域内 -&gt; 区域内 = 判断为 &quot;成员&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegionOverlapAssociation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inside).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAssociation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inside) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OWNER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 区域内 -&gt; 区域较深内部 = 判断为 &quot;成员&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 需要注意的是默认建筑权限在该情况下是被阻止的.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 玩家与所有单独区域间的关系需为 &quot;成员&quot;.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegionOverlapAssociation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inside).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAssociation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(deepInside) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OWNER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 区域内 -&gt; 区域外 = 判断为 &quot;非成员&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegionOverlapAssociation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inside).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAssociation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(outside) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NON_MEMBER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 区域较深内部 -&gt; 区域内部 = 判断为 &quot;成员&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegionOverlapAssociation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(deepInside).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAssociation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inside) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OWNER</span></span></code></pre></div><p>需要注意的是 <code>nonplayer-protection-domains</code> 标志和区域继承可覆盖此行为。多种的 <code>test...</code> 和 <code>query...</code> 方法将会为你处理这些。</p><p>概括来讲：</p><ul><li>玩家（<code>LocalPlayer</code>）对象已经集成了 <code>RegionAssociable</code>；</li><li>对于实体与方块，WorldGuard 使用存在于 <code>RegionOverlapAssociation</code> 方块或实体的区域。</li></ul><p>这里也有：</p><ul><li><code>ConstantAssociation</code> 有预置的归属关系（<code>new ConstantAssociation(Association.MEMBER)</code> 或 <code>Associables.constant(Association.MEMBER)</code>）；</li><li><code>DelayedRegionOverlapAssociation</code> 的运作方式有点像 <code>RegionOverlapAssociation</code>，但不会对源区域进行区域检查，除非有需求。</li></ul><div class="info custom-block"><p class="custom-block-title">示例：探究 WorldGuard 如何处理区域保护]</p><p>首先，正确的 <code>RegionAssociation</code> 必须为事件而创建。下文叙述的 <code>createRegionAssociable()</code> 并会返回一个 <code>RegionAssociable</code>。</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RegionAssociable </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createRegionAssociable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Object cause) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cause.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isKnown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Associables.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">constant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Association.NON_MEMBER);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cause </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Player player) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuardPlugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wrapPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cause </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Entity entity) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        RegionQuery query </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlatform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRegionContainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        WorldConfiguration config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlatform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getGlobalStateManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BukkitAdapter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adapt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(entity.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Location loc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> entity.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// getOrigin() 可以用在 Paper 服务器上</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DelayedRegionOverlapAssociation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(query, BukkitAdapter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adapt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(loc), config.useMaxPriorityAssociation);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cause </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Block block) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        RegionQuery query </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlatform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRegionContainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        WorldConfiguration config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlatform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getGlobalStateManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BukkitAdapter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adapt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(block.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Location loc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> block.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DelayedRegionOverlapAssociation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(query, BukkitAdapter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adapt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(loc), config.useMaxPriorityAssociation);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Associables.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">constant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Association.NON_MEMBER);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>让我们看看它可以用在哪：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EventHandler</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onPlayerBucketFill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PlayerBucketFillEvent event) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Player player </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    RegionAssociable associable </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createRegionAssociable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">set.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">testState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(associable, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 在这里写上你的标志 */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCancelled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div>`,34)]))}const o=i(t,[["render",h]]);export{g as __pageData,o as default};
