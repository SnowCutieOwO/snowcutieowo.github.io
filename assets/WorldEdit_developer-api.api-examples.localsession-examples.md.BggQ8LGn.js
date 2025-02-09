import{_ as i,c as a,o as n,al as l}from"./chunks/framework.ySGSHPST.js";const o=JSON.parse('{"title":"LocalSession 示例","description":"","frontmatter":{},"headers":[],"relativePath":"WorldEdit/developer-api.api-examples.localsession-examples.md","filePath":"WorldEdit/developer-api.api-examples.localsession-examples.md"}'),h={name:"WorldEdit/developer-api.api-examples.localsession-examples.md"};function p(t,s,e,k,E,r){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="localsession-示例" tabindex="-1">LocalSession 示例 <a class="header-anchor" href="#localsession-示例" aria-label="Permalink to &quot;LocalSession 示例&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">信息</p><p>该文档讲述的是使用会话数据的 API。在游戏对会话功能的解释请转到“<a href="./usage.general.sessions.html">会话</a>”章节。对 LocalSession API 的概述请转到“<a href="./developer-api.api-concepts.local-sessions.html">本地会话</a>”章节。</p></div><p>本章节所述概念出现在如下部分的示例中：操作方、区域、本地会话、适配器。</p><h2 id="获取-localsession" tabindex="-1">获取 LocalSession <a class="header-anchor" href="#获取-localsession" aria-label="Permalink to &quot;获取 LocalSession&quot;">​</a></h2><p>在获取 LocalSession 前，你需要先拥有一个指定操作方的会话。通常来讲，操作方会被适配器通过各服务端核心不同的类型自动收集。在下文的示例中，我们会使用 Bukkit 提供的 <code>org.bukkit.entity.Player</code> 对象。</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">org.bukkit.entity.Player player </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 根据服务端不同而有差异的玩家类, 通常会从命令、事件等内容中被收集.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Player actor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BukkitAdapter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adapt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// WorldEdit 的本地 Player 类, 继承了 Actor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SessionManager manager </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldEdit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSessionManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalSession localSession </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> manager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(actor);</span></span></code></pre></div><p>现在你已经拥有了一个会话，你可以对它做很多事情。</p><h2 id="获取玩家会话" tabindex="-1">获取玩家会话 <a class="header-anchor" href="#获取玩家会话" aria-label="Permalink to &quot;获取玩家会话&quot;">​</a></h2><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 按上文示例获取一个 LocalSession 对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalSession localSession </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Region region; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 声明区域变量 region</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 注意: 所处世界并不需要与玩家相同, 见“概念”章节</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">World selectionWorld </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localSession.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSelectionWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (selectionWorld </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IncompleteRegionException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    region </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localSession.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSelection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(selectionWorld);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (IncompleteRegionException </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    actor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(TextComponent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Please make a region selection first.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 你现在就可以将区域对象用于编辑, 例如检查指定形状等. */</span></span></code></pre></div><h2 id="获取玩家剪贴板" tabindex="-1">获取玩家剪贴板 <a class="header-anchor" href="#获取玩家剪贴板" aria-label="Permalink to &quot;获取玩家剪贴板&quot;">​</a></h2><p>正如“剪贴板示例”中所见的那样，你可以复制一片区域或载入的结构来创建一个剪贴板对象，你可以将这个剪贴板对象粘贴，或将其保存为结构文件。为了能在代码层面进行交互，这些已经足够，但有些时候你可能需要与某个玩家的剪贴板直接交互。在这种情况下，你就可以通过 <code>LocalSession</code> 获取或修改玩家的剪贴板内容。</p><p>示例 1：设置玩家的剪贴板</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalSession localSession </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如第一个示例那般获取一个 LocalSession 对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Clipboard clipboard </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如上文所述般, 载入一个结构或复制一片区域</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">localSession.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setClipboard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ClipboardHolder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(clipboard));</span></span></code></pre></div><p>示例 2：获取玩家的剪贴板</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalSession localSession </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如第一个示例那般获取一个 LocalSession 对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ClipboardHolder clipboard; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 声明变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clipboard </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localSession.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getClipboard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (EmptyClipboardException </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    actor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(TextComponent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Your clipboard is empty.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 你现在可以将剪贴板粘贴在某处, 或将其保存为结构等. */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 额外示例: 旋转玩家剪贴板的内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AffineTransform transform </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AffineTransform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">clipboard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTransform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(clipboard.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTransform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">combine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(transform.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rotateY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span></code></pre></div><h2 id="在玩家的操作历史中存储-editsession-对象" tabindex="-1">在玩家的操作历史中存储 EditSession 对象 <a class="header-anchor" href="#在玩家的操作历史中存储-editsession-对象" aria-label="Permalink to &quot;在玩家的操作历史中存储 EditSession 对象&quot;">​</a></h2><p>在代码中创建和使用 EditSession 并修改了一些方块之后，你也许想要将这些改动存储在玩家的历史记录上，以便他们稍后能使用 <code>//undo</code> 进行撤销操作。</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalSession localSession </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如第一个示例那般获取一个 LocalSession 对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EditSession editSession </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 之前使用过的编辑会话</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">localSession.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remember</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(editSession);</span></span></code></pre></div>`,18)]))}const g=i(h,[["render",p]]);export{o as __pageData,g as default};
