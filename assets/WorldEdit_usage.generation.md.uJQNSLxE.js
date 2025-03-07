import{_ as i,C as e,c as p,o,b1 as n,G as s}from"./chunks/framework.CC7vnuC4.js";const m=JSON.parse('{"title":"生成","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/WorldEdit"},{"title":"生成","link":"/WorldEdit/usage.generation"}]},"headers":[],"relativePath":"WorldEdit/usage.generation.md","filePath":"WorldEdit/usage.generation.md"}'),c={name:"WorldEdit/usage.generation.md"};function d(h,a,r,g,u,b){const t=e("NolebaseGitContributors"),l=e("NolebaseGitChangelog");return o(),p("div",null,[a[0]||(a[0]=n(`<h1 id="生成" tabindex="-1">生成 <a class="header-anchor" href="#生成" aria-label="Permalink to &quot;生成&quot;">​</a></h1><p>有些时候你可能需要生成森林或者自动产生球体，但是重复做这些工作又会过于单调。幸好 WorldEdit 有一些工具正好能够快速地做完这些事情。这些命令不需要你选择区域；它们所要用到的是你所站着的那格方块。</p><p>与大部分 WorldEdit 的命令相同，这些命令也会接受一个图案参数。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>这些命令通常使用的是你的“放置位置”，而这又默认指你所在的位置。你可以使用命令 <code>//toggleplace</code> 来将这个位置修改成你的第一选择点（通过选区魔杖（通常是小木斧）左键选择的点，或者命令 <code>//pos1</code> 所选择的点）。</p></div><nav class="table-of-contents"><ul><li><a href="#圆柱体">圆柱体</a></li><li><a href="#球体">球体</a></li><li><a href="#四棱锥-金字塔">四棱锥（金字塔）</a></li><li><a href="#造林">造林</a></li><li><a href="#自然生成南瓜">自然生成南瓜</a></li><li><a href="#绘制指定形状">绘制指定形状</a><ul><li><a href="#标志">标志</a></li><li><a href="#变量">变量</a></li><li><a href="#形状示例">形状示例</a></li></ul></li><li><a href="#绘制生物群系形状">绘制生物群系形状</a></li><li><a href="#另见">另见</a></li></ul></nav><h2 id="圆柱体" tabindex="-1">圆柱体 <a class="header-anchor" href="#圆柱体" aria-label="Permalink to &quot;圆柱体&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//cyl &lt;方块&gt; &lt;半径&gt; [高度]</span></span>
<span class="line"><span>//hcyl &lt;方块&gt; &lt;方块&gt; [高度]</span></span></code></pre></div><p>WorldEdit 能够产生实心或空心的圆柱体或圆形。它使用了快速算法来生成这些图形，而这种算法生成的图形在保证效率的同时也能做到圆滑美观。圆柱体是基于你所在的位置生成的，高度则会从你所站着的那一层向上建筑。若你想要产生一个圆形，你只需要将圆柱体的高度设置为 1 即可。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>若要更精确地控制图形边缘的形状，你可以在半径参数中填入小数。</p></div><p>对于椭圆柱体，你可以指定两个半径：一个是东西轴半径，另一个则是南北轴半径。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//cyl &lt;方块&gt; &lt;东西轴半径&gt;,&lt;南北轴半径&gt; [高度]</span></span>
<span class="line"><span>//hcyl &lt;方块&gt; &lt;东西轴半径&gt;,&lt;南北轴半径&gt; [高度]</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">示例：创建圆柱体和圆圈</p><p>创建一个玻璃构成的实心圆柱，半径为 5，高度为 10：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//cyl glass 5 10</span></span></code></pre></div><p>创建一个石头构成的空心椭圆柱，半径分别为 5.5 和 15，高度为 10：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//hcyl stone 5.5,15 1</span></span></code></pre></div></div><h2 id="球体" tabindex="-1">球体 <a class="header-anchor" href="#球体" aria-label="Permalink to &quot;球体&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//sphere [-r] &lt;图形&gt; &lt;半径&gt;</span></span>
<span class="line"><span>//hsphere [-r] &lt;图形&gt; &lt;半径&gt;</span></span></code></pre></div><p>两种命令均可创建空心和实心球体。默认情况下，球体的球心是你脚下所站着的方块。如果你提供了 <em>-r</em>（提升）选项，那么生成的球体就会比原有位置高出一段高度，这段高度为它的半径，使球面与你脚下所站的方块相切。</p><p>与圆柱相似，你可以通过指定三个参数半径（可为小数）生成椭球体。它们的顺序分别为东西轴方向、上下轴方向、南北轴方向。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//sphere [-r] &lt;方块&gt; &lt;半径&gt;,&lt;半径&gt;,&lt;半径&gt;</span></span>
<span class="line"><span>//hsphere [-r] &lt;方块&gt; &lt;半径&gt;,&lt;半径&gt;,&lt;半径&gt;</span></span></code></pre></div><h2 id="四棱锥-金字塔" tabindex="-1">四棱锥（金字塔） <a class="header-anchor" href="#四棱锥-金字塔" aria-label="Permalink to &quot;四棱锥（金字塔）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//pyramid &lt;方块&gt; &lt;大小&gt;</span></span>
<span class="line"><span>//hpyramid &lt;方块&gt; &lt;大小&gt;</span></span></code></pre></div><p>这条命令会按给定的方块和<em>高度</em>产生一个金字塔。也就是说，比如你给定高度为 5，那么这个金字塔就有五层方块，每一层方块都比它下面的一层少。最底面一层方块的侧边长度是参数中指定高度的两倍。</p><h2 id="造林" tabindex="-1">造林 <a class="header-anchor" href="#造林" aria-label="Permalink to &quot;造林&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/forestgen [大小] [树种] [密度]</span></span></code></pre></div><p>可以使用这个命令进行造林操作。“大小”参数决定了生成树林的方形区域的高度和宽度。“密度”参数可以是 0 到 100 之间的值，诸如 0.1 这样的小数也可以正常工作，需要注意的是默认密度（5）就已经足够密集。“大小”参数就是正方形区域的边长（半径），且它的中心是你的“放置位置”（见上文解释）。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>该命令操作的方式与“区域操作”章节中所讲的造林是一样的，与那条命令不同的是，这条命令需要一个“大小”参数，且生成位置基于你的“放置位置”而不是你的选区位置。</p></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>根据你所使用的服务端核心的差异，有些服务端可能不支持在该命令做出的改动上进行 //undo 撤销操作。</p></div><h2 id="自然生成南瓜" tabindex="-1">自然生成南瓜 <a class="header-anchor" href="#自然生成南瓜" aria-label="Permalink to &quot;自然生成南瓜&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/pumpkins [大小]</span></span></code></pre></div><p>WorldEdit 能生成类似原版南瓜丛的结构。“大小”参数即为生成南瓜的方形区域宽度和高度，它的中心为你脚下所站的位置。生成南瓜的密度目前还不能修改。</p><h2 id="绘制指定形状" tabindex="-1">绘制指定形状 <a class="header-anchor" href="#绘制指定形状" aria-label="Permalink to &quot;绘制指定形状&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//generate &lt;图案&gt; &lt;表达式&gt;</span></span></code></pre></div><p>别名：<code>//g</code>、<code>//gen</code></p><p>生成任意可被数学公式表达的图形：</p><ul><li>一个圆环面；</li><li>旋转圆柱体；</li><li>锯齿状的波峰；</li><li>任何可通过公式表达的形状。</li></ul><p>这会用到表达式判断器。</p><h3 id="标志" tabindex="-1">标志 <a class="header-anchor" href="#标志" aria-label="Permalink to &quot;标志&quot;">​</a></h3><ul><li><code>-r</code> - 使用原坐标，即一个方块等于一单位长度；</li><li><code>-c</code> - 将表达式的原点移动到选区的中心，默认情况下一个方块等于一单位长度；</li><li><code>-o</code> - 将表达式的原点移动到你的“放置位置”（你的一号点位，通过 <code>/togglepos</code> 切换）默认情况下一个方块等于一单位长度；</li><li>在使用上述任意标志的情况下，坐标轴都会归化为 -1..1（从选区最小至最大点的位置，意味着整个选区都是一个 2x2x2 的单位），需要注意的是每个轴可能根据选区的偏移而有不同的方块数量；</li><li><code>-h</code> - 生成空心图形。方块只会在相邻方块不为原本图形所属的方块的情况下放置。</li></ul><h3 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h3><ul><li><code>x</code>、<code>y</code>、<code>z</code>（输入）- 坐标；</li><li><code>类型</code>、<code>数据</code>（输入/输出）- 所使用的材料，默认填入方块/图案。</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>因为表达式判断器只可以使用数字作为变量，类型/数据变量和查询功能仅会在拥有旧版本类型/数据格式的方块上起作用。若你想要对新版本的方块（&gt; MC 1.13），请使用变量，并在生成你的图形之后通过命令 <code>//replace</code> 将其替换。命令参数 <code>&lt;图案&gt;</code> 所填入的内容是不受限制的，只有表达式部分才会受到限制。</p></div><p>表达式一定会对属于该部分的方块返回 true（<code>&gt; 0</code>），对不属于该部分的情况则返回 false（<code>&lt;= 0</code>）。表达式会测量选区内的每一个方块。</p><h3 id="形状示例" tabindex="-1">形状示例 <a class="header-anchor" href="#形状示例" aria-label="Permalink to &quot;形状示例&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">示例：生成多样的形状</p><p>主半径为 0.75，次半径为 0.25 的环面：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//g stone (0.75-sqrt(x^2+y^2))^2+z^2 &lt; 0.25^2</span></span></code></pre></div><p>多节空心树：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//g -h oak_log (0.5+sin(atan2(x,z)*8)*0.2)*(sqrt(x*x+z*z)/0.5)^(-2)-1.2 &lt; y</span></span></code></pre></div><p>彩虹环面：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//g white_wool data=(32+15/2/pi*atan2(x,y))%16; (0.75-sqrt(x^2+y^2))^2+z^2 &lt; 0.25^2</span></span></code></pre></div><p>彩虹蛋状体：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//g white_wool data=(32+y*16+1)%16; y^2/9+x^2/6*(1/(1-0.4*y))+z^2/6*(1/(1-0.4*y))&lt;0.08</span></span></code></pre></div><p>心形：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//g red_wool (z/2)^2+x^2+(5*y/4-sqrt(abs(x)))^2&lt;0.6</span></span></code></pre></div><p>sinx 函数图像：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//g -h glass sin(x*5)/2&lt;y</span></span></code></pre></div><p>径向余弦波：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//g -h glass cos(sqrt(x^2+z^2)*5)/2&lt;y</span></span></code></pre></div><p>圆双曲面：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//g stone -(z^2/12)+(y^2/4)-(x^2/12)&gt;-0.03</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>想要更多酷炫的形状吗？试试这个叫 <a href="https://github.com/parisolab/mathmod/releases" target="_blank" rel="noreferrer">MathMod</a> 的程序吧。它默认有许多形状供选择，你也可以参考其教程创建更多复杂的图形。需要注意的是 WorldEdit 使用的是等角（x,y,z）方程，而不是参数（u,v,t）方程。另外，你也可能需要按选区比例和表达式定义域调整你的 x、y 和 z 变量。</p></div><h2 id="绘制生物群系形状" tabindex="-1">绘制生物群系形状 <a class="header-anchor" href="#绘制生物群系形状" aria-label="Permalink to &quot;绘制生物群系形状&quot;">​</a></h2><p>与生成命令一样，你可以使用表达式将生物群系按特定的形状设置。命令的格式与上一条相同，但它使用的是生物群系名称而不是具体的图案。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>在 Minecraft 1.15 之后，生物群系是以三维方式存储的。在 1.16 之后，WorldEdit 完全使用了 3D 生物群系，但是又会出现一些来自 Mojang 的新限制。见“设置生物群系”章节来获取更多信息。</p></div><h2 id="另见" tabindex="-1">另见 <a class="header-anchor" href="#另见" aria-label="Permalink to &quot;另见&quot;">​</a></h2><ul><li>百度百科, 2022.09.23, <em>环面</em>, <a href="https://baike.baidu.com/item/%E7%8E%AF%E9%9D%A2/2127101" target="_blank" rel="noreferrer">https://baike.baidu.com/item/环面/2127101</a></li></ul>`,48)),s(t),s(l)])}const k=i(c,[["render",d]]);export{m as __pageData,k as default};
