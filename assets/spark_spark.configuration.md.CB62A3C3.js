import{_ as a,c as i,o as e,al as t}from"./chunks/framework.CAEutmY3.js";const c=JSON.parse('{"title":"配置文件","description":"","frontmatter":{},"headers":[],"relativePath":"spark/spark.configuration.md","filePath":"spark/spark.configuration.md"}'),n={name:"spark/spark.configuration.md"};function p(l,s,o,r,h,d){return e(),i("div",null,s[0]||(s[0]=[t('<h1 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h1><p>spark 的配置文件非常简单。大多数使用本插件的用户不需要动这些默认设置。正因如此，配置文件不是自动生成的。</p><p>若要修改默认设置，你需要自行创建配置文件。配置文件的名称为 <code>config.json</code>，且应当放在 spark 文件夹中。</p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><p>下文为配置文件中可用的设置项。</p><h3 id="backgroundprofiler" tabindex="-1"><code>backgroundProfiler</code> <a class="header-anchor" href="#backgroundprofiler" aria-label="Permalink to &quot;`backgroundProfiler`&quot;">​</a></h3><p>是否在后台运行健康记录。</p><p>当设置为 true 时，spark 会在服务器/客户端/群组开启时便进行性能健康记录。报告可通过命令正常上传。该设置的默认值为 <code>true</code>。</p><p>示例</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;backgroundProfiler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="backgroundprofilerinterval" tabindex="-1"><code>backgroundProfilerInterval</code> <a class="header-anchor" href="#backgroundprofilerinterval" aria-label="Permalink to &quot;`backgroundProfilerInterval`&quot;">​</a></h3><p>性能健康记录采样的时间间隔。默认值为 <code>10</code>（毫秒）。</p><p>示例</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;backgroundProfilerInterval&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="backgroundprofilerengine" tabindex="-1"><code>backgroundProfilerEngine</code> <a class="header-anchor" href="#backgroundprofilerengine" aria-label="Permalink to &quot;`backgroundProfilerEngine`&quot;">​</a></h3><p>性能健康记录所使用的引擎。</p><p>默认为 <code>&quot;async&quot;</code>，但也可以写 <code>&quot;java&quot;</code>。</p><p>示例</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;backgroundProfilerEngine&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;async&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="viewerurl" tabindex="-1"><code>viewerUrl</code> <a class="header-anchor" href="#viewerurl" aria-label="Permalink to &quot;`viewerUrl`&quot;">​</a></h3><p>查询命令输出内容时使用的网址。</p><p>数据“代码”会被加在链接后，所以这里填入的链接应当总是以 <code>/</code> 符号结尾。</p><p>默认值为 <code>&quot;https://spark.lucko.me/&quot;</code>。</p><p>示例</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;viewerUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://spark.lucko.me/&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="bytebinurl" tabindex="-1"><code>bytebinUrl</code> <a class="header-anchor" href="#bytebinurl" aria-label="Permalink to &quot;`bytebinUrl`&quot;">​</a></h3><p>健康报告和堆转储摘要上传所使用的网站。与上一条设置相似，这里填入的链接应当总是以 <code>/</code> 符号结尾。</p><p>默认值为 <code>&quot;https://spark-usercontent.lucko.me/&quot;</code>。</p><p>示例</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;bytebinUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://spark-usercontent.lucko.me/&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="bytesocksurl" tabindex="-1"><code>bytesocksUrl</code> <a class="header-anchor" href="#bytesocksurl" aria-label="Permalink to &quot;`bytesocksUrl`&quot;">​</a></h3><p>用于与 spark 报告浏览器交互的 bytesocks 实例域名。</p><p>默认值为 <code>&quot;spark-usersockets.lucko.me&quot;</code>。</p><p>示例</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;bytesocksUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spark-usersockets.lucko.me&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="overridetpscommand" tabindex="-1"><code>overrideTpsCommand</code> <a class="header-anchor" href="#overridetpscommand" aria-label="Permalink to &quot;`overrideTpsCommand`&quot;">​</a></h3><p>是否让 spark 覆盖默认的 TPS 命令。该设置只在 Bukkit 系服务端上有效。</p><p>默认值为 <code>true</code>。</p><p>示例</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;overrideTpsCommand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="disableresponsebroadcast" tabindex="-1"><code>disableResponseBroadcast</code> <a class="header-anchor" href="#disableresponsebroadcast" aria-label="Permalink to &quot;`disableResponseBroadcast`&quot;">​</a></h3><p>是否禁止 spark 向所有在线管理员（拥有使用 spark 必要权限的玩家）发送命令输出。</p><p>默认值为 <code>false</code>。</p><p>示例</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;disableResponseBroadcast&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>',45)]))}const u=a(n,[["render",p]]);export{c as __pageData,u as default};
