import{_ as o,c as l,o as t,b0 as r}from"./chunks/framework.w6NQj85O.js";const g=JSON.parse('{"title":"玩家命令","description":"","frontmatter":{},"headers":[],"relativePath":"LuckPerms/command-usage.user.md","filePath":"LuckPerms/command-usage.user.md"}'),a={name:"LuckPerms/command-usage.user.md"};function s(c,e,d,i,u,p){return t(),l("div",null,e[0]||(e[0]=[r('<h1 id="玩家命令" tabindex="-1">玩家命令 <a class="header-anchor" href="#玩家命令" aria-label="Permalink to &quot;玩家命令&quot;">​</a></h1><p>此为<strong>命令用法</strong>的子页面，<a href="./command-usage">点此返回</a>。</p><p>主页提到的一些关键点：</p><ul><li>在使用 BungeeCord 时应该使用 <code>/lpb</code> 而不是 <code>/lp</code></li><li>在使用 Velocity 时应该使用 <code>/lpv</code> 而不是 <code>/lp</code></li><li>尖括号标注的是必填参数 —— 如 <code>&lt;必选参数&gt;</code></li><li>方括号标注的是可选参数 —— 如 <code>[可选参数]</code></li><li>若要在参数中使用空格，请将参数用双引号包裹 —— 如<code>&quot; &quot;</code></li></ul><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="#lp-user-玩家-info">/lp user &lt;玩家&gt; <code>info</code></a></li><li><a href="./command-usage.permission">/lp user &lt;玩家&gt; <code>permission</code></a></li><li><a href="./command-usage.parent">/lp user &lt;玩家&gt; <code>parent</code></a></li><li><a href="./command-usage.meta">/lp user &lt;玩家&gt; <code>meta</code></a></li><li><a href="#lp-user-玩家-editor">/lp user &lt;玩家&gt; <code>editor</code></a></li><li><a href="#lp-user-玩家-promote-路线-上下文-标志">/lp user &lt;玩家&gt; <code>promote</code> &lt;路线&gt; [上下文...]</a></li><li><a href="#lp-user-玩家-demote-路线-上下文-标志">/lp user &lt;玩家&gt; <code>demote</code> &lt;路线&gt; [上下文...]</a></li><li><a href="#lp-user-玩家-showtracks">/lp user &lt;玩家&gt; <code>showtracks</code></a></li><li><a href="#lp-user-玩家-clear-上下文">/lp user &lt;玩家&gt; <code>clear</code> [上下文...]</a></li><li><a href="#lp-user-玩家-clone-玩家">/lp user &lt;玩家&gt; <code>clone</code> &lt;玩家&gt;</a></li></ul><h2 id="lp-user-玩家-info" tabindex="-1"><code>/lp user &lt;玩家&gt; info</code> <a class="header-anchor" href="#lp-user-玩家-info" aria-label="Permalink to &quot;`/lp user &lt;玩家&gt; info`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.info</code></p><p>显示玩家的信息，包括名称、所属初级权限组、继承的权限组以及当前的上下文内容。</p><h2 id="lp-user-玩家-editor" tabindex="-1"><code>/lp user &lt;玩家&gt; editor</code> <a class="header-anchor" href="#lp-user-玩家-editor" aria-label="Permalink to &quot;`/lp user &lt;玩家&gt; editor`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.editor</code></p><p>为指定权限组打开编辑权限的界面。在改动保存后，界面会显示一条用于应用改动的命令。</p><h2 id="lp-user-玩家-promote-路线-上下文-标志" tabindex="-1"><code>/lp user &lt;玩家&gt; promote &lt;路线&gt; [上下文...] [标志...]</code> <a class="header-anchor" href="#lp-user-玩家-promote-路线-上下文-标志" aria-label="Permalink to &quot;`/lp user &lt;玩家&gt; promote &lt;路线&gt; [上下文...] [标志...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.promote</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;路线&gt;</code> - 晋升的路线名称</li><li><code>[上下文...]</code> - 在 <strong>Flags:</strong> 提升的<a href="./features.context">上下文</a>。</li><li><code>[--dont-add-to-first]</code> - 加入该参数后，若玩家在指定路线中没有父权限组，则命令会执行失败</li><li><code>[-s]</code> - 静默执行，不会在路线上显示玩家进度</li></ul><p>该命令可以手动晋升指定路线上的玩家。首先，命令会先检查玩家是否处在给定上下文的路线中。若玩家不处于该路线，则在不指定上文提及的参数的情况下，他们会被加入该路线的第一个权限组。若他们已处于该路线的多个位置，则命令将会执行失败。在其他情况下，玩家会正常按路线晋升，并会从当前的权限组中移除。若路线会影响到他们的父权限组，它们也会一并改变。</p><h2 id="lp-user-玩家-demote-路线-上下文-标志" tabindex="-1"><code>/lp user &lt;玩家&gt; demote &lt;路线&gt; [上下文...] [标志...]</code> <a class="header-anchor" href="#lp-user-玩家-demote-路线-上下文-标志" aria-label="Permalink to &quot;`/lp user &lt;玩家&gt; demote &lt;路线&gt; [上下文...] [标志...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.demote</code><br><strong>可用参数：</strong></p><ul><li><code>&lt;路线&gt;</code> - 降级的路线名称</li><li><code>[上下文...]</code> - 在 <strong>Flags:</strong> 提升的<a href="./features.context">上下文</a>。</li><li><code>[--dont-add-to-first]</code> - 加入该参数后，若玩家在指定路线中没有父权限组，则命令会执行失败</li><li><code>[-s]</code> - 静默执行，不会在路线上显示玩家进度</li></ul><p>该命令可以手动降级指定路线上的玩家。首先，命令会先检查玩家是否处在给定上下文的路线中。若玩家不处于该路线，则在不指定上文提及的参数的情况下，他们会被加入该路线的第一个权限组。若他们已处于该路线的多个位置，则命令将会执行失败。在其他情况下，玩家会正常按路线晋升，并会从当前的权限组中移除。若路线会影响到他们的父权限组，它们也会一并改变。</p><h2 id="lp-user-玩家-showtracks" tabindex="-1"><code>/lp user &lt;玩家&gt; showtracks</code> <a class="header-anchor" href="#lp-user-玩家-showtracks" aria-label="Permalink to &quot;`/lp user &lt;玩家&gt; showtracks`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.showtracks</code></p><p>显示玩家所处的路线。</p><h2 id="lp-user-玩家-clear-上下文" tabindex="-1"><code>/lp user &lt;玩家&gt; clear [上下文...]</code> <a class="header-anchor" href="#lp-user-玩家-clear-上下文" aria-label="Permalink to &quot;`/lp user &lt;玩家&gt; clear [上下文...]`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.clear</code><strong>可用参数：</strong></p><ul><li><code>[上下文...]</code> - 过滤的上下文内容</li></ul><p>清除玩家的权限、权限组继承关系以及存储的元数据。</p><h2 id="lp-user-玩家-clone-玩家" tabindex="-1"><code>/lp user &lt;玩家&gt; clone &lt;玩家&gt;</code> <a class="header-anchor" href="#lp-user-玩家-clone-玩家" aria-label="Permalink to &quot;`/lp user &lt;玩家&gt; clone &lt;玩家&gt;`&quot;">​</a></h2><p><strong>所需权限：</strong> <code>luckperms.user.clone</code><strong>可用参数：</strong></p><ul><li><code>&lt;玩家&gt;</code> - 另一个玩家的名称</li></ul><p>将玩家数据复制给另一个玩家。</p>',31)]))}const h=o(a,[["render",s]]);export{g as __pageData,h as default};
