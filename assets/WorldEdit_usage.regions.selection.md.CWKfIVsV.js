import{_ as s,c as e,o as i,al as t}from"./chunks/framework.LK_RS8Nx.js";const u=JSON.parse('{"title":"选区","description":"","frontmatter":{},"headers":[],"relativePath":"WorldEdit/usage.regions.selection.md","filePath":"WorldEdit/usage.regions.selection.md"}'),l={name:"WorldEdit/usage.regions.selection.md"};function n(o,a,p,c,d,r){return i(),e("div",null,a[0]||(a[0]=[t(`<h1 id="选区" tabindex="-1">选区 <a class="header-anchor" href="#选区" aria-label="Permalink to &quot;选区&quot;">​</a></h1><p>WorldEdit 一部分很重要的功能就是对选区或区域的操作。例如，如果你想要替换一片方形区域内的所有玻璃方块为泥土，你就需要告诉 WorldEdit 这块区域在哪。WorldEdit 给了你几种创建徐拿去的方法，而本章节就会向你介绍如何选择区域且向你展示你可进行的操作。</p><nav class="table-of-contents"><ul><li><a href="#想要看见选区边界">想要看见选区边界？</a></li><li><a href="#选择长方体边界">选择长方体边界</a><ul><li><a href="#通过选区魔杖选择">通过选区魔杖选择</a></li><li><a href="#在你所处的位置选择位点">在你所处的位置选择位点</a></li><li><a href="#选择一个指定位置的位点">选择一个指定位置的位点</a></li><li><a href="#选择准星所指方块为位点">选择准星所指方块为位点</a></li><li><a href="#选择指定区块">选择指定区块</a></li></ul></li><li><a href="#修改选区">修改选区</a><ul><li><a href="#扩大选区">扩大选区</a></li><li><a href="#减小选区">减小选区</a></li><li><a href="#全向扩大和缩小">全向扩大和缩小</a></li></ul></li><li><a href="#选区信息">选区信息</a><ul><li><a href="#获取选区大小">获取选区大小</a></li><li><a href="#方块比例计算">方块比例计算</a></li><li><a href="#获取方块分布">获取方块分布</a></li></ul></li><li><a href="#选择模式">选择模式</a></li></ul></nav><h2 id="想要看见选区边界" tabindex="-1">想要看见选区边界？ <a class="header-anchor" href="#想要看见选区边界" aria-label="Permalink to &quot;想要看见选区边界？&quot;">​</a></h2><p>若要可视化你的选区边界，你可以：</p><ol><li>在服务器端输入 <code>//drawsel</code> 命令使用有限的选区可视化功能。仅对小于 48x48x48 的立方体选区有效（在旧版本中为 32x32x32），且你需要处于创造模式。显示受到限制是因为结构方块本身在很长一段时间内都以该种方式运作；</li><li>使用一个第三方的客户端模组，例如 <a href="https://www.curseforge.com/minecraft/mc-mods/worldeditcui-fabric" target="_blank" rel="noreferrer">WorldEdit CUI (Fabric)</a>。注意这个模组需要 Fabric，所以你需要先在客户端上安装 Fabric。</li></ol><div class="tip custom-block"><p class="custom-block-title">注意</p><p>如果你需要使用更老版本的 Minecraft（1.12.2 或更早），除了下载一个旧版本的 WorldEdit（6.x 版）你也可能需要用到旧版本的 <a href="https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/1292886-worldeditcui" target="_blank" rel="noreferrer">Mumfrey 制作的 WorldEditCUI 模组</a>。注意这个模组需要 LiteLoader（安装方法在帖子中可以找到）。</p></div><h2 id="选择长方体边界" tabindex="-1">选择长方体边界 <a class="header-anchor" href="#选择长方体边界" aria-label="Permalink to &quot;选择长方体边界&quot;">​</a></h2><p>WorldEdit 允许你通过选择两点作为一个<strong>长方体</strong>（想想看立体矩形）的对角线，并以此产生一个长方体选区。下方的图片表示了两点如何能构成一个长方体选区。这个长方体只能与世界中的方块边缘对齐（它们不能旋转任何角度）。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>你也可以选择其他形状，例如平面多边形、椭球、球体和圆柱等。这些选区的更多信息稍后会在本文提到。 <img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="img"> 这里有几种不同的方式选择这两点，且你可以混合搭配。</p></div><h3 id="通过选区魔杖选择" tabindex="-1">通过选区魔杖选择 <a class="header-anchor" href="#通过选区魔杖选择" aria-label="Permalink to &quot;通过选区魔杖选择&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//wand</span></span></code></pre></div><p>圈定一个选区最直观的方法就是使用选区魔杖。若要获得魔杖，你需要输入命令 <code>//wand</code>（默认情况下是大家最熟悉的小木斧）。对着一个方块按下<strong>鼠标左键</strong>会选择选区的第一个点（点位详见上图）。而对着其他方块按下<strong>鼠标右键</strong>即可为选区选定第二个点（点位详见上图）。</p><p>你可以通过修改配置文件或使用命令 <code>/tool selwand</code> 将选区绑定到一个不同的物品上。在这种情况下，它是一个绑定工具。</p><h3 id="在你所处的位置选择位点" tabindex="-1">在你所处的位置选择位点 <a class="header-anchor" href="#在你所处的位置选择位点" aria-label="Permalink to &quot;在你所处的位置选择位点&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//pos1</span></span>
<span class="line"><span>//pos2</span></span></code></pre></div><p>这些命令分别会在你所站着的位置设置一号点位和二号点位。大体上来讲选区魔杖，也就是小木斧，能够胜任大部分的情况，因此你很可能用不到这两个命令。但是在你处于飞行状态且边上没有方块可以供你点击时，这两个命令会有自己的用处。</p><h3 id="选择一个指定位置的位点" tabindex="-1">选择一个指定位置的位点 <a class="header-anchor" href="#选择一个指定位置的位点" aria-label="Permalink to &quot;选择一个指定位置的位点&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//pos1 x,y,z</span></span>
<span class="line"><span>//pos2 x,y,z</span></span></code></pre></div><p>这些命令分别会在你输入的坐标位置设置一号点位和二号点位。在你已经预先计算好了选区位置及有关坐标的情况下可以节省大量跑图的时间。</p><h3 id="选择准星所指方块为位点" tabindex="-1">选择准星所指方块为位点 <a class="header-anchor" href="#选择准星所指方块为位点" aria-label="Permalink to &quot;选择准星所指方块为位点&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//hpos1</span></span>
<span class="line"><span>//hpos2</span></span></code></pre></div><p>这些命令分别会在你的准星指向的位置设置一号点位和二号点位。这允许你在原版的选择距离之外选中某一位置作为选区点位，并可轻松创建一个较大的选区。</p><h3 id="选择指定区块" tabindex="-1">选择指定区块 <a class="header-anchor" href="#选择指定区块" aria-label="Permalink to &quot;选择指定区块&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//chunk</span></span></code></pre></div><p>该命令会将你所处的一整个区块设置为选区。区块是 16*16 且高度为 256[sup][注1][/sup] 格方块的结构。使用命令 <code>//chunk -s</code> 则允许你选中已创建选区所处的所有区块。</p><h2 id="修改选区" tabindex="-1">修改选区 <a class="header-anchor" href="#修改选区" aria-label="Permalink to &quot;修改选区&quot;">​</a></h2><h3 id="扩大选区" tabindex="-1">扩大选区 <a class="header-anchor" href="#扩大选区" aria-label="Permalink to &quot;扩大选区&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//expand &lt;扩大长度&gt; [扩大方向]</span></span>
<span class="line"><span>//expand &lt;扩大长度&gt; &lt;对向扩大长度&gt; [扩大方向]</span></span>
<span class="line"><span>//expand vert</span></span></code></pre></div><p>这些命令允许你以下列方式简单地扩大一个已创建的选区：</p><ul><li>指定一个方向</li><li>看向特定的方向（只会作为主要扩大方向使用）</li><li>从天空到基岩层底部（通过 <code>vert</code>） 若要指定一个方向，可使用“N”、“S”、“W”、“E”以及（表示上方的）“U”或（表示下方的）“D”。如果你只是想要以看向的某个方向为基准的话，你甚至还可以以“me”参数或干脆不填来表示。</li></ul><p>你也可以指定一个相对方位，例如“F”（代表前方，与“me”作用相同）、“B”（背对的方向）、“L”（视角左侧）、“R”（视角右侧），这些都会自动检测你所朝向的位置。</p><p>你也可以指定多个通过英文逗号分隔的方位，来让选区一次性在多个方向上扩展，例如 <code>//expand 10 n,w</code> 可以让选区在西北两个方向上扩大。</p><p>你也可以指定两个距离，这样区域就会在两个相对的方位上自动扩大。</p><div class="info custom-block"><p class="custom-block-title">示例：向上扩大选区</p><p>例如，如果你输入了命令 <code>//expand 10 up</code>，你的选区会如图所示地向上方扩大。 <img src="https://worldedit.enginehub.org/en/latest/_images/expand_up.png" alt="img"></p></div><h3 id="减小选区" tabindex="-1">减小选区 <a class="header-anchor" href="#减小选区" aria-label="Permalink to &quot;减小选区&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//contract &lt;扩大长度&gt; [扩大方向]</span></span>
<span class="line"><span>//contract &lt;扩大长度&gt; &lt;对向扩大长度&gt; [扩大方向]</span></span></code></pre></div><p>这条命令与上一条的 <code>//expand</code> 参数相似，但是会让选区缩小。</p><div class="info custom-block"><p class="custom-block-title">示例：向下缩小</p><p>哪种方式可以缩小选区？如果你使用了命令 <code>//contract 10 down</code>，则选区就会如图所示一般从顶部缩小。 <img src="https://worldedit.enginehub.org/en/latest/_images/contract_down.png" alt="img"></p></div><h3 id="全向扩大和缩小" tabindex="-1">全向扩大和缩小 <a class="header-anchor" href="#全向扩大和缩小" aria-label="Permalink to &quot;全向扩大和缩小&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果你想要将选区在所有方向上扩大或缩小（或只是水平垂直方向），你可以使用 <code>//outset</code> 和 <code>//inset</code> 命令。例如，命令 <code>//inset -h 5</code> 将会水平缩小选区（东西南北四个方向上）5 格。不适用 <code>v</code> 或 <code>n</code> 参数会使得选区在六个方向上扩展。</p></div><h2 id="选区信息" tabindex="-1">选区信息 <a class="header-anchor" href="#选区信息" aria-label="Permalink to &quot;选区信息&quot;">​</a></h2><p>WorldEdit 也提供给你了查询你所选区域信息的命令。</p><h3 id="获取选区大小" tabindex="-1">获取选区大小 <a class="header-anchor" href="#获取选区大小" aria-label="Permalink to &quot;获取选区大小&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//size [-c]</span></span></code></pre></div><p>获取选区的大小及其所处世界。 <code>-c</code> 参数将会检查并返回剪贴板内而不是当前选区的信息。</p><h3 id="方块比例计算" tabindex="-1">方块比例计算 <a class="header-anchor" href="#方块比例计算" aria-label="Permalink to &quot;方块比例计算&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//count &lt;蒙版&gt;</span></span></code></pre></div><p>计算选区内匹配蒙版的方块数量。</p><h3 id="获取方块分布" tabindex="-1">获取方块分布 <a class="header-anchor" href="#获取方块分布" aria-label="Permalink to &quot;获取方块分布&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//distr [-d]</span></span></code></pre></div><p>显示选区内的方块分布。 <code>-c</code> 参数将会检查并返回剪贴板内而不是当前选区的方块分布信息。 <code>-d</code> 参数将会按方块状态而不是方块种类输出分布结果[sup][注2][/sup]。</p><div class="info custom-block"><p class="custom-block-title">示例：输出方块分布</p><p>仅按方块种类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>75      (52.083%) Air (minecraft:air)</span></span>
<span class="line"><span>41      (28.472%) Grass Block (minecraft:grass_block)</span></span>
<span class="line"><span>18      (12.500%) Rose Bush (minecraft:rose_bush)</span></span>
<span class="line"><span>5       (3.472%) Grass (minecraft:grass)</span></span></code></pre></div><p>按状态分类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>75      (52.083%) Air (minecraft:air)</span></span>
<span class="line"><span>41      (28.472%) Grass Block (minecraft:grass_block[snowy=false])</span></span>
<span class="line"><span>9       (6.250%) Rose Bush (minecraft:rose_bush[half=upper])</span></span>
<span class="line"><span>9       (6.250%) Rose Bush (minecraft:rose_bush[half=lower])</span></span>
<span class="line"><span>5       (3.472%) Grass (minecraft:grass)</span></span></code></pre></div></div><h2 id="选择模式" tabindex="-1">选择模式 <a class="header-anchor" href="#选择模式" aria-label="Permalink to &quot;选择模式&quot;">​</a></h2><p>使用命令 <code>//sel &lt;模式&gt;</code> 允许你将选区修改为不同形状。推荐在使用更复杂的图形作为选区时安装选区显示模组，这样你就看得见你的选区了。</p><div class="info custom-block"><p class="custom-block-title">//sel cuboid</p><p>标准的选择模式，上文已经提及。</p></div><div class="info custom-block"><p class="custom-block-title">//sel extend</p><p>左键选择第一点。剩下的点都是用右键选择的。每次点击右键都会将选区扩大以将新连接的点容纳在范围内。</p></div><div class="info custom-block"><p class="custom-block-title">//sel poly</p><p>左键选择第一点。剩下的点都是用右键选择的。每次点击右键都会产生一个可选的点。选区的上下底面通常会切合你选择的最高点和最低点。</p></div><div class="info custom-block"><p class="custom-block-title">//sel ellipsoid</p><p>左键选择中心，右键点击扩大。你可以在 x 和 y 轴附近调整半径，且 z 轴单独取决于你所点击的位置。</p></div><div class="info custom-block"><p class="custom-block-title">//sel sphere</p><p>左键选择中心，右键点击扩大。选区将是以两点连线为半径，第一位点为球心的球体。</p></div><div class="info custom-block"><p class="custom-block-title">//sel cyl</p><p>左键选择中心，右键点击扩大。你可以在 x 和 y 轴附近调整半径，且选区的上下底面通常会切合你选择的最高点和最低点。</p></div><div class="info custom-block"><p class="custom-block-title">//sel convex</p><p>左键选定第一点。剩下的点都是用右键选择的。选区为以所有点为顶点的凸多边形。</p></div>`,62)]))}const b=s(l,[["render",n]]);export{u as __pageData,b as default};
