import{_ as i,c as a,o as n,b0 as l}from"./chunks/framework.w6NQj85O.js";const d=JSON.parse('{"title":"🎮 自定义点击事件 - 仅付费版","description":"","frontmatter":{},"headers":[],"relativePath":"UltimateShop/features.custom-click-event-premium.md","filePath":"UltimateShop/features.custom-click-event-premium.md"}'),t={name:"UltimateShop/features.custom-click-event-premium.md"};function e(p,s,h,k,E,r){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="🎮-自定义点击事件-仅付费版" tabindex="-1">🎮 自定义点击事件 - 仅付费版 <a class="header-anchor" href="#🎮-自定义点击事件-仅付费版" aria-label="Permalink to &quot;🎮 自定义点击事件 - 仅付费版&quot;">​</a></h1><ul><li>自 2.5.1 起，你可以在商店界面中使用自定义点击事件。</li><li>在 <code>config.yml</code> 下找到这些配置：</li></ul><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 可填入的值：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/ClickType.htm</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 支持用 ;; 符号使用多个点击类型.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  click-event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    buy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SHIFT_LEFT&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;RIGHT&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    buy-or-sell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;LEFT&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 若你需要禁用 select-amount 功能, 请将该项设置为 NEVER.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    select-amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SHIFT_RIGHT&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sell-all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;DROP&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    buy-one-stack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SWAP_OFFHAND&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 商店菜单的自定义点击动作.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 仅付费版本.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  click-event-actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    buy-one-stack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">buy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        shop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{shop}&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{item}&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span></span></code></pre></div><ul><li>在这里我们创建了一个新的自定义点击事件，称为 <code>buy-one-stack</code>。在这个自定义事件中，我们会执行一个购买一组物品的动作。</li><li>在重启服务器后，若你在一个物品上按下了 <strong>F</strong> 键（或对应“切换副手”的键），我们会执行你在 <code>click-event-actions</code> 设置的动作，即购买一组物品。</li></ul>`,4)]))}const o=i(t,[["render",e]]);export{d as __pageData,o as default};
