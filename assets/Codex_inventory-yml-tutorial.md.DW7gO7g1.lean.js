import{_ as i,c as a,a7 as n,o as t}from"./chunks/framework.CMhgUA9K.js";const E=JSON.parse('{"title":"inventory.yml 教程","description":"","frontmatter":{},"headers":[],"relativePath":"Codex/inventory-yml-tutorial.md","filePath":"Codex/inventory-yml-tutorial.md"}'),e={name:"Codex/inventory-yml-tutorial.md"};function l(p,s,h,k,d,o){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="inventory-yml-教程" tabindex="-1">inventory.yml 教程 <a class="header-anchor" href="#inventory-yml-教程" aria-label="Permalink to &quot;inventory.yml 教程&quot;">​</a></h1><p>在这里你可以修改 Codex 的界面显示样式。</p><h2 id="界面" tabindex="-1">界面 <a class="header-anchor" href="#界面" aria-label="Permalink to &quot;界面&quot;">​</a></h2><p>插件中包含几个不同的界面：</p><ul><li><code>main_inventory</code>：主界面可以通过 <code>/codex</code> 命令打开。各个分类都会显示在这里。你可以按这个格式创建更多界面、</li></ul><div class="info custom-block"><p class="custom-block-title">信息</p><p><code>main_inventory</code> 界面不可以从 inventory.yml 中移除。但你可以在它下方按格式创建自己的界面。</p></div><ul><li><code>category_&lt;分类&gt;</code>：你必须创建一个与分类相关联的界面，另外还需要将 <code>&lt;分类&gt;</code> 替换为分类的名称。例如，<code>category_monsters</code> 表示 <code>monsters</code> 分类的界面（monsters.yml 文件）。如果你创建了一个新的文件，比如“<code>npc.yml</code>”，那么你必须在 inventory.yml 中添加一个名为 <code>category_npcs</code> 的新界面。</li></ul><div class="info custom-block"><p class="custom-block-title">信息</p><p>如果你想要创建与同一分类相关联的多个界面，像是分页，那么你可以按如下格式添加一个新界面：</p><p><code>category_&lt;分类&gt;;&lt;描述内容&gt;</code></p><p>这个界面会自动与分类相关联，你可以在其内添加日志条目。例如，如果你需要为怪物分类添加多页内容，则你可以创建如下分类：</p><p><code>category_monsters</code></p><p><code>category_monsters;page2</code></p><p><code>category_monsters;page3</code></p><p>之后，使用 <code>open_inventory</code> 选项，你就可以让玩家在不同页面之间浏览。</p></div><h2 id="界面属性" tabindex="-1">界面属性 <a class="header-anchor" href="#界面属性" aria-label="Permalink to &quot;界面属性&quot;">​</a></h2><p>每个界面都有如下所示的三个属性：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">inventories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  main_inventory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    slots</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">45</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;4Codex &amp;7» &amp;8全部分类&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    21</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;category: history&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;category: regions&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;category: monsters&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    0;8;36;44</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RED_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    1;7;9;17;27;35;37;43</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BLACK_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BARRIER</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;7关闭&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      click_actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;message: &amp;7正在关闭菜单.&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;close_inventory&quot;</span></span></code></pre></div><h3 id="槽位-slots" tabindex="-1">槽位（Slots） <a class="header-anchor" href="#槽位-slots" aria-label="Permalink to &quot;槽位（Slots）&quot;">​</a></h3><p>决定界面的行数。你只能填入 9、18、27、36、45 或 54。</p><h3 id="标题-title" tabindex="-1">标题（Title） <a class="header-anchor" href="#标题-title" aria-label="Permalink to &quot;标题（Title）&quot;">​</a></h3><p>决定界面显示的标题。</p><h3 id="物品槽位-item-slot" tabindex="-1">物品槽位（Item Slot） <a class="header-anchor" href="#物品槽位-item-slot" aria-label="Permalink to &quot;物品槽位（Item Slot）&quot;">​</a></h3><p>决定界面中物品的位置。你也可以使用简化格式决定物品在界面中的位置：</p><h4 id="格式-1" tabindex="-1">格式 1 <a class="header-anchor" href="#格式-1" aria-label="Permalink to &quot;格式 1&quot;">​</a></h4><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&lt;槽位&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &lt;物品&gt;</span></span></code></pre></div><p>这会将物品放在第 0 格。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BLACK_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span></span></code></pre></div><h4 id="格式-2" tabindex="-1">格式 2 <a class="header-anchor" href="#格式-2" aria-label="Permalink to &quot;格式 2&quot;">​</a></h4><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&lt;槽位 1&gt;;&lt;槽位 2&gt;;&lt;槽位 N&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &lt;物品&gt;</span></span></code></pre></div><p>这会将同一个物品放在第 0、8 和 16 格。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">0;8;16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BLACK_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span></span></code></pre></div><h4 id="格式-3" tabindex="-1">格式 3 <a class="header-anchor" href="#格式-3" aria-label="Permalink to &quot;格式 3&quot;">​</a></h4><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&lt;槽位 1&gt;-槽位 N&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &lt;物品&gt;</span></span></code></pre></div><p>这会将同一个物品放在第 0 至第 8 格。</p><h4 id="组合格式" tabindex="-1">组合格式 <a class="header-anchor" href="#组合格式" aria-label="Permalink to &quot;组合格式&quot;">​</a></h4><p>这会将同一个物品放置在第 0 至 7、9 以及 17 至 26 格。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">0-7;9;17-26</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BLACK_STAINED_GLASS_PANE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span></span></code></pre></div><h2 id="物品槽位属性" tabindex="-1">物品槽位属性 <a class="header-anchor" href="#物品槽位属性" aria-label="Permalink to &quot;物品槽位属性&quot;">​</a></h2><p>在这些物品槽位中你可以创建自己的物品。</p><h3 id="物品-item" tabindex="-1">物品（Item） <a class="header-anchor" href="#物品-item" aria-label="Permalink to &quot;物品（Item）&quot;">​</a></h3><p>这就是物品本身。按照<a href="./items-tutorial.html">这里</a>的教程可着手创建。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">0-8;9;17;18-26</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BLACK_STAINED_GLASS_PANE&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span></span></code></pre></div><h2 id="打开界面-open-inventory" tabindex="-1">打开界面（Open Inventory） <a class="header-anchor" href="#打开界面-open-inventory" aria-label="Permalink to &quot;打开界面（Open Inventory）&quot;">​</a></h2><p>点击物品时为玩家打开另一个界面。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">36</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ARROW</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;7返回&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      open_inventory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main_inventory</span></span></code></pre></div><h2 id="点击动作-click-actions" tabindex="-1">点击动作（Click Actions） <a class="header-anchor" href="#点击动作-click-actions" aria-label="Permalink to &quot;点击动作（Click Actions）&quot;">​</a></h2><p>点击物品时执行一系列动作。完整动作列表<a href="./actions.html">见此</a>。</p><h2 id="类型-分类-type-category" tabindex="-1">类型：分类（Type：Category） <a class="header-anchor" href="#类型-分类-type-category" aria-label="Permalink to &quot;类型：分类（Type：Category）&quot;">​</a></h2><p>你可以通过 <code>type: category</code> 选项放置<a href="./discoveries-categories-tutorial.html#1-分类">分类展示物品</a>。如果你这样做的话，所有其他的物品属性都会被无视。格式：<code>type: &quot;category: &lt;分类名称&gt;&quot;</code></p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">   type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;category: regions&quot;</span></span></code></pre></div><h2 id="类型-条目-type-discovery" tabindex="-1">类型：条目（Type：Discovery） <a class="header-anchor" href="#类型-条目-type-discovery" aria-label="Permalink to &quot;类型：条目（Type：Discovery）&quot;">​</a></h2><p>你可以通过 <code>type: discovery</code> 选项放置<a href="./discoveries-categories-tutorial.html#2-已解锁条目">条目展示物品</a>。如果你这样做的话，所有其他的物品属性都会被无视。格式：<code>type: &quot;discovery: &lt;条目 ID&gt;&quot;</code></p><div class="info custom-block"><p class="custom-block-title">信息</p><p>你只能在 <code>category_&lt;分类名称&gt;</code> 界面中使用这种物品。</p></div><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;discovery: shadow_swamp&quot;</span></span></code></pre></div>`,48)]))}const c=i(e,[["render",l]]);export{E as __pageData,c as default};
