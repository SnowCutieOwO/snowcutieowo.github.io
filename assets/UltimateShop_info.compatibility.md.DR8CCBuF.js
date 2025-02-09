import{_ as p,C as h,c as k,o as r,al as l,j as i,G as t,a,w as e}from"./chunks/framework.ySGSHPST.js";const D=JSON.parse('{"title":"🔗 兼容性","description":"","frontmatter":{},"headers":[],"relativePath":"UltimateShop/info.compatibility.md","filePath":"UltimateShop/info.compatibility.md"}'),o={name:"UltimateShop/info.compatibility.md"},d={id:"直接支持的自定义物品系列",tabindex:"-1"},E={id:"直接支持的自定义经济插件系列",tabindex:"-1"},g={id:"直接支持的保护插件列表",tabindex:"-1"},c={id:"advancedenchantments-额外物品格式选项-仅付费版",tabindex:"-1"};function y(m,s,u,A,F,C){const n=h("font");return r(),k("div",null,[s[21]||(s[21]=l('<h1 id="🔗-兼容性" tabindex="-1">🔗 兼容性 <a class="header-anchor" href="#🔗-兼容性" aria-label="Permalink to &quot;🔗 兼容性&quot;">​</a></h1><p>插件的兼容性主要体现在<strong>物品库插件</strong>与<strong>经济插件</strong>上。与其他同类插件不同的是，我们可以无视其实现方式直接兼容。这里有两种方法支持所需插件：<strong>直接支持</strong>与<strong>间接支持</strong>。</p><h2 id="直接支持的插件" tabindex="-1">直接支持的插件 <a class="header-anchor" href="#直接支持的插件" aria-label="Permalink to &quot;直接支持的插件&quot;">​</a></h2><p>直接支持表示这些经济或物品库的插件能够在 <strong>ItemFormat 物品格式</strong>和 <strong>EconomyFormat 经济格式</strong>中使用。这个兼容方法最为简单，并受到官方支持。</p>',4)),i("h3",d,[t(n,{color:"green"},{default:e(()=>s[0]||(s[0]=[a("直接支持的")])),_:1}),s[1]||(s[1]=a("自定义物品系列 ")),s[2]||(s[2]=i("a",{class:"header-anchor",href:"#直接支持的自定义物品系列","aria-label":'Permalink to "<font color="green">直接支持的</font>自定义物品系列"'},"​",-1))]),s[22]||(s[22]=i("ul",null,[i("li",null,"ItemsAdder"),i("li",null,"Oraxen"),i("li",null,"EcoItems"),i("li",null,"EcoArmor"),i("li",null,"MMOItems"),i("li",null,"MythicMobs"),i("li",null,"eco"),i("li",null,"NeigeItems"),i("li",null,"ExecutableItems")],-1)),i("h3",E,[t(n,{color:"green"},{default:e(()=>s[3]||(s[3]=[a("直接支持的")])),_:1}),s[4]||(s[4]=a("自定义经济插件系列 ")),s[5]||(s[5]=i("a",{class:"header-anchor",href:"#直接支持的自定义经济插件系列","aria-label":'Permalink to "<font color="green">直接支持的</font>自定义经济插件系列"'},"​",-1))]),s[23]||(s[23]=l(`<ul><li>Vault（及依赖其的所有经济插件）</li><li>GamePoints</li><li>PlayerPoints</li><li>CoinsEngine</li><li>UltraEconomy</li><li>EcoBits</li><li>PEconomy</li><li>RedisEconomy</li><li>RoyaleEconomy</li><li>VotingPlugin</li></ul><p>如下示例为通过<strong>物品格式</strong>直接兼容功能调用 <strong>ItemsAdder</strong> 插件的物品，并以通过<strong>经济格式</strong>调用的 <strong>Vault</strong> 货币为回报。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    price-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CLASSIC_ALL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    product-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CLASSIC_ALL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    products</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        hook-plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ItemsAdder</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 物品格式</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        hook-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fishing_pack:common_fishing_bait</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 物品格式</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    buy-prices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        economy-plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Vault</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 经济格式</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        start-apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;65 硬币&#39;</span></span></code></pre></div>`,3)),i("h3",g,[t(n,{color:"green"},{default:e(()=>s[6]||(s[6]=[a("直接")])),_:1}),s[7]||(s[7]=a("支持的保护插件列表 ")),s[8]||(s[8]=i("a",{class:"header-anchor",href:"#直接支持的保护插件列表","aria-label":'Permalink to "<font color="green">直接</font>支持的保护插件列表"'},"​",-1))]),s[24]||(s[24]=l(`<p>若玩家在这些区域内没有打开容器的权限，则 UltimateShop 会阻止玩家在这些区域中使用出售魔杖。</p><ul><li>BentoBox</li><li>Dominion</li><li>GriefPrevention</li><li>HuskTowns</li><li>HuskClaims</li><li>Lands</li><li>PlotSquared</li><li>Residence</li><li>Towny</li><li>WorldGuard</li></ul><h2 id="间接支持" tabindex="-1">间接支持 <a class="header-anchor" href="#间接支持" aria-label="Permalink to &quot;间接支持&quot;">​</a></h2><p>间接支持指代通过灵活运用插件的特性来使其与本插件关联。</p><ul><li>保存物品：我们在命令章节介绍了 <code>/shop saveitem</code> 命令，之后通过物品格式中的 <code>material</code> 选项使用物品 ID 即可。</li><li>购买操作：我们在商店章节介绍了 <code>buy-actions</code> 功能。在动作章节，我们也提及购买操作支持执行命令，所以只需在这里调用对应插件的给予命令即可。</li><li>给予操作：我们在简化流程章节提及了这个内容，与购买操作相似。另外该章节也有相应示例给出。</li></ul><h3 id="示例-将不支持的物品库插件用作商品" tabindex="-1">示例：将不支持的物品库插件用作商品 <a class="header-anchor" href="#示例-将不支持的物品库插件用作商品" aria-label="Permalink to &quot;示例：将不支持的物品库插件用作商品&quot;">​</a></h3><p>在该示例中，我们首先要通过展示物品选项描述的<strong>物品格式</strong>来表示不兼容插件的物品，这样玩家就可以看到实际物品。</p><p>在 <code>products</code> 部分，我们使用自定义出售匹配功能，这允许插件自行判断出售的物品是否符合要求，例如包含描述等。接着，我们使用 <code>give-actions</code> 格式来执行物品给予命令，这样玩家就可以在购买后收到对应物品。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    display-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">APPLE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 手持物品并输入命令 /shop generateitemformat 来获取填入这里的物品格式。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    products</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 出售匹配</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        match-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          contains-lore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test1&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 购买给予命令</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        give-actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">console_command</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;items give {player} {amount}&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">message</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;测试消息&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span></span></code></pre></div><p>如果你正在使用 Paper 服务端且物品已被固定（每次生成的物品都会有所不同），你可以使用物品保存机制：你只需输入 <code>/shop itemsave</code> 命令，然后使用<strong>物品格式</strong>中的 <code>material</code> 选项，并在该选项填入保存物品的 ID 即可。</p><h3 id="示例-将不支持的经济插件用作价格" tabindex="-1">示例：将不支持的经济插件用作价格 <a class="header-anchor" href="#示例-将不支持的经济插件用作价格" aria-label="Permalink to &quot;示例：将不支持的经济插件用作价格&quot;">​</a></h3><p>在本示例中，我们会灵活利用不同的单条目与 <code>give-actions</code> 选项，这些功能可以在商品页面找到详细解释。假设玩家购买了这个物品，然后购买选项中的 <code>match-placeholder</code> 判断玩家是否拥有足够的货币。若其达到条件，则玩家会获得苹果。然后 <code>give-actions</code> 会被触发，使得玩家对应货币减少。相似地，在出售过程中，出售部分的 <code>give-actions</code> 也会被执行，因此玩家会收到对应货币。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    products</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 出售物品名称</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">APPLE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 购买给予命令</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        give-actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">console_command</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eco take {player} {amount}&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    buy-prices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 购买匹配变量</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        match-placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%economy_now_balance_placeholder%&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sell-prices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 出售给予命令</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        give-actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;console_command&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eco give {player} {amount}&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span></span></code></pre></div><h2 id="neigeitems-物品名称翻译挂钩" tabindex="-1">NeigeItems：物品名称翻译挂钩 <a class="header-anchor" href="#neigeitems-物品名称翻译挂钩" aria-label="Permalink to &quot;NeigeItems：物品名称翻译挂钩&quot;">​</a></h2><p>通过这个联动，原版物品的本地化名称可以在物品上显示，其语言依照 NeigeItems 中的设置而变化。</p><p>在这里下载 NeigeItems：<a href="https://github.com/ankhorg/NeigeItems-Kotlin/releases" target="_blank" rel="noreferrer">https://github.com/ankhorg/NeigeItems-Kotlin/releases</a></p><p>你应该下载 NeigeItems-xxx.jar（而非 NeigeItems-api），正确文件大小应该大于 10MB。</p><p>只需将其装入服务器便大功告成！插件现在会自动显示本地化名称。</p><h2 id="mythicchanger-额外物品格式选项" tabindex="-1">MythicChanger：额外物品格式选项 <a class="header-anchor" href="#mythicchanger-额外物品格式选项" aria-label="Permalink to &quot;MythicChanger：额外物品格式选项&quot;">​</a></h2><p>通过这个联动，基于物品格式，物品可以进一步修改以达到预期要求。</p><p>该功能需要的服务器安装 <strong>MythicChanger</strong> 插件，你可以在这里获取：</p><p><strong>免费版本</strong>：<a href="https://www.spigotmc.org/resources/mythicchanger-match-and-modify-all-your-items-without-trouble-1-14-1-21.98523/" target="_blank" rel="noreferrer">点此下载</a></p><p><strong>付费版本</strong>：<a href="https://www.spigotmc.org/resources/mythicchanger-premium-match-and-modify-all-your-items-without-trouble-1-14-1-21.115913/" target="_blank" rel="noreferrer">点此下载</a></p>`,23)),i("p",null,[s[10]||(s[10]=a("对于如何配置 ")),s[11]||(s[11]=i("code",null,"change-item",-1)),s[12]||(s[12]=a(" 部分，请阅读 MythicChanger 的维基，")),s[13]||(s[13]=i("a",{href:"https://simple.superiormc.cn/",target:"_blank",rel:"noreferrer"},"点此",-1)),s[14]||(s[14]=a("访问。")),s[15]||(s[15]=i("br",null,null,-1)),s[16]||(s[16]=a(" 请注意，部分修改规则需要")),t(n,{color:"red"},{default:e(()=>s[9]||(s[9]=[i("strong",null,"付费版本的 MythicChanger，而非付费版本的 UltimateShop！",-1)])),_:1})]),s[25]||(s[25]=l(`<div class="info custom-block"><p class="custom-block-title">信息</p><p>若你正在使用<strong>付费版本的 MythicChanger</strong>，它会允许你通过添加 nbt-xxx 规则使用自定义 NBT 标签。你也可以使用 <code>/mc viewnbt</code> 命令来浏览手持物品的 NBT 数据。</p></div><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">change-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  set-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;f上品钻石剑&#39;</span></span></code></pre></div>`,2)),i("h2",c,[s[18]||(s[18]=a("AdvancedEnchantments：额外物品格式选项 - ")),t(n,{color:"red"},{default:e(()=>s[17]||(s[17]=[a("仅付费版")])),_:1}),s[19]||(s[19]=a()),s[20]||(s[20]=i("a",{class:"header-anchor",href:"#advancedenchantments-额外物品格式选项-仅付费版","aria-label":'Permalink to "AdvancedEnchantments：额外物品格式选项 - <font color="red">仅付费版</font>"'},"​",-1))]),s[26]||(s[26]=l(`<p>通过这个联动，基于物品格式，物品可以拥有来自于 AdvancedEnchantments 的自定义附魔。</p><p>诸如 <code>EcoEnchants</code>、<code>ExcellentEnchants</code> 的附魔插件是通过原版注册实现的，你只需将其附魔 ID 放入配置中的附魔选项即可（如上所述）。</p><p>你可以使用 <code>plugin-enchants</code> 选项来为你的物品添加插件附魔。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">plugin-enchants</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  PLANTER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 一个 AdvancedEnchantments 附魔</span></span></code></pre></div><h2 id="mythicchanger-自定义物品匹配" tabindex="-1">MythicChanger；自定义物品匹配 <a class="header-anchor" href="#mythicchanger-自定义物品匹配" aria-label="Permalink to &quot;MythicChanger；自定义物品匹配&quot;">​</a></h2><p>自定义物品匹配方法功能需要用到 MythicChanger。</p>`,6))])}const f=p(o,[["render",y]]);export{D as __pageData,f as default};
