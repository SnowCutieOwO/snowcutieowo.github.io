import{_ as d,C as o,c as p,o as r,al as t,j as i,G as a,a as l,w as n}from"./chunks/framework.CAEutmY3.js";const f=JSON.parse('{"title":"♻️ 物品配置：交易次数重置","description":"","frontmatter":{},"headers":[],"relativePath":"UltimateShop/shops.product-config-buy-sell-times-reset.md","filePath":"UltimateShop/shops.product-config-buy-sell-times-reset.md"}'),k={name:"UltimateShop/shops.product-config-buy-sell-times-reset.md"},h={id:"custom-仅付费版",tabindex:"-1"},E={id:"random-placeholder-仅付费版",tabindex:"-1"},u={id:"重置值-仅付费版",tabindex:"-1"},g={id:"动态重置时间-仅付费版",tabindex:"-1"};function m(y,s,D,T,A,C){const e=o("font");return r(),p("div",null,[s[51]||(s[51]=t(`<h1 id="♻️-物品配置-交易次数重置" tabindex="-1">♻️ 物品配置：交易次数重置 <a class="header-anchor" href="#♻️-物品配置-交易次数重置" aria-label="Permalink to &quot;♻️ 物品配置：交易次数重置&quot;">​</a></h1><h2 id="常被提及-为什么这个功能重置所有玩家的交易次数而不使服务器崩溃" tabindex="-1">常被提及：为什么这个功能重置所有玩家的交易次数而不使服务器崩溃？ <a class="header-anchor" href="#常被提及-为什么这个功能重置所有玩家的交易次数而不使服务器崩溃" aria-label="Permalink to &quot;常被提及：为什么这个功能重置所有玩家的交易次数而不使服务器崩溃？&quot;">​</a></h2><p>这个功能不会一次性清除所有玩家的交易次数。我们会基于<strong>重置模式</strong>存储<strong>不同的时间戳数据</strong>。当到达预计重置时间，我们就会开始重置数据。</p><ul><li>如果玩家当前在服务器，则交易次数只会在玩家打开商店时重置。（在打开商店前，交易次数不会被重置）</li><li>如果玩家当前不在服务器，则交易次数只会在玩家下次进入服务器时重置。</li></ul><p>这些措施是为了保证重置数据时插件的性能优化，我们不会修改它们的底层逻辑。如果你不喜欢，你可能需要考虑更换其他插件。</p><h2 id="选项类型" tabindex="-1">选项类型 <a class="header-anchor" href="#选项类型" aria-label="Permalink to &quot;选项类型&quot;">​</a></h2><p>购买次数有如下选项：</p><ul><li><code>buy-times-reset-mode</code>（3.3.0 前为 <code>buy-limits-reset-mode</code>，功能相同）</li><li><code>buy-times-reset-time</code>（3.3.0 前为 <code>buy-limits-reset-time</code>，功能相同）</li><li><code>buy-times-reset-time-format</code></li><li><code>buy-times-reset-value</code></li></ul><p>出售次数有如下选项：</p><ul><li><code>sell-times-reset-mode</code>（3.3.0 前为 <code>sell-limits-reset-mode</code>，功能相同）</li><li><code>sell-times-reset-time</code>（3.3.0 前为 <code>sell-limits-reset-time</code>，功能相同）</li><li><code>sell-times-reset-time-format</code></li><li><code>sell-times-reset-value</code></li></ul><p>若你想要启用对所有物品的交易次数重置，只需打开 <code>config.yml</code> 文件进行修改即可：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">use-times</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  default-reset-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;NEVER&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  default-reset-time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;00:00:00&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 仅对 CUSTOM 重置模式有效.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  default-reset-time-format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;yyyy-MM-dd HH:mm:ss&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  default-reset-value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span></code></pre></div><p>无论你使用了什么方法，我们都可以发现其由三个选项类型组成：</p><ul><li>重置模式</li><li>重置时间</li><li>重置时间格式（只在使用 <code>CUSTOM</code> 类型时需要填入）</li><li>重置值</li></ul><h2 id="重置模式" tabindex="-1">重置模式 <a class="header-anchor" href="#重置模式" aria-label="Permalink to &quot;重置模式&quot;">​</a></h2><p>支持填入如下方法：</p>`,16)),i("ul",null,[s[14]||(s[14]=i("li",null,[i("code",null,"NEVER"),l("：永不刷新。")],-1)),s[15]||(s[15]=i("li",null,[i("code",null,"TIMER"),l("：在给定时间如五小时后刷新。")],-1)),s[16]||(s[16]=i("li",null,[i("code",null,"TIMED"),l("：在指定时间如早晨 8：15 刷新。")],-1)),i("li",null,[s[1]||(s[1]=i("code",null,"COOLDOWN_TIMER",-1)),s[2]||(s[2]=l("（于 3.3.0 加入）")),a(e,{color:"red"},{default:n(()=>s[0]||(s[0]=[l("- 仅付费版")])),_:1})]),i("li",null,[s[4]||(s[4]=i("code",null,"COOLDOWN_TIMED",-1)),s[5]||(s[5]=l("（于 3.3.0 加入）")),a(e,{color:"red"},{default:n(()=>s[3]||(s[3]=[l("- 仅付费版")])),_:1})]),i("li",null,[s[7]||(s[7]=i("code",null,"RANDOM_PLACEHOLDER",-1)),s[8]||(s[8]=l("：与指定随机变量同步重置时间。（于 3.3.0 加入）")),a(e,{color:"red"},{default:n(()=>s[6]||(s[6]=[l("- 仅付费版")])),_:1})]),i("li",null,[s[10]||(s[10]=i("code",null,"CUSTOM",-1)),s[11]||(s[11]=l("：在重置时间处直接填入重置时间点，插件不会进行任何计算。推荐通过 PlaceholderAPI 获取重置时间。你需要在 ")),s[12]||(s[12]=i("code",null,"reset-time-format",-1)),s[13]||(s[13]=l(" 处设置时间格式，这会影响 PlaceholderAPI 变量的输出结果。（于 3.3.0 加入）")),a(e,{color:"red"},{default:n(()=>s[9]||(s[9]=[l("- 仅付费版")])),_:1})])]),s[52]||(s[52]=t('<h3 id="cooldown-timed-或-cooldown-timer-与-timed-或-timer-间的差异" tabindex="-1"><code>COOLDOWN_TIMED</code>（或 <code>COOLDOWN_TIMER</code>）与 <code>TIMED</code>（或 <code>TIMER</code>）间的差异 <a class="header-anchor" href="#cooldown-timed-或-cooldown-timer-与-timed-或-timer-间的差异" aria-label="Permalink to &quot;`COOLDOWN_TIMED`（或 `COOLDOWN_TIMER`）与 `TIMED`（或 `TIMER`）间的差异&quot;">​</a></h3><p><code>TIMED</code> 与 <code>TIMER</code> 在玩家每次到达交易限制时计算重置时间，而 <code>COOLDOWN_TIMED</code> 与 <code>COOLDOWN_TIMER</code> 则会在第一次交易时便开始计算重置时间，且在计时器结束前永远不会刷新。</p><p>因此，在使用 <code>COOLDOWN_TIMED</code> 或 <code>COOLDOWN_TIMER</code> 事件时，重置时间不会随服务器重启、配置更改或其他原因变化。这表示如果你意外地将物品设置为 1 年后刷新，重置时间不会在你修改后变化，但 <code>TIMED</code> 或 <code>TIMER</code> 可以做到。</p><h2 id="重置时间" tabindex="-1">重置时间 <a class="header-anchor" href="#重置时间" aria-label="Permalink to &quot;重置时间&quot;">​</a></h2>',4)),i("p",null,[s[18]||(s[18]=l("不同的重置模式需要在此填入不同的值。支持变量，")),a(e,{color:"red"},{default:n(()=>s[17]||(s[17]=[i("strong",null,"填入的变量必须为服务端侧的，即不随玩家变化而变化。",-1)])),_:1})]),s[53]||(s[53]=t('<h3 id="never" tabindex="-1"><code>NEVER</code> <a class="header-anchor" href="#never" aria-label="Permalink to &quot;`NEVER`&quot;">​</a></h3><p>无需任何额外内容。</p><h3 id="timer-cooldown-timer" tabindex="-1"><code>TIMER</code>/<code>COOLDOWN_TIMER</code> <a class="header-anchor" href="#timer-cooldown-timer" aria-label="Permalink to &quot;`TIMER`/`COOLDOWN_TIMER`&quot;">​</a></h3><p>你可以在这里填入由 <code>:</code> 分隔的三到六个数字。例如：<code>15:00:00</code></p><p>每个从<strong>右</strong>至<strong>左</strong>的数字分别表示：</p>',5)),i("ul",null,[s[23]||(s[23]=i("li",null,"秒",-1)),s[24]||(s[24]=i("li",null,"分",-1)),s[25]||(s[25]=i("li",null,"时",-1)),i("li",null,[s[20]||(s[20]=l("天 ")),a(e,{color:"red"},{default:n(()=>s[19]||(s[19]=[l("- 仅付费版")])),_:1})]),i("li",null,[s[22]||(s[22]=l("月 ")),a(e,{color:"red"},{default:n(()=>s[21]||(s[21]=[l("- 仅付费版")])),_:1})])]),s[54]||(s[54]=t('<p>在本示例中，即为 15 小时之后。即：<strong>若时间为 <code>2023-09-04 12:00:00</code>。则会在 15 小时后重置，即 <code>2023-09-05 03:00:00</code>。</strong></p><h3 id="timed-cooldown-timed" tabindex="-1"><code>TIMED</code>/<code>COOLDOWN_TIMED</code> <a class="header-anchor" href="#timed-cooldown-timed" aria-label="Permalink to &quot;`TIMED`/`COOLDOWN_TIMED`&quot;">​</a></h3><p><code>TIMED</code> 与 <code>TIMER</code> 的组成几乎相同，但右起前三个数字代表着天数。以 15:00:00 为例：</p><p>若现在时间为 <code>2023-09-04 12:00:00</code>，则其会在 <code>2023-09-04 15:00:00</code> 重置。</p><p>这就是天数设置为 0 的结果。若将其设置为 1 则会额外增加一天。</p><p>如果你要做每日商店，则这个选项几乎无用，因为它必须被设置为 0，如果你需要做每周商店，则它必须设置为 6。因为你需要在最后一天重置时间，而不是在最后一天之后重置。</p>',6)),i("p",null,[s[27]||(s[27]=l("这种重置模式也支持设置多个重置时间，每个重置时间需要以 ")),s[28]||(s[28]=i("code",null,";;",-1)),s[29]||(s[29]=l(" 分隔，我们会选择最早的时间。如：")),a(e,{color:"red"},{default:n(()=>s[26]||(s[26]=[l("（仅付费版）")])),_:1})]),s[55]||(s[55]=t(`<div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sell-times-reset-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;TIMED&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sell-times-reset-time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;20:00:00;;19:00:00&#39;</span></span></code></pre></div><p>在本示例中，这个物品会在每天的 19：00 与 20：00 重置。</p>`,2)),i("h3",h,[s[31]||(s[31]=i("code",null,"CUSTOM",-1)),s[32]||(s[32]=l()),a(e,{color:"red"},{default:n(()=>s[30]||(s[30]=[l("- 仅付费版")])),_:1}),s[33]||(s[33]=l()),s[34]||(s[34]=i("a",{class:"header-anchor",href:"#custom-仅付费版","aria-label":'Permalink to "`CUSTOM` <font color="red">- 仅付费版</font>"'},"​",-1))]),s[56]||(s[56]=i("p",null,"你只需要在此填入 PlaceholderAPI 变量，且其必须返回年、月、日、时、分、秒的完整格式。你也需要在配置中填入它们的时间格式，因为不同类型的变量会返回不同的时间格式，插件很难自动识别。",-1)),i("h3",E,[s[36]||(s[36]=i("code",null,"RANDOM_PLACEHOLDER",-1)),s[37]||(s[37]=l()),a(e,{color:"red"},{default:n(()=>s[35]||(s[35]=[l("- 仅付费版")])),_:1}),s[38]||(s[38]=l()),s[39]||(s[39]=i("a",{class:"header-anchor",href:"#random-placeholder-仅付费版","aria-label":'Permalink to "`RANDOM_PLACEHOLDER` <font color="red">- 仅付费版</font>"'},"​",-1))]),s[57]||(s[57]=i("p",null,"在此输入有效的随机变量 ID 即可。",-1)),i("h2",u,[s[41]||(s[41]=l("重置值 ")),a(e,{color:"red"},{default:n(()=>s[40]||(s[40]=[l("- 仅付费版")])),_:1}),s[42]||(s[42]=l()),s[43]||(s[43]=i("a",{class:"header-anchor",href:"#重置值-仅付费版","aria-label":'Permalink to "重置值 <font color="red">- 仅付费版</font>"'},"​",-1))]),s[58]||(s[58]=i("p",null,"默认情况下，重置值为 0，但如果你想要做出一些改变，那你就可以修改这个值。另外，这个值也支持填入变量。若与随机变量组合，它可以在玩家每次重置之后使用不同的重置值。",-1)),a(e,{color:"red"},{default:n(()=>s[44]||(s[44]=[l("这个选项非常危险，你必须谨慎设置。")])),_:1}),s[59]||(s[59]=l("你")),a(e,{color:"red"},{default:n(()=>s[45]||(s[45]=[l("**必须**")])),_:1}),s[60]||(s[60]=l("确保**交易限制的值大于交易重置的值。**这表示一旦重置，玩家就可以再次购买/出售物品，否则你会发现物品不可逆地无法交易，**除非**在配置文件中重置交易限制或使用命令手动重置交易次数，")),a(e,{color:"red"},{default:n(()=>s[46]||(s[46]=[l("切记")])),_:1}),s[61]||(s[61]=l("！")),i("h2",g,[s[48]||(s[48]=l("动态重置时间 ")),a(e,{color:"red"},{default:n(()=>s[47]||(s[47]=[l("- 仅付费版")])),_:1}),s[49]||(s[49]=l()),s[50]||(s[50]=i("a",{class:"header-anchor",href:"#动态重置时间-仅付费版","aria-label":'Permalink to "动态重置时间 <font color="red">- 仅付费版</font>"'},"​",-1))]),s[62]||(s[62]=t(`<p>本示例使用了一个随机变量，实现在 3、4 或 5 小时后刷新物品而非固定事件点刷新。</p><p>首先在 <code>config.yml</code> 中按如下格式创建一个随机变量：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 仅付费版本。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    reset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      reset-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ONCE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      elements</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;03:00:00&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;04:00:00&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;05:00:00&#39;</span></span></code></pre></div><p>在任意物品配置的 <code>buy-times-reset-time</code> 选项中使用这个变量。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    price-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ALL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    product-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CLASSIC_ALL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    products</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GOLD_INGOT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    buy-prices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sell-prices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      #</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    buy-limits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    buy-times-reset-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;TIMED&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    buy-times-reset-time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{random_reset}&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # &lt;--- 在这里使用, 出售次数同样有效!</span></span></code></pre></div><h2 id="重置时间不正确" tabindex="-1">重置时间不正确？ <a class="header-anchor" href="#重置时间不正确" aria-label="Permalink to &quot;重置时间不正确？&quot;">​</a></h2><ul><li>物品必须至少交易一次才可存储其充值时间。否则的话，我们只能显示基于当前时间计算的预计重置时间。</li></ul>`,7))])}const O=d(k,[["render",m]]);export{f as __pageData,O as default};
