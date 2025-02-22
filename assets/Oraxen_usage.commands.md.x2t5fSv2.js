import{_ as e,c as s,o as n,al as t}from"./chunks/framework.CAEutmY3.js";const p="/assets/image.-zYQxzDY.png",u=JSON.parse('{"title":"命令","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/usage.commands.md","filePath":"Oraxen/usage.commands.md"}'),o={name:"Oraxen/usage.commands.md"};function i(l,a,r,c,d,h){return n(),s("div",null,a[0]||(a[0]=[t(`<h1 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h1><p>插件命令的简单解释</p><h2 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-label="Permalink to &quot;概览&quot;">​</a></h2><p>所有 Oraxen 都以同一内容开头，即 <code>oraxen</code>。如果你不想这么麻烦，可以将其替换为 <code>/oxn</code>，甚至更短的 <code>/o</code>。</p><p>在本章节的教程中我们会使用最短的缩写 <code>/o</code>，如果这个简写出于各种原因不能使用，你仍可以输入 <code>/oxn</code> 或 <code>/oraxen</code> 使用插件功能。</p><h2 id="获取物品" tabindex="-1">获取物品 <a class="header-anchor" href="#获取物品" aria-label="Permalink to &quot;获取物品&quot;">​</a></h2><h3 id="用于测试" tabindex="-1">用于测试 <a class="header-anchor" href="#用于测试" aria-label="Permalink to &quot;用于测试&quot;">​</a></h3><p>这个方法最大的好处是它允许你一次性浏览所有物品，就像创造模式那样高效（只需点击即可让物品进入物品栏）。但你不能通过这个功能将物品给予其他玩家（例如商店中不能使用这个命令作为给予玩家对应物品的操作）</p><p><strong>命令用法：</strong> <code>/oraxen inventory</code></p><p><strong>所需权限：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>oraxen.command.inventory.view # 允许访问全物品界面</span></span>
<span class="line"><span>oraxen.command.inventory.give # 允许从这个界面中拿出物品</span></span>
<span class="line"><span>oraxen.command.inventory.* # 包含上两条权限的功能</span></span></code></pre></div><h4 id="正确给予" tabindex="-1">正确给予 <a class="header-anchor" href="#正确给予" aria-label="Permalink to &quot;正确给予&quot;">​</a></h4><p>当你想要给予玩家物品时，使用这条命令才是对的。若目标的背包已满，则物品会掉在地上。</p><p><strong>命令用法：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/oraxen give &lt;玩家&gt; &lt;物品名称&gt; &lt;数量&gt; # 给予玩家指定数量的物品</span></span></code></pre></div><h3 id="修复" tabindex="-1">修复 <a class="header-anchor" href="#修复" aria-label="Permalink to &quot;修复&quot;">​</a></h3><h4 id="修复单个物品" tabindex="-1">修复单个物品 <a class="header-anchor" href="#修复单个物品" aria-label="Permalink to &quot;修复单个物品&quot;">​</a></h4><p>这个命令可以修复主手持有的物品。你可以在设置中决定 Oraxen 是否只修复使用了它的耐久系统的物品，或是同样允许修复原版的耐久物品。</p><p><strong>命令用法：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/oraxen repair hand # 修复手中的物品</span></span></code></pre></div><p><strong>所需权限：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>oraxen.command.repair # 允许使用 /o repair 命令</span></span></code></pre></div><h4 id="修复背包内所有物品" tabindex="-1">修复背包内所有物品 <a class="header-anchor" href="#修复背包内所有物品" aria-label="Permalink to &quot;修复背包内所有物品&quot;">​</a></h4><p>这个命令可以修复背包内的所有物品（包括装备栏）。你可以在设置中决定 Oraxen 是否只修复使用了它的耐久系统的物品，或是同样允许修复原版的耐久物品。</p><p><strong>命令用法：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/oraxen repair all # 修复所有的物品（背包内）</span></span></code></pre></div><p><strong>所需权限：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>oraxen.command.repair # 允许使用 /o repair hand 命令</span></span>
<span class="line"><span>oraxen.command.repair.all # 允许使用 /o repair all 命令</span></span></code></pre></div><h2 id="管理配方" tabindex="-1">管理配方 <a class="header-anchor" href="#管理配方" aria-label="Permalink to &quot;管理配方&quot;">​</a></h2><p>这个命令能通过配方管理器在游戏内添加新的合成表。更多信息可见“配方”章节。</p><p><img src="`+p+`" alt="img" title="通过命令 /o recipe show all 显示的配方"></p><p><strong>命令用法：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/oraxen recipe builder &lt;构建器&gt; # 创建 &lt;构建器&gt; 类型的配方并打开</span></span>
<span class="line"><span>/oraxen recipe save &lt;配方&gt; # 以 &lt;名称&gt; 为名称保存配方</span></span>
<span class="line"><span>/oraxen recipe show all # 显示载入的配方</span></span>
<span class="line"><span>/oraxen recipe show &lt;配方&gt; # 显示指定配方</span></span></code></pre></div><p><strong>所需权限：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>oraxen.command.recipes # 允许你通过 /o recipes 命令创建新配方</span></span></code></pre></div><h2 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-label="Permalink to &quot;打包&quot;">​</a></h2><p>这条命令允许你与 Oraxen 纹理包交互：发送指定信息来从网络下载纹理包，或直接从游戏中载入。</p><p><strong>命令用法：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/oraxen pack send &lt;玩家&gt; # 在游戏内将纹理包发送给 &lt;玩家&gt;</span></span>
<span class="line"><span>/oraxen pack msg &lt;玩家&gt; # 向 &lt;玩家&gt; 发送指定消息</span></span></code></pre></div><p><strong>所需权限：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>oraxen.command.pack # 允许使用 /o pack 命令</span></span></code></pre></div><h2 id="物品信息" tabindex="-1">物品信息 <a class="header-anchor" href="#物品信息" aria-label="Permalink to &quot;物品信息&quot;">​</a></h2><p>这个命令允许你输出物品信息与自定义模型数据 ID。</p><p><strong>命令用法：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/oraxen iteminfo &lt;物品名称&gt; # 输出请求的物品信息</span></span></code></pre></div><p><strong>所需权限：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>oraxen.command.iteminfo # 允许使用 /o iteminfo 命令</span></span></code></pre></div><h2 id="重载" tabindex="-1">重载 <a class="header-anchor" href="#重载" aria-label="Permalink to &quot;重载&quot;">​</a></h2><p>这个命令允许你快速而安全地重载 Oraxen 配置（注意不能使用诸如 Plugman 的管理插件重载 Oraxen）。当前尚不支持重载已注册的配方。</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/oraxen reload all # 重载物品配置，重载配方配置，重新生成纹理包并上传</span></span>
<span class="line"><span>/oraxen reload items # 重载物品配置</span></span>
<span class="line"><span>/oraxen reload pack # 重新生成纹理包并上传</span></span>
<span class="line"><span>/oraxen reload recipes # 重载配方配置</span></span></code></pre></div><p><strong>所需权限：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>oraxen.command.reload # 允许使用 /o reload 命令</span></span></code></pre></div><h2 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-label="Permalink to &quot;调试&quot;">​</a></h2><p>我希望你永远不会用到这条命令。但如果你真的在使用 Oraxen 期间遇到了漏洞，我（此指作者）很可能会要求你执行这个命令来获取有关的更多信息。</p><p><strong>命令用法：</strong></p><p>一般需根据实际情况使用，且可能会随 Oraxen 更新而更新。我会在帮助你的时候解释清楚这些的。</p><p><strong>所需权限：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>oraxen.command.debug # 允许使用 /o debug 命令</span></span></code></pre></div>`,59)]))}const b=e(o,[["render",i]]);export{u as __pageData,b as default};
