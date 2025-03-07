import{_ as l,C as e,c as n,o,b1 as d,G as s}from"./chunks/framework.CC7vnuC4.js";const m=JSON.parse('{"title":"笔刷","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/WorldEdit"},{"title":"笔刷","link":"/WorldEdit/usage.brushes"}]},"headers":[],"relativePath":"WorldEdit/usage.brushes.md","filePath":"WorldEdit/usage.brushes.md"}'),p={name:"WorldEdit/usage.brushes.md"};function c(h,a,r,b,u,g){const t=e("NolebaseGitContributors"),i=e("NolebaseGitChangelog");return o(),n("div",null,[a[0]||(a[0]=d(`<h1 id="笔刷" tabindex="-1">笔刷 <a class="header-anchor" href="#笔刷" aria-label="Permalink to &quot;笔刷&quot;">​</a></h1><p>与实用工具相比，在大部分情况下，笔刷工具用于建筑、地形修整。与其他工具相同，它们需要用命令绑定在物品上，并右键（在部分有两种操作的工具上还可以按左键）执行一次操作。它们可以使用命令 <code>/brush none</code> 进行解绑。</p><p>笔刷有其各自的独立设置。它允许你选择蒙版、大小、图案和范围。这些参数或多或少地影响着你绘制建筑的过程和最终效果。</p><nav class="table-of-contents"><ul><li><a href="#笔刷列表">笔刷列表</a><ul><li><a href="#球形笔刷">球形笔刷</a></li><li><a href="#圆柱笔刷">圆柱笔刷</a></li><li><a href="#设置笔刷">设置笔刷</a></li><li><a href="#剪贴板笔刷">剪贴板笔刷</a></li><li><a href="#平滑笔刷">平滑笔刷</a></li><li><a href="#重力笔刷">重力笔刷</a></li><li><a href="#森林笔刷">森林笔刷</a></li><li><a href="#灭火笔刷">灭火笔刷</a></li><li><a href="#屠戮笔刷">屠戮笔刷</a></li><li><a href="#变换笔刷">变换笔刷</a></li><li><a href="#群系笔刷">群系笔刷</a></li></ul></li><li><a href="#笔刷设置">笔刷设置</a><ul><li><a href="#蒙版">蒙版</a></li><li><a href="#大小">大小</a></li><li><a href="#大小-1">大小</a></li><li><a href="#范围">范围</a></li><li><a href="#追踪蒙版">追踪蒙版</a></li></ul></li></ul></nav><h2 id="笔刷列表" tabindex="-1">笔刷列表 <a class="header-anchor" href="#笔刷列表" aria-label="Permalink to &quot;笔刷列表&quot;">​</a></h2><h3 id="球形笔刷" tabindex="-1">球形笔刷 <a class="header-anchor" href="#球形笔刷" aria-label="Permalink to &quot;球形笔刷&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brush sphere [-h] &lt;方块&gt; [半径]</span></span>
<span class="line"><span>/br s [-h] &lt;方块&gt; [半径]</span></span></code></pre></div><p>球形笔刷，顾名思义，是在准星所指的位置产生一个球体。加入标志 <code>-h</code> 则会生成空心球体。</p><h3 id="圆柱笔刷" tabindex="-1">圆柱笔刷 <a class="header-anchor" href="#圆柱笔刷" aria-label="Permalink to &quot;圆柱笔刷&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brush cylinder [-h] &lt;方块&gt; [半径] [高度]</span></span>
<span class="line"><span>/br cyl [-h] &lt;方块&gt; [半径] [高度]</span></span></code></pre></div><p>圆柱笔刷能在准星所指的位置生成指定半径和高度的圆柱体。加入标志 <code>-h</code> 则会生成空心圆柱体。</p><h3 id="设置笔刷" tabindex="-1">设置笔刷 <a class="header-anchor" href="#设置笔刷" aria-label="Permalink to &quot;设置笔刷&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brush set &lt;形状&gt; [大小] &lt;方块&gt;</span></span></code></pre></div><p>设置笔刷可以设置给定大小和图案的球体、圆柱体或是立方体。这个笔刷没有多大用处，除非你想要用它生成立方体。</p><h3 id="剪贴板笔刷" tabindex="-1">剪贴板笔刷 <a class="header-anchor" href="#剪贴板笔刷" aria-label="Permalink to &quot;剪贴板笔刷&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brush clipboard [-aoeb] [-m &lt;蒙版&gt;]</span></span></code></pre></div><p>剪贴板笔刷以你的剪贴板中的内容为基础，并将其在每次进行笔刷操作时放置在你所指定的位置。<code>aebm</code> 参数与“粘贴命令”相似。标志 <code>-o</code> 略有些不同——它会将笔刷操作时指向的点定为剪贴板中结构的原点。否则的话，剪贴板会以这个选中的点为中心点。在使用该笔刷时应当谨慎选择你的相对位点。</p><h3 id="平滑笔刷" tabindex="-1">平滑笔刷 <a class="header-anchor" href="#平滑笔刷" aria-label="Permalink to &quot;平滑笔刷&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brush smooth [半径] [重复次数] [蒙版]</span></span></code></pre></div><p>平滑区域内的地形，与在“区域操作”章节中介绍的命令 <code>//smooth</code> 在功能上大致相同。你可以指定蒙版的方块格数，以使其只在指定高度内进行平滑操作（与指定所受影响方块的蒙版不同）。</p><h3 id="重力笔刷" tabindex="-1">重力笔刷 <a class="header-anchor" href="#重力笔刷" aria-label="Permalink to &quot;重力笔刷&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brush gravity [半径] [-h]</span></span></code></pre></div><p>重力笔刷会将受影响区域的方块向下移动。使用标志 <code>-h</code> 会使得操作从 Y 轴最大值而不是选区最大 Y 轴高度计算。</p><h3 id="森林笔刷" tabindex="-1">森林笔刷 <a class="header-anchor" href="#森林笔刷" aria-label="Permalink to &quot;森林笔刷&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brush forest &lt;形状&gt; [半径] [密度] &lt;树种&gt;</span></span></code></pre></div><p>与 <code>//forest</code> 和 <code>//forestgen</code> 命令相同，这个笔刷可以在地面上按命令给定的形状、半径、密度以及树种生成树木。</p><h3 id="灭火笔刷" tabindex="-1">灭火笔刷 <a class="header-anchor" href="#灭火笔刷" aria-label="Permalink to &quot;灭火笔刷&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brush extinguish [半径]</span></span>
<span class="line"><span>/br ex [半径]</span></span></code></pre></div><p>相当于应用了火方块蒙版的空气球形笔刷，在大量方块着火而你又没有空输入繁杂的命令时，这个命令就是你的最好选择。</p><h3 id="屠戮笔刷" tabindex="-1">屠戮笔刷 <a class="header-anchor" href="#屠戮笔刷" aria-label="Permalink to &quot;屠戮笔刷&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brush butcher [半径] [-pngabtfr]</span></span>
<span class="line"><span>/br kill [半径] [-pngabtfr]</span></span></code></pre></div><p>与实用命令 <code>//butcher</code> 相同，屠戮笔刷会击杀指定区域内的生物。需要注意的是它的作用范围仍然是圆柱形的，但作用高度包括整个 Y 轴而不是一个球形。默认情况下，该笔刷只会清除敌对生物，可以在命令中设置标志以使笔刷能够清除别的实体。</p><p><strong>屠戮标志</strong></p><table tabindex="0"><thead><tr><th>标志</th><th>描述</th></tr></thead><tbody><tr><td><code>-p</code></td><td>击杀驯服的宠物</td></tr><tr><td><code>-n</code></td><td>击杀 NPC</td></tr><tr><td><code>-g</code></td><td>击杀傀儡</td></tr><tr><td><code>-a</code></td><td>击杀动物</td></tr><tr><td><code>-b</code></td><td>击杀环境实体</td></tr><tr><td><code>-t</code></td><td>击杀命名实体</td></tr><tr><td><code>-f</code></td><td>上述所有实体</td></tr><tr><td><code>-r</code></td><td>击杀盔甲架</td></tr></tbody></table><h3 id="变换笔刷" tabindex="-1">变换笔刷 <a class="header-anchor" href="#变换笔刷" aria-label="Permalink to &quot;变换笔刷&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brush deform &lt;形状&gt; [大小] [表达式] [-ro]</span></span></code></pre></div><p>与“区域操作”章节所介绍的 <code>//deform</code> 命令相同，这个笔刷将会按给定的形状和半径向区域内的方块按指定表达式比对的结果进行放置。与那条命令相同，<code>-r</code> 标志会使用原坐标，<code>-o</code> 标志将会从你的放置位置偏移。这个位置的默认位置为笔刷所指向的位置。</p><p><strong>抬升笔刷</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brush raise &lt;形状&gt; [大小]</span></span></code></pre></div><p>变换笔刷的一种特殊用法，表达式与 <code>y-=1</code> 相同。</p><p><strong>沉降笔刷</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brush lower &lt;形状&gt; [大小]</span></span></code></pre></div><p>变换笔刷的一种特殊用法，表达式与 <code>y+=1</code> 相同。</p><h3 id="群系笔刷" tabindex="-1">群系笔刷 <a class="header-anchor" href="#群系笔刷" aria-label="Permalink to &quot;群系笔刷&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brush biome &lt;形状&gt; [半径] &lt;群系种类&gt;</span></span></code></pre></div><p>按命令指定的形状和半径设置区域内的生物群系。需要注意的是自 1.15 以来，Minecraft 采用了立体生物群系的结构，因此受到游戏限制，你能操作的区域最小为 4x4x4。如果改动不生效，你可能需要重新进入游戏。</p><h2 id="笔刷设置" tabindex="-1">笔刷设置 <a class="header-anchor" href="#笔刷设置" aria-label="Permalink to &quot;笔刷设置&quot;">​</a></h2><p>这些命令可以修改你<em>当前选中</em>的笔刷。每个你绑定的笔刷都会拥有它自己的设置。</p><p>不是任何笔刷都会使用到所有数据——例如，剪贴板笔刷就没有“大小”这个设置（它的大小取决于你的剪贴板里有什么），屠戮笔刷没有蒙版或材料参数（因为它影响的是实体而不是方块），等等。</p><h3 id="蒙版" tabindex="-1">蒙版 <a class="header-anchor" href="#蒙版" aria-label="Permalink to &quot;蒙版&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/mask [蒙版]</span></span>
<span class="line"><span>/mask</span></span></code></pre></div><p>在你的笔刷上设置蒙版，与 Photoshop 的蒙版类似，它允许你不影响或只操作指定的方块。不指定蒙版则会为你的笔刷禁用这个功能，允许笔刷对任何方块做出改变。需要注意的是如果你使用了命令 <code>//gmask</code> 设置了全局蒙版，它会与你当前设置的蒙版所结合。</p><h3 id="大小" tabindex="-1">大小 <a class="header-anchor" href="#大小" aria-label="Permalink to &quot;大小&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/size [大小]</span></span></code></pre></div><p>设置笔刷的大小。通常意义上讲，这表示受影响区域的半径。需要注意的是，笔刷的最大半径可在配置文件中修改（参见“配置文本”章节）。</p><h3 id="大小-1" tabindex="-1">大小 <a class="header-anchor" href="#大小-1" aria-label="Permalink to &quot;大小&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/material &lt;方块&gt;</span></span></code></pre></div><p>设置笔刷所使用的方块内容。</p><h3 id="范围" tabindex="-1">范围 <a class="header-anchor" href="#范围" aria-label="Permalink to &quot;范围&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/range &lt;范围&gt;</span></span></code></pre></div><p>设置笔刷建筑的最大范围。需要注意的是它会从足够的范围开始，但在它不能在你准星所指的位置找到合适的方块的时候，<em>便会在空中生成建筑</em>。</p><h3 id="追踪蒙版" tabindex="-1">追踪蒙版 <a class="header-anchor" href="#追踪蒙版" aria-label="Permalink to &quot;追踪蒙版&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/tracemask [蒙版]</span></span>
<span class="line"><span>/tracemask</span></span></code></pre></div><p>设置准星追踪所使用的蒙版。默认情况下，笔刷将会对首先遇到的非空气方块执行操作（或准星指向区域超出范围，正好在范围附近的空气方块）。在设置追踪蒙版的情况下，你可以透过设置的任何方块进行笔刷绘制操作。例如，<code>/tracemask #soild</code> 将会穿过非固体方块，例如水等，进行绘制操作。在水下或穿墙进行建筑操作等情况时会很有用。</p>`,64)),s(t),s(i)])}const k=l(p,[["render",c]]);export{m as __pageData,k as default};
