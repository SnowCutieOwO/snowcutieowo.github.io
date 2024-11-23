import{_ as a,c as i,a7 as e,o as p}from"./chunks/framework.Bz4u1pnU.js";const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAASUExURQAAAAAAAP8AAP/IyLsTE////9yTOWUAAAABdFJOUwBA5thmAAAAAWJLR0QF+G/pxwAAAAd0SU1FB+gHDAUeBWzVWVwAAAA0SURBVAjXFcpBDQAwCMXQ4oARDOwHBXOw+Rc1uDTvUFjmYIoNcSQnNE2pHHu6QDZ7GkLzA2IQA2WVoGE0AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTA3LTEyVDA1OjMwOjA1KzAwOjAwzPBqLAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wNy0xMlQwNTozMDowNSswMDowML2t0pAAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjQtMDctMTJUMDU6MzA6MDUrMDA6MDDquPNPAAAAAElFTkSuQmCC",n="/assets/image44.DLOsl7Y8.png",l="/assets/image45.Bhvn0QeQ.png",A=JSON.parse('{"title":"自定义字符","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/configuration.glyphs.md","filePath":"Oraxen/configuration.glyphs.md"}'),h={name:"Oraxen/configuration.glyphs.md"};function k(d,s,r,o,c,g){return p(),i("div",null,s[0]||(s[0]=[e('<h1 id="自定义字符" tabindex="-1">自定义字符 <a class="header-anchor" href="#自定义字符" aria-label="Permalink to &quot;自定义字符&quot;">​</a></h1><p>如何向游戏内添加自定义字符？</p><h2 id="什么是自定义字符" tabindex="-1">什么是自定义字符？ <a class="header-anchor" href="#什么是自定义字符" aria-label="Permalink to &quot;什么是自定义字符？&quot;">​</a></h2><p>自定义字符就是被覆盖了贴图的 Unicode 符号。它可以用在任何地方（聊天栏、物品名称及其描述等）。它们可以用来做很多有趣的东西（自定义界面、额外属性栏）。但它们最简单的用法就是制作 emoji。</p><h2 id="如何添加自定义字符" tabindex="-1">如何添加自定义字符？ <a class="header-anchor" href="#如何添加自定义字符" aria-label="Permalink to &quot;如何添加自定义字符？&quot;">​</a></h2><p>首先，你要先创建一个 png 贴图。例如，在 <code>default/chat</code> 文件夹下的 <code>heart.png</code> 文件。</p><p><img src="'+t+`" alt="img" title="heart.png"></p><p>然后你就可以在 glyphs 文件夹下的任何 yaml 文件中添加自己的配置。每个自定义字符的配置文件不应相同。数字则对应 Unicode 字符表中会使用的字符位置。height 参数允许你修改字符的比例，而 ascent 决定了字符显示的纵向偏移程度。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">heart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  texture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default/chat/heart</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ascent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span></code></pre></div><h2 id="我的自定义字符无效" tabindex="-1">我的自定义字符无效？ <a class="header-anchor" href="#我的自定义字符无效" aria-label="Permalink to &quot;我的自定义字符无效？&quot;">​</a></h2><p>这有可能是这样的文字配置不正确导致的。</p><p>请检查控制台是否出现了报错，因为它会告诉你究竟是哪个自定义字符配置出错，并且告诉你它为何会出错。</p><p><img src="`+n+`" alt="img"></p><h2 id="多位图自定义字符" tabindex="-1">多位图自定义字符 <a class="header-anchor" href="#多位图自定义字符" aria-label="Permalink to &quot;多位图自定义字符&quot;">​</a></h2><p>若你有一个包含了多个表情的 png 图片，你可以将其做成多位图字符。</p><p>这意味着你可以将多个自定义字符放在一张贴图中。但是要想让它正常生效需要一些额外步骤。</p><p>在 fonts.yml 中，这里有一部分为 <code>bitmaps</code> 准备的设置。</p><p>在其中你需要指定一个 <code>id</code>，这会在你的自定义字符配置中用到。</p><p>你也需要指定贴图的路径，以及位图拥有几行几列。</p><p>下文即为 <code>fonts.yml</code> 中一个条目的示例：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bitmaps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  example_bitmap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    texture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">example/example_bitmap</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    rows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    columns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ascent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span></code></pre></div><p><img src="`+l+`" alt="img"></p><p>如你所见，这个图片有四行九列。</p><p>ascent 与 height 属性会对位图中所有的自定义字符生效。</p><p>在配置好位图之后，你就可以为其绑定自定义字符。</p><p>在你的自定义字符配置中，你需要指定位图 id，以及你想要使用的自定义字符的行列位置。</p><p>下文即为使用上述位图的自定义字符配置。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">example_glyph</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  texture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default/chat/example_glyph</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  bitmap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">example_bitmap</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    row</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #ascent: 8 # 位图自动指定，无需添加</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #height: 8 # 位图自动指定，无需添加</span></span></code></pre></div><p>这会将自定义字符与上述图片的第一行第一个 emoji 匹配。</p><h2 id="emoji-列表" tabindex="-1">Emoji 列表 <a class="header-anchor" href="#emoji-列表" aria-label="Permalink to &quot;Emoji 列表&quot;">​</a></h2><p>若要让自定义字符能在 <code>/oraxen emojis</code> 的列表中出现，你需要像下文一样对其设置。</p><p>若未指定，则它们会为默认的 <code>false</code>。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">heart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  texture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default/chat/heart</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  is_emoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><p>默认情况下，这也只会显示玩家有权限使用的 emoji。</p><p>在 <code>settings.yml</code> 中，你可以切换 <code>only_show_emojis_with_permissions</code> 设置。</p><p>这会向玩家显示所有 emoji，他们可以将鼠标悬浮其上来查看是否有权限使用它们。</p><h2 id="如何在聊天栏中使用" tabindex="-1">如何在聊天栏中使用？ <a class="header-anchor" href="#如何在聊天栏中使用" aria-label="Permalink to &quot;如何在聊天栏中使用？&quot;">​</a></h2><p>你需要向你的自定义字符部分添加一个 <code>chat</code> 子设置：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">chat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  placeholders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;3&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;oraxen.emoji.heart&quot;</span></span></code></pre></div><p>这样变量就可以在玩家拥有权限的情况下在聊天栏中使用（如果指定了权限就会要求，若未设置也不会强求玩家拥有权限）。</p><h2 id="如何让自定义字符能被-tab-键自动补全" tabindex="-1">如何让自定义字符能被 tab 键自动补全？ <a class="header-anchor" href="#如何让自定义字符能被-tab-键自动补全" aria-label="Permalink to &quot;如何让自定义字符能被 tab 键自动补全？&quot;">​</a></h2><p>只需将 chat 部分下设置 <code>tabcomplete: true</code> 即可。</p><p>若未指定，则默认为 <code>false</code>。</p><p>自动补全设置目前只对 1.19.3 及以上的服务器有效。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">chat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  tabcomplete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  placeholders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;3&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;oraxen.emoji.heart&quot;</span></span></code></pre></div><h2 id="不要删除-shifts-yml" tabindex="-1">不要删除 shifts.yml <a class="header-anchor" href="#不要删除-shifts-yml" aria-label="Permalink to &quot;不要删除 shifts.yml&quot;">​</a></h2><p>这个文件会在默认纹理包中使用，如果将其强行移除可能会导致插件载入失败。</p><p>另外也没有合适的理由删除这个文件。插件在启动时会自动生成这个文件。</p><p>如果愿意承担后果，在这些文件中做出的修改不会被覆盖，除非文件被删除。</p><p><code>interface.yml</code> 也是如此。它们被用在示例语言文件中，所以删除它们会导致对应部分内容载入失败。</p><h3 id="我的偏移自定义字符没有任何效果" tabindex="-1">我的偏移自定义字符没有任何效果？ <a class="header-anchor" href="#我的偏移自定义字符没有任何效果" aria-label="Permalink to &quot;我的偏移自定义字符没有任何效果？&quot;">​</a></h3><p>这一般是因为偏移的自定义字符使用了透明的图像。</p><p>例如，如果你将 <code>Oraxen/pack/textures/required</code> 下的 null.png 编辑为透明，就会触发这个问题。</p><p>偏移的图像不能是透明的，如果你的贴图用到了它们，则大小至少要为 1x1 像素。</p><h2 id="placeholderapi" tabindex="-1">PlaceholderAPI <a class="header-anchor" href="#placeholderapi" aria-label="Permalink to &quot;PlaceholderAPI&quot;">​</a></h2><h3 id="我的自定义字符变量是什么" tabindex="-1">我的自定义字符变量是什么？ <a class="header-anchor" href="#我的自定义字符变量是什么" aria-label="Permalink to &quot;我的自定义字符变量是什么？&quot;">​</a></h3><p>这部分的名称就是它的 id。在本章节的示例中，它就是 <code>heart</code>，变量为 <code>%oraxen_glyphid%</code>，即 <code>%oraxen_heart%</code></p><p>其中，ID 为任何自定义字符配置中的第一行，它不是变量或者贴图的名称。</p><h3 id="如何在前缀-luckperms-中使用这些" tabindex="-1">如何在前缀/LuckPerms 中使用这些 <a class="header-anchor" href="#如何在前缀-luckperms-中使用这些" aria-label="Permalink to &quot;如何在前缀/LuckPerms 中使用这些&quot;">​</a></h3><p>向 LuckPerms 的前缀中添加自定义字符，一般用于展示等级。只需将 <code>%oraxen_glyphid%</code> 加入前缀中即可。</p><p>例如，如果使用的是 LuckPerms，你可以使用命令：<code>/lp group default meta setprefix %oraxen_glyphid%</code>，变量会自动解析为对应的文字。</p><p>因为大多数插件只会判断一次变量，因此 %luckperms_prefix% 不会被再次判断。</p><p>你可能需要获取 PlaceholderAPI 的 Utils-Expansion 变量拓展。</p><p>若要获取这个，点击<a href="https://api.extendedclip.com/media/Utils-Expansion-1.0.1.jar" target="_blank" rel="noreferrer">这个链接</a>，然后将其放在 <code>plugins/PlaceholderAPI/expansions</code> 文件夹下。</p><p>然后在插件中，你可以选择使用 %utils_parse:2_luckperms_prefix% 来再次判断前缀。</p><p>需要注意的是，若要让这个功能正常工作，你的聊天插件必须支持 PlaceholderAPI。</p><p>若出于某些原因这个功能不能正常工作，你可以使用自定义字符配置中 <code>char</code> 部分设置的 Unicode 原字符。</p><h3 id="如何在物品的名称-描述中使用自定义字符" tabindex="-1">如何在物品的名称/描述中使用自定义字符？ <a class="header-anchor" href="#如何在物品的名称-描述中使用自定义字符" aria-label="Permalink to &quot;如何在物品的名称/描述中使用自定义字符？&quot;">​</a></h3><p>任何自定义字符都可以在物品配置的名称与描述中使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;glyph:heart&gt;</span></span></code></pre></div><p>其中，<code>heart</code> 需要替换为你的自定义字符的 ID。</p>`,71)]))}const y=a(h,[["render",k]]);export{A as __pageData,y as default};