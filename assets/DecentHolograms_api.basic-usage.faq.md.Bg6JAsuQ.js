import{_ as s,c as e,o as i,al as t}from"./chunks/framework.LK_RS8Nx.js";const k=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"DecentHolograms/api.basic-usage.faq.md","filePath":"DecentHolograms/api.basic-usage.faq.md"}'),l={name:"DecentHolograms/api.basic-usage.faq.md"};function p(n,a,h,o,d,r){return i(),e("div",null,a[0]||(a[0]=[t('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><p>使用 DecentHolograms 时常出现的问题</p><p>本章节详细讲述了 DecentHolograms API 相关的问题。如果你碰到了在这里没有列出的问题，考虑一下加入我们的 Discord 群组并在这里询问我们。</p><h2 id="我如何只让特定玩家看到悬浮字" tabindex="-1">我如何只让特定玩家看到悬浮字？ <a class="header-anchor" href="#我如何只让特定玩家看到悬浮字" aria-label="Permalink to &quot;我如何只让特定玩家看到悬浮字？&quot;">​</a></h2><p>让指定玩家看见悬浮字稍微有些费劲。<br> 一个悬浮字默认会展示给所有人，如果只是把这个玩家从可见列表里移出，可能做不到你想要的效果。</p><p>所以，在<a href="./api.basic-usage.dhapi.html#获取悬浮字">获取悬浮字对象</a>之后，将它的默认可见性设置为 <code>false</code>：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hologram.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setDefaultVisibleState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>在这之后，将能看见悬浮字的玩家通过这个方法设置：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hologram.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setShowPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player);</span></span></code></pre></div><p>你也可以将玩家移出可见列表：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hologram.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeShowPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player);</span></span></code></pre></div><p>若你想要做到相反的操作 —— 只让特定玩家看不见悬浮字 —— 你可以通过 <code>setHidePlayer</code> 方法做到：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hologram.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setHidePlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player);</span></span></code></pre></div><p>也有将玩家移出隐藏列表的方法：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hologram.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeHidePlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player);</span></span></code></pre></div><p>需要注意的是，在使用 <code>setHidePlayer</code> 方法时，<code>setDefaultVisibleState</code> 需要设置为 <code>true</code> 才可以正常工作。这是悬浮字的默认状态，除非你手动修改。</p>',16)]))}const g=s(l,[["render",p]]);export{k as __pageData,g as default};
