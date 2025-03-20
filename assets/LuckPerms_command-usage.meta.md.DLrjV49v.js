import{_ as l,C as t,c,o as a,b1 as u,G as o}from"./chunks/framework.CC7vnuC4.js";const x=JSON.parse('{"title":"元数据命令","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/LuckPerms"},{"title":"元数据命令","link":"/LuckPerms/command-usage.meta"}]},"headers":[],"relativePath":"LuckPerms/command-usage.meta.md","filePath":"LuckPerms/command-usage.meta.md"}'),p={name:"LuckPerms/command-usage.meta.md"};function s(i,e,g,m,n,f){const d=t("NolebaseGitContributors"),r=t("NolebaseGitChangelog");return a(),c("div",null,[e[0]||(e[0]=u('<h1 id="元数据命令" tabindex="-1">元数据命令 <a class="header-anchor" href="#元数据命令" aria-label="Permalink to &quot;元数据命令&quot;">​</a></h1><p>此为<strong>命令用法</strong>的子页面，<a href="./command-usage">点此返回</a>。</p><p>主页提到的一些关键点：</p><ul><li>在使用 BungeeCord 时应该使用 <code>## </code>/lpb<code>而不是</code>## <code>/lp</code></li><li>在使用 Velocity 时应该使用 <code>## </code>/lpv<code>而不是</code>## <code>/lp</code></li><li>尖括号标注的是必填参数 —— 如 <code>&lt;必选参数&gt;</code></li><li>方括号标注的是可选参数 —— 如 <code>[可选参数]</code></li><li>若要在参数中使用空格，请将参数用双引号包裹 —— 如<code>&quot; &quot;</code></li></ul><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><code>info</code></li><li><code>set</code> &lt;键名&gt; &lt;值&gt; [情境...]</li><li><code>unset</code> &lt;键名&gt; [情境...]</li><li><code>settemp</code> &lt;键名&gt; &lt;值&gt; &lt;时间&gt; [施加模式] [情境...]</li><li><code>unsettemp</code> &lt;键名&gt; [情境...]</li><li><code>addprefix</code> &lt;权重&gt; &lt;前缀&gt; [情境...]</li><li><code>addsuffix</code> &lt;权重&gt; &lt;后缀&gt; [情境...]</li><li><code>setprefix</code> [权重] &lt;前缀&gt; [情境...]</li><li><code>setsuffix</code> [权重] &lt;后缀&gt; [情境...]</li><li><code>removeprefix</code> &lt;权重&gt; [前缀] [情境...]</li><li><code>removesuffix</code> &lt;权重&gt; [后缀] [情境...]</li><li><code>addtempprefix</code> &lt;权重&gt; &lt;前缀&gt; &lt;时间&gt; [施加模式] [情境...]</li><li><code>addtempsuffix</code> &lt;权重&gt; &lt;后缀&gt; &lt;时间&gt; [施加模式] [情境...]</li><li><code>settempprefix</code> [权重] &lt;前缀&gt; &lt;时间&gt; [施加模式] [情境...]</li><li><code>settempsuffix</code> [权重] &lt;后缀&gt; &lt;时间&gt; [施加模式] [情境...]</li><li><code>removetempprefix</code> &lt;权重&gt; [前缀] [情境...]</li><li><code>removetempsuffix</code> &lt;权重&gt; [后缀] [情境...]</li><li><code>clear</code> [类型] [情境...]</li></ul><h2 id="lp-user-group-玩家-权限组-meta-info" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta info</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-info" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta info`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.info</code> 或 <code>luckperms.group.meta.info</code></p><p>显示玩家/权限组继承的元数据（选项），前缀与后缀。</p><h2 id="lp-user-group-玩家-权限组-meta-set-键名-值-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta set &lt;键名&gt; &lt;值&gt; [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-set-键名-值-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta set &lt;键名&gt; &lt;值&gt; [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.set</code> 或 <code>luckperms.group.meta.set</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;键名&gt;</code> - 所要设置的键名</li><li><code>&lt;值&gt;</code> - 要对键名赋予的值</li><li><code>[情境...]</code> - 设置这条元数据的<a href="./features.context">情境</a></li></ul><p>对玩家/权限组设置键值对元数据。这些值可以通过 Vault 或 Sponge 权限 API 被其他插件读取或修改。</p><h2 id="lp-user-group-玩家-权限组-meta-unset-键名-值-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta unset &lt;键名&gt; &lt;值&gt; [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-unset-键名-值-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta unset &lt;键名&gt; &lt;值&gt; [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.unset</code> 或 <code>luckperms.group.meta.unset</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;键名&gt;</code> - 解除设置的键名</li><li><code>[情境...]</code> - 解除设置键名的<a href="./features.context">情境</a></li></ul><p>对玩家/权限组取消设置指定的键值对元数据。</p><h2 id="lp-user-group-玩家-权限组-meta-settemp-键名-值-时间-施加模式-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta settemp &lt;键名&gt; &lt;值&gt; &lt;时间&gt; [施加模式] [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-settemp-键名-值-时间-施加模式-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta settemp &lt;键名&gt; &lt;值&gt; &lt;时间&gt; [施加模式] [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.settemp</code> 或 <code>luckperms.group.meta.settemp</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;键名&gt;</code> - 所要设置的键名</li><li><code>&lt;值&gt;</code> - 要对键名赋予的值</li><li><code>&lt;时间&gt;</code> - 元数据的有效时间长度</li><li><code>[施加模式]</code> - 临时权限的叠加方式</li><li><code>[情境...]</code> - 设置这条元数据的<a href="./features.context">情境</a></li></ul><p>为玩家/权限组临时添加继承权限组。填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。</p><p>LuckPerms 使用的时间格式与 java 中使用的 <a href="https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html" target="_blank" rel="noreferrer">SimpleDateFormat</a> 相似。如，<code>1M</code> 表示一个月，而 <code>1m</code> 才表示一分钟。</p><p>“施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。</p><table tabindex="0"><thead><tr><th>模式关键词</th><th>描述</th></tr></thead><tbody><tr><td><code>accumulate</code></td><td>新加入的权限时长会叠加在已有的时长之上</td></tr><tr><td><code>replace</code></td><td>保留持续时间最长的权限节点</td></tr><tr><td><code>deny</code></td><td>不接受重复的限时权限节点，若有则拒绝执行命令</td></tr></tbody></table><h2 id="lp-user-group-玩家-权限组-meta-unsettemp-键名-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta unsettemp &lt;键名&gt; [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-unsettemp-键名-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta unsettemp &lt;键名&gt; [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.unsettemp</code> 或 <code>luckperms.group.meta.unsettemp</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;键名&gt;</code> - 解除设置的键名</li><li><code>[情境...]</code> - 解除设置键名的情境</li></ul><p>为玩家/权限组解除设置指定的键值对元数据。</p><h2 id="lp-user-group-玩家-权限组-meta-addprefix-权重-前缀-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta addprefix &lt;权重&gt; &lt;前缀&gt; [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-addprefix-权重-前缀-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta addprefix &lt;权重&gt; &lt;前缀&gt; [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.addprefix</code> 或 <code>luckperms.group.meta.addprefix</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权重&gt;</code> - 所给予前缀的优先级</li><li><code>&lt;前缀&gt;</code> - 前缀的显示内容</li><li><code>[情境...]</code> - 给予前缀的<a href="./features.context">情境</a></li></ul><p>向玩家/权限组添加前缀。你可以将其包裹在英文双引号 <code>&quot; &quot;</code> 之间来向前缀加入空格。</p><h2 id="lp-user-group-玩家-权限组-meta-addsuffix-权重-后缀-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta addsuffix &lt;权重&gt; &lt;后缀&gt; [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-addsuffix-权重-后缀-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta addsuffix &lt;权重&gt; &lt;后缀&gt; [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.addsuffix</code> 或 <code>luckperms.group.meta.addsuffix</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权重&gt;</code> - 所给予后缀的优先级</li><li><code>&lt;后缀&gt;</code> - 后缀的显示内容</li><li><code>[情境...]</code> - 给予后缀的<a href="./features.context">情境</a></li></ul><p>向玩家/权限组添加后缀。你可以将其包裹在英文双引号 <code>&quot; &quot;</code> 之间来向前缀加入空格。</p><h2 id="lp-user-group-玩家-权限组-meta-setprefix-权重-前缀-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta setprefix [权重] &lt;前缀&gt; [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-setprefix-权重-前缀-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta setprefix [权重] &lt;前缀&gt; [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.setprefix</code> 或 <code>luckperms.group.meta.setprefix</code><br><strong>可用参数：</strong></p><ul><li><code>[权重]</code> - 所给予前缀的优先级</li><li><code>&lt;前缀&gt;</code> - 前缀的显示内容</li><li><code>[情境...]</code> - 给予前缀的<a href="./features.context">情境</a></li></ul><p>为玩家/权限组设置前缀。你可以将其包裹在英文双引号 <code>&quot; &quot;</code> 之间来向前缀加入空格。与 <code>addprefix</code> 命令不同的是，使用该命令加入前缀之后，在同一情境中的其他前缀会被删除。另外一个区别就是权重参数在 <code>setprefix</code> 命令里是可选的 —— LuckPerms 会在执行命令的时候帮你设置一个合适的值。</p><h2 id="lp-user-group-玩家-权限组-meta-setsuffix-权重-后缀-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta setsuffix [权重] &lt;后缀&gt; [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-setsuffix-权重-后缀-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta setsuffix [权重] &lt;后缀&gt; [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.setsuffix</code> 或 <code>luckperms.group.meta.setsuffix</code><br><strong>可用参数：</strong></p><ul><li><code>[权重]</code> - 所给予后缀的优先级</li><li><code>&lt;后缀&gt;</code> - 后缀的显示内容</li><li><code>[情境...]</code> - 给予后缀的<a href="./features.context">情境</a></li></ul><p>为玩家/权限组设置后缀。你可以将其包裹在英文双引号 <code>&quot; &quot;</code> 之间来向后缀加入空格。与 <code>addprefix</code> 命令不同的是，使用该命令加入后缀之后，在同一情境中的其他后缀会被删除。另外一个区别就是权重参数在 <code>setprefix</code> 命令里是可选的 —— LuckPerms 会在执行命令的时候帮你设置一个合适的值。</p><h2 id="lp-user-group-玩家-权限组-meta-removeprefix-权重-前缀-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta removeprefix &lt;权重&gt; [前缀] [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-removeprefix-权重-前缀-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta removeprefix &lt;权重&gt; [前缀] [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.removeprefix</code> 或 <code>luckperms.group.meta.removeprefix</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权重&gt;</code> - 所移除前缀的优先级</li><li><code>[前缀]</code> - 前缀的显示内容</li><li><code>[情境...]</code> - 移除前缀的<a href="./features.context">情境</a></li></ul><p>为玩家/权限组移除前缀。你可以将其包裹在英文双引号 <code>&quot; &quot;</code> 之间来向后缀加入空格。</p><h2 id="lp-user-group-玩家-权限组-meta-removesuffix-权重-后缀-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta removesuffix &lt;权重&gt; [后缀] [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-removesuffix-权重-后缀-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta removesuffix &lt;权重&gt; [后缀] [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.removesuffix</code> 或 <code>luckperms.group.meta.removesuffix</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权重&gt;</code> - 所移除后缀的优先级</li><li><code>[后缀]</code> - 后缀的显示内容</li><li><code>[情境...]</code> - 移除后缀的<a href="./features.context">情境</a></li></ul><p>为玩家/权限组移除后缀。你可以将其包裹在英文双引号 <code>&quot; &quot;</code> 之间来向后缀加入空格。</p><h2 id="lp-user-group-玩家-权限组-meta-addtempprefix-权重-前缀-时间-施加模式-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta addtempprefix &lt;权重&gt; &lt;前缀&gt; &lt;时间&gt; [施加模式] [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-addtempprefix-权重-前缀-时间-施加模式-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta addtempprefix &lt;权重&gt; &lt;前缀&gt; &lt;时间&gt; [施加模式] [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.addtempprefix</code> 或 <code>luckperms.group.meta.addtempprefix</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权重&gt;</code> - 所给予前缀的优先级</li><li><code>&lt;前缀&gt;</code> - 前缀的显示内容</li><li><code>&lt;时间&gt;</code> - 前缀的有效时间</li><li><code>[施加模式]</code> - 临时权限的叠加方式</li><li><code>[情境...]</code> - 给予前缀的<a href="./features.context">情境</a></li></ul><p>向玩家/权限组添加临时前缀。你可以将其包裹在英文双引号 <code>&quot; &quot;</code> 之间来向前缀加入空格。填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。</p><p>“施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。</p><table tabindex="0"><thead><tr><th>模式关键词</th><th>描述</th></tr></thead><tbody><tr><td><code>accumulate</code></td><td>新加入的权限时长会叠加在已有的时长之上</td></tr><tr><td><code>replace</code></td><td>保留持续时间最长的权限节点</td></tr><tr><td><code>deny</code></td><td>不接受重复的限时权限节点，若有则拒绝执行命令</td></tr></tbody></table><h2 id="lp-user-group-玩家-权限组-meta-addtempsuffix-权重-后缀-时间-施加模式-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta addtempsuffix &lt;权重&gt; &lt;后缀&gt; &lt;时间&gt; [施加模式] [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-addtempsuffix-权重-后缀-时间-施加模式-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta addtempsuffix &lt;权重&gt; &lt;后缀&gt; &lt;时间&gt; [施加模式] [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.addtempsuffix</code> 或 <code>luckperms.group.meta.addtempsuffix</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权重&gt;</code> - 所给予后缀的优先级</li><li><code>&lt;后缀&gt;</code> - 后缀的显示内容</li><li><code>&lt;时间&gt;</code> - 后缀的有效时间</li><li><code>[施加模式]</code> - 临时权限的叠加方式</li><li><code>[情境...]</code> - 给予后缀的<a href="./features.context">情境</a></li></ul><p>向玩家/权限组添加临时后缀。你可以将其包裹在英文双引号 <code>&quot; &quot;</code> 之间来向后缀加入空格。填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。 “施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。</p><table tabindex="0"><thead><tr><th>模式关键词</th><th>描述</th></tr></thead><tbody><tr><td><code>accumulate</code></td><td>新加入的权限时长会叠加在已有的时长之上</td></tr><tr><td><code>replace</code></td><td>保留持续时间最长的权限节点</td></tr><tr><td><code>deny</code></td><td>不接受重复的限时权限节点，若有则拒绝执行命令</td></tr></tbody></table><h2 id="lp-user-group-玩家-权限组-meta-settempprefix-权重-前缀-时间-施加模式-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta settempprefix [权重] &lt;前缀&gt; &lt;时间&gt; [施加模式] [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-settempprefix-权重-前缀-时间-施加模式-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta settempprefix [权重] &lt;前缀&gt; &lt;时间&gt; [施加模式] [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.settempprefix</code> 或 <code>luckperms.group.meta.settempprefix</code><br><strong>可用参数：</strong></p><ul><li><code>[权重]</code> - 所给予前缀的优先级</li><li><code>&lt;前缀&gt;</code> - 前缀的显示内容</li><li><code>&lt;时间&gt;</code> - 前缀的有效时间</li><li><code>[施加模式]</code> - 临时权限的叠加方式</li><li><code>[情境...]</code> - 给予前缀的<a href="./features.context">情境</a></li></ul><p>为玩家/权限组设置临时前缀。你可以将其包裹在英文双引号 <code>&quot; &quot;</code> 之间来向前缀加入空格。与 <code>addtempprefix</code> 命令不同的是，使用该命令加入前缀之后，在同一情境中的其他前缀会被删除。另外一个区别就是权重参数在 <code>setprefix</code> 命令里是可选的 —— LuckPerms 会在执行命令的时候帮你设置一个合适的值。</p><p>填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。 “施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。</p><table tabindex="0"><thead><tr><th>模式关键词</th><th>描述</th></tr></thead><tbody><tr><td><code>accumulate</code></td><td>新加入的权限时长会叠加在已有的时长之上</td></tr><tr><td><code>replace</code></td><td>保留持续时间最长的权限节点</td></tr><tr><td><code>deny</code></td><td>不接受重复的限时权限节点，若有则拒绝执行命令</td></tr></tbody></table><h2 id="lp-user-group-玩家-权限组-meta-settempsuffix-权重-后缀-时间-施加模式-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta settempsuffix [权重] &lt;后缀&gt; &lt;时间&gt; [施加模式] [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-settempsuffix-权重-后缀-时间-施加模式-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta settempsuffix [权重] &lt;后缀&gt; &lt;时间&gt; [施加模式] [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.settempsuffix</code> 或 <code>luckperms.group.meta.settempsuffix</code><br><strong>可用参数：</strong></p><ul><li><code>[权重]</code> - 所给予后缀的优先级</li><li><code>&lt;后缀&gt;</code> - 后缀的显示内容</li><li><code>&lt;时间&gt;</code> - 后缀的有效时间</li><li><code>[施加模式]</code> - 临时权限的叠加方式</li><li><code>[情境...]</code> - 给予后缀的<a href="./features.context">情境</a></li></ul><p>为玩家/权限组设置临时后缀。你可以将其包裹在英文双引号 <code>&quot; &quot;</code> 之间来向后缀加入空格。与 <code>addtempsuffix</code> 命令不同的是，使用该命令加入后缀之后，在同一情境中的其他后缀会被删除。另外一个区别就是权重参数在 <code>setsuffix</code> 命令里是可选的 —— LuckPerms 会在执行命令的时候帮你设置一个合适的值。</p><p>填入的时间参数应当为时间长度，或 unix 时间戳，以表示权限的有效时长。例如，“1mo3d13h45m”表示该权限的有效时间为 1 个月，3 天，13 小时 45 分钟，而“1482694200”则表示权限会在 2016 年 12 月 25 日的 7:30 分过期。 “施加模式” 参数允许你指定权限如何叠加计算。你可以在下列的三个选项中选择。</p><table tabindex="0"><thead><tr><th>模式关键词</th><th>描述</th></tr></thead><tbody><tr><td><code>accumulate</code></td><td>新加入的权限时长会叠加在已有的时长之上</td></tr><tr><td><code>replace</code></td><td>保留持续时间最长的权限节点</td></tr><tr><td><code>deny</code></td><td>不接受重复的限时权限节点，若有则拒绝执行命令</td></tr></tbody></table><h2 id="lp-user-group-玩家-权限组-meta-removetempprefix-权重-前缀-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta removetempprefix &lt;权重&gt; [前缀] [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-removetempprefix-权重-前缀-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta removetempprefix &lt;权重&gt; [前缀] [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.removetempprefix</code> 或 <code>luckperms.group.meta.removetempprefix</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权重&gt;</code> - 所移除前缀的优先级</li><li><code>[前缀]</code> - 前缀的显示内容</li><li><code>[情境...]</code> - 移除前缀的<a href="./features.context">情境</a></li></ul><p>从玩家/权限组中移除临时前缀。你可以将其包裹在英文双引号 <code>&quot; &quot;</code> 之间来向前缀加入空格。</p><h2 id="lp-user-group-玩家-权限组-meta-removetempsuffix-权重-后缀-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta removetempsuffix &lt;权重&gt; [后缀] [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-removetempsuffix-权重-后缀-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta removetempsuffix &lt;权重&gt; [后缀] [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.removetempsuffix</code> 或 <code>luckperms.group.meta.removetempsuffix</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权重&gt;</code> - 所移除后缀的优先级</li><li><code>[后缀]</code> - 后缀的显示内容</li><li><code>[情境...]</code> - 移除后缀的<a href="./features.context">情境</a></li></ul><p>从玩家/权限组中移除临时后缀。你可以将其包裹在英文双引号 <code>&quot; &quot;</code> 之间来向后缀加入空格。</p><h2 id="lp-user-group-玩家-权限组-meta-clear-类型-情境" tabindex="-1"><code>/lp user/group &lt;玩家|权限组&gt; meta clear [类型] [情境...]</code> <a class="header-anchor" href="#lp-user-group-玩家-权限组-meta-clear-类型-情境" aria-label="Permalink to &quot;`/lp user/group &lt;玩家|权限组&gt; meta clear [类型] [情境...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.meta.clear</code> 或 <code>luckperms.group.meta.clear</code><br><strong>可用参数：</strong></p><ul><li><code>[类型]</code> - 所要清除的元数据类型</li></ul><table tabindex="0"><thead><tr><th>类型</th><th>含义</th></tr></thead><tbody><tr><td><code>any/all/*</code></td><td>默认类型 —— 清除所有元数据</td></tr><tr><td><code>chat/chatmeta</code></td><td>清除所有前后缀</td></tr><tr><td><code>meta</code></td><td>清除所有非聊天元数据（除前后缀外的所有元数据）</td></tr><tr><td><code>prefix/prefixes</code></td><td>清楚前缀</td></tr><tr><td><code>suffix/suffixes</code></td><td>清除后缀</td></tr></tbody></table><ul><li><code>[情境...]</code> - 过滤的情境内容</li></ul><p>移除所有元数据/前缀/后缀。</p>',89)),o(d),o(r)])}const b=l(p,[["render",s]]);export{x as __pageData,b as default};
