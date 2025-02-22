import{_ as s,c as a,o as n,al as e}from"./chunks/framework.CAEutmY3.js";const g=JSON.parse('{"title":"区域管理模块","description":"","frontmatter":{},"headers":[],"relativePath":"WorldGuard/worldguard-api.working-with-regions.managers.md","filePath":"WorldGuard/worldguard-api.working-with-regions.managers.md"}'),t={name:"WorldGuard/worldguard-api.working-with-regions.managers.md"};function l(h,i,p,k,r,o){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="区域管理模块" tabindex="-1">区域管理模块 <a class="header-anchor" href="#区域管理模块" aria-label="Permalink to &quot;区域管理模块&quot;">​</a></h1><h2 id="区域容器-region-container" tabindex="-1">区域容器（Region Container） <a class="header-anchor" href="#区域容器-region-container" aria-label="Permalink to &quot;区域容器（Region Container）&quot;">​</a></h2><p>区域数据可从 <code>RegionContainer</code> 对象中读取：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RegionContainer container </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlatform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRegionContainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>每个世界都有一个区域的列表。若要获取指定世界的区域列表，容器有一个 <code>getWorld(World)</code> 方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>RegionManager regions = container.get(world);</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>见“<a href="./worldguard-api.from-bukkit-objects.html">引自 Bukkit 的对象</a>”章节来获知如何转化 Bukkit 的世界。</p></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>返回值在区域支持被禁用或区域数据载入失败时<strong>可能会返回 null</strong>。WorldGuard 可能会间歇性地尝试重新载入这些数据。</p></div><h2 id="区域管理" tabindex="-1">区域管理 <a class="header-anchor" href="#区域管理" aria-label="Permalink to &quot;区域管理&quot;">​</a></h2><p>若要按区域命名获取区域对象：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ProtectedRegion region </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> regions.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRegion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spawn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>另外，还有如下方法：</p><ul><li>获取所有区域的不可修改映射表：<code>regions.getRegions()</code></li><li>测试指定命名的区域是否存在：<code>regions.hasRegion(String)</code></li><li>获取区域大小：<code>regions.size()</code></li></ul><div class="info custom-block"><p class="custom-block-title">示例：获取名为“spawn”的区域数据</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RegionContainer container </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlatform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRegionContainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RegionManager regions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> container.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(world);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (regions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> regions.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRegion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spawn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 在世界不支持区域或区域数据读取失败情况下执行的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div><h3 id="创建区域" tabindex="-1">创建区域 <a class="header-anchor" href="#创建区域" aria-label="Permalink to &quot;创建区域&quot;">​</a></h3><p>当你创建了一个 ProtectedRegion 的实例之后，可以在区域管理模块上使用 <code>addRegion(ProtectedRegion)</code> 方法。</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RegionContainer container </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlatform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRegionContainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RegionManager regions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> container.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(world);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">regions.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addRegion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(region);</span></span></code></pre></div><p>父区域会被自动添加。如果已经存在命名相同的区域，则新创建的区域数据将会覆盖旧的区域。</p><h3 id="删除区域" tabindex="-1">删除区域 <a class="header-anchor" href="#删除区域" aria-label="Permalink to &quot;删除区域&quot;">​</a></h3><p>区域可以以按命名的方式通过方法 <code>regions.removeRegion(String, RemovalStrategy)</code> 删除。删除方法中的参数决定了该区域继承的子区域是操作方法。</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">regions.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeRegion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mall&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, RemovalStrategy.UNSET_PARENT_IN_CHILDREN);</span></span></code></pre></div><h3 id="保存改动" tabindex="-1">保存改动 <a class="header-anchor" href="#保存改动" aria-label="Permalink to &quot;保存改动&quot;">​</a></h3><p>区域数据会在一小段时间后自动保存，所以<strong>没有特意进行保存的必要</strong>。</p><p>如果你执意要使用保存方法，你可以调用下列方法之一：</p><ul><li><code>save()</code></li><li><code>saveChanges()</code> 该方法可以从任何线程调用，但会在完成之前阻塞该线程（或产生报错）。</li></ul><h3 id="重载变动" tabindex="-1">重载变动 <a class="header-anchor" href="#重载变动" aria-label="Permalink to &quot;重载变动&quot;">​</a></h3><p>若要从本地文件中重新读取文件，你可以使用方法 <code>load()</code>。该方法可以从任何线程调用，但会在完成之前阻塞该线程（或产生报错）。</p>`,27)]))}const E=s(t,[["render",l]]);export{g as __pageData,E as default};
