import{_ as o,c as l,o as r,b0 as t}from"./chunks/framework.w6NQj85O.js";const n=JSON.parse('{"title":"权限组命令","description":"","frontmatter":{},"headers":[],"relativePath":"LuckPerms/command-usage.group.md","filePath":"LuckPerms/command-usage.group.md"}'),a={name:"LuckPerms/command-usage.group.md"};function p(c,e,g,d,s,i){return r(),l("div",null,e[0]||(e[0]=[t('<h1 id="权限组命令" tabindex="-1">权限组命令 <a class="header-anchor" href="#权限组命令" aria-label="Permalink to &quot;权限组命令&quot;">​</a></h1><p>此为<strong>命令用法</strong>的子页面，<a href="./command-usage">点此返回</a>。</p><p>主页提到的一些关键点：</p><ul><li>在使用 BungeeCord 时应该使用 <code>/lpb</code> 而不是 <code>/lp</code></li><li>在使用 Velocity 时应该使用 <code>/lpv</code> 而不是 <code>/lp</code></li><li>尖括号标注的是必填参数 —— 如 <code>&lt;必选参数&gt;</code></li><li>方括号标注的是可选参数 —— 如 <code>[可选参数]</code></li><li>若要在参数中使用空格，请将参数用双引号包裹 —— 如<code>&quot; &quot;</code></li></ul><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="#lp-group-权限组-info">/lp group &lt;权限组&gt; <code>info</code></a></li><li><a href="./command-usage.permission">/lp group &lt;权限组&gt; <code>permission</code></a></li><li><a href="./command-usage.parent">/lp group &lt;权限组&gt; <code>parent</code></a></li><li><a href="./command-usage.meta">/lp group &lt;权限组&gt; <code>meta</code></a></li><li><a href="#lp-group-权限组-editor">/lp group &lt;权限组&gt; <code>editor</code></a></li><li><a href="#lp-group-权限组-listmembers-页码">/lp group &lt;权限组&gt; <code>listmembers</code> [页码]</a></li><li><a href="#lp-group-权限组-setweight-权重">/lp group &lt;权限组&gt; <code>setweight</code> &lt;权重&gt;</a></li><li><a href="#lp-group-权限组-setdisplayname-名称">/lp group &lt;权限组&gt; <code>setdisplayname</code> &lt;名称&gt; [上下文...]</a></li><li><a href="#lp-group-权限组-showtracks">/lp group &lt;权限组&gt; <code>showtracks</code></a></li><li><a href="#lp-group-权限组-clear-上下文">/lp group &lt;权限组&gt; <code>clear</code> [上下文...]</a></li><li><a href="#lp-group-权限组-rename-新名称">/lp group &lt;权限组&gt; <code>rename</code> &lt;新名称&gt;</a></li><li><a href="#lp-group-权限组-clone-复制组名称">/lp group &lt;权限组&gt; <code>clone</code> &lt;复制组名称&gt;</a></li></ul><h2 id="lp-group-权限组-info" tabindex="-1"><code>/lp group &lt;权限组&gt; info</code> <a class="header-anchor" href="#lp-group-权限组-info" aria-label="Permalink to &quot;`/lp group &lt;权限组&gt; info`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.group.info</code><br> 显示指定组的信息。</p><h2 id="lp-group-权限组-editor" tabindex="-1"><code>/lp group &lt;权限组&gt; editor</code> <a class="header-anchor" href="#lp-group-权限组-editor" aria-label="Permalink to &quot;`/lp group &lt;权限组&gt; editor`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.group.editor</code><br> 打开编辑指定权限组权限数据的网页界面。在改动保存后，界面会显示一条用于应用改动的命令。</p><h2 id="lp-group-权限组-listmembers-页码" tabindex="-1"><code>/lp group &lt;权限组&gt; listmembers [页码]</code> <a class="header-anchor" href="#lp-group-权限组-listmembers-页码" aria-label="Permalink to &quot;`/lp group &lt;权限组&gt; listmembers [页码]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.group.listmembers</code><br><strong>可用参数：</strong></p><ul><li><code>[页码]</code> - 浏览的页码</li></ul><p>显示直接继承该组的其他玩家/权限组列表。</p><h2 id="lp-group-权限组-setweight-权重" tabindex="-1"><code>/lp group &lt;权限组&gt; setweight &lt;权重&gt;</code> <a class="header-anchor" href="#lp-group-权限组-setweight-权重" aria-label="Permalink to &quot;`/lp group &lt;权限组&gt; setweight &lt;权重&gt;`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.group.setweight</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;权重&gt;</code> - 设置的权重</li></ul><p>设置权限组的权重，决定了在计算玩家权限时对应组别参与判断的优先级。值更高 = 权重更大。</p><h2 id="lp-group-权限组-setdisplayname-名称" tabindex="-1"><code>/lp group &lt;权限组&gt; setdisplayname &lt;名称&gt;</code> <a class="header-anchor" href="#lp-group-权限组-setdisplayname-名称" aria-label="Permalink to &quot;`/lp group &lt;权限组&gt; setdisplayname &lt;名称&gt;`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.group.setdisplayname</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;名称&gt;</code> - 设置的名称</li><li><code>[上下文...]</code> - 显示该名称的<a href="./features.context">上下文</a></li></ul><p>设置权限组的显示名称。可以用于表示权限组的“别称”。</p><h2 id="lp-group-权限组-showtracks" tabindex="-1"><code>/lp group &lt;权限组&gt; showtracks</code> <a class="header-anchor" href="#lp-group-权限组-showtracks" aria-label="Permalink to &quot;`/lp group &lt;权限组&gt; showtracks`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.group.showtracks</code></p><p>显示该权限组所处的路线位置。</p><h2 id="lp-group-权限组-clear-上下文" tabindex="-1"><code>/lp group &lt;权限组&gt; clear [上下文]</code> <a class="header-anchor" href="#lp-group-权限组-clear-上下文" aria-label="Permalink to &quot;`/lp group &lt;权限组&gt; clear [上下文]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.group.clear</code><br><strong>可用参数：</strong></p><ul><li><code>[上下文...]</code> - 用于过滤的<a href="./features.context">上下文</a></li></ul><p>清除权限组的权限、继承组及元数据内容。</p><h2 id="lp-group-权限组-rename-新名称" tabindex="-1"><code>/lp group &lt;权限组&gt; rename &lt;新名称&gt;</code> <a class="header-anchor" href="#lp-group-权限组-rename-新名称" aria-label="Permalink to &quot;`/lp group &lt;权限组&gt; rename &lt;新名称&gt;`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.group.rename</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;新名称&gt;</code> - 权限组的新名称</li></ul><p>修改权限组的名称。需要注意的是该组内的成员不会被提醒相关变动，并在相关内容中继续使用旧权限组的名称。若你需要更新，你需要使用微调功能来更新现有的数据条目。</p><h2 id="lp-group-权限组-clone-复制组名称" tabindex="-1"><code>/lp group &lt;权限组&gt; clone &lt;复制组名称&gt;</code> <a class="header-anchor" href="#lp-group-权限组-clone-复制组名称" aria-label="Permalink to &quot;`/lp group &lt;权限组&gt; clone &lt;复制组名称&gt;`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.group.clone</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;复制组名称&gt;</code> - 复制后新组的名称</li></ul><p>将已有权限组的数据复制并存入按名称创建的新权限组。</p>',37)]))}const h=o(a,[["render",p]]);export{n as __pageData,h as default};
