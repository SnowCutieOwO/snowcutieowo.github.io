import{_ as o,C as r,c as i,o as s,b1 as n,G as a}from"./chunks/framework.CC7vnuC4.js";const b=JSON.parse('{"title":"前缀、后缀与元数据","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/LuckPerms"},{"title":"前缀、后缀与元数据","link":"/LuckPerms/features.prefix-suffix-meta"}]},"headers":[],"relativePath":"LuckPerms/features.prefix-suffix-meta.md","filePath":"LuckPerms/features.prefix-suffix-meta.md"}'),p={name:"LuckPerms/features.prefix-suffix-meta.md"};function h(c,e,u,d,m,g){const t=r("NolebaseGitContributors"),l=r("NolebaseGitChangelog");return s(),i("div",null,[e[0]||(e[0]=n(`<h1 id="前缀、后缀与元数据" tabindex="-1">前缀、后缀与元数据 <a class="header-anchor" href="#前缀、后缀与元数据" aria-label="Permalink to &quot;前缀、后缀与元数据&quot;">​</a></h1><p>本章节将会引导你如何设置与管理 LuckPerms 的前后缀与元数据。</p><p>若你已经对这些概念了如指掌，只需要查询有关的命令，你可以转至<a href="./command-usage.meta">命令用法：元数据</a>章节。</p><h2 id="关键定义" tabindex="-1">关键定义 <a class="header-anchor" href="#关键定义" aria-label="Permalink to &quot;关键定义&quot;">​</a></h2><h3 id="前-后缀" tabindex="-1">前/后缀 <a class="header-anchor" href="#前-后缀" aria-label="Permalink to &quot;前/后缀&quot;">​</a></h3><p>在 Minecraft 服务器中的前后缀一般是聊天栏玩家名称前后显示的一段文本。</p><p>例如，这是一段聊天消息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Admin] Luck the great: Hello!</span></span></code></pre></div><p>前缀即为 <code>&quot;[Admin] &quot;</code>部分，而后缀则为 <code>&quot;the great&quot;</code> 部分。</p><h3 id="元数据" tabindex="-1">元数据 <a class="header-anchor" href="#元数据" aria-label="Permalink to &quot;元数据&quot;">​</a></h3><p>或称“选项”、“变量”，元数据是一系列与玩家或权限组相关联的数据形式。与权限不同的是，元数据会被分为两部分，即“键”与“值”。键即为元数据的名称，值即为元数据的数据值。</p><p>例如，我的玩家可能会有这些元数据，来显示他们最多可拥有 5 个家传送点，且他们的名称颜色应该是蓝色。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>max-home = 5</span></span>
<span class="line"><span>username-color: blue</span></span></code></pre></div><h2 id="谁提供了这些" tabindex="-1">谁提供了这些？ <a class="header-anchor" href="#谁提供了这些" aria-label="Permalink to &quot;谁提供了这些？&quot;">​</a></h2><p>一般来说，在服务器中提供了管理权限的插件都能允许你设置、管理和存储前/后缀/元数据。至少在 LuckPerms 中是这样的。</p><p>部分权限插件也会提供将此类内容显示在聊天栏中的方法。但很可惜 LuckPerms 不能这么干，所以你需要额外的聊天插件来手动添加。我们稍后会提到这些。</p><h2 id="前-后缀-元数据的存储方式" tabindex="-1">前/后缀/元数据的存储方式 <a class="header-anchor" href="#前-后缀-元数据的存储方式" aria-label="Permalink to &quot;前/后缀/元数据的存储方式&quot;">​</a></h2><p>LuckPerms 中的前后缀会转化为权限节点并依此方式存储。你可以注意到的是，在你向指定玩家/权限组添加前后缀之后，它们的权限数据中会多出一条你刚才所设置的内容。为什么这样做？好吧，从插件编写的角度来说这可以更容易些，让所有数据都存在同一个地方，格式也相似。这也表示你也可以像管理权限一样管理这些数据。</p><p>前后缀被分为两部分：</p><ul><li><strong>权重</strong> - 这就是决定前/后缀优先级的数字。数字越大 = 权重越大，优先级越大</li><li><strong>值</strong> - 这就是前后缀实际显示的内容。</li></ul><p>权重为 100 的前缀 <code>&quot;[Admin] &quot;</code>，以权限的方式表示即为：<code>prefix.100.[Admin]</code>。</p><p>元数据的存储方式大致相同。一个元数据键值对，如 <code>favorite-color=red</code>，以权限的方式表示即为 <code>meta.favorite-color.red</code>。</p><h2 id="前后缀权重的生效方式" tabindex="-1">前后缀权重的生效方式 <a class="header-anchor" href="#前后缀权重的生效方式" aria-label="Permalink to &quot;前后缀权重的生效方式&quot;">​</a></h2><p>前后缀可以像权限一样被继承。这表示 LuckPerms 需要决定玩家究竟使用哪个前/后缀。</p><p>在其他插件请求查看玩家的前/后缀时，LuckPerms 会：</p><ul><li>收集玩家拥有的所有前/后缀并一同继承</li><li>按权重排序，权重越高 = 优先级越大</li><li>然后选择权重最高的前/后缀并将其作为前/后缀的返回内容</li></ul><p>如果最终结果包含了多条权重相同的前/后缀，离玩家最近的那条会被优先采用。“最近”表示插件在搜索条目时所发现继承关系最简单的权限。</p><h2 id="我怎么给玩家设置前后缀" tabindex="-1">我怎么给玩家设置前后缀 <a class="header-anchor" href="#我怎么给玩家设置前后缀" aria-label="Permalink to &quot;我怎么给玩家设置前后缀&quot;">​</a></h2><p>例如，我想要“admin”组玩家拥有“&amp;c[Admin] ”前缀，“mod”组玩家拥有“&amp;d[Mod] ”前缀，我会按顺序执行这些命令：</p><ul><li>/lp creategroup admin</li><li>/lp creategroup mod</li><li>/lp group admin parent add mod</li><li>/lp group admin meta addprefix 100 &quot;&amp;c[Admin] &quot;</li><li>/lp group mod meta addprefix 90 &quot;&amp;d[Mod] &quot;</li></ul><p>如果我想要将“admin”组的前缀颜色改为“&amp;4”，并且移除之前设置的值，我会执行这条命令：</p><ul><li>/lp group admin meta removeprefix 100</li></ul><p>这会移除所有设置在“admin”组中，权重为 100 的前缀。然后我可以重新为这个组设置前缀。</p><p>设置临时前/后缀的命令格式与添加临时权限或临时继承组的格式大致相同。</p><p>完整命令列表可以在<a href="./command-usage.meta">这里</a>找到。添加和移除元数据的命令也可在这里查阅。</p><h2 id="我如何查看指定玩家或权限组拥有的前后缀" tabindex="-1">我如何查看指定玩家或权限组拥有的前后缀 <a class="header-anchor" href="#我如何查看指定玩家或权限组拥有的前后缀" aria-label="Permalink to &quot;我如何查看指定玩家或权限组拥有的前后缀&quot;">​</a></h2><p>调试前/后缀最简单的方式就是使用 info 命令。</p><p>例如：<code>/lp user Luck meta info</code>。这会列出所有玩家拥有和继承的前/后缀与元数据，默认以权重排序，这样你就可以直观地查阅所有数据。</p><p>另一个有用的是通用玩家信息命令：<code>/lp user Luck info</code>。若玩家在线，则该命令会显示 LuckPerms 当前提供给其他插件显示的前后缀。</p><h2 id="显示前后缀" tabindex="-1">显示前后缀 <a class="header-anchor" href="#显示前后缀" aria-label="Permalink to &quot;显示前后缀&quot;">​</a></h2><p>上文提及，LuckPerms 不会处理任何聊天格式有关的内容。你需要自行安装外部的聊天插件。</p><p>一些推荐的插件在下文列出。</p><h3 id="bukkit-spigot" tabindex="-1">Bukkit/Spigot <a class="header-anchor" href="#bukkit-spigot" aria-label="Permalink to &quot;Bukkit/Spigot&quot;">​</a></h3><p>LuckPerms 支持<strong>任何</strong>可以从<a href="https://dev.bukkit.org/projects/vault" target="_blank" rel="noreferrer">Vault</a>读取数据的聊天格式插件。但是你的服务器也需要安装 Vault 才可让这个功能生效。</p><p>若你遇到了插件不能正确读取数据的问题，请确保 <code>/vault-info</code> 命令显示的的数据是从 LuckPerms 读取的。</p><p>能兼容 LuckPerms + Vault 的聊天格式插件如下：</p><ul><li><a href="https://www.spigotmc.org/resources/49016/" target="_blank" rel="noreferrer">VaultChatFormatter</a> - 如果只需要简单的聊天格式，推荐使用这个！</li><li><a href="https://essentialsx.net/downloads.html" target="_blank" rel="noreferrer">EssentialsX Chat</a> - 若你已经安装了 Essentials(X)，则推荐你使用这个附属插件。</li><li><a href="https://dev.bukkit.org/projects/chatex" target="_blank" rel="noreferrer">ChatEx</a></li><li><a href="https://www.spigotmc.org/resources/771/" target="_blank" rel="noreferrer">VentureChat</a></li><li><a href="https://www.spigotmc.org/resources/stylizer.78327/" target="_blank" rel="noreferrer">Stylizer</a> - 包括聊天格式与 TAB 列表格式。</li><li><a href="https://github.com/MCMDEV/displayformatter" target="_blank" rel="noreferrer">DisplayFormatter</a> - 包含聊天格式与 TAB 列表格式，针对 LuckPerms 进行兼容。</li><li><a href="https://github.com/Hexaoxide/Carbon" target="_blank" rel="noreferrer">CarbonChat</a>（尚处于 Beta）</li><li><a href="https://www.spigotmc.org/resources/1277/" target="_blank" rel="noreferrer">DeluxeChat</a>（付费）</li><li><a href="https://builtbybit.com/resources/18217" target="_blank" rel="noreferrer">ChatControl</a>（付费）</li><li><a href="https://www.spigotmc.org/resources/3742/" target="_blank" rel="noreferrer">CMI</a>（付费）</li><li><a href="https://www.spigotmc.org/resources/18096/" target="_blank" rel="noreferrer">BetterPrefix</a></li></ul><p>一些与 LuckPerms + Vault 兼容的 TAB 列表/头顶名称格式插件如下：</p><ul><li><a href="https://www.spigotmc.org/resources/3836/" target="_blank" rel="noreferrer">NameTagEdit</a></li><li><a href="https://github.com/NEZNAMY/TAB" target="_blank" rel="noreferrer">TAB</a></li><li><a href="https://www.spigotmc.org/resources/1448/" target="_blank" rel="noreferrer">Tab</a>（付费）</li><li><a href="https://www.spigotmc.org/resources/3742/" target="_blank" rel="noreferrer">CMI</a>（付费）</li><li><a href="https://www.spigotmc.org/resources/18096/" target="_blank" rel="noreferrer">BetterPrefix</a></li></ul><p>这个列表不代表所有插件。任何支持 Vault 的插件都支持 LuckPerms！</p><h3 id="bungeecord" tabindex="-1">BungeeCord <a class="header-anchor" href="#bungeecord" aria-label="Permalink to &quot;BungeeCord&quot;">​</a></h3><p>在 BungeeCord 上能兼容 LuckPerms + Vault 的聊天格式插件如下：</p><ul><li><a href="https://github.com/lucko/gChat" target="_blank" rel="noreferrer">gChat</a> - 如果只需要简单的聊天格式，推荐使用这个。</li><li><a href="https://www.spigotmc.org/resources/12592/" target="_blank" rel="noreferrer">BungeeChat</a></li><li><a href="https://www.spigotmc.org/resources/26204/" target="_blank" rel="noreferrer">MultiChat</a></li></ul><p>在 BungeeCord 上能与 LuckPerms + Vault 兼容的 TAB 列表/头顶名称格式插件如下：</p><ul><li><a href="https://www.spigotmc.org/resources/313/" target="_blank" rel="noreferrer">BungeeTabListPlus</a></li><li><a href="https://github.com/NEZNAMY/TAB" target="_blank" rel="noreferrer">TAB</a></li></ul><h3 id="sponge" tabindex="-1">Sponge <a class="header-anchor" href="#sponge" aria-label="Permalink to &quot;Sponge&quot;">​</a></h3><ul><li><a href="https://nucleuspowered.org/" target="_blank" rel="noreferrer">Nucleus</a> - 一个类“Essnentials”的插件，也包含了<a href="https://nucleuspowered.org/docs/modules/chat.html" target="_blank" rel="noreferrer">聊天格式模块</a>。</li></ul><h3 id="fabric" tabindex="-1">Fabric <a class="header-anchor" href="#fabric" aria-label="Permalink to &quot;Fabric&quot;">​</a></h3><ul><li><a href="https://modrinth.com/mod/styled-chat" target="_blank" rel="noreferrer">Styled Chat</a> - 使用 <a href="https://placeholders.pb4.eu/" target="_blank" rel="noreferrer">Fabric TextPlacholderAPI</a>，包含了聊天格式 - 需要注意的是你需要手动配置，并安装 <a href="https://luckperms.net/download" target="_blank" rel="noreferrer">LuckPerms <strong>Fabric</strong> PlaceholderAPI Addon</a> 才能让这个模组与 LuckPerms 一并运行。</li><li><a href="https://modrinth.com/mod/styledplayerlist" target="_blank" rel="noreferrer">Styled Player List</a> - 使用 <a href="https://placeholders.pb4.eu/" target="_blank" rel="noreferrer">Fabric TextPlacholderAPI</a>，包含了 TAB 列表格式 - 需要注意的是你需要手动配置，并安装 <a href="https://luckperms.net/download" target="_blank" rel="noreferrer">LuckPerms <strong>Fabric</strong> PlaceholderAPI Addon</a> 才能让这个模组与 LuckPerms 一并运行。</li><li><a href="https://github.com/lochnessdragon/GraphiXMod" target="_blank" rel="noreferrer">GraphiXMod</a> - 包含了聊天格式、悬浮字、TAB 列表格式与计分板格式。</li><li><a href="https://github.com/Axieum/Chatter" target="_blank" rel="noreferrer">Chatter</a> - 包含了聊天格式与 Discord 集成。</li></ul><h3 id="forge" tabindex="-1">Forge <a class="header-anchor" href="#forge" aria-label="Permalink to &quot;Forge&quot;">​</a></h3><ul><li><a href="https://www.curseforge.com/minecraft/mc-mods/betterforgechat-with-luckperms-support" target="_blank" rel="noreferrer">BetterForgeChat</a> - 包含了聊天格式、TAB 列表格式、FTB Essentials 昵称，支持 Markdown 格式。</li></ul>`,61)),a(t),a(l)])}const k=o(p,[["render",h]]);export{b as __pageData,k as default};
