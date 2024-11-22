import{_ as e,c as s,a7 as t,o}from"./chunks/framework.Bz4u1pnU.js";const u=JSON.parse('{"title":"绑定工具","description":"","frontmatter":{},"headers":[],"relativePath":"WorldEdit/usage.tools.md","filePath":"WorldEdit/usage.tools.md"}'),i={name:"WorldEdit/usage.tools.md"};function l(n,a,p,d,c,h){return o(),s("div",null,a[0]||(a[0]=[t(`<h1 id="绑定工具" tabindex="-1">绑定工具 <a class="header-anchor" href="#绑定工具" aria-label="Permalink to &quot;绑定工具&quot;">​</a></h1><p>有些时候，你需要一次又一次地执行某些命令，实在让人心烦。WorldEdit 有一些能绑定在物品上的工具，只需鼠标轻轻一点便可完成一次操作。大多数工具是右键激活的，有些工具也会有左键功能。还有一些工具，包括所有的“笔刷”风格的工具，可以远距离使用，具体表现为很远的方块，只需要点一下，对应位置就会进行一次操作，就像你凑近并点了一次那样。</p><p>若要使用绑定工具，你需要在手中持有一个物品，然后通过 <code>/tool [名称]</code> 绑定你想要的工具。如果你输入的工具名称正确，这时候你就会收到工具被绑定在物品上的提示。现在，每次你激活工具（默认是点击上一步骤中你进行绑定操作的物品）时，工具就会执行一次它所对应的操作。<strong>若要解绑工具，将绑定的工具拿在手上并输入命令</strong> <code>/tool none</code> <strong>命令即可。</strong></p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>选区魔杖（默认：木斧，通过命令 <code>/tool selwand</code> 绑定）和导航魔杖（默认：指南针，通过命令 <code>/tool navwand</code> 绑定）从技术上讲都属于工具。它们在“选区”和“导航”章节中都有各自的介绍。你可以将它们如同其他自行绑定的工具那样将它们解绑。</p></div><p>[[tos]]</p><h2 id="工具列表" tabindex="-1">工具列表 <a class="header-anchor" href="#工具列表" aria-label="Permalink to &quot;工具列表&quot;">​</a></h2><h3 id="造林工具" tabindex="-1">造林工具 <a class="header-anchor" href="#造林工具" aria-label="Permalink to &quot;造林工具&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/tool tree [类型]</span></span></code></pre></div><p>该工具将会在你右键方块时生成指定树种的森林。需要注意的是，它使用的是 Minecraft 默认的树木生成器，这意味着它也会有相同的限制——它不能在不可以种植树木的地方生成一棵树，或是穿过固体方块生长（除非原有条件下它们可以自然生长，如新版本的红树）。</p><h3 id="浮空树修复工具" tabindex="-1">浮空树修复工具 <a class="header-anchor" href="#浮空树修复工具" aria-label="Permalink to &quot;浮空树修复工具&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/tool deltree</span></span></code></pre></div><p>服务器里是否到处都是砍树砍一半的玩家留下来的浮空树？这个工具，只需要对着这些树的树干或树叶（或者巨型蘑菇的蘑菇方块）点击一下，即可移除整颗浮空树。该操作不会对仍然与某部分相连的树木（例如地面）产生任何变动。</p><h3 id="方块替换工具" tabindex="-1">方块替换工具 <a class="header-anchor" href="#方块替换工具" aria-label="Permalink to &quot;方块替换工具&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/tool repl &lt;图案&gt;</span></span></code></pre></div><p>该工具将会将你右键点击到的方块替换为命令参数中提供的方块。你也可以左键将符合命令参数中提供方块的方块替换为当前左键点击的方块。</p><h3 id="长距离建筑工具" tabindex="-1">长距离建筑工具 <a class="header-anchor" href="#长距离建筑工具" aria-label="Permalink to &quot;长距离建筑工具&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/tool lrbuild &lt;左键方块&gt; &lt;右键方块&gt;</span></span></code></pre></div><p>该工具允许你放置和破坏一定距离外的方块。只需准星选中并点击即可。右键点击时便会放置方块。如果你将命令参数设置为了空气，则它会立即删除你所指向的方块。</p><h3 id="长距离魔杖" tabindex="-1">长距离魔杖 <a class="header-anchor" href="#长距离魔杖" aria-label="Permalink to &quot;长距离魔杖&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/tool farwand</span></span></code></pre></div><p>该工具与普通的选区魔杖相同——但距离不受限制。与通常的 <code>//pos1</code> 和 <code>//pos2</code> 命令不同，与这个工具作用相同的两条命令是 <code>//hops1</code> 和 <code>//hops2</code>。</p><h3 id="切换工具" tabindex="-1">切换工具 <a class="header-anchor" href="#切换工具" aria-label="Permalink to &quot;切换工具&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/tool cycle</span></span></code></pre></div><p>这个工具可以用于切换方块的状态。左键选择要切换的属性，右键则会将对应属性在可用的值之间来回切换。在某些情况下，例如旋转特定的方块而不破坏并重新放置它的时候，很有用。</p><h3 id="查询工具" tabindex="-1">查询工具 <a class="header-anchor" href="#查询工具" aria-label="Permalink to &quot;查询工具&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/tool info</span></span></code></pre></div><p>查询工具会显示右键方块的详细信息。它会显示这个方块的坐标、方块的种类、状态、光照等级（阻挡后/上部）以及它的内部 ID（如果有）。</p><h3 id="填充工具" tabindex="-1">填充工具 <a class="header-anchor" href="#填充工具" aria-label="Permalink to &quot;填充工具&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/tool floodfill &lt;方块&gt; &lt;范围&gt;</span></span></code></pre></div><p>填充工具将会以右键点击的方块为中心，（按给定的命令参数）将符合被点击方块附近种类相同的方块替换为指定的方块。</p><h2 id="超级镐子" tabindex="-1">超级镐子 <a class="header-anchor" href="#超级镐子" aria-label="Permalink to &quot;超级镐子&quot;">​</a></h2><p>超级镐子与其他工具略有差别。它一般不会绑定在某个物品上，而是通过命令开启或关闭。开启时，左键手持<em>任何</em>镐子并左键点击即可激活超级镐子。与正常工具不同的是，超级镐子通过命令 <code>//</code> 关闭。</p><h3 id="单点超级镐" tabindex="-1">单点超级镐 <a class="header-anchor" href="#单点超级镐" aria-label="Permalink to &quot;单点超级镐&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//</span></span>
<span class="line"><span>/sp single</span></span></code></pre></div><p>超级镐子允许你瞬间破坏任何方块。它看似多余，实则预测了创造模式（创造模式在 alpha 前被移除，直至 Beta 1.8 时都没有被再次加入）。超级镐默认会掉落你所破坏的方块（可在配置文件中配置），而创造模式则没有这样的功能。</p><h3 id="范围超级镐" tabindex="-1">范围超级镐 <a class="header-anchor" href="#范围超级镐" aria-label="Permalink to &quot;范围超级镐&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/sp area &lt;半径&gt;</span></span></code></pre></div><p>这种超级镐将会在点击之后瞬间破坏指定半径内种类相同的方块。与单点超级镐相同，它也可以配置是否在破坏之后掉落物品。</p><h3 id="连锁超级镐" tabindex="-1">连锁超级镐 <a class="header-anchor" href="#连锁超级镐" aria-label="Permalink to &quot;连锁超级镐&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/sp recur &lt;半径&gt;</span></span></code></pre></div><p>这种超级镐也会在点击之后瞬间破坏指定半径内相同种类的方块，但只会破坏与被点击方块相连接的方块（通过匹配方块）。可以把它看做“连锁挖掘”镐子。</p><h2 id="笔刷" tabindex="-1">笔刷 <a class="header-anchor" href="#笔刷" aria-label="Permalink to &quot;笔刷&quot;">​</a></h2><p>与上述工具都不相同，这个命令大部分情况下是用来远距离绘制地形所用，而不是像上面那样对特定的细节进行精修。</p><p>它们的具体介绍可以在“<a href="./usage.brushes.html">笔刷</a>”章节找到。</p>`,44)]))}const b=e(i,[["render",l]]);export{u as __pageData,b as default};
