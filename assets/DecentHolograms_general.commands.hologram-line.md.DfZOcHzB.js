import{_ as c,C as e,c as a,o as i,b1 as g,G as l}from"./chunks/framework.CC7vnuC4.js";const b=JSON.parse('{"title":"悬浮字行","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/DecentHolograms"},{"title":"悬浮字行","link":"/DecentHolograms/general.commands.hologram-line"}]},"headers":[],"relativePath":"DecentHolograms/general.commands.hologram-line.md","filePath":"DecentHolograms/general.commands.hologram-line.md"}'),n={name:"DecentHolograms/general.commands.hologram-line.md"};function r(s,t,h,p,m,f){const o=e("NolebaseGitContributors"),d=e("NolebaseGitChangelog");return i(),a("div",null,[t[0]||(t[0]=g('<h1 id="悬浮字行" tabindex="-1">悬浮字行 <a class="header-anchor" href="#悬浮字行" aria-label="Permalink to &quot;悬浮字行&quot;">​</a></h1><p>悬浮字行的通用用法与编辑功能</p><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><p>括号只是用于标注参数的必要性，你最终输入的命令不需要带着它们！</p><table tabindex="0"><thead><tr><th>括号种类</th><th>参数意义</th></tr></thead><tbody><tr><td>尖角括号“<code>&lt;&gt;</code>”</td><td>必须填入的参数。</td></tr><tr><td>方括号“<code>[]</code>”</td><td>可选填入的参数。</td></tr><tr><td>花括号“<code>{}</code>”</td><td>可能填入的值的列举，用 `</td></tr></tbody></table><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><p><strong>别称：</strong><code>line</code>、<code>l</code><strong>权限：</strong><code>dh.command.lines</code></p><div class="info custom-block"><p class="custom-block-title">命令帮助</p><p>可输入如下命令来查看所有可用的子命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/dh l help</span></span></code></pre></div></div><h3 id="dh-l-add-悬浮字-页码-内容" tabindex="-1"><code>/dh l add &lt;悬浮字&gt; &lt;页码&gt; [内容]</code> <a class="header-anchor" href="#dh-l-add-悬浮字-页码-内容" aria-label="Permalink to &quot;`/dh l add &lt;悬浮字&gt; &lt;页码&gt; [内容]`&quot;">​</a></h3><p><strong>别称：</strong><code>append</code><strong>权限：</strong><code>dh.command.lines.add</code></p><p>向悬浮字添加一行新的文本。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>[内容]</code> - 新行的默认内容。不填则为[配置文本中 <code>defaults.text</code>] 下的内容。</li></ul><h3 id="dh-l-addflag-悬浮字-页码-行号-标志" tabindex="-1"><code>/dh l addflag &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;标志&gt;</code> <a class="header-anchor" href="#dh-l-addflag-悬浮字-页码-行号-标志" aria-label="Permalink to &quot;`/dh l addflag &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;标志&gt;`&quot;">​</a></h3><p><strong>权限：</strong><code>dh.command.lines.addflag</code></p><p>向悬浮字行添加标志。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>&lt;行号&gt;</code> - 待修改文本所在行号。</li><li><code>&lt;标志&gt;</code> - 添加的标志名称。</li></ul><h3 id="dh-l-align-悬浮字-页码-行1-行2-x-z-xz-facing" tabindex="-1"><code>/dh l align &lt;悬浮字&gt; &lt;页码&gt; &lt;行1&gt; &lt;行2&gt; {X|Z|XZ|FACING}</code> <a class="header-anchor" href="#dh-l-align-悬浮字-页码-行1-行2-x-z-xz-facing" aria-label="Permalink to &quot;`/dh l align &lt;悬浮字&gt; &lt;页码&gt; &lt;行1&gt; &lt;行2&gt; {X|Z|XZ|FACING}`&quot;">​</a></h3><p><strong>权限：</strong><code>dh.command.lines.align</code></p><p>将 <code>&lt;行1&gt;</code> 与 <code>&lt;行2&gt;</code> 在指定方向的轴上对齐。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>&lt;行1&gt;</code> - 第一行的行号。</li><li><code>&lt;行2&gt;</code> - 第二行的行号。</li><li><code>{X|Z|XZ|FACING}</code> - 将 <code>&lt;行1&gt;</code> 与 <code>&lt;行2&gt;</code> 在 X、Z 或 XZ 轴/平面对齐。</li></ul><h3 id="dh-l-edit-悬浮字-页码-行号" tabindex="-1"><code>/dh l edit &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt;</code> <a class="header-anchor" href="#dh-l-edit-悬浮字-页码-行号" aria-label="Permalink to &quot;`/dh l edit &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt;`&quot;">​</a></h3><p><strong>别称：</strong><code>e</code></p><p><strong>权限：</strong><code>dh.command.lines.edit</code></p><p>向你发送一条聊天消息，可通过点击直接在聊天栏生成编辑命令。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>&lt;行号&gt;</code> - 待修改文本所在行号。</li></ul><h3 id="dh-l-height-悬浮字-页码-行号-高度" tabindex="-1"><code>/dh l height &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;高度&gt;</code> <a class="header-anchor" href="#dh-l-height-悬浮字-页码-行号-高度" aria-label="Permalink to &quot;`/dh l height &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;高度&gt;`&quot;">​</a></h3><p><strong>别称：</strong><code>setheight</code></p><p><strong>权限：</strong><code>dh.command.lines.height</code></p><p>设置所在行的高度。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>&lt;行号&gt;</code> - 待修改文本所在行号。</li><li><code>&lt;高度&gt;</code> - 设置的行高，应处于 <code>0.0</code> - <code>2.5</code> 之间。</li></ul><h3 id="dh-l-info-悬浮字-页码-行号" tabindex="-1"><code>/dh l info &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt;</code> <a class="header-anchor" href="#dh-l-info-悬浮字-页码-行号" aria-label="Permalink to &quot;`/dh l info &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt;`&quot;">​</a></h3><p><strong>权限：</strong><code>dh.command.lines.info</code></p><p>显示悬浮字行的有关信息。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>&lt;行号&gt;</code> - 待修改文本所在行号。</li></ul><h3 id="dh-l-insert-悬浮字-页码-行号-内容" tabindex="-1"><code>/dh l insert &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; [内容]</code> <a class="header-anchor" href="#dh-l-insert-悬浮字-页码-行号-内容" aria-label="Permalink to &quot;`/dh l insert &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; [内容]`&quot;">​</a></h3><p><strong>权限：</strong><code>dh.command.lines.insert</code></p><p>在给定行号的下方插入一行新的文本。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>&lt;行号&gt;</code> - 待修改文本所在行号。</li><li><code>[内容]</code> - 新行的默认内容。不填则为[配置文本中 <code>defaults.text</code>] 下的内容。</li></ul><h3 id="dh-l-offsetx-悬浮字-页码-行号-偏移" tabindex="-1"><code>/dh l offsetx &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;偏移&gt;</code> <a class="header-anchor" href="#dh-l-offsetx-悬浮字-页码-行号-偏移" aria-label="Permalink to &quot;`/dh l offsetx &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;偏移&gt;`&quot;">​</a></h3><p><strong>别称：</strong><code>offx</code>、<code>xoff</code>、<code>xoffset</code></p><p><strong>权限：</strong><code>dh.command.lines.offsetx</code></p><p>设置悬浮字行的 X 轴偏移。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>&lt;行号&gt;</code> - 待修改文本所在行号。</li><li><code>&lt;偏移&gt;</code> - 设置的 X 轴偏移，应处于 <code>-2.5</code> - <code>2.5</code> 之间。</li></ul><h3 id="dh-l-offsetz-悬浮字-页码-行号-偏移" tabindex="-1"><code>/dh l offsetz &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;偏移&gt;</code> <a class="header-anchor" href="#dh-l-offsetz-悬浮字-页码-行号-偏移" aria-label="Permalink to &quot;`/dh l offsetz &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;偏移&gt;`&quot;">​</a></h3><p><strong>别称：</strong><code>offz</code>、<code>zoff</code>、<code>zoffset</code></p><p><strong>权限：</strong><code>dh.command.lines.offsetz</code></p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>&lt;行号&gt;</code> - 待修改文本所在行号。</li><li><code>&lt;偏移&gt;</code> - 设置的 Z 轴偏移，应处于 <code>-2.5</code> - <code>2.5</code> 之间。</li></ul><h3 id="dh-l-remove-悬浮字-页码-行号" tabindex="-1"><code>/dh l remove &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt;</code> <a class="header-anchor" href="#dh-l-remove-悬浮字-页码-行号" aria-label="Permalink to &quot;`/dh l remove &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt;`&quot;">​</a></h3><p><strong>别称：</strong><code>del</code>、<code>delete</code>、<code>rem</code></p><p><strong>权限：</strong><code>dh.command.lines.remove</code></p><p>从悬浮字中删除指定行的文本。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>&lt;行号&gt;</code> - 待修改文本所在行号。</li></ul><h3 id="dh-l-removeflag-悬浮字-页码-行号-标志" tabindex="-1"><code>/dh l removeflag &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;标志&gt;</code> <a class="header-anchor" href="#dh-l-removeflag-悬浮字-页码-行号-标志" aria-label="Permalink to &quot;`/dh l removeflag &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;标志&gt;`&quot;">​</a></h3><p><strong>权限：</strong><code>dh.command.lines.removeflag</code></p><p>从悬浮字中删除指定行的标志。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>&lt;行号&gt;</code> - 待修改文本所在行号。</li><li><code>&lt;标志&gt;</code> - Name of the Flag you want to remove.</li></ul><h3 id="dh-l-set-悬浮字-页码-行号-内容" tabindex="-1"><code>/dh l set &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;内容&gt;</code> <a class="header-anchor" href="#dh-l-set-悬浮字-页码-行号-内容" aria-label="Permalink to &quot;`/dh l set &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;内容&gt;`&quot;">​</a></h3><p><strong>权限：</strong><code>dh.command.lines.set</code></p><p>将悬浮字指定行替换为新的内容。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>&lt;行号&gt;</code> - 待修改文本所在行号。</li><li><code>&lt;悬浮字&gt;</code> - 悬浮字行的内容。</li></ul><h3 id="dh-l-setfacing-悬浮字-页码-行号-朝向" tabindex="-1"><code>/dh l setfacing &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;朝向&gt;</code> <a class="header-anchor" href="#dh-l-setfacing-悬浮字-页码-行号-朝向" aria-label="Permalink to &quot;`/dh l setfacing &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; &lt;朝向&gt;`&quot;">​</a></h3><p><strong>别称：</strong><code>facing</code>、<code>face</code><strong>权限：</strong><code>dh.command.lines.setfacing</code></p><p>设置悬浮字的面朝方向（yaw）。仅影响 <code>#HEAD:</code>、<code>#SMALLHEAD:</code> 与 <code>#ENTITY</code> 内容的悬浮字行。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>&lt;行号&gt;</code> - 待修改文本所在行号。</li><li><code>&lt;朝向&gt;</code> - 介于 -180.0 与 180.0 之间的数字角度或固定方向（<code>NORTH</code>、<code>EAST</code>、<code>SOUTH</code> 或 <code>WEST</code>）。</li></ul><h3 id="dh-l-setpermission-悬浮字-页码-行号-权限" tabindex="-1"><code>/dh l setpermission &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; [权限]</code> <a class="header-anchor" href="#dh-l-setpermission-悬浮字-页码-行号-权限" aria-label="Permalink to &quot;`/dh l setpermission &lt;悬浮字&gt; &lt;页码&gt; &lt;行号&gt; [权限]`&quot;">​</a></h3><p><strong>别称：</strong><code>perm</code>、<code>permission</code>、<code>setperm</code></p><p><strong>权限：</strong><code>dh.command.lines.setpermission</code></p><p>设置浏览悬浮字行所需的权限。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑行所在页。</li><li><code>&lt;行号&gt;</code> - 待修改文本所在行号。</li><li><code>[权限]</code> - 显示本行悬浮字所需的权限。留空表示清除所设置的权限。</li></ul><h3 id="dh-l-swap-悬浮字-页码-行1-行2" tabindex="-1"><code>/dh l swap &lt;悬浮字&gt; &lt;页码&gt; &lt;行1&gt; &lt;行2&gt;</code> <a class="header-anchor" href="#dh-l-swap-悬浮字-页码-行1-行2" aria-label="Permalink to &quot;`/dh l swap &lt;悬浮字&gt; &lt;页码&gt; &lt;行1&gt; &lt;行2&gt;`&quot;">​</a></h3><p><strong>权限：</strong><code>dh.command.lines.swap</code></p><p>交换悬浮字内的两行文本。</p><ul><li><code>&lt;悬浮字&gt;</code> - 悬浮字的名称。</li><li><code>&lt;页码&gt;</code> - 页码索引，即待编辑的两行所在页。</li><li><code>&lt;行1&gt;</code> - 第一行的行号。</li><li><code>&lt;行2&gt;</code> - 第二行的行号。</li></ul>',73)),l(o),l(d)])}const x=c(n,[["render",r]]);export{b as __pageData,x as default};
