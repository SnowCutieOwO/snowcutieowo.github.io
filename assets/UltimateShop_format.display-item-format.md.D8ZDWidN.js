import{_ as i,c as a,o as n,al as l}from"./chunks/framework.LK_RS8Nx.js";const y=JSON.parse('{"title":"🖼️ 展示物品格式","description":"","frontmatter":{},"headers":[],"relativePath":"UltimateShop/format.display-item-format.md","filePath":"UltimateShop/format.display-item-format.md"}'),p={name:"UltimateShop/format.display-item-format.md"};function h(t,s,k,e,E,r){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="🖼️-展示物品格式" tabindex="-1">🖼️ 展示物品格式 <a class="header-anchor" href="#🖼️-展示物品格式" aria-label="Permalink to &quot;🖼️ 展示物品格式&quot;">​</a></h1><p>你可以在菜单按钮以及商店物品的 <code>display-item</code> 部分使用展示物品格式。</p><h2 id="单个" tabindex="-1">单个 <a class="header-anchor" href="#单个" aria-label="Permalink to &quot;单个&quot;">​</a></h2><p>如果你要展示的物品只有一个，且无任何条件，只需在这部分配置中使用<a href="./format.itemformat.html">物品格式</a>即可！</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    display-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BREAD</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;c超级面包&#39;</span></span></code></pre></div><h2 id="多重" tabindex="-1">多重 <a class="header-anchor" href="#多重" aria-label="Permalink to &quot;多重&quot;">​</a></h2><p>如果你想要为这个按钮或物品设置多个展示物品，并为其基于条件设置不同的显示内容，则只需按如下格式进行配置即可：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    display-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GREEN_WOOL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;e第 1 天&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        lore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;f今日奖励:&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;7  - 10 Gems&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;#FFFACD点击领取!&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      claimed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RED_WOOL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;e第 1 天&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        lore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;f包含奖励:&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;7  - 10 Gems&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;#ff3300已领取过!&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    display-item-conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      claimed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">placeholder</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%ultimateshop_streak_A_{buy-times-player}%&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">placeholder</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%ultimateshop_streak_A_{buy-times-player}%&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;=&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0&#39;</span></span></code></pre></div>`,8)]))}const g=i(p,[["render",h]]);export{y as __pageData,g as default};
