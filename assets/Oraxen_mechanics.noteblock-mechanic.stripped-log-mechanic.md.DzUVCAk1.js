import{_ as i,c as a,o as n,al as t}from"./chunks/framework.LK_RS8Nx.js";const o=JSON.parse('{"title":"去皮木头机制","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/mechanics.noteblock-mechanic.stripped-log-mechanic.md","filePath":"Oraxen/mechanics.noteblock-mechanic.stripped-log-mechanic.md"}'),e={name:"Oraxen/mechanics.noteblock-mechanic.stripped-log-mechanic.md"};function l(h,s,p,k,r,c){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="去皮木头机制" tabindex="-1">去皮木头机制 <a class="header-anchor" href="#去皮木头机制" aria-label="Permalink to &quot;去皮木头机制&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">提示</p><p>仅对 1.134.0+ 的 Oraxen 有效。</p></div><h2 id="这是什么" tabindex="-1">这是什么？ <a class="header-anchor" href="#这是什么" aria-label="Permalink to &quot;这是什么？&quot;">​</a></h2><p>这个机制允许你为自定义树木去皮，就像原版的那样。</p><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  noteblock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    custom_variation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    logStrip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      stripped_log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">stripped_log</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 去皮后换成的方块</span></span></code></pre></div><h4 id="去皮后掉落" tabindex="-1">去皮后掉落 <a class="header-anchor" href="#去皮后掉落" aria-label="Permalink to &quot;去皮后掉落&quot;">​</a></h4><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  noteblock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    custom_variation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    logStrip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      stripped_log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">stripped_log</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 去皮后换成的方块</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      drop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bark</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 右键后额外掉落的物品</span></span></code></pre></div>`,8)]))}const E=i(e,[["render",l]]);export{o as __pageData,E as default};
