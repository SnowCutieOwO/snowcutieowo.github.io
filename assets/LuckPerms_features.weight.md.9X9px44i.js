import{_ as a,c as t,o,al as r}from"./chunks/framework.CAEutmY3.js";const u=JSON.parse('{"title":"权重","description":"","frontmatter":{},"headers":[],"relativePath":"LuckPerms/features.weight.md","filePath":"LuckPerms/features.weight.md"}'),l={name:"LuckPerms/features.weight.md"};function s(i,e,n,c,d,h){return o(),t("div",null,e[0]||(e[0]=[r('<h1 id="权重" tabindex="-1">权重 <a class="header-anchor" href="#权重" aria-label="Permalink to &quot;权重&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>权重是 LuckPerms 的一个重要功能，可以用来解决潜在的优先级冲突。</p><p>LuckPerms 中有两个独立且互不依赖的权重，即<a href="#权限组权重">权限组权重</a>与<a href="#元数据权重">元数据权重</a>（如前后缀）。</p><p>在所有情况下，<strong>权重越高，优先级越大</strong></p><ul><li>在设置权重时，推荐在组之间留一些数值间隔，例如 0 与 100 而不是 0 与 1。这可以让你在插入新内容时不必费劲重写权重。</li><li>权重可以是任何整数，负数也是！</li></ul><h2 id="权限组权重" tabindex="-1">权限组权重 <a class="header-anchor" href="#权限组权重" aria-label="Permalink to &quot;权限组权重&quot;">​</a></h2><p>权限组权重在玩家有多个权限组且存在相同权限时决定了哪个组的优先级更大。看个例子或许能更好理解：</p><ul><li>假设玩家在一个默认组与一个叫“admin”的组，每个组里各有一个 <code>essentials.fly</code><sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> 权限。</li><li>默认组中，<code>essentials.fly</code> 的权限状态是 <code>false</code>，而在“admin”组中，它的状态为 <code>true</code>。在不设置权重的情况下，权限状态不一，很难判断——也就是说无法知道玩家是否可以使用飞行命令。</li><li>这时就该<strong>权重</strong>出手了。将默认权限组的权重设置为高于“admin”组权重的值，最终表现为玩家<strong>不能</strong>飞行。反之则玩家<strong>能</strong>飞行。</li></ul><p>与此相似，若玩家有多个组，权重最高的权限组会覆盖权重较低权限组中的重复权限。</p><h3 id="设置权限组权重" tabindex="-1">设置权限组权重 <a class="header-anchor" href="#设置权限组权重" aria-label="Permalink to &quot;设置权限组权重&quot;">​</a></h3><p>这里有两种方式为权限组设置权重：通过<a href="./command-usage.group.html#lp-group-权限组-setweight-权重">命令</a>，或使用<a href="./features.web-editor.html#luckperms-节点">编辑器</a>。</p><ul><li>若使用前者，你需要输入 <code>/lp group &lt;权限组&gt; setweight &lt;权重&gt;</code> 命令。</li><li>若使用后者，你需要向权限组中添加 <code>weight.&lt;权重数值&gt;</code> 权限。</li></ul><h2 id="元数据权重" tabindex="-1">元数据权重 <a class="header-anchor" href="#元数据权重" aria-label="Permalink to &quot;元数据权重&quot;">​</a></h2><p>元数据权重与权限组权重相似，但它们是用在前后缀上的。与权限组的生效方式相同，在玩家有多个前缀或后缀时，只显示权重最高的前缀或后缀。</p><h3 id="设置元数据权重" tabindex="-1">设置元数据权重 <a class="header-anchor" href="#设置元数据权重" aria-label="Permalink to &quot;设置元数据权重&quot;">​</a></h3><p>这里有两种方法为前后缀设置权重：通过<a href="./command-usage.meta.html#lp-usergroup-玩家权限组-meta-setprefix-权重-前缀-上下文">命令</a>，或使用<a href="./features.web-editor.html#luckperms-节点">编辑器</a>。</p><ul><li>若使用前者，你只需在向玩家或权限组添加前后缀时使用如下命令即可：<br><code>/lp user/group &lt;玩家|权限组&gt; meta setprefix/addprefix &lt;权重&gt; &lt;前缀&gt;</code></li><li>若使用后者，你可以在玩家或权限组中添加或修改 <code>prefix.&lt;权重&gt;.&lt;前缀&gt;</code> 节点来改变权重。后缀的修改方式与此相同。</li></ul><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>这是一条来自于 Essentials/EssentialsX 的权限，给予后可使用 <code>/fly</code> 命令。 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',20)]))}const p=a(l,[["render",s]]);export{u as __pageData,p as default};
