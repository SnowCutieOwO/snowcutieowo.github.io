import{_ as i,c as a,o as n,al as h}from"./chunks/framework.ySGSHPST.js";const l="/assets/image48.mPW3mmZ7.png",c=JSON.parse('{"title":"家具机制","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/mechanics.furniture-mechanic.md","filePath":"Oraxen/mechanics.furniture-mechanic.md"}'),p={name:"Oraxen/mechanics.furniture-mechanic.md"};function t(k,s,e,E,r,d){return n(),a("div",null,s[0]||(s[0]=[h('<h1 id="家具机制" tabindex="-1">家具机制 <a class="header-anchor" href="#家具机制" aria-label="Permalink to &quot;家具机制&quot;">​</a></h1><p>如何向游戏内添加非实心方块</p><h2 id="家具机制-1" tabindex="-1">家具机制 <a class="header-anchor" href="#家具机制-1" aria-label="Permalink to &quot;家具机制&quot;">​</a></h2><p><img src="'+l+`" alt="img" title="示例家具"></p><h3 id="单物品示例配置" tabindex="-1">单物品示例配置 <a class="header-anchor" href="#单物品示例配置" aria-label="Permalink to &quot;单物品示例配置&quot;">​</a></h3><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  displayname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;gray&gt;Table&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DIAMOND</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Pack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    generate_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default/table</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DISPLAY_ENTITY</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 有效类型为 ITEM_FRAME, DISPLAY_ENTITY &amp; GLOWING_ITEM_FRAME</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      block_sounds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        place_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">block.stone.place</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        break_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">block.stone.break</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        hit_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my.custom.hitsound</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 在 Oraxen/sound.yml 中预先定义的自定义音效</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        step_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my.custom.stepsound</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 同样需要 Oraxen/pack-folder 拥有对应的声音文件</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        fall_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my.custom.fallsound</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      barrier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      drop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        silktouch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        loots</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - { </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">oraxen_item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">probability</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><h3 id="自定义声音" tabindex="-1">自定义声音 <a class="header-anchor" href="#自定义声音" aria-label="Permalink to &quot;自定义声音&quot;">​</a></h3><p>如自定义方块的家具，能拥有自定义声音。</p><p>当前版本，你可以设置的音效包括被放置、被破坏、损坏中、（走在其上的）脚步声、（摔在其上的）踩地声。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    block_sounds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      place_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">block.stone.place</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      break_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">block.stone.break</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      hit_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my.custom.hitsound</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 在 Oraxen/sound.yml 中预先定义的自定义音效</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      step_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my.custom.stepsound</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 同样需要 Oraxen/pack-folder 拥有对应的声音文件</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      fall_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my.custom.fallsound</span></span></code></pre></div><p>所有音量与音调值都与 Minecraft 对方块使用的设置相同。</p><p>若你想要修改音调或音量，你可以参考下列的格式。</p><p>需要注意的是，这两种格式是相互兼容的。</p><p>我们推荐使用默认的那个，但你仍然可以选择修改这些选项。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    block_sounds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      place</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">block.stone.place</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        volume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        pitch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      break_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">block.stone.break</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      hit_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my.custom.hitsound</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 在 Oraxen/sound.yml 中预先定义的自定义音效</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      step_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my.custom.stepsound</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 同样需要 Oraxen/pack-folder 拥有对应的声音文件</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      fall_sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">my.custom.fallsound</span></span></code></pre></div><h3 id="可旋转" tabindex="-1">可旋转 <a class="header-anchor" href="#可旋转" aria-label="Permalink to &quot;可旋转&quot;">​</a></h3><p>若要让一个家具能够旋转，你只需将如下内容添加至物品设置中即可。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    rotatable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><h3 id="modelengine-家具" tabindex="-1">ModelEngine 家具 <a class="header-anchor" href="#modelengine-家具" aria-label="Permalink to &quot;ModelEngine 家具&quot;">​</a></h3><p>若要将 ModelEngine 的模型用作家具，只需将下文内容添加至你的物品设置中即可：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    modelengine_id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">name_of_your_bbmodel_file</span></span></code></pre></div><h3 id="唱片机" tabindex="-1">唱片机 <a class="header-anchor" href="#唱片机" aria-label="Permalink to &quot;唱片机&quot;">​</a></h3><p>这个选项能让家具放入音乐唱片，还能支持播放自定义唱片。</p><p>你可以调整唱片机中的 <code>volume</code>（音量）与 <code>pitch</code>（音调）。</p><p>这里也有一个 <code>permission</code> 设置，这可以用来限制特定的玩家才可使用唱片机。</p><p>默认情况下权限一栏为空，即表示任何人都可以使用唱片机播放音乐。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    jukebox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      volume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      pitch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;oraxen.jukebox.play&quot;</span></span></code></pre></div><h3 id="屏障" tabindex="-1">屏障 <a class="header-anchor" href="#屏障" aria-label="Permalink to &quot;屏障&quot;">​</a></h3><p>拥有隐形特性的屏障方块可以给家具添加碰撞箱。你可以放置单个屏障，或是一系列位置相对于放置玩家的屏障。</p><h4 id="单屏障" tabindex="-1">单屏障： <a class="header-anchor" href="#单屏障" aria-label="Permalink to &quot;单屏障：&quot;">​</a></h4><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    barrier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><h4 id="多屏障" tabindex="-1">多屏障： <a class="header-anchor" href="#多屏障" aria-label="Permalink to &quot;多屏障：&quot;">​</a></h4><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      barriers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">origin</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 简写为 { x: 0, y: 0, z: 0 }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 若未指定，坐标为 0 -&gt; { x: 0, y: 0, z: 1 }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - { </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span></code></pre></div><h2 id="座位" tabindex="-1">座位 <a class="header-anchor" href="#座位" aria-label="Permalink to &quot;座位&quot;">​</a></h2><p>这个功能仅在上述的屏障功能启用时有效。</p><p>目前，即使存在多个屏障，它也会为每个屏障生成一个座位。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    seat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><p>你也可以通过添加一个 <code>yaw</code> 设置来按需修改旋转位置。</p><p>需要注意的是，这部分一般不推荐你修改。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    seat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">yaw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><h2 id="限制旋转" tabindex="-1">限制旋转 <a class="header-anchor" href="#限制旋转" aria-label="Permalink to &quot;限制旋转&quot;">​</a></h2><p>你可以通过 <code>restricted_rotation</code> 选项限制某个家具的 <code>roration-facings</code>。</p><p>它可以设置为 <code>STRICT</code> 或 <code>VERY_STRICT</code>。前者只允许如头颅般旋转 8 个位置，而后者只允许旋转 4 个位置。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">chair</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      restricted_rotation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VERY_STRICT</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 若未指定则为 STRICT</span></span></code></pre></div><h2 id="限制放置" tabindex="-1">限制放置 <a class="header-anchor" href="#限制放置" aria-label="Permalink to &quot;限制放置&quot;">​</a></h2><p>你可以在 <code>limited_placing</code> 部分设置中决定自定义方块/家具可以被放在哪些方块上。你可以使用诸如 <code>roof</code>、<code>floor</code> 和 <code>wall</code> 的选项来决定能被放在方块的哪一面。默认情况下这些都会被设置为 <code>true</code>。</p><p><code>type</code> 参数决定了拒绝模式为白名单或黑名单。</p><p>若为 <code>ALLOW</code>，则只有列表内的方块能够依附它们。</p><p>若为 <code>DENY</code>，则列表内的方块不能被它们依附。</p><p>这里也存在着一个 <code>radius_limitation</code> 选项，允许你限制指定半径内家具的数量。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">chair</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      limited_placing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        radius_limitation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          radius</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        roof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        floor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        wall</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ALLOW</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        block_types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GRASS_BLOCK</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DIRT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        block_tags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">base_stone_nether</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        oraxen_blocks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">chair</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ruby_ore</span></span></code></pre></div><p><code>block_tags</code>（方块标签）可填入的内容能在<a href="https://minecraft.fandom.com/wiki/Tag#Block_tags" target="_blank" rel="noreferrer">这里</a>找到。适用于拒绝/允许一系列有指定标签的方块。</p><p><code>block_types</code> 即为材料名称。适用于拒绝/允许指定的方块。</p><p><code>oraxen_blocks</code> 为 Oraxen 配置中定义的方块。</p><p>允许所有自定义方块与家具填入此处，但家具必须设置 <code>barrier-hitbox</code>（屏障碰撞箱）。</p><h2 id="容器" tabindex="-1">容器 <a class="header-anchor" href="#容器" aria-label="Permalink to &quot;容器&quot;">​</a></h2><p>这是家具与音符盒机制的一个子机制，允许你将自定义方块设置为容器。</p><p>例如箱子、衣柜或其他什么的方块。</p><p>这里有你能选择的不同类型：<em>STORAGE</em>、<em>PERSONAL</em>、<em>ENDERCHEST</em> 与 <em>DISPOSAL</em>。</p><p><strong>STORAGE</strong> 与普通箱子类型，任何玩家都可以打开并存取物品。</p><p><strong>PERSONAL</strong> 类似自定义末影箱，允许你自行决定行数等内容。</p><p><strong>ENDERCHEST</strong> 就是原版的末影箱，但允许你通过指定的自定义方块或家具打开它们。</p><p><strong>DISPOSAL</strong> 即为自定义垃圾桶，你可以向其中丢入物品，关闭界面后它们会被销毁。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>如果你使用的是家具，则它必须拥有屏障碰撞箱！</p></div><h3 id="光照" tabindex="-1">光照 <a class="header-anchor" href="#光照" aria-label="Permalink to &quot;光照&quot;">​</a></h3><p>你可以设置家具发光。这个选项对应了光强，且值必须处于 1 至 15 间。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    barrier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    light</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    drop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      silktouch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      loots</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - { </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">oraxen_item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">probability</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><h3 id="blocklocker" tabindex="-1">BlockLocker <a class="header-anchor" href="#blocklocker" aria-label="Permalink to &quot;BlockLocker&quot;">​</a></h3><p>你可以通过这个选项来允许容器被 <a href="https://www.spigotmc.org/resources/blocklocker.3268/" target="_blank" rel="noreferrer">BlockLocker</a> 的锁保护。</p><p>有效的保护类型为 CONTAINER、DOOR、ATTACHABLE。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    blocklocker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      can_protect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      protection_type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CONTAINER</span></span></code></pre></div>`,71)]))}const o=i(p,[["render",t]]);export{c as __pageData,o as default};
