import{_ as i,o as a,c as n,a7 as l}from"./chunks/framework.DSL0mkng.js";const o=JSON.parse('{"title":"战利品配置","description":"","frontmatter":{},"headers":[],"relativePath":"AureliumSkills/configuration.loot.md","filePath":"AureliumSkills/configuration.loot.md"}'),e={name:"AureliumSkills/configuration.loot.md"};function p(h,s,t,k,d,E){return a(),n("div",null,s[0]||(s[0]=[l(`<h1 id="战利品配置" tabindex="-1">战利品配置 <a class="header-anchor" href="#战利品配置" aria-label="Permalink to &quot;战利品配置&quot;">​</a></h1><p>指导配置战利品的教程。</p><p><strong>该教程为 Beta 1.2.0 或更高版本设计，若你正在使用旧版本，请参考本插件的<a href="https://github.com/Archy-X/AureliumSkills/wiki/Loot-Tables" target="_blank" rel="noreferrer">旧版本维基</a>。</strong></p><h2 id="文件结构" tabindex="-1">文件结构 <a class="header-anchor" href="#文件结构" aria-label="Permalink to &quot;文件结构&quot;">​</a></h2><p>掉落表在文件夹中被按技能名称分为多个文件。掉落表文件的名称对应了它们所属的技能。默认区块下，loot 文件夹下应当有采集和钓鱼的掉落表文件。你可以自行添加诸如挖矿或锻造技能的掉落表，格式也可参考示例配置中的内容。</p><h2 id="道具池" tabindex="-1">道具池 <a class="header-anchor" href="#道具池" aria-label="Permalink to &quot;道具池&quot;">​</a></h2><p>道具池池是战利品的列表，每个掉落表可拥有多个道具池。在默认的采集和钓鱼掉落表文件中，有稀有（<code>rare</code>）和史诗（<code>epic</code>）道具池。你也可以在文件中自行添加数量不限的道具池。</p><p>道具池的相关设定位于掉落文件中的 pool 区域。每个道具池必须在配置文件中有一个不重复的名称。在采集和钓鱼掉落表中，稀有与史诗道具池是保留名称，各自与其技能能力挂钩，因此不建议删除这些内容。</p><p>键名：</p><ul><li><code>base_chance</code> - 选中该道具池的裸概率（无任何提升概率技能影响的值）（1 = 1%几率）（默认为1）</li><li><code>selection_priority</code> - 该值能影响此道具池被选中的几率，更高的值意味着它会优先于权重较低的道具池被选择，从而提升被选中的概率。（默认值为1）</li><li><code>override_vanilla_loot</code> - 方块原版的战利品是否会被本插件的道具池替换？不影响钓鱼的原版战利品列表。（默认值为1）</li><li><code>chance_per_luck</code> - 所选中的道具池掉落物品概率随玩家幸运属性增加的值（0.1 表示玩家的每点幸运属性可增加该道具池 0.1% 的选择概率）（默认为0） 每个道具池都有一个列表用于决定其战利品内容。该部分内容用法与上一章节提到的奖励类似。</li></ul><h2 id="掉落内容" tabindex="-1">掉落内容 <a class="header-anchor" href="#掉落内容" aria-label="Permalink to &quot;掉落内容&quot;">​</a></h2><p>目前，掉落内容可分为两种类型：物品掉落与命令掉落。每一个掉落内容均需要填入各自所需的值，同时你可以不限数量地增加这些掉落内容。键名在下文有所叙述：</p><p>通用键名（对任意种类掉落均有效）：</p><ul><li><code>type</code> - 战利品种类，可为物品（item）或命令（command）</li><li><code>weight</code> - 该战利品的权重。更高的权重意味着被优先选择。（默认值为10）</li><li><code>message</code> - 当玩家抽取到该战利品时发送给他们的消息。该内容支持解析颜色代码和 PlaceholderAPI 变量（可选）。</li><li><code>sources</code> - 该战利品应用的源或标签源。匹配的源名称应当与 source_config.yml 中的对应。暂不支持自定义方块源。（可选</li><li><code>xp</code> - 当选中该战利品时获得的经验（默认与源值相同）。</li></ul><h3 id="物品战利品" tabindex="-1">物品战利品 <a class="header-anchor" href="#物品战利品" aria-label="Permalink to &quot;物品战利品&quot;">​</a></h3><p>属于该类型的额外键名列表：</p><ul><li><code>material</code> - 物品的材料名称，需为有效的 bukkit 物品材质名（无视大小写），1.12 请使用诸如 材料:值 来表示旧版本的物品。</li><li><code>amount</code> - 决定给予的物品数量。可使用诸如 ‘5’ 和 ‘1-5’ 的数字表示固定值或随机值（均含，即 1≤数量≤5）。（默认值为1）</li><li><code>key</code> - 代表通过命令 <code>/skills item register</code> 注册的物品 ID。若填写此项，那么上方的两项设置将会被无视。</li><li><code>display_name</code> - 物品的展示名，支持用 ‘&amp;’ 而不是带转义符的 ‘&amp;’ 的颜色代码。（可选）</li><li><code>lore</code> - 物品的 lore，必须是一个列表，使用颜色代码的规则与上方的自定义名称相同。 (optional)</li><li><code>enchantments</code> - 物品附魔属性的列表，一行仅允许一个附魔。在附魔名称与等级之间应当使用空格分隔，例如 ‘sharpness 5’（表示锋利 V）。（可选）</li><li><code>potion_data</code> - 药水数据值，见下方子键名解释（可选）： <ul><li><code>type</code> - 药水种类，需为有效的 bukkit 药水种类名（PotionType）</li><li><code>extended</code> - 药水是否拥有延长效果（同原版红石粉）</li><li><code>upgraded</code> - 药水是否拥有升级等级（同原版萤石粉）</li></ul></li><li><code>custom_effects</code> - 药水效果列表，见下方子键名解释（可选）： <ul><li><code>type</code> - 效果名称，需为有效的 bukkit 药水效果名（PotionEffectType）</li><li><code>duration</code> - 效果的持续时间，单位为刻（20刻=1秒）</li><li><code>amplifier</code> - 药水效果的等级。（0 表示药水效果的 1 级）</li></ul></li><li><code>glow</code> - 设置为 true 后可使物品拥有附魔光效（可选）</li><li><code>nbt</code> - 设置自定义 NBT 数据的区域（可选）</li><li><code>flags</code> - 施加至物品的标签（可选）</li><li><code>ignore_legacy</code> - 若为 true 且服务器版本低于 1.13，插件将会跳过该物品的加载以避免材料名称判断问题。使用该选项的唯一理由是你需要将同一份配置文件在旧版本和新版本的服务器上同时使用，以提高编辑效率，避开低版本不存在的材料名。插件本身会自动处理高版本的材料名。（可选）</li></ul><p><strong>示例配置</strong> 基础的物品掉落示例：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">item</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">iron_ingot</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1-3</span></span></code></pre></div><p>带有自定义名称和描述及附魔的，略复杂的掉落示例：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">item</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">diamond_sword</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  display_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;c火焰之剑&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  lore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;7强力的武器。&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; &#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;9品质：稀有&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enchantments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sharpness 5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fire_aspect 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">looting 3</span></span></code></pre></div><p>带有自定义效果和数据值的药水示例：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">item</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">potion</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  potion_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">speed</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    upgraded</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  custom_effects</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">jump</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      amplifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">regeneration</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      amplifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span></code></pre></div><p>带有隐藏附魔标签的物品，且通过NBT使用了自定义模型数据的物品示例：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">item</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">paper</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  nbt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    CustomModelData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enchantments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">knockback 2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  flags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">hi de_enchants</span></span></code></pre></div><h3 id="命令战利品" tabindex="-1">命令战利品 <a class="header-anchor" href="#命令战利品" aria-label="Permalink to &quot;命令战利品&quot;">​</a></h3><p>命令战利品会在玩家获得该掉落时立即执行，执行方身份可为玩家或控制台。</p><p>属于该类型的额外键名列表：</p><ul><li><code>executor</code> - 命令的执行方，可填入控制台（console）或玩家（player）。（默认为控制台）</li><li><code>command</code> - 执行命令的内容，不需要以斜杠 “/” 开头。支持内建变量 {player} 以表示执行玩家，以及所有的 PlaceholderAPI 变量的解析。 示例配置：</li></ul><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">command</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  executor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">console</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">say hi</span></span></code></pre></div><h2 id="战利品的选择" tabindex="-1">战利品的选择 <a class="header-anchor" href="#战利品的选择" aria-label="Permalink to &quot;战利品的选择&quot;">​</a></h2><p>插件选择战利品的机制非常简单：</p><p>道具池是由玩家行为对应的技能种类决定。例如基于方块的战利品，这个方块必须能触发相应的技能（例如锻造、挖掘和采集）</p><p>掉落表会随机抽取一个权重最高的道具池。道具池被选中的概率取决于道具池的裸概率和其他技能概率加成的总和。若一个道具池未被选中，则掉落表会继续随机选择其他相同或略小于该道具池权重的道具池。若没有道具池被选中，那么插件将不会进入下一步骤。</p><p>最终的战利品在被选中的道具池中抽取获得。权重越高代表该战利品被选中的几率越大。</p>`,35)]))}const c=i(e,[["render",p]]);export{o as __pageData,c as default};
