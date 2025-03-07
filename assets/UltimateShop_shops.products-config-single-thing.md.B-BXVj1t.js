import{_ as k,C as n,c as o,o as d,b1 as l,j as i,G as t,a,w as r}from"./chunks/framework.CC7vnuC4.js";const A=JSON.parse('{"title":"💰 物品配置：单条目","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/UltimateShop"},{"title":"💰 物品配置：单条目","link":"/UltimateShop/shops.products-config-single-thing"}]},"headers":[],"relativePath":"UltimateShop/shops.products-config-single-thing.md","filePath":"UltimateShop/shops.products-config-single-thing.md"}'),E={name:"UltimateShop/shops.products-config-single-thing.md"};function c(g,s,y,u,F,m){const e=n("font"),p=n("NolebaseGitContributors"),h=n("NolebaseGitChangelog");return d(),o("div",null,[s[7]||(s[7]=l('<h1 id="💰-物品配置-单条目" tabindex="-1">💰 物品配置：单条目 <a class="header-anchor" href="#💰-物品配置-单条目" aria-label="Permalink to &quot;💰 物品配置：单条目&quot;">​</a></h1><p>每个在出售物品中的单独物品或价格即为<strong>单条目</strong>。所以，每个物品都有这些类型：</p><ul><li>购买价格：物品的买价，玩家需要支付对应货币购买这个物品，若不存在（即 <code>buy-prices</code> 部分不存在于配置），则该物品不可以被购买。</li><li>出售价格：物品的卖价，玩家向商店出售物品后可获得的货币数量，若不存在（即 <code>sell-prices</code> 部分不存在于配置），则该物品不可以被出售。</li><li>物品：参与交易的物品，玩家会在交易之后得到或失去对应物品。</li></ul><h2 id="单条目类型" tabindex="-1">单条目类型 <a class="header-anchor" href="#单条目类型" aria-label="Permalink to &quot;单条目类型&quot;">​</a></h2><p>每种内容类型都可设置不限数量的内容，例如设置五种购买价格、一百种出售价格甚至是获得一千个物品！</p><p>每个单条目都拥有如下类型：</p>',6)),i("ul",null,[s[5]||(s[5]=l('<li>原版物品：通过“<a href="./format.itemformat">物品格式</a>”让我们知道你需要在商店中向玩家出售或收取什么原版物品。<strong>（购买/出售/物品）</strong></li><li>挂钩物品：通过“<a href="./info.compatibility#直接支持的自定义物品系列">支持插件</a>”的物品让我们知道你需要在商店中向玩家出售或收取什么物品。该类型同样使用“<a href="./format.itemformat">物品格式</a>”。<strong>（购买/出售/物品）</strong></li><li>匹配物品：通过“<a href="./features.custom-item-match-method">自定义物品匹配方法</a>”来让我们知道你需要匹配什么物品。<strong>（购买/物品）</strong></li><li>原版经济/挂钩经济：通过“<a href="./format.economyformat">经济格式</a>”让我们知道你需要在商店中给予或收取玩家什么货币。</li>',4)),i("li",null,[s[1]||(s[1]=a("自定义：若上述类型都没能满足你的要求，你可以创建自己的单条目！你需要在单条目配置中添加一个 ")),s[2]||(s[2]=i("code",null,"match-placeholder",-1)),s[3]||(s[3]=a(" 选项，让插件知道这个自定义物品/价格当前的数量，然后我们会比较你在这里设置的数值。在上述的示例中，我们会比较玩家的生命值。")),s[4]||(s[4]=i("strong",null,"如果你的经济插件不受支持，只需将其的经济变量放入这里即可解决！（出售/物品）",-1)),t(e,{color:"red"},{default:r(()=>s[0]||(s[0]=[i("strong",null,"（仅付费版）",-1)])),_:1})]),s[6]||(s[6]=i("li",null,[a("免费：不包含物品格式、经济格式、"),i("code",null,"match-item"),a(" 部分和 "),i("code",null,"match-placeholder"),a(" 部分的物品视作免费。")],-1))]),s[8]||(s[8]=l(`<h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><p>在物品配置中，我们通过几个选项配置了对应类型的单条目。根据你需要的类型，在这些选项中填入了对应的内容。部分选项有一些额外内容可填入，如下：</p><ul><li><code>products</code>：用于出售的物品。支持“<a href="./format.itemformat">物品格式</a>”与“<a href="./format.economyformat">经济格式</a>”。你也可以根据单条目内容添加<a href="./features.custom-item-match-method">自定义出售匹配方法</a>。<strong>可选。若不设置，玩家在交易后不会获得任何东西。适用于命令商店。</strong><ul><li><code>products.conditions</code>：玩家必须达到指定条件才可以购买这个物品。在此使用“<a href="./format.condition-format">条件格式</a>”。</li><li><code>products.give-actions</code>：在物品基于玩家后执行的动作。在此使用“<a href="./format.action-format">动作格式</a>”。</li><li><code>products.give-item</code>：在玩家尝试购买时是否直接给予物品。</li></ul></li><li><code>buy-prices</code>：物品的买价。支持<a href="./format.itemformat">物品格式</a>与<a href="./format.economyformat">经济格式</a>。你也可以根据单条目内容添加<a href="./features.custom-item-match-method">自定义出售匹配方法</a>。<strong>可选。若不设置则表示物品不可购买。</strong><ul><li><code>buy-prices.start-apply</code>：在指定次数购买后应用该价格。仅支持 <code>ANY</code> 或 <code>ALL</code> 定价模式。<strong>可选，默认为 0。</strong></li><li><code>buy=prices.end-apply</code>：在指定次数购买后不再应用该价格。仅支持 <code>ANY</code> 或 <code>ALL</code> 定价模式。<strong>可选。默认为无穷大。</strong></li><li><code>buy-prices.apply</code>：应用该价格的购买次数，格式为：<code>[1,2,3,4]</code>。仅支持 <code>ANY</code> 或 <code>ALL</code> 定价模式。<strong>可选。默认使用 <code>start-apply</code> 项的值。</strong></li><li><code>buy-prices.placeholder</code>：显示在 <code>{price}</code> 中的内容。<strong>可选。默认使用配置文件的中的“未知类型”。</strong></li><li><code>buy-prices.conditions</code>：玩家必须满足指定条件才可使用该价格。在此使用“<a href="./format.condition-format">条件格式</a>”。<strong>可选。默认不设置条件。</strong></li></ul></li><li><code>sell-prices</code>：物品的卖价。支持<a href="./format.itemformat">物品格式</a>与<a href="./format.economyformat">经济格式</a>。你也可以根据单条目内容添加<a href="./features.custom-item-match-method">自定义出售匹配方法</a>。<strong>可选。若不设置则表示物品不可出售。</strong><ul><li>它也支持所有能填入 <code>buy-prices</code> 下的选项。</li><li><code>sell-prices.give-actions</code>：物品给予玩家后执行的动作，使用“<a href="./format.action-format">动作格式</a>”。<strong>可选。</strong></li></ul></li></ul><h2 id="单条目下的动作与条件" tabindex="-1">单条目下的动作与条件 <a class="header-anchor" href="#单条目下的动作与条件" aria-label="Permalink to &quot;单条目下的动作与条件&quot;">​</a></h2><p>你可能注意到，你可以设置在单条目给予玩家时触发的动作，以及设置玩家使用该单条目的条件。这对于你播放声音或在玩家交易后执行命令时非常有用。</p><ul><li>动作：在单条目配置中添加 <code>give-actions</code> 部分即可。对于命令商店、权限商店、附魔商店等很有用。另外，<strong>如果你的经济/物品插件不支持 UltimateShop，只需将其给予货币/物品的命令填入这里即可！</strong>（<code>{player}</code> 表示玩家名称，<code>{amount}</code> 表示价格/物品数量）如果你想要让物品只执行动作，不要忘了在单条目配置中加入 <code>give-item: false</code> 设置！</li><li>条件：只需在单条目配置下添加 <code>conditions</code> 部分即可。</li></ul><h3 id="单条目-give-actions-与物品-actions-sell-actions-的不同之处" tabindex="-1">单条目 <code>give-actions</code> 与物品 <code>actions</code>/<code>sell-actions</code> 的不同之处 <a class="header-anchor" href="#单条目-give-actions-与物品-actions-sell-actions-的不同之处" aria-label="Permalink to &quot;单条目 \`give-actions\` 与物品 \`actions\`/\`sell-actions\` 的不同之处&quot;">​</a></h3><ul><li><code>give-actions</code> 只会在单条目触发且给予玩家时执行。<code>buy-actions</code>/<code>sell-actions</code> 总是会在玩家成功购买或出售物品时给予。</li><li><code>give-actions</code> 的 <code>{amount}</code> 变量会返回单价格/物品数量，而 <code>buy-actions</code>/<code>sell-actions</code> 则会返回玩家此次购买或出售的物品数量。 例如，玩家出售了一组苹果并获得了 100 硬币，则 <code>give-actions</code> 的 <code>{amount}</code> 变量会返回 100，而 <code>buy-actions</code>/<code>sell-actions</code> 的变量会返回 64。</li></ul><h2 id="相似选项" tabindex="-1">相似选项 <a class="header-anchor" href="#相似选项" aria-label="Permalink to &quot;相似选项&quot;">​</a></h2><ul><li><code>products.XXX.conditions</code> 可被 <code>products-conditions</code> 部分替换。</li><li><code>buy(sell)-prices.XXX.conditions</code> 可被 <code>buy(sell)-prices-conditions section</code> 部分替换。</li></ul><p>如下两个配置在功能上是相同的：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    products</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">REDSTONE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    products-conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">placeholder</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{random_daily-1}&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;==&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A&#39;</span></span></code></pre></div><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    products</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">REDSTONE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">placeholder</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{random_daily-1}&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;==&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A&#39;</span></span></code></pre></div><p>自 3.4.3 版本开始，你可以指定<strong>单条目条件</strong>的<strong>键名</strong>。如果你确认你的物品、买价及卖价均使用相同条件，你就可以将它们的键名设置为相同的值，而无需为每条内容单独配置。你可以在 <code>config.yml</code> 下找到这些设置：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  products-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;conditions&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  buy-prices-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;conditions&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  sell-prices-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;conditions&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  display-item-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;conditions&#39;</span></span></code></pre></div><p>这个示例让所有 <code>conditions</code> 都变得相同，因此商店配置会变成这样：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    price-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CLASSIC_ANY</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    product-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CLASSIC_ANY</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    products</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      one</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">REDSTONE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        give-actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">message</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;你好!&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      two</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IRON_INGOT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sell-prices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      one</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        economy-plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Vault</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;6{amount} 硬币&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        start-apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      two</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        economy-plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Vault</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;6{amount} 硬币&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        start-apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      one</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">placeholder</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{random_daily}&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;==&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      two</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">placeholder</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{random_daily}&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;==&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;B&#39;</span></span></code></pre></div>`,17)),t(p),t(h)])}const f=k(E,[["render",c]]);export{A as __pageData,f as default};
