import{_ as a,o as t,c as l,a7 as s}from"./chunks/framework.DSL0mkng.js";const h=JSON.parse('{"title":"默认组","description":"","frontmatter":{},"headers":[],"relativePath":"LuckPerms/features.default-groups.md","filePath":"LuckPerms/features.default-groups.md"}'),r={name:"LuckPerms/features.default-groups.md"};function o(p,e,i,n,d,u){return t(),l("div",null,e[0]||(e[0]=[s(`<h1 id="默认组" tabindex="-1">默认组 <a class="header-anchor" href="#默认组" aria-label="Permalink to &quot;默认组&quot;">​</a></h1><p>我们在 LuckPerms 中处理默认玩家与默认组的方式可能是最受诟病的部分了。最近我们添加了一些额外/相似的功能，让插件在控制角度能比其他插件更有操作空间，希望这能拉回一点人气。</p><h2 id="如何开始" tabindex="-1">如何开始 <a class="header-anchor" href="#如何开始" aria-label="Permalink to &quot;如何开始&quot;">​</a></h2><p>这里是我们的思路。</p><p>在你的服务器中，玩家可能会被分为两类：</p><ol><li>标准玩家。</li><li>被加入了不同组或拥有额外权限的玩家。</li></ol><p>你不想要浪费宝贵的硬盘空间来存储第一类玩家。你只想要存储管理员，以及那些特殊玩家的数据。正常的“玩家”就是那样的。没有必要为他们存储任何额外的权限数据。</p><p>我们碰到的下一个问题就是如何决定玩家是否为“普通”玩家。想象你处于下面的情况中：</p><ol><li>默认组设置为“default”。在玩家加入时他们会被默认分配至这个组，并被保存。</li><li>在一段时间以后，你想将这个默认组的名称修改为“member”。</li><li>你现在不仅需要处理“default”组中的玩家，还要面对所有“member”组中的玩家。非常不好。</li></ol><p>即便我们不保存“普通”玩家，这些问题还是会出现：</p><ol><li>默认组设置为“default”。</li><li>你想要给予“Notch”一个特殊的“essentials.fly”权限。Notch 的权限保存之后，他是“default”组的成员，也拥有特殊的飞行权限。</li><li>然后你编辑了默认组。所有“普通”玩家都进入了新的默认组，但 Notch 还处在老的默认组中！</li></ol><p>出于这种原因，我们让默认组变得<strong>不可</strong>配置了。这让所有人都省事了，挺好的！但是，有时候这还是会相当恼人，我们能理解。</p><p>你可以作出如下选择。</p><h2 id="保持默认组-但改变-显示名称" tabindex="-1">保持默认组，但改变“显示名称” <a class="header-anchor" href="#保持默认组-但改变-显示名称" aria-label="Permalink to &quot;保持默认组，但改变“显示名称”&quot;">​</a></h2><p>出于如上原因，我们非常推荐你保持默认组。</p><p>然后，只需输入 <code>/lp group default setdisplayname &lt;名称&gt;</code> 设置显示名称！</p><h2 id="设置继承" tabindex="-1">设置继承 <a class="header-anchor" href="#设置继承" aria-label="Permalink to &quot;设置继承&quot;">​</a></h2><p>这个选项表示所有玩家仍处于“default”组中。但是会被分配一个父权限组，所以它能继承不同名称的权限组数据。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/lp creategroup member</span></span>
<span class="line"><span>/lp group default parent add member</span></span></code></pre></div>`,19)]))}const f=a(r,[["render",o]]);export{h as __pageData,f as default};