import{_ as u,C as o,c,o as h,b1 as a,G as r,j as i,w as m,a as e,t as b}from"./chunks/framework.CC7vnuC4.js";const p="/assets/image2.Cks8kMmA.png",x=JSON.parse('{"title":"2.0","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/AuraSkills"},{"title":"2.0","link":"/AuraSkills/release-notes.2-0"}]},"headers":[],"relativePath":"AuraSkills/release-notes.2-0.md","filePath":"AuraSkills/release-notes.2-0.md"}'),k={name:"AuraSkills/release-notes.2-0.md"};function f(t,l,P,q,_,g){const s=o("center"),d=o("NolebaseGitContributors"),n=o("NolebaseGitChangelog");return h(),c("div",null,[l[17]||(l[17]=a('<h1 id="_2-0" tabindex="-1">2.0 <a class="header-anchor" href="#_2-0" aria-label="Permalink to &quot;2.0&quot;">​</a></h1><p>AuraSkills 2.0 更新日志</p><p>AuraSkills 2.0 对插件进行了完全重写，改写了已有系统，使其更加模块化与客制化。虽然大部分改动不明面显示，如配置结构改动与<a href="./api">新 API</a>，但是仍然有一些玩家可以享受的全新内容。默认配置也通过多次游玩测试，对内容与数值进行了简化与平衡，使其能更好地为原版生存体验增光增色。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>若你从 Beta 版本迁移而来，请务必阅读“<a href="./migration">数据迁移</a>”章节以了解重大改动！</p></div><p><img src="'+p+'" alt="img"></p>',5)),r(s,null,{default:m(()=>l[0]||(l[0]=[e("核心功能图解")])),_:1}),l[18]||(l[18]=a('<h2 id="新功能" tabindex="-1">新功能 <a class="header-anchor" href="#新功能" aria-label="Permalink to &quot;新功能&quot;">​</a></h2><h3 id="自定义经验来源" tabindex="-1">自定义经验来源 <a class="header-anchor" href="#自定义经验来源" aria-label="Permalink to &quot;自定义经验来源&quot;">​</a></h3><p>经验来源使用了全新客制化的<a href="./sources">配置格式</a>。</p><ul><li>配置各个技能经验来源的文件已移动至 <code>sources</code> 文件下并分别存储。</li><li>每个经验来源现在拥有指定类型与选项，可自由指定经验的收集。如，所有破坏方块的经验来源类型均为 <code>block</code>。</li><li>像默认来源一般加入了新的经验来源，类型选项可填入更多内容进行控制。</li><li>新版本配置可实现： <ul><li>破坏任意指定状态的方块获取经验值（兼容自定义方块）。</li><li>从任意 Minecraft 统计数据获取经验值，如现存的跑步与行走经验来源。</li><li>消耗指定物品获取经验值。</li><li>附魔或酿造自定义物品获取经验值。</li><li>渔获物为自定义物品时获取经验值。</li></ul></li><li>经验来源不再与其默认技能绑定，可在技能之间自由切换。</li></ul><h3 id="模块化系统" tabindex="-1">模块化系统 <a class="header-anchor" href="#模块化系统" aria-label="Permalink to &quot;模块化系统&quot;">​</a></h3><p>添加了单独配置技能的 <code>skills.yml</code>。</p><ul><li>能力与魔法能力不再与其默认技能绑定，可在技能之间自由切换。</li><li>自定义技能、能力与魔法能力可通过 <a href="./api">API</a> 无感添加。</li></ul><h3 id="新能力" tabindex="-1">新能力 <a class="header-anchor" href="#新能力" aria-label="Permalink to &quot;新能力&quot;">​</a></h3><ul><li>新耕作能力：范围增生 <ul><li>30 格内的作物加速生长。</li><li>默认五级耕作解锁。</li></ul></li><li>新箭术能力：箭矢回收 <ul><li>一定范围外未命中的落地箭矢会自动回收。</li><li>默认一级箭术解锁。</li></ul></li><li>新战斗能力：招架 <ul><li>受击后的一段时间内降低所受横扫伤害并免疫击退。</li><li>默认一级战斗解锁。</li></ul></li></ul><h3 id="新属性" tabindex="-1">新属性 <a class="header-anchor" href="#新属性" aria-label="Permalink to &quot;新属性&quot;">​</a></h3><p>暴击伤害、暴击率与速度现在为单独的属性。</p><ul><li>旧的箭术暴击率与战斗暴击率能力已被替换为普通的属性奖励，以便增加新能力。</li><li>速度属性总是显示玩家实际速度，100 即 100%（正常）移速。技能默认不增加移速属性，你可以将其用在奖励或修饰符中。</li></ul><h3 id="特征" tabindex="-1">特征 <a class="header-anchor" href="#特征" aria-label="Permalink to &quot;特征&quot;">​</a></h3><p>特征系统让属性更模块化与客制化。</p><ul><li>特征代表着属性改动/强化机制。例如，智慧属性会增加获取的经验值，降低铁砧费用并增加魔力上限。这些内容现在被表示为单独的特征：experience_bouns、anvil_discount 与 max_mana。</li><li>特征可在属性间移动。</li><li>属性与特征都可通过一个选项开关，而无需移除每个属性奖励。</li><li>将特征链接至属性时，修饰符选项决定了每个属性等级可获得多少特征值。</li><li>当特征修饰符值为 1（即与属性数值等同）时可直接显示而无需以属性值代替之。这允许生命值属性可以在菜单内显示其实际数值，包括默认的 20 点生命与其他插件分配的生命值。</li></ul><h3 id="幸运属性重做" tabindex="-1">幸运属性重做 <a class="header-anchor" href="#幸运属性重做" aria-label="Permalink to &quot;幸运属性重做&quot;">​</a></h3><ul><li>幸运属性完全重做，使其实用性进一步提升。与之前增加 Minecraft 原版的幸运属性不同的是，它现在会增加耕作幸运、伐树幸运、挖矿幸运、渔技幸运及采掘幸运的特征值。</li><li>这些特征会增加对应技能任意经验来源的额外物品掉落。</li><li>假设玩家的幸运特征值为 150，他们会额外获得 1 个掉落物，并有 50% 的几率再获得一个。</li><li>幸运特征也会受每个采集技能的特定能力影响，如“收获满满”。</li><li>“三倍收获”耕作技能已被移除，因为“收获满满”技能的效果本身就是提升耕作幸运。</li></ul><h3 id="实体与耕作战利品表" tabindex="-1">实体与耕作战利品表 <a class="header-anchor" href="#实体与耕作战利品表" aria-label="Permalink to &quot;实体与耕作战利品表&quot;">​</a></h3><ul><li>自定义<a href="./loot">战利品表</a>现支持插入实体与农作物掉落。</li><li>创建 <code>loot/mob.yml</code>，通过 <code>mobs</code> 设置为任意种类实体添加掉落物。</li><li>任意带有方块经验来源的技能现在可单独设置自定义战利品表，包括耕作技能。只需创建与其英文原名对应的文件，如 <code>loot/farming.yml</code> 即可。</li></ul><h2 id="改动" tabindex="-1">改动 <a class="header-anchor" href="#改动" aria-label="Permalink to &quot;改动&quot;">​</a></h2><h3 id="插件改名" tabindex="-1">插件改名 <a class="header-anchor" href="#插件改名" aria-label="Permalink to &quot;插件改名&quot;">​</a></h3><p>插件名称从 AureliumSkills 改为了 AuraSkills。这表示其存储数据的文件夹变为了 <code>plugins/AuraSkills</code>。</p><ul><li>为什么？新名称更短更简洁，更有意味。原本的插件名称在制作之初并没有任何含义，且提及时名称总是很长。</li><li>对于与 AureliumSkills 联动的插件，此次更名意味着与 Beta 版本的兼容性不会被影响，开发者可浏览新的联动系统，以及新版的改进 <a href="./api">API</a>。插件将同时支持 Beta 与 2.0 版本。</li><li>新数据文件夹迁移更简单，无需覆盖已有文件。这表示迁移几乎不会出现问题。</li><li>PlaceholderAPI 变量支持 <code>%auraskills_</code> 前缀。旧 <code>%aureliumskills_</code> 变量仍然会正常显示，但非常建议将其迁移至新版本格式。</li><li>所有权限都被更名并重制。旧权限将失效。见<a href="./permissions">权限列表</a>获取最新版本提供的所有权限。</li></ul><h3 id="技能更迭" tabindex="-1">技能更迭 <a class="header-anchor" href="#技能更迭" aria-label="Permalink to &quot;技能更迭&quot;">​</a></h3><p>部分技能升级过慢，能力并无许多作用，因此新版合并/移除了一些技能。这使得技能总数从 15 下降为了 11。现存的 15 个技能仍然可以通过旧版本预设使用，只需执行命令 <code>/skills preset load legacy.zip</code> 即可。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>如果你是从旧版迁移，旧版预设会自动生效，你仍然会有 15 个技能。如下内容不会生效。</p></div><ul><li>“耐力”现在合并至“敏捷”。</li><li>“治疗”现在合并至“炼药”。</li><li>“锻造”现在合并至“附魔”。</li><li>移除技能（耐力、治疗、锻造）的经验来源也一并加入对应技能，因此经验获取方式不变。</li><li>实用性较强的两个技能被保留，剩下的则不包含在默认配置中。</li><li>没有删除任何能力，你可以通过 <code>skills.yml</code> 将其加回。</li><li>“法术”技能因其没有任何能力而被移除。</li></ul><h3 id="配置格式" tabindex="-1">配置格式 <a class="header-anchor" href="#配置格式" aria-label="Permalink to &quot;配置格式&quot;">​</a></h3><p>配置文件的格式与位置有较大改动。</p><ul><li>所有 <code>config.yml</code>（<a href="./main-config">主配置文件</a>）现在使用下划线而非横杠。</li><li><a href="./skills#配置">技能配置</a>转移至 <code>skills.yml</code>。</li><li><a href="./stats#配置">属性配置</a>转移至 <code>stats.yml</code>。</li><li><a href="./abilities#配置">能力配置</a>转移至 <code>abilities.yml</code>。</li><li><a href="./mana-abilities#配置">魔法能力配置</a>转移至 <code>mana_abilities.yml</code>。</li><li><a href="./sources">经验来源配置</a>转移至 <code>sources</code> 文件夹下。</li></ul><h3 id="消息格式" tabindex="-1">消息格式 <a class="header-anchor" href="#消息格式" aria-label="Permalink to &quot;消息格式&quot;">​</a></h3><ul><li><code>menus</code> 部分的消息文件，与技能、属性与能力描述不再包含格式符。样式现在完全交由菜单配置处理。</li><li>旧版颜色字符 <code>&amp;</code> 被替换为 <a href="https://docs.advntr.dev/minimessage/format.html" target="_blank" rel="noreferrer">MiniMessages</a> 标签。旧格式仍会生效。</li><li>删除了大部分消息中的换行符（\\n），新版本通过描述折行解决了这一问题。</li><li>每种语言都相同的消息被移动至 <code>messages/global.yml</code> 文件中。</li><li>因为能力可在技能下任意移动，每个能力配置现在位于 <code>abilities</code> 文件夹下而非每个技能各占一块配置区域。</li><li>删除了方块与实体名称的消息，新版本的此类消息可自动跟随客户端使用的语言而显示。这让配置文件大小缩减了近 200 行。</li></ul><h3 id="菜单格式" tabindex="-1">菜单格式 <a class="header-anchor" href="#菜单格式" aria-label="Permalink to &quot;菜单格式&quot;">​</a></h3>',33)),i("ul",null,[l[11]||(l[11]=i("li",null,[e("旧版颜色字符 "),i("code",null,"&"),e(" 被替换为 "),i("a",{href:"https://docs.advntr.dev/minimessage/format.html",target:"_blank",rel:"noreferrer"},"MiniMessages"),e(" 标签。旧格式仍会生效。")],-1)),l[12]||(l[12]=i("li",null,"添加了菜单组件，即插入描述中的某些模板。这允许元素在保持格式不变的情况下按条件显示或隐藏。",-1)),l[13]||(l[13]=i("li",null,[e("添加了 "),i("code",null,"formats"),e(" 部分，用于决定部分物品的格式。大部分已被移动至消息文件。")],-1)),l[14]||(l[14]=i("li",null,"添加了不同的描述行样式，并添加了自动折行功能。当前行的样式/颜色不会因折行而改变。",-1)),l[15]||(l[15]=i("li",null,"添加了组，允许情境通过菜单顺序决定而非静态位置。这使得物品可以在其中一个条目被移除/添加时移动而无需修改位置。组可设置为中心、靠左或靠右对齐。",-1)),i("li",null,[l[1]||(l[1]=e("直接从消息文件替换的变量格式变为 ")),i("code",null,b(t.如此),1),l[2]||(l[2]=e("。对应格式的消息可直接按 ")),l[3]||(l[3]=i("code",null,"menus.菜单名称.路径",-1)),l[4]||(l[4]=e(" 或 ")),l[5]||(l[5]=i("code",null,"menus.common.this",-1)),l[6]||(l[6]=e(" 的路径找到，其中 ")),l[7]||(l[7]=i("code",null,"菜单名称",-1)),l[8]||(l[8]=e(" 即为变量所在的菜单名称，")),l[9]||(l[9]=i("code",null,"路径",-1)),l[10]||(l[10]=e(" 即为双重花括号内的文本。这些改动意味着你可以任意引用消息文件内的内容，包括自行添加的新内容。"))]),l[16]||(l[16]=a("<li>单花括号变量为插件直接替换的数据变量，通常为数字。</li><li>模板的情境部分现在位于 <code>contexts</code> 部分而非直接位于其下。</li><li><code>level_pregression</code> 下的 <code>unlocked</code>、<code>locked</code> 与 <code>in_progress</code> 模板情境从 <code>1-items_per_page</code> 变为了 <code>1-max_level</code>。这使得修改指定等级的材料从而标明某级的特殊奖励成为可能。</li>",3))]),l[19]||(l[19]=a('<h3 id="菜单外观" tabindex="-1">菜单外观 <a class="header-anchor" href="#菜单外观" aria-label="Permalink to &quot;菜单外观&quot;">​</a></h3><p>默认菜单的外观进行了微调。</p><ul><li>在 skill、in_progress、level_progress 模板中添加了经验进度条。</li><li>在默认的 11 个技能样式中，三个战斗技能现在位于第一行，五个采集技能则位于第二行。“敏捷”技能被移动至第三行。</li><li>所有技能物品上的战利品/盔甲都改为了对应的铁质物品。</li><li>your_skills 物品现在为玩家头颅。</li></ul><h3 id="默认配置" tabindex="-1">默认配置 <a class="header-anchor" href="#默认配置" aria-label="Permalink to &quot;默认配置&quot;">​</a></h3><p>如下为默认配置的改动。如果你从 Beta 迁移，这些设置不会生效。</p><h4 id="主配置改动" tabindex="-1">主配置改动 <a class="header-anchor" href="#主配置改动" aria-label="Permalink to &quot;主配置改动&quot;">​</a></h4><ul><li>在主配置中加入了一个 <code>start_level</code> 选项来决定玩家的起始等级。<strong>玩家的默认等级现在为 0，而非先前的 1。</strong></li><li><code>boss_bar.mode</code> 的值变为 <code>single</code>。</li><li><code>enable_roman_numerals</code> 的值变为 <code>false</code>。</li><li>添加了配置伤害指示器暴击状态的颜色；默认的 <code>damage_holograms.colors.critical.digits</code> 由一开始的灰色变为现在的白色。</li><li><code>auto_save.enabled</code> 的值变为 <code>true</code>。</li></ul><h4 id="技能改动" tabindex="-1">技能改动 <a class="header-anchor" href="#技能改动" aria-label="Permalink to &quot;技能改动&quot;">​</a></h4><ul><li>技能等级最大为 100 而非先前的 97。</li><li>部分技能对应能力因技能合并而有所改变。</li></ul><h4 id="属性改动" tabindex="-1">属性改动 <a class="header-anchor" href="#属性改动" aria-label="Permalink to &quot;属性改动&quot;">​</a></h4><ul><li>生命值倍率现在为 1，这样属性就会与 Minecraft 的生命值属性相符。奖励文件的生命属性奖励为配合此变动而改为 0.4。这表示玩家每次升级会 +0.4 生命值上限，比 ActionBar 更精确。</li><li>因可能获取的生命值上限减少，生命值特征中的 <code>hearts</code> 选项现在会显示更多心。</li><li>魔法再生速度大幅下降，使得魔法技能消耗更大（0.1 变为 0.02）。</li><li>力量属性修饰符从 0.5 下调至 0.4。</li><li>部分特征的修饰符按照现存的属性修饰符值进行了不同的调整。</li><li>基础魔力再生从 1 下调至 0.1。</li><li>不再允许溢出魔力（超出上限的魔力值）。</li></ul><h3 id="物品-nbt-格式" tabindex="-1">物品 NBT 格式 <a class="header-anchor" href="#物品-nbt-格式" aria-label="Permalink to &quot;物品 NBT 格式&quot;">​</a></h3><p>物品/装备修饰符、条件及倍率存储在物品上的格式发生了变化。</p><ul><li>新格式使用了内置的 PersistentDataContainer API 而非外部库的 NMS 代码。</li><li>手持旧物品会自动将其转化为新格式。</li></ul><h3 id="伤害" tabindex="-1">伤害 <a class="header-anchor" href="#伤害" aria-label="Permalink to &quot;伤害&quot;">​</a></h3><ul><li>大部分除力量外的伤害属性修饰符都从乘积计算变为了叠加计算。</li><li>这表示暴击伤害、“工具大师”能力与“先出之刃”能力在伤害翻倍前会叠加计算。</li></ul><h2 id="技术性改动" tabindex="-1">技术性改动 <a class="header-anchor" href="#技术性改动" aria-label="Permalink to &quot;技术性改动&quot;">​</a></h2><h3 id="代码结构" tabindex="-1">代码结构 <a class="header-anchor" href="#代码结构" aria-label="Permalink to &quot;代码结构&quot;">​</a></h3><p>代码仓库已被分为多个模块，使得 API 独立实现，并能让其他平台如 Folia 或 Fabric 的兼容更为容易（不保证）。</p><ul><li><code>api</code> - 包含不依赖 Bukkit API 的 API 代码。</li><li><code>api-bukkit</code> - 包含依赖 Bukkit API 的 API 代码，如事件。在使用 <code>api-bukkit</code> 依赖时，所有 <code>api</code> 模块内的代码都包含在内。</li><li><code>bukkit</code> - 包含需要 Bukkit API 的代码实现，如经验来源、能力、特征、战利品、命令与菜单等。</li><li><code>common</code> - 包含不依赖 Bukkit API 的核心技能系统，包括注册条目、大部分载入的配置、消息、奖励、迁移、玩家管理与数据存储等。</li></ul><p>插件包名从 <code>com.archyx.aureliumskills</code> 更改为 <code>dev.aurelium.auraskills</code>。</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><blockquote><p>主条目：<a href="./api">API</a></p></blockquote><p>2.0 更新添加了全新的 API，能力与拓展性更强。它也支持添加自定义内容（技能、属性、能力等）。</p><h2 id="证书" tabindex="-1">证书 <a class="header-anchor" href="#证书" aria-label="Permalink to &quot;证书&quot;">​</a></h2><p>插件现在基于 <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noreferrer">GPLv3</a> 证书发布。这意味着发布了本插件修改后版本或分支的作者也必须公开其源代码。</p>',26)),r(d),r(n)])}const S=u(k,[["render",f]]);export{x as __pageData,S as default};
