import{_ as i,c as a,o as e,b0 as n}from"./chunks/framework.w6NQj85O.js";const r=JSON.parse('{"title":"货币兑换","description":"","frontmatter":{},"headers":[],"relativePath":"ExcellentCrates/configuration.exchange.md","filePath":"ExcellentCrates/configuration.exchange.md"}'),t={name:"ExcellentCrates/configuration.exchange.md"};function l(p,s,h,c,o,d){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="货币兑换" tabindex="-1">货币兑换 <a class="header-anchor" href="#货币兑换" aria-label="Permalink to &quot;货币兑换&quot;">​</a></h1><p>CoinsEngine 内置的交换系统允许玩家在不同类型的货币之间转换。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>在本教程中，我们设置了 <code>gems.yml</code> 和 <code>coins.yml</code> 之间的兑换，并规定 1 宝石 = 5 硬币。</p><p>在 <code>gems.yml</code> 货币配置下添加 <code>coins</code> 的汇率：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Exchange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Allowed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 必须启用.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Rates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    coins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.0</span></span></code></pre></div><p>这会允许 <code>gems</code> 货币与 <code>coins</code> 货币的转换，汇率为 1 宝石 = 5 硬币。</p><p>在 <code>coins.yml</code> 货币配置下添加 <code>gems</code> 的汇率：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Exchange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Allowed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 必须启用.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Rates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    gems</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span></span></code></pre></div><p>这会允许 <code>gems</code> 货币与 <code>coins</code> 货币的转换，汇率为 1 硬币 = 0.2 宝石，因此你需要至少 5 硬币才可将其兑换为 1 宝石。</p><div class="info custom-block"><p class="custom-block-title">信息</p><p>若货币的 <code>Demical</code> 设置为 <code>false</code>，则玩家只能交换整数数量的货币。</p></div>`,11)]))}const g=i(t,[["render",l]]);export{r as __pageData,g as default};
