import{_ as a,o as t,c as o,a7 as r}from"./chunks/framework.DSL0mkng.js";const u=JSON.parse('{"title":"排除问题","description":"","frontmatter":{},"headers":[],"relativePath":"HuskSync/guides.troubleshooting.md","filePath":"HuskSync/guides.troubleshooting.md"}'),i={name:"HuskSync/guides.troubleshooting.md"};function l(n,e,s,d,c,h){return t(),o("div",null,e[0]||(e[0]=[r('<h1 id="排除问题" tabindex="-1">排除问题 <a class="header-anchor" href="#排除问题" aria-label="Permalink to &quot;排除问题&quot;">​</a></h1><p>本章节包含了一系列经常会遇到的问题与相应的解决方法。</p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="数据库包含重复的-uuid" tabindex="-1">数据库包含重复的 UUID <a class="header-anchor" href="#数据库包含重复的-uuid" aria-label="Permalink to &quot;数据库包含重复的 UUID&quot;">​</a></h3><p>该问题常出现在离线服务器上。我们<a href="https://william278.net/terms" target="_blank" rel="noreferrer">不为此类服务器提供支持</a>，我们唯一能给予你的建议是：</p><ul><li>确保每个子服的 <code>paper.yml</code> 下的 <code>bungee_online_mode</code> 设置项正确；</li><li>确保你的登录插件对每个子服的玩家都有独立有效的 ID。</li></ul><h3 id="不能为高于服务器版本的-minecraft-客户端设置数据" tabindex="-1">不能为高于服务器版本的 Minecraft 客户端设置数据 <a class="header-anchor" href="#不能为高于服务器版本的-minecraft-客户端设置数据" aria-label="Permalink to &quot;不能为高于服务器版本的 Minecraft 客户端设置数据&quot;">​</a></h3><p>在你尝试将新版本的 Minecraft 用户数据迁移到旧版本，或是你的服务器使用了与客户端不匹配的版本时，这种情况经常出现。</p><h3 id="玩家数据同步出错" tabindex="-1">玩家数据同步出错 <a class="header-anchor" href="#玩家数据同步出错" aria-label="Permalink to &quot;玩家数据同步出错&quot;">​</a></h3><p>这可能是你的 Spigot 服务器和 Redis 服务器时间不同所导致的。HuskSync 有自带的方法来纠正这一问题。 尝试连续增加配置文件中 <code>network_latency_milliseconds</code> 项的值来解决这一问题。</p><h3 id="死亡不掉落与数据同步的问题" tabindex="-1">死亡不掉落与数据同步的问题 <a class="header-anchor" href="#死亡不掉落与数据同步的问题" aria-label="Permalink to &quot;死亡不掉落与数据同步的问题&quot;">​</a></h3><p>使用了死亡不掉落（玩家死亡后不会掉落背包物品）的服务器，可能会出现此类数据同步的问题。见死亡不掉落章节来确认该问题出现的原因，并找到相应的解决方法。</p><h3 id="通过-snappy-轻量的-linux-发行版-压缩数据时出现问题" tabindex="-1">通过 Snappy（轻量的 Linux 发行版）压缩数据时出现问题 <a class="header-anchor" href="#通过-snappy-轻量的-linux-发行版-压缩数据时出现问题" aria-label="Permalink to &quot;通过 Snappy（轻量的 Linux 发行版）压缩数据时出现问题&quot;">​</a></h3><p>一些 Linux 的轻量化的发行版，例如 Alpine Linux（在 Pterodactyl 上被使用）可能缺少 Snappy 数据压缩所需要的前置。这可以通过将配置文本中的 <code>compress_data</code> 项修改为 false 来解决。注意，在修改该设置之后你需要重启你的数据库。或者，为你的发行版找到压缩数据的前置！</p><h3 id="pterodactyl-上的-redis-连接出现问题" tabindex="-1">Pterodactyl 上的 Redis 连接出现问题 <a class="header-anchor" href="#pterodactyl-上的-redis-连接出现问题" aria-label="Permalink to &quot;Pterodactyl 上的 Redis 连接出现问题&quot;">​</a></h3><p>Pterodactyl 内置的防火墙可阻止 Redis 服务器在各子服之间的通信。请为每个服务器添加信任，使其能在子服之间通信。使用 egg 安装 Redis 可能比后端的内部服务更加方便。</p><h3 id="pterodactyl-上的-mysql-连接出现问题" tabindex="-1">Pterodactyl 上的 MySQL 连接出现问题 <a class="header-anchor" href="#pterodactyl-上的-mysql-连接出现问题" aria-label="Permalink to &quot;Pterodactyl 上的 MySQL 连接出现问题&quot;">​</a></h3><p>若连接至面板的 MySQL 服务器数量大于一个，你可能需要在配置字段中加入 <code>useSSL=true</code> 的字样。</p><h3 id="服务器重启后玩家数据同步出错" tabindex="-1">服务器重启后玩家数据同步出错 <a class="header-anchor" href="#服务器重启后玩家数据同步出错" aria-label="Permalink to &quot;服务器重启后玩家数据同步出错&quot;">​</a></h3><p>有时候你使用的重启方式可能会引起这个问题。请检查你的服务器是否以如下方式重启：</p><ul><li><code>/restart</code>（这个奇葩的 Spigot 命令用的是相当古旧的 bash 脚本）</li><li>任何重启插件，如 UltimateAutoRestart（这些插件基本就是调用了 API 来重启，而它所使用的重启方法与上一条无异） 大多数情况下这些重启方法都<strong>不</strong>与 HuskSync <strong>兼容</strong>，因为这些方法重启服务器的逻辑相当奇怪且难以预测，使得 HuskSync 很难在此之前执行自己的关闭逻辑。若要安全重启你的服务器，请使用：</li><li>Pterodactyl 执行的定时任务。这会执行关机命令（并在虚拟容器完全关闭时再次重启）。</li><li>发送停止命令 / 关机命令的 cronjob 定时任务，监听服务完全终止后才会发送启动命令</li><li>若要手动重启，只需执行命令 <code>/stop</code> 并使用命令行启动服务器，这个方式非常安全。</li></ul><p>不建议让插件帮你重启<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>。插件只能在它被启用时控制服务器，并且必须依赖脚本才可重启服务器，而脚本重启是不安全的。</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>译者注：诸如使用 CommandTimer 执行 <code>/stop</code> 命令等的重启不算在内，因为严格意义上讲它符合作者所述建议行为的第三条。 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',24)]))}const f=a(i,[["render",l]]);export{u as __pageData,f as default};
