import{_ as n,C as a,c as l,o as h,b1 as p,G as i}from"./chunks/framework.CC7vnuC4.js";const y=JSON.parse('{"title":"📊 数据","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/UltimateShop"},{"title":"📊 数据","link":"/UltimateShop/info.data"}]},"headers":[],"relativePath":"UltimateShop/info.data.md","filePath":"UltimateShop/info.data.md"}'),k={name:"UltimateShop/info.data.md"};function o(r,s,d,c,E,g){const t=a("NolebaseGitContributors"),e=a("NolebaseGitChangelog");return h(),l("div",null,[s[0]||(s[0]=p(`<h1 id="📊-数据" tabindex="-1">📊 数据 <a class="header-anchor" href="#📊-数据" aria-label="Permalink to &quot;📊 数据&quot;">​</a></h1><h2 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h2><p>本插件有 2 种数据类型：玩家数据与服务器数据。</p><p>玩家数据包含玩家自身的数据，如每个物品的购买及出售次数、冷却时间等内容。</p><p>服务器数据包含物品购买与出售的总次数、出售时间等内容。随机变量的数据也会存储在服务器数据中。</p><h2 id="保存" tabindex="-1">保存 <a class="header-anchor" href="#保存" aria-label="Permalink to &quot;保存&quot;">​</a></h2><p>对于玩家数据，我们会在玩家离开服务器时自动将玩家数据保存至数据库。</p><p>对于服务器数据，我们会在服务器正常关闭时将数据保存。（请不要直接关掉服务器的控制台窗口，你需要使用 /stop 命令）</p><p>服务器崩溃后未保存的数据会丢失，因此建议启用自动保存功能。</p><h2 id="自动保存" tabindex="-1">自动保存 <a class="header-anchor" href="#自动保存" aria-label="Permalink to &quot;自动保存&quot;">​</a></h2><p>你可以使用自动保存功能，这样插件就会间隔一段时间保存数据，防止数据因崩溃而丢失。不推荐将其频率设置得过高，这可能会导致服务器卡顿。你可以在 <code>config.yml</code> 中找到如下内容来设置本功能：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">auto-save</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  hide-message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  period-tick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6000</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 单位为刻, 20 刻 = 1 秒</span></span></code></pre></div><h2 id="数据库" tabindex="-1">数据库 <a class="header-anchor" href="#数据库" aria-label="Permalink to &quot;数据库&quot;">​</a></h2><p>你可以在 <code>config.yml</code> 中找到如下内容来设置本功能：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  jdbc-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jdbc:mysql://localhost:3306/ultimateshop?useSSL=false&amp;autoReconnect=true&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  jdbc-class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;com.mysql.cj.jdbc.Driver&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  properties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">root</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123456</span></span></code></pre></div>`,15)),i(t),i(e)])}const b=n(k,[["render",o]]);export{y as __pageData,b as default};
