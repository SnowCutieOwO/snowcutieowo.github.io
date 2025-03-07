import{_ as n,C as s,c as i,o as p,b1 as o,G as e}from"./chunks/framework.CC7vnuC4.js";const m=JSON.parse('{"title":"区域命令","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/WorldGuard"},{"title":"区域命令","link":"/WorldGuard/regions.region-commands"}]},"headers":[],"relativePath":"WorldGuard/regions.region-commands.md","filePath":"WorldGuard/regions.region-commands.md"}'),c={name:"WorldGuard/regions.region-commands.md"};function d(r,a,g,h,u,b){const t=s("NolebaseGitContributors"),l=s("NolebaseGitChangelog");return p(),i("div",null,[a[0]||(a[0]=o(`<h1 id="区域命令" tabindex="-1">区域命令 <a class="header-anchor" href="#区域命令" aria-label="Permalink to &quot;区域命令&quot;">​</a></h1><p>对于其他（与区域保护无关的）命令，请查阅“命令”章节。这些命令的权限在“权限”章节有详细介绍。</p><p>这其中的有些命令可能需要后台处理，并在一段时间之后返回结果。查看后台处理中的任务命令是 <code>/wg running</code>。对正在执行的任务和处理中的命令有硬性限制。</p><p><code>/region</code> 或 <code>/rg</code> 都可以用于执行命令。一些子命令有多个别名（例如，<code>/rg d</code> 是 <code>/rg define</code> 的简写）。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><blockquote><p>这里的大多数命令都可以从控制台使用，但是你也许需要（在必要的时候）指定 <code>-w</code> 参数。<br> 你也可以使用由 WorldEdit 提供的 <code>//world</code> 来设置目标世界（游戏内和控制台中均可）。</p></blockquote></div><h2 id="区域的创建与删除" tabindex="-1">区域的创建与删除 <a class="header-anchor" href="#区域的创建与删除" aria-label="Permalink to &quot;区域的创建与删除&quot;">​</a></h2><h3 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg define [-w &lt;世界名称&gt;] [-g] &lt;id&gt; [&lt;拥有者1&gt;] [&lt;拥有者2&gt;] [... &lt;拥有者N&gt;]</span></span>
<span class="line"><span>/rg create (...)</span></span>
<span class="line"><span>/rg def (...)</span></span>
<span class="line"><span>/rg d (...)</span></span></code></pre></div><p>以指定的命名创建一个新的区域，可选参数还可指定其拥有者。区域的范围是你使用 WorldEdit 的小木斧所圈定的选区。</p><p>区域的命名是大小写敏感的。每个世界的区域名称都不可重复。</p><ul><li><code>-g</code> 会创建一个不存在实际边界的全局区域（与真正的全局区域并不相同），它一般用于创建临时区域（见“优先级与继承”章节）</li></ul><div class="info custom-block"><p class="custom-block-title">示例：创建一个新的“shop”区域，且“sk89q”和“wizjany”是该区域的拥有者</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg define shop sk89q wizjany</span></span></code></pre></div></div><h3 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-label="Permalink to &quot;删除&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg removemember [-w &lt;世界名称&gt;] [-a] &lt;id&gt; &lt;区域成员...&gt;</span></span>
<span class="line"><span>/rg remmember (...)</span></span>
<span class="line"><span>/rg removemem (...)</span></span>
<span class="line"><span>/rg remmem (...)</span></span>
<span class="line"><span>/rg rm (...)</span></span></code></pre></div><p>删除一个区域。</p><p>若指定的区域有子区域，那么必须指定 <code>或</code> 参数。这两个参数不能同时指定。</p><ul><li><code>-u</code> 表示将依赖该父区域的子区域强制断开关系，即设置为无继承关系；</li><li><code>-f</code> 表示将父区域和依赖的子区域一并删除。</li></ul><h3 id="重定义" tabindex="-1">重定义 <a class="header-anchor" href="#重定义" aria-label="Permalink to &quot;重定义&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg redefine [-w &lt;世界名称&gt;] [-g]</span></span>
<span class="line"><span>/rg update (...)</span></span>
<span class="line"><span>/rg move (...)</span></span></code></pre></div><p>修改已存在区域的物理边界，例如将其替换为你当前圈定的 WorldEdit 选区。</p><ul><li><code>-g</code> 会创建一个不存在实际边界的全局区域（与真正的全局区域并不相同），它一般用于创建临时区域（见“优先级与继承”章节）</li></ul><h3 id="认领" tabindex="-1">认领 <a class="header-anchor" href="#认领" aria-label="Permalink to &quot;认领&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg claim &lt;区域命名&gt;</span></span></code></pre></div><p>认领一个区域，用于玩家创建的区域的自助功能。更多信息请见“认领”章节。</p><h2 id="归属关系编辑" tabindex="-1">归属关系编辑 <a class="header-anchor" href="#归属关系编辑" aria-label="Permalink to &quot;归属关系编辑&quot;">​</a></h2><h3 id="添加成员" tabindex="-1">添加成员 <a class="header-anchor" href="#添加成员" aria-label="Permalink to &quot;添加成员&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg addmember [-w &lt;世界名称&gt;] &lt;区域命名&gt; &lt;区域成员...&gt;</span></span>
<span class="line"><span>/rg addmem (...)</span></span>
<span class="line"><span>/rg am (...)</span></span></code></pre></div><p>将任意成员添加至区域。使用 <code>g:&lt;权限组&gt;</code> 可将指定权限组而不是单个玩家添加为成员。</p><div class="info custom-block"><p class="custom-block-title">示例：将“builder”组和玩家“sk89q”设置为“lobby”世界的“spawn”区域成员</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg addmember -w lobby spawn g:builder sk89q</span></span></code></pre></div></div><h3 id="添加拥有者" tabindex="-1">添加拥有者 <a class="header-anchor" href="#添加拥有者" aria-label="Permalink to &quot;添加拥有者&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg addowner [-w &lt;世界名称&gt;] &lt;区域命名&gt; &lt;区域拥有者...&gt;</span></span>
<span class="line"><span>/rg ao (...)</span></span></code></pre></div><p>将任意数量的成员添加至一个区域。使用参数 <code>g:&lt;权限组名称&gt;</code> 将会把一整个权限组添加至区域中。</p><div class="info custom-block"><p class="custom-block-title">示例：将“admin”组和玩家“eduardo”设置为“lobby”世界的“spawn”区域拥有者</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg addowner -w lobby spawn g:admins eduardo</span></span></code></pre></div></div><h3 id="移除成员" tabindex="-1">移除成员 <a class="header-anchor" href="#移除成员" aria-label="Permalink to &quot;移除成员&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg removemember [-w &lt;世界名称&gt;] [-a] &lt;区域命名&gt; &lt;区域成员...&gt;</span></span>
<span class="line"><span>/rg remmember (...)</span></span>
<span class="line"><span>/rg remmem (...)</span></span>
<span class="line"><span>/rg rm (...)</span></span></code></pre></div><p>将任意数量的成员从区域中移除。与添加命令相同，参数 <code>g:&lt;权限组名称&gt;</code> 可以用于指定一整个权限组。</p><ul><li><code>-a</code> 参数将会把区域内所有的成员移除，且无视命令末尾的 &lt;区域成员...&gt; 参数。</li></ul><h3 id="移除拥有者" tabindex="-1">移除拥有者 <a class="header-anchor" href="#移除拥有者" aria-label="Permalink to &quot;移除拥有者&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg removeowner [-w &lt;世界名称&gt;] [-a] &lt;区域命名&gt; &lt;区域拥有者...&gt;</span></span>
<span class="line"><span>/rg remowner</span></span>
<span class="line"><span>/rg ro (...)</span></span></code></pre></div><p>移除该区域内任意数量的拥有者。与上文的添加命令相同，使用参数 <code>g:&lt;权限组&gt;</code> 来指定权限组。</p><ul><li><code>-a</code> 将会将该区域的所有拥有者都清除，并无视后方的 &lt;区域拥有者...&gt; 参数。</li></ul><h2 id="获取信息" tabindex="-1">获取信息 <a class="header-anchor" href="#获取信息" aria-label="Permalink to &quot;获取信息&quot;">​</a></h2><h3 id="选择" tabindex="-1">选择 <a class="header-anchor" href="#选择" aria-label="Permalink to &quot;选择&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg select [-w &lt;世界名称&gt;] [&lt;区域命名&gt;]</span></span>
<span class="line"><span>/rg sel (...)</span></span>
<span class="line"><span>/rg s (...)</span></span></code></pre></div><p>将 WorldEdit 的选区替换为指定区域的选区。</p><h3 id="选择-1" tabindex="-1">选择 <a class="header-anchor" href="#选择-1" aria-label="Permalink to &quot;选择&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg info [-u] [-s] [-w &lt;世界名称&gt;] [&lt;区域命名&gt;]</span></span>
<span class="line"><span>/rg i (...)</span></span></code></pre></div><p>显示指定区域的信息，如果不指定区域名称，则显示你当前所处位置的区域信息（如果有）。如果你在多个区域中，那么会显示一串列表。</p><ul><li><code>-s</code> 使得该命令会一并选中区域（见 <code>/rg select</code> 部分的介绍）</li><li><code>-u</code> 会使得显示的信息中显示的是 UUID 而不是玩家名称。</li></ul><div class="info custom-block"><p class="custom-block-title">示例：显示全局区域的相关信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg info __global__</span></span></code></pre></div></div><h3 id="标志" tabindex="-1">标志 <a class="header-anchor" href="#标志" aria-label="Permalink to &quot;标志&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg flags [-w &lt;世界名称&gt;] [-p &lt;页码&gt;] &lt;区域命名&gt;</span></span></code></pre></div><p>分页显示区域所设置的标志。</p><p>自动设置的标志会以白色显示，从父区域继承的标志会以淡灰色显示，未设置的标志会以默认的灰色显示。</p><p>在标志的值上点击可以快速设置和撤销设置，下方的箭头按钮允许你翻页，而中间的页码则可以用于指向特定页。</p><h3 id="列表" tabindex="-1">列表 <a class="header-anchor" href="#列表" aria-label="Permalink to &quot;列表&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg list [-i &lt;搜索 ID&gt;] [-p &lt;玩家名称&gt;] [-w &lt;世界名称&gt;] [&lt;页码&gt;]</span></span></code></pre></div><p>列出已经创建的区域。可提供数字用于翻到特定页。</p><p>如果玩家没有权限列出所有区域，但是有权限列出他们所拥有的区域（玩家为这些区域的成员），那么这条命令就只会列出玩家所拥有的区域。</p><ul><li><code>-p &lt;玩家名称&gt;</code> 可以用于指定成员或拥有者玩家的名称；</li><li><code>-i &lt;搜索区域的关键词&gt;</code> 可以用于列出包含关键词的区域列表；</li><li><code>-s</code> 可以只列出经由 WorldEdit 创建的选区所产生的区域（译者注：非全局区域等）。</li></ul><div class="info custom-block"><p class="custom-block-title">示例：列出所有“sk89q”所属或所拥有的地皮</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg list -p sk89q</span></span></code></pre></div></div><h2 id="区域设置选项" tabindex="-1">区域设置选项 <a class="header-anchor" href="#区域设置选项" aria-label="Permalink to &quot;区域设置选项&quot;">​</a></h2><h3 id="标志-1" tabindex="-1">标志 <a class="header-anchor" href="#标志-1" aria-label="Permalink to &quot;标志&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg flag &lt;区域名称&gt; &lt;标志名称&gt; [-w &lt;世界名称&gt;] [-g &lt;权限组&gt;] [-e] [&lt;值&gt;]</span></span>
<span class="line"><span>/rg f (...)</span></span></code></pre></div><p>为区域设置特定的标志（见“区域标志”章节获得更多信息）</p><p>若要取消设置指定标志的值，将值的参数留空即可。</p><p>若要将指定标志设定为空值，则需要使用 <code>-e</code>。这在设置诸如 <code>greeting</code> 等需要为空值的标志时很有用，以让其覆盖优先级更低、不同且更大的区域。如果指定了 <code>-e</code> 且设置了值，那么无论这个值是什么，它都会被忽略。</p><ul><li><code>-g &lt;区域组&gt;</code> 用于指定区域组（见“区域标志”章节）；</li><li><code>-e</code> 用于设置空白值。</li></ul><div class="info custom-block"><p class="custom-block-title">示例：将“mall”区域的<code>pvp</code>标志对“非成员玩家”设置为“deny”</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg flag mall pvp -g nonmembers deny</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">示例：取消“mall”区域设置的<code>greeting</code>标志值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg flag mall greeting</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">示例：将“mall”的<code>gerrting</code>标志的值设置为空白</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg flag mall greeting -e</span></span></code></pre></div></div><h3 id="优先级" tabindex="-1">优先级 <a class="header-anchor" href="#优先级" aria-label="Permalink to &quot;优先级&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg setpriority [-w &lt;世界名称&gt;] &lt;区域命名&gt; &lt;优先级值&gt;</span></span>
<span class="line"><span>/rg priority (...)</span></span>
<span class="line"><span>/rg pri (...)</span></span></code></pre></div><p>为区域设置优先级。见“优先级与继承”章节来获得更多描述。 区域的默认优先级为 0。</p><h3 id="设置父区域" tabindex="-1">设置父区域 <a class="header-anchor" href="#设置父区域" aria-label="Permalink to &quot;设置父区域&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg setparent [-w &lt;世界名称&gt;] &lt;区域命名&gt; [&lt;父区域名称&gt;]</span></span>
<span class="line"><span>/rg parent (...)</span></span>
<span class="line"><span>/rg par (...)</span></span></code></pre></div><p>为指定区域设置父区域。见“优先级与继承”章节来获取更多信息。</p><p>若要取消设置父区域的优先级，不填写指定父区域参数即可。</p><div class="info custom-block"><p class="custom-block-title">示例：将“plot1”的父区域设置为“mall”</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg setparent plot1 mall</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">示例：去除“plot1”的父区域</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg setparent plot1</span></span></code></pre></div></div><h2 id="杂项命令" tabindex="-1">杂项命令 <a class="header-anchor" href="#杂项命令" aria-label="Permalink to &quot;杂项命令&quot;">​</a></h2><h3 id="传送" tabindex="-1">传送 <a class="header-anchor" href="#传送" aria-label="Permalink to &quot;传送&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg teleport [-c] [-s] &lt;区域命名&gt;</span></span>
<span class="line"><span>/rg tp (...)</span></span></code></pre></div><p>将你传送至区域内指定的 <code>spawn</code> 或 <code>location</code> 位置。</p><ul><li><code>-s</code> 参数表示优先选择 spawn 标志；</li><li><code>-c</code> 参数表示在两个标志都未设置的时候，将你传送至区域的物理中心。这需要你处于观察者模式。</li></ul><h2 id="管理命令" tabindex="-1">管理命令 <a class="header-anchor" href="#管理命令" aria-label="Permalink to &quot;管理命令&quot;">​</a></h2><h3 id="载入" tabindex="-1">载入 <a class="header-anchor" href="#载入" aria-label="Permalink to &quot;载入&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg load [-w &lt;世界名称&gt;]</span></span>
<span class="line"><span>/rg reload (...)</span></span></code></pre></div><p>重载并读取来自数据库或文件存储的区域数据。如果最近修改的区域数据是在游戏内进行的，这可能会造成数据丢失。</p><p>载入操作一般需要后台执行，且这不会使服务器停滞。如果命令在前一次加载完成之前再次执行，新的载入操作会进入排队状态。这里对排队的操作有硬性的最大数量限制。</p><h3 id="保存" tabindex="-1">保存 <a class="header-anchor" href="#保存" aria-label="Permalink to &quot;保存&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg save [-w &lt;世界名称&gt;]</span></span>
<span class="line"><span>/rg write (...)</span></span></code></pre></div><p>将区域数据保存至硬盘。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>区域数据会在每次改动之后自动保存，所以这个命令没有必要手动执行。</p></div><p>保存操作一般在后台执行，且不会使服务器停滞。如果命令在前一次保存完成之前再次执行，新的载入操作会进入排队状态。这里对排队的操作有硬性的最大数量限制。</p><h3 id="数据库迁移" tabindex="-1">数据库迁移 <a class="header-anchor" href="#数据库迁移" aria-label="Permalink to &quot;数据库迁移&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg migratedb &lt;来源&gt; &lt;目标&gt;</span></span></code></pre></div><p>从指定种类的数据存储（见“数据存储”章节）转移至另一种存储方式上。</p><p>这两个参数的位置均接受下列参数：</p><ul><li><code>yaml</code></li><li><code>mysql</code></li></ul><p>迁移不会自动读取服务器——这必须在配置文本中完成。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>请确保在进行迁移操作前备份了文件。</p></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>该操作不会在后台执行且有可能造成服务器卡顿。如果你的服务端核心设置了对宕机的检测，这可能会在服务器运行过程中使之崩溃并阻止数据迁移。若迁移过程被强行终止，你可能需要在进行下次迁移前清空整个目标数据存储对象。</p></div><h3 id="uuid-迁移" tabindex="-1">UUID 迁移 <a class="header-anchor" href="#uuid-迁移" aria-label="Permalink to &quot;UUID 迁移&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg migrateuuid</span></span></code></pre></div><p>将区域数据内的玩家名称转化为 Mojang 的 UUID 格式。</p><p>没有对应 UUID 的玩家名称会在转化过程中保留或删除，取决于你在配置文本中的设置（对应设置项为 <code>keep-names-that-lack-uuids</code>）。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>请确保在进行迁移操作前备份了文件。</p></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>该操作不会在后台执行且有可能造成服务器卡顿。如果你的服务端核心设置了对宕机的检测，这可能会在服务器运行过程中使之崩溃并阻止数据迁移。若迁移过程被强行终止，你可能需要在进行下次迁移前清空整个目标数据存储对象。</p></div><h3 id="迁移区域高度" tabindex="-1">迁移区域高度 <a class="header-anchor" href="#迁移区域高度" aria-label="Permalink to &quot;迁移区域高度&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg migrateheights [-w &lt;世界名称&gt;]</span></span></code></pre></div><p>将存在当前或指定世界物理边界中垂直边界不大于 0 且不小于 255（例如，在 1.16 之前的所有区域）的区域转化为高版本的新世界高度限制格式。</p><p>该功能在从 1.17 迁移至 1.18 或之后的版本且你的区域中包含了在世界高度限制附近的区域时非常有用。需要注意的是，如果你在 1.18 之前的版本设置了超出世界范围的区域，那么在迁移后你仍需手动移动这些位置。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>请确保在进行迁移操作前备份了文件。</p></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>该操作不会在后台执行且有可能造成服务器卡顿。如果你的服务端核心设置了对宕机的检测，这可能会在服务器运行过程中使之崩溃并阻止数据迁移。若迁移过程被强行终止，你可能需要在进行下次迁移前清空整个目标数据存储对象。</p></div>`,115)),e(t),e(l)])}const k=n(c,[["render",d]]);export{m as __pageData,k as default};
