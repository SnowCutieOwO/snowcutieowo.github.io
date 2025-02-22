import{_ as a}from"./chunks/image47.B5jSYz8d.js";import{_ as i,c as n,o as e,al as t}from"./chunks/framework.CAEutmY3.js";const E=JSON.parse('{"title":"RealisticWorldGenerator","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/compatibility.world-generators.realisticworldgenerator.md","filePath":"Oraxen/compatibility.world-generators.realisticworldgenerator.md"}'),l={name:"Oraxen/compatibility.world-generators.realisticworldgenerator.md"};function r(p,s,h,k,o,d){return e(),n("div",null,s[0]||(s[0]=[t('<h1 id="realisticworldgenerator" tabindex="-1">RealisticWorldGenerator <a class="header-anchor" href="#realisticworldgenerator" aria-label="Permalink to &quot;RealisticWorldGenerator&quot;">​</a></h1><p>RWG 是一个付费的世界生成器</p><p>RealisticWorldGenerator 允许你生成外观炫酷的世界。目前这个插件并不支持 Oraxen（这意味着插件并没有针对本插件的联动，也就不能在其结构如地牢、村庄等中简便地插入 Oraxen 物品），但支持自定义方块数据，所以你可以向世界中添加 Oraxen 的方块，并让其像钻石一般生成。</p><p>SpigotMC 链接：<a href="https://www.spigotmc.org/resources/realisticworldgenerator.15905/" target="_blank" rel="noreferrer">https://www.spigotmc.org/resources/realisticworldgenerator.15905/</a></p><h2 id="如何创建自定义矿物-方块" tabindex="-1">如何创建自定义矿物/方块 <a class="header-anchor" href="#如何创建自定义矿物-方块" aria-label="Permalink to &quot;如何创建自定义矿物/方块&quot;">​</a></h2><p>在本示例中，我们假设你已经按照<a href="./mechanics.noteblock-mechanic.html#矿物">这个教程</a>在 Oraxen 的配置中创建了一个方块（紫水晶）。</p><h3 id="定位待编辑的文件" tabindex="-1">定位待编辑的文件 <a class="header-anchor" href="#定位待编辑的文件" aria-label="Permalink to &quot;定位待编辑的文件&quot;">​</a></h3><p>首先，你需要决定向哪个世界添加自定义方块（或者直接生成）。在你准备好之后，重启你的服务器。你可以在 <code>/plugins/RealisticWorldGenerator/worlds</code> 找到新生成的世界。打开它，你能发现一些诸如**“ores.yml”、“biomes.yml”<strong>以及</strong>“replacement.yml”**的文件。</p><p>受到你所使用的 RWG 版本影响，向 RWG 添加方块的方式有很多。如果你使用的版本不高于 4.26.5，则你需要<a href="#添加方块rwg--4265">按照本段落后的教程进行操作</a>。如果你使用的版本高于这个，则你需要<a href="#添加方块rwg--4266">参考下方的教程</a>。</p><h3 id="添加方块-rwg-4-26-5" tabindex="-1">添加方块（RWG &lt;= 4.26.5） <a class="header-anchor" href="#添加方块-rwg-4-26-5" aria-label="Permalink to &quot;添加方块（RWG &lt;= 4.26.5）&quot;">​</a></h3><p>首先你需要找到你的自定义方块数据。你可以在任何安装 Oraxen 的服务器上在客户端中找到。只需放置你的方块（你可以通过命令或者 Oraxen 的展示界面获取）然后对着它按下 F3，即可获取你需要的信息。</p><p><img src="'+a+`" alt="img"></p><p>现在你就可以将你的新矿物添加至生成配置中。在本示例中，配置如下：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  amethyst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    chance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    spawn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">minecraft:mushroom_stem[up=false, down=false, north=false, south=false,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      west=true, east=false]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span></span></code></pre></div><h3 id="添加方块-rwg-4-26-6" tabindex="-1">添加方块（RWG &gt;= 4.26.6） <a class="header-anchor" href="#添加方块-rwg-4-26-6" aria-label="Permalink to &quot;添加方块（RWG &gt;= 4.26.6）&quot;">​</a></h3><p>你需要选择你想做的事。在本示例中我会选择**“ores.yml”**文件，但<a href="#定位待编辑的文件">上述提及的几个文件</a>操作步骤都是一样的。</p><p>在打开文件后，你需要以**“oraxen:”<strong>而非</strong>“minecraft:”**命名空间开头将自定义方块添加至配置中。</p><p>配置大致如下：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  amethyst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    chance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    spawn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">oraxen:amethyst_ore</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span></span></code></pre></div><p>完成后，保存文件并关闭服务器，删除旧区域数据再重新开启服务器即可应用改动。</p>`,20)]))}const y=i(l,[["render",r]]);export{E as __pageData,y as default};
