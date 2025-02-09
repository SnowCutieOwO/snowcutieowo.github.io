import{_ as c,c as o,o as a,al as l,j as d,a as e}from"./chunks/framework.ySGSHPST.js";const k=JSON.parse('{"title":"表达式","description":"","frontmatter":{},"headers":[],"relativePath":"WorldEdit/usage.other.expression-syntax.md","filePath":"WorldEdit/usage.other.expression-syntax.md"}'),s={name:"WorldEdit/usage.other.expression-syntax.md"},i={class:"footnotes"},r={class:"footnotes-list"},n={id:"fn1",class:"footnote-item"},p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.157ex",height:"1.553ex",role:"img",focusable:"false",viewBox:"0 -675.5 953.5 686.5","aria-hidden":"true"};function b(u,t,m,g,f,v){return a(),o("div",null,[t[6]||(t[6]=l(`<h1 id="表达式" tabindex="-1">表达式 <a class="header-anchor" href="#表达式" aria-label="Permalink to &quot;表达式&quot;">​</a></h1><p>WorldEdit 的表达式格式与 Java 等一类语言的差不多，但有一些不同：</p><ul><li>可以省略末尾的分号；</li><li>语句中的最后一个值即使不设置 return，也会返回；</li><li>二元中缀符 <code>^</code> 是用于指数运算而非通常的异或运算符号，且其优先级有相应的标注；</li><li>可以使用阶乘（<code>!</code>）；</li><li>可以使用约等于符号（<code>~=</code>）；</li><li>没有对象:)</li></ul><nav class="table-of-contents"><ul><li><a href="#运算符">运算符</a><ul><li><a href="#二元中缀符">二元中缀符</a></li><li><a href="#前缀运算">前缀运算</a></li><li><a href="#后缀运算">后缀运算</a></li><li><a href="#三元中缀">三元中缀</a></li></ul></li><li><a href="#函数">函数</a></li><li><a href="#常量">常量</a></li><li><a href="#方块状态">方块状态</a></li><li><a href="#控制结构">控制结构</a><ul><li><a href="#循环">循环</a></li></ul></li><li><a href="#另见">另见</a></li></ul></nav><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-label="Permalink to &quot;运算符&quot;">​</a></h2><p>表达式判断使用 <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html" target="_blank" rel="noreferrer">Java 的 优先级规则</a>，它可以简要概括为以下几点：</p><ul><li>二元指数运算符（<code>^</code>）的优先级介于 2 和 3；</li><li>阶乘后缀运算符（<code>!</code>）的优先级为 2；</li><li>约等于运算符（<code>~=</code>）的优先级为 7。</li></ul><h3 id="二元中缀符" tabindex="-1">二元中缀符 <a class="header-anchor" href="#二元中缀符" aria-label="Permalink to &quot;二元中缀符&quot;">​</a></h3><p>这些运算符需要被放在两个被运算数之间。</p><div class="info custom-block"><p class="custom-block-title">基本运算</p><table tabindex="0"><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td><code>+</code></td><td>加法</td></tr><tr><td><code>-</code></td><td>减法</td></tr><tr><td><code>*</code></td><td>乘法</td></tr><tr><td><code>/</code></td><td>除法</td></tr><tr><td><code>%</code></td><td>余除</td></tr><tr><td><code>^</code></td><td>指数运算</td></tr></tbody></table></div><div class="info custom-block"><p class="custom-block-title">数位运算</p><p>这些符号会将被运算数表示为 32 位整数并在这些位上进行操作。</p><table tabindex="0"><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td><code>&lt;&lt;</code></td><td>左移</td></tr><tr><td><code>&gt;&gt;</code></td><td>右移</td></tr></tbody></table></div><div class="info custom-block"><p class="custom-block-title">逻辑运算</p><p>这些运算符会将任意大于 0 的数字当做 true，而将其他的当做 false。在表示 true 时返回 1，而在表示 false 时返回 0。</p><table tabindex="0"><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td><code>&amp;&amp;</code></td><td>逻辑“和”</td></tr><tr><td><code>||</code></td><td>逻辑“或”</td></tr></tbody></table></div><div class="info custom-block"><p class="custom-block-title">比较运算</p><p>这些运算符号会将被运算数进行比较，并在结果为 true 时返回 1，在结果为 false 时返回 0。</p><table tabindex="0"><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td><code>&lt;</code></td><td>小于</td></tr><tr><td><code>&gt;</code></td><td>大于</td></tr><tr><td><code>&lt;=</code></td><td>小等于</td></tr><tr><td><code>&gt;=</code></td><td>大等于</td></tr><tr><td><code>==</code></td><td>等于</td></tr><tr><td><code>!=</code></td><td>不等于</td></tr><tr><td><code>~=</code></td><td>约等于</td></tr></tbody></table></div><div class="info custom-block"><p class="custom-block-title">赋值</p><p>这些运算符左侧需要提供一个值。使用简单赋值符号将值赋给一个不存在的变量可创建临时变量。</p><table tabindex="0"><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td><code>=</code></td><td>简单赋值</td></tr><tr><td><code>+=</code></td><td>相加赋值</td></tr><tr><td><code>-=</code></td><td>相减赋值</td></tr><tr><td><code>*=</code></td><td>相乘赋值</td></tr><tr><td><code>/=</code></td><td>相除赋值</td></tr><tr><td><code>%=</code></td><td>余除赋值</td></tr><tr><td><code>^=</code></td><td>指数运算赋值</td></tr></tbody></table></div><h3 id="前缀运算" tabindex="-1">前缀运算 <a class="header-anchor" href="#前缀运算" aria-label="Permalink to &quot;前缀运算&quot;">​</a></h3><p>这些运算符应当处于对应表达式之前。</p><div class="info custom-block"><p class="custom-block-title">前缀运算符</p><table tabindex="0"><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td><code>-x</code></td><td>（将值置负）</td></tr><tr><td><code>~x</code></td><td>按位补码（见上文“按位二元运算符”）</td></tr><tr><td><code>!x</code></td><td>逻辑补全（见上文“逻辑二元运算符”）</td></tr><tr><td><code>++x</code></td><td>前缀增量运算符</td></tr><tr><td><code>--x</code></td><td>前缀减量运算符</td></tr></tbody></table></div><h3 id="后缀运算" tabindex="-1">后缀运算 <a class="header-anchor" href="#后缀运算" aria-label="Permalink to &quot;后缀运算&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">后缀运算符</p><p>这些运算符应当处于对应表达式的末尾。</p><table tabindex="0"><thead><tr><th><code>x!</code></th><th>阶乘运算</th></tr></thead><tbody><tr><td><code>x++</code></td><td>后缀增量运算符</td></tr><tr><td><code>x--</code></td><td>后缀减量运算符</td></tr></tbody></table></div><h3 id="三元中缀" tabindex="-1">三元中缀 <a class="header-anchor" href="#三元中缀" aria-label="Permalink to &quot;三元中缀&quot;">​</a></h3><p>三元中缀符用于三元表达式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;条件&gt; ? &lt;满足时分支&gt; : &lt;不满足时分支&gt;</span></span></code></pre></div><p>与 if/else 工作原理相同，但这里的分支只能为单句表达式。</p><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">数学函数</p><p>表达式提供了来自 Java 的 Math 库的下列函数：</p><table tabindex="0"><thead><tr><th>函数</th><th>描述</th></tr></thead><tbody><tr><td><code>abs</code></td><td>返回指定数的绝对值。</td></tr><tr><td><code>acos</code></td><td>返回指定数的反余弦值；返回值介于 [font=Vijaya]0<code> 到 [font=Vijaya]π</code> 之间。</td></tr><tr><td><code>asin</code></td><td>返回指定数的反正弦值；返回值介于 [font=Vijaya]-π/2<code> 到 [font=Vijaya]π/2</code> 之间。</td></tr><tr><td><code>atan2</code></td><td>返回由直角坐标系 [font=Vijaya](x, y)<code> 转化为极坐标 [font=Vijaya](r, θ)</code> 后的角度。</td></tr><tr><td><code>atan</code></td><td>返回指定数的反正弦值；返回值介于 [font=Vijaya]-π/2<code> 到 [font=Vijaya]π/2</code>。</td></tr><tr><td><code>cbrt</code></td><td>返回指定数的平方根。</td></tr><tr><td><code>ceil</code></td><td>返回（差值最接近于负无穷）大等于指定数的整数。即向上取整。</td></tr><tr><td><code>cos</code></td><td>返回指定数的三角函数余弦值。</td></tr><tr><td><code>cosh</code></td><td>返回指定数的双曲余弦值。</td></tr><tr><td><code>exp</code></td><td>返回欧拉数e的指定幂<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>[/sup]。</td></tr><tr><td><code>floor</code></td><td>返回（差值最接近负无穷）小等于指定数的整数。即向下取整。</td></tr><tr><td><code>ln</code></td><td>返回指定数（以 [font=Vijaya]e\` 为底）的自然对数。</td></tr><tr><td><code>log</code></td><td>返回指定数的对数。</td></tr><tr><td><code>log10</code></td><td>返回指定数（以 10 为底）的对数。</td></tr><tr><td><code>max</code></td><td>返回数组中的最大数（需包含两到三个数）。</td></tr><tr><td><code>min</code></td><td>返回数组中的最小数（需包含两到三个数）。</td></tr><tr><td><code>rint</code></td><td>返回最接近给定数的数学整数。</td></tr><tr><td><code>round</code></td><td>返回最贴近给定数的整数<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>[/sup]。</td></tr><tr><td><code>sin</code></td><td>返回指定数的三角函数正弦值。</td></tr><tr><td><code>sinh</code></td><td>返回指定数的双曲正弦值。</td></tr><tr><td><code>sqrt</code></td><td>返回指定数的平方根约值。</td></tr><tr><td><code>tan</code></td><td>返回指定数的三角函数正切值。</td></tr><tr><td><code>tanh</code></td><td>返回指定数的双曲正切值。</td></tr></tbody></table></div><div class="info custom-block"><p class="custom-block-title">额外函数</p><p>额外地，本插件提供了一些特殊函数：</p><table tabindex="0"><thead><tr><th>函数</th><th>描述</th></tr></thead><tbody><tr><td><code>rotate(x, y, 角度)</code></td><td>以弧度为单位将指定坐标对旋转。</td></tr><tr><td><code>swap(x, y)</code></td><td>交换给定的两个值。</td></tr><tr><td><code>random()</code></td><td>生成小于 1.0 的随机正数。</td></tr><tr><td><code>randint(最大值)</code></td><td>生成小于给定最大值的随机整数。</td></tr><tr><td><code>perlin(种子, x, y, z, 频率, 倍频, 幅度)</code></td><td>按给定参数生成 berlin 噪声。</td></tr><tr><td><code>voronoi(种子, x, y, z, 频率)</code></td><td>按给定参数生成 voronoi 噪声。</td></tr><tr><td><code>ridgedmulti(种子, x, y, z, 频率, 倍频)</code></td><td>按给定参数生成脊状多重分形噪声。</td></tr></tbody></table></div><div class="info custom-block"><p class="custom-block-title">方块查询函数</p><p>下列函数可以用于在指定世界的编辑内容中找到特定的方块。需要注意的是这些函数仍然使用旧版本的 ID 和数据，所以对高版本（1.13+）的方块可能有难以预测的问题。</p><table tabindex="0"><thead><tr><th>函数</th><th>描述</th></tr></thead><tbody><tr><td><code>query(x, y, z, 类型, 数据)</code></td><td>如果指定坐标上的方块匹配给定的数据值或种类, 则该函数会返回 true。若类型或数据为变量，则会赋值给该位置的方块。</td></tr><tr><td><code>queryRel(dx, dy, dz, 类型, 数据)</code></td><td>与查询相似，但会与当前查询的方块产生偏移。</td></tr><tr><td><code>quesyAbs(xp, yp, zp, 类型, 数据)</code></td><td>与查询相似，但使用的是世界坐标。</td></tr></tbody></table></div><div class="info custom-block"><p class="custom-block-title">缓存函数</p><p>这些函数允许你访问数据缓存（基本上就是数组）。插件提供了两个缓存，一个是全局共用的缓存，而另外一个对表达式执行时开放。以 <em>g</em> 开头的表达式表示使用全局缓存，而不带 <em>g</em> 则表示使用本地缓冲。</p><table tabindex="0"><thead><tr><th></th><th></th></tr></thead><tbody><tr><td><code>(g)megabf(索引)</code></td><td>返回指定索引的缓存内容。</td></tr><tr><td><code>(g)megabf(索引, 值)</code></td><td>将指定索引位置的缓存填入给定的数据。</td></tr><tr><td><code>(g)closest(x, y, z, 索引, 计数, 步长)</code></td><td>找到最符合 x, y, z 的值的索引（如三个连续缓存值），函数将会从给定缩索引值，按步长在遍历中查找内容。</td></tr></tbody></table></div><h2 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">常量</p><p>下列常量总是可用，且不能被赋值。</p><table tabindex="0"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td><code>e</code></td><td>2.7182818284590452354</td><td>自然对数的底数，即自然常数</td></tr><tr><td><code>pi</code></td><td>3.14159265358979323846</td><td>圆的周长与直径之比，即圆周率</td></tr><tr><td><code>true</code></td><td>1</td><td>用于布尔值运算</td></tr><tr><td><code>false</code></td><td>0</td><td>用于布尔值运算</td></tr></tbody></table></div><h2 id="方块状态" tabindex="-1">方块状态 <a class="header-anchor" href="#方块状态" aria-label="Permalink to &quot;方块状态&quot;">​</a></h2><p>方块状态是以如下方式显示的数据：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{ x=5; y=6; }</span></span></code></pre></div><p>大部分情况下这些参数会与控制结构一同使用。</p><h2 id="控制结构" tabindex="-1">控制结构 <a class="header-anchor" href="#控制结构" aria-label="Permalink to &quot;控制结构&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">is/else</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if (&lt;条件&gt;) &lt;满足时分支&gt;</span></span>
<span class="line"><span>if (&lt;条件&gt;) &lt;满足时分支&gt; else &lt;不满足时分支&gt;</span></span></code></pre></div><ul><li><code>&lt;条件&gt;</code> 用于决定是否继续执行代码块内容；</li><li>大于零的任何值都被视作 true，其他均为 false；</li><li><code>&lt;满足时分支&gt;</code> 可以为以分号分隔的单句，也可以为方块状态；</li></ul></div><div class="info custom-block"><p class="custom-block-title">注意：</p><p>关键词 else 总是会和上一个 if 相关。这意味着你可以这样写多个条件判断式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>**if (&lt;条件1&gt;) &lt;满足时分支1&gt; else if (&lt;条件2&gt;) &lt;满足时分支2&gt; else &lt;不满足时分支&gt;**</span></span></code></pre></div></div><h3 id="循环" tabindex="-1">循环 <a class="header-anchor" href="#循环" aria-label="Permalink to &quot;循环&quot;">​</a></h3><p>循环最多可进行 256 次。</p><div class="info custom-block"><p class="custom-block-title">while</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>while (&lt;条件&gt;) &lt;代码块&gt;</span></span>
<span class="line"><span>do &lt;代码块&gt; while (&lt;条件&gt;);</span></span></code></pre></div><ul><li><code>&lt;条件&gt;</code> 用于决定是否继续循环；</li><li><code>&lt;代码块&gt;</code> 可以为以分号分隔的单句，也可以为方块状态；</li><li>do-while 会在一次循环结束之后检查条件。</li></ul></div><div class="info custom-block"><p class="custom-block-title">Java/C 语言风格的 for</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for (&lt;初值&gt;; &lt;条件&gt;; &lt;步长&gt;) &lt;代码块&gt;</span></span></code></pre></div><ul><li><code>&lt;初值&gt;</code>、<code>&lt;条件&gt;</code> 和 <code>&lt;步长&gt;</code> 均为单句表达式；</li><li><code>&lt;代码块&gt;</code> 可以为以分号分隔的单句，也可以为方块状态。</li></ul></div><div class="info custom-block"><p class="custom-block-title">执行步骤</p><p>首先，<code>&lt;初值&gt;</code> 先进行测算，然后，每次遍历都会遵守这些步骤：</p><ol><li>如果 <code>&lt;条件&gt;</code> 的值小于等于 0（例如，false），则退出循环；</li><li><code>&lt;代码块&gt;</code> 被执行；</li><li><code>&lt;步长&gt;</code> 被执行。</li></ol></div><div class="info custom-block"><p class="custom-block-title">简单 for</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for (&lt;计数&gt; = &lt;初值&gt;, &lt;终值&gt;) &lt;代码块&gt;</span></span></code></pre></div><ul><li><code>&lt;计数&gt;</code> 为变量，可用于循环计次；</li><li><code>&lt;初值&gt;</code> 和 <code>&lt;终值&gt;</code> 均为单句表达式；</li><li><code>&lt;代码块&gt;</code> 可以为以分号分隔的单句，也可以为方块状态。</li></ul></div><div class="info custom-block"><p class="custom-block-title">执行步骤</p><p>首先，初始计数会被赋值给 <code>&lt;计数&gt;</code>。之后，每次遍历都会遵守这些步骤：</p><ol><li>若当前内部循环数值大于 <code>&lt;终值&gt;</code>，则退出循环；</li><li><code>&lt;计数&gt;</code> 的值会与内部循环数值相同；</li><li><code>&lt;代码块&gt;</code> 被执行；</li><li><code>&lt;计数&gt;</code> 的值 +1。</li></ol><p><code>&lt;初值&gt;</code> 和 <code>&lt;终值&gt;</code> 只会测量一次。</p></div><h2 id="另见" tabindex="-1">另见 <a class="header-anchor" href="#另见" aria-label="Permalink to &quot;另见&quot;">​</a></h2><ul><li>Microsoft Learn, 2023.04.03, <em>前缀增量和减量运算符</em> 章节, <a href="https://learn.microsoft.com/zh-cn/cpp/c-language/prefix-increment-and-decrement-operators" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/cpp/c-language/prefix-increment-and-decrement-operators</a></li><li>迈克老狼, 2009.11.22,《perlin噪声函数》, <a href="https://www.cnblogs.com/mikewolf2009/articles/1608087.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/mikewolf2009/articles/1608087.html</a></li><li>MHols_, 2023.03.15,《【Minecraft】worldedit|generate 探索神奇的噪声——从原理到应用》, <a href="https://www.bilibili.com/read/cv22408344/" target="_blank" rel="noreferrer">https://www.bilibili.com/read/cv22408344/</a></li><li>LocusAzzurro, 2021.06.10, 《WorldEdit 对Perlin噪声函数功能的研究》, <a href="https://www.mcbbs.net/thread-491788-1-1.html" target="_blank" rel="noreferrer">https://www.mcbbs.net/thread-491788-1-1.html</a></li></ul><hr class="footnotes-sep">`,47)),d("section",i,[d("ol",r,[d("li",n,[d("p",null,[t[2]||(t[2]=e("即 ")),d("mjx-container",p,[(a(),o("svg",h,t[0]||(t[0]=[l('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(499,363) scale(0.707)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g></g></g></g>',1)]))),t[1]||(t[1]=d("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[d("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[d("msup",null,[d("mi",null,"e"),d("mi",null,"x")])])],-1))]),t[3]||(t[3]=e("。 ")),t[4]||(t[4]=d("a",{href:"#fnref1",class:"footnote-backref"},"↩︎",-1))])]),t[5]||(t[5]=d("li",{id:"fn2",class:"footnote-item"},[d("p",null,[e("即四舍五入。 "),d("a",{href:"#fnref2",class:"footnote-backref"},"↩︎")])],-1))])])])}const y=c(s,[["render",b]]);export{k as __pageData,y as default};
