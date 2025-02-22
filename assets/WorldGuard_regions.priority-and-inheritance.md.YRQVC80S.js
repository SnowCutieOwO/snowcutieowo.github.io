import{_ as e,c as s,o as p,al as l}from"./chunks/framework.CAEutmY3.js";const u=JSON.parse('{"title":"优先级与继承","description":"","frontmatter":{},"headers":[],"relativePath":"WorldGuard/regions.priority-and-inheritance.md","filePath":"WorldGuard/regions.priority-and-inheritance.md"}'),t={name:"WorldGuard/regions.priority-and-inheritance.md"};function i(n,a,o,c,d,r){return p(),s("div",null,a[0]||(a[0]=[l(`<h1 id="优先级与继承" tabindex="-1">优先级与继承 <a class="header-anchor" href="#优先级与继承" aria-label="Permalink to &quot;优先级与继承&quot;">​</a></h1><p>“快速开始”章节提及过，区域是可以重叠的。当存在重叠的区域时，处在其中的玩家必须拥有每块区域的[b]所有[/b]对应权限才可继续建筑。但在优先级与继承的功能出现之后，这些规则就不一定需要遵守了。</p><h2 id="优先级" tabindex="-1">优先级 <a class="header-anchor" href="#优先级" aria-label="Permalink to &quot;优先级&quot;">​</a></h2><p>每个区域默认的优先级为 0，但它可以被改为任何的正负值。更高的数字意味着更高的优先级。有效优先级的范围在 -2147483648 至 2147483647（含）之间，但你可能需要使用更合理的值，例如 -2、10、15 或 100。</p><ul><li>对于成员或可参与建筑行为的玩家：当特定位置存在重叠区域时，只有拥有最高优先级的区域参与玩家权限的检查；</li><li>对于区域标志，最高优先级的区域标志值覆盖低优先级的区域标志值和它的值。</li></ul><p>优先级可以通过命令 <code>/rg setpriority</code> 设置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg setpriority example 5</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">示例：创建一个“pub”区域，只有处在“pub 组”中的玩家才可进行建筑，即使主城出生点已经有区域允许“builder”组玩家建造</p><p>如果你只是创建了一个和主城区域重叠在一起的区域，那么玩家需要同时为“pub”<em>和</em>“builders”组的成员才可继续建造。之后，你需要将 pub 区域设置为更高优先级的权限组。</p><ol><li>圈定 pub 的区域；</li><li>通过下列命令创建“pub”区域：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg define pub</span></span></code></pre></div><ol start="3"><li>将“pub”区域的优先级设置为大于 0 的数字，且要高于主城区域的优先级：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg setpriority pub 10</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">示例：创建一个 PVP 场地中特殊的“治疗”区域，其中禁止 PVP 而该区域外的位置允许。</p><p>这里的目的就是要覆盖 PVP 场地的 <code>pvp = allow</code> 标志。</p><ol><li>圈定治疗区域的范围；</li><li>创建“heal”区域：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg define heal</span></span></code></pre></div><ol start="3"><li>将 <code>pvp</code> 标志设置为 <code>deny</code>：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg flag heal pvp deny</span></span></code></pre></div><ol start="4"><li>将“heal”区域的优先级设置为高于 0 和 PVP 场地的区域优先级的数字：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg setpriority heal 10</span></span></code></pre></div></div><p>注意：因为 <em>deny</em> 会在冲突时覆盖 <em>allow</em>，你实际上并不需要提升“heal”区域的优先级。尽管如此，在你需要用 <em>allow</em> 覆盖 <em>deny</em> 参数设置时仍需设置优先级以实现覆盖。</p><h2 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h2><p>从上一条教程的“pub”区域的例子继续讲，如果你想要 builders 和 pub 成员<em>都</em>能在“pub”区域内建造呢？你可以将 builders 组加入“pub”区域，或者，你也可以让“pub”区域<em>继承</em>来自主城的区域的成员关系。</p><p>当一个区域被设置了父区域时：</p><ul><li>它会继承父区域的成员与拥有者；</li><li><em>若</em>一个标志在该区域内未设置，它会选择使用父区域中对应标志的值；</li></ul><p>这会在下列情况中很有用处：</p><ul><li>它继承了父区域的成员和拥有者等归属关系；</li><li>允许创建一个继承了父区域标志的临时子区域。</li></ul><p>每个区域都可以拥有至多一个父区域。可通过命令 <code>/rg setparent</code> 设置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg setparent region_name parent_name</span></span></code></pre></div><p>若要移除一个父区域，直接输入命令，不需要输入父区域的名称：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg setparent region_name</span></span></code></pre></div><p>WorldGuard 将会检测循环继承关系（译者注：例如甲区域继承了乙区域，而乙区域又继承了甲区域，需注意这种情况并不会实际出现）并自动阻止。</p><div class="info custom-block"><p class="custom-block-title">示例：创建一个包含多块地皮的“mall”区域</p><p>在创建 mall、plot1、plot2 区域之后，在这些地皮上即可设置继承关系：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg setparent plot1 mall</span></span>
<span class="line"><span>/rg setparent plot2 mall</span></span></code></pre></div><p>然后我们需要使一个假想已存在的组“mall_owners”成为“mall”区域的拥有组：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg addowner mall g:mall_owners</span></span></code></pre></div><p>那么“mall”区域的拥有组就可以在地皮内自由建筑。</p><blockquote></blockquote><p>若你向其中的一块地皮添加了成员或拥有者，他们就可以在自己的地皮中建筑：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg addowner plot1 sk89q</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">注意</p><p>非玩家来源，例如活塞，也可以是区域的成员。成员继承关系不只对玩家生效。这意味着在父区域的活塞，也可以将方块推入它们之中的子区域。</p></div><h3 id="临时区域" tabindex="-1">临时区域 <a class="header-anchor" href="#临时区域" aria-label="Permalink to &quot;临时区域&quot;">​</a></h3><p>就像在之前讲过的那样，因为标志是从它们的父区域继承下来的，所以父区域可以作为其他子区域的基础模板。</p><p>也许你会需要创建一个<em>物理上不存在的</em>临时区域，且你不打算用它作保护。一种方法是创建一个“全局区域”，它是没有具体边界的。可通过上文提及的 <code>-g</code> 标志创建一个全局区域：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg define -g plot_template</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">示例：让上述的“mall”示例中的地皮拓展一个“plot_region”临时区域]</p><p>创建一个临时的地皮区域：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg define -g plot_template</span></span></code></pre></div><p>让地皮区域继承这个临时区域的标志：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg setparent plot1 plot_template</span></span>
<span class="line"><span>/rg setparent plot2 plot_template</span></span></code></pre></div><p>让临时区域继承“mall”的标志：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg setparent plot_template mall</span></span></code></pre></div><p>玩家需要能够和“mall”区域中的箱子进行交互。所以，你先要在“mall”区域上对 <code>chest-access</code> 标志进行设置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg flag mall chest-access allow</span></span></code></pre></div><p>然后，现在你需要拒绝每一个地皮区域中的 <code>chest-access</code> 标志。幸运的是，你有可供使用的临时地皮区域，所以输入这条命令即可：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg flag plot_template chest-access deny</span></span></code></pre></div></div><h3 id="继承-or-优先级" tabindex="-1">继承 or 优先级？ <a class="header-anchor" href="#继承-or-优先级" aria-label="Permalink to &quot;继承 or 优先级？&quot;">​</a></h3><p>高优先级的父区域将会覆盖子区域的标志设置，所以继承仅在子区域的优先级不低于父区域优先级时有效。</p><h2 id="区域组和覆盖区域" tabindex="-1">区域组和覆盖区域 <a class="header-anchor" href="#区域组和覆盖区域" aria-label="Permalink to &quot;区域组和覆盖区域&quot;">​</a></h2><p>你可能会觉得，标志可以设置为只对某组玩家生效：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg flag mall pvp -g nonmembers deny</span></span></code></pre></div><p>当这里只有一个区域的时候，可以很清楚地知道哪些玩家是成员，哪些不是。然而，在有多个区域重叠的情况下就很难捋清成员的归属关系了：某个玩家是不是只要是这其中一个区域的成员就行？</p><p>答案是否定的。玩家必须是<em>设置了这个标志的所有</em>区域的成员之一。</p><p>例如，让我们设想这里有两个重叠的区域：</p><ul><li>主城区域，包含 <code>pvp -g nonmembers deny</code> 标志，且没有任何玩家成员；</li><li>市场区域，包含一个叫“sk89q”的成员。</li></ul><p>这个叫“sk89q”的玩家会被禁止 PVP，因为他不是主城区域的成员。</p><h3 id="继承内容" tabindex="-1">继承内容 <a class="header-anchor" href="#继承内容" aria-label="Permalink to &quot;继承内容&quot;">​</a></h3><p>当一个区域设置了父区域时，所有设置的标志和成员关系都会被继承至子区域，所以一个玩家如果是子区域的成员，那他也会是父区域的成员。</p><p>例如，有如下两个区域：</p><ul><li>市场区域，包含 <code>pvp -g nonmembers deny</code> 标志，且没有任何玩家成员；</li><li>一号商店，包含一个叫“sk89q”的成员，标志继承自市场区域。</li></ul><p>问题来了，sk89q 是成员吗？是的，所以他可以在主城区域进行 PVP。</p>`,43)]))}const g=e(t,[["render",i]]);export{u as __pageData,g as default};
