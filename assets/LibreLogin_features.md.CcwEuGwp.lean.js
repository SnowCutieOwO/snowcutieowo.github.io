import{_ as e,c as o,a7 as t,o as r}from"./chunks/framework.Bz4u1pnU.js";const u=JSON.parse('{"title":"插件功能","description":"","frontmatter":{},"headers":[],"relativePath":"LibreLogin/features.md","filePath":"LibreLogin/features.md"}'),i={name:"LibreLogin/features.md"};function l(n,a,h,d,s,c){return r(),o("div",null,a[0]||(a[0]=[t(`<h1 id="插件功能" tabindex="-1">插件功能 <a class="header-anchor" href="#插件功能" aria-label="Permalink to &quot;插件功能&quot;">​</a></h1><h2 id="名称验证" tabindex="-1">名称验证 <a class="header-anchor" href="#名称验证" aria-label="Permalink to &quot;名称验证&quot;">​</a></h2><p>LibreLogin 确保玩家能以有效用户名进入服务器，同时使用了大小写机制来防止玩家重名。</p><p>当前，有效玩家名需要满足如下条件：</p><ul><li>短于 17 个字符</li><li>能够匹配正则表达式 <code>[a-zA-Z0-9_]*</code>（名称中只能包含英文大小写字母、数字及下划线）</li><li>仅存在单个以相同英文字母组合的名称（不会出现数据库中存在名称相同但大小写不同玩家的情况）</li></ul><h2 id="自动登录" tabindex="-1">自动登录 <a class="header-anchor" href="#自动登录" aria-label="Permalink to &quot;自动登录&quot;">​</a></h2><p>LibreLogin 支持正版玩家免密登录。</p><h3 id="启用功能" tabindex="-1">启用功能 <a class="header-anchor" href="#启用功能" aria-label="Permalink to &quot;启用功能&quot;">​</a></h3><p>玩家可在游戏内输入 <code>/premium &lt;登录密码&gt;</code> 来开启免密登录</p><p>输入命令 <code>/cracked</code> 可禁用该功能。</p><p><strong>需要注意的是，启用免密登录后玩家将不再能用离线客户端进入服务器，若玩家不小心启用了该功能，请联系管理员将其关闭。</strong></p><h2 id="自动与手动名称迁移" tabindex="-1">自动与手动名称迁移 <a class="header-anchor" href="#自动与手动名称迁移" aria-label="Permalink to &quot;自动与手动名称迁移&quot;">​</a></h2><p><em>将数据在不同名称玩家间迁移从未如此简单</em></p><h3 id="自动模式" tabindex="-1">自动模式 <a class="header-anchor" href="#自动模式" aria-label="Permalink to &quot;自动模式&quot;">​</a></h3><p>LibreLogin 会检查启用了自动登录功能的玩家，并将对应名称上的数据（物品、其他插件数据）迁移至当前名称的玩家数据中。</p><h3 id="手动模式" tabindex="-1">手动模式 <a class="header-anchor" href="#手动模式" aria-label="Permalink to &quot;手动模式&quot;">​</a></h3><p>你可以使用命令 <code>/librelogin user migerate &lt;旧名称&gt; &lt;新名称&gt;</code> 命令来迁移玩家数据，若玩家启用了自动登录，则该命令会禁用此功能。</p><h2 id="二步验证" tabindex="-1">二步验证 <a class="header-anchor" href="#二步验证" aria-label="Permalink to &quot;二步验证&quot;">​</a></h2><p>LibreLogin 是市面上唯一通过 TOTP（谷歌验证、Authy 等）提供了二步验证的群组登录插件。若你想要保证账号安全，这个功能非常有用。</p><h3 id="搭建" tabindex="-1">搭建 <a class="header-anchor" href="#搭建" aria-label="Permalink to &quot;搭建&quot;">​</a></h3><ul><li>在 BungeeCord 或 Velocity 服务端安装 Procotolize 插件。<a href="https://www.spigotmc.org/resources/protocolize-protocollib-for-bungeecord-waterfall-velocity.63778/" target="_blank" rel="noreferrer">点此直达下载页</a>。</li><li>检查配置中的 TOTP 部分，确保启用后将你的服务器名称填入此处。</li><li>请确保玩家能在登录大厅中向下看，否则他们将无法看见手中所持的地图二维码。</li></ul><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>正常登录后输入 <code>/2fa</code>。你将会被送回大厅并给予一张二维码地图。在登录验证软件（Authy、谷歌验证等）中识别该二维码后重进服务器。至此，在登录后你还需通过命令 <code>/login &lt;密码&gt; &lt;验证码&gt;</code> 输入验证码。</p><h2 id="floodgate" tabindex="-1">Floodgate <a class="header-anchor" href="#floodgate" aria-label="Permalink to &quot;Floodgate&quot;">​</a></h2><p>LibreLogin 支持通过 Floodgate 让基岩版玩家加入游戏。</p><h3 id="搭建-1" tabindex="-1">搭建 <a class="header-anchor" href="#搭建-1" aria-label="Permalink to &quot;搭建&quot;">​</a></h3><p>你只需将 Floodgate 插件放入群组服核心。LibreLogin 会自动检测并与 Floodgate 实例交互。</p><h3 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h3><p>通过 Floodgate 进入服务器的玩家不会触发登录流程，处理方式与免密登录相似。一般情况下基岩版玩家不能执行大多数命令。</p><h2 id="会话" tabindex="-1">会话 <a class="header-anchor" href="#会话" aria-label="Permalink to &quot;会话&quot;">​</a></h2><p>LibreLogin 提供了会话系统。</p><h3 id="这是什么" tabindex="-1">这是什么？ <a class="header-anchor" href="#这是什么" aria-label="Permalink to &quot;这是什么？&quot;">​</a></h3><p>玩家连接至服务器后会创建一次会话。若他们从同一个 IP 在指定时间间隔内重新回到服务器，LibreLogin 则会跳过输入密码登录的步骤。</p><h3 id="配置会话系统" tabindex="-1">配置会话系统 <a class="header-anchor" href="#配置会话系统" aria-label="Permalink to &quot;配置会话系统&quot;">​</a></h3><p>你可以在该部分配置中找到会话持续时间的配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 决定了玩家会话的过期时间，单位为秒。默认值为一周（604800 秒）。设置为不大于 0 的值表示禁用该功能。</span></span>
<span class="line"><span>session-timeout=604800</span></span></code></pre></div>`,36)]))}const b=e(i,[["render",l]]);export{u as __pageData,b as default};
