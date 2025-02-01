import{_ as o,c as r,o as t,al as s}from"./chunks/framework.LK_RS8Nx.js";const g=JSON.parse('{"title":"权限组命令","description":"","frontmatter":{},"headers":[],"relativePath":"LuckPerms/command-usage.permission.md","filePath":"LuckPerms/command-usage.permission.md"}'),l={name:"LuckPerms/command-usage.permission.md"};function i(p,e,c,d,u,a){return t(),r("div",null,e[0]||(e[0]=[s('<h1 id="权限组命令" tabindex="-1">权限组命令 <a class="header-anchor" href="#权限组命令" aria-label="Permalink to &quot;权限组命令&quot;">​</a></h1><p>此为<strong>命令用法</strong>的子页面，<a href="./command-usage.html">点此返回</a>。</p><p>主页提到的一些关键点：</p><ul><li>在使用 BungeeCord 时应该使用 <code>/lpb</code> 而不是 <code>/lp</code></li><li>在使用 Velocity 时应该使用 <code>/lpv</code> 而不是 <code>/lp</code></li><li>尖括号标注的是必填参数 —— 如 <code>&lt;必选参数&gt;</code></li><li>方括号标注的是可选参数 —— 如 <code>[可选参数]</code></li><li>若要在参数中使用空格，请将参数用双引号包裹 —— 如<code>&quot; &quot;</code></li></ul><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="#lp-usergroup-usergroup-permission-info-页码-排序方式"><code>info</code></a></li><li><a href="#lp-usergroup-usergroup-permission-set-权限-truefalse-上下文"><code>set</code> &lt;权限&gt; &lt;true/false&gt; [上下文...]</a></li><li><a href="#lp-usergroup-usergroup-permission-unset-权限-上下文"><code>unset</code> &lt;权限&gt; [上下文...]</a></li><li><a href="#lp-usergroup-usergroup-permission-settemp-权限-truefalse-时间-施加模式-上下文"><code>settemp</code> &lt;权限&gt; &lt;true/false&gt; &lt;时间&gt; [施加模式] [上下文...]</a></li><li><a href="#lp-usergroup-usergroup-permission-unsettemp-权限-时间-上下文"><code>unsettemp</code> &lt;权限&gt; [时间] [上下文...]</a></li><li><a href="#lp-usergroup-usergroup-permission-check-权限"><code>check</code> &lt;权限&gt;</a></li><li><a href="#lp-usergroup-usergroup-permission-clear-上下文"><code>clear</code> [上下文...]</a></li></ul><h2 id="lp-user-group-玩家-权限组-permission-info-页码-排序方式" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; permission info [页码] [排序方式]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-permission-info-页码-排序方式" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; permission info [页码] [排序方式]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.permission.info</code> 或 <code>luckperms.group.permission.info</code><br><strong>可用参数：</strong></p><ul><li><code>[页码]</code> - 浏览的页码</li><li><code>[排序方式]</code> - 结果排序的方式</li></ul><p>列出玩家/权限组的权限节点。</p><p>“排序模式”参数允许你指定权限排列的顺序。你可以下列的四个选项之间选择。</p><table tabindex="0"><thead><tr><th>排序方式</th><th>描述</th></tr></thead><tbody><tr><td><code>priority</code></td><td>结果将会按核心的继承规则排序</td></tr><tr><td><code>!priority/reverse</code></td><td>将会按权重反向排序列表</td></tr><tr><td><code>abc/alphabetically</code></td><td>将会按字母顺序（A-Z）排序</td></tr><tr><td><code>!abc/!alphabetically</code></td><td>将会按字母顺序反向（Z-A）排序</td></tr></tbody></table><h2 id="lp-user-group-玩家-权限组-permission-set-权限-true-false-上下文" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; permission set &lt;权限&gt; [true|false] [上下文...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-permission-set-权限-true-false-上下文" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; permission set &lt;权限&gt; [true|false] [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.permission.set</code> 或 <code>luckperms.group.permission.set</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权限&gt;</code> - 所设置的权限节点</li><li><code>[true|false]</code> - 设置的权限值（默认为 <code>true</code>）</li><li><code>[上下文...]</code> - 设置权限的上下文</li></ul><p>为玩家/权限组设置（或给予）状态为“true”的权限，表示他们拥有该权限。将值设置为“false”表示夺去权限。不加入任何上下文表示会在“global（全局）”情境中应用该权限的状态。</p><h2 id="lp-user-group-玩家-权限组-permission-unset-权限-上下文" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; permission unset &lt;权限&gt; [上下文...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-permission-unset-权限-上下文" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; permission unset &lt;权限&gt; [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.permission.unset</code> 或 <code>luckperms.group.permission.unset</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权限&gt;</code> - 取消设置的权限节点</li><li><code>[上下文...]</code> - 取消设置权限节点的上下文</li></ul><p>为玩家/权限组取消设置（或移除）指定的权限。</p><h2 id="lp-user-group-玩家-权限组-permission-settemp-权限-true-false-时间-施加模式-上下文" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; permission settemp &lt;权限&gt; &lt;true|false&gt; &lt;时间&gt; [施加模式] [上下文...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-permission-settemp-权限-true-false-时间-施加模式-上下文" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; permission settemp &lt;权限&gt; &lt;true|false&gt; &lt;时间&gt; [施加模式] [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.permission.settemp</code> 或 <code>luckperms.group.permission.settemp</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权限&gt;</code> - 所设置的权限节点</li><li><code>&lt;true|false&gt;</code> - 设置权限的值</li><li><code>&lt;时间&gt;</code> - 权限的有效时间</li><li><code>[施加模式]</code> - 权限的叠加方式</li><li><code>[上下文...]</code> - 设置权限的上下文</li></ul><p>为玩家/权限组设置一个临时权限。将值设置为“false”表示夺去权限。填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。</p><p>“施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。</p><table tabindex="0"><thead><tr><th>模式关键词</th><th>描述</th></tr></thead><tbody><tr><td><code>accumulate</code></td><td>新加入的权限时长会叠加在已有的时长之上</td></tr><tr><td><code>replace</code></td><td>保留持续时间最长的权限节点</td></tr><tr><td><code>deny</code></td><td>不接受重复的限时权限节点，若有则拒绝执行命令</td></tr></tbody></table><h2 id="lp-user-group-玩家-权限组-permission-unsettemp-权限-时间-上下文" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; permission unsettemp &lt;权限&gt; [时间] [上下文...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-permission-unsettemp-权限-时间-上下文" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; permission unsettemp &lt;权限&gt; [时间] [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.permission.unsettemp</code> 或 <code>luckperms.group.permission.unsettemp</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权限&gt;</code> - 取消设置的权限节点</li><li><code>[时间]</code> - 临时权限节点减少的时间长度，若省略表示直接移除</li><li><code>[上下文...]</code> - 取消设置权限节点的上下文</li></ul><p>为玩家/权限组解除临时权限的设置。</p><h2 id="lp-user-group-玩家-权限组-permission-check-权限" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; permission check &lt;权限&gt;</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-permission-check-权限" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; permission check &lt;权限&gt;`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.permission.check</code> 或 <code>luckperms.group.permission.check</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权限&gt;</code> - 检查的权限节点</li></ul><p>检查玩家/权限组是否拥有指定权限，并会列出影响检查结果的相关信息。</p><h2 id="lp-user-group-玩家-权限组-permission-clear-上下文" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; permission clear [上下文...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-permission-clear-上下文" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; permission clear [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.permission.clear</code> 或 <code>luckperms.group.permission.clear</code><br><strong>可用参数：</strong></p><ul><li><code>[上下文...]</code> - 过滤的<a href="./features.context.html">上下文</a></li></ul><p>移除玩家/权限组的所有权限。</p>',38)]))}const m=o(l,[["render",i]]);export{g as __pageData,m as default};
