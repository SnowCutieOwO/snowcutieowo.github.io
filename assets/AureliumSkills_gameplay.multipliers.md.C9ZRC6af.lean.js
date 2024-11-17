import{_ as e,o as i,c as a,a7 as r}from"./chunks/framework.DSL0mkng.js";const n=JSON.parse('{"title":"经验翻倍","description":"","frontmatter":{},"headers":[],"relativePath":"AureliumSkills/gameplay.multipliers.md","filePath":"AureliumSkills/gameplay.multipliers.md"}'),s={name:"AureliumSkills/gameplay.multipliers.md"};function t(p,l,o,u,m,c){return i(),a("div",null,l[0]||(l[0]=[r('<h1 id="经验翻倍" tabindex="-1">经验翻倍 <a class="header-anchor" href="#经验翻倍" aria-label="Permalink to &quot;经验翻倍&quot;">​</a></h1><p>指导添加技能经验翻倍的教程</p><h2 id="关于" tabindex="-1">关于 <a class="header-anchor" href="#关于" aria-label="Permalink to &quot;关于&quot;">​</a></h2><p>翻倍是一种增加玩家经验获取数量的方式，不需要修改经验来源配置文件。</p><p>翻倍是基于权限的，这意味着你可以单独为一个玩家或一个权限组添加翻倍（例如特定的等级）。如果你的权限插件支持施加临时权限，那么你甚至可以依此创建出限时翻倍的功能。</p><h2 id="添加翻倍" tabindex="-1">添加翻倍 <a class="header-anchor" href="#添加翻倍" aria-label="Permalink to &quot;添加翻倍&quot;">​</a></h2><p>若要添加一个翻倍，请使用你权限组插件的对应命令，按照下列的格式为玩家或权限组添加权限：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>aureliumskills.multiplier.百分比</span></span></code></pre></div><p>将“百分比”字段替换为<strong>翻倍比率的经验</strong>。例如权限节点 <code>aureliumskills.multiplier.100</code> 将会给予玩家 200% 也就是双倍的经验。百分比支持小数，例如给予 110.5% 翻倍的权限为 <code>areliumskills.multiplier.10.5</code>。</p><h2 id="指定技能翻倍" tabindex="-1">指定技能翻倍 <a class="header-anchor" href="#指定技能翻倍" aria-label="Permalink to &quot;指定技能翻倍&quot;">​</a></h2><p>翻倍也可指定技能名称。格式为 <code>aureliumskills.multiplier.技能名.百分比</code>。此处“技能名”技能默认的英语名称。<br> 例如，使农耕技能获得 1.5 倍经验翻倍的权限节点为：<code>aureliumskills.multiplier.farming.50</code></p><h2 id="多个翻倍" tabindex="-1">多个翻倍 <a class="header-anchor" href="#多个翻倍" aria-label="Permalink to &quot;多个翻倍&quot;">​</a></h2><p>如果玩家有多个翻倍权限，这些翻倍会像只存在一个翻倍一样叠加在一起，正常运作。例如，100%（2倍）和50%（1.5倍）的经验翻倍将会变为 150%（2.5倍）的经验翻倍。</p><p>若你想要多个翻倍同时基于未翻倍的基数计算，你不能简单地重复添加相同的权限，因为权限节点的要求是不能重复。但你可以将这个整数值变成诸如 100.0 的小数值，于是在权限节点上它们不相同，但在游戏中的效果是相同的。</p><p>例如，<code>aureliumskills.multiplier.100</code> 和 <code>aureliumskills.multiplier.100.0</code> 是等价的。你可以在小数点后加更多数量的零，来创造类似相同效果的不重复权限节点。</p><h2 id="luckperms-权限示例" tabindex="-1">LuckPerms 权限示例 <a class="header-anchor" href="#luckperms-权限示例" aria-label="Permalink to &quot;LuckPerms 权限示例&quot;">​</a></h2><p>下列示例是适用于 LuckPerms 的添加翻倍示例。若你使用了别的权限组插件，请自行寻找添加权限等与示例中相同的命令。<br> 向指定玩家添加双倍经验翻倍：</p><p><code>/lp user [玩家名] permission set aureliumskills.multiplier.100</code></p><p>向 vip 权限组添加 1.5 倍经验翻倍：</p><p><code>/lp group vip permission set aureliumskills.multiplier.50</code></p><p>向所有玩家添加 12 小时的三倍限时经验翻倍：</p><p><code>/lp group default permission settemp aureliumskills.multiplier.200 true 12h</code></p><p>删除某个玩家的双倍经验翻倍：</p><p><code>/lp user [player] permission unset aureliumskills.multiplier.100</code></p><div class="info custom-block"><p class="custom-block-title">信息</p><p>在移除翻倍时，要删除的权限节点必须与之前添加的相同。</p></div><h2 id="物品和装备翻倍" tabindex="-1">物品和装备翻倍 <a class="header-anchor" href="#物品和装备翻倍" aria-label="Permalink to &quot;物品和装备翻倍&quot;">​</a></h2><p>翻倍也可以添加在物品和装备上，与属性翻倍类似。物品翻倍仅在持有物品时触发翻倍效果，而装备翻倍则仅在装备该物品时触发翻倍效果。施加在物品或装备上的翻倍同样既可以是全局翻倍，又可以是指定技能的翻倍。<br> 可以使用下列命令为物品或装备添加翻倍：</p><ul><li>/skills item/armor multiplier add &lt;目标&gt; &lt;值&gt; [是否增加 Lore]</li><li>/skills item/armor multiplier remove &lt;目标&gt;</li><li>/skills item/armor multiplier list</li><li>/skills item/armor multiplier removeall</li></ul><p>根据你所添加的翻倍种类自行决定使用物品或装备翻倍。目标参数可为全局（global）或指定技能名称。翻倍的值与上方权限相同，均为多出的百分比。</p><p>这些翻倍可直接在命令 /skills multiplier 列表中查询，该命令在玩家拥有除全局翻倍外的增益时，还可按技能展示指定的翻倍。</p>',30)]))}const h=e(s,[["render",t]]);export{n as __pageData,h as default};
