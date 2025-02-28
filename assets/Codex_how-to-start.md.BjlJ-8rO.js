import{_ as a,c as i,o as e,b0 as t}from"./chunks/framework.w6NQj85O.js";const n="/assets/image7.CA4xvPls.png",c=JSON.parse('{"title":"如何开始","description":"","frontmatter":{},"headers":[],"relativePath":"Codex/how-to-start.md","filePath":"Codex/how-to-start.md"}'),p={name:"Codex/how-to-start.md"};function l(h,s,r,k,o,d){return e(),i("div",null,s[0]||(s[0]=[t(`<h1 id="如何开始" tabindex="-1">如何开始 <a class="header-anchor" href="#如何开始" aria-label="Permalink to &quot;如何开始&quot;">​</a></h1><p>使本插件在服务器上正常运作的必要信息。</p><h2 id="要求" tabindex="-1">要求 <a class="header-anchor" href="#要求" aria-label="Permalink to &quot;要求&quot;">​</a></h2><h3 id="spigot" tabindex="-1">Spigot <a class="header-anchor" href="#spigot" aria-label="Permalink to &quot;Spigot&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>你需要至少 Spigot 或 Paper 或其分支服务端核心才能使插件运作。不要使用 CraftBukkit。</p></div><h2 id="可选依赖" tabindex="-1">可选依赖 <a class="header-anchor" href="#可选依赖" aria-label="Permalink to &quot;可选依赖&quot;">​</a></h2><h3 id="placeholderapi" tabindex="-1">PlaceholderAPI <a class="header-anchor" href="#placeholderapi" aria-label="Permalink to &quot;PlaceholderAPI&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">信息</p><p>这个插件是完全可选安装的。<br> 若你想要玩家在GUI中使用变量，那你就会用到这个插件。<br> 插件地址：<a href="https://www.spigotmc.org/resources/placeholderapi.6245/" target="_blank" rel="noreferrer">https://www.spigotmc.org/resources/placeholderapi.6245/</a></p></div><h3 id="解锁图鉴的插件" tabindex="-1">解锁图鉴的插件 <a class="header-anchor" href="#解锁图鉴的插件" aria-label="Permalink to &quot;解锁图鉴的插件&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">信息</p><p>WorldGuard（进入区域时解锁图鉴）：<a href="https://dev.bukkit.org/projects/worldguard" target="_blank" rel="noreferrer">https://dev.bukkit.org/projects/worldguard</a></p><p>MythicMobs（击杀特定怪物时解锁图鉴）：<a href="https://www.spigotmc.org/resources/5702/" target="_blank" rel="noreferrer">https://www.spigotmc.org/resources/5702/</a></p></div><h2 id="插件安装" tabindex="-1">插件安装 <a class="header-anchor" href="#插件安装" aria-label="Permalink to &quot;插件安装&quot;">​</a></h2><p>若要安装此插件，你只需要将插件 jar 文件放入服务器的 plugins 文件夹下，然后启动服务器即可。第一次载入后插件将会在 <code>categories</code> 文件夹下创建示例配置，你可以将它们用作参考，或者删除它们。</p><h2 id="创建第一个图鉴条目" tabindex="-1">创建第一个图鉴条目 <a class="header-anchor" href="#创建第一个图鉴条目" aria-label="Permalink to &quot;创建第一个图鉴条目&quot;">​</a></h2><p>首先前往插件的 <code>categories</code> 文件夹，打开一个分类文件。你可以创建自己的分类文件，但在本示例中我会打开 <strong>monsters.yml</strong> 文件。</p><p>复制其中一个条目的途径，例如 <code>shadow_warrior</code>，并将它粘贴在下方，修改它的名称。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">discoveries</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  shadow_warrior</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#a36bfe&amp;l影之战士&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#eeeeee阴影沼泽中所发现的异象.&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#eeeeee难以战胜.&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;7掉落物:&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;8❱ #eeeeee阴影魔药 &amp;8(25%)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;8❱ #eeeeee铁锭 &amp;8(90%)&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    discovered_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MOB_KILL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        mob_type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ZOMBIE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        mob_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Shadow Warrior</span></span></code></pre></div><p>修改新图鉴条目的名称与描述。</p><p>你还需要设置玩家解锁图鉴条目的时机。我想要将其与 MythicMobs 的一个实体关联，所以在 <code>discovered_on</code> 部分我需要填入 <strong>MYTHIC_MOB_KILL</strong>，在 <code>value</code> 下的 <code>mob_type</code> 填入对应的 MythicMobs 实体名称。</p><div class="info custom-block"><p class="custom-block-title">信息</p><p>当你想要某个条目只能通过控制台命令解锁时，你可以删除整个 <code>discovered_on</code> 部分配置。</p></div><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">forest_corrupter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#a36bfe&amp;l森林腐化者&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#eeeeee肯格尔森林就是被这种不知名的实体腐化的。&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;7掉落物:&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;8❱ #eeeeee腐化树干 &amp;8(60%)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;8❱ #eeeeee腐化树脂 &amp;8(15%)&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    discovered_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MYTHIC_MOB_KILL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        mob_type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">forest_corrupter</span></span></code></pre></div><p><img src="`+n+'" alt="img"></p>',21)]))}const g=a(p,[["render",l]]);export{c as __pageData,g as default};
