import{_ as a,c as o,al as t,o as r}from"./chunks/framework.w6hJZnzA.js";const u=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"ajLeaderboards/faq.md","filePath":"ajLeaderboards/faq.md"}'),l={name:"ajLeaderboards/faq.md"};function d(s,e,p,c,i,h){return r(),o("div",null,e[0]||(e[0]=[t('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><p>这里收集了几个社区常出现的问题及其答案，你可以使用右侧的导航栏快速跳转到你需要的问题。</p><hr><h2 id="没有玩家出现在排行榜上" tabindex="-1">没有玩家出现在排行榜上（<code>---</code>） <a class="header-anchor" href="#没有玩家出现在排行榜上" aria-label="Permalink to &quot;没有玩家出现在排行榜上（`---`）&quot;">​</a></h2><p>这可能是这两个常见问题的结合：</p><p><a href="#管理员没有出现在排行榜上">管理员没有出现在排行榜上</a><br><a href="#为什么排行榜只显示在线玩家">为什么排行榜上只显示在线玩家</a></p><h2 id="管理员没有出现在排行榜上" tabindex="-1">管理员没有出现在排行榜上！ <a class="header-anchor" href="#管理员没有出现在排行榜上" aria-label="Permalink to &quot;管理员没有出现在排行榜上！&quot;">​</a></h2><p>这可能是因为你拥有 <a href="./setup.permissions.html"><code>ajleaderboards.dontupdate.&lt;排行榜&gt;</code></a> 权限。这个权限默认分配至 OP 与拥有 <code>*</code> 权限的玩家。</p><p>若要修复这个，你可以在权限插件中给予管理员负权限，或将其禁用。</p><p>例如，在使用 LuckPerms 的情况下将其设置为负权限，你需要输入这个命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/luckperms user &lt;玩家名称&gt; permission set ajleaderboards.dontupdate.* false</span></span></code></pre></div><p>你可以在配置文件中禁用 <code>enable-dontupdate-permission</code> 设置来取消该权限。</p><h2 id="为什么排行榜只显示在线玩家" tabindex="-1">为什么排行榜只显示在线玩家？ <a class="header-anchor" href="#为什么排行榜只显示在线玩家" aria-label="Permalink to &quot;为什么排行榜只显示在线玩家？&quot;">​</a></h2><p><strong>本插件会显示离线玩家！</strong></p><p>本插件只会在排行榜设置后玩家至少上线一次后显示其数据。这表示设置排行榜后没有进入的玩家不会出现在排行榜上。只有在他们被加入排行榜后，他们的数据才会一直显示在上面（即便离线），除非你手动将其移除。</p><p>你可以使用命令 <code>/ajlb updateplayer &lt;排行榜名称&gt; &lt;玩家名称&gt;</code> 手动添加玩家数据，但不是所有的变量都支持这个操作。如果没有生效，你应该询问对应变量的插件开发者，为其添加离线玩家相关的支持。在此之前你只能等那些玩家（在设置排行榜后）上线至少一次。</p><p>如果 <code>updateplayer</code> 命令能够更新离线玩家，你可以通过命令 <code>/ajlb updatealloffline &lt;排行榜名称&gt;</code> 更新所有加入过服务器的玩家数据。</p><h2 id="我正在尝试显示排行榜-但它显示-排行榜不存在" tabindex="-1">我正在尝试显示排行榜，但它显示 <code>排行榜不存在</code> <a class="header-anchor" href="#我正在尝试显示排行榜-但它显示-排行榜不存在" aria-label="Permalink to &quot;我正在尝试显示排行榜，但它显示 `排行榜不存在`&quot;">​</a></h2><p>请确保你输入了正确的排行榜名称。如果你正在创建的是告示牌，命令中会有自动补全帮你输入，所以请再次检查你的拼写。你也可以输入命令 <code>/ajlb list</code> 确保你要显示的排行榜在列表中。</p><p>另外也请确保你没有在 <code>&lt;排行榜名称&gt;</code> 中加入了 <code>%</code> 符号。例如，你应该填入 <code>statistic_player_kills</code>，而非 <code>%statistic_player_kills%</code>。</p><p>如果你正在使用的变量没有在这些地方显示，请确保你正确执行了<a href="./setup.setup.html">安装教程</a>中的步骤。</p><h2 id="我如何在排行榜上显示玩家的前缀-等级" tabindex="-1">我如何在排行榜上显示玩家的前缀/等级？ <a class="header-anchor" href="#我如何在排行榜上显示玩家的前缀-等级" aria-label="Permalink to &quot;我如何在排行榜上显示玩家的前缀/等级？&quot;">​</a></h2><p>ajLeaderboards 能够在玩家离线时显示他们的前缀。</p><p>请确保你的服务器安装了 <a href="https://www.spigotmc.org/resources/vault.34315/" target="_blank" rel="noreferrer">vault</a>，之后将 <a href="./setup.placeholders.html">本插件的前缀变量</a> 填入名称旁来显示前缀。</p><h2 id="变量在悬浮字上不显示" tabindex="-1">变量在悬浮字上不显示！ <a class="header-anchor" href="#变量在悬浮字上不显示" aria-label="Permalink to &quot;变量在悬浮字上不显示！&quot;">​</a></h2><p>如果你正在使用的是 HolographicDisplays，我推荐你使用 <a href="https://www.spigotmc.org/resources/decent-holograms-1-8-1-19-papi-support-no-dependencies.96927/" target="_blank" rel="noreferrer">DecentHolograms</a>。HolograpicDisplays 做出了一些改变，使得它用起变量来比其他插件更加麻烦。所以我建议别再用这个插件。就像我之前提及过的那样，我推荐 DecentHolograms，但实际上任何支持 PlacheolderAPI 的悬浮字插件都可以正常使用（因此我也不指望 HolographicDisplays 某天会有完整的 PlaceholderAPI 支持）。</p><p>这个 HolographicDisplays 的依赖更改对我毫无意义，因为对 PlaceholderAPI 的支持<em>只需修改一行代码</em>。</p><p>关于如何从 HolographicDisplays 迁移至 DecentHolograms 的教程详见<a href="https://snowcutieowo.github.io/DecentHolograms/#/general.compatibility?id=holographicdisplays" target="_blank" rel="noreferrer">这里</a>。</p><h2 id="这个插件在我的服务器里产生卡顿" tabindex="-1">这个插件在我的服务器里产生卡顿！ <a class="header-anchor" href="#这个插件在我的服务器里产生卡顿" aria-label="Permalink to &quot;这个插件在我的服务器里产生卡顿！&quot;">​</a></h2><p>首先试试看在配置文件中禁用 <code>blocking-fetch</code> 选项（设置为 <code>false</code> 或 <code>auto</code>），之后输入命令 <code>/ajlb reload</code>。</p><p>如果服务器仍在卡顿，尝试生成一份检测报告，并将其通过 Discord 发送给我（邀请链接在插件介绍帖）。</p><h2 id="排行榜所有名次都显示同一个值-但玩家名称不同" tabindex="-1">排行榜所有名次都显示同一个值（但玩家名称不同） <a class="header-anchor" href="#排行榜所有名次都显示同一个值-但玩家名称不同" aria-label="Permalink to &quot;排行榜所有名次都显示同一个值（但玩家名称不同）&quot;">​</a></h2><p>请确保你阅读了<a href="./setup.setup.html#1必需找到使用的变量">安装教程第一步</a>中的重要提示。</p><h2 id="我如何给予奖励" tabindex="-1">我如何给予奖励？ <a class="header-anchor" href="#我如何给予奖励" aria-label="Permalink to &quot;我如何给予奖励？&quot;">​</a></h2><p>目前，内置给予奖励的唯一方式是通过 <a href="./setup.luckperms-contexts.html">LuckPerms 的上下文（Context）</a> 给予排行榜中指定名次的玩家权限/前缀/后缀。</p><h2 id="玩家数据没有更新" tabindex="-1">玩家数据没有更新！ <a class="header-anchor" href="#玩家数据没有更新" aria-label="Permalink to &quot;玩家数据没有更新！&quot;">​</a></h2><p>本插件内置了检查数据更新问题的工具。</p><p>输入命令 <code>/ajlb checkupdate &lt;排行榜名称&gt; &lt;玩家名称&gt;</code>，然后检查返回的内容。</p><p>如果它显示玩家数据应当正常更新，首先请确保命令 <code>/ajlb list &lt;排行榜名称&gt;</code> 中显示的值相同。</p><p>如果玩家在上述命令中的值相同，则变量返回的可能不是数据，你可以通过输入命令 <code>/papi parse &lt;玩家名称&gt; %变量%</code> 验证，<code>&lt;玩家名称&gt;</code> 处填入出现数据更新问题的玩家名称，<code>%变量%</code> 则填入目标变量（在 <code>/ajlb add</code> 命令中输入的变量）。为了让插件能够判断它，变量返回的应当是（不带任何颜色代码的）数字。</p>',40)]))}const b=a(l,[["render",d]]);export{u as __pageData,b as default};
