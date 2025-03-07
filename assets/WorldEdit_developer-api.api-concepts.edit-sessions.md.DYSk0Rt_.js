import{_ as t,C as i,c as l,o as p,b1 as h,G as a}from"./chunks/framework.CC7vnuC4.js";const F=JSON.parse('{"title":"会话编辑","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/WorldEdit"},{"title":"会话编辑","link":"/WorldEdit/developer-api.api-concepts.edit-sessions"}]},"headers":[],"relativePath":"WorldEdit/developer-api.api-concepts.edit-sessions.md","filePath":"WorldEdit/developer-api.api-concepts.edit-sessions.md"}'),d={name:"WorldEdit/developer-api.api-concepts.edit-sessions.md"};function k(o,s,E,r,c,g){const e=i("NolebaseGitContributors"),n=i("NolebaseGitChangelog");return p(),l("div",null,[s[0]||(s[0]=h(`<h1 id="会话编辑" tabindex="-1">会话编辑 <a class="header-anchor" href="#会话编辑" aria-label="Permalink to &quot;会话编辑&quot;">​</a></h1><p>一个 <code>EditSession</code> 对象处理获取和放置方块、实体和生物群系相关的配置。它会先建立一个连续区段以正确放置方块。它也参与处理渲染模式、快速模式和缓冲的开启和关闭。每个指定世界的操作都会在某一位置使用一个 <code>EditSession</code> 对象，来确保方块放置的快速和正确完成。</p><p>产生一个 <code>EditSession</code> 最简单的方式就是通过 <code>WorldEdit</code> 类上的 <code>newEditSession(World)</code> 或 <code>newEditSessions(Actor &amp; Locatable)</code> 的辅助方法。使用 <code>newEditSessionBuilder()</code> 完整构建器也有它的缺点。构建器所有的选项，曾经是 <code>EditSessionFactory</code> 的方法，但是可读性更强。若你使用了构建器，不要忘记在末尾调用 <code>build()</code> 来获取实际的 <code>EditSession</code> 对象。</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 从 WorldEdit 世界获取编辑会话</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WorldEdit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newEditSession</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(world)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 从 WorldEdit 世界获取带有操作数量上限的编辑会话</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WorldEdit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newEditSessionBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(world).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">maxBlocks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>会话编辑需要在所有操作完成之后关闭，以此确保操作的任务队列能正常刷新。在关闭之后这些内容将不再可用，只能重新创建一个对象用于之后可能的操作。</p><p>一个简单的关闭 <code>EditSession</code> 方式是使用 <code>try-with-resources</code> 状态：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (EditSession editSession </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldEdit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newEditSession</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(world)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 在这里使用会话编辑 ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当代码执行到退出这块内容时，它会自动关闭/刷新</span></span></code></pre></div><p>若要了解更多信息，请见 Java 教程的“try-with-resources 状态”章节。</p><p>在所有编辑会话被用于方块编辑并关闭轴，它会保存所有的变动。若你想要在稍后撤销这些操作，你可以保留一份编辑会话备用。若要撤销操作，照上文所述，创建一个新的 EditSession，并调用 <code>editSesison.undo(newEditSession)</code> 即可。</p><h2 id="区段堆栈" tabindex="-1">区段堆栈 <a class="header-anchor" href="#区段堆栈" aria-label="Permalink to &quot;区段堆栈&quot;">​</a></h2><p>“区段堆栈”，用于描述许多堆叠在一起的区段，而这些区段会形成一个 <code>EditSession</code> 对象。在堆栈的最底层则是它们会提交变动的 <code>World</code> 对象。区段会被包装在其他区段中，而那些区段会用于 Minecraft 各种奇怪的修复，之后便是第一个事件以 <code>Stage.BEFORE_CHANGE</code> 的状态发起。返回的区段则会被用于 <code>EditSession.rawSetBlock()</code> 中。之后，该区段又会被包装在重排/批处理区段中，其他事件会以 <code>Stage.BEFORE_REORDER</code> 的状态进行。其中返回的区段则会用在 <code>EditSession.smartSetBlock()</code>。之后，这些区段又会被包装在设置变动、蒙版和限制区段，然后最终的事件会以 <code>Stafe.BEFORE_HISTORY</code> 的状态进行。返回的区段再被用于正常的 <code>EditSession.setBlock()</code> 操作。</p><h2 id="编辑会话事件" tabindex="-1">编辑会话事件 <a class="header-anchor" href="#编辑会话事件" aria-label="Permalink to &quot;编辑会话事件&quot;">​</a></h2><p><code>EditSessionEvent</code> 是与 WorldEdit 的变动进行高效对接的方式。它会作为 <code>EditSession</code> 创建的一部分发起，并允许与区段堆栈在上述的多个状态中进行对接。你可以通过注册 WorldEdit 的 eventBus 来监听这一事件。</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WorldEdit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getEventBus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* [1] */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 请确保你导入了 WorldEdit 的 @Subscribe!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Subscribe</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onEditSessionEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(EditSessionEvent </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /* 你需要的状态 */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setExtent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyCustomExtent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExtent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [1]: 你不必使用匿名类, 你也可以在它的单独类下存储你的方法并在这里构建.</span></span></code></pre></div><p>在创建你自己的区段类时，请考虑继承 <code>AbstractDelegateExtent</code>，这会允许你只覆写你想要的方法。别忘了在执行任何实际的操作之后调用正确的 <code>super</code> 方法！</p>`,15)),a(e),a(n)])}const u=t(d,[["render",k]]);export{F as __pageData,u as default};
