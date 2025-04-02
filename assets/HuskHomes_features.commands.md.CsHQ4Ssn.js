import{_ as s,C as d,c as a,o as r,b1 as h,G as e}from"./chunks/framework.CC7vnuC4.js";const y=JSON.parse('{"title":"命令列表","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/HuskHomes"},{"title":"命令列表","link":"/HuskHomes/features.commands"}]},"headers":[],"relativePath":"HuskHomes/features.commands.md","filePath":"HuskHomes/features.commands.md"}'),l={name:"HuskHomes/features.commands.md"};function m(n,t,i,p,u,k){const o=d("NolebaseGitContributors"),c=d("NolebaseGitChangelog");return r(),a("div",null,[t[0]||(t[0]=h('<h1 id="命令列表" tabindex="-1">命令列表 <a class="header-anchor" href="#命令列表" aria-label="Permalink to &quot;命令列表&quot;">​</a></h1><p>HuskHomes 提供了一系列你可使用的命令。本章节将会为列出所有命令及其对应权限，让你更好<a href="./features.managing-access">控制玩家的访问内容</a>。</p><h2 id="命令与权限表" tabindex="-1">命令与权限表 <a class="header-anchor" href="#命令与权限表" aria-label="Permalink to &quot;命令与权限表&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">提示</p><p>若你安装了多个命令相似的插件，你可能需要<a href="./features.commands.command-conflicts#commandsyml-下的-huskhomes-命令别称">创建命令别称</a>来让 HuskHomes 的命令能被优先执行。</p></div><table tabindex="0"><thead><tr><th></th><th>解释</th></tr></thead><tbody><tr><td>✅</td><td>玩家默认可用</td></tr><tr><td>❌</td><td>仅 OP 默认可用</td></tr></tbody></table><p>下为 HuskHomes 的命令列表，包含了对其的简单介绍以及所需的权限节点。绕过传送预热和传送扣费的权限也在下文一并标出。</p><table tabindex="0"><thead><tr><th></th><th>命令</th><th>描述</th><th>权限</th><th style="text-align:center;">默认状态</th></tr></thead><tbody><tr><td>家传送点命令</td><td></td><td></td><td></td><td style="text-align:center;"></td></tr><tr><td><code>/home</code></td><td><code>/home [名称]</code></td><td>传送至你设置的家。</td><td><code>huskhomes.command.home</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/home</code></td><td><code>/home [&lt;玩家名称.家名称&gt;]</code></td><td>传送至其他玩家设置的家。</td><td><code>huskhomes.command.home.other</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/homelist</code></td><td><code>/homelist [页码]</code></td><td>列出你设置的所有家。</td><td><code>huskhomes.command.homelist</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/homelist</code></td><td><code>/homelist &lt;玩家名称&gt; [页码]</code></td><td>列出指定玩家设置的所有家。</td><td><code>huskhomes.command.homelist.other</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/sethome</code></td><td><code>/sethome [名称]</code></td><td>设置一个家传送点。</td><td><code>huskhomes.command.sethome</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/delhome</code></td><td><code>/delhome [名称]</code></td><td>删除你设置的家传送点。</td><td><code>huskhomes.command.delhome</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/delhome</code></td><td><code>/delhome add [确认]</code></td><td>删除你设置的所有家传送点。</td><td><code>huskhomes.command.delhome</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/delhome</code></td><td><code>/delhome &lt;玩家名称.家名称&gt;</code></td><td>删除其他玩家设置的家</td><td><code>huskhomes.command.delhome.other</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/edithome</code></td><td><code>/edithome &lt;名称&gt;</code></td><td>浏览或编辑家传送点的相关内容。</td><td><code>huskhomes.command.edithome</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/edithome</code></td><td><code>/edithome &lt;名称&gt; rename &lt;新名称&gt;</code></td><td>重命名指定的家传送点。</td><td><code>huskhomes.command.edithome.rename</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/edithome</code></td><td><code>/edithome &lt;名称&gt; description &lt;描述&gt;</code></td><td>为家传送点设置自定义描述。</td><td><code>huskhomes.command.edithome.description</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/edithome</code></td><td><code>/edithome &lt;name&gt; relocate</code></td><td>将家传送点所在的位置移动至你的当前位置。</td><td><code>huskhomes.command.edithome.relocate</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/edithome</code></td><td>`/edithome &lt;名称&gt; privacy [public(公开)</td><td>private(私有)]`</td><td>为家传送点设置开放状态（对外开放或设为私有）</td><td style="text-align:center;"><code>huskhomes.command.edithome.privacy</code></td></tr><tr><td><code>/edithome</code></td><td><code>/edithome &lt;玩家名称.家名称&gt;</code></td><td>浏览或编辑其他玩家的家传送点相关内容。</td><td><code>huskhomes.command.edithome.other</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/phome</code></td><td><code>/phome [&lt;玩家名称.家名称&gt;]</code></td><td>传送至指定的公开传送点。</td><td><code>huskhomes.command.phome</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/phomelist</code></td><td><code>/phomelist [页码]</code></td><td>浏览公开传送点列表。</td><td><code>huskhomes.command.phomelist</code></td><td style="text-align:center;">✅</td></tr><tr><td>地标命令</td><td></td><td></td><td></td><td style="text-align:center;"></td></tr><tr><td><code>/warp</code></td><td><code>/warp [名称]</code></td><td>传送至指定地标。</td><td><code>huskhomes.command.warp</code>†</td><td style="text-align:center;">✅</td></tr><tr><td><code>/warp</code></td><td><code>/warp &lt;名称&gt; &lt;被操作玩家名称&gt;</code></td><td>将其他玩家传送至指定地标。</td><td><code>huskhomes.command.warp.other</code>†</td><td style="text-align:center;">❌</td></tr><tr><td><code>/warplist</code></td><td><code>/warplist [页码]</code></td><td>浏览地标传送点列表。</td><td><code>huskhomes.command.warplist</code>†</td><td style="text-align:center;">✅</td></tr><tr><td><code>/setwarp</code></td><td><code>/setwarp &lt;名称&gt;</code></td><td>创建一个新的地标。</td><td><code>huskhomes.command.setwarp</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/delwarp</code></td><td><code>/delwarp &lt;名称&gt;</code></td><td>删除指定的地标。</td><td><code>huskhomes.command.delwarp</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/editwarp</code></td><td><code>/esitwarp &lt;名称&gt;</code></td><td>浏览并编辑地标的有关内容。</td><td><code>huskhomes.command.editwarp</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/editwarp</code></td><td><code>/editwarp &lt;名称&gt; rename &lt;新名称&gt;</code></td><td>重命名指定地标。</td><td><code>huskhomes.command.editwarp.rename</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/editwarp</code></td><td><code>/editwarp &lt;名称&gt; description &lt;描述文本&gt;</code></td><td>设置地标的描述文本。</td><td><code>huskhomes.command.editwarp.description</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/editwarp</code></td><td><code>/editwarp &lt;名称&gt; relocate</code></td><td>将地标传送点所在位置移动到你的当前位置。</td><td>❌</td><td style="text-align:center;"></td></tr><tr><td>主城命令</td><td></td><td></td><td></td><td style="text-align:center;"></td></tr><tr><td><code>/tp</code></td><td><code>/tp &lt;目标玩家&gt;</code></td><td>传送到其他玩家的位置。</td><td><code>huskhomes.command.tp</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/tp</code></td><td><code>/tp &lt;玩家名称&gt; &lt;目标玩家&gt;</code></td><td>将指定玩家传送至目标玩家的位置。</td><td><code>huskhomes.command.tp.other</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/tp</code></td><td><code>/tp &lt;(x) (y) (z) [水平视角] [仰角] [世界名称] [服务器名称]&gt;</code></td><td>传送至指定位置。</td><td><code>huskhomes.command.tp.coordinates</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/tp</code></td><td><code>/tp &lt;玩家名称&gt; &lt;坐标&gt;</code></td><td>将指定玩家传送至其他位置。</td><td><code>huskhomes.command.tp.other</code><br><code>huskhomes.command.tp.coordinates</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/tphere</code></td><td><code>/tphere &lt;玩家名称&gt;</code></td><td>将指定玩家传送至你的位置。</td><td><code>huskhomes.command.tphere</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/tpoffline</code></td><td><code>/tpoffline &lt;玩家名称&gt;</code></td><td>传送至指定玩家最后离线所处的位置。</td><td><code>huskhomes.command.tpoffline</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/tpall</code></td><td><code>/tpall</code></td><td>将所有玩家传送至你的位置。</td><td><code>huskhomes.command.tpall</code></td><td style="text-align:center;">❌</td></tr><tr><td>请求传送命令</td><td></td><td></td><td></td><td style="text-align:center;"></td></tr><tr><td><code>/tpa</code></td><td><code>/tpa &lt;玩家名称&gt;</code></td><td>向指定玩家发出传送邀请。</td><td><code>huskhomes.command.tpa</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/tpahere</code></td><td><code>/tpahere &lt;玩家名称&gt;</code></td><td>请求指定玩家传送到你的位置。</td><td><code>huskhomes.command.tpahere</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/tpaall</code></td><td><code>/tpaall</code></td><td>向所有玩家发出传送到你的位置的请求。</td><td><code>huskhomes.command.tpaall</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/tpaccept</code></td><td><code>/tpaccept</code></td><td>接受你最后收到的传送请求。</td><td><code>huskhomes.command.tpaccept</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/tpaccept</code></td><td><code>/tpaccept [玩家名称]</code></td><td>接受指定玩家向你发送的传送请求。</td><td><code>huskhomes.command.tpaccept</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/tpdecline</code></td><td><code>/tpdecline</code></td><td>拒绝你最后收到的传送请求。</td><td><code>huskhomes.command.tpdecline</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/tpdecline</code></td><td><code>/tpdecline [玩家名称]</code></td><td>拒绝指定玩家向你发送的的传送请求。</td><td><code>huskhomes.command.tpdecline</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/tpignore</code></td><td><code>/tpignore</code></td><td>设置是否忽略所有传送请求。</td><td><code>huskhomes.command.tpignore</code></td><td style="text-align:center;">✅</td></tr><tr><td>随机传送命令</td><td></td><td></td><td></td><td style="text-align:center;"></td></tr><tr><td><code>/rtp</code></td><td><code>/rtp</code></td><td>在世界内随机传送。</td><td><code>huskhomes.command.rtp</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/rtp</code></td><td><code>/rtp &lt;玩家名称&gt;</code></td><td>将指定用户在世界内随机传送。</td><td><code>huskhomes.command.rtp.other</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/rtp</code></td><td><code>/rtp &lt;玩家名称&gt; &lt;世界名称&gt;</code></td><td>将指定用户在指定世界内随机传送。</td><td><code>huskhomes.command.rtp.world</code></td><td style="text-align:center;">❌</td></tr><tr><td>返回传送命令</td><td></td><td></td><td></td><td style="text-align:center;"></td></tr><tr><td><code>/back</code></td><td><code>/back</code></td><td>传送至你的上一个位置（见下）</td><td><code>huskhomes.command.back</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/back</code></td><td><code>/back</code></td><td>传送至你上一个被传送到的位置</td><td><code>huskhomes.command.back.previous</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/back</code></td><td><code>/back</code></td><td>传送至你上一次的死亡地点</td><td><code>huskhomes.command.back.death</code>‡</td><td style="text-align:center;">✅</td></tr><tr><td>插件管理命令</td><td></td><td></td><td></td><td style="text-align:center;"></td></tr><tr><td><code>/huskhomes</code></td><td><code>/huskhomes</code></td><td>使用插件管理命令。</td><td><code>huskhomes.command.huskhomes</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/huskhomes</code></td><td><code>/huskhomes about</code></td><td>浏览插件的关于信息。</td><td><code>huskhomes.command.huskhomes.about</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/huskhomes</code></td><td><code>/huskhomes help [页码]</code></td><td>浏览启用的插件命令列表。</td><td><code>huskhomes.command.huskhomes.help</code></td><td style="text-align:center;">✅</td></tr><tr><td><code>/huskhomes</code></td><td><code>/huskhomes update</code></td><td>检查插件更新。</td><td><code>huskhomes.command.huskhomes.update</code></td><td style="text-align:center;"></td></tr><tr><td><code>/huskhomes</code></td><td><code>/huskhomes reload</code></td><td>重载插件语言文本和配置文件。</td><td><code>huskhomes.command.huskhomes.reload</code></td><td style="text-align:center;"></td></tr><tr><td><code>/huskhomes</code></td><td><code>/huskhomes import</code></td><td>从其他插件导入数据。</td><td><code>huskhomes.command.huskhomes.import</code></td><td style="text-align:center;"></td></tr><tr><td><code>/huskhomes</code></td><td><code>/huskhomes delete player &lt;玩家名称&gt; [确认操作]</code></td><td>从系统数据库中删除指定玩家的所有家传送点。</td><td><code>huskhomes.command.huskhomes.delete</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/huskhomes</code></td><td><code>/huskhomes delete homes &lt;世界名称&gt; [服务器名称] [确认操作]</code></td><td>删除指定世界和/或服务器上的所有家传送点。</td><td><code>huskhomes.command.huskhomes.delete</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/huskhomes</code></td><td><code>/huskhomes delete warps &lt;世界名称&gt; [服务器名称] [确认操作]</code></td><td>删除指定世界和/或服务器上的所有地标传送点。</td><td><code>huskhomes.command.huskhomes.delete</code></td><td style="text-align:center;">❌</td></tr><tr><td><code>/huskhomes</code></td><td><code>/huskhomes status</code></td><td>浏览服务器调试信息界面。</td><td><code>huskhomes.command.huskhomes.status</code></td><td style="text-align:center;">❌</td></tr></tbody></table><h3 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h3><p>† — 若使用了通过权限限制的地标传送，玩家仍需要 <code>huskhomes.command.warp.(地标名称)</code> 才可以浏览或传送至地标位置。</p><p>‡ — 需要在 <a href="./setup.config"><code>config.yml</code></a> 中将 return_by_death 项启用后才可使用。</p><h3 id="命令别称" tabindex="-1">命令别称 <a class="header-anchor" href="#命令别称" aria-label="Permalink to &quot;命令别称&quot;">​</a></h3><p>下列命令有一些便于使用的别称：</p><table tabindex="0"><thead><tr><th>命令名称</th><th>命令别称</th></tr></thead><tbody><tr><td><code>/homelist</code></td><td><code>/homes</code></td></tr><tr><td><code>/phome</code></td><td><code>/publichome</code></td></tr><tr><td><code>/phomelist</code></td><td><code>/phomes</code>、<code>/publichomelist</code></td></tr><tr><td><code>/warplist</code></td><td><code>/warps</code></td></tr><tr><td><code>/tp</code></td><td><code>/tpo</code></td></tr><tr><td><code>/tpaccept</code></td><td><code>/tpyes</code></td></tr><tr><td><code>/tpdecline</code></td><td><code>/tpno</code>、<code>/tpdeny</code></td></tr></tbody></table><h2 id="禁用命令" tabindex="-1">禁用命令 <a class="header-anchor" href="#禁用命令" aria-label="Permalink to &quot;禁用命令&quot;">​</a></h2><p>若你需要禁用一条命令，可以在配置文件下该部分中 <code>disabled_commands</code> 处添加对应的命令，这样做它就不会被注册。</p><h3 id="在-config-yml-中禁用命令" tabindex="-1">在 config.yml 中禁用命令 <a class="header-anchor" href="#在-config-yml-中禁用命令" aria-label="Permalink to &quot;在 config.yml 中禁用命令&quot;">​</a></h3><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 被禁用的命令 (例: [&#39;/home&#39;, &#39;/warp&#39;] 的设置会禁用 /home 和 /warp 两条命令)</span></span>\n<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">disabled_commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/rtp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span></code></pre></div><h2 id="家传送点限制" tabindex="-1">家传送点限制 <a class="header-anchor" href="#家传送点限制" aria-label="Permalink to &quot;家传送点限制&quot;">​</a></h2><p>你可以通过权限节点修改玩家能够创建的家最大数量、免费创建的家数量以及开放家传送点的数量。</p><ul><li><code>huskhomes.max_homes.&lt;数量&gt;</code> — 决定了玩家可以设置的家传送点数量上限</li><li><code>huskhomes.free_homes.&lt;数量&gt;</code> — 决定了玩家可免费设置的家传送点数量，在此之后设置的所有家传送点都需要付费†</li><li><code>huskhomes.max_public_homes.&lt;数量&gt;</code> — 决定了玩家可开放的最大家传送点数量</li></ul><p>† 仅对启用了经济联动的服务器有效。</p><p>若玩家拥有多个权限节点（例如在多个权限组中），HuskHomes 默认使用数量最大的权限节点。若你需要让这些权限<em>叠加生效</em>，你可以将配置文件中的 <code>stack_permission_limits</code> 设置为 <code>true</code>（该设置在 <code>general</code> 部分）。</p><p>需要注意的是通过权限分配的上限会覆盖配置文件中为玩家设置的值（<code>max_homes</code>、<code>general</code> 下的 <code>max_public_homes</code> 和 <code>economy</code> 下的 <code>free_homes</code>）。</p><h2 id="传送预热时间" tabindex="-1">传送预热时间 <a class="header-anchor" href="#传送预热时间" aria-label="Permalink to &quot;传送预热时间&quot;">​</a></h2><p>你可以通过权限节点修改传送预热时间：</p><ul><li><code>huskhomes.teleport_warmup.&lt;时间秒数&gt;</code> - 决定玩家在传送前需要原地站定多久。</li></ul><p>HuskHomes 会在相同权限中取数值设置最大者生效，且忽略 <code>stack_permission_limits</code> 的值。</p><h2 id="绕过权限节点" tabindex="-1">绕过权限节点 <a class="header-anchor" href="#绕过权限节点" aria-label="Permalink to &quot;绕过权限节点&quot;">​</a></h2><p>这些权限可以让你绕过传送预热、传送冷却和传送收费。</p><table tabindex="0"><thead><tr><th>描述</th><th>权限节点</th><th>默认状态</th></tr></thead><tbody><tr><td>绕过传送预热†</td><td><code>huskhomes.bypass_teleport_warmup</code></td><td>未设置</td></tr><tr><td>绕过<a href="./features.commands.command-cooldowns">传送冷却检查</a></td><td><code>huskhomes.bypass_cooldowns</code></td><td>未设置</td></tr><tr><td>绕过<a href="./hooks.vault-economy">传送扣费检查</a></td><td><code>huskhomes.bypass_economy_checks</code></td><td>未设置</td></tr></tbody></table><p>† 在配置文件中的传送预热设置为 <code>&lt;= 0</code> 的值时无效。</p>',31)),e(o),e(c)])}const x=s(l,[["render",m]]);export{y as __pageData,x as default};
