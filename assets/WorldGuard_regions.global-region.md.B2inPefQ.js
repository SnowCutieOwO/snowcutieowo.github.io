import{_ as o,c as a,o as d,al as s}from"./chunks/framework.ySGSHPST.js";const u=JSON.parse('{"title":"全局区域","description":"","frontmatter":{},"headers":[],"relativePath":"WorldGuard/regions.global-region.md","filePath":"WorldGuard/regions.global-region.md"}'),l={name:"WorldGuard/regions.global-region.md"};function t(r,e,c,i,p,n){return d(),a("div",null,e[0]||(e[0]=[s('<h1 id="全局区域" tabindex="-1">全局区域 <a class="header-anchor" href="#全局区域" aria-label="Permalink to &quot;全局区域&quot;">​</a></h1><p>全局区域是一个特殊的区域，有以下特点：</p><ul><li>覆盖整个世界；</li><li>优先级在所有区域中默认最低；</li><li>有一些特殊的行为。</li></ul><p>每个世界都有其特殊的全局区域。但是，全局区域在你尝试通过变量 <code>__global__</code> 修改区域前不会存在。</p><p>例如，对全局区域的任意标志修改都会自动创建该全局区域：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/rg flag __global__ pvp deny</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><p>鉴于全局区域是一个覆盖整个世界的区域，在全局区域上设置的标志，除了极小部分的标志外，都像正常区域中的标志一样工作。</p><p>但是，不像普通的区域，<code>passthrough</code> 区域标志默认是 <em>allow</em> 状态。如果你回想起来，将 passthrough 设置为 allow 会使得该区域不可被保护，所以玩家可以在全局区域内自由建筑，除非有其他区域阻止了该行为。</p><h3 id="修改-passthrough" tabindex="-1">修改 <code>passthrough</code> <a class="header-anchor" href="#修改-passthrough" aria-label="Permalink to &quot;修改 `passthrough`&quot;">​</a></h3><p>如果你修改了 <code>passthrough</code> 标志位 deny，让全局区域像普通区域一样工作，那么玩家必须是区域的成员或拥有者才可在其中建造。这是因为全局区域代表着全世界，而这又意味着建筑权限是默认关闭的。</p><p>因为全局区域是被考虑为优先级最低的区域，其他任何正常圈定并定义的区域设置的标志都会正常覆盖全局区域的标志设置，所以玩家如果是其中一个区域的成员，那么玩家就可在他所属的区域中进行建筑。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>passthrough 标志与移动完全无关。它的意思是“无视建筑权限”，在“<a href="./regions.region-flags.html">区域标志</a>”章节有更多介绍。</p></div><div class="info custom-block"><p class="custom-block-title">示例：在“wilderness”区域禁止建造</p><p>可以将区域的 <code>passthrough</code> 标志设置为 <code>deny</code>。</p></div><h3 id="添加成员" tabindex="-1">添加成员 <a class="header-anchor" href="#添加成员" aria-label="Permalink to &quot;添加成员&quot;">​</a></h3><p>出于旧版原因，为全局区域添加成员或拥有者会自动将 <code>passthrough</code> 标志设置为 deny。这意味着你不需要修改标志，尽管它是推荐修改的。</p><h3 id="非玩家来源" tabindex="-1">非玩家来源 <a class="header-anchor" href="#非玩家来源" aria-label="Permalink to &quot;非玩家来源&quot;">​</a></h3><p>非玩家来源，例如活塞，是大部分区域的成员，或是拥有最高优先级的区域成员，具体取决于配置文本中 <code>use-max-priority-association</code> 的设置值。无论如何，非玩家来源在它们处于任意一个非全局区域的区域中的情况下，就不再是全局区域的成员。这意味着例如活塞，不能从区域内部将一个方块推向另一个受到保护的全局区域。尽管全局区域一般都按照 <code>use-max-priority-association</code> 设置为 <code>true</code> 的情况工作。</p><p>非玩家来源的成员关系可以通过区域的 <code>nonplayer-protection-domains</code> 标志进行设置。但是，这个标志在全局区域的工作方式略有不同。如果存在至少一个包含了一个正常区域和全局区域的领域，那么作为正常区域成员的非玩家来源会成为全局区域的成员，而反之则不然。</p><h3 id="建筑标志" tabindex="-1">建筑标志 <a class="header-anchor" href="#建筑标志" aria-label="Permalink to &quot;建筑标志&quot;">​</a></h3><p>将 <code>build</code> 标志设置为 <code>allow</code> <strong>不会</strong>产生任何影响，因为没有任何理由让这个标志在这个状态下进行必要的操作。将这个标志设置为 <code>deny</code> 会让它像其他区域一样对内部结构进行保护，但需要注意的是在任何区域上将 <code>build</code> 设置为 deny 基本意味着<em>没有什么东西</em>可以破坏或放置方块，包括诸如活塞一类的方块。另外全局区域已经保护了整个世界，在这种情况下则会让区域外的所有活塞都无法使用。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>非常不推荐对全局区域设置 <code>build</code> 标志。如果你要默认保护全世界，那么应该设置 <code>passthrough</code>。</p></div><h2 id="默认覆盖" tabindex="-1">默认覆盖 <a class="header-anchor" href="#默认覆盖" aria-label="Permalink to &quot;默认覆盖&quot;">​</a></h2><p>在 WorldGuard 中的标志默认带有<em>结果</em>。例如，<code>exp-drop</code> 标志在没有区域指定该标志的情况下的值是 allow，这也就意味着即便玩家不是该区域的成员或拥有者，他在击杀其中的生物时仍然可以得到经验球。</p><p>若你需要通过将值设置为 <code>deny</code> 来覆盖标志的默认值，且需要将其对非成员玩家生效，那么将其设置在全局区域不会奏效。例如，你也许会试着输入命令 <code> /rg flag __global__ exp-drop -g nonmembers deny</code>，但它<strong>就是不会</strong>正常工作。当你指定了非成员玩家参数，它通常表示<em>全局区域</em>内的非成员玩家。因此，假如你做了一个地皮区域，地皮成员击杀生物等的行为将不会获得经验，因为地皮的成员实际上不是全局区域的成员（请记住，全局区域的优先级是最低的。且区域不会自动继承全局区域所设置的标志，因此这个标志不会跟随已设置的值）。</p><p>在这种情况下，推荐你创建一个在“优先级与继承”章节所讲到的“临时区域”。</p>',26)]))}const g=o(l,[["render",t]]);export{u as __pageData,g as default};
