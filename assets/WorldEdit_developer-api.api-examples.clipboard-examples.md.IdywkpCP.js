import{_ as i,c as a,o as e,al as n}from"./chunks/framework.ySGSHPST.js";const E=JSON.parse('{"title":"剪贴板示例","description":"","frontmatter":{},"headers":[],"relativePath":"WorldEdit/developer-api.api-examples.clipboard-examples.md","filePath":"WorldEdit/developer-api.api-examples.clipboard-examples.md"}'),l={name:"WorldEdit/developer-api.api-examples.clipboard-examples.md"};function p(t,s,h,d,k,r){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="剪贴板示例" tabindex="-1">剪贴板示例 <a class="header-anchor" href="#剪贴板示例" aria-label="Permalink to &quot;剪贴板示例&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">信息</p><p>该文档讲述的是使用剪贴板的 API。在游戏中使用&amp;对剪贴板功能的解释请转到“剪贴板”章节。</p></div><p>本章节所述概念出现在如下部分的示例中：区域、会话编辑、区段</p><h2 id="复制" tabindex="-1">复制 <a class="header-anchor" href="#复制" aria-label="Permalink to &quot;复制&quot;">​</a></h2><p>复制是创建剪贴板最直接的方法。若要这么做，你需要一个 <code>Region</code> 对象，一个源和目标区段，例如 <code>World</code> 和一个 <code>Clipboard</code> 对象。在本示例中我们会使用一个 <code>CoboidRegion</code> 和一个标准的 <code>BlockArrayClipboard</code>。之后，你所需要做的就是将参数传递至 <code>ForwardExtentCopy</code>，应用配置（例如调用 <code>setCopyingEntities(true)</code> 来复制实体），并调用 <code>Operations.complete</code>。</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CuboidRegion region </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CuboidRegion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(min, max);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BlockArrayClipboard clipboard </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BlockArrayClipboard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(region);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ForwardExtentCopy forwardExtentCopy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ForwardExtentCopy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    world, region, clipboard, region.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getMinimumPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在这里配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Operations.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">complete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(forwardExtentCopy);</span></span></code></pre></div><p>在这之后你可能想要保存这个剪贴板。需要注意的是如果你只是为了将剪贴板再次粘贴而去复制它的话，你应该跳过完全创建一个新剪贴板对象的步骤。你应该为目标世界构建一个 <code>EditSession</code> 并将其传递给 <code>ForwardExtentCopy</code>——它非常适合在区段之间复制方块，甚至是同一区段，并不仅限于剪贴板本身。</p><h2 id="粘贴" tabindex="-1">粘贴 <a class="header-anchor" href="#粘贴" aria-label="Permalink to &quot;粘贴&quot;">​</a></h2><p>粘贴是将方块从 <code>Clipboard</code> 移动到其他 <code>Extent</code>，通常为 <code>World</code> 的方法。若要粘贴，你需要一个目标 <code>Extent</code>（通常来讲，可以是 <code>World</code> 的 <code>EditSession</code>）和一个 <code>Clipboard</code>。通过你的剪贴板创建一个 <code>ClipboardHolder</code>，然后通过调用带有 <code>EditSession</code> 的 <code>createPaste</code> 获取一个 <code>PasteBuilder</code>。调用 <code>.to</code> 方法将位置设置在你想要粘贴的位置（实际位置会被剪贴板偏移影响，见上文的“剪贴板”章节来获取更多信息）。添加其他你想要的配置（蒙版、粘贴实体、粘贴生物群系等），之后调用 <code>build()</code> 方法获取操作。这之后操作就会被完成，所有方块都会被粘贴。需要注意的是如果你需要旋转剪贴板内容，你需要对 <code>ClipboardHolder</code> <em>在</em>调用 <code>createPaste</code> <em>之前</em>使用 <code>setTransform</code>。</p><p>完整示例：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (EditSession editSession </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorldEdit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newEditSession</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(world)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Operation operation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ClipboardHolder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(clipboard)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createPaste</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(editSession)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BlockVector3.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">at</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y, z))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 在这里配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Operations.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">complete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(operation);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>你可能想要在这之前先载入一个剪贴板。</p><h2 id="结构示例" tabindex="-1">结构示例 <a class="header-anchor" href="#结构示例" aria-label="Permalink to &quot;结构示例&quot;">​</a></h2><p>该部分主要讲述结构有关的内容。结构通常指保存的剪贴板内容，而不是内存中的剪贴板。</p><h3 id="保存" tabindex="-1">保存 <a class="header-anchor" href="#保存" aria-label="Permalink to &quot;保存&quot;">​</a></h3><p><code>Clipboard</code> 对象可以简单地保存至本地。你所要准备的就是一个 <code>ClipboardFormat</code>，一个 <code>Clipboard</code> 和一个 <code>OutputStream</code>。之后，你可以按格式调用 <code>getWriter</code> 并在其上以你的 <code>Clipboard</code> 进行 <code>write</code> 操作。下文为将剪贴板保存为文件的示例：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">File file </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /* 需要保存至剪贴板的内容 */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ClipboardWriter writer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BuiltInClipboardFormat.SPONGE_SCHEMATIC.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWriter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FileOutputStream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file))) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    writer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(clipboard);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="载入" tabindex="-1">载入 <a class="header-anchor" href="#载入" aria-label="Permalink to &quot;载入&quot;">​</a></h3><p>载入一个 <code>Clipboard</code> 也很简单。你可以强制指定一个 <code>ClipboardFormat</code>，或让 WorldEdit 自行发现你想要载入的结构文件。示例如下文所示。之后你就可以在格式上调用 <code>getReader</code>，并在读取器上执行 <code>read</code> 方法，以获取一个 <code>Clipboard</code> 实例。</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Clipboard clipboard;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ClipboardFormat format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ClipboardFormats.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findByFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ClipboardReader reader </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> format.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getReader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FileInputStream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file))) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clipboard </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">read</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 在这里使用剪贴板 */</span></span></code></pre></div>`,20)]))}const c=i(l,[["render",p]]);export{E as __pageData,c as default};
