import{_ as i,c as a,o as n,b0 as h}from"./chunks/framework.w6NQj85O.js";const d=JSON.parse('{"title":"树苗机制","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/mechanics.stringblock-mechanic.sapling-mechanic.md","filePath":"Oraxen/mechanics.stringblock-mechanic.sapling-mechanic.md"}'),l={name:"Oraxen/mechanics.stringblock-mechanic.sapling-mechanic.md"};function e(t,s,p,k,r,c){return n(),a("div",null,s[0]||(s[0]=[h(`<h1 id="树苗机制" tabindex="-1">树苗机制 <a class="header-anchor" href="#树苗机制" aria-label="Permalink to &quot;树苗机制&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">提示</p><p>仅适用于 1.136.0+ 的 Oraxen。</p></div><h2 id="它如何生效" tabindex="-1">它如何生效？ <a class="header-anchor" href="#它如何生效" aria-label="Permalink to &quot;它如何生效？&quot;">​</a></h2><p>这是一个自定义方块的变种，但这个机制做成的方块碰撞箱基于线，适合用于制作那些可遍历小型装饰物体，而且它们的占用也会比家具类方块小。另外这类方块的 <code>custom_variation</code> 也略有不同。</p><h3 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor" href="#全局配置" aria-label="Permalink to &quot;全局配置&quot;">​</a></h3><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">stringblock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  tool_types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WOODEN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">STONE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IRON</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GOLDEN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DIAMOND</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NETHERITE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  sapling_growth_check_delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><h2 id="我如何创建一种树苗" tabindex="-1">我如何创建一种树苗？ <a class="header-anchor" href="#我如何创建一种树苗" aria-label="Permalink to &quot;我如何创建一种树苗？&quot;">​</a></h2><p>你可以选择将下列内容添加至你的绊线方块。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sapling</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    stringblock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      sapling</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        canGrowNaturally</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 是否允许自然生长</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        naturalGrowthTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6000</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 单位为刻</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        canGrowFromBoneMeal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        boneMealGrowChance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        growSound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">block.grass.break</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        minLightLevel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        requiresWaterSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 是否需要浇水</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        schematicName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">schemTest</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 生成的结构</span></span></code></pre></div><p>你可以给生长过程添加一些随机性，或是单纯地将生长的时间延长。</p><p>打开 <code>mechanics.yml</code> 并找到 <code>stringblock-mechanic</code> 不分，将 <code>sapling_growth_check_delay</code> 项修改至合适的值即可。（20 刻 = 1 秒）</p>`,11)]))}const g=i(l,[["render",e]]);export{d as __pageData,g as default};
