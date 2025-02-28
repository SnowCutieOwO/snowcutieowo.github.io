import{_ as a,c as l,o,b0 as i}from"./chunks/framework.w6NQj85O.js";const p=JSON.parse('{"title":"安装教程","description":"","frontmatter":{},"headers":[],"relativePath":"HuskSync/setup.setup.md","filePath":"HuskSync/setup.setup.md"}'),c={name:"HuskSync/setup.setup.md"};function t(r,e,s,d,n,u){return o(),l("div",null,e[0]||(e[0]=[i('<h1 id="安装教程" tabindex="-1">安装教程 <a class="header-anchor" href="#安装教程" aria-label="Permalink to &quot;安装教程&quot;">​</a></h1><p>本章节将会引导你安装 HuskSync 至你的 Spigot 或 Fabric 群组子服上。请先检查服务器<a href="./setup.compatbility.html">兼容性</a>，并为服务器下载对应版本的 HuskSync。</p><h2 id="安装需求" tabindex="-1">安装需求 <a class="header-anchor" href="#安装需求" aria-label="Permalink to &quot;安装需求&quot;">​</a></h2><p>HuskSync 需要一个数据库服务器，一个 Redis 服务器，以及任何与其兼容的 Minecraft 服务器：</p><ul><li>任意数量的基于 Fabric 或 Spigot/Paper 的服务器。 <ul><li>每个服务器运行的 Minecraft 版本必须相同</li><li>不可以在 Fabric 和 Spigot 单端间同步数据</li><li>HuskSync 不应安装在你的 Velocity、BungeeCord 及 Waterfall 群组端上</li></ul></li><li>运行了 MySQL v8.0+、MariaDB v5.0+、PostgreSQL 或 MongoDB 之一的<a href="./setup.database.html">数据库</a>服务器。</li><li><a href="./setup.redis.html">Redis</a> 数据库（5.0 或更高版本）</li></ul><h2 id="安装步骤" tabindex="-1">安装步骤 <a class="header-anchor" href="#安装步骤" aria-label="Permalink to &quot;安装步骤&quot;">​</a></h2><p>在你开始之前，请先关掉群组上的所有服务器。推荐进行备份。</p><h3 id="_1-安装-jar-文件" tabindex="-1">1. 安装 jar 文件 <a class="header-anchor" href="#_1-安装-jar-文件" aria-label="Permalink to &quot;1. 安装 jar 文件&quot;">​</a></h3><ul><li>将插件拖放至每个 Spigot 子服的 <code>/plugins/</code> 文件夹下；</li><li>无需将 HuskSync 安装在群组服上。</li><li>额外地，你可以安装 <a href="https://www.spigotmc.org/resources/protocollib.1997/" target="_blank" rel="noreferrer">ProtocolLib</a> 或 <a href="https://www.spigotmc.org/resources/packetevents-api.80279/" target="_blank" rel="noreferrer">PacketEvents</a> 加强对锁定用户处理能力，或安装 <a href="https://www.spigotmc.org/resources/plan-player-analytics.32536/" target="_blank" rel="noreferrer">Plan</a> 插件来快速统计玩家数据。</li></ul><h3 id="_2-重启服务器" tabindex="-1">2. 重启服务器 <a class="header-anchor" href="#_2-重启服务器" aria-label="Permalink to &quot;2. 重启服务器&quot;">​</a></h3><ul><li>开启，之后关闭服务器，使 HuskSync 生成一份<a href="./setup.config-file.html">配置文件</a>；</li><li>HuskSync 会因无法连接到数据库后在控制台报错并自行禁用。鉴于你还未设置登录凭据，所以这是预料之内的；</li><li>对于高级用户：如果你喜欢的话，你可以自己创建一个 config.yml 文件并使得每个子服的 <code>/plugins/HuskSync/</code> 文件夹同步，更方便地更新配置文件。</li></ul><h3 id="_3-输入-mysql-和-redis-数据库的登录凭据" tabindex="-1">3. 输入 MySQL 和 Redis 数据库的登录凭据 <a class="header-anchor" href="#_3-输入-mysql-和-redis-数据库的登录凭据" aria-label="Permalink to &quot;3. 输入 MySQL 和 Redis 数据库的登录凭据&quot;">​</a></h3><ul><li>找到每个子服的 HuskSync 的配置文件（一般位于 <code>~/plugins/HuskSync/config.yml</code>）；</li><li>在 <code>database</code> 设置区域下的 <code>credentials</code> 部分，输入你的 MySQL 数据库登录凭据。通常情况下你不应该动 <code>connection_pool</code> 部分设置的任何内容；</li><li>在 <code>redis</code> 的 <code>credentials</code> 设置中，输入你的 Redis 数据库登录凭据。如果你的 Redis 数据库没有设置密码，请将密码一项留空（译者注：即空字符串 &#39;&#39; 或 &quot;&quot;）；</li><li>除非你在一个群组下区分多个子群组，每个子群组之间的玩家数据相互隔离，否则不应更改 <code>cluster_id</code> 的值。</li></ul><details class="details custom-block"><summary>MongoDB 用户 - 额外安装步骤</summary><ul><li>找到服务器上的 HuskSync 配置文件（<code>~/plugins/HuskSync/config.yml</code>）。</li><li>将 <code>database</code> 下的 <code>type</code> 值设置为 <code>MONGO</code>。</li><li>在 <code>database</code> 下的 <code>credentials</code> 配置中，输入 MongoDB 数据库的登录凭据。切记不要擅自修改 <code>connection_pool</code> 部分的设置。</li><li>在 <code>mongo_settings</code> 下的 <code>parameters</code> 部分，确保指定的 <code>&amp;authSource=</code> 符合你使用的数据库（默认为 <code>HuskSync</code>）。</li></ul></details><details class="details custom-block"><summary>对 MongoDB Atlas 用户的额外配置</summary><ul><li>找到服务器上的 HuskSync 配置文件（<code>~/plugins/HuskSync/config.yml</code>）。</li><li>将 <code>mongo_settings</code> 下的 <code>using_atlas</code> 设置为 <code>true</code>。</li><li>将 <code>mongo_settings</code> 下的 <code>parameters</code> 中的 <code>&amp;authSource=HuskSync</code> 部分删去即可。 （在使用 Atlas 时自动无视 <code>credentials</code> 下 <code>port</code> 设置的值）</li></ul></details><h3 id="_4-在-server-yml-文件中设置服务器名称" tabindex="-1">4. 在 server.yml 文件中设置服务器名称 <a class="header-anchor" href="#_4-在-server-yml-文件中设置服务器名称" aria-label="Permalink to &quot;4. 在 server.yml 文件中设置服务器名称&quot;">​</a></h3><ul><li>找到服务器上的 HuskSync 服务器名称配置文件（~/plugins/HuskSync/server.yml）</li><li>将该文件中的 <code>name:</code> 后的值改为自己的服务器名称，与群组服核心配置中设置的服务器名字相同（示例，若此服务器名称为“hub”，也就是在切换服务器时输入的命令是 <code>/server hub</code>，那么就把 <code>&#39;hub&#39;</code> 填在该设置的末尾）</li></ul><h3 id="_5-再次重启每个子服" tabindex="-1">5. 再次重启每个子服 <a class="header-anchor" href="#_5-再次重启每个子服" aria-label="Permalink to &quot;5. 再次重启每个子服&quot;">​</a></h3><ul><li>若提供的 MySQL 和 Redis 数据库登录凭据有效，服务器开启之后数据同步功能就会正常运行；</li><li>若你需要从 HuskSync 1.x 版本或 MySQLPlayerDataBridge 导入数据，请浏览下方的教程： <ul><li><a href="./guides.legacy-migration.html">从旧版迁移</a></li><li><a href="./guides.mpdb-migration.html">从 MPDB 迁移</a></li></ul></li></ul>',19)]))}const m=a(c,[["render",t]]);export{p as __pageData,m as default};
