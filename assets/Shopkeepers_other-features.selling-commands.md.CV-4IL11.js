import{_ as a,c as r,o,al as t}from"./chunks/framework.ySGSHPST.js";const m=JSON.parse('{"title":"出售命令","description":"","frontmatter":{},"headers":[],"relativePath":"Shopkeepers/other-features.selling-commands.md","filePath":"Shopkeepers/other-features.selling-commands.md"}'),l={name:"Shopkeepers/other-features.selling-commands.md"};function d(n,e,c,i,s,p){return o(),r("div",null,e[0]||(e[0]=[t('<h1 id="出售命令" tabindex="-1">出售命令 <a class="header-anchor" href="#出售命令" aria-label="Permalink to &quot;出售命令&quot;">​</a></h1><p>本插件能够在玩家完成交易时执行命令而非单纯给予物品。</p><h2 id="创建在交易后执行命令的物品" tabindex="-1">创建在交易后执行命令的物品 <a class="header-anchor" href="#创建在交易后执行命令的物品" aria-label="Permalink to &quot;创建在交易后执行命令的物品&quot;">​</a></h2><p>你可以使用命令 <a href="./commands.html"><code>/shopkeeper setTradedCommand &lt;命令|&#39;-&#39;|&#39;?&#39;&gt;</code></a> 为手中持有的物品设置交易后命令。</p><p>示例：</p><ul><li><code>/shopkeeper settradedcommand tellraw {player_name} &quot;已收到物品。感谢交易。&quot;</code></li><li><code>/shopkeeper settradedcommand eco give {player_name} 100</code></li></ul><p>在物品交易后（无论收购或出售），它会被清除，并执行物品中包含的命令。</p><p>命令内容会存储在 <code>PublicBukkitValues</code> 部分中的 <code>shopkeepers:traded_command</code> 物品数据下。<br> 你也可以使用其他工具、命令或插件按你的喜好修改物品的外观和其他属性：只要物品包含这个值的键，那么它就会在交易后触发其中的命令。</p><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><p>这些变量可以用在命令中：</p><ul><li><code>{player_name}</code>：会被替换为触发本次交易的玩家名称。</li><li><code>{player_uuid}</code>：会被替换为触发本次交易的玩家 UUID。</li><li><code>{player_displayname}</code>：会被替换为触发本次交易的玩家展示名称。</li><li><code>{shop_uuid}</code>：会被替换为参与本次交易的商店 UUID。</li></ul><h2 id="执行多条命令" tabindex="-1">执行多条命令 <a class="header-anchor" href="#执行多条命令" aria-label="Permalink to &quot;执行多条命令&quot;">​</a></h2><p>每个物品只能附加一条简单命令（见<a href="#局限性">局限性</a>章节）。但是，你可以通过 Bukkit 自带的 <a href="https://bukkit.fandom.com/wiki/Commands.yml" target="_blank" rel="noreferrer">commands.yml</a> 定义更多命令的简写并使用它们。</p><h2 id="以交易玩家身份执行命令" tabindex="-1">以交易玩家身份执行命令 <a class="header-anchor" href="#以交易玩家身份执行命令" aria-label="Permalink to &quot;以交易玩家身份执行命令&quot;">​</a></h2><p>默认情况下交易命令以控制台身份执行。<br> 你可以使用 Minecraft 原版的 <a href="https://zh.minecraft.wiki/w/%E5%91%BD%E4%BB%A4/execute" target="_blank" rel="noreferrer"><code>/execute</code></a> 命令来以玩家身份执行命令。</p><h2 id="无偿交易" tabindex="-1">无偿交易 <a class="header-anchor" href="#无偿交易" aria-label="Permalink to &quot;无偿交易&quot;">​</a></h2><p>这个功能可以用于设置不获得任何物品的交易。例如你作为管理员，想要通过玩家商店收集物品：只需设置执行无实际功能命令（如 <code>tellraw</code>）的物品。</p><h2 id="局限性" tabindex="-1">局限性 <a class="header-anchor" href="#局限性" aria-label="Permalink to &quot;局限性&quot;">​</a></h2><p>这个功能不意味着第三方插件或脚本完全没有机会实现更复杂的自定义交易行为。为了减少实现与维护的工作量，且为了防止功能随时间畸形，物品只能分配一个命令，且只能支持（上文提及的）少数变量。</p><p>更高级的功能，如命令随机选中、条件执行命令、间隔执行命令等都可通过第三方插件实现，之后被命令触发。</p><p>例如，你可以着手研究那些脚本插件，如 <a href="https://denizenscript.com/" target="_blank" rel="noreferrer">DenizenScript</a>：这个插件允许你编写自定义脚本，并通过命令 <a href="https://meta.denizenscript.com/Docs/Languages#/ex%20command" target="_blank" rel="noreferrer"><code>/ex</code></a> 触发。</p><p>如果需要额外的内容，如商店的位置或拥有者，或许一个监听 <code>ShopkeeperTradeEvent</code> 事件的插件能更好满足要求。</p>',22)]))}const u=a(l,[["render",d]]);export{m as __pageData,u as default};
