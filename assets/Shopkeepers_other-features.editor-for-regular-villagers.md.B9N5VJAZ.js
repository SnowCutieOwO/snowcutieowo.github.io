import{_ as i,C as a,c as s,o as l,b1 as n,G as r}from"./chunks/framework.CC7vnuC4.js";const m=JSON.parse('{"title":"普通村民编辑","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/Shopkeepers"},{"title":"普通村民编辑","link":"/Shopkeepers/other-features.editor-for-regular-villagers"}]},"headers":[],"relativePath":"Shopkeepers/other-features.editor-for-regular-villagers.md","filePath":"Shopkeepers/other-features.editor-for-regular-villagers.md"}'),p={name:"Shopkeepers/other-features.editor-for-regular-villagers.md"};function d(h,e,c,g,u,f){const o=a("NolebaseGitContributors"),t=a("NolebaseGitChangelog");return l(),s("div",null,[e[0]||(e[0]=n('<h1 id="普通村民编辑" tabindex="-1">普通村民编辑 <a class="header-anchor" href="#普通村民编辑" aria-label="Permalink to &quot;普通村民编辑&quot;">​</a></h1><p>有些使用本插件的用户可能在寻找能够编辑原版村民交易的功能，从而避免使用原版的繁杂命令。本插件因此拥有对普通村民与流浪商人的编辑器。</p><p><em>村民编辑器：</em></p><h2 id="功能概览" tabindex="-1">功能概览 <a class="header-anchor" href="#功能概览" aria-label="Permalink to &quot;功能概览&quot;">​</a></h2><p>本功能的范围仅限于编辑选定的原版村民。基本上等同于通过命令生成原版的村民交易。</p><p>其他事情都会受到使用本功能玩家的影响。比如，原版村民可能会丢失交易或者产生额外的交易、缺货、或者经常交易出现交易熟练度，以及变更职业、走丢、被击杀或搜寻新的村庄。插件不负责处理原版的这些机制，甚至有可能和它们冲突。</p><p>被编辑的村民行为会与<a href="./creating-shops.admin-shop-setup">管理员商店</a>相似。它们不再会主动更换职业、升级交易或者将玩家折扣考虑在内。</p><p>被编辑的村民也不支持原版村民及其交易的行为。例如，对原版交易可用的多种选项在村民编辑器中不可用（见下文<a href="#编辑交易">编辑交易</a>部分）。</p><p>另外，全局重新修改原版村民的交易、修改交易进度甚至其行为都不在插件的能力范围内。</p><h2 id="打开村民编辑器" tabindex="-1">打开村民编辑器 <a class="header-anchor" href="#打开村民编辑器" aria-label="Permalink to &quot;打开村民编辑器&quot;">​</a></h2><p>本部分的村民编辑器与<a href="./creating-shops.editing-shops">插件商店编辑器</a>可以用于不属于本插件或 Citizens 插件产生的任何村民与流浪商人。</p><p>你可以使用命令 <code>/shopkeepers editVillager [村民名称]</code>（见<a href="./commands">命令</a>章节）打开对应村民或流浪商人的编辑界面。玩家需要权限 <code>shopkeeper.edit-villagers</code> 与 <code>shopkeeper.edit-wandering-traders</code>（默认：<code>op</code>）来对应地编辑村民或者流浪商人。</p><p>你也可以在<a href="./installtion-updating.configuration">配置文本</a>中启用 <code>edit-regular-villagers</code> 和 <code>edit-regular-wandering-traders</code>（默认为 <code>false</code>），然后对着原版村民或流浪商人<strong>蹲下右键</strong>（与打开本插件的商店相似）。</p><h2 id="编辑交易" tabindex="-1">编辑交易 <a class="header-anchor" href="#编辑交易" aria-label="Permalink to &quot;编辑交易&quot;">​</a></h2><p>编辑器支持编辑村民交易，与<a href="./creating-shops.admin-shop-setup">管理员商店</a>相似。</p><p>需要注意的是通过编辑器创建或被编辑的交易次数都是无限的，且不会获得经验奖励，没有价格折扣且交易计数会被锁定在 0（当前没有选项可以保存这些参数）。</p><p>若要防止不小心打开界面导致的交易误编辑（导致上述属性被修改），我们会在编辑界面关闭后将改动后的交易与原交易进行对比：如果完全相同，插件不会修改交易。聊天栏消息会显示编辑界面关闭后有多少条交易被修改。</p><p>另外村民有可能在切换或重置职业时修改交易，我们会将村民的职业经验值在经过编辑器操作后设置为至少 1 点。但是，如果村民没有职业，或者你将其职业再次移除，则它可能会搜寻附近未被认领的工作方块并再次选择新职业且无视当前经验值。</p><p>如果村民在编辑过程中被击杀或者处于卸载区块内，任何在编辑器内的改动都会失效。对村民的编辑在这种情况下不会在编辑器中显示。</p><h2 id="其他编辑选项" tabindex="-1">其他编辑选项 <a class="header-anchor" href="#其他编辑选项" aria-label="Permalink to &quot;其他编辑选项&quot;">​</a></h2><p>其他支持的村民编辑选项有：</p><ul><li><strong>删除</strong>村民实体。</li><li>打开<strong>村民物品栏</strong>的界面复制。需要注意的是任何对其的改动都不会使得村民实际物品栏发生变化（即智能浏览而不可通过此界面编辑村民的物品栏）。</li><li>修改村民的<strong>职业</strong>。通过编辑器修改职业会保留他们拥有的交易，我们会将村民的经验值设置为 1，这样它们就不会因切换职业而丢失交易。 但是，如果你通过编辑器再次重置村民的职业，则它可能会搜寻附近未被认领的工作方块并再次选择新职业且无视当前经验值。</li><li>修改<strong>村民类型</strong>（依据生物群系变化的外观）。</li><li>修改<strong>村民等级</strong>（即身上的徽章颜色）。这也会影响村民在交易界面内显示的职位以及是否在界面内出现其经验值。</li><li>切换<strong>村民 AI</strong> 的开或关。这可以让村民在被编辑时保持静止。否则它可能会跑远。</li><li>切换村民的 <code>Invulnerable</code>（无敌）标签。</li><li>编辑村民的装备。</li></ul><h2 id="为什么不是独立插件" tabindex="-1">为什么不是独立插件？ <a class="header-anchor" href="#为什么不是独立插件" aria-label="Permalink to &quot;为什么不是独立插件？&quot;">​</a></h2><p>这个编辑器是本插件的一部分，且用到了许多插件原本功能的实现方法。将它与主要功能一同包含在插件中可以减轻工作量及降低维护难度。</p>',24)),r(o),r(t)])}const b=i(p,[["render",d]]);export{m as __pageData,b as default};
