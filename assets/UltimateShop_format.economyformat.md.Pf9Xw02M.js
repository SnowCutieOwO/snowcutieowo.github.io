import{_ as p,C as a,c as r,o as h,j as i,b1 as d,G as t,a as n,w as k}from"./chunks/framework.CC7vnuC4.js";const A=JSON.parse('{"title":"💹 经济格式™","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/UltimateShop"},{"title":"💹 经济格式™","link":"/UltimateShop/format.economyformat"}]},"headers":[],"relativePath":"UltimateShop/format.economyformat.md","filePath":"UltimateShop/format.economyformat.md"}'),g={name:"UltimateShop/format.economyformat.md"},c={class:"info custom-block"};function m(y,s,u,E,C,b){const o=a("font"),e=a("NolebaseGitContributors"),l=a("NolebaseGitChangelog");return h(),r("div",null,[s[7]||(s[7]=i("h1",{id:"💹-经济格式tm",tabindex:"-1"},[n("💹 经济格式™ "),i("a",{class:"header-anchor",href:"#💹-经济格式tm","aria-label":'Permalink to "💹 经济格式™"'},"​")],-1)),s[8]||(s[8]=i("p",null,[n("经济格式为插件提供的一种配置格式，可与服务器的经济插件联动。若配置文件中支持或需要"),i("strong",null,"经济格式"),n("，则我们会注明。")],-1)),i("div",c,[s[6]||(s[6]=i("p",{class:"custom-block-title"},"信息",-1)),i("p",null,[s[1]||(s[1]=n("需要注意的是，")),s[2]||(s[2]=i("strong",null,"UltimateShop",-1)),s[3]||(s[3]=n(" 只是一个商店插件，不提供任何形式的经济功能。如果你的服务器需要自定义经济，请自行寻找合适的经济插件。")),s[4]||(s[4]=i("strong",null,"Vault",-1)),s[5]||(s[5]=n(" 不是一个经济插件，它只是其他经济插件的前置库。")),t(o,{color:"red"},{default:k(()=>s[0]||(s[0]=[n("在服务器上安装 Vault 之后，你还需要安装一个支持 Vault 的任意经济插件。")])),_:1})])]),s[9]||(s[9]=d(`<h2 id="对接经济" tabindex="-1">对接经济 <a class="header-anchor" href="#对接经济" aria-label="Permalink to &quot;对接经济&quot;">​</a></h2><p>对接经济适用如下格式：</p><ul><li>economy-plugin：需要对接的插件名称。当前，<strong>UltimateShop</strong> 支持如下插件：<code>Vault</code>、<code>GamePoints</code>、<code>PlayerPoints</code>、<code>CoinsEngine</code>、<code>UltraEconomy</code>、<code>EcoBits</code>、<code>PEconomy</code>、<code>RedisEconomy</code>、<code>RoyaleEconomy</code>、<code>VotingPlugin</code>。<strong>必填项</strong></li><li>economy-type：若对应经济插件为多经济插件，你需要在这里填入货币名称。<strong>若使用多经济插件，则为必填项，否则可选</strong></li><li>amount：价格。<strong>必填项</strong></li><li>max-amount：用于动态定价。决定最高浮动价格。<strong>可选项</strong></li><li>min-amount：用于动态定价。决定最低浮动价格。<strong>可选项</strong></li></ul><p><strong>示例：</strong></p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    economy-plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Vault</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 若你将经济插件设置为了 CoinsEngine, 则你需要按如下格式填写:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # economy-plugin: CoinsEngine</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # economy-type: Coin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 是的, 在这里你需要添加 economy-type 选项, 因为这是一个多经济插件.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在本示例中, 玩家总是会花费 5$.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$5&#39;</span></span></code></pre></div><h2 id="原版经济" tabindex="-1">原版经济 <a class="header-anchor" href="#原版经济" aria-label="Permalink to &quot;原版经济&quot;">​</a></h2><p>原版经济使用如下格式：</p><ul><li>economy-type：支持填入 <code>exp</code>（经验值）和 <code>levels</code>（经验等级）。<strong>必填项</strong></li><li>amount：价格。<strong>必填项</strong></li><li>max-amount：用于动态定价。决定最高浮动价格。<strong>可选项</strong></li><li>min-amount：用于动态定价。决定最低浮动价格。<strong>可选项</strong></li></ul><p><strong>示例：</strong></p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    economy-type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">levels</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;5 级经验&#39;</span></span></code></pre></div>`,10)),t(e),t(l)])}const F=p(g,[["render",m]]);export{A as __pageData,F as default};
