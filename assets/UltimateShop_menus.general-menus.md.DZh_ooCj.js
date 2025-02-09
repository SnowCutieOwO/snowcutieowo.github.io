import{_ as i,c as a,o as n,al as l}from"./chunks/framework.ySGSHPST.js";const o=JSON.parse('{"title":"🔲 全局菜单","description":"","frontmatter":{},"headers":[],"relativePath":"UltimateShop/menus.general-menus.md","filePath":"UltimateShop/menus.general-menus.md"}'),t={name:"UltimateShop/menus.general-menus.md"};function p(h,s,e,k,E,d){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="🔲-全局菜单" tabindex="-1">🔲 全局菜单 <a class="header-anchor" href="#🔲-全局菜单" aria-label="Permalink to &quot;🔲 全局菜单&quot;">​</a></h1><p>所有菜单都存储在 <code>/menus/</code> 文件夹下。</p><h2 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h2><p>这里有三种菜单：</p><ul><li>普通菜单：与其他菜单插件的相同，你可以通过它们打开其他商店。</li><li>商店菜单：商店菜单会在其内展示指定物品。每个菜单都有一个 <code>menu</code> 选项来设置对应的商店菜单。商店菜单拥有所有普通菜单的功能。多个商店可以共享同一个商店菜单，可以做到打开时排版相同而出售物品不同的效果。</li><li>增量购买菜单：能够选择你所购买或出售的数量。这类菜单有着更多设置，你可以前往“增量购买菜单”章节了解更多。<strong>增量购买菜单只可以在商店界面选定物品后打开，而不可以直接开启。</strong></li></ul><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><ul><li><code>title</code>：菜单界面的标题。对于商店菜单，可填入 <code>{shop-name}</code> 以显示其在配置中设置的商店名称。</li><li><code>size</code>：菜单大小。仅支持填入如下数字：<strong>9、18、27、36、45、54</strong>。</li><li><code>layout</code>：按钮排版。参数类型为列表，行数必须为 <code>size/9</code> 的值（即只可填入 1-6 行），每行列表只能有九个元素。</li><li><code>buttons</code>：按钮配置。按钮 ID 必须为单字符，可以在 <code>layout</code> 的列表中设置其显示的位置。</li><li><code>conditions</code>：只有达到指定条件的玩家才可以打开该菜单。需要在此使用“<a href="./format.condition-format.html">条件格式</a>”。</li><li><code>open-actions</code>：打开菜单时执行的动作。需要在此使用“<a href="./format.action-format.html">动作格式</a>”。</li><li><code>close-actions</code>：关闭菜单时执行的动作。需要在此使用“<a href="./format.action-format.html">动作格式</a>”。<strong>请注意，如果你已经打开一个菜单，此时再通过任何方式打开本插件内的其他菜单也会触发此菜单的关闭动作。</strong></li></ul><p>示例：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;商店&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">54</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bedrock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;f欢迎来到商店.&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">open-actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sound</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ui.button.click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">close-actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sound</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ui.button.click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;000000000&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;000000000&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0000A0000&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;000000000&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;000000000&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;000000000&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">buttons</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    display-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BREAD</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;d食物&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      lore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;7点击打开食物商店!&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">shop_menu</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        menu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;example&#39;</span></span></code></pre></div><p>每个按钮都设置了如下内容：</p><ul><li><code>display-item</code>：按钮显示的物品。需要在此使用“<a href="./format.display-item-format.html">展示物品格式</a>”。</li><li><code>actions</code>：点击后执行的动作。需要在此使用“<a href="./format.action-format.html">动作格式</a>”。</li><li><code>fail-actions</code>：未达到条件时点击按钮执行的动作。需要在此使用“<a href="./format.action-format.html">动作格式</a>”。</li><li><code>conditions</code>：点击该按钮所需满足的条件。若玩家没有达到条件，则会触发 <code>fail-actions</code> 下的动作。需要在此使用“<a href="./format.condition-format.html">条件格式</a>”。</li></ul>`,11)]))}const c=i(t,[["render",p]]);export{o as __pageData,c as default};
