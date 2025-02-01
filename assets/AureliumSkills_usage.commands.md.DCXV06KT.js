import{_ as o,c as a,o as r,al as d}from"./chunks/framework.LK_RS8Nx.js";const k=JSON.parse('{"title":"命令列表","description":"","frontmatter":{},"headers":[],"relativePath":"AureliumSkills/usage.commands.md","filePath":"AureliumSkills/usage.commands.md"}'),c={name:"AureliumSkills/usage.commands.md"};function i(s,e,t,l,m,n){return r(),a("div",null,e[0]||(e[0]=[d('<h1 id="命令列表" tabindex="-1">命令列表 <a class="header-anchor" href="#命令列表" aria-label="Permalink to &quot;命令列表&quot;">​</a></h1><p>插件的命令列表。</p><p>命令格式：<code>[]</code> 为必选参数，<code>()</code> 为可选参数。若要查询权限列表，请见权限章节。</p><h2 id="技能命令" tabindex="-1">技能命令 <a class="header-anchor" href="#技能命令" aria-label="Permalink to &quot;技能命令&quot;">​</a></h2><p>等价用法：<code>/sk</code>、<code>/skills</code>、<code>/skill</code>。任何 /sk 开头的命令均可被上述等价用法代替。<br><code>/sk</code> - 打开技能菜单</p><h2 id="经验命令" tabindex="-1">经验命令 <a class="header-anchor" href="#经验命令" aria-label="Permalink to &quot;经验命令&quot;">​</a></h2><p><code>/sk xp add [玩家名称] [技能名称] [经验数量] (是否静默)</code> - 将特定数量的技能经验给予玩家。<br><code>/sk xp set [玩家名称] [技能名称] [经验数量] (是否静默)</code> - 将玩家特定技能的经验设置为指定值。<br><code>/sk xp remove [玩家名称] [技能名称] [经验数量] (是否静默)</code> - 减少玩家指定技能的经验值数量。</p><h2 id="排行榜命令" tabindex="-1">排行榜命令 <a class="header-anchor" href="#排行榜命令" aria-label="Permalink to &quot;排行榜命令&quot;">​</a></h2><p><code>/sk top (页码)</code><br><code>/sk top [技能名称] (页码)</code> - 显示指定技能的排行榜（等价用法：<code>/skilltop</code>）<br><code>/sk top average (页码)</code><br><code>/sk rank</code> - 显示你的技能排行（等价用法：<code>/skillrank</code>）</p><h2 id="技能命令-1" tabindex="-1">技能命令 <a class="header-anchor" href="#技能命令-1" aria-label="Permalink to &quot;技能命令&quot;">​</a></h2><p><code>/sk skill setlevel [玩家名称] [技能名称] [技能等级]</code> - 将玩家的指定技能设置为特定等级。<br><code>/sk skill setall [玩家名称] [技能名称]</code> - 将玩家的所有技能设置为指定等级。<br><code>/sk skill reset [玩家名称] (技能名称)</code> - 重置玩家的所有技能等级为 1。不填名称则默认重置所有技能。</p><h2 id="翻倍命令" tabindex="-1">翻倍命令 <a class="header-anchor" href="#翻倍命令" aria-label="Permalink to &quot;翻倍命令&quot;">​</a></h2><p><code>/sk modifier add [玩家名称] [属性名称] [翻倍命名] [翻倍比率] (是否静默) (是否叠加)</code> - 向玩家添加特定的属性翻倍。将“是否静默”设置为 true 会使玩家不收到命令回显，设置“是否叠加”为 true 会使已存在的名称相同的翻倍倍率叠加。<br><code>/sk modifier remove [玩家名称] [翻倍命名] (是否静默)</code> - 将玩家的特定翻倍删除。<br><code>/sk modifier list (玩家名称) (属性名称)</code> - 列出玩家指定属性的翻倍。<br><code>/sk modifier removeall (玩家名称) (属性名称) (是否静默)</code> - 将玩家所有的翻倍移除。<br><code>/sk item modifier add [属性名称] [翻倍比率] (是否显示 Lore)</code> - 向手持物品添加翻倍，默认显示 Lore。<br><code>/sk item modifier remove [属性名称] (是否移除 Lore)</code> - 移除手持物品上的指定翻倍，默认连同 Lore 移除。<br><code>/sk item modifier list</code> - 列出手上物品的所有翻倍。<br><code>/sk item modifier removeall</code> - 移除手上物品的所有翻倍。<br><code>/sk armor modifier add [属性名称] [翻倍比率] (是否显示 Lore)</code> - 向手持物品添加装备翻倍，默认显示 Lore。<br><code>/sk armor modifier remove [属性名称] (是否移除 Lore)</code> - 移除手持物品上的指定装备翻倍，默认连同 Lore 移除。<br><code>/sk armor modifier list</code> - 列出手上物品的所有装备翻倍。<br><code>/sk armor modifier removeall</code> - 移除手上物品的所有装备翻倍。</p><h2 id="条件命令" tabindex="-1">条件命令 <a class="header-anchor" href="#条件命令" aria-label="Permalink to &quot;条件命令&quot;">​</a></h2><p><code>/sk item requirement add [技能名称] [技能等级] (是否添加 Lore)</code> - 向手持物品添加物品条件，默认连同 Lore 添加。<br><code>/sk item requirement remove [技能名称] (是否移除 Lore)</code> - 移除手持物品上的指定技能等级限制，默认连同 Lore 移除。<br><code>/sk item requirement list</code> - 查询手上物品的条件。<br><code>/sk item requirement removeall</code> - 移除手上物品所有的物品条件。<br><code>/sk armor requirement add [技能名称] [技能等级] (是否添加 Lore)</code> - 向手持物品添加装备条件，默认连同 Lore 添加。<br><code>/sk armor requirement remove [技能名称] (是否移除 Lore)</code> - 移除手持物品上的指定技能等级限制，默认连同 Lore 移除。<br><code>/sk armor requirement list</code> - 查询手上物品的装备条件。<br><code>/sk armor requirement removeall</code> - 移除手上所有的装备条件。</p><h2 id="杂项命令" tabindex="-1">杂项命令 <a class="header-anchor" href="#杂项命令" aria-label="Permalink to &quot;杂项命令&quot;">​</a></h2><p><code>/sk lang [语言名称]</code> - 切换插件对客户端的显示语言。<br><code>/sk multiplier (玩家名称)</code> - 显示玩家通过权限获得的翻倍名称。<br><code>/sk abtoggle</code> - 切换自身 ActionBar 可见性。<br><code>/sk help</code> - 显示帮助页面。</p><h2 id="玩家数据命令" tabindex="-1">玩家数据命令 <a class="header-anchor" href="#玩家数据命令" aria-label="Permalink to &quot;玩家数据命令&quot;">​</a></h2><p><code>/sk profile skills [玩家名称]</code> - 查看其他玩家的技能等级。“玩家名称”为你所要查询的玩家名称。被查询玩家不必在线。<br><code>/sk profile stats [玩家名称]</code> - 查询其他玩家的属性等级。</p><h2 id="管理员命令" tabindex="-1">管理员命令 <a class="header-anchor" href="#管理员命令" aria-label="Permalink to &quot;管理员命令&quot;">​</a></h2><p><code>/sk save</code> - 保存全服的技能数据。<br><code>/sk updateleaderboards</code> - 刷新排行榜数据。<br><code>/sk reload</code> - 重载配置文本、消息文本、菜单、掉落表、所有 ActionBar、所有 BossBar、生命和幸运值属性。<br><code>/sk transfer [被操作玩家] [目标玩家]</code> - 将玩家的数据复制到其他玩家上。“被操作玩家”和“目标玩家”都需要为有效的 UUID 值。该操作不可逆。进行数据转移的双方玩家不必在线。<br><code>/sk resethealth</code> - 移除指定玩家的所有生命与幸运属性。若你打算卸载本插件，那么这个命令将会很有用。该命令仅能通过控制台执行，且执行命令时不应有玩家在线，以使其正常运作。</p><h2 id="备份命令" tabindex="-1">备份命令 <a class="header-anchor" href="#备份命令" aria-label="Permalink to &quot;备份命令&quot;">​</a></h2><p><code>/backup save</code> - 保存一份当前的技能数据并存至本插件的备份文件夹。<br><code>/backup load [文件名称]</code> - 从备份文件夹的指定名称载入备份。你必须指定实际的备份名称，包括文件后缀名。这会覆盖当前的所有技能数据，所以建议在导入新数据之前做好备份。</p><h2 id="魔法命令" tabindex="-1">魔法命令 <a class="header-anchor" href="#魔法命令" aria-label="Permalink to &quot;魔法命令&quot;">​</a></h2><p><code>/mana (玩家名称)</code> - 查询指定玩家或自身的魔力剩余。<br><code>/mana add [玩家名称] [数量] (允许超过上限) (是否静默)</code> - 向玩家添加魔力。<br><code>/mana remove [玩家名称] [数量] (是否静默)</code> - 扣除指定玩家的魔力点数，不允许为负数，若出现此情况时多余的部分会被忽视，即当前魔力值会被扣减为 0。<br><code>/mana set [玩家名称] [数量] (允许超过上限) (是否静默)</code> - 将玩家的魔力设定为指定值。</p><h2 id="属性命令" tabindex="-1">属性命令 <a class="header-anchor" href="#属性命令" aria-label="Permalink to &quot;属性命令&quot;">​</a></h2><p><code>/stats</code> - 打开属性菜单。</p><h2 id="技能名称命令" tabindex="-1">技能名称命令 <a class="header-anchor" href="#技能名称命令" aria-label="Permalink to &quot;技能名称命令&quot;">​</a></h2><p><code>/[技能名称]</code> - 打开对应技能的菜单。可以在配置文本中禁用。（例如：/farming、/archery、/healing）</p><h2 id="物品注册命令" tabindex="-1">物品注册命令 <a class="header-anchor" href="#物品注册命令" aria-label="Permalink to &quot;物品注册命令&quot;">​</a></h2><p><code>/sk claimitems</code> - 打开未领物品菜单，以领取尚未领取的物品。<br><code>/sk item register [ID]</code> - 将物品注册入本插件的物品系统，使其可在配置文本中引用。<br><code>/sk item unregister [ID]</code> - 解除指定物品的注册。<br><code>/sk item give [玩家名称] [ID] (数量)</code> - 将指定的注册物品发送给玩家，若玩家没有足够多背包空间，物品将自动进入玩家的未领物品库存。</p>',31)]))}const b=o(c,[["render",i]]);export{k as __pageData,b as default};
