import{_ as a,o as i,c as n,a7 as e}from"./chunks/framework.DSL0mkng.js";const o=JSON.parse('{"title":"机制","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/mechanics.introduction.md","filePath":"Oraxen/mechanics.introduction.md"}'),t={name:"Oraxen/mechanics.introduction.md"};function h(l,s,p,k,r,d){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="机制" tabindex="-1">机制 <a class="header-anchor" href="#机制" aria-label="Permalink to &quot;机制&quot;">​</a></h1><p>又名：如何赋予你的物品特殊能力</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>在 Oraxen 中制作一个有趣的物品非常简单，但如何更进一步？本插件的“机制”部分允许你通过配置文件赋予物品特殊的能力。例如，你可以创建一个能挖掘基岩的镐子，或是能偷取对手生命值的剑。</p><h2 id="如何给物品添加机制" tabindex="-1">如何给物品添加机制？ <a class="header-anchor" href="#如何给物品添加机制" aria-label="Permalink to &quot;如何给物品添加机制？&quot;">​</a></h2><h3 id="物品配置" tabindex="-1">物品配置 <a class="header-anchor" href="#物品配置" aria-label="Permalink to &quot;物品配置&quot;">​</a></h3><p>如你在<a href="./configuration.items-beginners.html">对应部分的初学者教程</a>所见的那样，你只需添加新的一部分“mechanics”配置，其中包含的就是你需要的各种机制。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">example_item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DIAMOND_AXE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 将机制填入此处</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    example_mechanic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      example_option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    another_example_mechanic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      another_option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;示例配置&quot;</span></span></code></pre></div><p>每一部分物品配置中的机制设定允许你修改它们，并只对所在物品本身生效。这也意味着如果你给某个镐子添加了 5*5 的范围挖掘功能，你也可以将这部分配置复制到其他物品上，并将其的范围修改为 3*3。</p><h2 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor" href="#全局配置" aria-label="Permalink to &quot;全局配置&quot;">​</a></h2><p>这些配置会被保存在 Oraxen 插件文件夹的 <code>mechanics.yml</code> 中。它们允许你修改一些物品用到的全局设定。你可能不常用到它，但它总归是有用的。例如，基岩破坏机制允许你破坏基岩。大多数服务器不希望他们的玩家挖穿世界——最后一层基岩。在 <code>bedrockbreak</code>（基岩破坏）机制的配置中，你就可以设置这个细节（这也会对所有使用了这个机制的物品生效）。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bedrockbreak</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  disable_on_first_layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 此项</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  durability_cost</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span></span></code></pre></div>`,12)]))}const E=a(t,[["render",h]]);export{o as __pageData,E as default};
