import{_ as t,C as i,c as l,o as p,b1 as h,G as a}from"./chunks/framework.CC7vnuC4.js";const y=JSON.parse('{"title":"自托管网页界面","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/LuckPerms"},{"title":"自托管网页界面","link":"/LuckPerms/reference.self-hosting-the-web-interfaces"}]},"headers":[],"relativePath":"LuckPerms/reference.self-hosting-the-web-interfaces.md","filePath":"LuckPerms/reference.self-hosting-the-web-interfaces.md"}'),r={name:"LuckPerms/reference.self-hosting-the-web-interfaces.md"};function k(o,s,c,d,b,g){const e=i("NolebaseGitContributors"),n=i("NolebaseGitChangelog");return p(),l("div",null,[s[0]||(s[0]=h(`<h1 id="自托管网页界面" tabindex="-1">自托管网页界面 <a class="header-anchor" href="#自托管网页界面" aria-label="Permalink to &quot;自托管网页界面&quot;">​</a></h1><p>LuckPerms 有许多内置的在线编辑器/浏览器。它们不需要自托管，所有人都可部署的公开版本可以在如下链接找到：</p><ul><li><a href="https://luckperms.net/editor/" target="_blank" rel="noreferrer">https://luckperms.net/editor/</a></li><li><a href="https://luckperms.net/verbose/" target="_blank" rel="noreferrer">https://luckperms.net/verbose/</a></li><li><a href="https://luckperms.net/treeview/" target="_blank" rel="noreferrer">https://luckperms.net/treeview/</a></li><li><a href="https://bytebin.lucko.me/" target="_blank" rel="noreferrer">https://bytebin.lucko.me/</a></li></ul><p>但是，我们也欢迎那些有兴趣自托管这些网站的用户，这样他们就可以个性化或加入自定义内容。虽然我们不推荐这么干（回报不大）—— 但我们还是会提供给你相关内容。</p><p>本教程假定你已经有一些在 Linux 服务器上搭建（网页）应用的经验。</p><h2 id="第一步-安装-bytebin" tabindex="-1">第一步：安装 bytebin <a class="header-anchor" href="#第一步-安装-bytebin" aria-label="Permalink to &quot;第一步：安装 bytebin&quot;">​</a></h2><p>你要做的第一件事就是安装并配置 bytebin 的拷贝。这能够让 LuckPerms 在插件的数据和网页浏览器（使用网页时）传递数据。</p><p>若你只想要自定义界面，你可以跳过这一步，但如果你想要完全自托管整个系统，这个步骤是必要的。</p><p>bytebin 的源码在 <a href="https://github.com/lucko/bytebin" target="_blank" rel="noreferrer">https://github.com/lucko/bytebin</a> —— 你可以用 <a href="https://maven.apache.org/" target="_blank" rel="noreferrer">Maven</a> 通过 <code>mvn clean package</code> 进行编译 —— 构建成品会输出在 <code>/target/</code> 中。</p><p>相似地，你可以在这里下载预构建的二进制文件：<a href="https://ci.lucko.me/job/bytebin/" target="_blank" rel="noreferrer">https://ci.lucko.me/job/bytebin/</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir bytebin</span></span>
<span class="line"><span>cd bytebin</span></span>
<span class="line"><span>curl -O https://ci.lucko.me/job/bytebin/lastSuccessfulBuild/artifact/target/bytebin.jar</span></span>
<span class="line"><span>touch config.json</span></span></code></pre></div><p>之后，打开新创建的 <code>config.json</code> 文件，并加入下文内容：</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;host&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;port&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;keyLength&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;lifetimeMinutes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;maxContentLengthMb&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>host</code> 和 <code>port</code> 指定了实例监听的地址。<code>keyLength</code> 则为生成的数据 token 长度。<code>lifetimeMinutes</code> 则是内容的有效时间。<code>maxContentLengthMb</code> 则为上传文件的最大大小。</p><p>这里还有额外的配置选项，允许你自定义读/写操作的速率限制，但这些内容超出了本章的范围。对应的变量可以在<a href="https://github.com/lucko/bytebin/blob/bf7b4dc2f8cdfd912b8acd71f0a347da3c481838/src/main/java/me/lucko/bytebin/Bytebin.java#L192-L200" target="_blank" rel="noreferrer">这里</a>找到。</p><p>之后，你可能需要在反代中建立 bytebin 示例。下文为 <a href="https://www.nginx.com/" target="_blank" rel="noreferrer">nginx</a> 的示例。</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">443</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bytebin.example.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    client_max_body_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30M</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    client_body_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_redirect </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http:// https://;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://127.0.0.1:8080;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>现在你可以使用 <code>java -jar bytebin.jar</code> 启动服务器 —— 内容应该在 <code>https://bytebin.example.com/</code> 中可用。</p><h2 id="第二步-安装网站" tabindex="-1">第二步：安装网站 <a class="header-anchor" href="#第二步-安装网站" aria-label="Permalink to &quot;第二步：安装网站&quot;">​</a></h2><p>网站应用的源码可在 Github 中找到：<a href="https://github.com/LuckPerms/LuckPermsWeb" target="_blank" rel="noreferrer">https://github.com/LuckPerms/LuckPermsWeb</a></p><p>你需要在你自己的网络服务器上自行构建和托管这个网站。你可以选择使用<a href="https://github.com/LuckPerms/web-installer#automatic-setup" target="_blank" rel="noreferrer">自动构建脚本</a>或<a href="https://github.com/LuckPerms/web-installer#manual-setup" target="_blank" rel="noreferrer">手动安装</a>。</p><h2 id="第三步-配置插件来使用自己的-bytebin-网站" tabindex="-1">第三步：配置插件来使用自己的 bytebin / 网站 <a class="header-anchor" href="#第三步-配置插件来使用自己的-bytebin-网站" aria-label="Permalink to &quot;第三步：配置插件来使用自己的 bytebin / 网站&quot;">​</a></h2><p>将下文内容添加至 LuckPerms 的 <code>config.yml</code> 末尾：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">web-editor-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://example.com/luckperms/editor/&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">verbose-viewer-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://example.com/luckperms/verbose/&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tree-viewer-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://example.com/luckperms/treeview/&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># only required if you did Step 1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bytebin-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://bytebin.example.com/&#39;</span></span></code></pre></div>`,24)),a(e),a(n)])}const u=t(r,[["render",k]]);export{y as __pageData,u as default};
