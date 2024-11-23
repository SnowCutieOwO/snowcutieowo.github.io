import{_ as e,c as s,a7 as o,o as t}from"./chunks/framework.Bz4u1pnU.js";const m=JSON.parse('{"title":"域名私钥","description":"","frontmatter":{},"headers":[],"relativePath":"WorldGuard/configuration.host-keys.md","filePath":"WorldGuard/configuration.host-keys.md"}'),i={name:"WorldGuard/configuration.host-keys.md"};function l(p,a,n,r,c,d){return t(),s("div",null,a[0]||(a[0]=[o(`<h1 id="域名私钥" tabindex="-1">域名私钥<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> <a class="header-anchor" href="#域名私钥" aria-label="Permalink to &quot;域名私钥[^1]&quot;">​</a></h1><p>一段时间以前，Minecraft 经常会出现登录相关的问题。2010 至 2013 年间，这些漏洞曾五次被披露，也导致了成千上万的服务器遭到入侵。</p><p>加入 WorldGuard 插件中的域名私钥功能就是针对该类问题的。在玩家进入时，一段私密信息会被发送给服务器。即便是能够破解 Minecraft 登录系统的攻击者并以管理员身份登入游戏，插件也能以此鉴别身份冒用者，因为冒用者加入时缺少了这一段验证信息。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>专用于修复身份冒用漏洞的插件现在已经很少见了。</p></div><h2 id="运作原理" tabindex="-1">运作原理 <a class="header-anchor" href="#运作原理" aria-label="Permalink to &quot;运作原理&quot;">​</a></h2><p>当玩家通过诸如 <code>play.example.com</code> 的域名连接时，Minecraft 就会尝试告诉服务器，玩家通过这个地址加入了游戏。而管理员可以通过诸如 <code>secretmod.play.example.com</code> 特殊的隐藏域名进入，服务器即可通过该域名来检查此次登录是否存在身份冒用。</p><p>域名私钥功能允许你配置指定玩家能够登录的域名。如果列表上的玩家通过一个不正确的域名进入了服务器，该玩家就会立即被请出。</p><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><p>该模块的部署通过全局配置完成：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">host-keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    your_username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bagels.play.example.com</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    moderator1_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">manoverboard.play.example.com</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>域名私钥支持通过 UUID 限制，且我们推荐通过 UUID 限制玩家所能登入的域名，这样就可以允许他们修改自己的用户名。</p></div><h2 id="dns-设置" tabindex="-1">DNS 设置 <a class="header-anchor" href="#dns-设置" aria-label="Permalink to &quot;DNS 设置&quot;">​</a></h2><p>若要让此项工作，你需要创建一个 <code>bagels.play.example.com</code> 和 <code>manoverboard.play.example.com</code> 节点连接至你的服务器。你<strong>不应该</strong>为这些域名添加你使用的指定 srv 记录，这可以让攻击者很容易地找出你的秘密域名。</p><p>另外，我们更建议你设置“随机地址”。一个随机地址的示例可能是 <code>*.play.example.com</code>，这意味着<em>任意</em>前缀都可以让其正常生效（例如 <code>aa.play.example.com</code>、<code>ab.play.example.com</code>、<code>ac.play.example.com</code>等。）</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果你没有域名或不能设置随机域名，那么你可可以试试 <a href="https://sslip.io/" target="_blank" rel="noreferrer">sslip.io</a> 提供的转发服务。</p></div><h2 id="其他方法" tabindex="-1">其他方法 <a class="header-anchor" href="#其他方法" aria-label="Permalink to &quot;其他方法&quot;">​</a></h2><p>如果不想使用域名私钥，你可以使用其他插件提供的验证方式，至少 WorldGuard 本身没有除此之外的登录验证方式了。</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>目前大部分服务器均使用 Authme 等登录插件，阅读该章节没有很大必要。 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,19)]))}const k=e(i,[["render",l]]);export{m as __pageData,k as default};