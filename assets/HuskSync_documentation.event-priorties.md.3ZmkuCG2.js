import{_ as i,o as a,c as e,a7 as n}from"./chunks/framework.DSL0mkng.js";const k=JSON.parse('{"title":"事件优先级","description":"","frontmatter":{},"headers":[],"relativePath":"HuskSync/documentation.event-priorties.md","filePath":"HuskSync/documentation.event-priorties.md"}'),t={name:"HuskSync/documentation.event-priorties.md"};function l(p,s,o,c,h,r){return a(),e("div",null,s[0]||(s[0]=[n(`<h1 id="事件优先级" tabindex="-1">事件优先级 <a class="header-anchor" href="#事件优先级" aria-label="Permalink to &quot;事件优先级&quot;">​</a></h1><p>若你正在使用检查退出、加入或死亡时玩家身上的物品或属性并进行操作的插件，例如战斗记录插件时，你可能会遇到诸如事件执行顺序等于 HuskSync 的兼容性问题。</p><p>在战斗记录插件方面，这意味着 HuskSync 监听了一个在玩家死亡、加入或退出游戏时调用的事件，且先于战斗记录插件执行击杀玩家、处理物品。换句话说，玩家会起死回生，并被同步至他们尚未死亡的状态。这会引起刷物品的问题。</p><p>HuskSync 提供了一个自定义事件优先级的方法—也就是，HuskSync 监听事件调用的优先级—来让你修复这个问题。</p><h2 id="修改事件优先级" tabindex="-1">修改事件优先级 <a class="header-anchor" href="#修改事件优先级" aria-label="Permalink to &quot;修改事件优先级&quot;">​</a></h2><p>在 HuskSync 2.1.3 或更高的版本，你可以在 <code>config.yml</code> 下的 <code>synchronization</code> 设置下修改事件的优先级，如下文所示：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">synchronization</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #(...)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  event_priorities</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    join_listener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LOWEST</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    death_listener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NORMAL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    quit_listener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LOWEST</span></span></code></pre></div><p>若要修改玩家加入、死亡或退出事件的优先级，只需简单的将值修改为下列的三个之一：</p><ol><li><code>LOWEST</code>（最先执行，在事件触发后即开始处理）</li><li><code>NORMAL</code>（在所有的 LOWEST 监听处理完毕后处理）</li><li><code>HIGHEST</code>（在所有的 NORMAL 和 LOWEST 事件处理完毕后处理）</li></ol><p>请注意，默认情况下 HuskSync 最先监听加入与退出事件（<code>LOEWST</code>）。这是出于同步需要；在退出事件监听的情况下，断开连接的一开始就可让 HuskSync 保存数据。这是因为部分插件可能会增加服务器的 tick 循环，导致在数据保存时出现问题，从而影响到系统的正常工作。</p><h2 id="战斗记录" tabindex="-1">战斗记录 <a class="header-anchor" href="#战斗记录" aria-label="Permalink to &quot;战斗记录&quot;">​</a></h2><p>对于使用战斗记录插件的服主——若有在PVP时击杀玩家的玩家退出游戏情况的——应当将 <code>quite_listener</code> 设置为 <code>NORMAL</code> 或 <code>HIGHEST</code>。</p>`,12)]))}const E=i(t,[["render",l]]);export{k as __pageData,E as default};
