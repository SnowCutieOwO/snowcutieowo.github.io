import{_ as d,C as e,c as i,o as n,b1 as l,G as s}from"./chunks/framework.CC7vnuC4.js";const u=JSON.parse('{"title":"冷却","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/HuskHomes"},{"title":"冷却","link":"/HuskHomes/features.cooldowns"}]},"headers":[],"relativePath":"HuskHomes/features.cooldowns.md","filePath":"HuskHomes/features.cooldowns.md"}'),c={name:"HuskHomes/features.cooldowns.md"};function r(h,t,p,k,E,_){const a=e("NolebaseGitContributors"),o=e("NolebaseGitChangelog");return n(),i("div",null,[t[0]||(t[0]=l(`<h1 id="冷却" tabindex="-1">冷却 <a class="header-anchor" href="#冷却" aria-label="Permalink to &quot;冷却&quot;">​</a></h1><p>HuskHomes 支持在玩家执行特定操作时设置冷却。玩家在执行下一次相同的操作之前，必须要等待一段时间，否则操作就不会执行。冷却仅会在操作执行之后被刷新，玩家在冷却期间试图执行操作会被发送消息以提示剩余的冷却时间。</p><h2 id="设置冷却" tabindex="-1">设置冷却 <a class="header-anchor" href="#设置冷却" aria-label="Permalink to &quot;设置冷却&quot;">​</a></h2><p>冷却可以在 <a href="./setup.config-files"><code>config.yml</code></a> 的 <code>cooldowns</code> 下设置。若要启用冷却，将 <code>enabled</code> 的值改为 <code>true</code>，并在 <code>cooldown_times</code> 下设置指定操作的冷却时间。冷却时间为整数，单位为秒。</p><h3 id="绕过冷却" tabindex="-1">绕过冷却 <a class="header-anchor" href="#绕过冷却" aria-label="Permalink to &quot;绕过冷却&quot;">​</a></h3><p>拥有<a href="./features.commands">权限节点</a> <code>huskhomes.bypass_cooldowns</code> 的玩家可以无视冷却，并可立即执行他们想要的操作。</p><h3 id="操作列表" tabindex="-1">操作列表 <a class="header-anchor" href="#操作列表" aria-label="Permalink to &quot;操作列表&quot;">​</a></h3><table tabindex="0"><thead><tr><th>操作</th><th>描述</th></tr></thead><tbody><tr><td><code>ADDITIONAL_HOME_SLOT</code></td><td>玩家尝试购买额外的家设置点容量</td></tr><tr><td><code>MAKE_HOME_PUBLIC</code></td><td>玩家将家传送点设置为开放</td></tr><tr><td><code>RANDOM_TELEPORT</code></td><td>玩家输入命令 /rtp</td></tr><tr><td><code>BACK_COMMAND</code></td><td>玩家输入命令 /back 返回上一个位置</td></tr><tr><td><code>HOME_TELEPORT</code></td><td>玩家输入命令 /home 传送至家</td></tr><tr><td><code>PUBLIC_HOME_TELEPORT</code></td><td>玩家使用 /phome 传送至公开家传送点</td></tr><tr><td><code>WARP_TELEPORT</code></td><td>玩家使用 /warp 传送至地标</td></tr><tr><td><code>SPAWN_TELEPORT</code></td><td>玩家使用 /spawn 传送至出生点</td></tr><tr><td><code>SEND_TELEPORT_REQUEST</code></td><td>玩家发出传送请求</td></tr><tr><td><code>ACCEPT_TELEPORT_REQUEST</code></td><td>玩家接受传送请求</td></tr></tbody></table><h3 id="示例配置" tabindex="-1">示例配置 <a class="header-anchor" href="#示例配置" aria-label="Permalink to &quot;示例配置&quot;">​</a></h3><p>冷却在 <code>config.yml</code> 文件中，<code>cooldowns</code> 的 <code>cooldown_times</code> 下设置。默认情况下，只有一个随机传送（<code>random_teleport</code>）的冷却设置。可按照上表在这块区域中添加你想要的冷却。</p><p>设置冷却（config.yml）</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 操作的冷却设置。详细文档：https://william278.net/docs/huskhomes/cooldowns</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cooldowns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 是否在不同操作之间添加冷却</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 特定操作冷却的时间长度（单位为秒）。相关文档： https://william278.net/docs/huskhomes/cooldowns/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cooldown_times</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    RANDOM_TELEPORT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span></span></code></pre></div>`,12)),s(a),s(o)])}const b=d(c,[["render",r]]);export{u as __pageData,b as default};
