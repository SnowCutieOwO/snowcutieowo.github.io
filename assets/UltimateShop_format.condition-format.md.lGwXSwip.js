import{_ as p,C as h,c as k,o as d,b0 as n,j as a,a as i,G as t,w as e}from"./chunks/framework.w6NQj85O.js";const A=JSON.parse('{"title":"⚖️ 条件格式","description":"","frontmatter":{},"headers":[],"relativePath":"UltimateShop/format.condition-format.md","filePath":"UltimateShop/format.condition-format.md"}'),o={name:"UltimateShop/format.condition-format.md"},r={id:"任选-仅付费版",tabindex:"-1"},E={id:"非-仅付费版",tabindex:"-1"};function c(g,s,y,F,C,u){const l=h("font");return d(),k("div",null,[s[8]||(s[8]=n(`<h1 id="⚖️-条件格式" tabindex="-1">⚖️ 条件格式 <a class="header-anchor" href="#⚖️-条件格式" aria-label="Permalink to &quot;⚖️ 条件格式&quot;">​</a></h1><p>条件格式包含一些选项。</p><div class="info custom-block"><p class="custom-block-title">信息</p><p>在<strong>条件格式示例中的</strong> <code>actions</code> 只代表新版本的<strong>条件格式</strong>。若需要查看某个功能或设置名称，请转到对应页面，如 <code>buy-conditions</code>。</p></div><h2 id="全局选项" tabindex="-1">全局选项 <a class="header-anchor" href="#全局选项" aria-label="Permalink to &quot;全局选项&quot;">​</a></h2><h4 id="生效次数" tabindex="-1">生效次数 <a class="header-anchor" href="#生效次数" aria-label="Permalink to &quot;生效次数&quot;">​</a></h4><p>这个动作只会在玩家购买/出售指定次数的物品时触发。</p><ul><li><code>start-apply</code>：操作触发的起始次数。<strong>可选。默认为 0。</strong></li><li><code>end-apply</code>：操作触发的终止次数。<strong>可选。默认为无限大。</strong></li><li><code>apply</code>：操作生效的对应次数。格式：<code>[1,2,3,4]</code><strong>可选。默认使用 <code>start-apply</code> 的值。</strong></li></ul><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        start-apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        end-apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span></code></pre></div><h3 id="点击类型" tabindex="-1">点击类型 <a class="header-anchor" href="#点击类型" aria-label="Permalink to &quot;点击类型&quot;">​</a></h3><p>这个动作只在玩家使用对应方式点击按钮时触发。对 <code>open-actions</code>、菜单配置内的 <code>close-action</code> 以及物品设置中的 <code>buy-actions</code> 和 <code>sell-actions</code> 无效。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        click-type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LEFT</span></span></code></pre></div><h2 id="支持变量" tabindex="-1">支持变量 <a class="header-anchor" href="#支持变量" aria-label="Permalink to &quot;支持变量&quot;">​</a></h2><ul><li><code>{world}</code></li><li><code>{amount}</code></li><li><code>{player_x}</code></li><li><code>{player_y}</code></li><li><code>{player_z}</code></li><li><code>{player_pitch}</code></li><li><code>{player_yaw}</code></li><li><code>{player}</code></li><li><code>{item}</code> - 物品 ID</li><li><code>{item-name}</code> - 物品的展示名称</li><li><code>{shop}</code> - 商店 ID</li><li><code>{shop-name}</code> - 商店的展示名称</li><li><code>{shop-menu}</code> - 商店的菜单 ID</li></ul><h2 id="声音" tabindex="-1">声音 <a class="header-anchor" href="#声音" aria-label="Permalink to &quot;声音&quot;">​</a></h2><p>向玩家发送声音。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">world</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lobby</span></span></code></pre></div><h2 id="群系" tabindex="-1">群系 <a class="header-anchor" href="#群系" aria-label="Permalink to &quot;群系&quot;">​</a></h2><p>玩家需处于指定的生物群系中。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">biome</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      biome</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">oraxen</span></span></code></pre></div><h2 id="权限" tabindex="-1">权限 <a class="header-anchor" href="#权限" aria-label="Permalink to &quot;权限&quot;">​</a></h2><p>玩家需拥有指定的权限。</p><p><strong>需要注意的是 OP 拥有所有权限，除非插件设置了默认不分配，所以请在去除 OP 权限的情况下测试该条件。</strong></p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">permission</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;group.vip&#39;</span></span></code></pre></div><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><p>玩家需达到指定的变量条件。</p><p><code>rule</code> 可填入如下内容：</p><ul><li><code>&gt;=</code></li><li><code>&lt;=</code></li><li><code>&gt;</code></li><li><code>&lt;</code></li><li><code>==</code>（字符串比较）</li><li><code>=</code>（数字比较）</li><li><code>!=</code>（数字或字符串比较）</li><li><code>!*=</code>（数字或字符串）不包含（指定内容）</li><li><code>*=</code>（字符串）包含（指定内容）。 如：<code>str *= string</code> 会返回 <code>true</code>，而 <code>example *= ple</code> 则会返回 <code>false</code>。</li></ul><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">placeholder</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%player_health%&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;=&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span></code></pre></div>`,28)),a("h2",r,[s[1]||(s[1]=i("任选 ")),t(l,{color:"red"},{default:e(()=>s[0]||(s[0]=[i("- 仅付费版")])),_:1}),s[2]||(s[2]=i()),s[3]||(s[3]=a("a",{class:"header-anchor",href:"#任选-仅付费版","aria-label":'Permalink to "任选 <font color="red">- 仅付费版</font>"'},"​",-1))]),s[9]||(s[9]=n(`<div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">any</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">placeholder</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%eco_balance%&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&gt;=&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">placeholder</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%player_points%&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&gt;=&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span></span></code></pre></div>`,1)),a("h2",E,[s[5]||(s[5]=i("非 ")),t(l,{color:"red"},{default:e(()=>s[4]||(s[4]=[i("- 仅付费版")])),_:1}),s[6]||(s[6]=i()),s[7]||(s[7]=a("a",{class:"header-anchor",href:"#非-仅付费版","aria-label":'Permalink to "非 <font color="red">- 仅付费版</font>"'},"​",-1))]),s[10]||(s[10]=n(`<p>只有达到条件的玩家才可触发对应动作。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">not</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">placeholder</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%eco_balance%&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&gt;=&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span></span></code></pre></div>`,2))])}const m=p(o,[["render",c]]);export{A as __pageData,m as default};
