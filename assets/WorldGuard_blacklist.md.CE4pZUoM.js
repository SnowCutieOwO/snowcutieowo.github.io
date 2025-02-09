import{_ as i,c as a,o as t,al as n}from"./chunks/framework.ySGSHPST.js";const c=JSON.parse('{"title":"黑名单","description":"","frontmatter":{},"headers":[],"relativePath":"WorldGuard/blacklist.md","filePath":"WorldGuard/blacklist.md"}'),l={name:"WorldGuard/blacklist.md"};function h(e,s,p,k,d,r){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="黑名单" tabindex="-1">黑名单 <a class="header-anchor" href="#黑名单" aria-label="Permalink to &quot;黑名单&quot;">​</a></h1><p>黑名单功能允许一个（或多个）玩家试图进行的操作（放置方块、使用物品等）被禁止。一些示例包括：</p><ul><li>阻止玩家挖掘金矿；</li><li>提醒所有管理员找到钻石矿的时间点；</li><li>向玩家在放置附魔台的时候发送消息。</li></ul><p>示例黑名单文件如下：</p><div class="language-Ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 禁用岩浆桶</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[lava_bucket]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ignore-groups</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=admins,mods</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on-use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=deny,tell</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=抱歉, 但你不可以在这里使用岩浆桶!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 禁止挖掘矿物</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[gold_ore,iron_ore]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ignore-groups</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=admins</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on-break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=deny,tell,notify</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 禁用 TNT!</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[tnt]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ignore-groups</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=admins</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on-place</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=deny,notify,kick</span></span></code></pre></div><h2 id="黑名单文件" tabindex="-1">黑名单文件 <a class="header-anchor" href="#黑名单文件" aria-label="Permalink to &quot;黑名单文件&quot;">​</a></h2><p>对于每个世界，你都可以在它们的存档文件夹中找到分世界配置文件：</p><ul><li><code>worlds/world/blacklist.txt</code></li><li><code>worlds/world_nether/blacklist.txt</code></li><li><code>worlds/mining_world/blacklist.txt</code></li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>现在并不能将同一个黑名单文件在多个世界之间共享。你可能需要通过操作系统自带的“symlink”来将两个文件保持同步更新。</p></div><h2 id="格式" tabindex="-1">格式 <a class="header-anchor" href="#格式" aria-label="Permalink to &quot;格式&quot;">​</a></h2><p>黑名单文件包括以下部分的设置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[所匹配的物品/方块列表]</span></span>
<span class="line"><span>监听的事件=进行的操作</span></span>
<span class="line"><span>监听的事件=进行的操作</span></span>
<span class="line"><span>监听的事件=进行的操作</span></span>
<span class="line"><span>参数=值</span></span></code></pre></div><p><code>#</code> 开头的行不会被 WorldGuard 读取。你可以用这个特性撰写自己的注释。</p><h3 id="匹配格式" tabindex="-1">匹配格式 <a class="header-anchor" href="#匹配格式" aria-label="Permalink to &quot;匹配格式&quot;">​</a></h3><p>物品和方块可以通过它们在 <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html" target="_blank" rel="noreferrer">Bukkit 的材料列表</a>中所提及的名称匹配。多个物品或方块名称可以用一个英文逗号“,”分隔：</p><div class="language-Ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[oak_wood,brick,glass]</span></span></code></pre></div><h2 id="匹配格式-1" tabindex="-1">匹配格式 <a class="header-anchor" href="#匹配格式-1" aria-label="Permalink to &quot;匹配格式&quot;">​</a></h2><p>在你已经指定了需要监听方块和物品的名称之后，你必须指定需要检测它们的情况，也需要为它们设置执行的操作。</p><p>可用事件请参阅下表：</p><table tabindex="0"><thead><tr><th>事件名称</th><th>事件释义</th></tr></thead><tbody><tr><td>on-break</td><td>当列表中的方块被挖掘时</td></tr><tr><td>on-destroy-with</td><td>当列表中的物品被持有并挖掘列表中的方块时</td></tr><tr><td>on-place</td><td>当列表中的方块被放置时</td></tr><tr><td>on-use</td><td>当玩家背包中的物品被使用时</td></tr><tr><td>on-interact</td><td>当玩家与列表中的方块（如：门、拉杆等）进行互动（如：鼠标右键点击）时</td></tr><tr><td>on-drop</td><td>当玩家丢弃列表中的物品时</td></tr><tr><td>on-acquire</td><td>当玩家捡起列表中的物品时</td></tr><tr><td>on-dispense</td><td>当投掷器投掷了列表中的物品时</td></tr></tbody></table><p>当指定事件时，一个“操作”列表需要在配置后指定，如下所示：</p><div class="language-Ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[enchantment_table]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on-place</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=deny,tell</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on-drop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=notify</span></span></code></pre></div><h3 id="可用操作" tabindex="-1">可用操作 <a class="header-anchor" href="#可用操作" aria-label="Permalink to &quot;可用操作&quot;">​</a></h3><p>每个事件可以指定多个对应的操作。</p><table tabindex="0"><thead><tr><th>操作名称</th><th>操作释义</th></tr></thead><tbody><tr><td>deny</td><td>禁止本次操作（仅在黑名单没有开启“白名单模式”下有效（见下））</td></tr><tr><td>allow</td><td>允许本次操作（仅在黑名单开启了“白名单模式”下有效）</td></tr><tr><td>notify</td><td>提醒带有权限 <code>worldguard.nofity</code> 的玩家</td></tr><tr><td>log</td><td>将事件记录至控制台、文件或数据库</td></tr><tr><td>tell</td><td>提醒玩家该操作不被允许</td></tr><tr><td>kick</td><td>踢出玩家</td></tr><tr><td>ban</td><td>封禁玩家</td></tr></tbody></table><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><p>选项在事件的同一个配置部分被指定，可见下文示例：</p><div class="language-Ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[enchantment_table]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on-place</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=deny,tell</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=抱歉, 但是你不能使用附魔台!</span></span></code></pre></div><p>在这种情况下，<code>messages</code> 就是一个能够覆盖原有“tell”操作的设置项。</p><table tabindex="0"><thead><tr><th>选项名称</th><th>选项描述</th></tr></thead><tbody><tr><td>ignore-groups</td><td>以逗号分隔的权限组，表示这些组不受影响</td></tr><tr><td>ignore-perms</td><td>以逗号分隔的权限节点，表示持有这些权限的玩家不受影响</td></tr><tr><td>comment</td><td>在 <code>log</code> 和 <code>notify</code> 中消息的格式（会覆盖默认两个操作所写入或显示的消息格式）</td></tr><tr><td>message</td><td>向玩家发送的消息（覆盖默认消息）。消息中的内建变量 %s 会替换为物品的名称（英文原名显示）</td></tr></tbody></table><h2 id="白名单模式" tabindex="-1">白名单模式 <a class="header-anchor" href="#白名单模式" aria-label="Permalink to &quot;白名单模式&quot;">​</a></h2><p>将黑名单模式切换为白名单模式（通过配置文件）将会把配置的功能反转。在这种情况下只有被标注为 <code>allow</code> 的操作才可以被允许。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>白名单模式非常严格。在需要放置方块的情况下，你需要先在配置文本里允许使用该方块（玩家手中的物品）、与世界上存在的所有方块的交互（允许方块放置“其上”）以及放置方块。你可能会发现通过建筑权限为玩家设置相关保护更加容易，因为它支持“*”通配符（在权限节点中使用），这样就可以减少你的工作量。</p></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">示例：禁用任意种类的桶</p><div class="language-Ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[lavabucket,waterbucket,bucket]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on-use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=deny,tell</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">示例：踢出正在使用 TNT 的玩家，并提醒管理员</p><div class="language-Ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[tnt]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ignore-groups</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=admins</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on-place</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=deny,notify,kick</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">示例：只允许处在权限组“obsidian”或为管理员的玩家挖掘和放置黑曜石</p><div class="language-Ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[obsidian]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ignore-groups</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=admins,obsidian</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on-place</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=deny,tell</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on-break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=deny,tell</span></span></code></pre></div></div><h2 id="日志记录" tabindex="-1">日志记录 <a class="header-anchor" href="#日志记录" aria-label="Permalink to &quot;日志记录&quot;">​</a></h2><p>在 <code>log</code> 操作的情况下，消息可以通过下列方式发送或保存：</p><ul><li>控制台；</li><li>文件；</li><li>数据库。</li></ul><p>这些日志记录所存储的相关设置可以在配置文件中自行启用或禁用。多个日志记录目标可以同时启用。在默认情况下，只会启用控制台日志记录。</p><h3 id="控制台记录" tabindex="-1">控制台记录 <a class="header-anchor" href="#控制台记录" aria-label="Permalink to &quot;控制台记录&quot;">​</a></h3><p>控制台记录模式会将日志输出在服务器的控制台界面上。</p><h3 id="文件记录" tabindex="-1">文件记录 <a class="header-anchor" href="#文件记录" aria-label="Permalink to &quot;文件记录&quot;">​</a></h3><p>文件记录会将日志保存至文件。在配置文件中，日志文件可以通过特殊的格式指定其存储位置（有点像现在的时间格式），所以你可以每天按格式记录并保存日志。</p><p>可以使用下列格式：</p><ul><li>%Y 返回年 (YYYY)</li><li>%m 返回月 (MM)</li><li>%d 返回天 (DD)</li><li>%W 返回星期数 (00-52)</li><li>%H 返回 24 小时时间 (HH)</li><li>%h 返回 12 小时时间 (HH)</li><li>%i 返回分 (mm)</li><li>%s 返回秒 (ss)</li><li>%u 返回玩家名称</li><li>%% 表示百分符号“%”</li></ul><h3 id="数据库记录" tabindex="-1">数据库记录 <a class="header-anchor" href="#数据库记录" aria-label="Permalink to &quot;数据库记录&quot;">​</a></h3><p>WorldGuard 可以将整个入记录至 MySQL 数据库。尽管如此，你仍然还是要自行创建数据库与数据表。数据库需要创建的表的结构已在下文代码中给出。</p><div class="language-SQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> EXISTS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`blacklist_events\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`id\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AUTO_INCREMENT,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`world\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`event\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`player\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`x\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`y\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`z\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`item\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`time\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`comment\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`id\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,50)]))}const E=i(l,[["render",h]]);export{c as __pageData,E as default};
