import{_ as d,o as e,c as a,a7 as r}from"./chunks/framework.DSL0mkng.js";const b=JSON.parse('{"title":"命令列表","description":"","frontmatter":{},"headers":[],"relativePath":"WorldGuard/commands.md","filePath":"WorldGuard/commands.md"}'),o={name:"WorldGuard/commands.md"};function l(c,t,i,s,h,n){return e(),a("div",null,t[0]||(t[0]=[r('<h1 id="命令列表" tabindex="-1">命令列表 <a class="header-anchor" href="#命令列表" aria-label="Permalink to &quot;命令列表&quot;">​</a></h1><p>WorldGuard 的命令一般有下列几类：</p><ul><li>与游戏相关的命令（<code>/god</code>、<code>/heal</code> 等）；</li><li>与区域管理有关的命令；</li><li>临时的紧急措施；</li><li>排除问题；</li><li>WorldGuard 本身相关的功能（版本信息、重载信息等） 见“权限列表”章节来获取有关的权限节点。部分命令自带别称，会在同一行列出。</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>当一个参数（例如 <code>&lt;玩家名称&gt;</code> 是一个参数）被 <code>方括号&quot;[]&quot;</code> 所包括，表示这个参数可输可不输，另外输入命令的时候不需要带上 <code>尖角括号&quot;&lt;&gt;&quot;</code> 或 <code>方括号&quot;[]&quot;</code>。</p></div><h2 id="游戏相关命令" tabindex="-1">游戏相关命令 <a class="header-anchor" href="#游戏相关命令" aria-label="Permalink to &quot;游戏相关命令&quot;">​</a></h2><table tabindex="0"><thead><tr><th>命令名称</th><th>额外参数</th><th>命令描述</th></tr></thead><tbody><tr><td>/god</td><td>[-s] [&lt;玩家名称&gt;]</td><td>为自己或其他玩家开启无敌模式。<code>-s</code> 表示操作时不发送消息提醒。</td></tr><tr><td>/ungod</td><td>[-s] [&lt;玩家名称&gt;]</td><td>为自己或其他玩家关闭无敌模式。<code>-s</code> 表示操作时不发送消息提醒。</td></tr><tr><td>/heal</td><td>[-s] [&lt;玩家名称&gt;]</td><td>治疗自己或其他玩家。<code>-s</code> 表示操作时不发送消息提醒。</td></tr><tr><td>/slay</td><td>[-s] [&lt;玩家名称&gt;]</td><td>斩杀自己或其他玩家。<code>-s</code> 表示操作时不发送消息提醒。</td></tr><tr><td>/locate</td><td>[&lt;玩家名称&gt;]</td><td>将你的指南针指向其他玩家（如果指定玩家名称的话），若不提供玩家参数则指向主城的位置。</td></tr><tr><td>/stack<br>/;</td><td></td><td>自动堆叠分散的同种物品。</td></tr></tbody></table><h3 id="选择器" tabindex="-1">选择器 <a class="header-anchor" href="#选择器" aria-label="Permalink to &quot;选择器&quot;">​</a></h3><p>命令中用作玩家参数的部分支持<em>选择过滤器</em>，但它们和原版三年前加入的的选择过滤器略有不同。</p><p>玩家参数可以通过下列选择过滤符进行匹配：</p><ul><li>默认情况下，如果填入正常名称，以该名称<em>开头的</em>玩家将会被选中。 （译者注：例如，player_ 填入时，可能会选中 player_、player_155 或 player_666。）</li><li><code>*</code> 匹配所有玩家。</li><li><code>#&lt;世界名称&gt;</code> 来匹配指定世界中的所有玩家。</li><li><code>#near</code> 匹配命令执行者附近的玩家。</li><li><code>@&lt;名称&gt;</code> 来完全匹配某个玩家的名称。 （译者注：与上面不同，@player_ 只会匹配 player_ 这一个玩家。）</li></ul><h2 id="区域相关命令" tabindex="-1">区域相关命令 <a class="header-anchor" href="#区域相关命令" aria-label="Permalink to &quot;区域相关命令&quot;">​</a></h2><table tabindex="0"><thead><tr><th>命令名称</th><th>额外参数</th><th>命令描述</th></tr></thead><tbody><tr><td>/wg flushstates<br>/wg clearstates</td><td>[玩家名称]</td><td>调试命令，用于清除区域标志相关的玩家信息。例如，为了让 <code>entry</code> 标志生效，玩家每次移动踩着的“方块”都会被记录，以用于判断玩家是否处在区域内。该命令在玩家在区域内外因 <code>entry</code> 或 <code>exit</code> 卡住的时候很有用，尤其是在成员权限或权限组变更后造成的卡死。可选的玩家参数可以指定玩家将相关信息清除，如果没有提供玩家参数，那么所有玩家的标志状态都会被重置。</td></tr><tr><td>/rg bypass<br>/rg toggle-bypass</td><td>[on/off]</td><td>切换区域绕过模式，开启时允许无视（除 PVP 标志外的）所有保护。</td></tr></tbody></table><h2 id="紧急命令" tabindex="-1">紧急命令 <a class="header-anchor" href="#紧急命令" aria-label="Permalink to &quot;紧急命令&quot;">​</a></h2><table tabindex="0"><thead><tr><th>命令名称</th><th>额外参数</th><th>命令示例</th></tr></thead><tbody><tr><td>/stopfire</td><td>[&lt;世界名称&gt;]</td><td>立即停止指定世界的火焰传播。</td></tr><tr><td>/allowfire</td><td>[&lt;世界名称&gt;]</td><td>允许指定世界的火焰传播。</td></tr><tr><td>/stoplag<br>/halt-activity<br>/haltactivity</td><td>[-s]</td><td>删除所有实体，并停止接下来一切的物理活动或流体流动。额外地，当一个新区块载入时，其中包含的所有实体都将会被清除。该命令一般用于解决物品或实体过多造成的问题。尽管，在该命令加入后的时间中，驯服的动物和实体丢失的问题已不常出现，因此除非迫不得已，否则不建议使用此命令。<code>-s</code> 参数添加后不会将消息发送至聊天栏。</td></tr><tr><td>/stoplag<br>/halt-activity<br>/haltactivity</td><td>-c [-s]</td><td>关闭“停止卡顿”模式。<code>-s</code> 参数添加后不会将消息发送至聊天栏。</td></tr><tr><td>/stoplag<br>/halt-activity<br>/haltactivity</td><td>-i</td><td>显示“停止卡顿”模式的有关状态。</td></tr></tbody></table><h2 id="问题排查命令" tabindex="-1">问题排查命令 <a class="header-anchor" href="#问题排查命令" aria-label="Permalink to &quot;问题排查命令&quot;">​</a></h2><table tabindex="0"><thead><tr><th>命令名称</th><th>额外参数</th><th>命令示例</th></tr></thead><tbody><tr><td>/wg report</td><td>[-p]</td><td>生成一份报告文件（可在 <code>plugins/WorldGuard/report.txt</code> 下找到该文件）这里会存有一些服务器的信息（安装的插件及其版本，世界的相关设置）以及 WorldGuard 的配置。报告文件不会包含任何敏感数据。使用参数 <code>-p</code> 将数据自动上传至剪贴板网站并返回一个链接，可将该链接发送给其他人。</td></tr><tr><td>/wg profile</td><td>[-p] [-i &lt;毫秒数&gt;] [-t &lt;名称&gt;] [&lt;分钟数&gt;]</td><td>开始计算服务器当前的 CPU 用量，并在指定时长内启用分析器（在不指定时间的情况下默认为五分钟）。检测器功能是基于 WarmRoast 的。<br><br>默认情况下，检测结果只收集在主线程参与“刻”计算的世界，但 <code>-t</code> 参数允许你指定另外一个线程进行分析（大小写敏感）。星号（<code>*</code>）可以用于匹配所有的线程（例如：<code>-t *</code>）。默认情况下，分析器的采样间隔为 20 毫秒，但你可以使用 <code>-i</code> 参数指定一个处于 1 与 100 且单位为毫秒的间隔。间隔越小采样更精确，但性能开销也会增加，反之亦然。<br><br>使用参数 <code>-p</code> 一并提交分析器结果至剪贴板网站，并向你提供相关链接。非常推荐这么做，因为分析器提供的结果会被剪贴板网站格式化以使其便于阅读。</td></tr><tr><td>/wg stopprofile</td><td></td><td>停止正在运行的性能分析器。</td></tr><tr><td>/wg debug testbreak</td><td>[-t] [-s] &lt;玩家名称&gt;</td><td>模拟一次“方块破坏”事件。具体会在下文解释。</td></tr><tr><td>/wg debug testplace</td><td>[-t] [-s] &lt;玩家名称&gt;</td><td>模拟一次“方块放置”事件。具体会在下文解释。</td></tr><tr><td>/wg debug testinteract</td><td>[-t] [-s] &lt;玩家名称&gt;</td><td>模拟一次“交互阻止”事件。具体会在下文解释。</td></tr><tr><td>/wg debug testdamage</td><td>[-t] [-s] &lt;玩家名称&gt;</td><td>模拟一次“实体攻击”事件 （用于测试 PVP 和 PVE）。具体会在下文解释。</td></tr></tbody></table><h2 id="事件模拟" tabindex="-1">事件模拟 <a class="header-anchor" href="#事件模拟" aria-label="Permalink to &quot;事件模拟&quot;">​</a></h2><p>事件模拟命令在一些情况下很有用。例如，玩家出于某些原因无法破坏方块且你无法找出是哪个插件导致的（没有其他的措施情况下）。使用 <code>/wg debug testbreak</code> 命令将会模拟一次方块放置事件并记录任何试图拦截该事件的插件。</p><p>若要使用命令，你必须提供玩家参数。玩家是触发该事件的来源。事件的目标（例如，“被破坏”的方块，或是“被攻击”的实体）。也就是从执行命令的玩家角度所发送的这一事件。但是，如果指定了 <code>-t</code> 参数，则目标来自于来源玩家视角中十字准星所选中的实体或方块。</p><p>在测试命令的输出中可能包含多个插件，一般情况下是第一个插件所引起的。这是因为，如果插件 A 阻止了事件的发生，随后的插件 B 也“阻止”了事件，那么插件 A 的效果将没有作用。WorldGuard 会为你列出最后一个阻止该事件的插件，其中列表中的第一个就是最后阻止该事件的插件。</p><div class="info custom-block"><p class="custom-block-title">示例</p><p>如果你想要查看为什么 PVP 被禁用的话，让另一个（无法进行 PVP 的）玩家看着你，并输入下列命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/wg debug testdamage -t other_player_name</span></span></code></pre></div><p>请注意测试并没有完全完成。这是因为 Bukkit 在进行某些操作时会抛出其他的事件。例如，当装满一个桶的时候，Bukkit 首先会发起一个桶被装满的事件，而这个事件是 WorldGuard 所无法模拟的。直到现在，一些 Minecraft 的特性（例如冒险模式和内置的出生点保护）可能还在发挥作用。</p><p>使用 <code>-s</code> 可以在控制台输入关于堆栈的额外信息。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>虽然测试命令只会对插件发出测试事件，但基于 Minecraft 本身不会允许任何不正确的方块被放置或破坏，不会发生任何除测试目的之外的事件。例如，其他插件可能允许你点击告示牌进行传送并模拟一次传送事件，但这也可能导致其他玩家被传送。</p></div></div><h2 id="其他命令" tabindex="-1">其他命令 <a class="header-anchor" href="#其他命令" aria-label="Permalink to &quot;其他命令&quot;">​</a></h2><table tabindex="0"><thead><tr><th>命令名称</th><th>额外参数</th><th>命令示例</th></tr></thead><tbody><tr><td>/wg version</td><td></td><td>显示 WorldGuard 的当前版本。</td></tr><tr><td>/wg reload</td><td></td><td>重载 WorldGuard 的配置文件，黑名单以及区域数据。</td></tr><tr><td>/wg running<br>/wg queue</td><td></td><td>显示 WorldGuard 正在执行的任务。比如出现在背景中查询玩家 UUID 的任务。</td></tr></tbody></table>',23)]))}const u=d(o,[["render",l]]);export{b as __pageData,u as default};
