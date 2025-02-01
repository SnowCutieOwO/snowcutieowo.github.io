import{_ as r,c as t,o,al as a}from"./chunks/framework.LK_RS8Nx.js";const i=JSON.parse('{"title":"权限组命令","description":"","frontmatter":{},"headers":[],"relativePath":"LuckPerms/command-usage.parent.md","filePath":"LuckPerms/command-usage.parent.md"}'),l={name:"LuckPerms/command-usage.parent.md"};function p(d,e,c,u,s,n){return o(),t("div",null,e[0]||(e[0]=[a('<h1 id="权限组命令" tabindex="-1">权限组命令 <a class="header-anchor" href="#权限组命令" aria-label="Permalink to &quot;权限组命令&quot;">​</a></h1><p>此为<strong>命令用法</strong>的子页面，<a href="./command-usage.html">点此返回</a>。</p><p>主页提到的一些关键点：</p><ul><li>在使用 BungeeCord 时应该使用 <code>## </code>/lpb<code>而不是</code>## <code>/lp</code></li><li>在使用 Velocity 时应该使用 <code>## </code>/lpv<code>而不是</code>## <code>/lp</code></li><li>尖括号标注的是必填参数 —— 如 <code>&lt;必选参数&gt;</code></li><li>方括号标注的是可选参数 —— 如 <code>[可选参数]</code></li><li>若要在参数中使用空格，请将参数用双引号包裹 —— 如<code>&quot; &quot;</code></li></ul><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="#lp-usergroup-玩家权限组-parent-info-页码-排序模式"><code>info</code></a></li><li><a href="#lp-usergroup-玩家权限组-parent-set-权限组-上下文"><code>set</code> &lt;权限组&gt; [上下文...]</a></li><li><a href="#lp-usergroup-玩家权限组-parent-set-权限组-上下文"><code>add</code> &lt;权限组&gt; [上下文...]</a></li><li><a href="#lp-usergroup-玩家权限组-parent-remove-权限组-上下文"><code>remove</code> &lt;权限组&gt; [上下文...]</a></li><li><a href="#lp-usergroup-玩家权限组-parent-settrack-路线-索引权限组-上下文"><code>settrack</code> &lt;路线&gt; &lt;序号|权限组&gt; [上下文...]</a></li><li><a href="#lp-usergroup-玩家权限组-parent-addtemp-权限组-时间-施加模式-上下文"><code>addtemp</code> &lt;权限组&gt; &lt;时间&gt; [施加模式] [上下文...]</a></li><li><a href="#lp-usergroup-玩家权限组-parent-removetemp-权限组-duration-上下文"><code>removetemp</code> &lt;权限组&gt; [duration] [上下文...]</a></li><li><a href="#lp-usergroup-玩家权限组-parent-clear-上下文"><code>clear</code> [上下文...]</a></li><li><a href="#lp-usergroup-玩家权限组-parent-cleartrack-路线-上下文"><code>cleartrack</code> &lt;路线&gt; [上下文...]</a></li><li><a href="#lp-user-user-parent-switchprimarygroup-权限组"><code>switchprimarygroup</code> &lt;权限组&gt;</a></li></ul><h2 id="lp-user-group-玩家-权限组-parent-info-页码-排序模式" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; parent info [页码] [排序模式]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-parent-info-页码-排序模式" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; parent info [页码] [排序模式]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.parent.info</code> 或 <code>luckperms.group.parent.info</code><br><strong>可用参数：</strong></p><ul><li><code>[页码]</code> - 浏览的页码</li><li><code>[排序模式]</code> - 结果的排序方式</li></ul><p>显示玩家/权限组的继承关系（继承的权限组等）。</p><p>“排序模式”参数允许你指定权限排列的顺序。你可以下列的四个选项之间选择。</p><table tabindex="0"><thead><tr><th>排序方式</th><th>描述</th></tr></thead><tbody><tr><td><code>priority</code></td><td>结果将会按核心的继承规则排序</td></tr><tr><td><code>!priority/reverse</code></td><td>将会按权重反向排序列表</td></tr><tr><td><code>abc/alphabetically</code></td><td>将会按字母顺序（A-Z）排序</td></tr><tr><td><code>!abc/!alphabetically</code></td><td>将会按字母顺序反向（Z-A）排序</td></tr></tbody></table><h2 id="lp-user-group-玩家-权限组-parent-set-权限组-上下文" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; parent set &lt;权限组&gt; [上下文...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-parent-set-权限组-上下文" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; parent set &lt;权限组&gt; [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.parent.set</code> 或 <code>luckperms.group.parent.set</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权限组&gt;</code> - 所设置的权限组</li><li><code>[上下文...]</code> - 所设置权限组的<a href="./features.context.html">上下文</a></li></ul><p>设置玩家/权限组的继承。与“parent add”命令不同的是，这条命令会清除所有给定上下文的权限组。添加命令只会直接将继承关系“加在”已有的玩家/权限组继承关系上。若命令执行时不指定上下文，则命令也会更新玩家所在的主权限组。</p><h2 id="lp-user-group-玩家-权限组-parent-add-权限组-上下文" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; parent add &lt;权限组&gt; [上下文...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-parent-add-权限组-上下文" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; parent add &lt;权限组&gt; [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.parent.add</code> 或 <code>luckperms.group.parent.add</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权限组&gt;</code> - 所添加的权限组</li><li><code>[上下文...]</code> - 所添加权限组的<a href="./features.context.html">上下文</a></li></ul><p>为玩家/权限组添加继承关系。与“parent set”命令不同的是，这条命令添加的继承关系会直接加在已有的继承关系之上。其他继承的组不会被删除，玩家的主权限组也不会受到干扰。</p><h2 id="lp-user-group-玩家-权限组-parent-remove-权限组-上下文" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; parent remove &lt;权限组&gt; [上下文...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-parent-remove-权限组-上下文" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; parent remove &lt;权限组&gt; [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.parent.remove</code> 或 <code>luckperms.group.parent.remove</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权限组&gt;</code> - 移除的权限组</li><li><code>[上下文...]</code> - 移除权限组的上下文</li></ul><p>为玩家/权限组移除继承关系。 若移除的组为玩家的主权限组，默认将其设置回主权限组。</p><h2 id="lp-user-group-玩家-权限组-parent-settrack-路线-索引-权限组-上下文" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; parent settrack &lt;路线&gt; &lt;索引|权限组&gt; [上下文...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-parent-settrack-路线-索引-权限组-上下文" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; parent settrack &lt;路线&gt; &lt;索引|权限组&gt; [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.parent.settrack</code> 或 <code>luckperms.group.parent.settrack</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;路线&gt;</code> - 设置的路线</li><li><code>&lt;索引|权限组&gt;</code> - 所设置的权限组或表示给定路线中权限组所处的位置序号</li><li><code>[上下文...]</code> - 所设置权限组的上下文</li></ul><p>在给定路线上设置玩家/权限组的位置。这条命令与设置命令相同，但它会清除指定路线上的其他所有权限组。其他继承权限组不受影响。</p><h2 id="lp-user-group-玩家-权限组-parent-addtemp-权限组-时间-施加模式-上下文" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; parent addtemp &lt;权限组&gt; &lt;时间&gt; [施加模式] [上下文...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-parent-addtemp-权限组-时间-施加模式-上下文" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; parent addtemp &lt;权限组&gt; &lt;时间&gt; [施加模式] [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.parent.addtemp</code> 或 <code>luckperms.group.parent.addtemp</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权限组&gt;</code> - 所添加的权限组</li><li><code>&lt;时间&gt;</code> - 权限组的有效时间</li><li><code>[施加模式]</code> - 临时权限的叠加方式</li><li><code>[上下文...]</code> - 所添加权限组的上下文</li></ul><p>为玩家/权限组临时添加继承权限组。填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。</p><p>“施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。</p><table tabindex="0"><thead><tr><th>模式关键词</th><th>描述</th></tr></thead><tbody><tr><td><code>accumulate</code></td><td>新加入的权限时长会叠加在已有的时长之上</td></tr><tr><td><code>replace</code></td><td>保留持续时间最长的权限节点</td></tr><tr><td><code>deny</code></td><td>不接受重复的限时权限节点，若有则拒绝执行命令</td></tr></tbody></table><h2 id="lp-user-group-玩家-权限组-parent-removetemp-权限组-duration-上下文" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; parent removetemp &lt;权限组&gt; [duration] [上下文...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-parent-removetemp-权限组-duration-上下文" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; parent removetemp &lt;权限组&gt; [duration] [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.parent.removetemp</code> 或 <code>luckperms.group.parent.removetemp</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权限组&gt;</code> - 移除的权限组</li><li><code>[时间]</code> - 临时权限节点减少的时间长度，若省略表示直接移除</li><li><code>[上下文...]</code> - 移除权限组的上下文</li></ul><p>为玩家/权限组解除临时权限的设置。</p><h2 id="lp-user-group-玩家-权限组-parent-clear-上下文" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; parent clear [上下文...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-parent-clear-上下文" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; parent clear [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.parent.clear</code> 或 <code>luckperms.group.parent.clear</code><br><strong>可用参数：</strong></p><ul><li><code>[上下文...]</code> - 过滤的上下文</li></ul><p>移除玩家/权限组的所有权限。 也会一并影响到默认组。</p><h2 id="lp-user-group-玩家-权限组-parent-cleartrack-路线-上下文" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; parent cleartrack &lt;路线&gt; [上下文...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-parent-cleartrack-路线-上下文" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; parent cleartrack &lt;路线&gt; [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.parent.cleartrack</code> 或 <code>luckperms.group.parent.cleartrack</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;路线&gt;</code> - 所移动的路线</li><li><code>[上下文...]</code> - 过滤的上下文</li></ul><p>移除指定路线上玩家/权限组的所有继承关系。</p><h2 id="lp-user-user-parent-switchprimarygroup-权限组" tabindex="-1"><code>/lp user &lt;user&gt; parent switchprimarygroup &lt;权限组&gt;</code> <a class="header-anchor" href="#lp-user-user-parent-switchprimarygroup-权限组" aria-label="Permalink to &quot;`/lp user &lt;user&gt; parent switchprimarygroup &lt;权限组&gt;`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.parent.switchprimarygroup</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权限组&gt;</code> - 切换至的权限组</li></ul><p>该命令一般只能对着玩家使用 - 权限组没有“主（默认）”权限组的概念。</p><p>该命令允许你修改玩家的默认权限组。若他们还不是指定权限组的成员，他们会立刻加入。该命令不应用于替代“parent set”命令。已存在的主权限组不会作为继承组被移除（玩家可以继承多个权限组）。</p><p>若 LuckPerms 配置文件中的 <code>primary-group-calculation</code> 被设置为了“stored”以外的内容，你应该使用 <a href="#lp-usergroup-usergroup-parent-add-权限组-上下文"><code>parent add</code></a> 或 <a href="#lp-usergroup-usergroup-parent-set-权限组-上下文"><code>parent set</code></a> 而不是这条命令。</p>',52)]))}const h=r(l,[["render",p]]);export{i as __pageData,h as default};
