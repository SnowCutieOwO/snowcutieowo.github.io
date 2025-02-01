import{_ as e,C as l,c as h,o as p,al as t,j as a,a as i,G as k,w as r}from"./chunks/framework.LK_RS8Nx.js";const A=JSON.parse('{"title":"🔍 自定义物品匹配方法","description":"","frontmatter":{},"headers":[],"relativePath":"UltimateShop/features.custom-item-match-method.md","filePath":"UltimateShop/features.custom-item-match-method.md"}'),d={name:"UltimateShop/features.custom-item-match-method.md"};function o(E,s,c,g,m,y){const n=l("font");return p(),h("div",null,[s[7]||(s[7]=t(`<h1 id="🔍-自定义物品匹配方法" tabindex="-1">🔍 自定义物品匹配方法 <a class="header-anchor" href="#🔍-自定义物品匹配方法" aria-label="Permalink to &quot;🔍 自定义物品匹配方法&quot;">​</a></h1><h2 id="默认物品匹配方法" tabindex="-1">默认物品匹配方法 <a class="header-anchor" href="#默认物品匹配方法" aria-label="Permalink to &quot;默认物品匹配方法&quot;">​</a></h2><h3 id="原版物品" tabindex="-1">原版物品 <a class="header-anchor" href="#原版物品" aria-label="Permalink to &quot;原版物品&quot;">​</a></h3><p>默认情况下，我们支持两种出售匹配，即：</p><ul><li>Bukkit：这个出售方法要求对应物品完全匹配，若玩家手上的物品存在差别，则它无法被出售。例如，增加了额外附魔，或在铁砧中修改了物品名称，而这会导致物品的 NBT 信息被修改。</li><li>ItemFormat：物品格式只支持读取原版 NBT，它可以设置原版 NBT 的忽略列表。如果你在忽略列表里加入了附魔，则玩家仍可以在修改名称或添加附魔后出售对应物品。</li></ul><p>示例配置：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 支持填入: Bukkit 或 ItemFormat.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 对于每个物品, 你可以添加 match-item 部分来制作自定义出售匹配方法, 更多信息请见 Wiki.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  sell-method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Bukkit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 仅支持 ItemFormat 出售方法.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ignore-item-format-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;lore&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;damage&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;tool.damage-per-block&#39;</span></span></code></pre></div><h3 id="第三方插件物品" tabindex="-1">第三方插件物品 <a class="header-anchor" href="#第三方插件物品" aria-label="Permalink to &quot;第三方插件物品&quot;">​</a></h3><p>由<a href="./info.compatibility.html">受支持插件</a>生成的物品会自动判断其物品 ID 并与物品格式内 <code>hook-item</code> 选项的物品 ID，所以无论它怎么变化，它最终都可以正常出售。</p><h2 id="单物品自定义匹配方法-需要安装-mythicchanger" tabindex="-1">单物品自定义匹配方法 - 需要安装 MythicChanger <a class="header-anchor" href="#单物品自定义匹配方法-需要安装-mythicchanger" aria-label="Permalink to &quot;单物品自定义匹配方法 - 需要安装 MythicChanger&quot;">​</a></h2><p>尽管上述的物品格式方法能够解决物品被修改导致无法出售的问题，它仍然不够灵活。因此，这个功能可以帮助你为每个物品设置自定义物品出售模式。</p><p>你可以在每个物品或价格的配置中增加一个 <code>match-item</code> 部分，这可以设置物品是否达到要求并可出售。</p><p>如果你想要在玩家尝试购买该物品并展示在插件的商店界面与变量后给予玩家在此处设置的物品，你还是需要用到物品格式。</p><p>这个功能需要你的服务器安装 MythicChanger 插件，请在这里获取：</p><ul><li>免费版：<a href="https://www.spigotmc.org/resources/mythicchanger-match-and-modify-all-your-items-without-trouble-1-14-1-21.98523/" target="_blank" rel="noreferrer">点此下载</a></li><li>付费版：<a href="https://www.spigotmc.org/resources/mythicchanger-premium-match-and-modify-all-your-items-without-trouble-1-14-1-21.115913/" target="_blank" rel="noreferrer">点此下载</a></li></ul>`,15)),a("p",null,[s[1]||(s[1]=i("对于如何配置 ")),s[2]||(s[2]=a("code",null,"match-item",-1)),s[3]||(s[3]=i(" 部分的教程，请阅读 MythicChanger 的维基。")),s[4]||(s[4]=a("a",{href:"https://mythicchanger.superiormc.cn/configs/match-item",target:"_blank",rel:"noreferrer"},"点此访问",-1)),s[5]||(s[5]=i("。需要注意是部分插件的匹配规则需要")),k(n,{color:"red"},{default:r(()=>s[0]||(s[0]=[i("付费版本的 MythicChanger，而非付费版的 UltimateShop")])),_:1}),s[6]||(s[6]=i("！"))]),s[8]||(s[8]=t(`<p>示例物品如下所示。在本示例中，绿宝石和钻石都可以出售，但只有钻石会在商店中显示。在玩家购买该物品后，他只会获得钻石，因为 <code>match-item</code> 部分不影响购买。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    price-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ALL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    product-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CLASSIC_ALL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    products</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">diamond</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        match-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此为添加的 match-item 部分.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此为匹配规则键! 可在 MythicChanger 维基了解更多!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">diamond</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">emerald</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          has-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 此为匹配规则键! 可在 MythicChanger 维基了解更多!</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 更多子物品?</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    buy-prices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 你也可以在购买价格下设置匹配规则!</span></span></code></pre></div>`,2))])}const F=e(d,[["render",o]]);export{A as __pageData,F as default};
