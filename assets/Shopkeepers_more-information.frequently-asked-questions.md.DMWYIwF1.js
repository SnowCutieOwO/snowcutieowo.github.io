import{_ as a,c as r,o as i,al as t}from"./chunks/framework.ySGSHPST.js";const f=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"Shopkeepers/more-information.frequently-asked-questions.md","filePath":"Shopkeepers/more-information.frequently-asked-questions.md"}'),o={name:"Shopkeepers/more-information.frequently-asked-questions.md"};function l(n,e,s,h,c,p){return i(),r("div",null,e[0]||(e[0]=[t('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><nav class="table-of-contents"><ul><li><a href="#目录">目录</a><ul><li><a href="#为什么我不能从自己的商店买东西">为什么我不能从自己的商店买东西？</a></li><li><a href="#交易结果的物品不显示">交易结果的物品不显示！</a></li><li><a href="#商店不接受任何头颅类物品">商店不接受任何头颅类物品！</a></li><li><a href="#我不能把物品从交易界面格子中拿出来">我不能把物品从交易界面格子中拿出来！</a></li><li><a href="#我能设置修复物品耐久-物品损坏程度-的交易吗">我能设置修复物品耐久（物品损坏程度）的交易吗？</a></li><li><a href="#为什么不从原版-minecraft-的交易逻辑中脱离-从而实现某些原本不可能的交易">为什么不从原版 Minecraft 的交易逻辑中脱离，从而实现某些原本不可能的交易？</a></li><li><a href="#交易可修复物品时出现了问题">交易可修复物品时出现了问题！</a></li><li><a href="#我因为对应玩家的货架箱子已满而不能通过按住-shift-键点击来快速交易-即便它们没有被装满">我因为对应玩家的货架箱子已满而不能通过按住 Shift 键点击来快速交易，即便它们没有被装满</a></li><li><a href="#配置文件中不能使用彩色字符-它们变成了乱码">配置文件中不能使用彩色字符！它们变成了乱码！</a></li><li><a href="#我不能给商店设置彩色名称">我不能给商店设置彩色名称！</a></li><li><a href="#你会为-基于-vault-的-经济插件添加支持吗">你会为（基于 Vault 的）经济插件添加支持吗？</a></li><li><a href="#我如何禁用玩家商店">我如何禁用玩家商店？</a></li><li><a href="#我如何禁用通过村民刷怪蛋创建交易商店">我如何禁用通过村民刷怪蛋创建交易商店？</a></li><li><a href="#我如何让村民刷怪蛋能正常使用">我如何让村民刷怪蛋能正常使用？</a></li><li><a href="#什么是-村民等级">什么是“村民等级”？</a></li><li><a href="#如何在诸如-worldguard-等插件阻止生成商店的时候强制生成实体">如何在诸如 WorldGuard 等插件阻止生成商店的时候强制生成实体？</a></li><li><a href="#能否重新平衡村民机制-或允许管理员修改普通村民的交易选项">能否重新平衡村民机制，或允许管理员修改普通村民的交易选项？</a></li><li><a href="#我能一次出售多于一组的物品吗">我能一次出售多于一组的物品吗？</a></li><li><a href="#我服务器的-timings-报告显示本插件占用较大">我服务器的 timings 报告显示本插件占用较大！</a></li><li><a href="#我如何维持一个良好的经济">我如何维持一个良好的经济？</a></li><li><a href="#我是插件开发者-我如何检测指定实体是否为本插件的商店">我是插件开发者：我如何检测指定实体是否为本插件的商店？</a></li><li><a href="#我能看看源码吗">我能看看源码吗？</a></li></ul></li><li><a href="#我有别的问题">我有别的问题！</a></li><li><a href="#在提交议题之前">在提交议题之前：</a></li><li><a href="#在报告问题之前">在报告问题之前：</a></li><li><a href="#在报告问题时">在报告问题时：</a></li></ul></nav><h3 id="为什么我不能从自己的商店买东西" tabindex="-1">为什么我不能从自己的商店买东西？ <a class="header-anchor" href="#为什么我不能从自己的商店买东西" aria-label="Permalink to &quot;为什么我不能从自己的商店买东西？&quot;">​</a></h3><p>你不能从自己设置的玩家商店里买东西。这个限制是为了防止你刷取物品。但这不能完全阻止它们，只是将其变得不容易触发。</p><p>配置文件中也有相关选项：<code>prevent-trading-with-own-shop</code>。</p><h3 id="交易结果的物品不显示" tabindex="-1">交易结果的物品不显示！ <a class="header-anchor" href="#交易结果的物品不显示" aria-label="Permalink to &quot;交易结果的物品不显示！&quot;">​</a></h3><p>交易提供的物品可能不与所需物品匹配。Minecraft 要求玩家提供的物品至少包含交易所需物品的数据。</p><p>但不是所有内部数据都能被玩家看见：你可能需要工具来比较这些物品的内部数据（例如，PowerNBT 插件，或者将物品移动至箱子内，再输入 Minecraft 自带的命令 <code>/data get block &lt;坐标&gt;</code>）。</p><p>如果你启用了调试模式，控制台还会在交易失败时将相关信息输出在后台。</p><p>大部分情况下这些问题都是因为物品产生了内部数据的差异导致的。部分插件可能会对物品添加独有的内部数据，来记录其源头、拥有者或与物品有关的其他信息。</p><p>部分插件会对物品添加一个虚拟附魔达到发光的效果。取决于加载顺序（大部分情况下是随机的，所以你不能指望着每次加载顺序都一样）。每次服务器重启时，本插件存储的该物品上的附魔都无法加载。这会导致物品不再包含附魔，从而使得交易无法完成。如果要解决这个问题，你需要不可避免地弃用这种发光效果。</p><h3 id="商店不接受任何头颅类物品" tabindex="-1">商店不接受任何头颅类物品！ <a class="header-anchor" href="#商店不接受任何头颅类物品" aria-label="Permalink to &quot;商店不接受任何头颅类物品！&quot;">​</a></h3><p>在稍旧版本的服务器中，本插件的界面可能不支持放入带自定义材质的头颅物品，因为 Spigot 的一个漏洞，这会导致本插件在尝试保存此类物品的数据时损坏。如果你想要测试你的服务器是否支持这些头颅物品（风险自行承担！），配置文件中有一条设置可以开启；<code>skip-custom-head-saving</code>。</p><p><strong>其他使用自定义头颅时可能会碰到的问题：</strong><br> 头颅物品可能会从 Mojang 的服务器获取贴图并更新它们的内部贴图数据。如果这导致你提供的物品不再匹配本插件所要求的物品，本插件可能不会接受你使用该物品进行交易。</p><h3 id="我不能把物品从交易界面格子中拿出来" tabindex="-1">我不能把物品从交易界面格子中拿出来！ <a class="header-anchor" href="#我不能把物品从交易界面格子中拿出来" aria-label="Permalink to &quot;我不能把物品从交易界面格子中拿出来！&quot;">​</a></h3><p>如果结果物品在交易列表中显示而你无法取出，这有可能是因为：</p><ul><li>本插件不是完全支持所有类型的物品栏点击事件。尝试使用鼠标左键点击物品。</li><li>可能存在服务端与客户端的“视觉”差异：确保你的客户端版本与服务器版本匹配，且没有使用任何模组。 否则：部分插件可能修改了服务器和客户端之间沟通的出/入数据包（如，协议兼容插件，或者隐藏某些物品数据的插件）。如果你能在没有安装其他插件的情况下复现这个问题，并逐步排查出问题的来源插件。</li><li>如果你启用了 <code>use-strict-item-comparison</code>，则交易可能会因为物品不完全匹配而被阻止。Minecraft 自带的交易判定更为宽松：它会允许物品携带要求物品中没有的数据参与交易。不幸的是我并不能在这种情况下阻止物品显示在结果栏，因为 Minecraft 客户端总是会在其认为交易满足条件时将结果显示于此（即便我们在配置文本中对其行为进行阻止）。</li></ul><p>开启调试模式可能会在交易失败时向控制台输出更多有效信息。</p><h3 id="我能设置修复物品耐久-物品损坏程度-的交易吗" tabindex="-1">我能设置修复物品耐久（物品损坏程度）的交易吗？ <a class="header-anchor" href="#我能设置修复物品耐久-物品损坏程度-的交易吗" aria-label="Permalink to &quot;我能设置修复物品耐久（物品损坏程度）的交易吗？&quot;">​</a></h3><p>不，我也不觉得你能做到。</p><p>带耐久的物品（武器或工具）的耐久度存储在物品的 <code>Damage: &lt;值&gt;</code> 键下。为了设置修复物品而无视其当前耐久值的交易，你需要指定交易是否能够无视物品的损坏值。</p><p>插件遵循以下原版村民的交易逻辑：如果所需物品包含指定数据，则玩家所给的物品也需要包含对应数据。如果所需物品没有指定某类型的数据，则玩家可以提供同类型物品而无需担心其是否包含额外数据（除非启用配置文件内的 <code>use-strict-item-comparisons</code> 选项，在这种情况下提供的物品及其数据必须完全匹配要求的物品）。</p><p>所以如果要交易忽略物品的损坏值（即接受任意耐久度的物品），你需要在设置交易时使用不带有这个 <code>Damage: &lt;值&gt;</code> 数据的物品。但是，Minecraft 看起来总是会将这个标签添加至带耐久的物品，无论其耐久如何。所以即便是全新的物品也会包含 <code>Damage: 0</code> 的数据。我尚未找到将这个数据从物品中移除的方法。当尝试移除它时（比如通过 Minecraft 自带的 <code>/data</code> 命令）Minecraft 又会将它马上加回去。</p><h3 id="为什么不从原版-minecraft-的交易逻辑中脱离-从而实现某些原本不可能的交易" tabindex="-1">为什么不从原版 Minecraft 的交易逻辑中脱离，从而实现某些原本不可能的交易？ <a class="header-anchor" href="#为什么不从原版-minecraft-的交易逻辑中脱离-从而实现某些原本不可能的交易" aria-label="Permalink to &quot;为什么不从原版 Minecraft 的交易逻辑中脱离，从而实现某些原本不可能的交易？&quot;">​</a></h3><p>保持原版的交易逻辑有一些好处。其中一个就是能让插件保持简洁，并使得新功能的议题能被接受（可以让漏洞更少出现、减少特性膨胀、减少维护消耗并有时间研究其他东西）。</p><p>但是，即便脱离原版逻辑，我们仍然面对一些技术困难：我上次检查时，客户端仍会在交易菜单上进行预测，如果客户端觉得交易不能进行，则输出栏不会显示物品。在多种情况下（例如某些格子中的物品发生变化），它会立即再次检查并相应地修改客户端侧的界面。<br> 问题是，客户端侧的这个举措会使得本插件在服务端测强行设置的交易结果无效，然后服务器才会提醒客户端界面变动。所以想要改写（如果可能的话）客户端的这个逻辑是非常困难的（至少从替换并修改显示在客户端上的物品，同时还要手动维持这种状态来说）。因此对服务器端的任何交易逻辑修改都会导致客户端侧在视觉上出现错误（即，交易输出界面为空，即便插件在服务端侧允许交易进行）。</p><p>某些情况中，本插件使用的逻辑与原版略有差异。但是，它们都会阻止原本 Minecraft 不允许的交易。这些改动都是为了防止上述的视觉错误。虽然在物品不符合要求的情况下还能显示结果不是很严重，但总比即使交易能够成功进行还不显示物品要好。</p><p>以下是有关脱离标准物品匹配逻辑所引发的问题的另一份议题，以及其他可用的同类插件：<a href="https://github.com/Shopkeepers/Shopkeepers/issues/832#issuecomment-1560031363" target="_blank" rel="noreferrer">https://github.com/Shopkeepers/Shopkeepers/issues/832#issuecomment-1560031363</a></p><h3 id="交易可修复物品时出现了问题" tabindex="-1">交易可修复物品时出现了问题！ <a class="header-anchor" href="#交易可修复物品时出现了问题" aria-label="Permalink to &quot;交易可修复物品时出现了问题！&quot;">​</a></h3><p>如果玩家提供的物品损坏值与交易的不匹配，则交易不会进行。且无法设置忽略损坏值的交易。另见“<a href="#我能设置修复物品耐久物品损坏程度的交易吗">我能设置修复物品耐久（物品损坏程度）的交易吗？</a>”</p><p>另一个问题是，本插件交易中的物品也有可能被放进铁砧修复过。在原版 Minecraft 中，修复物品的价值会随着修复次数增加而增加。Minecraft 通过添加或修改物品内部的 <code>RepairCost</code> 数据实现这个功能。如果本插件交易需要的物品包含了这个 <code>RepairCost</code> 数据，则玩家提供的任何物品都需要包含相同的数据。</p><p>如果你需要玩家能够使用任何物品交易而无视其修复惩罚，则你需要在交易中放入不包含该 <code>RepairCost</code> 数据的物品，即任何没有被修复过的物品。如果你没有在配置文件中启用 <code>use-strict-item-comparison</code>（默认禁用），本插件会忽略玩家提供物品中的修复惩罚数据。</p><h3 id="我因为对应玩家的货架箱子已满而不能通过按住-shift-键点击来快速交易-即便它们没有被装满" tabindex="-1">我因为对应玩家的货架箱子已满而不能通过按住 Shift 键点击来快速交易，即便它们没有被装满 <a class="header-anchor" href="#我因为对应玩家的货架箱子已满而不能通过按住-shift-键点击来快速交易-即便它们没有被装满" aria-label="Permalink to &quot;我因为对应玩家的货架箱子已满而不能通过按住 Shift 键点击来快速交易，即便它们没有被装满&quot;">​</a></h3><p>假如这里有一个以物易物的一比一交易。当你在交易界面按 Shift 进行交易时，例如，一组物品换其他一组物品，你实际上是重复了 64 次一换一的操作，而不是一组换一组。所以理论上它会从箱子里拿走一组物品，然后空出一格，再将获得的物品放入，但实际情况并不这样。相反，交易会因为取出一个物品而缺少放入另一个物品的空间而无法进行。</p><p>计算参与交易的物品数量有些困难。另外，一次性一组换一组和一换一也有所差别，原因如下：</p><ul><li>情况（交易、箱子内容等）可能在交易时随时变化。</li><li>取决于其他插件或本插件自身情况，每条交易都会有额外的效果（而非只交换物品）。所以这会导致一组换一组和一换一重复 64 次的结果有差别。</li><li>在原版 Minecraft 中，如果初始进行交易的条目不再可用（如售罄等原因）但相同物品仍可参与其他价目不同的交易时，则游戏会选择继续使用其他交易。所以部分交易可能会以不同的价格进行。为了尽可能与原版交易逻辑贴合，本插件照搬了这个逻辑。</li></ul><h3 id="配置文件中不能使用彩色字符-它们变成了乱码" tabindex="-1">配置文件中不能使用彩色字符！它们变成了乱码！ <a class="header-anchor" href="#配置文件中不能使用彩色字符-它们变成了乱码" aria-label="Permalink to &quot;配置文件中不能使用彩色字符！它们变成了乱码！&quot;">​</a></h3><p>尝试将配置文件的编码设置为“UTF-8”。另外请确保你的文件是 UTF-8 编码的。你可以通过诸如 <a href="https://notepad-plus-plus.org/" target="_blank" rel="noreferrer">Notepad++</a> 等编辑软件查看和编辑文件的编码。</p><h3 id="我不能给商店设置彩色名称" tabindex="-1">我不能给商店设置彩色名称！ <a class="header-anchor" href="#我不能给商店设置彩色名称" aria-label="Permalink to &quot;我不能给商店设置彩色名称！&quot;">​</a></h3><p>每次商店被重命名时，新名称会验证其有效性。插件使用了一个正则表达式来对其进行验证，而你可以在配置文件中修改它。这个正则表达式能够指定名称中可以出现哪些字符，以及限制名称的长短。默认情况下这个表达式不包含颜色代码符号 <code>&amp;</code> 和 <code>§</code>。若要能让商店使用彩色字符，你需要将这些字符添加至正则表达式中。即，设置为 <code>name-regex: [A-Za-z0-9&amp;§ ]{3,25}</code></p><h3 id="你会为-基于-vault-的-经济插件添加支持吗" tabindex="-1">你会为（基于 Vault 的）经济插件添加支持吗？ <a class="header-anchor" href="#你会为-基于-vault-的-经济插件添加支持吗" aria-label="Permalink to &quot;你会为（基于 Vault 的）经济插件添加支持吗？&quot;">​</a></h3><p>不会，抱歉。交易界面只为以物易物设计。例如，购买物品只会在放入的物品符合要求时出现。</p><p>作为替代，你可以使用其他插件创建一个银行，将经济在实体物品与虚拟货币之间转换。这样玩家就可以存取绿宝石用于交易。</p><p>你可能也对下面这些插件感兴趣，因为它们提供了一种在虚拟货币和实体物品之间转化的方法。</p><ul><li><a href="https://dev.bukkit.org/projects/gringotts" target="_blank" rel="noreferrer">Gringotts</a></li><li><a href="https://www.spigotmc.org/resources/coins.33382/" target="_blank" rel="noreferrer">Coins</a></li><li><a href="https://dev.bukkit.org/projects/goldismoney" target="_blank" rel="noreferrer">GoldIsMoney</a></li><li><a href="https://www.spigotmc.org/resources/bagofgold.49332/" target="_blank" rel="noreferrer">BagOfGold</a>：自 v4.5.1 起，作者添加了使得该插件的物品参与交易的功能。参考链接：<a href="https://github.com/Rocologo/BagOfGold/issues/92" target="_blank" rel="noreferrer">https://github.com/Rocologo/BagOfGold/issues/92</a></li></ul><h3 id="我如何禁用玩家商店" tabindex="-1">我如何禁用玩家商店？ <a class="header-anchor" href="#我如何禁用玩家商店" aria-label="Permalink to &quot;我如何禁用玩家商店？&quot;">​</a></h3><p>配置中（尚无）全局禁用玩家商店创建的设置。取决于你的配置设置，玩家可以通过命令（在启用 <code>create-player-shop-with-command</code> 的情况下）或使用配置的 <code>shop-creation-item</code>（默认为普通的村民刷怪蛋）创建商店。</p><p>其中一种阻止玩家创建商店的方法是禁用 <code>create-player-shop-with-command</code> 设置，并将 <code>shop-creation-item</code> 设置为玩家无法获取的物品。例如，你可以将其设置为带有指定名称和描述的村民刷怪蛋。参阅<a href="./installtion-updating.configuration.html">配置文本</a>来获得设置物品的详细介绍。只要你的玩家不能获取物品，或者创建物品包含任何描述（原版无法添加），他们就不能创建商店，需要注意的是，你不能修改 <code>shop-creation-item</code> 为“无”。如果你移除了这个设置，请将其留空，或设置为某些无效的东西，例如 <code>AIR</code>，它将会被重置为默认的村民刷怪蛋。</p><p>你的另一个选择是使用权限插件（如 PermissionsEX、LuckPerms 等），或者 <a href="https://bukkit.fandom.com/wiki/Permissions.yml" target="_blank" rel="noreferrer">Bukkit 的 permission.yml 文件</a>，并将玩家创建商店所需的权限设置为负。因为每种商店都有其对应的权限，你需要逐个将其设为负。见<a href="./installtion-updating.permissions.html">可用权限节点</a>章节获取更多信息。但是，每种权限插件的安装方法都略有差异，所以我不会在这里帮你。如果你在设置权限时遇到任何问题，你可以前往 Spigot 的讨论页面、Discord 的聊天群组，或是对应权限插件的作者。权限插件通常会提供检查特定权限的命令，你可以借此验证插件是否正常安装。另外，如果开启了调试模式，本插件将会在服务器控制台内输出任何判断失败的权限检查（所有判断成功的检查都不会被记录）。</p><h3 id="我如何禁用通过村民刷怪蛋创建交易商店" tabindex="-1">我如何禁用通过村民刷怪蛋创建交易商店？ <a class="header-anchor" href="#我如何禁用通过村民刷怪蛋创建交易商店" aria-label="Permalink to &quot;我如何禁用通过村民刷怪蛋创建交易商店？&quot;">​</a></h3><p>还没有可以禁用 <code>shop-creation-item</code>（默认为村民刷怪蛋）创建商店的设置。但是你可以阻止玩家的创建商店行为，或者将 <code>shop-creation-item</code> 设置为玩家无法获取的物品。见“<a href="#我如何禁用玩家商店">我如何禁用玩家商店？</a>”获取更多信息。</p><h3 id="我如何让村民刷怪蛋能正常使用" tabindex="-1">我如何让村民刷怪蛋能正常使用？ <a class="header-anchor" href="#我如何让村民刷怪蛋能正常使用" aria-label="Permalink to &quot;我如何让村民刷怪蛋能正常使用？&quot;">​</a></h3><p>默认情况下本插件会用于 <code>shop-creation-item</code> 设置。这个物品可以让玩家创建自己的商店。与此同时我们禁用了这些物品的大部分默认行为，例如能够使用它们生成对应实体：</p><p>但也有一些特例：</p><ul><li>创造模式下的玩家不受限制。他们甚至不能使用物品创建玩家商店。</li><li>如果你在配置文件中禁用了 <code>prevent-shop-creation-item-regular-usage</code> 设置，或者如果玩家拥有 <code>shopkeeper.bypass</code> 权限，他们就能像正常物品一样在副手使用它们。</li></ul><p>所以如果你想要允许你的玩家通过刷怪蛋正常生成村民，你可以禁用 <code>prevent-shop-creation-item-regular-usage</code> 并让玩家知晓副手可以使用这些物品，或者你可以在配置文件将 <code>shop-creation-item</code> 换成其他物品。例如，你可以将 <code>shop-creation-item</code> 更换为带有指定名称和描述的村民刷怪蛋。见<a href="./installtion-updating.configuration.html">配置文本</a>章节来知晓如何在配置中指定自定义物品数据。任何不带有指定名称和描述的村民刷怪蛋都会像正常村民刷怪蛋一样起作用。</p><h3 id="什么是-村民等级" tabindex="-1">什么是“村民等级”？ <a class="header-anchor" href="#什么是-村民等级" aria-label="Permalink to &quot;什么是“村民等级”？&quot;">​</a></h3><p>本插件的村民类型交易商店的编辑器中有一个“村民等级”选项（现称“徽章颜色”以避免混淆）。这个“村民等级”只影响外观，并无其他作用（只会改变村民身上徽章的颜色）。有关内容可参考 Minecraft 维基的这张村民图片：<a href="https://zh.minecraft.wiki/w/%E6%9D%91%E6%B0%91#/media/File:Minecraft_villager_level_badges.png" target="_blank" rel="noreferrer">https://zh.minecraft.wiki/w/村民#/media/File:Minecraft_villager_level_badges.png</a></p><h3 id="如何在诸如-worldguard-等插件阻止生成商店的时候强制生成实体" tabindex="-1">如何在诸如 WorldGuard 等插件阻止生成商店的时候强制生成实体？ <a class="header-anchor" href="#如何在诸如-worldguard-等插件阻止生成商店的时候强制生成实体" aria-label="Permalink to &quot;如何在诸如 WorldGuard 等插件阻止生成商店的时候强制生成实体？&quot;">​</a></h3><p>你可以尝试开启本插件配置中的 <code>bypass-spawn-blocking</code>。如果这个功能无法起效，则你需要在其他插件中搜索相关配置来禁用阻止生成。<br> WorldGuard 的配置中有一个<a href="/WorldGuard/configuration.main.html">选项</a>可以决定阻止生成哪些实体。这个功能位于 mobs 下，名称为 <code>block-creature-spawn</code>。如果它是空的，则你需要手动添加你想要阻止生成的生物，并确保你将村民排除在外。另一个选择是将 WorldGuard 的 <code>block-plugin-spawning</code> 选项（也位于 mobs 下）设置为 <code>false</code>，但这可能会有一些副作用。</p><h3 id="能否重新平衡村民机制-或允许管理员修改普通村民的交易选项" tabindex="-1">能否重新平衡村民机制，或允许管理员修改普通村民的交易选项？ <a class="header-anchor" href="#能否重新平衡村民机制-或允许管理员修改普通村民的交易选项" aria-label="Permalink to &quot;能否重新平衡村民机制，或允许管理员修改普通村民的交易选项？&quot;">​</a></h3><p>这个插件的目标就是提供基于村民交易界面以物易物的商店，且要做到便于使用。对原版村民的交易选项和职业进行修改有悖于目的，因此不在考虑范围内。</p><p>但是，这里也有一个针对普通村民的交易编辑界面（<a href="./other-features.editor-for-regular-villagers.html">编辑商店</a>），这可以修改大多数原版村民的交易。但是对于超出插件功能的任何东西（包括限制）都不会考虑加入。</p><p>这里有许多平衡村民交易的插件，同样也有可配置的交易选项。<br> 示例：</p><ul><li><a href="https://www.spigotmc.org/resources/custom-villager-modifications.78329/" target="_blank" rel="noreferrer">https://www.spigotmc.org/resources/custom-villager-modifications.78329/</a></li><li><a href="https://dev.bukkit.org/projects/rebalance-villagers" target="_blank" rel="noreferrer">https://dev.bukkit.org/projects/rebalance-villagers</a></li><li><a href="https://www.spigotmc.org/resources/custom-village-trades.25792/" target="_blank" rel="noreferrer">https://www.spigotmc.org/resources/custom-village-trades.25792/</a></li></ul><p>有些插件可能已经不兼容新版本了。</p><h3 id="我能一次出售多于一组的物品吗" tabindex="-1">我能一次出售多于一组的物品吗？ <a class="header-anchor" href="#我能一次出售多于一组的物品吗" aria-label="Permalink to &quot;我能一次出售多于一组的物品吗？&quot;">​</a></h3><p>不可以。Minecraft 原版的物品交易最多只允许获得一组物品。修改编辑器及交易界面使其支持更多数量的交易不在考虑范围内。</p><p>如果你想要以一个物品交换多组的其他物品，考虑增加一个货币物品，例如，一个钻石出售八组泥土，将其更换为一个绿宝石出售一组泥土，同时允许玩家以一颗钻石交换八颗绿宝石（将对应的货币兑换商店设置在主城或者集市区域）。</p><h3 id="我服务器的-timings-报告显示本插件占用较大" tabindex="-1">我服务器的 timings 报告显示本插件占用较大！ <a class="header-anchor" href="#我服务器的-timings-报告显示本插件占用较大" aria-label="Permalink to &quot;我服务器的 timings 报告显示本插件占用较大！&quot;">​</a></h3><p>在给你性能相关的建议之前，你需要在解读本插件的 timings 报告之前知道这些：</p><ul><li><p>timings 有时候也会“出错”，即某些时候会非黑即白地将问题指向某条代码，即便事实上没有影响，或源头与其毫无关联。所以尽可能别让 timings 报告太复杂。 如果你没有在使用 Spigot 核心（而是其他类型的服务端核心，例如 Paper），请尝试相同的 timings 报告能够在 Spigot 上复现。另外也请试试看排除插件组合导致的影响，同时也不要忘了在移除本插件后再检查问题是否仍然存在。</p></li><li><p>大部分数值偏大的 timings 报告有一个相似的问题，比如 <code>/shopkeeper check</code> 命令显示的内容：服务器会经常执行 GC（垃圾回收），这同样会影响到 timings 报告。受服务器内存和 GC 配置影响，这些行为可能在任何时候发生，从几毫秒到几百毫秒。所以才会出现报告中的占用波峰，且易于观察。</p></li><li><p>timings 只对服务器性能情况进行粗略估计。考虑同时运行一个报告分析器，例如 <a href="https://www.spigotmc.org/resources/spark.57242/" target="_blank" rel="noreferrer">Spark</a>。这个插件允许你创建分析报告并与其他 timings 报告一同分享。它受到上述“出错”导致偏差的可能也相对较小。</p></li><li><p>看看缓慢的任务多久执行一次（PerTick 与 Count）。如果任务执行频率较低，它的性能开销通常不会很大。例如：某些任务可能只会在插件启动（或重载）的时候执行一次。其他较大型的任务可能在服务器保存世界数据（本身旧很慢）时运行。</p></li><li><p>如果这个任务频繁运行，则有可能是如下原因：</p><ul><li>“LivingEntityAI”负责处理实体重力与看向邻近玩家的行为。 在先前的版本中，插件禁用了大多数的实体 AI 并允许 Minecraft 处理剩下的事。但是，它会执行某些 AI 任务，即便本插件的实体不允许这么做：村民会试图搜寻附近的村民，甚至因此导致额外的区块载入。 在最近版本的本插件中，生成的实体大多数都被禁用了其默认的 Minearcft AI。LivingEntityAI 任务负责处理本插件最少量的实体任务，例如重力或者看向邻近玩家的行为。这些实体相较于正常生物，性能影响要小得多（我们只测量了部分普通实体和玩家附近的商店实体的活动）。所以在本插件处理部分实体行为的情况下，你应该能观察到服务器的平均性能略有上升（Minecraft 能花更少的时间在实体刻计算与其他背景任务上）。但结果通常是这些实体的计算都被算入本插件的 timings 中，而它们先前是“藏”在 Minecraft 本身 timings 中的。</li><li>与区块加载和生成对应插件实体有关的“WorldListener”。 如果你的部分区块内拥有大量本插件的实体，它们载入时会消耗更多资源。如果这对服务器造成了较大的影响，你可能在小部分地方聚集了过多的村民。尝试将它们分散开即可。<br> 如果不能为玩家商店创建一个统一的放置点，你也可以考虑允许玩家在世界范围内设置商店，并限制玩家能创建的商店数量，或者将放置点分散在同一世界内的多个地点。需要注意的是，分散玩家也会导致区块载入数量增加。这会导致你的平均占用变大，同时性能占用高峰出现的可能性也会增加。 你也可以通过配置和权限节点限制玩家可以创建的商店总数。这样玩家就需要移除用不到的商店。另外配置文本也提供了一个定期清理长时间不上线玩家商店的选项（尽管这可能导致启动用时增加）。</li><li>阻止方块更新的告示牌商店。<br> 方块物理更新在 Minecraft 经常发生。本插件也需要对其响应以防止商店告示牌被破坏。如果这在你的服务器上出现了问题，请尝试降低方块物理更新（比如检测和移除高频红石），或者在配置文件中将告示牌商店禁用。</li><li>本插件的数据保存。 默认情况下，插件会在玩家编辑商店后保存一次数据。如果你有大量玩家同时与商店交互，在开服脚本中设置商店数据的定期保存可能更有帮助。配置文件中也有相关选项可以禁用即时保存。 总体性能贴士：降低数值。<a href="https://www.sk89q.com/2013/03/improving-your-minecraft-servers-performance/" target="_blank" rel="noreferrer">点此</a>可以浏览有关的优化教程。</li></ul></li><li><p>尝试减少载入的区块及其频率。 如果你有大量玩家在世界中频繁高速跑图，且你设置的视距范围较大，服务器会面临区块载入和卸载压力较大的问题。请留意那些可能会造成额外的非玩家所在区块载入甚至是阻止区块再次被卸载的 Minecraft 原版特性或者插件功能。载入的区块越多，服务器世界保存的压力就越大。可以考虑将交易市场区域从主城移动到足够远的区域，这样的话本插件就不会再在玩家加入服务器时进行不必要的加载了。</p></li><li><p>尝试减少实体树立朗。 在 Minecraft 中载入的实体都对性能开销有影响。即便是本插件禁用了大部分 AI 的实体也是这样。</p></li></ul><h3 id="我如何维持一个良好的经济" tabindex="-1">我如何维持一个良好的经济？ <a class="header-anchor" href="#我如何维持一个良好的经济" aria-label="Permalink to &quot;我如何维持一个良好的经济？&quot;">​</a></h3><p>Nisovin 对这个问题进行了大量的构思与讨论。你可以<a href="./more-information.creating-an-economy.html">在这里读到他的观点</a>。</p><h3 id="我是插件开发者-我如何检测指定实体是否为本插件的商店" tabindex="-1">我是插件开发者：我如何检测指定实体是否为本插件的商店？ <a class="header-anchor" href="#我是插件开发者-我如何检测指定实体是否为本插件的商店" aria-label="Permalink to &quot;我是插件开发者：我如何检测指定实体是否为本插件的商店？&quot;">​</a></h3><p>每个商店实体都被 <code>&#39;shopkeeper&#39;</code> 元数据所标记，所以你可以通过如下方法检查：<br><code>entity.hasMetadata(&quot;shopkeeper&quot;)</code></p><p>如果你想要检查指定的 <code>Merchant</code> 或 <code>MerchantInventory</code> 是否属于本插件：</p><ul><li>为了测试指定 <code>Merchant</code> 是否由插件创建，你可以通过 <code>instanceof AbstractVillager</code> 测试。这也会检测费本插件生成的那些村民，且这个方法并不需要依赖本插件。</li><li>如果你真的需要知道某个界面是否与本插件有关联，你可以通过访问 <code>ShopkeepersAPI#getUIRegistry()</code> 使用 <code>UIRegistry#getUISession(Player)</code> 方法：如果对应玩家有活跃的 <code>UISession</code>，你可以假定其打开的界面就是本插件的界面。这需要依赖本插件的 API。</li></ul><h3 id="我能看看源码吗" tabindex="-1">我能看看源码吗？ <a class="header-anchor" href="#我能看看源码吗" aria-label="Permalink to &quot;我能看看源码吗？&quot;">​</a></h3><p>当然，<a href="https://github.com/Shopkeepers/Shopkeepers" target="_blank" rel="noreferrer">它就在这</a>。</p><h2 id="我有别的问题" tabindex="-1">我有别的问题！ <a class="header-anchor" href="#我有别的问题" aria-label="Permalink to &quot;我有别的问题！&quot;">​</a></h2><p><a href="https://github.com/Shopkeepers/Shopkeepers/issues" target="_blank" rel="noreferrer">提交议题</a>是报告插件问题或者获取帮助的最快方式。</p><h2 id="在提交议题之前" tabindex="-1">在提交议题之前： <a class="header-anchor" href="#在提交议题之前" aria-label="Permalink to &quot;在提交议题之前：&quot;">​</a></h2><ul><li>先检查你的问题是否已在这些地方提及： <ul><li><a href="./home.html">文档</a>。</li><li><a href="./more-information.frequently-asked-questions.html">常见问题</a>。</li><li><a href="./more-information.known-issues.html">已知问题</a>。</li></ul></li><li>检查你的问题是否已在<a href="https://github.com/Shopkeepers/Shopkeepers/issues" target="_blank" rel="noreferrer">其他议题</a>中被提过。</li></ul><h2 id="在报告问题之前" tabindex="-1">在报告问题之前： <a class="header-anchor" href="#在报告问题之前" aria-label="Permalink to &quot;在报告问题之前：&quot;">​</a></h2><ul><li>尝试用如下条件复现问题： <ul><li>最新版本的 Spigot 与本插件。</li><li>不安装其他插件。</li><li>没有其他服务器或客户端模组。</li></ul></li></ul><h2 id="在报告问题时" tabindex="-1">在报告问题时： <a class="header-anchor" href="#在报告问题时" aria-label="Permalink to &quot;在报告问题时：&quot;">​</a></h2><ul><li>提供你正在使用的 Minecraft、Spigot 及插件的版本。</li><li>提供问题的详细描述与尽可能多的细节，这有助于复现问题。</li><li>如果可以，可以<strong>逐步列举</strong>在全新 Spigot 服务端上复现问题的<strong>方法</strong>。</li></ul>',89)]))}const u=a(o,[["render",l]]);export{f as __pageData,u as default};
