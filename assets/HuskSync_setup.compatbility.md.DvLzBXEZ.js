import{_ as d,c as e,o as r,b0 as a}from"./chunks/framework.w6NQj85O.js";const u=JSON.parse('{"title":"兼容性","description":"","frontmatter":{},"headers":[],"relativePath":"HuskSync/setup.compatbility.md","filePath":"HuskSync/setup.compatbility.md"}'),o={name:"HuskSync/setup.compatbility.md"};function i(c,t,n,s,h,l){return r(),e("div",null,t[0]||(t[0]=[a('<h1 id="兼容性" tabindex="-1">兼容性 <a class="header-anchor" href="#兼容性" aria-label="Permalink to &quot;兼容性&quot;">​</a></h1><p>HuskSync 支持下列版本的 Minecraft。自 v3.7 后，你需要在服务器上安装最新版的 HuskSync。</p><table tabindex="0"><thead><tr><th>Minecraft</th><th>最高 HuskSync 版本</th><th>Java 版本</th><th>平台</th><th>支持截止日期</th></tr></thead><tbody><tr><td>1.21.4</td><td><em>最新</em></td><td>21</td><td>Paper、Fabric</td><td>✅ <strong>当前支持</strong></td></tr><tr><td>1.21.3</td><td>3.7.1</td><td>21</td><td>Paper、Fabric</td><td>🗃️ 已归档（2024 年 12 月）</td></tr><tr><td>1.21.1</td><td><em>最新</em></td><td>21</td><td>Paper、Fabric</td><td>✅ <strong>2025 年 12 月</strong>（长期支持）</td></tr><tr><td>1.20.6</td><td>3.6.8</td><td>17</td><td>Paper</td><td>❌ 已归档（2024 年 10 月）</td></tr><tr><td>1.20.4</td><td>3.6.8</td><td>17</td><td>Paper</td><td>❌ 已归档（2024 年 7 月）</td></tr><tr><td>1.20.1</td><td><em>最新</em></td><td>17</td><td>Paper、Fabric</td><td>✅ <strong>2025 年 11 月</strong>（长期支持）</td></tr><tr><td>1.17.1 - 1.19.4</td><td>3.6.8</td><td>17</td><td>Paper</td><td>❌ 已归档</td></tr><tr><td>1.16.5</td><td>3.2.1</td><td>16</td><td>Paper</td><td>❌ 已归档</td></tr></tbody></table><p>HuskSync 主要基于最新版进行开发。老版本 Minecraft 会在支持频道里基于使用情况与管理员更新，如：</p><ul><li>长期支持（LTS）- 最长支持维护 12-18 个月</li><li>非长期支持（Non-LTS）- 最长支持维护 3-6 个月</li></ul><h2 id="不兼容版本" tabindex="-1">不兼容版本 <a class="header-anchor" href="#不兼容版本" aria-label="Permalink to &quot;不兼容版本&quot;">​</a></h2><p>本插件不支持下列种类的核心或 Minecraft 版本。若你试图使用这些版本，插件将不会启动。对此造成的不便深感抱歉。</p><table tabindex="0"><thead><tr><th>Minecraft 版本</th><th>服务器核心</th><th>备注</th></tr></thead><tbody><tr><td>1.19.4</td><td>仅 <code>Purpur</code>、<code>Pufferfish</code>†</td><td>不支持旧版构建的 Paper</td></tr><tr><td>1.19.3</td><td>仅 <code>Paper</code>、<code>Purpur</code>、<code>Pufferfish</code></td><td>升级至 1.19.4 或使用 Spigot</td></tr><tr><td>1.16.5</td><td>所有</td><td>请使用低于 3.3.1（含）的版本</td></tr><tr><td>低于 1.16.5</td><td>所有</td><td>请至少使用 1.16.5 版本的 Minecraft</td></tr></tbody></table><p>† 其他基于这些核心的分支也会受到影响</p><h2 id="不兼容插件-模组" tabindex="-1">不兼容插件/模组 <a class="header-anchor" href="#不兼容插件-模组" aria-label="Permalink to &quot;不兼容插件/模组&quot;">​</a></h2><p>需要注意的是如下这些插件/模组会与 HuskSync 出现兼容性问题：</p><ul><li>不支持重启插件/模组。这会导致<a href="./setup.troubleshooting.html#服务器重启后玩家数据同步出错">服务器重启后玩家数据同步出错</a>的情况，因为这些插件使用了 bash 脚本。需要注意的是，这些重启插件并非真正重启了服务器，而是触发了某些（通常不稳定的）进程清除脚本逻辑达到重启的目的。</li><li>战斗记录类插件/模组暂不支持。部分对 HuskSync 预先支持的插件应当可以正常工作，但对于其他的插件，你可能需要修改<a href="./guides.event-priorties.html">事件优先级</a></li></ul>',12)]))}const b=d(o,[["render",i]]);export{u as __pageData,b as default};
