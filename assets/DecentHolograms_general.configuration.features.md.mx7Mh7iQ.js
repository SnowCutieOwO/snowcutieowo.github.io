import{_ as a,c as i,o as n,al as l}from"./chunks/framework.LK_RS8Nx.js";const c=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"DecentHolograms/general.configuration.features.md","filePath":"DecentHolograms/general.configuration.features.md"}'),e={name:"DecentHolograms/general.configuration.features.md"};function t(p,s,h,k,r,o){return n(),i("div",null,s[0]||(s[0]=[l(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><p>默认特性配置</p><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">提示</p><p>你可以使用下列命令浏览所有该部分的所有命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/dh features help</span></span></code></pre></div></div><h2 id="伤害显示" tabindex="-1">伤害显示 <a class="header-anchor" href="#伤害显示" aria-label="Permalink to &quot;伤害显示&quot;">​</a></h2><p>造成伤害时，一条显示伤害数值的悬浮字会显示在实体附近。</p><h3 id="配置-1" tabindex="-1">配置 <a class="header-anchor" href="#配置-1" aria-label="Permalink to &quot;配置&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">提示</p><p><strong>该功能可在主配置文件 <code>config.yml</code> 中修改。</strong></p></div><h4 id="config-yml" tabindex="-1">config.yml <a class="header-anchor" href="#config-yml" aria-label="Permalink to &quot;config.yml&quot;">​</a></h4><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">damage-display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Do you want this feature enabled? [true/false]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Do you want to display damage for players? [true/false]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  players</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Do you want to display damage for mobs? [true/false]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  mobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Do you want to display 0 (or less) damage? [true/false]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  zero-damage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # How long will the hologram stay in ticks</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Damage placeholder: {damage}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Animations and Placeholders DO work here</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  appearance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;c{damage}&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Appearance of the damage, if the damage is critical</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  critical-appearance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;4&amp;lCrit!&amp;4 {damage}&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Height offset</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ...</span></span></code></pre></div><h2 id="回复显示" tabindex="-1">回复显示 <a class="header-anchor" href="#回复显示" aria-label="Permalink to &quot;回复显示&quot;">​</a></h2><p>回复生命后，一条显示回复量数值的悬浮字会在实体附近生成。</p><h3 id="配置-2" tabindex="-1">配置 <a class="header-anchor" href="#配置-2" aria-label="Permalink to &quot;配置&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">提示</p><p><strong>该功能可在主配置文件 <code>config.yml</code> 中修改。</strong></p></div><h4 id="config-yml-1" tabindex="-1">config.yml <a class="header-anchor" href="#config-yml-1" aria-label="Permalink to &quot;config.yml&quot;">​</a></h4><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">healing-display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Do you want this feature enabled? [true/false]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Do you want to display healing for players? [true/false]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  players</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Do you want to display healing for mobs? [true/false]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  mobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # How long will the hologram stay in ticks</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Heal placeholder: {heal}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Animations and Placeholders DO work here</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  appearance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;a+ {heal}&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Height offset</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ...</span></span></code></pre></div>`,16)]))}const g=a(e,[["render",t]]);export{c as __pageData,g as default};
