import{_ as a,c as t,o as i,al as e}from"./chunks/framework.CAEutmY3.js";const c=JSON.parse('{"title":"数据库","description":"","frontmatter":{},"headers":[],"relativePath":"HuskHomes/setup.database.md","filePath":"HuskHomes/setup.database.md"}'),n={name:"HuskHomes/setup.database.md"};function l(h,s,p,k,d,r){return i(),t("div",null,s[0]||(s[0]=[e(`<h1 id="数据库" tabindex="-1">数据库 <a class="header-anchor" href="#数据库" aria-label="Permalink to &quot;数据库&quot;">​</a></h1><p>HuskHomes 在你所选种类的数据库中存储玩家数据、家传送点、地标传送点及其他传送数据。在搭建跨服传送系统时，你需要将数据库中磊设置为 MySQL 或 MariaDB 来允许数据在任意地方都能被读取。</p><h2 id="数据库种类" tabindex="-1">数据库种类 <a class="header-anchor" href="#数据库种类" aria-label="Permalink to &quot;数据库种类&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">警告</p><p>当前没有自动迁移<em>数据库</em>中数据的方法。手动迁移可能会导致数据丢失。</p></div><table tabindex="0"><thead><tr><th style="text-align:left;">种类</th><th style="text-align:center;">存储类型</th><th style="text-align:left;">描述</th><th style="text-align:center;">是否支持跨服</th></tr></thead><tbody><tr><td style="text-align:left;"><code>SQLITE</code></td><td style="text-align:center;">文件</td><td style="text-align:left;">基于文件存储的数据库种类。是本插件的默认（推荐）存储选择。</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:left;"><code>H2</code></td><td style="text-align:center;">文件</td><td style="text-align:left;">与 SQLITE 相似，是基于文件存储的数据库种类，在数据库读取数据方面略有优化。</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:left;"><code>MYSQL</code></td><td style="text-align:center;">服务器</td><td style="text-align:left;">在 MySQL 服务器上搭建的数据库。</td><td style="text-align:center;">✅</td></tr><tr><td style="text-align:left;"><code>MARIADB</code></td><td style="text-align:center;">服务器</td><td style="text-align:left;">在 MariaDB 服务器上搭建的数据库。</td><td style="text-align:center;">✅</td></tr><tr><td style="text-align:left;"><code>POSTGRESQL</code></td><td style="text-align:center;">服务器</td><td style="text-align:left;">在 PostgreSQL 服务器上搭建的数据库。</td><td style="text-align:center;">✅</td></tr></tbody></table><h3 id="跨服" tabindex="-1">跨服 <a class="header-anchor" href="#跨服" aria-label="Permalink to &quot;跨服&quot;">​</a></h3><p>若你正在一个群组服上使用 HuskHomes，你就需要使用任意一种支持跨服的数据库。这是因为跨服需要让数据在所有子服都能交互，以此使 HuskHomes 能在任意子服上使用相同的数据。</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>若要修改数据库种类，你需要在 <code>config.yml</code> 的 <code>database</code> 设置下修改这些选项。</p><p>数据库配置（config.yml）</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 使用的数据库种类 (SQLITE, H2, MYSQL 或 MARIADB)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SQLITE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  mysql</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    credentials</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 若你正在使用 MYSQL、MARIADB 或 POSTGRESQL 作为数据存储方式，你需要在这里设置登录凭证</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">localhost</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3306</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">HuskHomes</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">root</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pa55w0rd</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      parameters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">autoReconnect=true&amp;useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    connection_pool</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # MYSQL / MARIADB / POSTGRESQL 数据库的 Hikari 连接池设定。 除非你知道你在做什么，否则请勿随意改动！</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      idle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      lifetime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1800000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      keepalive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20000</span></span></code></pre></div><h3 id="登录凭据-mariadb-mysql-postgresql" tabindex="-1">登录凭据（MariaDB &amp; MySQL &amp; PostgreSQL） <a class="header-anchor" href="#登录凭据-mariadb-mysql-postgresql" aria-label="Permalink to &quot;登录凭据（MariaDB &amp; MySQL &amp; PostgreSQL）&quot;">​</a></h3><p>当你正在以 MariaDB、MySQL 或 PostgreSQL 为数据库时，你将需要指定登录凭据（域名、端口、用户名、密码以及数据库名称）。这些凭据用来连接到你的数据库服务器。</p><p>额外地，如果你对高级的设置有需求，你可以修改 HikariCP 连接池设置。默认值对大部分服务器适用。</p>`,14)]))}const E=a(n,[["render",l]]);export{c as __pageData,E as default};
