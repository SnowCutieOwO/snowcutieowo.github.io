import{_ as e,c as o,a7 as d,o as a}from"./chunks/framework.Bz4u1pnU.js";const h=JSON.parse('{"title":"悬浮字页","description":"","frontmatter":{},"headers":[],"relativePath":"DecentHolograms/general.commands.hologram-pages.md","filePath":"DecentHolograms/general.commands.hologram-pages.md"}'),l={name:"DecentHolograms/general.commands.hologram-pages.md"};function c(i,t,r,n,g,s){return a(),o("div",null,t[0]||(t[0]=[d('<h1 id="悬浮字页" tabindex="-1">悬浮字页 <a class="header-anchor" href="#悬浮字页" aria-label="Permalink to &quot;悬浮字页&quot;">​</a></h1><p>悬浮字页的通用用法与编辑功能</p><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><p>括号只是用于标注参数的必要性，你最终输入的命令不需要带着它们！</p><table tabindex="0"><thead><tr><th>括号种类</th><th>参数意义</th></tr></thead><tbody><tr><td>尖角括号“<code>&lt;&gt;</code>”</td><td>必须填入的参数。</td></tr><tr><td>方括号“<code>[]</code>”</td><td>可选填入的参数。</td></tr><tr><td>花括号“<code>{}</code>”</td><td>可能填入的值的列举，用 `</td></tr></tbody></table><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><p><strong>别称：</strong><code>page</code>、<code>p</code></p><p><strong>权限：</strong><code>dh.command.pages</code></p><div class="info custom-block"><p class="custom-block-title">命令帮助</p><p>可输入如下命令来查看所有可用的子命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/dh p help</span></span></code></pre></div></div><h3 id="dh-p-actions-悬浮字-页码-点击类型-列表页码" tabindex="-1"><code>/dh p actions &lt;悬浮字&gt; &lt;页码&gt; &lt;点击类型&gt; [列表页码]</code> <a class="header-anchor" href="#dh-p-actions-悬浮字-页码-点击类型-列表页码" aria-label="Permalink to &quot;`/dh p actions &lt;悬浮字&gt; &lt;页码&gt; &lt;点击类型&gt; [列表页码]`&quot;">​</a></h3><p><strong>权限：</strong><code>dh.command.pages.actions</code></p><p>按指定<a href="./general.actions.html#动作类型">点击类型</a>为悬浮字增加点击操作。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 悬浮字所处的页码。</li><li><code>&lt;点击类型&gt;</code> - 悬浮字操作的点击类型。</li><li><code>[列表页码]</code> - 列表中移动至的页码。</li></ul><h3 id="dh-p-add-悬浮字-内容" tabindex="-1"><code>/dh p add &lt;悬浮字&gt; [内容]</code> <a class="header-anchor" href="#dh-p-add-悬浮字-内容" aria-label="Permalink to &quot;`/dh p add &lt;悬浮字&gt; [内容]`&quot;">​</a></h3><p><strong>别称：</strong><code>append</code></p><p><strong>权限：</strong><code>dh.command.pages.add</code></p><p>向悬浮字末尾插入新的一页。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>[内容]</code> - 新页面中的默认内容。默认内容可在 <a href="./general.configuration.config.html"><code>defaults.text</code> 配置</a>中修改。</li></ul><h3 id="dh-p-addaction-悬浮字-页码-点击类型-操作" tabindex="-1"><code>/dh p addaction &lt;悬浮字&gt; &lt;页码&gt; &lt;点击类型&gt; &lt;操作&gt;</code> <a class="header-anchor" href="#dh-p-addaction-悬浮字-页码-点击类型-操作" aria-label="Permalink to &quot;`/dh p addaction &lt;悬浮字&gt; &lt;页码&gt; &lt;点击类型&gt; &lt;操作&gt;`&quot;">​</a></h3><p><strong>权限：</strong><code>dh.command.pages.addaction</code></p><p>向悬浮字页中加入指定 <code>&lt;点击类型&gt;</code> 的 <code>&lt;操作&gt;</code>。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 悬浮字所处的页码。</li><li><code>&lt;点击类型&gt;</code> - 触发此操作的点击类型。</li><li><code>&lt;操作&gt;</code> - 点击执行的操作。</li></ul><h3 id="dh-p-clearactions-悬浮字-页码-点击类型" tabindex="-1"><code>/dh p clearactions &lt;悬浮字&gt; &lt;页码&gt; &lt;点击类型&gt;</code> <a class="header-anchor" href="#dh-p-clearactions-悬浮字-页码-点击类型" aria-label="Permalink to &quot;`/dh p clearactions &lt;悬浮字&gt; &lt;页码&gt; &lt;点击类型&gt;`&quot;">​</a></h3><p><strong>权限：</strong><code>dh.command.pages.clearactions</code></p><p>清理第 <code>&lt;页码&gt;</code> 页中所有 <code>&lt;点击类型&gt;</code> 的操作。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 悬浮字所处的页码。</li><li><code>&lt;点击类型&gt;</code> - 悬浮字操作的点击类型。</li></ul><h3 id="dh-p-insert-悬浮字-页码-内容" tabindex="-1"><code>/dh p insert &lt;悬浮字&gt; &lt;页码&gt; [内容]</code> <a class="header-anchor" href="#dh-p-insert-悬浮字-页码-内容" aria-label="Permalink to &quot;`/dh p insert &lt;悬浮字&gt; &lt;页码&gt; [内容]`&quot;">​</a></h3><p><strong>权限：</strong><code>dh.command.pages.insert</code></p><p>向悬浮字中插入新的一页。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 插入新页面的页码位置。</li><li><code>[内容]</code> - 新页面中的默认内容。默认内容可在 [<code>defaults.text</code> 配置]中修改。</li></ul><h3 id="dh-p-remove-悬浮字-页码" tabindex="-1"><code>/dh p remove &lt;悬浮字&gt; &lt;页码&gt;</code> <a class="header-anchor" href="#dh-p-remove-悬浮字-页码" aria-label="Permalink to &quot;`/dh p remove &lt;悬浮字&gt; &lt;页码&gt;`&quot;">​</a></h3><p><strong>别称：</strong><code>del</code>、<code>delete</code>、<code>rem</code></p><p><strong>权限：</strong><code>dh.command.pages.remove</code></p><p>从悬浮字中删去指定页。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 待移除页的序号。</li></ul><h3 id="dh-p-removeaction-悬浮字-页码-点击类型-序号" tabindex="-1"><code>/dh p removeaction &lt;悬浮字&gt; &lt;页码&gt; &lt;点击类型&gt; &lt;序号&gt;</code> <a class="header-anchor" href="#dh-p-removeaction-悬浮字-页码-点击类型-序号" aria-label="Permalink to &quot;`/dh p removeaction &lt;悬浮字&gt; &lt;页码&gt; &lt;点击类型&gt; &lt;序号&gt;`&quot;">​</a></h3><p><strong>别称：</strong><code>remaction</code></p><p><strong>权限：</strong><code>dh.command.pages.removeaction</code></p><p>删除第 <code>&lt;页码&gt;</code> 页悬浮字中 <code>&lt;点击类型&gt;</code> 的操作。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 悬浮字所处的页码。</li><li><code>&lt;点击类型&gt;</code> - 触发此操作的点击类型。</li><li><code>&lt;序号&gt;</code> - 操作在列表中的序号。</li></ul><h3 id="dh-p-swap-悬浮字-目标页1-目标页2" tabindex="-1"><code>/dh p swap &lt;悬浮字&gt; &lt;目标页1&gt; &lt;目标页2&gt;</code> <a class="header-anchor" href="#dh-p-swap-悬浮字-目标页1-目标页2" aria-label="Permalink to &quot;`/dh p swap &lt;悬浮字&gt; &lt;目标页1&gt; &lt;目标页2&gt;`&quot;">​</a></h3><p><strong>权限：</strong><code>dh.command.pages.swap</code></p><p>将 <code>&lt;目标页1&gt;</code> 与 <code>&lt;目标页2&gt;</code> 交换。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;目标页1&gt;</code> - 第一个目标页的页码。</li><li><code>&lt;目标页2&gt;</code> - 第二个目标页的页码。</li></ul><h3 id="dh-p-switch-悬浮字-页码-玩家名称" tabindex="-1"><code>/dh p switch &lt;悬浮字&gt; &lt;页码&gt; [玩家名称]</code> <a class="header-anchor" href="#dh-p-switch-悬浮字-页码-玩家名称" aria-label="Permalink to &quot;`/dh p switch &lt;悬浮字&gt; &lt;页码&gt; [玩家名称]`&quot;">​</a></h3><p><strong>别称：</strong><code>go</code>、<code>view</code></p><p><strong>权限：</strong><code>dh.command.pages.switch</code></p><p>切换至悬浮字中的其他页。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 浏览页面的页码。</li><li><code>[玩家名称]</code> - 可选参数，表示为指定的玩家切换页面。留空则默认目标为命令执行者。</li></ul>',49)]))}const m=e(l,[["render",c]]);export{h as __pageData,m as default};