import{_ as i,c as a,o as n,b0 as t}from"./chunks/framework.w6NQj85O.js";const e="/assets/image35.DbEdgbEO.png",c=JSON.parse('{"title":"可染色物品","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/configuration.items-advanced.dyeable-items.md","filePath":"Oraxen/configuration.items-advanced.dyeable-items.md"}'),l={name:"Oraxen/configuration.items-advanced.dyeable-items.md"};function h(k,s,p,r,d,E){return n(),a("div",null,s[0]||(s[0]=[t('<h1 id="可染色物品" tabindex="-1">可染色物品 <a class="header-anchor" href="#可染色物品" aria-label="Permalink to &quot;可染色物品&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>Oraxen 允许你创建基于药水（<code>POTION</code>）和皮革马铠（<code>LEATHER_HORSE_ARMOR</code>）可染色的物品与家具，让我们看看在 BlockBench 中如何做到这些吧！</p><h2 id="怎么做" tabindex="-1">怎么做？ <a class="header-anchor" href="#怎么做" aria-label="Permalink to &quot;怎么做？&quot;">​</a></h2><h3 id="第一步-打开你的-blockbench-模型" tabindex="-1">第一步，打开你的 BlockBench 模型 <a class="header-anchor" href="#第一步-打开你的-blockbench-模型" aria-label="Permalink to &quot;第一步，打开你的 BlockBench 模型&quot;">​</a></h3><h3 id="第二步-选择需要被染色的模型面" tabindex="-1">第二步，选择需要被染色的模型面 <a class="header-anchor" href="#第二步-选择需要被染色的模型面" aria-label="Permalink to &quot;第二步，选择需要被染色的模型面&quot;">​</a></h3><h3 id="第三步-打开-tint-选项" tabindex="-1">第三步，打开 <code>tint</code> 选项 <a class="header-anchor" href="#第三步-打开-tint-选项" aria-label="Permalink to &quot;第三步，打开 `tint` 选项&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">提示</p><p>最好使用白色。</p></div><h3 id="然后在该模式下选中所有需要被染色的材质面即可" tabindex="-1">然后在该模式下选中所有需要被染色的材质面即可！ <a class="header-anchor" href="#然后在该模式下选中所有需要被染色的材质面即可" aria-label="Permalink to &quot;然后在该模式下选中所有需要被染色的材质面即可！&quot;">​</a></h3><p><img src="'+e+`" alt="img"></p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">clock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  displayname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;white&gt;钟&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LEATHER_HORSE_ARMOR</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">255, 255, 255</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #rgb</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      barrier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      drop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 不使用屏障作为方块则无效</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        silktouch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        loots</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - { </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">oraxen_item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">clock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">probability</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Pack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    generate_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">custom/furniture/clock</span></span></code></pre></div>`,11)]))}const g=i(l,[["render",h]]);export{c as __pageData,g as default};
