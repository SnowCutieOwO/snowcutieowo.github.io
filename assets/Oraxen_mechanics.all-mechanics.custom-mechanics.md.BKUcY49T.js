import{_ as s,c as e,o as i,al as n}from"./chunks/framework.CAEutmY3.js";const k=JSON.parse('{"title":"自定义机制","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/mechanics.all-mechanics.custom-mechanics.md","filePath":"Oraxen/mechanics.all-mechanics.custom-mechanics.md"}'),t={name:"Oraxen/mechanics.all-mechanics.custom-mechanics.md"};function l(h,a,o,r,c,p){return i(),e("div",null,a[0]||(a[0]=[n(`<h1 id="自定义机制" tabindex="-1">自定义机制 <a class="header-anchor" href="#自定义机制" aria-label="Permalink to &quot;自定义机制&quot;">​</a></h1><p>这个机制允许你实现高度自定义的机制而无需接触编程</p><h2 id="它如何生效" tabindex="-1">它如何生效？ <a class="header-anchor" href="#它如何生效" aria-label="Permalink to &quot;它如何生效？&quot;">​</a></h2><p>这个机制仅对物品生效，不对方块/家具生效。</p><p>对于那些内容，请参阅<a href="./mechanics.all-mechanics.clickaction-mechanic.html">点击动作（clickAction）机制</a>章节。</p><p>本章节提及的机制包含三个主要部分：</p><p><strong>事件</strong>：触发机制的前提？如：对着方块右键点击</p><p><strong>条件</strong>：触发机制所要满足的添加。如：拥有某个权限</p><p><strong>动作</strong>：触发后执行的操作。如：执行命令或发送消息</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>一个叫做 oneUsage 的额外设置允许让物品仅能单次使用。</p></div><h2 id="较为全面的示例配置" tabindex="-1">较为全面的示例配置 <a class="header-anchor" href="#较为全面的示例配置" aria-label="Permalink to &quot;较为全面的示例配置&quot;">​</a></h2><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Mechanics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  custom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      one_usage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CLICK:right:all&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HAS_PERMISSION:example.permission&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[console] give &lt;player&gt; cooked_beef 1&quot;</span></span></code></pre></div><p>在这个示例中，子配置 <code>test</code> 定义了一个在玩家（对着方块或空气）右键点击触发的自定义机制。</p><p>如果玩家拥有权限 <code>example.permission</code>，那么控制台将会执行给定的命令，其中的 <code>&lt;player&gt;</code> 会被替换为触发机制的玩家名称。</p><p>物品不会被消耗（因为 <code>oneUsage: false</code>）。</p><h2 id="可用事件" tabindex="-1">可用事件 <a class="header-anchor" href="#可用事件" aria-label="Permalink to &quot;可用事件&quot;">​</a></h2><h3 id="click-点击类型-目标类型" tabindex="-1">CLICK:点击类型:目标类型 <a class="header-anchor" href="#click-点击类型-目标类型" aria-label="Permalink to &quot;CLICK:点击类型:目标类型&quot;">​</a></h3><p>在点击物品时调用。</p><p><strong>点击类型：</strong><code>[ right, left, all ]</code></p><p><strong>目标类型：</strong><code>[ block, air, all ]</code></p><h3 id="drop" tabindex="-1">DROP <a class="header-anchor" href="#drop" aria-label="Permalink to &quot;DROP&quot;">​</a></h3><p>在你丢弃物品时调用。</p><h3 id="pickup" tabindex="-1">PICKUP <a class="header-anchor" href="#pickup" aria-label="Permalink to &quot;PICKUP&quot;">​</a></h3><p>在你拾起物品时调用。</p><h3 id="break" tabindex="-1">BREAK <a class="header-anchor" href="#break" aria-label="Permalink to &quot;BREAK&quot;">​</a></h3><p>在玩家损坏物品（用尽耐久）时调用。</p><h3 id="equip" tabindex="-1">EQUIP <a class="header-anchor" href="#equip" aria-label="Permalink to &quot;EQUIP&quot;">​</a></h3><p>在玩家装备物品时调用。</p><h3 id="unequip" tabindex="-1">UNEQUIP <a class="header-anchor" href="#unequip" aria-label="Permalink to &quot;UNEQUIP&quot;">​</a></h3><p>在玩家取下装备的物品时调用。</p><h3 id="inv-click" tabindex="-1">INV_CLICK <a class="header-anchor" href="#inv-click" aria-label="Permalink to &quot;INV_CLICK&quot;">​</a></h3><p>在玩家在背包内点击该物品时调用。</p><h3 id="death" tabindex="-1">DEATH <a class="header-anchor" href="#death" aria-label="Permalink to &quot;DEATH&quot;">​</a></h3><p>在玩家死亡后非正常地掉落时调用。</p><h2 id="可用动作" tabindex="-1">可用动作 <a class="header-anchor" href="#可用动作" aria-label="Permalink to &quot;可用动作&quot;">​</a></h2><h3 id="command-发送者-命令" tabindex="-1">COMMAND:发送者:命令 <a class="header-anchor" href="#command-发送者-命令" aria-label="Permalink to &quot;COMMAND:发送者:命令&quot;">​</a></h3><p><strong>发送者：</strong><code>[ console, player ]</code></p><p><strong>命令：</strong><code>所要执行的命令。可以在此使用 &lt;player&gt; 变量。</code></p><h3 id="message-内容" tabindex="-1">MESSAGE:内容 <a class="header-anchor" href="#message-内容" aria-label="Permalink to &quot;MESSAGE:内容&quot;">​</a></h3><p><strong>内容：</strong><code>发送消息的内容（支持 MiniMessage 格式）。</code></p><h3 id="actionbar-内容" tabindex="-1">ACTIONBAR:内容 <a class="header-anchor" href="#actionbar-内容" aria-label="Permalink to &quot;ACTIONBAR:内容&quot;">​</a></h3><p><strong>内容：</strong><code>发送消息的内容（支持 MiniMessage 格式）。</code></p>`,42)]))}const u=s(t,[["render",l]]);export{k as __pageData,u as default};
