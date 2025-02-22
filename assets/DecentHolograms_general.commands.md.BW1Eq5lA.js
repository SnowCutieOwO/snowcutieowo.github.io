import{_ as e,c as d,o as a,al as o}from"./chunks/framework.CAEutmY3.js";const p=JSON.parse('{"title":"⌨️ 命令","description":"","frontmatter":{},"headers":[],"relativePath":"DecentHolograms/general.commands.md","filePath":"DecentHolograms/general.commands.md"}'),r={name:"DecentHolograms/general.commands.md"};function l(c,t,s,h,n,i){return a(),d("div",null,t[0]||(t[0]=[o('<h1 id="⌨️-命令" tabindex="-1">⌨️ 命令 <a class="header-anchor" href="#⌨️-命令" aria-label="Permalink to &quot;⌨️ 命令&quot;">​</a></h1><p>DecentHolograms 提供的所有命令。</p><p>DecentHolograms 提供了一个使用简单的命令交互界面，允许在不修改配置文件的情况下编辑悬浮字的大多数内容。与此同时，所有的命令都支持 TAB 键补全，进一步提升了使用命令的快捷程度。</p><p><strong>你可以通过下列指令浏览所有命令：</strong></p><ul><li><code>/dh help</code> - 全局帮助。</li><li><code>/dh holograms help</code> - 悬浮字相关帮助。</li><li><code>/dh lines help</code> - 悬浮字行相关帮助。</li><li><code>/dh features help</code> - 悬浮字功能相关帮助。</li></ul><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><p>括号只是用于标注参数的必要性，你最终输入的命令不需要带着它们！</p><table tabindex="0"><thead><tr><th>括号种类</th><th>参数意义</th></tr></thead><tbody><tr><td>尖角括号“<code>&lt;&gt;</code>”</td><td>必须填入的参数。</td></tr><tr><td>方括号“<code>[]</code>”</td><td>可选填入的参数。</td></tr><tr><td>花括号“<code>{}</code>”</td><td>可能填入的值的列举，用 `</td></tr></tbody></table><h2 id="别称" tabindex="-1">别称 <a class="header-anchor" href="#别称" aria-label="Permalink to &quot;别称&quot;">​</a></h2><p>DecentHolograms 由少量的主命令和较多的子命令构成。若要让悬浮字的编辑变得更快捷，我们添加了一些命令的等价用法，使之更为方便。这些等价用法在帮助信息和 TAB 补全中苏处可见，一些重要的等价用法会在下文介绍。</p><table tabindex="0"><thead><tr><th>类型</th><th>（子）命令名称</th><th>等价用法</th></tr></thead><tbody><tr><td>主命令</td><td>/decentholograms</td><td>/holograms、/hologram、/holo、/dh</td></tr><tr><td>悬浮字命令</td><td>holograms</td><td>hologram、holo、h</td></tr><tr><td>悬浮字行命令</td><td>lines</td><td>line、l</td></tr><tr><td>点击操作命令</td><td>features</td><td>feature、f</td></tr><tr><td>悬浮字页命令</td><td>lines</td><td>page、p</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">示例</p><p>为了简化这个命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/decentholograms holograms create demo</span></span></code></pre></div><p>你可以将它简写成：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/dh h c demo</span></span></code></pre></div></div><h2 id="权限" tabindex="-1">权限 <a class="header-anchor" href="#权限" aria-label="Permalink to &quot;权限&quot;">​</a></h2><p>DecentHolograms 提供了一些你可使用的权限。</p><table tabindex="0"><thead><tr><th>权限</th><th>描述</th></tr></thead><tbody><tr><td><code>dh.default</code></td><td>允许使用 <code>/decentholograms</code> 命令（仅可显示插件信息）与 <a href="./general.commands.general.html#dh-version"><code>/dh version</code></a>。</td></tr><tr><td><code>dh.admin</code></td><td>允许使用插件所有命令与子命令。</td></tr><tr><td><code>dh.command</code></td><td>与 <code>dh.admin</code> 相同，允许使用插件所有命令与子命令。</td></tr><tr><td><code>dh.command.&lt;命令&gt;</code></td><td>允许使用插件的指定命令。如 <code>dh.command.version</code> 允许使用 <a href="./general.commands.general.html#dh-version"><code>/dh version</code></a></td></tr><tr><td><code>dh.command.&lt;命令&gt;.&lt;子命令&gt;</code></td><td>允许使用插件的指定子命令。如 <code>dh.command.holograms.create</code> 允许使用 <a href="./general.commands.hologram.html#dh-h-create-名称--l世界名称xyz-内容"><code>/dh holograms create ...</code></a></td></tr></tbody></table>',15)]))}const g=e(r,[["render",l]]);export{p as __pageData,g as default};
