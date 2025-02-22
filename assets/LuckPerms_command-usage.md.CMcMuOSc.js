import{_ as l,c as t,o,al as d}from"./chunks/framework.CAEutmY3.js";const n=JSON.parse('{"title":"命令用法","description":"","frontmatter":{},"headers":[],"relativePath":"LuckPerms/command-usage.md","filePath":"LuckPerms/command-usage.md"}'),c={name:"LuckPerms/command-usage.md"};function i(r,e,a,p,g,s){return o(),t("div",null,e[0]||(e[0]=[d('<h1 id="命令用法" tabindex="-1">命令用法 <a class="header-anchor" href="#命令用法" aria-label="Permalink to &quot;命令用法&quot;">​</a></h1><p>命令用法会在玩家输入的命令包含无效参数时在控制台/聊天栏显示。<strong>直接输入 /lp</strong> 会显示当前玩家有权限执行的所有命令。</p><p>若输入命令只返回了版本消息，则你没有权限使用本插件的任何命令。你需要在控制台中先<a href="./getting-started.html#获取编辑权限的完全权限">给予自己 LuckPerms 的所有命令权限</a>。</p><h2 id="别名" tabindex="-1">别名 <a class="header-anchor" href="#别名" aria-label="Permalink to &quot;别名&quot;">​</a></h2><p>每个平台的别称已在下文列出。每个命令的工作方式都相同，所以你可以按需使用。</p><table tabindex="0"><thead><tr><th>Bukkit/Sponge/Fabric/Forge/Nukkit</th><th>BungeeCord</th><th>Velociy</th></tr></thead><tbody><tr><td><code>/lp</code></td><td><code>/lpb</code></td><td><code>/lpv</code></td></tr><tr><td><code>/luckperms</code></td><td><code>/luckpermsbungee</code></td><td><code>/luckpermsvelocity</code></td></tr><tr><td><code>/permissions</code><em>（已弃用）</em></td><td></td><td></td></tr><tr><td><code>/perms</code><em>（已弃用）</em></td><td></td><td></td></tr><tr><td><code>/perm</code><em>（已弃用）</em></td><td></td><td></td></tr></tbody></table><p><strong><code>重要提示：</code></strong> 命令别称在 BungeeCord 和 Velocity 上是有差别的。这可以区分你在哪个平台执行命令。如果别称也相同，你就没有可能在后端服务器上操作 LuckPerms，因为命令总是会被群组服核心处理！</p><p>若你正在使用 Bukkit/Spigot，默认情况下所有 OP 都可以使用 LuckPerms 的所有命令。你可以在配置文本中修改这个行为。</p><h2 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-label="Permalink to &quot;概览&quot;">​</a></h2><p><strong>参数值：</strong></p><ul><li><code>&lt;必须&gt;</code> - 在执行对应命令时，你<em>必须</em>填入部分内容所代表的参数</li><li><code>[可选]</code> - 在执行对应命令时无需填入对应参数，若留空则插件会使用默认值（缺省值）</li></ul><p>若你想要在参数中使用空格，你必须将参数用引号（<code>&quot; &quot;</code>）包裹起来。</p><p>下文使用的别称（<code>/lp</code>）可以被替换为上述表格中的任意一种（标注为“弃用”的除外）。</p><h3 id="通用命令" tabindex="-1">通用命令 <a class="header-anchor" href="#通用命令" aria-label="Permalink to &quot;通用命令&quot;">​</a></h3><p>操作 LuckPerms 功能会用到的命令。</p><ul><li>/lp</li><li>/lp <code>sync</code></li><li>/lp <code>info</code></li><li>/lp <code>editor</code></li><li>/lp <code>verbose</code> &lt;on | record | off | upload&gt; [filter]</li><li>/lp <code>tree</code> [范围] [玩家]</li><li>/lp <code>search</code> [筛选条件] &lt;权限&gt;</li><li>/lp <code>networksync</code></li><li>/lp <code>import</code> &lt;file | code --upload&gt; [--replace]</li><li>/lp <code>export</code> &lt;file&gt; [--upload]</li><li>/lp <code>reloadconfig</code></li><li>/lp <code>bulkupdate</code></li><li>/lp <code>translations</code></li><li>/lp <code>creategroup</code> &lt;组名&gt; [权重] [显示名称]</li><li>/lp <code>deletegroup</code> &lt;组名&gt;</li><li>/lp <code>listgroups</code></li><li>/lp <code>createtrack</code> &lt;路线名&gt;</li><li>/lp <code>deletetrack</code> &lt;路线名&gt;</li><li>/lp <code>listtracks</code></li></ul><h3 id="玩家命令" tabindex="-1">玩家命令 <a class="header-anchor" href="#玩家命令" aria-label="Permalink to &quot;玩家命令&quot;">​</a></h3><p>用于浏览或修改指定玩家数据的命令。</p><p>这些命令一般以 <code>/lp user &lt;玩家&gt; ...</code> 开头 —— 在这里，<code>&lt;玩家&gt;</code> 可以是查询/修改的玩家名称或UUID。</p><ul><li>/lp user &lt;玩家&gt; <code>info</code></li><li>/lp user &lt;玩家&gt; <code>permission</code></li><li>/lp user &lt;玩家&gt; <code>parent</code></li><li>/lp user &lt;玩家&gt; <code>meta</code></li><li>/lp user &lt;玩家&gt; <code>editor</code></li><li>/lp user &lt;玩家&gt; <code>promote</code> &lt;路线&gt; [上下文...]</li><li>/lp user &lt;玩家&gt; <code>demote</code> &lt;路线&gt; [上下文...]</li><li>/lp user &lt;玩家&gt; <code>showtracks</code></li><li>/lp user &lt;玩家&gt; <code>clear</code> [上下文...]</li><li>/lp user &lt;玩家&gt; <code>clone</code> &lt;玩家&gt;</li></ul><h3 id="权限组命令" tabindex="-1">权限组命令 <a class="header-anchor" href="#权限组命令" aria-label="Permalink to &quot;权限组命令&quot;">​</a></h3><p>用于浏览或修改指定权限组的命令。</p><p>这些命令一般以 <code>/lp user &lt;组名&gt; ...</code> 开头 —— 在这里，<code>&lt;组名&gt;</code> 可以是查询/修改的权限组名称。</p><ul><li>/lp group &lt;组名&gt; <code>info</code></li><li>/lp group &lt;组名&gt; <code>permission</code></li><li>/lp group &lt;组名&gt; <code>parent</code></li><li>/lp group &lt;组名&gt; <code>meta</code></li><li>/lp group &lt;组名&gt; <code>editor</code></li><li>/lp group &lt;组名&gt; <code>listmembers</code> [页码]</li><li>/lp group &lt;组名&gt; <code>setweight</code> &lt;权重&gt;</li><li>/lp group &lt;组名&gt; <code>setdisplayname</code> &lt;名称&gt;</li><li>/lp group &lt;组名&gt; <code>showtracks</code></li><li>/lp group &lt;组名&gt; <code>clear</code> [上下文...]</li><li>/lp group &lt;组名&gt; <code>rename</code> &lt;新名称&gt;</li><li>/lp group &lt;组名&gt; <code>clone</code> &lt;复制组名称&gt;</li></ul><h3 id="权限组命令-1" tabindex="-1">权限组命令 <a class="header-anchor" href="#权限组命令-1" aria-label="Permalink to &quot;权限组命令&quot;">​</a></h3><p>用于浏览或修改指定玩家或权限组的权限数据命令。</p><p>一般以 <code>/lp user &lt;玩家&gt; permission ...</code> 或 <code>/lp group &lt;组名&gt; permission ...</code> 开头。</p><ul><li><code>info</code></li><li><code>set</code> &lt;权限&gt; &lt;true/false&gt; [上下文...]</li><li><code>unset</code> &lt;权限&gt; [上下文...]</li><li><code>settemp</code> &lt;权限&gt; &lt;true/false&gt; &lt;时间&gt; [施加模式] [上下文...]</li><li><code>unsettemp</code> &lt;权限&gt; [时间] [上下文...]</li><li><code>check</code> &lt;权限&gt;</li><li><code>clear</code> [上下文...]</li></ul><h3 id="继承命令" tabindex="-1">继承命令 <a class="header-anchor" href="#继承命令" aria-label="Permalink to &quot;继承命令&quot;">​</a></h3><p>用于浏览或修改玩家或权限组的继承属性（父子关系）的命令。</p><p>一般以 <code>/lp user &lt;user&gt; parent ...</code> 或 <code>/lp group &lt;组名&gt; parent ...</code> 开头。</p><ul><li><code>info</code></li><li><code>set</code> &lt;组名&gt; [上下文...]</li><li><code>add</code> &lt;组名&gt; [上下文...]</li><li><code>remove</code> &lt;组名&gt; [上下文...]</li><li><code>settrack</code> &lt;路线名&gt; &lt;组名&gt; [上下文...]</li><li><code>addtemp</code> &lt;组名&gt; &lt;时间&gt; [施加模式] [上下文...]</li><li><code>removetemp</code> &lt;组名&gt; [时间] [上下文...]</li><li><code>clear</code> [上下文...]</li><li><code>cleartrack</code> &lt;路线名&gt; [上下文...]</li><li><code>switchprimarygroup</code> &lt;组名&gt;</li></ul><h3 id="元数据命令" tabindex="-1">元数据命令 <a class="header-anchor" href="#元数据命令" aria-label="Permalink to &quot;元数据命令&quot;">​</a></h3><p>用于修改或浏览玩家或权限组元数据的命令。</p><ul><li><code>info</code></li><li><code>set</code> &lt;键&gt; &lt;值&gt; [上下文...]</li><li><code>unset</code> &lt;键&gt; [上下文...]</li><li><code>settemp</code> &lt;键&gt; &lt;值&gt; &lt;时间&gt; [施加模式] [上下文...]</li><li><code>unsettemp</code> &lt;键&gt; [上下文...]</li><li><code>addprefix</code> &lt;权重&gt; &lt;前缀&gt; [上下文...]</li><li><code>addsuffix</code> &lt;权重&gt; &lt;后缀&gt; [上下文...]</li><li><code>setprefix</code> [权重] &lt;前缀&gt; [上下文...]</li><li><code>setsuffix</code> [权重] &lt;后缀&gt; [上下文...]</li><li><code>removeprefix</code> &lt;权重&gt; [前缀] [上下文...]</li><li><code>removesuffix</code> &lt;权重&gt; [后缀] [上下文...]</li><li><code>addtempprefix</code> &lt;权重&gt; &lt;前缀&gt; &lt;时间&gt; [施加模式] [上下文...]</li><li><code>addtempsuffix</code> &lt;权重&gt; &lt;后缀&gt; &lt;时间&gt; [施加模式] [上下文...]</li><li><code>settempprefix</code> [权重] &lt;前缀&gt; &lt;时间&gt; [施加模式] [上下文...]</li><li><code>settempsuffix</code> [权重] &lt;后缀&gt; &lt;时间&gt; [施加模式] [上下文...]</li><li><code>removetempprefix</code> &lt;权重&gt; [前缀] [上下文...]</li><li><code>removetempsuffix</code> &lt;权重&gt; [后缀] [上下文...]</li><li><code>clear</code> [上下文...]</li></ul><h3 id="路线命令" tabindex="-1">路线命令 <a class="header-anchor" href="#路线命令" aria-label="Permalink to &quot;路线命令&quot;">​</a></h3><p>用于浏览或修改指定路线的命令。</p><p>一般以 <code>/lp track &lt;路线&gt; ...</code> 开头 —— <code>&lt;路线&gt;</code> 表示被查询/修改的的路线名称。</p><ul><li>/lp track &lt;路线&gt; <code>info</code></li><li>/lp track &lt;路线&gt; <code>editor</code></li><li>/lp track &lt;路线&gt; <code>append</code> &lt;组名称&gt;</li><li>/lp track &lt;路线&gt; <code>insert</code> &lt;组名称&gt; &lt;位置&gt;</li><li>/lp track &lt;路线&gt; <code>remove</code> &lt;组名称&gt;</li><li>/lp track &lt;路线&gt; <code>clear</code></li><li>/lp track &lt;路线&gt; <code>rename</code> &lt;新名称&gt;</li><li>/lp track &lt;路线&gt; <code>clone</code> &lt;复制组名称&gt;</li></ul><h3 id="日志命令" tabindex="-1">日志命令 <a class="header-anchor" href="#日志命令" aria-label="Permalink to &quot;日志命令&quot;">​</a></h3><p>用于查询活跃日志的命令。</p><ul><li>/lp log <code>recent</code> [玩家] [页码]</li><li>/lp log <code>search</code> &lt;关键词&gt; [页码]</li><li>/lp log <code>notify</code> [on|off]</li><li>/lp log <code>userhistory</code> &lt;玩家&gt; [页码]</li><li>/lp log <code>grouphistory</code> &lt;组名&gt; [页码]</li><li>/lp log <code>trackhistory</code> &lt;路线名&gt; [页码]</li></ul>',42)]))}const m=l(c,[["render",i]]);export{n as __pageData,m as default};
