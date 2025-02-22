import{_ as a,c as i,o as r,al as o}from"./chunks/framework.CAEutmY3.js";const m=JSON.parse('{"title":"拓展模块","description":"","frontmatter":{},"headers":[],"relativePath":"CommandTimer/extensions.md","filePath":"CommandTimer/extensions.md"}'),t={name:"CommandTimer/extensions.md"};function n(s,e,l,d,c,h){return r(),i("div",null,e[0]||(e[0]=[o('<h1 id="拓展模块" tabindex="-1">拓展模块 <a class="header-anchor" href="#拓展模块" aria-label="Permalink to &quot;拓展模块&quot;">​</a></h1><p>拓展模块可以给插件添加额外的功能。每个拓展模块都是 jar 文件的形式，插件可以用它们拓展自己的功能。</p><h2 id="安装拓展模块" tabindex="-1">安装拓展模块 <a class="header-anchor" href="#安装拓展模块" aria-label="Permalink to &quot;安装拓展模块&quot;">​</a></h2><p>拓展模块不是插件。它们需要放在 <code>commandtimer/extensions</code> 文件夹下。</p><p>在放入这个文件夹以后，你就可以在不同的菜单界面中看见正在运行的拓展（例如，如果你安装了条件拓展模块，那么你就可以在条件设置界面中找到由拓展模块添加的内容）。</p><h2 id="可用拓展模块" tabindex="-1">可用拓展模块 <a class="header-anchor" href="#可用拓展模块" aria-label="Permalink to &quot;可用拓展模块&quot;">​</a></h2><p>这里是可供下载安装的完整拓展模块列表。官方拓展模块是由本插件的开发团队制作的，而社区拓展模块如其名，就是由社区制作并发布的拓展模块。</p><h3 id="官方拓展模块" tabindex="-1">官方拓展模块 <a class="header-anchor" href="#官方拓展模块" aria-label="Permalink to &quot;官方拓展模块&quot;">​</a></h3><ul><li><a href="https://www.spigotmc.org/resources/time-conditions-commandtimer-extension.105591/" target="_blank" rel="noreferrer">时间拓展</a></li><li><a href="https://www.spigotmc.org/resources/player-conditions-commandtimer-extension.97186/" target="_blank" rel="noreferrer">玩家拓展</a></li><li><a href="https://www.spigotmc.org/resources/server-conditions-commandtimer-extension.97188/" target="_blank" rel="noreferrer">服务器拓展</a></li><li><a href="https://www.spigotmc.org/resources/griefdefender-conditions-commandtimer-extension.106330/" target="_blank" rel="noreferrer">GriefDefender 拓展</a></li><li><a href="https://www.spigotmc.org/resources/worldguard-conditions-commandtimer-extension.112403/" target="_blank" rel="noreferrer">WorldGuard 拓展</a></li><li><a href="https://www.spigotmc.org/resources/vault-conditions-commandtimer-extension.112471/" target="_blank" rel="noreferrer">Vault 拓展</a></li></ul><h3 id="社区拓展模块" tabindex="-1">社区拓展模块 <a class="header-anchor" href="#社区拓展模块" aria-label="Permalink to &quot;社区拓展模块&quot;">​</a></h3><p>如果你制作了拓展模块并想发布在这里，请在 <a href="https://github.com/titivermeesch/CommandTimer" target="_blank" rel="noreferrer">Github</a> 上发出请求。</p><ul><li><a href="https://github.com/TreemanKing/CommandTimer-PAPIConditions" target="_blank" rel="noreferrer">PlaceholderAPI Extension</a></li></ul><h2 id="制作拓展模块" tabindex="-1">制作拓展模块 <a class="header-anchor" href="#制作拓展模块" aria-label="Permalink to &quot;制作拓展模块&quot;">​</a></h2><p>制作拓展模块相对简单，跟随本章节教程即可。</p><ol><li>创建一个新的 Java 项目。最好能使用诸如 Maven 或 Gradle 这样的依赖管理器。</li><li>将 CommandTimer 设为项目的依赖。见开发者文档来获取更多细节。</li><li>创建一个类，这个类会是你的拓展模块的切入点。这个类<strong>需要</strong>继承 <code>ConditionExtension</code>（位于 <code>me.playbosswar.com.api.ConditionExtension</code>）</li><li>在主类建立完毕之后，你就可以着手添加更多内容了。我推荐先编译你的 Jar 文件并检查它是否会在游戏菜单内出现。</li></ol><h3 id="添加拓展条件" tabindex="-1">添加拓展条件 <a class="header-anchor" href="#添加拓展条件" aria-label="Permalink to &quot;添加拓展条件&quot;">​</a></h3><p>拓展的一种可能就是给条件模块添加新的条件。</p><p>条件可通过继承了 <code>ConditionRule</code>（位于 <code>me.playbossbar.com.api.ConditionRule</code>）的类表示。你也需要向你的项目中添加 <a href="https://github.com/j-easy/easy-rules" target="_blank" rel="noreferrer">Easy Rules</a> 包。但你不需要手动 shade，因为本插件已为你自动预打包。本插件使用的版本为 <code>4.1.0</code> 所以理想情况下你的拓展使用的版本应当相同。</p><p>条件最重要的部分是 <code>ConditionRule#evaluate(Facts facts)</code> 方法。这个方法会在每次插件的执行循环（约每秒/次）触发，来检查是否满足给定的条件。</p><p>事实上，只有 <code>player</code> 对象默认可用。<strong>以特定身份如 <code>CONSOLE</code>（控制台）执行时将不可用。</strong></p><p>若要获取正在用于检查条件的玩家，你可以这样做：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Player p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> facts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;player&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>这里另一个重要的方法是 <code>ConditionRule#getNeededValues()</code>。该方法会返回一个 <code>NeededValue</code> 对象，表示了条件所需的额外参数。你可以将它当做玩家所需提供额外参数的设置。<br> 这里是支持类型的列表：</p><ul><li>Double</li><li>Intenger</li><li>String</li><li>ConditionCompare</li></ul><p>这些类型中除 <code>ConditionCompare</code> 外均为 Java 自带的数据类型，<code>ConditionCompare</code> 会在两个值比较时使用。可以为 EQUAL、LESS_THEN、BIGGER_OR_EQUAL_THEN 等。类本身可以有不同的选择。可以在<a href="https://github.com/titivermeesch/CommandTimer_PlayerConditions/blob/master/src/main/java/me/playbosswar/cmtplayerconditions/conditions/PlayerTimeInWorldCondition.java" target="_blank" rel="noreferrer">这里</a>找到相关示例。</p>',25)]))}const u=a(t,[["render",n]]);export{m as __pageData,u as default};
