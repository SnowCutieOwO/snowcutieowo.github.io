import{_ as a,c as i,o as e,al as n}from"./chunks/framework.LK_RS8Nx.js";const c=JSON.parse('{"title":"Redis","description":"","frontmatter":{},"headers":[],"relativePath":"HuskSync/setup.redis.md","filePath":"HuskSync/setup.redis.md"}'),t={name:"HuskSync/setup.redis.md"};function l(r,s,d,p,h,o){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-label="Permalink to &quot;Redis&quot;">​</a></h1><p>Redis 是一个用于数据缓存及跨服通信的服务器。HuskSync 需要至少 5.0+ 的 Redis 才可与<a href="./setup.database.html">数据库</a>搭配使用。这里有很多种方式安装或获取 Redis 服务器。</p><p>为了达到最佳预期，我们建议为本地运行（与其他服务器一并运行）的 Redis 服务器分配 1GB 运行内存。如果你有多台机器，则请在你运行了 Velocity/BungeeCord/Waterfall 的服务器上安装 Redis。</p><h2 id="什么是-redis" tabindex="-1">什么是 Redis？ <a class="header-anchor" href="#什么是-redis" aria-label="Permalink to &quot;什么是 Redis？&quot;">​</a></h2><p><a href="http://redis.io/" target="_blank" rel="noreferrer">Redis</a>（<strong>RE</strong>mote <strong>DI</strong>ctionary <strong>S</strong>erver，远程字典服务）是一个开源、内存加载数据的存储服务器，可用作缓存、通信断点、流数据引擎或数据库。</p><p>HuskSync 需要 Redis，并使用它在玩家切换服务器及主/副通信执行管理员操作（如通过 <a href="./features.commands.html"><code>/invsee</code> 命令</a> 更新其他服务器上玩家的数据）时缓存数据。见“<a href="./features.faqs.html">常见问题</a>”章节获取更多信息。</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>若要配置 Redis，找到你的 <a href="./setup.config-file.html"><code>config.yml</code></a>，并修改 <code>redis</code> 部分下的内容。将 <code>broker_type</code> 设置为 <code>REDIS</code>。</p><details class="details custom-block"><summary>数据库选项（config.yml）</summary><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Redis 设置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">redis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 在此指定 Redis 服务器的登录凭证。若未设置登录密码，则将 &quot;password&quot; 项留空</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  credentials</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">localhost</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    use_ssl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Redis 哨兵模式相关设置。请勿擅自修改，否则后果自负！</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  sentinel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 哨兵模式的主节点名称</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    master</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 地址:端口列表</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    nodes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span></code></pre></div></details><h3 id="凭据" tabindex="-1">凭据 <a class="header-anchor" href="#凭据" aria-label="Permalink to &quot;凭据&quot;">​</a></h3><p>在你的 Redis 上输入域名、端口及默认的用户密码。</p><p>如果你的 Redis 默认用户没有密码，则将其留空（<code>password: &#39;&#39;</code>），之后插件就会尝试不带密码连接数据库。</p><h3 id="默认用户密码" tabindex="-1">默认用户密码 <a class="header-anchor" href="#默认用户密码" aria-label="Permalink to &quot;默认用户密码&quot;">​</a></h3><p>取决于你安装的 Redis 版本，它有可能设置随机默认用户密码。你可以在 Redis 的服务器配置中找到这些。你可以在 <code>redis-cli</code> 中通过如下命令清理默认用户的密码。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">requirepass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> thepassword</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nopass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> +@all</span></span></code></pre></div><h4 id="使用-redis-哨兵" tabindex="-1">使用 Redis 哨兵 <a class="header-anchor" href="#使用-redis-哨兵" aria-label="Permalink to &quot;使用 Redis 哨兵&quot;">​</a></h4><p>若你在使用 <a href="https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/" target="_blank" rel="noreferrer">Redis 的哨兵模式</a>，可以在 <code>sentinel</code> 部分下进行设置。</p><p>你需要提供主集合的名称，哨兵的密码及按 <code>地址:端口</code> 格式填写的列表。</p><h2 id="获取-redis-服务器" tabindex="-1">获取 Redis 服务器 <a class="header-anchor" href="#获取-redis-服务器" aria-label="Permalink to &quot;获取 Redis 服务器&quot;">​</a></h2><p>使用 HuskSync 必须使用 Redis 服务器。在不同服务器上获取 Redis 的教程可以在下文找到。HuskSync 已经过 Redis 公开包调试，但应该也可以和其他分支的 Redis 或相关软件兼容。</p><p>为了达到最佳预期，我们建议为本地运行（与其他服务器一并运行）的 Redis 服务器分配 1GB 运行内存。如果你有多台机器，则请在你运行了 Velocity/BungeeCord/Waterfall 的服务器上安装 Redis。</p><h3 id="若你正在使用服务器托管" tabindex="-1">若你正在使用服务器托管 <a class="header-anchor" href="#若你正在使用服务器托管" aria-label="Permalink to &quot;若你正在使用服务器托管&quot;">​</a></h3><p>联系服务器提供商并请求其为你搭建 Redis。你可以向他们提供本页面的相关描述。如果还在找支持 Redis 的服务器提供商，我们的<a href="https://william278.net/docs/website/redis-hosts" target="_blank" rel="noreferrer">服务器提供商列表</a>中提到了有关内容。</p><p>如果你的服务器提供商没有提供 Redis，你就需要考虑 HuskSync 是否真的适合你了。如果你仍然需要 HuskSync，你可以选择通过 DigitalOcean 等机构租赁外部的 Redis 服务器，尽管我们不推荐这么做，这会导致游戏服务器及缓存之间的延迟增加，从而影响同步性能。</p><h3 id="在-linux-或-macos-上的-redis" tabindex="-1">在 Linux 或 macOS 上的 Redis <a class="header-anchor" href="#在-linux-或-macos-上的-redis" aria-label="Permalink to &quot;在 Linux 或 macOS 上的 Redis&quot;">​</a></h3><p>你可以在 Linux 的分发上<a href="https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-linux/" target="_blank" rel="noreferrer">安装 Redis</a>。Redis 在大多数包管理仓库中都可以找到。</p><p>你也可以在你的 macOS 服务器上<a href="https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-mac-os/" target="_blank" rel="noreferrer">安装 Redis</a>。</p><h3 id="在-windows-上的-redis" tabindex="-1">在 Windows 上的 Redis <a class="header-anchor" href="#在-windows-上的-redis" aria-label="Permalink to &quot;在 Windows 上的 Redis&quot;">​</a></h3><p>Windows 并不受到 Redis 的官方支持，但这里有一些<a href="https://github.com/tporadowski/redis/releases" target="_blank" rel="noreferrer">非官方移植</a>，你可以将其安装在 Windows 系统上，它运行良好。</p><p>如果你喜欢，你也可以<a href="https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-windows/" target="_blank" rel="noreferrer">通过 WSL 安装 Redis</a>。</p><h3 id="pterodactyl-翼龙面板-pelican-面板托管" tabindex="-1">Pterodactyl（翼龙面板）/ Pelican 面板托管 <a class="header-anchor" href="#pterodactyl-翼龙面板-pelican-面板托管" aria-label="Permalink to &quot;Pterodactyl（翼龙面板）/ Pelican 面板托管&quot;">​</a></h3><p>如果你在翼龙或 Pelican 面板上托管服务器，你也需要安装 Redis，并可以将其应用于服务器上的 HuskHomes。</p><p>如果你正在同一节点上运行 Redis 和服务器，你需要以 <code>172.18.0.1</code> 为地址（或其他等价设置，取决于你的网络设置），并将其在 Redis 的配置中绑定（nano /etc/redis/redis.conf）。</p><p>你也需要将 <code>requirepass</code> 部分的配置取消注释，并为其设置一个密码使得其能被访问，或禁用 <code>protected-mode</code> 设置。在设置密码并通过命令 <code>systemctl restart redis</code> 重启 Redis 服务器后，你也需要在你的翼龙面板 <code>.env</code> 中更新密码（<code>nano /var/www/pterodactyl/.env</code>）并通过 <code>cd /var/www/pterodactyl &amp;&amp; php artisan config:clear</code> 刷新缓存。</p><p>你也可能也需要在 Linux 分发的防火墙上放行特定连接。</p>`,35)]))}const g=a(t,[["render",l]]);export{c as __pageData,g as default};
