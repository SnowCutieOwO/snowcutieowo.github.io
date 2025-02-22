import{_ as a,c as i,o as e,al as n}from"./chunks/framework.CAEutmY3.js";const E=JSON.parse('{"title":"💵 开箱收费","description":"","frontmatter":{},"headers":[],"relativePath":"ExcellentCrates/features.crate-open-cost.md","filePath":"ExcellentCrates/features.crate-open-cost.md"}'),t={name:"ExcellentCrates/features.crate-open-cost.md"};function l(p,s,h,r,k,c){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="💵-开箱收费" tabindex="-1">💵 开箱收费 <a class="header-anchor" href="#💵-开箱收费" aria-label="Permalink to &quot;💵 开箱收费&quot;">​</a></h1><p>在 ExcellentCrates 中，除了钥匙以外，你还可以要求玩家在开启宝箱时支付一定量的货币。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>玩家不能在没有足够货币的情况下线打开宝箱，即便他们持有宝箱的对应钥匙。</p></div><p>一个宝箱可以一次要求多种货币。阅读下文来获得可用货币的更多信息。</p><h2 id="可用货币" tabindex="-1">可用货币 <a class="header-anchor" href="#可用货币" aria-label="Permalink to &quot;可用货币&quot;">​</a></h2><p>插件支持使用下列货币：</p><p>经验值（内置，玩家的原版经验值） 经验等级（内置，玩家的原版经验等级） 硬币（内置，需要安装 <a href="https://www.spigotmc.org/resources/34315/" target="_blank" rel="noreferrer">Vault</a> 及任一支持 Vault 的经济插件） <a href="https://www.spigotmc.org/resources/84121/" target="_blank" rel="noreferrer">CoinsEngine</a>（⭐推荐，且兼容 Vault！）</p><h2 id="如何设置开箱收费" tabindex="-1">如何设置开箱收费 <a class="header-anchor" href="#如何设置开箱收费" aria-label="Permalink to &quot;如何设置开箱收费&quot;">​</a></h2><p>按下列步骤可将宝箱设置为收费开箱：</p><ol><li>输入命令 <code>/crate editor</code> -&gt; Crates -&gt; 选择你的宝箱；</li><li>找到 <code>Open Cost（开箱收费）</code> 按钮；</li><li>点击 <code>add cost（添加收费）</code>；</li><li>聊天栏中会显示一系列可用的货币；</li><li>点击选择你想使用的货币并输入数量，如 <code>money 50</code>；</li><li>完成。你成功为你的宝箱加入了收费！</li></ol><h2 id="货币设置" tabindex="-1">货币设置 <a class="header-anchor" href="#货币设置" aria-label="Permalink to &quot;货币设置&quot;">​</a></h2><p>对于某些货币，<code>config.yml</code> 下的 <code>Currency</code> 部分设置有额外内容可以进行调整。使用前可参考！</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Currency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  xp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">XP</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%amount% %name%&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  levels</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">XP Levels</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%amount% %name%&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  money</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Money</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$%amount%</span></span></code></pre></div><p>如果出于某些原因你需要知道货币 ID，插件启动时你可以在控制台中找到如下的文本：</p><div class="language-log vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">log</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ExcellentCrates] Registered currency: xp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ExcellentCrates] Registered currency: levels</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ExcellentCrates] Registered currency: money</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ExcellentCrates] Registered currency: coinsengine_gems</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ExcellentCrates] Registered currency: coinsengine_coins</span></span></code></pre></div>`,15)]))}const o=a(t,[["render",l]]);export{E as __pageData,o as default};
