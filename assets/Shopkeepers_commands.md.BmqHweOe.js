import{_ as h,C as a,c as t,o as s,b1 as d,G as o}from"./chunks/framework.CC7vnuC4.js";const q=JSON.parse('{"title":"命令","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/Shopkeepers"},{"title":"命令","link":"/Shopkeepers/commands"}]},"headers":[],"relativePath":"Shopkeepers/commands.md","filePath":"Shopkeepers/commands.md"}'),l={name:"Shopkeepers/commands.md"};function i(c,e,n,k,m,u){const r=a("NolebaseGitContributors"),p=a("NolebaseGitChangelog");return s(),t("div",null,[e[0]||(e[0]=d('<h1 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h1><p>通常情况下，命令不可以用于创建或设置商店。下文列出的多数命令只能给管理员使用。每个命令对应的权限节点可以在<a href="./installtion-updating.permissions">权限列表</a>找到。</p><h2 id="命令参数" tabindex="-1">命令参数： <a class="header-anchor" href="#命令参数" aria-label="Permalink to &quot;命令参数：&quot;">​</a></h2><ul><li><code>[可选参数]</code>：不一定要填入的参数。但是，部分情况下某些参数只会是可选的，例如以玩家身份执行或是看向目标商店实体时。</li><li><code>&lt;必选参数&gt;</code>：必须填入的参数。</li><li><code>&lt;参数1|参数2&gt;</code>：可替代参数。可以输入<code>参数1</code> 或者<code>参数2</code>。</li><li><code>&lt;&#39;文本&#39;&gt;</code>：字面意义的参数，需要将引号内的字当做参数填入。</li><li><code>[商店名称]</code>：除非额外标注，否则需要看向商店实体、指定商店名称、ID 或唯一 ID。</li><li><code>[玩家名称]</code>：除非额外标注，如果不指定玩家名称，则受影响目标为执行命令的玩家。</li><li><code>[页码]</code>：若不填则默认为第 <code>1</code> 页。</li></ul><h2 id="命令列表" tabindex="-1">命令列表 <a class="header-anchor" href="#命令列表" aria-label="Permalink to &quot;命令列表&quot;">​</a></h2><h3 id="shopkeeper-help" tabindex="-1"><code>/shopkeeper help</code> <a class="header-anchor" href="#shopkeeper-help" aria-label="Permalink to &quot;`/shopkeeper help`&quot;">​</a></h3><p>显示可用命令。玩家没有权限执行的命令会被隐藏。</p><h3 id="shopkeeper-商店类型-物体类型" tabindex="-1"><code>/shopkeeper [商店类型] [物体类型]</code> <a class="header-anchor" href="#shopkeeper-商店类型-物体类型" aria-label="Permalink to &quot;`/shopkeeper [商店类型] [物体类型]`&quot;">​</a></h3><p>在指定方块的位置创建管理员商店。</p><p>如果配置文本中启用了允许命令创建玩家商店，且未指定商店类型，同时玩家执行命令时看向容器（如箱子），则执行命令后会创建玩家商店村民实体。</p><h3 id="shopkeeper-reload" tabindex="-1"><code>/shopkeeper reload</code> <a class="header-anchor" href="#shopkeeper-reload" aria-label="Permalink to &quot;`/shopkeeper reload`&quot;">​</a></h3><p>重载插件。这会保存任何尚未保存的变动，之后再重载配置文件、</p><h3 id="shopkeeper-notify-trades" tabindex="-1"><code>/shopkeeper notify &lt;&#39;trades&#39;&gt;</code> <a class="header-anchor" href="#shopkeeper-notify-trades" aria-label="Permalink to &quot;`/shopkeeper notify &lt;&#39;trades&#39;&gt;`&quot;">​</a></h3><p>切换本次游戏登录期间交易提醒的开关。</p><h3 id="shopkeeper-lisy-玩家名称-admin-管理员-all-全部-页码" tabindex="-1"><code>/shopkeeper lisy [玩家名称|&#39;admin&#39;（管理员）|&#39;all&#39;（全部）] [页码]</code> <a class="header-anchor" href="#shopkeeper-lisy-玩家名称-admin-管理员-all-全部-页码" aria-label="Permalink to &quot;`/shopkeeper lisy [玩家名称|&#39;admin&#39;（管理员）|&#39;all&#39;（全部）] [页码]`&quot;">​</a></h3><p>查询玩家拥有的商店（若未指定玩家或 <code>&#39;admin&#39;</code> 以表示管理员商店），指定玩家的商店或所有管理员商店。列出的内容会分页显示。</p><h3 id="shopkeeper-remove-商店名称" tabindex="-1"><code>/shopkeeper remove [商店名称]</code> <a class="header-anchor" href="#shopkeeper-remove-商店名称" aria-label="Permalink to &quot;`/shopkeeper remove [商店名称]`&quot;">​</a></h3><p>移除指定的商店实体。你需要看向商店、指定 ID 、唯一 ID 或其名称才可移除。</p><h3 id="shopkeeper-removeall-玩家名称-player-所有玩家-admin-所有管理员" tabindex="-1"><code>/shopkeeper removeAll [玩家名称|&#39;player&#39;（所有玩家）|&#39;admin&#39;（所有管理员）]</code> <a class="header-anchor" href="#shopkeeper-removeall-玩家名称-player-所有玩家-admin-所有管理员" aria-label="Permalink to &quot;`/shopkeeper removeAll [玩家名称|&#39;player&#39;（所有玩家）|&#39;admin&#39;（所有管理员）]`&quot;">​</a></h3><p>移除指定玩家拥有的所有商店（若未指定参数），或者其他玩家的商店、所有玩家的商店、或者所有管理员商店。该命令需要通过 <code>/shopkeeper confirm</code> 确认操作。</p><h3 id="shopkeeper-give-玩家名称-数量" tabindex="-1"><code>/shopkeeper give [玩家名称] [数量]</code> <a class="header-anchor" href="#shopkeeper-give-玩家名称-数量" aria-label="Permalink to &quot;`/shopkeeper give [玩家名称] [数量]`&quot;">​</a></h3><p>给予指定玩家特定数量的商店创建物品。</p><h3 id="shopkeeper-givecurrency-玩家名称-base-high-数量" tabindex="-1"><code>/shopkeeper giveCurrency [玩家名称] [&#39;base&#39;|&#39;high&#39;] [数量]</code> <a class="header-anchor" href="#shopkeeper-givecurrency-玩家名称-base-high-数量" aria-label="Permalink to &quot;`/shopkeeper giveCurrency [玩家名称] [&#39;base&#39;|&#39;high&#39;] [数量]`&quot;">​</a></h3><p>给予指定玩家特定数量在配置文本中预先设置好的货币物品。</p><h3 id="shopkeeper-setcurrency-base-high" tabindex="-1"><code>/shopkeeper setCurrency [&#39;base&#39;|&#39;high&#39;]</code> <a class="header-anchor" href="#shopkeeper-setcurrency-base-high" aria-label="Permalink to &quot;`/shopkeeper setCurrency [&#39;base&#39;|&#39;high&#39;]`&quot;">​</a></h3><p>将手中的物品设置为指定的货币物品。</p><h3 id="shopkeeper-remote-商店名称-玩家名称" tabindex="-1"><code>/shopkeeper remote [商店名称] [玩家名称]</code> <a class="header-anchor" href="#shopkeeper-remote-商店名称-玩家名称" aria-label="Permalink to &quot;`/shopkeeper remote [商店名称] [玩家名称]`&quot;">​</a></h3><p>远程打开制定商店。商店可以通过名称、ID、唯一 ID 或看向实体选中。另外，如果命令执行者拥有 <code>shopkeeper.remote.otherplayer</code> 权限，则商店可以为其他玩家打开。</p><h3 id="shopkeeper-edit-商店名称" tabindex="-1"><code>/shopkeeper edit [商店名称]</code> <a class="header-anchor" href="#shopkeeper-edit-商店名称" aria-label="Permalink to &quot;`/shopkeeper edit [商店名称]`&quot;">​</a></h3><p>允许通过看向商店、指定 ID 或唯一 ID 的方式远程编辑它们。</p><h3 id="shopkeeper-transfer-新拥有者" tabindex="-1"><code>/shopkeeper transfer &lt;新拥有者&gt;</code> <a class="header-anchor" href="#shopkeeper-transfer-新拥有者" aria-label="Permalink to &quot;`/shopkeeper transfer &lt;新拥有者&gt;`&quot;">​</a></h3><p>将商店所有权转让给其他玩家。</p><h3 id="shopkeeper-settradeperm-商店名称-权限节点" tabindex="-1"><code>/shopkeeper setTradePerm [商店名称] &lt;权限节点|&#39;-&#39;|&#39;?&#39;&gt;</code> <a class="header-anchor" href="#shopkeeper-settradeperm-商店名称-权限节点" aria-label="Permalink to &quot;`/shopkeeper setTradePerm [商店名称] &lt;权限节点|&#39;-&#39;|&#39;?&#39;&gt;`&quot;">​</a></h3><p>设置、移除（<code>-</code>）或显示（<code>?</code>）管理员交易商店的权限。玩家尝试与指定商店交易时，除了插件本身的权限之外，还会额外要求通过该命令设置的权限。<br> 你可以使用任何文本当做交易权限。例如 <code>/shopkeeper setTradePerm Bob my.custom.permission</code> 将会在玩家试图与名为 <code>Bob</code> 的商店交易时要求拥有 <code>my.custom.permission</code> 权限。</p><h3 id="shopkeeper-settradedcommand-命令" tabindex="-1"><code>/shopkeeper setTradedCommand &lt;命令|&#39;-&#39;|&#39;?&#39;&gt;</code> <a class="header-anchor" href="#shopkeeper-settradedcommand-命令" aria-label="Permalink to &quot;`/shopkeeper setTradedCommand &lt;命令|&#39;-&#39;|&#39;?&#39;&gt;`&quot;">​</a></h3><p>设置设置、移除（<code>-</code>）或显示（<code>?</code>）商店内交易手中物品后执行的命令。<br> 示例：<code>/shopkeeper setTradedCommand say Hello world!</code></p><p>另见<a href="./other-features.selling-commands">出售命令</a>章节。</p><h3 id="shopkeeper-setforhire-商店名称" tabindex="-1"><code>/shopkeeper setForHire [商店名称]</code> <a class="header-anchor" href="#shopkeeper-setforhire-商店名称" aria-label="Permalink to &quot;`/shopkeeper setForHire [商店名称]`&quot;">​</a></h3><p>将指定商店出租。将用作租赁价格的物品放在手中并看向商店或对应商店的容器。这会允许玩家通过支付租赁费用来租借商店并管理该商店。</p><h3 id="shopkeeper-editvillager-村民类型" tabindex="-1"><code>/shopkeeper editVillager [村民类型]</code> <a class="header-anchor" href="#shopkeeper-editvillager-村民类型" aria-label="Permalink to &quot;`/shopkeeper editVillager [村民类型]`&quot;">​</a></h3><p>打开指定村民或流浪商人的编辑器。村民/流浪商人可以通过 UUID 或看向它选中。</p><h2 id="shopkeeper-快照命令" tabindex="-1">Shopkeeper 快照命令 <a class="header-anchor" href="#shopkeeper-快照命令" aria-label="Permalink to &quot;Shopkeeper 快照命令&quot;">​</a></h2><h3 id="shopkeeper-snapshot-list-商店名称-页码" tabindex="-1"><code>/shopkeeper snapshot list [商店名称] [页码]</code> <a class="header-anchor" href="#shopkeeper-snapshot-list-商店名称-页码" aria-label="Permalink to &quot;`/shopkeeper snapshot list [商店名称] [页码]`&quot;">​</a></h3><p>列出商店的快照备份。</p><h3 id="shopkeeper-snapshot-create-商店名称-快照名称" tabindex="-1"><code>/shopkeeper snapshot create [商店名称] &lt;快照名称&gt;</code> <a class="header-anchor" href="#shopkeeper-snapshot-create-商店名称-快照名称" aria-label="Permalink to &quot;`/shopkeeper snapshot create [商店名称] &lt;快照名称&gt;`&quot;">​</a></h3><p>创建指定名称的商店快照。名称不允许包含彩色代码或空格。</p><h3 id="shopkeeper-snapshot-remove-商店名称-快照名称-快照-id" tabindex="-1"><code>/shopkeeper snapshot remove [商店名称] &lt;快照名称|快照 ID&gt;</code> <a class="header-anchor" href="#shopkeeper-snapshot-remove-商店名称-快照名称-快照-id" aria-label="Permalink to &quot;`/shopkeeper snapshot remove [商店名称] &lt;快照名称|快照 ID&gt;`&quot;">​</a></h3><p>通过名称或 ID 移除指定的商店快照。</p><h2 id="调试与辅助命令" tabindex="-1">调试与辅助命令 <a class="header-anchor" href="#调试与辅助命令" aria-label="Permalink to &quot;调试与辅助命令&quot;">​</a></h2><h3 id="shopkeeper-confirm" tabindex="-1"><code>/shopkeeper confirm</code> <a class="header-anchor" href="#shopkeeper-confirm" aria-label="Permalink to &quot;`/shopkeeper confirm`&quot;">​</a></h3><p>执行某些危险的操作时，插件会要求执行一次这个命令（如通过命令删除所有商店）</p><h3 id="shopkeeper-replaceallwithvanillavillagers" tabindex="-1"><code>/shopkeeper replaceAllWithVanillaVillagers</code> <a class="header-anchor" href="#shopkeeper-replaceallwithvanillavillagers" aria-label="Permalink to &quot;`/shopkeeper replaceAllWithVanillaVillagers`&quot;">​</a></h3><p>删除所有村民商店，并将其替换为原版的无 AI 村民，几乎与插件相同。将存档转化为原版 Minecraft 时会很有用。例如在服务器关闭时，想要玩家能够下载存档并使用地图内的商店。</p><p>尚不支持实体装备，因为原版村民会在某些情况下扔掉它们的装备，且无法控制。</p><p>这个命令需要如下权限：<code>shopkeeper.debug</code>、<code>shopkeeper.remove-all.player</code> 以及 <code>shopkeeper.remove-all.admin</code></p><h3 id="shopkeeper-cleanupcitizensshopkeepers" tabindex="-1"><code>/shopkeeper cleanupCitizensShopkeepers</code> <a class="header-anchor" href="#shopkeeper-cleanupcitizensshopkeepers" aria-label="Permalink to &quot;`/shopkeeper cleanupCitizensShopkeepers`&quot;">​</a></h3><p>移除所有无效的 Citizens 商店。一般用于清理不存在对应 NPC 的商店。</p><h3 id="shopkeeper-convertitems-玩家名称-all" tabindex="-1"><code>/shopkeeper convertItems [玩家名称] [&#39;all&#39;]</code> <a class="header-anchor" href="#shopkeeper-convertitems-玩家名称-all" aria-label="Permalink to &quot;`/shopkeeper convertItems [玩家名称] [&#39;all&#39;]`&quot;">​</a></h3><p>这个命令可以用于转化手持物品至 Spigot 的内部物品格式。该命令会将手中的物品经过 Spigot 物品序列化与解序列化，与在商店中交易或插件重载时发生的情况相同。</p><p>它可以用于手动修复那些不能用于交易（或不再）符合 Spigot 内部物品数据格式。见配置文件中 <code>convert-player-items</code> 设置项的注释。</p><p>在更新版的 Spigot 中，这个命令可能会失去其原有的效果，因为 Spigot 现在坚持使用最初的文本数据格式物品（物品显示名称、物品描述等）</p><h3 id="shopkeeper-debug-选项" tabindex="-1"><code>/shopkeeper debug [选项]</code> <a class="header-anchor" href="#shopkeeper-debug-选项" aria-label="Permalink to &quot;`/shopkeeper debug [选项]`&quot;">​</a></h3><p>切换指定调试选项或调试模式的开关。调试模式与调试选项可以在配置文本中设置。</p><p>开启调试模式后，插件会在多个情况下向控制台中输出额外信息，这可能有助于排查问题。</p><h3 id="shopkeeper-check" tabindex="-1"><code>/shopkeeper check</code> <a class="header-anchor" href="#shopkeeper-check" aria-label="Permalink to &quot;`/shopkeeper check`&quot;">​</a></h3><p>显示有关载入区块、实体数量、载入商店与 AI 和重力处理时间的统计数据。</p><h3 id="shopkeeper-debugcreateshops-商店数量-testeqiupment-测试装备" tabindex="-1"><code>/shopkeeper debugCreateShops [商店数量|&#39;testEqiupment&#39;（测试装备）]</code> <a class="header-anchor" href="#shopkeeper-debugcreateshops-商店数量-testeqiupment-测试装备" aria-label="Permalink to &quot;`/shopkeeper debugCreateShops [商店数量|&#39;testEqiupment&#39;（测试装备）]`&quot;">​</a></h3><p>以调试目的创建商店。</p><ul><li>参数 <code>testEquipment</code> 是固定的：为每种实体类型创建其可显示的固定装备。可用于测试哪些格子在对应实体上可见。商店实体会按列生成，从玩家当前位置开始，向玩家面朝的位置排列，间距 2 格。此时会忽略 <code>shopCount</code> 参数。</li><li>其他情况下：创建指定数量的管理员商店（默认为 <code>10</code>）。适合用于性能测试。商店实体会按列生成，从何玩家当前位置开始，向玩家面朝的位置排列，间距 1 格。</li></ul><h3 id="shopkeeper-checkitem" tabindex="-1"><code>/shopkeeper checkitem</code> <a class="header-anchor" href="#shopkeeper-checkitem" aria-label="Permalink to &quot;`/shopkeeper checkitem`&quot;">​</a></h3><p>显示手持物品的调试信息，或者将主副手的物品进行比较。</p><h3 id="shopkeeper-yaml" tabindex="-1"><code>/shopkeeper yaml</code> <a class="header-anchor" href="#shopkeeper-yaml" aria-label="Permalink to &quot;`/shopkeeper yaml`&quot;">​</a></h3><p>显示手中物品 Bukkit YAML 的格式序列化数据，及其在配置文件中应当使用的样式。输出会在控制台记录，便于复制（也因为其在游戏内过大而难以完整显示）</p><p>注意：物品的原 Minecraft NBT 数据可以通过 Minecraft 自带的 <a href="https://zh.minecraft.wiki/w/%E5%91%BD%E4%BB%A4/data" target="_blank" rel="noreferrer"><code>/data get entity @s</code> 命令</a>查看。</p><h3 id="shopkeeper-testdamage-伤害值-每刻攻击次数-攻击持续刻数" tabindex="-1"><code>/shopkeeper testDamage [伤害值] [每刻攻击次数] [攻击持续刻数]</code> <a class="header-anchor" href="#shopkeeper-testdamage-伤害值-每刻攻击次数-攻击持续刻数" aria-label="Permalink to &quot;`/shopkeeper testDamage [伤害值] [每刻攻击次数] [攻击持续刻数]`&quot;">​</a></h3><p>可用于调试大量攻击事件的性能。</p><h3 id="shopkeeper-testspawn-重复次数" tabindex="-1"><code>/shopkeeper testSpawn [重复次数]</code> <a class="header-anchor" href="#shopkeeper-testspawn-重复次数" aria-label="Permalink to &quot;`/shopkeeper testSpawn [重复次数]`&quot;">​</a></h3><p>用于测量当前区块内重生成激活的商店实体所用时间。</p>',78)),o(r),o(p)])}const f=h(l,[["render",i]]);export{q as __pageData,f as default};
