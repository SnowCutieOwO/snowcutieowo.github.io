import{_ as a,c as l,o,b0 as i}from"./chunks/framework.w6NQj85O.js";const m=JSON.parse('{"title":"安装教程","description":"","frontmatter":{},"headers":[],"relativePath":"HuskHomes/setup.setup.md","filePath":"HuskHomes/setup.setup.md"}'),r={name:"HuskHomes/setup.setup.md"};function s(t,e,c,d,u,h){return o(),l("div",null,e[0]||(e[0]=[i('<h1 id="安装教程" tabindex="-1">安装教程 <a class="header-anchor" href="#安装教程" aria-label="Permalink to &quot;安装教程&quot;">​</a></h1><p>本章节将会引导你将 HuskSync 安装至 Spigot、Fabric、Sponge 或群组子服上。</p><h2 id="安装需求" tabindex="-1">安装需求 <a class="header-anchor" href="#安装需求" aria-label="Permalink to &quot;安装需求&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">提示</p><p>若插件载入失败，请检查你是否运行了<a href="./setup.compatibility.html">不受支持的版本</a>。</p></div><ul><li>以 Java 17+ 运行的 Spigot（1.17.1+）、Fabric（最新版 Minecraft）、Sponge（API v10）的 Minecraft Java 版服务器；</li><li>（对群组服）群组服核心（Velocity、BungeeCord） 和 MySQL（v8.0+）MariaDB 或 PostgreSQL 数据库；</li><li>（可选的 [Redis 支持]）Redis 数据库（v5.0+）</li></ul><h2 id="为服务器下载-huskhomes" tabindex="-1">为服务器下载 HuskHomes <a class="header-anchor" href="#为服务器下载-huskhomes" aria-label="Permalink to &quot;为服务器下载 HuskHomes&quot;">​</a></h2><p>从<a href="https://github.com/WiIIiam278/HuskHomes/releases/latest" target="_blank" rel="noreferrer">最新版的发布页</a>为你的服务端下载对应的 jar 文件：</p><ul><li>对于 Spigot 或 Paper 服务器，请下载 <code>HuskHomes-Paper</code> jar 文件；</li><li>对于 Fabric 服务器，请下载 <code>HuskHomes-Fabric</code> jar 文件；</li><li>对于 Sponge 服务器，请下载 <code>HuskHomes-Sponge</code> jar 文件。</li></ul><h2 id="单服安装步骤" tabindex="-1">单服安装步骤 <a class="header-anchor" href="#单服安装步骤" aria-label="Permalink to &quot;单服安装步骤&quot;">​</a></h2><h3 id="_1-安装-jar-文件" tabindex="-1">1. 安装 jar 文件 <a class="header-anchor" href="#_1-安装-jar-文件" aria-label="Permalink to &quot;1. 安装 jar 文件&quot;">​</a></h3><ul><li>将插件拖放至每个 Spigot 服务器的 <code>/plugins/</code> 或 Fabric/Sponge 的 <code>/mods</code>文件夹下；</li><li>你不需要将 HuskSync 安装在群组服上。</li></ul><h3 id="_2-重启服务器并修改配置" tabindex="-1">2. 重启服务器并修改配置 <a class="header-anchor" href="#_2-重启服务器并修改配置" aria-label="Permalink to &quot;2. 重启服务器并修改配置&quot;">​</a></h3><ul><li>开启，之后关闭服务器，使 HuskSync 生成一份配置文件；</li><li>你现在可以按喜好编辑<a href="./setup.config-files.html">配置文件</a>与本地语言文件了。</li></ul><h3 id="_4-重启服务器" tabindex="-1">4. 重启服务器 <a class="header-anchor" href="#_4-重启服务器" aria-label="Permalink to &quot;4. 重启服务器&quot;">​</a></h3><ul><li>再次启动服务器即可享受 HuskHomes 的功能！</li></ul><hr><h2 id="群组服安装教程" tabindex="-1">群组服安装教程 <a class="header-anchor" href="#群组服安装教程" aria-label="Permalink to &quot;群组服安装教程&quot;">​</a></h2><p>这些教程用于指导在多个 Spigot、Fabric 或 Sponge 服务器上安装 HuskHomes 并使其一同工作。另外本功能需要（v8.0+ 的）MySQL。</p><h3 id="_1-安装-jar-插件" tabindex="-1">1. 安装 jar 插件 <a class="header-anchor" href="#_1-安装-jar-插件" aria-label="Permalink to &quot;1. 安装 jar 插件&quot;">​</a></h3><ul><li>将插件拖放至每个 Spigot 服务器的 <code>/plugins/</code> 或 Fabric/Sponge 的 <code>/mods</code>文件夹下；</li><li>你不需要将 HuskHomes 安装在群组服上。</li></ul><h3 id="_2-重启服务器" tabindex="-1">2. 重启服务器 <a class="header-anchor" href="#_2-重启服务器" aria-label="Permalink to &quot;2. 重启服务器&quot;">​</a></h3><ul><li>开启，之后关闭服务器，使 HuskHomes 生成一份配置文件；</li><li>对于高级用户：如果你喜欢的话，你可以自己创建一个 config.yml 文件并使得每个子服的 <code>/plugins/HuskHomes/</code>（或 <code>/config/huskhomes/</code>） 文件夹同步，更方便地更新配置文件。</li></ul><h3 id="_3-配置服务器启用跨服模式" tabindex="-1">3. 配置服务器启用跨服模式 <a class="header-anchor" href="#_3-配置服务器启用跨服模式" aria-label="Permalink to &quot;3. 配置服务器启用跨服模式&quot;">​</a></h3><ul><li>找到每个子服上的 HuskHomes 的<a href="./setup.config-files.html">配置文件</a>（Spigot 端为 <code>~/plugins/HuskHomes/config.yml</code>，Fabric/Sponge 端为 <code>~/config/huskhomes/config.yml</code>）；</li><li>在 <code>database</code> 部分配置下，将 <code>type</code> 的值设置为 <code>MYSQL</code> 或 <code>MARIADB</code>（取决于你使用了哪种服务器）；</li><li>在 <code>mysql/credentials</code> 部分配置中，输入你的 MySQL、MariaDB 或 PostgreSQL 数据库登录凭据；</li><li>下滑并找到 <code>cross_server</code> 设置，将其修改为 <code>true</code>；</li><li>若你喜欢，你可以配置 Redis 服务器用于网络通信（若要如此，请将 <code>messenger_type</code> 设置为 <code>REDIS</code>）；</li><li>保存配置文件。请确保所有子服的配置文件都更新过。</li></ul><h3 id="_4-重启服务器并设置-serverl-yml-值" tabindex="-1">4. 重启服务器并设置 serverl.yml 值 <a class="header-anchor" href="#_4-重启服务器并设置-serverl-yml-值" aria-label="Permalink to &quot;4. 重启服务器并设置 serverl.yml 值&quot;">​</a></h3><ul><li>再次重启每个子服，你可以在先前的插件文件夹中发现 <code>serverl.yml</code> 文件；</li><li>打开文件，将 <code>name</code> 项的值改为群组核心配置中设置的此服务器名称（如，服务器在群组服核心配置中名称为“hub”，游戏内可通过命令 <code>/server hub</code> 进入本服，则将此处配置的值改为“hub”）。</li></ul><h3 id="_5-再次重启服务器" tabindex="-1">5. 再次重启服务器 <a class="header-anchor" href="#_5-再次重启服务器" aria-label="Permalink to &quot;5. 再次重启服务器&quot;">​</a></h3><ul><li>请确保你输入的 MySQL 数据库凭证正确，若正确则你的群组现在就在跨服使用 HuskHomes！</li><li>你可以按需决定是否删除一开始生成的 <code>HuskHomesData.db</code> SQLite 文件。</li></ul><p>::: deatils 跨服随机传送</p><p>在使用跨服随机传送时，下面三项必须为 true。</p><ol><li>必须将 <code>rtp.cross-server</code> 为 <code>true</code>。</li><li>你必须使用 Redis 作为消息代理。</li><li>在 <code>rtp.random_target_servers</code> 必须匹配 <code>server.yml</code> 与群组端配置的值！</li></ol><p>:::</p><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-label="Permalink to &quot;下一步&quot;">​</a></h2><ul><li><a href="./features.commands.html">命令与权限</a></li><li><a href="./setup.config-files.html">配置文件</a></li><li><a href="./setup.database.html">数据库</a></li><li><a href="./setup.redis-support.html">Redis 支持</a></li><li><a href="./guides.translations.html">语言贡献</a></li></ul>',34)]))}const p=a(r,[["render",s]]);export{m as __pageData,p as default};
