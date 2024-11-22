import{_ as a,c as i,a7 as n,o as l}from"./chunks/framework.Bz4u1pnU.js";const d=JSON.parse('{"title":"🌐 初次使用","description":"","frontmatter":{},"headers":[],"relativePath":"FallbackServer/overview.first-startup-guide.md","filePath":"FallbackServer/overview.first-startup-guide.md"}'),e={name:"FallbackServer/overview.first-startup-guide.md"};function p(t,s,h,k,r,o){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="🌐-初次使用" tabindex="-1">🌐 初次使用 <a class="header-anchor" href="#🌐-初次使用" aria-label="Permalink to &quot;🌐 初次使用&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p>配置文件会随更新而发生变化，这些改动都是迎合用户且必要的改动。若你发现差异，可以加入我们的 Discord 聊天群组。</p></div><h2 id="_1-正确选择对应插件版本" tabindex="-1">1) 正确选择对应插件版本 <a class="header-anchor" href="#_1-正确选择对应插件版本" aria-label="Permalink to &quot;1) 正确选择对应插件版本&quot;">​</a></h2><p>首先，关闭群组服； 下载 <a href="https://www.spigotmc.org/resources/86398/" target="_blank" rel="noreferrer">.zip</a> 文件并提取出来，其中内容大概会像这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>FallbackServer.zip</span></span>
<span class="line"><span>L Fallback-Server-Addon-版本号.jar</span></span>
<span class="line"><span>L FallBackServer-版本号.jar</span></span>
<span class="line"><span>L FallBackServerVelocity-版本号.jar</span></span></code></pre></div><p>从中拿出适合你使用的核心的版本（如你正在使用 Velocity，则将 <code>FallBackServerVelocity</code> 放入服务器插件文件夹，若使用 BungeeCord 则将 <code>FallBackServer</code> 放入，依此类推）； 将插件放入文件夹后重启服务器即可。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>该步骤可能会影响到插件是否能够流畅运转，请正确按照上方步骤进行安装操作。</p></div><h2 id="_2-默认模式下的基础安装" tabindex="-1">2) 默认模式下的基础安装 <a class="header-anchor" href="#_2-默认模式下的基础安装" aria-label="Permalink to &quot;2) 默认模式下的基础安装&quot;">​</a></h2><p>启动后，插件会释放配置文件，类型会因使用核心不同而略有差别，你会找到如下的对应文件夹：</p><ul><li>BungeeCord(WaterFall)：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>plugins\\</span></span>
<span class="line"><span>  L FallBackServer\\</span></span>
<span class="line"><span>  L FallBackServer-版本号.jar</span></span></code></pre></div><ul><li>Velocity:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>plugins\\</span></span>
<span class="line"><span>  L fallbackservervelocity\\</span></span>
<span class="line"><span>  L FallBackServerVelocity-版本号.jar</span></span></code></pre></div><p>打开文件夹，使用任意一个文本编辑器，并打开 config.yml。</p><p>搜索 fallback_list，你将会见到一系列预先配置好的大厅列表。</p><p>返回服务器根目录文件夹，现在看起来应该是这样的：</p><ul><li>BungeeCord(WaterFall)：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>logs\\</span></span>
<span class="line"><span>modules\\</span></span>
<span class="line"><span>pluigns\\</span></span>
<span class="line"><span>config.yml</span></span>
<span class="line"><span>locations.yml</span></span>
<span class="line"><span>start.sh</span></span>
<span class="line"><span>waterfall.jar</span></span>
<span class="line"><span>waterfall.yml</span></span></code></pre></div><ul><li>Velocity：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lang\\</span></span>
<span class="line"><span>logs\\</span></span>
<span class="line"><span>plugins\\</span></span>
<span class="line"><span>forwading.secret</span></span>
<span class="line"><span>messages.yml</span></span>
<span class="line"><span>start.sh</span></span>
<span class="line"><span>velocity.jar</span></span>
<span class="line"><span>velocity.toml</span></span></code></pre></div><p>根据你使的核心种类打开对应的 config.yml（<code>BungeeCord</code>）或 velocity.toml（<code>Velocity</code>）。</p><p>复制大厅服的名称，如下文所示：</p><ul><li>BungeeCord(Waterfall)：</li></ul><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">servers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  lobby1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    motd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;1Just another Waterfall - Forced Host&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">localhost:25566</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restricted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  lobby2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    motd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;1Just another Waterfall - Forced Host&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">localhost:25567</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restricted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  testsv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    motd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;1Just another Waterfall - Forced Host&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">localhost:25568</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restricted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div><ul><li>Velocity：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[servers]</span></span>
<span class="line"><span>  testsv = &quot;127.0.0.1:25568&quot;</span></span>
<span class="line"><span>  testsv2 = &quot;127.0.0.1:25569&quot;</span></span>
<span class="line"><span>  lobby2 = &quot;127.0.0.1:25567&quot;</span></span>
<span class="line"><span>  # In what order we should try when a player logs in or is kicked from a server.</span></span>
<span class="line"><span>  try = [&quot;lobby1&quot;]</span></span>
<span class="line"><span>  # Configure your servers here. Each key represents the server&#39;s name, and the value</span></span>
<span class="line"><span>  # represents the IP address of the server to connect to.</span></span>
<span class="line"><span>  lobby1 = &quot;127.0.0.1:25566&quot;</span></span></code></pre></div><p>回到你的文本编辑器并在 fallback_list 下将你的服务器名称加入，需要注意大小写。下文是一个示例：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Add here all you lobbies that will be used</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># for the plugin as fallback and for balancing.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This list will also be used for /hub command (if enabled).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># WARNING: It&#39;s case-sensitive.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fallback_list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lobby1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lobby2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lobby3</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">注意</p><p>插件现在可使用默认方法（在崩服时自动整理玩家），若你想要启用 RECONNECT（重连）模式，请转至步骤 2.5。</p></div><h2 id="_2-5-重连模式-正在制作-请勿阅读本文" tabindex="-1">2.5) 重连模式（正在制作，请勿阅读本文） <a class="header-anchor" href="#_2-5-重连模式-正在制作-请勿阅读本文" aria-label="Permalink to &quot;2.5) 重连模式（正在制作，请勿阅读本文）&quot;">​</a></h2><p>找到核心的 <code>plugins/</code> 文件夹，再找到 <code>FallBackServer</code>（BungeeCord/WaterFall）或 <code>fallbackservervelocity</code><sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> 文件夹。 找到 <code>fallback_mode:</code> 项，将其从 <code>DEFAULT</code> 改为 <code>RECONNECT</code>。 保存并不关闭编辑器，重启服务器但先不要重载插件。 在下载的 .zip 压缩包中找到 <code>FallBackServer-Addon.jar</code> 并将其复制到每个需要自动重连的子服，但是不要将它放在服务器里。</p><p>插件无需你手动配置，它会自动处理大部分内容。</p><p>直到这一步，大部分事情都准备好了，在 FallbackServer 的 confif.yml 中配置的默认值已经适合绝大部分服务器，但你需要在 <code>auto_reconnect</code> 部分下配置 <code>ignored_servers</code> 如下文：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">auto_reconnect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Tries before disconnecting or moving player to lobbies.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  max_tries</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Time before pinging this server during reconnect phase.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Don&#39;t put values under 1, they will NOT work.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ping_delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # This option will trigger normal FallbackServer kick ing procedure.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Sorting players in various lobbies.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  player_sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Delay before actual connecting the player to the server, useful</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # for preventing spigot instance overload.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # In seconds.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  connection_delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # This is the timeout for checking if the server</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # is online or not using a pinging method.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # In milliseconds.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ping_threshold</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # In second, determines the delay before starting</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # the actual reconnection, useful for preventing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # backend replying to my plugin ping request on</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # server stop (like /restart)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  task_delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Ignored reasons for reconnecting.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # If players gets kicked for one of those reasons</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # they will not be reconnected.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ignored_reasons</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ban&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kick&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;afk&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;outdated&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;whitelist&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;connected&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;full&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spam&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;maintenance&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Ignored servers for reconnecting.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # If players gets kicked from one of those servers</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # they will not be reconnected, instead they will be</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # moved to a fallback lobby.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Add event servers, such as minigames, here.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ignored_servers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lobby1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lobby2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lobby3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bw1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bw2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bw3</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>请小心修改本部分配置；否则的话重连功能不会正常工作。</p></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>事实上，这里应该是小写名称。 上文的安装步骤中已经体现了这点。 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,37)]))}const g=a(e,[["render",p]]);export{d as __pageData,g as default};
