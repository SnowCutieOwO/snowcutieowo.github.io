import{_ as t,c as s,o,al as a}from"./chunks/framework.CAEutmY3.js";const r="/assets/context-1.BPvnGegW.gif",k=JSON.parse('{"title":"上下文","description":"","frontmatter":{},"headers":[],"relativePath":"LuckPerms/features.context.md","filePath":"LuckPerms/features.context.md"}'),i={name:"LuckPerms/features.context.md"};function n(d,e,l,c,p,h){return o(),s("div",null,e[0]||(e[0]=[a('<h1 id="上下文" tabindex="-1">上下文 <a class="header-anchor" href="#上下文" aria-label="Permalink to &quot;上下文&quot;">​</a></h1><p>上下文<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>是 LuckPerms 运作的一个基本方式。它们可能是整个插件里最重要的概念，在正确使用时会相当有用。</p><hr><p><strong>上下文</strong>，基本来说就是<strong>某条权限生效的要求</strong>。<br> 一个简单的“上下文”包含了一个 <code>key</code>（键）和 <code>value</code>（值），以 <code>key=value</code> 的形式连缀。（希望）这会用一个例子表述得更加清楚。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>如上所述，上下文是某条权限生效的要求。在这个例子中，假设我要分配一个权限，但我<strong>只想要这个权限在“world_nether”世界中生效</strong>。若要实现这个功能，我会在分配权限的时候指定上下文，以此限制权限生效的条件。</p><p>在这个示例中，<strong>键</strong>的关键词是 <code>&quot;world&quot;</code>，<strong>值</strong>则是 <code>&quot;world_nether&quot;</code>。在 LuckPerms 中表示为 <code>world=world_nether</code>。</p><p>若要实现这个限制，我会输入这样一条命令：<code>/lp user Luck permission set test.permission world=world_nether</code> —— 在指令末尾为权限指定上下文。</p><h2 id="设置上下文" tabindex="-1">设置上下文 <a class="header-anchor" href="#设置上下文" aria-label="Permalink to &quot;设置上下文&quot;">​</a></h2><p>这里有两种方式对权限设置上下文：命令，或网页编辑器。</p><ul><li>使用命令时，你只需像上述示例的命令那样加入上下文，在命令的末尾，你可以加入 <code>&lt;键&gt;=&lt;值&gt;</code>，如 <code>world=nether</code>、<code>server=lobby</code>，或其他允许使用的键与值。最终的命令会看起来像这样：<br><code>lp user Luck permission set minecraft.command.gamemode true server=lobby world=nether</code>。</li><li>在使用网络编辑器时，你可以点击 <code>Add Context</code>（添加上下文/增设情境），并填入键与值。与命令相同，<code>key</code>（键）为上下文的类型，而 <code>value</code> 则为它的值。示例如下：</li></ul><p><img src="'+r+`" alt="img"></p><p>上下文可以被组合使用，称作“上下文组” —— 即一组上下文的键值对。</p><p>上下文组可以通过如下两种方式设置：</p><ul><li>LuckPerms 一般会自动计算被判定为<strong>玩家</strong>的“当前上下文组” —— 换句话说，则是玩家当前满足的上下文。若玩家正处于 <code>world_nether</code> 世界中，则他们当前的上下文组会包含 <code>world=world_nether</code>。</li><li><strong>每个权限、继承组/权限组、前后缀/元数据设置</strong>也都带有自己的上下文 —— 表示玩家需要满足对应的上下文之后才可让这些权限/继承组/元数据生效。</li></ul><p>最重要的是，玩家只需满足上下文中<strong>同类型的任意一个</strong>要求的值就可让权限/继承组/元数据生效。若你设置了三个世界上下文（world、world_nether 和 world_the_end）以及一个服务器上下文（survival），那么玩家可以在该服务器的这三个世界中获得这个权限。若你设置了三个服务器上下文，那么处于任意一个服务器的玩家都可获得该权限。这会在你想要让权限在一部分地方生效，另一部分地方不生效时非常有效，这意味着你无需重复设置节点并单独设置上下文。</p><h2 id="由-luckperms-提供的上下文" tabindex="-1">由 LuckPerms 提供的上下文 <a class="header-anchor" href="#由-luckperms-提供的上下文" aria-label="Permalink to &quot;由 LuckPerms 提供的上下文&quot;">​</a></h2><p>上下文系统设计之初便以自由拓展为目的 —— 这个系统不应（也不该！）只提供几种固定类型的上下文。</p><p>如标题所说，LuckPerms 默认提供了五种上下文。其他插件可以通过 API 内的 <code>ContextCalculator</code> 提供自行注册的上下文。</p><table tabindex="0"><thead><tr><th>上下文键名</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td><code>server</code></td><td>玩家所处服务器。值默认由 LuckPerms 配置文件顶部的服务器设置提供。</td><td><code>server=survival</code></td></tr><tr><td><code>world</code></td><td>玩家当前世界 —— 这个值是从服务器传回的。在 LuckPerms 运行在 BungeeCord/Velocity 群组服时，世界上下文的值只会匹配玩家当前所在服务器的世界名称。</td><td><code>world=world_nether</code></td></tr><tr><td><code>gamemode</code></td><td>玩家当前游戏模式。</td><td><code>gamemode=creative</code></td></tr><tr><td><code>dimension-type</code></td><td>玩家所处维度类型。</td><td><code>dimension-type=the_nether</code></td></tr><tr><td><code>proxy</code></td><td>这条上下文仅在安装了 RedisBungee 的 BungeeCord 群组上时有效。表示当前连接至的 BungeeCord 群组。</td><td><code>proxy=redisbungee1</code></td></tr></tbody></table><h2 id="自定义上下文" tabindex="-1">自定义上下文 <a class="header-anchor" href="#自定义上下文" aria-label="Permalink to &quot;自定义上下文&quot;">​</a></h2><p>除了 LuckPerms 提供的上下文以外，你还可以自行设置额外的上下文。</p><p>上下文可以<strong>静态</strong>或<strong>动态</strong>提供。</p><ul><li><strong>静态上下文</strong>会给予所有玩家 —— 所有玩家获取的值都相同的上下文。（例如，“server”上下文 —— 所有玩家获取的键值对都是同一个）<br> 静态上下文可以通过特殊配置文件或 API 定义。</li><li><strong>动态上下文</strong>会基于某个条件选择性地给予，并需要插件通过 API 进行注册。</li></ul><h2 id="定义静态上下文" tabindex="-1">定义静态上下文 <a class="header-anchor" href="#定义静态上下文" aria-label="Permalink to &quot;定义静态上下文&quot;">​</a></h2><p>静态上下文可以在 <code>/LuckPerms/</code> 文件夹的 <code>contexts.json</code> 玩家中修改（与主配置文件同级）。</p><p>文件包含两个属性，但我们只需要着眼于 <code>static-contexts</code> 部分。</p><p>例如，如果我们想要添加自己的上下文 <code>&quot;server-type&quot;</code>，来表示服务器名称（已经由 LuckPerms 提供）之外的服务器类型，只需这样设置：</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;static-contexts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;server-type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;skyblock&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在添加后，我们就可以在权限/继承组/元数据中使用这条上下文来指定服务器类型。例如 <code>/lp user Luck parent add donor server-type=skyblock</code>。</p><p>你可以在这个文件中加入数量不限的上下文。</p><h2 id="默认上下文" tabindex="-1">默认上下文 <a class="header-anchor" href="#默认上下文" aria-label="Permalink to &quot;默认上下文&quot;">​</a></h2><p>默认上下文允许你指定某些上下文的缺省值 —— 例如 <code>/lp user Luck permission set example.permission</code> 命令中某些上下文的默认值。你可以在 <code>contexts.json</code> 文件中自行设置，这个文件所在目录与主配置文件同级。</p><p>例如，若要在文件中加入默认上下文，找到 static-contexts 部分：</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;default-contexts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;world_nether&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;server&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;survival&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这表示，在添加了默认上下文的服务器上，任何可以带有上下文执行的 <code>/lp</code> 命令都会带上 <code>world=world_nether</code>、<code>server=survival</code> 的默认值，除非你在命令中明确指定了它们。</p><h2 id="额外上下文-extracontexts" tabindex="-1">额外上下文（ExtraContexts） <a class="header-anchor" href="#额外上下文-extracontexts" aria-label="Permalink to &quot;额外上下文（ExtraContexts）&quot;">​</a></h2><p>ExtraContexts 插件加入了原本 LuckPerms 中不存在的额外上下文，例如 WorldGuard 上下文，PlaceholderAPI 上下文，以及更多！</p><p><a href="https://github.com/LuckPerms/ExtraContexts" target="_blank" rel="noreferrer">见此</a>浏览详细信息。</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>“上下文”译文取自 PCD 对该维基的旧版翻译，在 LuckPerms 的本地化语言文件中则译作“情境”，为保持维基迭代一致性，此取前者，下文同。 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,41)]))}const g=t(i,[["render",n]]);export{k as __pageData,g as default};
