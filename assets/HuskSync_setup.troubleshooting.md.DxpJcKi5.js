import{_ as a,c as t,o as r,al as i}from"./chunks/framework.LK_RS8Nx.js";const u=JSON.parse('{"title":"排除问题","description":"","frontmatter":{},"headers":[],"relativePath":"HuskSync/setup.troubleshooting.md","filePath":"HuskSync/setup.troubleshooting.md"}'),o={name:"HuskSync/setup.troubleshooting.md"};function l(n,e,c,s,d,p){return r(),t("div",null,e[0]||(e[0]=[i('<h1 id="排除问题" tabindex="-1">排除问题 <a class="header-anchor" href="#排除问题" aria-label="Permalink to &quot;排除问题&quot;">​</a></h1><p>本章节包含了一系列经常会遇到的问题与相应的解决方法。</p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="数据库包含重复的-uuid" tabindex="-1">数据库包含重复的 UUID <a class="header-anchor" href="#数据库包含重复的-uuid" aria-label="Permalink to &quot;数据库包含重复的 UUID&quot;">​</a></h3><p>该问题常出现在离线服务器上。我们<a href="https://william278.net/terms" target="_blank" rel="noreferrer">不为此类服务器提供支持</a>，我们唯一能给予你的建议是：</p><ul><li>确保每个子服的 <code>paper.yml</code> 下的 <code>bungee_online_mode</code> 设置项正确；</li><li>确保你的登录插件对每个 Spigot/Fabric 子服的玩家都有独立有效的 ID。</li></ul><h3 id="不能为高于服务器版本的-minecraft-客户端设置数据" tabindex="-1">不能为高于服务器版本的 Minecraft 客户端设置数据 <a class="header-anchor" href="#不能为高于服务器版本的-minecraft-客户端设置数据" aria-label="Permalink to &quot;不能为高于服务器版本的 Minecraft 客户端设置数据&quot;">​</a></h3><p>在你尝试将新版本的 Minecraft 用户数据迁移到旧版本，或是你的 Spigot/Fabric 服务器使用了与客户端不匹配的版本时，这种情况经常出现。</p><p>HuskSync 会尝试鉴定版本并阻止同步。你的 Spigot/Fabric 服务器必须使用相同版本的 Minecraft 和 HuskSync。</p><h3 id="玩家数据同步出错" tabindex="-1">玩家数据同步出错 <a class="header-anchor" href="#玩家数据同步出错" aria-label="Permalink to &quot;玩家数据同步出错&quot;">​</a></h3><p>这可能是你的 Spigot/Fabric 服务器和 Redis 服务器时间不同所导致的。HuskSync 有自带的方法来纠正这一问题。 尝试连续增加配置文件中 <code>network_latency_milliseconds</code> 项的值来解决这一问题。</p><h3 id="死亡不掉落与数据同步的问题" tabindex="-1">死亡不掉落与数据同步的问题 <a class="header-anchor" href="#死亡不掉落与数据同步的问题" aria-label="Permalink to &quot;死亡不掉落与数据同步的问题&quot;">​</a></h3><p>使用了<a href="./guides.keep-inventory.html">死亡不掉落</a>（玩家死亡后不会掉落背包物品）的服务器，可能会出现此类数据同步的问题。见<a href="./guides.keep-inventory.html">死亡不掉落</a>章节来确认该问题出现的原因，并找到相应的解决方法。</p><h3 id="通过-snappy-轻量的-linux-发行版-压缩数据时出现问题" tabindex="-1">通过 Snappy（轻量的 Linux 发行版）压缩数据时出现问题 <a class="header-anchor" href="#通过-snappy-轻量的-linux-发行版-压缩数据时出现问题" aria-label="Permalink to &quot;通过 Snappy（轻量的 Linux 发行版）压缩数据时出现问题&quot;">​</a></h3><p>一些 Linux 的轻量化的发行版，例如 Alpine Linux（在 Pterodactyl 上被使用）可能缺少 <a href="https://github.com/xerial/snappy-java" target="_blank" rel="noreferrer">Snappy</a> 数据压缩所需要的前置。这可以通过将配置文本中的 <code>compress_data</code> 项修改为 false 来解决。注意，在修改该设置之后你需要重启你的数据库。或者，为你的发行版找到压缩数据的前置！</p><h3 id="pterodactyl-pelican-上的-redis-连接出现问题" tabindex="-1">Pterodactyl / Pelican 上的 Redis 连接出现问题 <a class="header-anchor" href="#pterodactyl-pelican-上的-redis-连接出现问题" aria-label="Permalink to &quot;Pterodactyl / Pelican 上的 Redis 连接出现问题&quot;">​</a></h3><p>Pterodactyl 内置的防火墙可阻止 <a href="./setup.redis.html">Redis</a> 服务器在各子服之间的通信。请为每个服务器添加信任，使其能在子服之间通信。使用 egg 安装 Redis 可能比后端的内部服务更加方便。见我们有关在<a href="./setup.redis.html#pterodactyl翼龙面板-pelican-面板托管">翼龙或 Pelican 面板上运行 Redis</a>的提示。</p><h3 id="pterodactyl-pelican-上的数据库连接出现问题" tabindex="-1">Pterodactyl/Pelican 上的数据库连接出现问题 <a class="header-anchor" href="#pterodactyl-pelican-上的数据库连接出现问题" aria-label="Permalink to &quot;Pterodactyl/Pelican 上的数据库连接出现问题&quot;">​</a></h3><p>若连接至面板的<a href="./setup.database.html">数据库</a>服务器数量大于一个，你可能需要在配置字段中加入 <code>useSSL=true</code> 的字样。</p><h3 id="服务器重启后玩家数据同步出错" tabindex="-1">服务器重启后玩家数据同步出错 <a class="header-anchor" href="#服务器重启后玩家数据同步出错" aria-label="Permalink to &quot;服务器重启后玩家数据同步出错&quot;">​</a></h3><p>有时候你使用的重启方式可能会引起这个问题。请检查你的服务器是否以如下方式重启：</p><ul><li><code>/restart</code>（这个奇葩的 Spigot/Fabric 命令用的是相当古旧的 bash 脚本）</li><li>任何重启插件，如 UltimateAutoRestart（这些插件基本就是调用了 API 来重启，而它所使用的重启方法与上一条无异） 大多数情况下这些重启方法都<strong>不</strong>与 HuskSync <strong>兼容</strong>，因为这些方法重启服务器的逻辑相当奇怪且难以预测，使得 HuskSync 很难在此之前执行自己的关闭逻辑。若要安全重启你的服务器，请使用：</li><li>Pterodactyl 执行的定时任务。这会执行关机命令（并在虚拟容器完全关闭时再次重启）。</li><li>发送停止命令 / 关机命令的 cronjob 定时任务，监听服务完全终止后才会发送启动命令</li><li>若要手动重启，只需执行命令 <code>/stop</code> 并使用命令行启动服务器，这个方式非常安全。</li></ul><p>不建议让插件帮你重启。插件只能在它被启用时控制服务器，并且必须依赖脚本才可重启服务器，而脚本重启是不安全的。</p>',23)]))}const b=a(o,[["render",l]]);export{u as __pageData,b as default};
