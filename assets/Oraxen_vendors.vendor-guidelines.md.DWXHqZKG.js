import{_ as i,c as a,o as e,al as n}from"./chunks/framework.LK_RS8Nx.js";const r=JSON.parse('{"title":"创作者指导","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/vendors.vendor-guidelines.md","filePath":"Oraxen/vendors.vendor-guidelines.md"}'),p={name:"Oraxen/vendors.vendor-guidelines.md"};function l(t,s,h,k,d,o){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="创作者指导" tabindex="-1">创作者指导 <a class="header-anchor" href="#创作者指导" aria-label="Permalink to &quot;创作者指导&quot;">​</a></h1><p>对创作者创建 Oraxen 资源包时的指导教程</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>Oraxen 有几种方式让你能够将你的 MCModels 模型置入其中。</p><p>本教程将会提到多种可行的方式。</p><p>家具、自定义方块或物品资源包各有差别，你在创建资源包时使用的配置也会略有不同。</p><p>推荐在你的可下载资源包中放入 Oraxen 的配置文件及其他相关文件，这能让用户更快速地开箱即用。</p><h2 id="普通资源包结构教程" tabindex="-1">普通资源包结构教程 <a class="header-anchor" href="#普通资源包结构教程" aria-label="Permalink to &quot;普通资源包结构教程&quot;">​</a></h2><p><code>model</code> 和 <code>textures</code> 属性都在 <code>pluginss/Oraxen/pack/models(或 textures)/</code> 下。</p><p>所以模型文件会储存在 <code>plugins/Oraxen/pack/models/packname_or_something/model_file.json</code>。</p><p>如果你想要使用其他命名空间，你应该将你的文件放入 <code>plugins/Oraxen/pack/assets/命名空间/models(或 textures)/</code>。在配置中用于 <code>model</code> 和 <code>textures</code> 的格式即为 <code>命名空间:文件路径</code>。</p><p>任意模型、贴图或文件路径都不应包含大写字母或空格。</p><p>1.13 之后的资源包文件中不支持这样的命名方式（尽管 Optifine 保留了这个功能）。</p><ol><li><code>assets/namespace/models/SOMETHING/my model.json</code> X</li><li><code>assets/namespace/models/something/my model.json</code> X</li><li><code>assets/namespace/models/something/my_model.json</code> ✓</li></ol><p>纹理最高分辨率应当为 256x256px。这是件非常基础的事，但我还是需要将其指出。</p><p>无论什么情况，我们均不推荐你将诸如 <code>paper.json</code> 或其他基础材料文件导入。</p><p>在支持频道中这些是最经常被提及的问题，且可以通过最基础的 Oraxen 物品设置解决。</p><p>一般来说，如果一或多个 Oraxen 物品使用了这个材料，Oraxen 会负责将这些内容输出为最终资源包。<br> 这会让处理 CustomModelData 的过程更加简单，并解决大部分的问题。</p><h2 id="普通配置项" tabindex="-1">普通配置项 <a class="header-anchor" href="#普通配置项" aria-label="Permalink to &quot;普通配置项&quot;">​</a></h2><p>自定义模型数据（CustomModelData）是资源包冲突最常见的问题。</p><p>一些资源包非常偏向于使用同种物品及相同的自定义模型数据值。</p><p>Oraxen 有几种解决问题的方法。</p><ol><li>如果配置文件没有指定 <code>Pack.custom-model_data</code>，Oraxen 会基于 <code>material</code> 和 <code>model</code> 为其分配最大的未使用值。 <ol><li>这个值通常会保存至配置文件，除非 <code>disable_automatic_model_data</code> 设置为 true。</li><li>创作者应该将这个值设置为 <code>true</code>，并且不在配置文本中指定自定义模型数据的值，以此允许 Oraxen 自行分配。</li></ol></li><li>对于替换字符，情况大致相似。它有一个 <code>code</code> 属性，Oraxen 会为其分配最大的未使用值。 <ol><li>这个值通常会保存至配置文件，除非 <code>disable_automatic_glyph_code</code> 设置为 true。</li><li>创作者应该将这个值设置为 <code>true</code>，并且不在配置文本中指定 <code>code</code> 的值，以此允许 Oraxen 自行分配。</li></ol></li><li>因为 ModelEngine 以 <code>LEATHER_HORSE_ARMOR</code> 为其基础属性，因此建议配置文本中不使用这个物品。 <ol><li>使用其他可染色的物品，如 <code>TIPPED_ARROW</code>、<code>POTION</code> 或 <code>SPLASH_POTION</code> 以让物品能够最大的兼容性。</li></ol></li><li>如果你在制作自定义盔甲，需要注意的是不同分辨率的贴图不能混用。 <ol><li>这意味着任何包含 128x64 贴图的装备将不能与 64x32 贴图的兼容。</li><li>购买者也应当被告知将 <code>armor_resolution</code> 设置为匹配所使用资源包的分辨率。</li><li>这个值应当被设置为 <code>armor_layer</code> 文件的长度。（128x64 为 32，64x32 为 16（默认））</li><li>装备对格式要求非常严格，非常建议参考<a href="./configuration.custom-armors.html">装备</a>部分的教程进行制作。</li></ol></li></ol><h2 id="自定义物品" tabindex="-1">自定义物品 <a class="header-anchor" href="#自定义物品" aria-label="Permalink to &quot;自定义物品&quot;">​</a></h2><p>自定义物品为最普遍的资源包类型，在 Oraxen 上的实现方式也是最简单的。</p><p>你需要物品配置文件，以及为所有资源包准备的文件夹。</p><p>配置文件应当放在 <code>Oraxen/items</code> 下，命名无过多要求。</p><p>为便于分辨，建议将文件命名为与资源包相同或相近的格式。</p><p>示例配置文件如下：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my_example_item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  displayname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;red&gt;自定义物品&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PAPER</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Pack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    generate_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">packname_or_something/model_file</span></span></code></pre></div><p>这是最基础的示例。</p><p>如果你在使用 2D 物品，则 <code>Pack</code> 部分应当看起来像这样：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Pack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  generate_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  parent_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item/generated&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  textures</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">packname_or_something/texture_file</span></span></code></pre></div><p>另外，<code>textures</code> 也接受指定的根名：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Pack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  generate_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  parent_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item/generated&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  textures</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">packname_or_something/top</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">packname_or_something/bottom</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    side</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">packname_or_something/side</span></span></code></pre></div><p>大多数使用了带朝向的方块，你可以更方便地指定侧边、顶部及底部的贴图。</p><p>基本上这些内容依赖于 <code>parent_model</code>，所以如果你有一个自定义条目树，你也可以如此照做。</p><p><code>parent_model</code> 与 <code>model</code> 和 <code>textures</code> 的结构相同，所以你可以在这里使用 <code>命名空间:文件路径</code> 的格式。</p><h2 id="自定义方块" tabindex="-1">自定义方块 <a class="header-anchor" href="#自定义方块" aria-label="Permalink to &quot;自定义方块&quot;">​</a></h2><p>自定义方块基本上就是自定义物品，只不过添加了一些方块机制。</p><p>这意味着你可以使用与上一段相同的配置，但需要加上 <code>Mechanics</code> 不分。</p><p>这里有两种类型的方块机制，<code>noteblock</code> 与 <code>stringblock</code>。</p><p><code>noteblock</code> 基本上可用于任何实心方块，如石头、木头、泥土等。</p><p><code>stringblock</code> 一般用于植物、花卉与其他没有碰撞箱的装饰物。</p><h3 id="音符盒-noteblock" tabindex="-1">音符盒（NoteBlock） <a class="header-anchor" href="#音符盒-noteblock" aria-label="Permalink to &quot;音符盒（NoteBlock）&quot;">​</a></h3><p><code>noteblock</code> 机制为大多数方块普遍使用的机制。</p><p>下文为示例配置：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my_example_block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  displayname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;red&gt;My Example Block&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PAPER</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Pack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    generate_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    parent_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;block/cube_all&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    textures</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">something/texture_file</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    noteblock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      custom_variation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">something/model_file</span></span></code></pre></div><p><code>custom_variation</code> 属性用于标识普通方块与特殊方块。</p><p>与 <code>custom_model_data</code> 不同的是，这不会自动分配，你必须自行指定。</p><p>因为它会生成在世界中，玩家就能够对其进行控制。</p><p>也许在未来的某个时间点，我们能实现为其的自动分配。如果你出售的资源包包含 README 说明文件，你就应该向买家提提及这件事。</p><p><code>model</code> 属性与 <code>Pack</code> 部分的相同，且遵守同一规则。</p><p>如果启用了 <code>generate_model</code> 项且你指定了材质，则模型为你的物品 ID，即 <code>my_example_block</code>。</p><p>这里也有额外的子机制，如自定义音效、硬度等。</p><p>你可以在<a href="./mechanics.noteblock-mechanic.html">音符盒机制</a>及其子页面下了解更多。</p><h3 id="绊线方块-stringblock" tabindex="-1">绊线方块（StringBlock） <a class="header-anchor" href="#绊线方块-stringblock" aria-label="Permalink to &quot;绊线方块（StringBlock）&quot;">​</a></h3><p><code>stringblock</code> 机制用于没有碰撞箱的方块。</p><p>一般用于植物、花卉及其他装饰方块。</p><p>下文为示例配置文件：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my_example_block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  displayname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;red&gt;自定义方块&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PAPER</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Pack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    generate_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    parent_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;block/cross&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    textures</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">something/texture_file</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    stringblock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      custom_variation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">something/model_file</span></span></code></pre></div><p>如你所见，这部分与 <code>noteblock</code> 机制相似。</p><p>有关的子机制可以在<a href="./mechanics.stringblock-mechanic.html">绊线钩机制</a>及其子页面下浏览。</p><h2 id="自定义家具" tabindex="-1">自定义家具 <a class="header-anchor" href="#自定义家具" aria-label="Permalink to &quot;自定义家具&quot;">​</a></h2><p>家具一般为用到了 3D 模型的饰物，如椅子、桌子等。</p><p>下文为示例配置：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">my_example_furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  displayname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;red&gt;示例家具&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PAPER</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Pack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    generate_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">packname_or_something/model_file</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DISPLAY_ENTITY</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      hitbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      display_entity_properties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        display_transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">FIXED</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      barrier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><p>如你所见，这里有些你能够使用的属性。</p><p><code>type</code> 属性可以指定家具类型。对应选项为 <code>DISPLAY_ENTITY</code>、<code>ITEM_FRAME</code> 和 <code>GLOW_ITEM_FRAME</code>。</p><p><code>DISPLAY_ENTITY</code> 为 1.19.4 以上出现的一种新类型，也只能在 1.19.4 以上的服务器中生效。</p><p>推荐设置为这个选项，低版本会被自动调整为 <code>ITEM_FRAME</code> 选项。</p><p>这种类型有更多设置并允许更好的碰撞箱调整，且性能更高。</p><p><code>hitbox</code> 属性用于指定家具的碰撞箱。</p><p>这个功能只在 1.19.4 以上的服务器有效，且会生成交互实体。</p><p>它只是一个碰撞箱，用于检测点击及其他与家具的交互。</p><p>这个实体一般没有碰撞箱，所以你需要使用 <code>barrier</code> 属性。</p><p><code>display_entity_properties</code> 属性用于指定 <code>DISPLAY_ENTITY</code> 的属性。</p><p><code>display_transform</code> 属性用于指定物品的形态。可用选项有 <code>FIXED</code>、<code>HEAD</code>、<code>BODY</code>、<code>LEFT_ARM</code>、<code>RIGHT_ARM</code>、<code>RIGHT_LEG</code> 以及 <code>GROUND</code>。</p><p>基本上这些就是 BlockBench 的 <code>Display</code> 部分的内容。</p><p>如果你想要 <code>ITEM_FRAME</code> 与 <code>DISPLAY_ENTITY</code> 间的兼容性，你应当使用 <code>FIXED</code>。，</p><p>ItemsAdder 因其使用了盔甲架，会使用相同的 <code>HEAD</code>。</p><p>你可以在<a href="./mechanics.furniture-mechanic.display-entity-furniture.html#展示实体属性">展示实体属性</a>部分详细阅读。</p><p><code>barrier</code> 属性用于指定家具的碰撞箱。</p><p>这会在家具的位置放置一个普通的屏障方块。</p><p>你可以按如下格式放置多个屏障：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    barriers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - { </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - { </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><h2 id="自定义声音" tabindex="-1">自定义声音 <a class="header-anchor" href="#自定义声音" aria-label="Permalink to &quot;自定义声音&quot;">​</a></h2><p>一些资源包可能会带有自然环境、实体或其他东西的音效。</p><p>推荐尽可能使用其他的命名空间。</p><p>这是因为 Oraxen 默认会基于 <code>sound.yml</code> 生成一个 sounds.json 文件，这会导致冲突。</p><p>如果用例允许自定义命名空间，你只需将 sounds.json 添加至 <code>Oraxen/pack/assets/namespace/</code>，并将声音文件添加至 <code>Oraxen/pack/assets/namespace/sounds</code> 文件夹下。</p><p>如果用例需要为 Minecraft 的普通声音，你不应该在资源包中包含 sounds.json。</p><p>因此你需要向 Oraxen 的 sound.yml 文件添加条目，来获得最大兼容性。</p><p>之后只需将声音文件添加至 <code>Oraxen/pack/assets/minecraft/sounds</code> 文件夹即可。</p>`,94)]))}const c=i(p,[["render",l]]);export{r as __pageData,c as default};
