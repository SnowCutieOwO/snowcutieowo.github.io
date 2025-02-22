import{_ as a,c as i,o as n,al as t}from"./chunks/framework.CAEutmY3.js";const c=JSON.parse('{"title":"数据库","description":"","frontmatter":{},"headers":[],"relativePath":"HuskSync/setup.database.md","filePath":"HuskSync/setup.database.md"}'),e={name:"HuskSync/setup.database.md"};function l(h,s,p,k,d,o){return n(),i("div",null,s[0]||(s[0]=[t(`<h1 id="数据库" tabindex="-1">数据库 <a class="header-anchor" href="#数据库" aria-label="Permalink to &quot;数据库&quot;">​</a></h1><p>HuskSync 会将玩家数据及快照保存在你设置的服务器中。这和 [Redis] 服务器是不同的，它被本插件用于缓存及内部数据沟通。</p><h2 id="数据库类型" tabindex="-1">数据库类型 <a class="header-anchor" href="#数据库类型" aria-label="Permalink to &quot;数据库类型&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">警告</p><p>暂时没有在这些<em>数据库</em>类型之间切换的方法。修改数据库类型会导致数据丢失。</p></div><table tabindex="0"><thead><tr><th>类型</th><th>数据库软件</th></tr></thead><tbody><tr><td><code>MYSQL</code></td><td>MySQL 8.0+</td></tr><tr><td><code>MARIADB</code></td><td>MariaDB 5.0+</td></tr><tr><td><code>POSTGRE</code></td><td>PostgreSQL</td></tr><tr><td><a href="#mongodb-安装"><code>MONGO</code></a></td><td>MongoDB</td></tr></tbody></table><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>若要修改数据库类型，打开 <code>config.yml</code> 文件并修改 <code>database</code> 下的属性。</p><details class="details custom-block"><summary>数据库选项（config.yml）</summary><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 数据库设置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 使用的数据库种类 (MYSQL, MARIADB, POSTGRES, MONGO)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MYSQL</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 为 MYSQL, MARIADB, POSTGRES 或 MONGO 数据库设置对应的登录凭据</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  credentials</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">localhost</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3306</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">minecraft</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">root</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 仅在使用了 MARIADB 或 POSTGRES 类型的数据库下修改本项</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    parameters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">autoReconnect=true&amp;useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # MYSQL, MARIADB, POSTGRES 数据库 Hikari 连接池设置. 请勿擅自修改, 否则后果自负!</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  connection_pool</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    maximum_pool_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    minimum_idle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    maximum_lifetime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1800000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    keepalive_time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    connection_timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # MongoDB 高级设置。请勿擅自修改, 否则后果自负！</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  mongo_settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    using_atlas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    parameters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">retryWrites=true&amp;w=majority&amp;authSource=HuskSync</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 数据库使用的表名。请勿擅自修改, 否则后果自负！</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  table_names</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    users</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">husksync_users</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    user_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">husksync_user_data</span></span></code></pre></div></details><h2 id="凭据" tabindex="-1">凭据 <a class="header-anchor" href="#凭据" aria-label="Permalink to &quot;凭据&quot;">​</a></h2><p>你需要指定登录凭据（域名、端口、用户名、密码以及数据库名称）。这些凭据用来连接到你的数据库服务器。</p><p>如果你的数据库服务器账号没有密码（不推荐），请将密码一栏留空（<code>password: &#39;&#39;</code>），插件会试图不带密码进行连接。</p><h3 id="连接池设置" tabindex="-1">连接池设置 <a class="header-anchor" href="#连接池设置" aria-label="Permalink to &quot;连接池设置&quot;">​</a></h3><p>如果你正在使用 MySQL、MariaDB 或 PostgreSQL 作为数据库，你可以修改 <code>HikariCP</code> 连接池设置，修改风险需自行承担。</p><p>需要注意的是修改这些值可能会导致问题。默认值适用于大部分用户。</p><h2 id="mongodb-安装" tabindex="-1">MongoDB 安装 <a class="header-anchor" href="#mongodb-安装" aria-label="Permalink to &quot;MongoDB 安装&quot;">​</a></h2><p>如果你正在使用 MongoDB 数据库，除了将数据库类型设置为 <code>MONGO</code>，你还需要做一些不同的事。</p><ul><li>在 <code>database</code> 的 <code>credentials</code> 部分下，输入你的 MongoDB 数据库凭证。另外你不应该乱动 <code>connection_pool</code> 部分的设置。</li><li>在 <code>mongo_settings</code> 部分的 <code>parameters</code> 部分，确保指定的 <code>&amp;authSource=</code> 与你使用的数据库类型相符（默认为 <code>HuskSync</code>）</li></ul><h2 id="mongodb-atlas-安装" tabindex="-1">MongoDB Atlas 安装 <a class="header-anchor" href="#mongodb-atlas-安装" aria-label="Permalink to &quot;MongoDB Atlas 安装&quot;">​</a></h2><p>如果你正在使用 MongoDB Atlas 数据库，你需要修改 Atlas 设置并修改连接字段参数。</p><ul><li>在 <code>mongo_settings</code> 下将 <code>using_atlas</code> 设置为 <code>true</code>。</li><li>去掉 <code>mongo_settings</code> 下 <code>patameters</code> 中的 <code>&amp;authSource=HuskSync</code>。</li></ul><p>需要注意的是使用 Atlas 时 <code>credentials</code> 下的 <code>port</code> 是会被忽略的。</p>`,21)]))}const E=a(e,[["render",l]]);export{c as __pageData,E as default};
