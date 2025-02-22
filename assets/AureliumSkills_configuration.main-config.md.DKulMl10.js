import{_ as o,c as l,o as a,al as i}from"./chunks/framework.CAEutmY3.js";const p=JSON.parse('{"title":"主配置","description":"","frontmatter":{},"headers":[],"relativePath":"AureliumSkills/configuration.main-config.md","filePath":"AureliumSkills/configuration.main-config.md"}'),d={name:"AureliumSkills/configuration.main-config.md"};function c(r,e,t,n,u,s){return a(),l("div",null,e[0]||(e[0]=[i('<h1 id="主配置" tabindex="-1">主配置 <a class="header-anchor" href="#主配置" aria-label="Permalink to &quot;主配置&quot;">​</a></h1><p>配置文本（<code>config.yml</code>）的相关教程</p><p>这是本插件的配置文件详解，它（<code>config.yml</code>）位于你服务器中的 <code>plugins/AureliumSkills</code>。<br> 本配置文件最后更新对照版本: Beta 1.2.6。</p><h2 id="全局设置" tabindex="-1">全局设置 <a class="header-anchor" href="#全局设置" aria-label="Permalink to &quot;全局设置&quot;">​</a></h2><h3 id="mysql-数据库设置" tabindex="-1">MySQL 数据库设置 <a class="header-anchor" href="#mysql-数据库设置" aria-label="Permalink to &quot;MySQL 数据库设置&quot;">​</a></h3><p><code>mysql:</code></p><ul><li><code>enabled</code> - 是否启用该模块以使用数据库同步数据（需要重启服务器）</li><li><code>host</code> - MySQL 地址</li><li><code>port</code> - 端口号（必须是数值）</li><li><code>database</code> - 数据库名称（必须已经创建）</li><li><code>username</code> - MySQL 用户名</li><li><code>password</code> - MySQL 密码</li><li><code>load-delay</code> - 玩家加入后载入数据的延迟时间， 对多服务器使用统一数据库时很有帮助</li><li><code>always-load-on-join</code> - 若设置为 true， 玩家加入时总是加载数据库的内容， 无论其此前是否已被载入服务器缓存中</li><li><code>ssl</code> - 是否启用 SSL 加密</li></ul><h3 id="消息配置" tabindex="-1">消息配置 <a class="header-anchor" href="#消息配置" aria-label="Permalink to &quot;消息配置&quot;">​</a></h3><p><code>default-language</code> - 玩家使用的默认语言; 必须有对应的消息文件（例如：此项为 en 时需要有名为 messages_en.yml 的文件存在）</p><ul><li><code>try-detect-client-language</code> - 若设置为 <code>true</code>，插件会尝试使用客户端使用的语言，前提是此语言有效且存在对应的文件. 此选项仅适用于没有使用指令选择语言的玩家，或者在服务器突然重启后丢失已选择语言设置的玩家。若客户端使用了Aurelium Skills没有的语言文件，则默认使用 <code>default-language</code> 项设置的语言。 若设置为 <code>false</code>，所有未设置语言的玩家都将使用 <code>default-language</code> 项设置的语言作为自己的默认语言。</li><li><code>languages</code> - 可供玩家使用指令 <code>/skills lang &lt;语言&gt;</code> 切换的语言文件列表； 须有对应的语言文档与之对应，可以在此处设置自定义语言。</li></ul><h3 id="actionbar" tabindex="-1">ActionBar <a class="header-anchor" href="#actionbar" aria-label="Permalink to &quot;ActionBar&quot;">​</a></h3><p><code>action-bar</code>:</p><ul><li><p><code>enabled</code> - 是否启用/禁用此功能（若要显示 ActionBar 内容则必须启用此模块; 设置为 false 会禁用任意的 ActionBar 消息显示）</p></li><li><p><code>idle</code> - 决定无操作时 ActionBar 显示的内容（并不是收集经验时显示的那一部分！）. 若你想要 ActionBar 一直显示消息，那么你需要启用这个模块。</p></li><li><p><code>ability</code> - 决定准备或触发技能时 ActionBar 显示的内容（准备/取消准备， 激活技能时显示的消息， 等等。）。 若设置为 <code>false</code>， 技能消息将只会通过聊天栏发出。</p></li><li><p><code>xp</code> - 决定获得技能经验时的 ActionBar 消息（并不是满级显示的消息）</p></li><li><p><code>maxed</code> - 决定满级技能收集经验时的 ActionBar 消息</p></li><li><p><code>update-period</code> - ActionBar 更新时间，单位为 刻(ticks， 20 ticks = 1秒）（若 ActionBar 造成服务器卡顿，尝试增加这个值）</p></li><li><p><code>round-xp</code> - 若启用，当前经验值将会被四舍五入为整数.</p></li><li><p><code>placeholder-api</code> - 是否在 ActionBar 内启用 PlaceholderAPI 从而允许使用变量，若要启用你需要先安装 PlaceholderAPI。</p></li></ul><h3 id="bossbar" tabindex="-1">BossBar <a class="header-anchor" href="#bossbar" aria-label="Permalink to &quot;BossBar&quot;">​</a></h3><p><code>boss-bar:</code></p><ul><li><p><code>enabled</code> - 是否启用 BossBar 用于显示经验收集进度</p></li><li><p><code>mode</code> - 可被设置为 <code>single/multi</code> 两个值。当设置为 singles，本插件最多将只占用一个 BossBar 用于显示收集经验显示，而 multi 则会占用多个 BossBar</p></li><li><p><code>stay-time</code> - BossBar 显示完毕后停留的时间</p></li><li><p><code>update-every</code> - 连续收集经验时 BossBar 的显示刷新间隔，若出现卡顿问题，请尝试将该值提高</p></li><li><p><code>round-xp</code> - 是否在 BossBar 上显示四舍五入后的经验值</p></li><li><p><code>format</code> - BossBar 的信息显示格式</p><ul><li><code>Format:&#39;[技能名] [颜色] [BossBar 样式]&#39;</code></li><li>- 可用的颜色有 BLUE（蓝）， GREEN（绿）， PINK （粉）， PURPLE（紫）， WHITE（白）， RED（红） 和 YELLOW（黄）</li><li>- 可用的 BossBar 样式有 SOLID（无分隔）， SEGMENTED_6（分隔最多）， SEGMENTED_10（分隔较多）， SEGMENTED_12（分隔较少）， SEGMENTED_20（分隔最少）</li></ul><p><code>base-mana</code> - 玩家尚未收集智慧经验时初始魔法值上限<br><code>enable-roman-numerals</code> - 显示等级时使用罗马数字而非阿拉伯数字</p></li></ul><h3 id="伤害显示" tabindex="-1">伤害显示 <a class="header-anchor" href="#伤害显示" aria-label="Permalink to &quot;伤害显示&quot;">​</a></h3><p><code>damage-holograms</code> - 是否启用本模块（需安装 HolographicDisplays）</p><ul><li><code>damage-holograms-scaling</code> - 是否根据 health.hp-indicator-scaling 选项修改显示的攻击力数值</li><li><code>damage-holograms-decimal</code>: <ul><li><code>display-when-less-than:</code> - 小于特定值时在伤害显示中显示小数</li><li><code>decimal-max-amount</code> - 显示的小数最大位数</li></ul></li><li><code>damage-holograms-offset:</code></li><li><code>x</code> - X 轴偏移量</li><li><code>y</code> - Y 轴偏移量</li><li><code>z</code> - Z 轴偏移量</li></ul><p><code>random:</code></p><ul><li><code>enabled</code> - 是否启用随机位置攻击显示</li><li><code>x-min</code> - 最小 X 轴偏移量</li><li><code>x-max</code> - 最大 X 轴偏移量</li><li><code>y-min</code> - 最小 Y 轴偏移量</li><li><code>y-max</code> - 最大 Y 轴偏移量</li><li><code>z-min</code> - 最小 Z 轴偏移量</li><li><code>z-max</code> - 最大 Z 轴偏移量</li></ul><h3 id="排行榜" tabindex="-1">排行榜 <a class="header-anchor" href="#排行榜" aria-label="Permalink to &quot;排行榜&quot;">​</a></h3><ul><li><code>update-period</code> - 排行榜刷新时间，单位为刻</li><li><code>update-delay</code> - 在服务器开启多少时间后排行榜会被立刻刷新，单位为刻（不包括开启初的排行榜内容刷新）</li></ul><h3 id="游戏体验" tabindex="-1">游戏体验 <a class="header-anchor" href="#游戏体验" aria-label="Permalink to &quot;游戏体验&quot;">​</a></h3><p><code>enable-skill-commands</code> - 技能名称是否被用于做成命令以打开各自的子菜单，例如 /farming 或 /mining （重启后有效）<br><code>check-block-replace</code> - 被玩家重复放置的方块是否可以再次获得经验；。默认应当保持为 true，除非你在使用过程中出现了兼容性问题。</p><h3 id="世界与区域" tabindex="-1">世界与区域 <a class="header-anchor" href="#世界与区域" aria-label="Permalink to &quot;世界与区域&quot;">​</a></h3><p><code>blocked-check-block-replace-worlds</code> - 在该列表中的世界不会被插件检测重复放置，这意味着玩家可以在这些世界中重复放置并破坏方块来获得对应的技能经验。<br><code>blocked-check-block-replace-regions</code> - 在该列表中的 WorldGuard 区域中不会被插件检测重复放置 （该功能需要 1.13+ 版本）<br><code>blocked-worlds</code> - 在该列表世界中的玩家将不能通过正常方式获取技能经验。<br><code>blocked-regions</code> - 在该列表 WorldGuard 区域中的玩家将不能通过正常方式获取技能经验。<br><code>disabled-worlds</code> - 插件的大部分功能在该列表中的世界将会被禁用，包括但不限于属性/技能/收集经验/ActionBar信息显示（菜单和其他命令仍然可用）<br><code>disable-in-creative-mode</code> - 是否禁用玩家在创造模式下的经验获取</p><h3 id="自动保存" tabindex="-1">自动保存 <a class="header-anchor" href="#自动保存" aria-label="Permalink to &quot;自动保存&quot;">​</a></h3><p><code>auto-save:</code></p><ul><li><code>enabled</code> - 是否定时保存，或只是在玩家退出的时候保存他们的数据？当你正在遭受因服务器崩溃而导致的经验与技能数据丢失问题时这个选项很有效。</li><li><code>interval-ticks</code> - 自动保存间隔（单位为刻）</li></ul><h3 id="经济" tabindex="-1">经济 <a class="header-anchor" href="#经济" aria-label="Permalink to &quot;经济&quot;">​</a></h3><p><code>skill-money-rewards:</code></p><ul><li><code>enabled</code> - 玩家在升级时是否可以获得金币奖励 （需要安装 Vault）</li><li><code>base</code> - 在第二级时玩家获得的金币基数</li><li><code>multiplier</code> - 倍率 （获得的金币数 = 基数 + 倍数 * 等级的平方）</li></ul><h3 id="升级提醒" tabindex="-1">升级提醒 <a class="header-anchor" href="#升级提醒" aria-label="Permalink to &quot;升级提醒&quot;">​</a></h3><p><code>leveler:</code></p><ul><li><code>title:</code><ul><li><code>enabled</code> - 当玩家升级时是否启用标题提醒</li><li><code>fade-in</code> - 淡入时间，单位为刻</li><li><code>stay</code> - 标题文字保持显示的时间</li><li><code>fade-out</code> - 淡出时间，单位为刻</li></ul></li><li><code>sound:</code><ul><li><code>enabled</code> - 当玩家升级时是否启用音效提醒</li><li><code>type</code> - 声音种类（必须为有效声音名称）</li><li><code>category</code> - 声音的子种类</li><li><code>volume</code> - 声音的音量</li><li><code>pitch</code> - 声音的音调</li><li><code>double-check-delay</code> - 对于一次收集到大量经验而升级的检查延迟，单位为刻 （数值越小代表越快）</li></ul></li></ul><h3 id="倍率" tabindex="-1">倍率 <a class="header-anchor" href="#倍率" aria-label="Permalink to &quot;倍率&quot;">​</a></h3><p><code>modifier:</code></p><ul><li><code>armor:</code><ul><li><code>equip-blocked-materials</code> - *右键装备时不会获得装备原版属性的物品列表；当你需要只获得盔甲上的属性而不需要原版的防御数值等属性的时候，你就可以将他们添加至这个地方。</li></ul></li><li><code>item:</code><ul><li><code>check-period</code> - 检查玩家手中的物品是否有属性提升的lore间隔，单位为刻。当服务器出现卡顿时考虑提升该值。</li><li><code>enable-off-hand</code> - 物品属性是否在扶手持有时生效。</li></ul></li><li><code>auto-convert-from-legacy</code> - 旧的属性 NBT 格式是否要在新版本环境下被自动转换。当你的所有物品已被转换并可以正确工作或服务器出现性能问题时，你可以将该项禁用。</li></ul><h3 id="条件限制" tabindex="-1">条件限制 <a class="header-anchor" href="#条件限制" aria-label="Permalink to &quot;条件限制&quot;">​</a></h3><p><code>requirement:</code></p><ul><li><code>enabled</code> - 决定装备的条件限制模块是否启用。若你没有用到这一块功能，关闭该模块将会提升服务器性能。</li><li><code>item:</code><ul><li><code>prevent-tool-use</code> - 玩家没有达到工具的使用条件时是否阻止玩家使用该工具破坏方块。</li><li><code>prevent-weapon-use</code> - 玩家没有达到武器的使用条件时是否阻止玩家使用该武器攻击其他实体。</li><li><code>prevent-block-place</code> - 玩家没有达到物品的使用条件时是否阻止玩家放置该物品。</li><li><code>global</code> - 决定默认添加至物品的条件限制。 格式为：<code>&#39;[材料名称] [技能名称]:[技能等级] [技能名称]:[技能等级] …&#39;</code></li></ul></li><li><code>armor:</code><ul><li><code>prevent-armor-equip</code> - 当玩家未达到盔甲的使用条件时是否禁止玩家装备物品。</li><li><code>global</code> - 决定盔甲限制是否同时应用到该种类的所有物品树上。格式为：<code>&#39;[材料名称] [技能名称]:[技能等级] [技能名称]:[技能等级] …&#39;</code></li></ul></li></ul><h3 id="暴击" tabindex="-1">暴击 <a class="header-anchor" href="#暴击" aria-label="Permalink to &quot;暴击&quot;">​</a></h3><p><code>critical:</code></p><ul><li><code>base-multiplier</code> - 基础的暴击伤害倍率</li><li><code>enabled</code> - 在此列表中的物品允许产生暴击伤害。（空手表示为“empty fist”，“other” 项为持有不在列表的物品）</li></ul><h3 id="菜单" tabindex="-1">菜单 <a class="header-anchor" href="#菜单" aria-label="Permalink to &quot;菜单&quot;">​</a></h3><p><code>menus:</code></p><ul><li><code>placeholder-api</code> - 是否在菜单中允许使用 PlaceholderAPI 的变量</li></ul><h3 id="杂项" tabindex="-1">杂项 <a class="header-anchor" href="#杂项" aria-label="Permalink to &quot;杂项&quot;">​</a></h3><p><code>check-for-updates</code> - 是否允许插件在服务器启动后检查更新，并提醒拥有权限 <code>aureliumskills.checkupdates</code> 的玩家？<br><code>automatic-backups:</code></p><ul><li><code>enabled</code> - 是否在服务器关闭时启用自动保存</li><li><code>minimum-interval-hours</code> - 单次保存的最小间隔，单位为小时。在距离上一次保存一定时间以后，才会创建一个新备份，前提是时间超过这里设定的值。</li></ul><h3 id="技能设定" tabindex="-1">技能设定 <a class="header-anchor" href="#技能设定" aria-label="Permalink to &quot;技能设定&quot;">​</a></h3><h4 id="通用技能选项" tabindex="-1">通用技能选项 <a class="header-anchor" href="#通用技能选项" aria-label="Permalink to &quot;通用技能选项&quot;">​</a></h4><ul><li><code>enabled</code> - 该技能是否启用。被禁用的技能在菜单中不可见，也无法升级。技能的对应能力和魔法能力在禁用时也不可用。</li><li><code>max-level</code> - 该技能可升到的最大等级。</li><li><code>check-cancelled</code> - 影响大多数技能。检查方块的破坏事件是否被取消 （仅在出现兼容性问题时禁用）</li><li><code>check-multiplier-permissions</code> - 是否在玩家收集经验时检查经验倍率权限。若你不需要用到倍率权限，将此项关闭可提升服务器性能。</li></ul><h4 id="箭术与战斗选项" tabindex="-1">箭术与战斗选项 <a class="header-anchor" href="#箭术与战斗选项" aria-label="Permalink to &quot;箭术与战斗选项&quot;">​</a></h4><ul><li><code>damage-based</code> - 基于玩家造成的伤害而不是击杀的实体给予玩家对应的经验。 警告：这仍然引用 sources_config.yml 中的值，用于计算每点原版伤害所获得的经验值。若你想要玩家升级的效率保持在正常水平，你必须降低并衡量在 source_config.yml 中的箭术和战斗经验对应值。</li><li><code>spawner-multiplier</code> - 用于修改从刷怪笼生成的生物所获经验的选项。设置为0可禁止刷怪笼中的生物产生技能经验；设置为1 表示与普通生物无异（当然默认值也是这么设置的）。收集的经验是原本该种生物应获得的经验乘以这个选项的倍率所得到的最终值。</li></ul><h4 id="防御选项" tabindex="-1">防御选项 <a class="header-anchor" href="#防御选项" aria-label="Permalink to &quot;防御选项&quot;">​</a></h4><ul><li><code>max</code> - 单次可收集经验的最大值</li><li><code>min</code> - 单次需要达到收集经验的最小伤害值</li><li><code>allow-shield-blocking</code> - 持盾阻挡攻击时是否仍可以获得经验（默认值为 false）</li></ul><h4 id="探索选项" tabindex="-1">探索选项 <a class="header-anchor" href="#探索选项" aria-label="Permalink to &quot;探索选项&quot;">​</a></h4><ul><li><code>xp-gain-period</code> - 获得经验的时间间隔，单位为刻（译者注：20刻=1秒）</li></ul><h4 id="炼药经验" tabindex="-1">炼药经验 <a class="header-anchor" href="#炼药经验" aria-label="Permalink to &quot;炼药经验&quot;">​</a></h4><ul><li><code>give-xp-on-takout</code> - 是否在将制作完毕的药水拿出炼药台时获得经验</li><li><code>give-xp-on-potion-combat</code> - 在战斗中使用喷溅型/滞留型药水是否可以获得炼药经验（与炼药相应的经验设置同步）</li></ul><h4 id="治愈选项" tabindex="-1">治愈选项 <a class="header-anchor" href="#治愈选项" aria-label="Permalink to &quot;治愈选项&quot;">​</a></h4><p><code>exclude-negative-potions</code> - 负面药水不增加治愈经验</p><h4 id="锻造选项" tabindex="-1">锻造选项 <a class="header-anchor" href="#锻造选项" aria-label="Permalink to &quot;锻造选项&quot;">​</a></h4><ul><li><code>blocked-grindstone-enchants</code> - 一些与磨石交互时不会获得经验的附魔。在阻止通过诅咒附魔刷取经验时非常有效。</li></ul><h3 id="属性设置" tabindex="-1">属性设置 <a class="header-anchor" href="#属性设置" aria-label="Permalink to &quot;属性设置&quot;">​</a></h3><h4 id="生命值" tabindex="-1">生命值 <a class="header-anchor" href="#生命值" aria-label="Permalink to &quot;生命值&quot;">​</a></h4><p><code>health:</code></p><ul><li><code>modifier</code> - 每个生命等级应换算为多少点原版生命值（2 = 1 原版心）。该值默认为 0.5，意味着每个生命等级会为玩家提供 0.5 生命值（原版四分之一心）该设置不会被 <code>hp-indicator-scaling</code> 选项所影响。</li><li><code>health-scaling</code> - 若启用，插件将在玩家生命值足够多时压缩血量（完全不会影响到实际生命）最多显示两排心。（该选项用于防止过多的生命值遮挡屏幕，意味着高血量上限下的一颗心实际血量不等同于低血量下的一颗心实际血量）</li><li><code>hp-indicator-scaling</code> - 实际血量值会被乘以这个数值并显示在 ActionBar 和菜单等地方（仅做显示，不影响实际生命值）</li><li><code>update-delay</code> - 切换世界时血量刷新的间隔，单位为刻（若遇到插件兼容性问题，请将其设置为0）</li><li><code>force-base-health</code> - 若启用，基础生命值将在每次刷新被重置为20点（仅在遇到插件兼容性问题时启用）</li><li><code>hearts</code> - 该功能用于修改不同范围血量显示的生命值。键为显示生命的数量，值为实际血量的范围。<br> 例如，当这里有两条值 &#39;12&#39;: 29 和 &#39;13&#39;: 37，这意味着血量上限在 29（含） 至 37（含） 的玩家的屏幕上将会显示 12 颗心<br> 这个值不是显示在 ActionBar 处的值。若要找到 ActionBar 处生命值的修改方式，你需要找到 <code>health.hp-indicator-scaling</code> 选项并将其修改（该值默认为 5）。<br> 这支持低于 10 颗或高于 20 颗心的生命值，只需按格式在配置文本下添加即可。<br> 键名不应重复，否则较高数字的键会覆盖较低数字的键。<br> 这些选项不会修改你实际的血量值。<br> 仅在 <code>health.health-scaling</code> 一项设置为 true 时有效。</li><li><code>keep-full-on-increase</code> - 满血玩家在生命属性上升时保持满血。意味着玩家不需要在生命属性提升后补血。</li></ul><h4 id="力量" tabindex="-1">力量 <a class="header-anchor" href="#力量" aria-label="Permalink to &quot;力量&quot;">​</a></h4><p><code>strength:</code></p><ul><li><code>modifier</code> - 每点力量等级可提升多少原版攻击力 （2 = 1 点原版攻击力）若 use-percent 设置为了 true， 则计算公式为 <code>最终伤害 = 原伤害 \\*（1 +（力量等级 \\* 攻击倍率）/ 100）</code></li><li><code>hand-damage</code> - 是否将该属性应用在诸如物品、空手等非武器上</li><li><code>bow-damage</code> - 是否将该属性应用在弓上</li><li><code>display-damage-with-health-scaling</code> - 属性菜单中显示的伤害值是否受到 health.hp-indicator-scaling 影响</li><li><code>use-percent</code> - 力量增加的伤害值是否以百分比计算，而非简单的数值添加。这会使基础伤害的作用更加突出，所以等待武器冷却结束或使用更好的武器显得更加重要，若该内容设置为 true，那么推荐的倍率值为 0.63。</li></ul><h4 id="韧性" tabindex="-1">韧性 <a class="header-anchor" href="#韧性" aria-label="Permalink to &quot;韧性&quot;">​</a></h4><p><code>toughness:</code></p><ul><li><code>new-modifier</code> - 控制韧性减免伤害的比例（见<a href="https://github.com/Archy-X/AureliumSkills/wiki/Stats-Information-and-Calculations" target="_blank" rel="noreferrer">属性信息与计算</a>一章）</li></ul><h4 id="再生" tabindex="-1">再生 <a class="header-anchor" href="#再生" aria-label="Permalink to &quot;再生&quot;">​</a></h4><p><code>regeneration:</code></p><ul><li><code>custom-regen-mechanics</code> - 自定义的新再生机制是否启用（允许控制血量回复频率但不完全像原版那样）</li><li><code>base-regen</code> - 当再生等级为 0 时，基础的生命再生间隔</li><li><code>saturated-modifier</code> - 有饱和时每级再生可额外提供多少回复的血量</li><li><code>hunger-full-modifier</code> - 当玩家饱食度满但没有饱和药水效果时每点再生等级为玩家提供多少生命回复值</li><li><code>hunger-almost-full-modifier</code> - 当玩家饱食度大于 14 小于 20 点时每点再生等级为玩家提供多少生命回复值</li></ul><p><code>custom-regen-options:</code></p><ul><li><code>saturated-delay</code> - 当 <code>custom-regen-mechanics</code> 启用时，玩家有饱和药水效果时玩家的再生速率为多快？单位为刻。</li><li><code>hunger-delay</code> - 当 <code>custom-regen-mechanics</code> 启用时，玩家没有饱和药水效果时玩家的再生速率为多快？单位为刻。</li><li><code>mana-modifier</code> - 每点智慧等级可提供多少额外的魔力回复</li><li><code>base-mana-regen</code> - 当再生等级为 0 时，基础的魔力再生间隔</li></ul><h4 id="幸运" tabindex="-1">幸运 <a class="header-anchor" href="#幸运" aria-label="Permalink to &quot;幸运&quot;">​</a></h4><p><code>luck:</code></p><ul><li><code>modifier</code> - 每点幸运等级可增加多少点原版幸运属性</li><li><code>double-drop-enabled</code> - 幸运双倍掉落功能是否启用</li><li><code>double-drop-modifier</code> - 每点幸运等级可提升多少双倍爆率</li><li><code>double-drop-percent-max</code> - 双倍爆率的上限</li></ul><h4 id="智慧" tabindex="-1">智慧 <a class="header-anchor" href="#智慧" aria-label="Permalink to &quot;智慧&quot;">​</a></h4><p><code>wisdom:</code></p><ul><li><code>anvil-cost-modifier</code> - 每点智慧等级提供的铁砧经验减免</li><li><code>experience-modifier</code> - 每点智慧等级提供的经验翻倍倍率</li><li><code>allow-over-max-mana</code> - 智慧属性下降时是否保留高于上限的魔力值</li><li><code>max-mana-per-wisdom</code> - 每点智慧等级能增加多少魔力上限</li></ul>',87)]))}const m=o(d,[["render",c]]);export{p as __pageData,m as default};
