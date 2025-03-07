import{_ as l,C as e,c as o,o as d,b1 as n,G as t}from"./chunks/framework.CC7vnuC4.js";const m=JSON.parse('{"title":"实用工具","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/WorldEdit"},{"title":"实用工具","link":"/WorldEdit/usage.utilities"}]},"headers":[],"relativePath":"WorldEdit/usage.utilities.md","filePath":"WorldEdit/usage.utilities.md"}'),p={name:"WorldEdit/usage.utilities.md"};function c(r,a,h,g,u,b){const s=e("NolebaseGitContributors"),i=e("NolebaseGitChangelog");return d(),o("div",null,[a[0]||(a[0]=n(`<h1 id="实用工具" tabindex="-1">实用工具 <a class="header-anchor" href="#实用工具" aria-label="Permalink to &quot;实用工具&quot;">​</a></h1><p>WorldEdit 提供了一系列的实用工具。可以代替有多个选区或命令时需要做到的重复工作。下面的所有命令都会基于你的“放置位置”进行操作。默认情况下，这个位置是你所在的位置，但它也可以通过 <code>/toggleplace</code> 命令切换。</p><nav class="table-of-contents"><ul><li><a href="#编辑邻近方块">编辑邻近方块</a></li><li><a href="#填坑">填坑</a><ul><li><a href="#连锁填充">连锁填充</a></li></ul></li><li><a href="#排水">排水</a></li><li><a href="#水流矫正">水流矫正</a></li><li><a href="#覆雪">覆雪</a></li><li><a href="#融雪">融雪</a></li><li><a href="#绿化">绿化</a></li><li><a href="#灭火">灭火</a></li><li><a href="#清除生物">清除生物</a></li></ul></nav><h2 id="编辑邻近方块" tabindex="-1">编辑邻近方块 <a class="header-anchor" href="#编辑邻近方块" aria-label="Permalink to &quot;编辑邻近方块&quot;">​</a></h2><p>有些时候你可能需要替换附近的一些方块，且不使用选区——这时候你就需要用到你身边的区域</p><p>移除上下附近的方块：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/removeabove &lt;大小&gt; [高度]</span></span>
<span class="line"><span>/removebelow &lt;大小&gt; [深度]</span></span></code></pre></div><p>这两个命令允许你快速移除头顶或脚下的方块。例如玩家可以通过使用这个命令到达高处。“大小”参数即为移除方块的操作半径，这个立方体的边长为 <code>(size - 1) * 2 + 1</code>。这个立方体的中心为你所站着的方块的上方一格。若你没有指定“高度”或“深度”参数，则命令将会范围拓展到全世界。</p><p>移除附近的方块：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/removenear &lt;蒙版&gt; &lt;大小&gt;</span></span></code></pre></div><p>该命令移除附近区域内指定种类的方块。“大小”参数即为移除方块的操作半径，这个立方体的边长为 <code>(size - 1) * 2 + 1</code>。这个立方体的中心为你所站着的方块的上方一格。</p><p>替换附近的方块：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/replacenear &lt;大小&gt; &lt;蒙版&gt; &lt;方块&gt;</span></span></code></pre></div><p>如果你需要快速替换附近方块的话，这个快捷命令就是你的最佳选择。“大小”参数即为替换方块的操作半径，这个立方体的边长为 <code>(size - 1) * 2 + 1</code>。这个立方体的中心为你所站着的方块的上方一格。</p><h2 id="填坑" tabindex="-1">填坑 <a class="header-anchor" href="#填坑" aria-label="Permalink to &quot;填坑&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//fill &lt;方块&gt; &lt;半径&gt; [深度]</span></span></code></pre></div><p>填充命令会以你的“放置位置”为中心，向外向下将空气方块填充为命令中指定的方块。需要注意的是它只会从开始检测的那一层向下延伸而不会向上，因此它可以填充一个水池但不可以填充洞穴（洞穴结构往下的时候是朝外的，会慢慢延伸到命令能操作的范围之外）</p><p>填充命令不会向上填充其所在的操作区域。</p><p><img src="https://worldedit.enginehub.org/en/latest/_images/fill_pond.png" alt="img"></p><p>一个通过 <code>//fill</code> 命令填充的不规则形状水池。在本图的示例中你不需要将空气替换成水（通过命令 <code>/replace</code>），因为这片不规则的水池很难使用长方体区域进行圈定操作。</p><h3 id="连锁填充" tabindex="-1">连锁填充 <a class="header-anchor" href="#连锁填充" aria-label="Permalink to &quot;连锁填充&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//fillr &lt;图案&gt; &lt;半径&gt;</span></span></code></pre></div><p>与填充命令不同的是，连锁填充<em>可以</em>在向下填充的同时向外填充，这意味着你可以使用这条命令填充洞穴，或者其他延伸进墙壁的洞穴。</p><p>与填充命令相同的是，它不会对 Y 轴高于操作位置的区域进行填充。</p><h2 id="排水" tabindex="-1">排水 <a class="header-anchor" href="#排水" aria-label="Permalink to &quot;排水&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//drain [-w] &lt;半径&gt;</span></span></code></pre></div><p>排水命令可以将一池的水或岩浆清空。它只会清空与起始位置的流体方块与直接相邻或通过其他流体方块间接相邻的流体方块，所以它不会抽干那些不相连但在操作范围内的池子。</p><p>将标志 <code>-w</code> 加入命令会排出含水方块中的水。</p><div class="info custom-block"><p class="custom-block-title">信息</p><p>一些方块，例如海带和海草，虽然它们看起来像是包含了水方块，但实际上并没有处于干燥的状态。如果你正在尝试抽干包含这些方块的河流或者海洋，请先使用 <code>//removenear</code>（上文有解释）命令移除这些方块。</p></div><h2 id="水流矫正" tabindex="-1">水流矫正 <a class="header-anchor" href="#水流矫正" aria-label="Permalink to &quot;水流矫正&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/fixwater &lt;半径&gt;</span></span>
<span class="line"><span>/fixlava &lt;半径&gt;</span></span></code></pre></div><p>该命令将会把“流动”的岩浆和水替换成“静止”的岩浆和水。这条命令在清除因方块破坏或水桶放出导致的水流动方面很有用。需要注意的是自 Mojang 最近对水流机制作出修改之后，这条命令便越来越不重要。</p><h2 id="覆雪" tabindex="-1">覆雪 <a class="header-anchor" href="#覆雪" aria-label="Permalink to &quot;覆雪&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/snow &lt;半径&gt;</span></span></code></pre></div><p>将一片区域都盖上雪！这条命令使用的算法允许你只把那些能够覆雪的方块覆雪（例如，它会忽略火把，使其不被覆雪）。如果某块区域上空被某些东西覆盖（例如自然生成的浮空岛），雪不会在其上覆盖。原版中的“降雪”才是垂直覆盖的。</p><div class="info custom-block"><p class="custom-block-title">信息</p><p>覆雪命令现在还不能让雪片层层叠加。</p></div><p><img src="https://worldedit.enginehub.org/en/latest/_images/snow.jpg" alt="img"><br> 覆雪命令改变地形的示例</p><h2 id="融雪" tabindex="-1">融雪 <a class="header-anchor" href="#融雪" aria-label="Permalink to &quot;融雪&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/thaw &lt;半径&gt;</span></span></code></pre></div><p>该命令与上文的 <code>/snow</code> 命令完全不同，它会将暴露区域中的冰雪都移除。</p><h2 id="绿化" tabindex="-1">绿化 <a class="header-anchor" href="#绿化" aria-label="Permalink to &quot;绿化&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/green [-f] &lt;半径&gt;</span></span></code></pre></div><p>绿化指定范围内的土地！该命令会向外水平扩张地将泥土替换为草方块。</p><p>在命令中添加 <code>-f</code> 参数可将砂土也替换为草方块。</p><h2 id="灭火" tabindex="-1">灭火 <a class="header-anchor" href="#灭火" aria-label="Permalink to &quot;灭火&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/ex [半径]</span></span></code></pre></div><p>这是命令 <code>/removenear fire &lt;半径&gt;</code> 的快捷方式，允许你快速灭掉附近的火。</p><h2 id="清除生物" tabindex="-1">清除生物 <a class="header-anchor" href="#清除生物" aria-label="Permalink to &quot;清除生物&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/butcher [-pngabtfl] [半径]</span></span></code></pre></div><p>该命令会移除附近的实体。如果你不在命令中指定半径参数，整个世界的载入区域中的实体都会被移除。这些被移除的实体不会掉落任何物品。需要注意的是，如果你没有手段阻止生物重新生成，被清除的实体很快就会再次出现。</p><p><strong>清除命令标志</strong></p><table tabindex="0"><thead><tr><th>标志</th><th>描述</th></tr></thead><tbody><tr><td><code>-p</code></td><td>击杀驯服的宠物</td></tr><tr><td><code>-n</code></td><td>击杀 NPC</td></tr><tr><td><code>-g</code></td><td>击杀傀儡</td></tr><tr><td><code>-a</code></td><td>击杀动物</td></tr><tr><td><code>-b</code></td><td>击杀环境实体</td></tr><tr><td><code>-t</code></td><td>击杀命名实体</td></tr><tr><td><code>-f</code></td><td>上述所有实体</td></tr><tr><td><code>-r</code></td><td>击杀盔甲架</td></tr></tbody></table>`,52)),t(s),t(i)])}const k=l(p,[["render",c]]);export{m as __pageData,k as default};
