import{_ as s,c as a,a7 as t,o as e}from"./chunks/framework.Bz4u1pnU.js";const E=JSON.parse('{"title":"基础 API 信息","description":"","frontmatter":{},"headers":[],"relativePath":"LibreLogin/api.basic-api-information.md","filePath":"LibreLogin/api.basic-api-information.md"}'),n={name:"LibreLogin/api.basic-api-information.md"};function l(h,i,p,k,r,d){return e(),a("div",null,i[0]||(i[0]=[t(`<h1 id="基础-api-信息" tabindex="-1">基础 API 信息 <a class="header-anchor" href="#基础-api-信息" aria-label="Permalink to &quot;基础 API 信息&quot;">​</a></h1><p>LibreLogin 提供了一个 API，允许你将本插件按需修改。若你想做的事在 API 中毫无头绪，你可以提交一个议题，我会很快回复。</p><h2 id="获取" tabindex="-1">获取 <a class="header-anchor" href="#获取" aria-label="Permalink to &quot;获取&quot;">​</a></h2><h3 id="添加仓库" tabindex="-1">添加仓库 <a class="header-anchor" href="#添加仓库" aria-label="Permalink to &quot;添加仓库&quot;">​</a></h3><h4 id="gradle-kts" tabindex="-1">Gradle（KTS）: <a class="header-anchor" href="#gradle-kts" aria-label="Permalink to &quot;Gradle（KTS）:&quot;">​</a></h4><div class="language-Kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">maven</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://repo.kyngs.xyz/public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h4 id="gradle-groovy" tabindex="-1">Gradle（Groovy） <a class="header-anchor" href="#gradle-groovy" aria-label="Permalink to &quot;Gradle（Groovy）&quot;">​</a></h4><div class="language-Kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">maven</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://repo.kyngs.xyz/public&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="maven" tabindex="-1">Maven <a class="header-anchor" href="#maven" aria-label="Permalink to &quot;Maven&quot;">​</a></h4><div class="language-XML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">XML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;kyngs-repo-public&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Repository&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;https://repo.kyngs.xyz/public&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="添加成品" tabindex="-1">添加成品 <a class="header-anchor" href="#添加成品" aria-label="Permalink to &quot;添加成品&quot;">​</a></h3><p><strong>将 &lt;版本&gt; 替换为你想要依赖的成品版本。</strong><a href="https://repo.kyngs.xyz/#/releases/xyz/kyngs/librelogin/API" target="_blank" rel="noreferrer">你可以在这里浏览可用<strong>发行版</strong></a>，<a href="https://repo.kyngs.xyz/#/snapshots/xyz/kyngs/librelogin/API" target="_blank" rel="noreferrer">或者你可以在这里浏览可用的<strong>快照</strong>（开发构建）</a>。</p><h4 id="gradle-kts-1" tabindex="-1">Gradle（KTS）： <a class="header-anchor" href="#gradle-kts-1" aria-label="Permalink to &quot;Gradle（KTS）：&quot;">​</a></h4><div class="language-Kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compileOnly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xyz.kyngs.librelogin:API:&lt;version&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h4 id="gradle-groovy-1" tabindex="-1">Gradle（Groovy）： <a class="header-anchor" href="#gradle-groovy-1" aria-label="Permalink to &quot;Gradle（Groovy）：&quot;">​</a></h4><div class="language-Kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">compileOnly </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xyz.kyngs.librelogin:API:&lt;version&gt;&quot;</span></span></code></pre></div><h4 id="maven-1" tabindex="-1">Maven <a class="header-anchor" href="#maven-1" aria-label="Permalink to &quot;Maven&quot;">​</a></h4><div class="language-XML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">XML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;xyz.kyngs.librelogin&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;API&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;provided&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="我正在为-编写插件" tabindex="-1">我正在为 ... 编写插件 <a class="header-anchor" href="#我正在为-编写插件" aria-label="Permalink to &quot;我正在为 ... 编写插件&quot;">​</a></h2><h3 id="paper、purpur-等" tabindex="-1">Paper、Purpur 等 <a class="header-anchor" href="#paper、purpur-等" aria-label="Permalink to &quot;Paper、Purpur 等&quot;">​</a></h3><p>你必须在插件的 <code>plugin.yml</code> 中声明“LibreLogin”为依赖。然后你就可以获取 API 实例：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((LibreLoginProvider</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Player, World</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) Bukkit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPluginManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LibreLogin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLibreLogin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h3 id="velocity" tabindex="-1">Velocity <a class="header-anchor" href="#velocity" aria-label="Permalink to &quot;Velocity&quot;">​</a></h3><p>你必须在插件的声明中标记“LibreLogin”为依赖。然后你就可以获取 API 实例：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((LibreLoginProvider</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Player, RegisteredServer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) server.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPluginManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;librelogin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">orElseThrow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">orElseThrow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLibreLogin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h3 id="bungeecord、waterfall、flamecord-等" tabindex="-1">BungeeCord、WaterFall、FlameCord 等 <a class="header-anchor" href="#bungeecord、waterfall、flamecord-等" aria-label="Permalink to &quot;BungeeCord、WaterFall、FlameCord 等&quot;">​</a></h3><p>你必须在插件的 <code>plugin.yml</code>/<code>bungee.yml</code> 中声明“LibreLogin”为依赖。然后你就可以获取 API 实例：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((LibreLoginProvider</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ProxiedPlayer, ServerInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getProxy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPluginManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;librelogin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLibreLogin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h3 id="多平台" tabindex="-1">多平台 <a class="header-anchor" href="#多平台" aria-label="Permalink to &quot;多平台&quot;">​</a></h3><p>你可以通过平台的插件管理器获取 LibreLogin 的实例。之后你需要将其调用为 <code>LibreLoginProvider&lt;?, ?&gt;</code></p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><p>API 中的所有用法都有文档记载。你的 IDE 应该会帮你下载好插件的源码，你可以直接进行浏览。对 API 事件，请见<a href="./api.api-events.html">API 事件</a>章节。</p><h2 id="警告" tabindex="-1">警告 <a class="header-anchor" href="#警告" aria-label="Permalink to &quot;警告&quot;">​</a></h2><p><strong>如果有功能包含在代码实现却未出现在 API 中，请提交议题，我们会负责解决。</strong></p>`,34)]))}const g=s(n,[["render",l]]);export{E as __pageData,g as default};