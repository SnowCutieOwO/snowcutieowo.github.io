import{_ as i,c as a,o as n,al as t}from"./chunks/framework.ySGSHPST.js";const g=JSON.parse('{"title":"保护查询","description":"","frontmatter":{},"headers":[],"relativePath":"WorldGuard/worldguard-api.working-with-regions.querying-protection.md","filePath":"WorldGuard/worldguard-api.working-with-regions.querying-protection.md"}'),l={name:"WorldGuard/worldguard-api.working-with-regions.querying-protection.md"};function h(k,s,e,p,r,d){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="保护查询" tabindex="-1">保护查询 <a class="header-anchor" href="#保护查询" aria-label="Permalink to &quot;保护查询&quot;">​</a></h1><p>若要查询保护，标志 <code>Flags.BUILD</code> 可通过在“<a href="./worldguard-api.working-with-regions.flag-calculation.html">标志计算</a>”中的方法进行测试。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>区域查询不检查玩家是否拥有绕过权限。这取决于你使用的情况，你可能需要分开检查这些内容。</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canBypass </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlatform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSessionManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasBypass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player, player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">示例：通过缓存队列查询建筑权限</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalPlayer localPlayer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuardPlugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wrapPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Location loc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Location</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(world, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RegionContainer container </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldGuard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlatform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRegionContainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RegionQuery query </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> container.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">testState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(loc, localPlayer, Flags.BUILD)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 禁止建造</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div>`,4)]))}const o=i(l,[["render",h]]);export{g as __pageData,o as default};
