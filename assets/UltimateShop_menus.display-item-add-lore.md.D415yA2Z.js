import{_ as n,C as i,c as p,o as t,b1 as h,G as a}from"./chunks/framework.CC7vnuC4.js";const g=JSON.parse('{"title":"🥉 额外物品描述","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/UltimateShop"},{"title":"🥉 额外物品描述","link":"/UltimateShop/menus.display-item-add-lore"}]},"headers":[],"relativePath":"UltimateShop/menus.display-item-add-lore.md","filePath":"UltimateShop/menus.display-item-add-lore.md"}'),k={name:"UltimateShop/menus.display-item-add-lore.md"};function d(r,s,o,E,c,y){const l=i("NolebaseGitContributors"),e=i("NolebaseGitChangelog");return t(),p("div",null,[s[0]||(s[0]=h(`<h1 id="🥉-额外物品描述" tabindex="-1">🥉 额外物品描述 <a class="header-anchor" href="#🥉-额外物品描述" aria-label="Permalink to &quot;🥉 额外物品描述&quot;">​</a></h1><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>可以在 <code>config.yml</code> 下设置通用的额外物品描述。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">add-lore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@n &#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@a&amp;e购买价格: {buy-price}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@b&amp;e出售价格: {sell-price}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@c&amp;#FF7777玩家购买限制: {buy-times-player}/{buy-limit-player}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@d&amp;#FF7777全服购买限制: {buy-times-server}/{buy-limit-server}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@e&amp;#FF7777玩家出售限制: {sell-times-player}/{sell-limit-player}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@f&amp;#FF7777全服出售限制: {sell-times-server}/{sell-limit-server}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@g &#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@g&amp;#ff3300c不能再买更多了!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@g&amp;8刷新时间: {buy-refresh-player}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@i &#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@i&amp;#ff3300已售罄!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@i&amp;8刷新时间: {buy-refresh-server}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@h &#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@h&amp;#ff3300不能再卖更多了!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@h&amp;8刷新时间: {sell-refresh-player}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@j&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@j&amp;#ff3300不能再向服务器出售更多了!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@j&amp;8刷新时间: {sell-refresh-server}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@n &#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@a{buy-click}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@b{sell-click}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@k&amp;#FFFACDShift+鼠标左键 选择数量!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@b&amp;#FFFACD键盘 Q 键 选择全部!&#39;</span></span></code></pre></div><h2 id="单物品设置" tabindex="-1">单物品设置 <a class="header-anchor" href="#单物品设置" aria-label="Permalink to &quot;单物品设置&quot;">​</a></h2><p>各个商品也可以独立设置额外物品描述，只需在物品配置中添加 <code>add-lore</code> 部分即可。详见“<a href="./shops.shops">商店</a>”一节中的物品 B 示例。</p><h2 id="前缀-条件符" tabindex="-1">前缀 - 条件符 <a class="header-anchor" href="#前缀-条件符" aria-label="Permalink to &quot;前缀 - 条件符&quot;">​</a></h2><p>每一行以 <code>@+小写字母</code> 开头的描述都会被判断为条件行。我们只会在满足条件时显示这行文本。</p><ul><li><code>@a</code> - 该物品拥有购买价格。（意味着该商品拥有 <code>buy-prices</code> 部分配置）</li><li><code>@b</code> - 该物品拥有出售价格。（意味着该商品拥有 <code>sell-prices</code> 部分配置）</li><li><code>@c</code> - 该物品拥有玩家购买限制。（意味着该商品拥有 <code>buy-limits.player</code> 设置）</li><li><code>@d</code> - 该物品拥有全服购买限制。（意味着该商品拥有 <code>buy-limits.global</code> 设置）</li><li><code>@e</code> - 与 @c 相似，但是是出售相关的。</li><li><code>@f</code> - 与 @d 相似，但是是出售相关的。</li><li><code>@g</code> - 该商品已经到达了玩家购买限制。</li><li><code>@h</code> - 该商品已经到达了玩家出售限制。</li><li><code>@i</code> - 该商品已经到达了全服购买限制。</li><li><code>@j</code> - 该商品已经达到了全服出售限制。</li><li><code>@k</code> - 玩家<strong>没有</strong>打开增量购买菜单且该物品启用了增量购买功能。</li><li><code>@l</code> - 该商品正处于购买冷却状态。</li><li><code>@m</code> - 该商品正处于出售冷却状态。</li><li><code>@n</code> - 买/卖价（对应点击类型）有效。如购买的点击类型需要设置买价。</li></ul><h2 id="后缀" tabindex="-1">后缀 <a class="header-anchor" href="#后缀" aria-label="Permalink to &quot;后缀&quot;">​</a></h2><ul><li><code>-b</code> - 该行只会对 Java 版客户端的玩家显示。</li><li><code>-m</code> - 该行只会在增量购买菜单中显示。</li><li><code>-i</code> - 本行内的条件取反。</li></ul><p>若你需要使用多个后缀，则你可以按照这样的顺序填入：<code>-i-m-b</code></p><h2 id="换行符" tabindex="-1">换行符 <a class="header-anchor" href="#换行符" aria-label="Permalink to &quot;换行符&quot;">​</a></h2><p>使用 <code>;;</code> 表示换行，对于需要使用多行表示价格的用户来说很有用。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  price</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    split-symbol-any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;;;&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;--- 在 config.yml 中修改</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    split-symbol-all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;;;&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;--- 在 config.yml 中修改</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;未知&quot;</span></span></code></pre></div>`,15)),a(l),a(e)])}const m=n(k,[["render",d]]);export{g as __pageData,m as default};
