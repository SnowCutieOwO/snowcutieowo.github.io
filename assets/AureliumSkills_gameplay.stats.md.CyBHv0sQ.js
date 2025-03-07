import{_ as n,C as t,c as o,o as r,b1 as E,G as i}from"./chunks/framework.CC7vnuC4.js";const m=JSON.parse('{"title":"属性","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/AureliumSkills"},{"title":"属性","link":"/AureliumSkills/gameplay.stats"}]},"headers":[],"relativePath":"AureliumSkills/gameplay.stats.md","filePath":"AureliumSkills/gameplay.stats.md"}'),u={name:"AureliumSkills/gameplay.stats.md"};function s(g,e,d,S,c,R){const l=t("NolebaseGitContributors"),a=t("NolebaseGitChangelog");return r(),o("div",null,[e[0]||(e[0]=E('<h1 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h1><p>属性相关的信息及其计算方式</p><p>本插件包含了六种随等级提升而增强的属性：</p><h2 id="生命-health" tabindex="-1">生命（Health） <a class="header-anchor" href="#生命-health" aria-label="Permalink to &quot;生命（Health）&quot;">​</a></h2><p>生命属性决定了玩家的最大生命值</p><ul><li>会向 Attribute.GENERIC_MAX_HEATLH 添加 AttributeModifier</li><li>会在玩家加入（PlayerJoinEvent 事件触发）、生命属性变动和配置文件重载时刷新</li><li>基于等级计算的生命值公式： <ul><li><code>Attribute.GENERIC_MAX_HEALTH = 20.0 + (Stat.HEALTH * Setting.HEALTH_MODIFIER)</code></li><li>Stat.HEALTH 即 /stats 界面内所展示的生命属性，而 Setting.HEALTH_MODIFIER 则为配置文件中“health.modifier”的值（默认值为 0.5）</li><li>“health.modifier”值为 1 时表示每点生命属性能为玩家提供 1 点生命值上限。</li></ul></li><li><strong>血量压缩：</strong><ul><li>若“health.health-scaling”项设置为 true 时，显示在玩家屏幕上的心数量会受血量上限的影响，可以防止血条挡住屏幕。 这意味着若玩家的生命值大于 20，则他们所见的生命值将不再是一颗心等于 2 点生命值。</li><li>血量压缩至多允许玩家屏幕上出现两排心。</li></ul></li><li><strong>伤害显示比例</strong><ul><li>随“health.hp-indicator-scaling”设置项的改变而改变</li><li>伤害显示比例即玩家原伤害显示在 ActionBar 前的所需翻倍的数值。</li><li>默认值为 5 则表示 20.0 的血量在 ActionBar 上会显示为 100 点生命值</li></ul></li><li>更多信息详见本章节的“生命属性”一文。</li></ul><h2 id="力量" tabindex="-1">力量 <a class="header-anchor" href="#力量" aria-label="Permalink to &quot;力量&quot;">​</a></h2><p>力量属性会提升玩家所造成的伤害值。</p><ul><li>力量属性会应用在 EntityDamageByEntityEvent 事件上。</li><li>受力量属性影响的伤害计算公式： <ul><li><code>Damage = InitialDamage + (Stat.STRENGTH * Setting.STRENGTH_MODIFIER)</code></li><li>Stat.Strength 即 /stats 界面内所展示的力量属性，而 Setting.STRENGTH_MODIFIER 则为配置文件中“strength.modifier”的值（默认值为 0.1）</li></ul></li><li>若 use-percent 项被设置为 true，则计算公式为： <ul><li><code>Damage = InitialDamage * (1 + (Stat.STRENGTH * Setting.STRENGTH_MODIFIER) / 100)</code></li></ul></li></ul><h2 id="韧性" tabindex="-1">韧性 <a class="header-anchor" href="#韧性" aria-label="Permalink to &quot;韧性&quot;">​</a></h2><p>韧性属性会降低玩家所受到的伤害。</p><ul><li>韧性属性会应用在 EntityDamageEvent 事件上。</li><li>受韧性属性影响的（玩家所受）伤害计算公式： <ul><li><code>Damage = OriginalDamage * (1 - (-1 * (1.01)^(-1 * Stat.TOUGHNESS * Setting.TOUGHNESS_MODIFIER) + 1))</code></li><li>Stat.Toughness 即 /stats 界面内所展示的韧性属性，而 Setting.Toughness_MODIFIER 则为配置文件中“toughness.new-modifier”的值（默认值为 1）</li></ul></li></ul><h2 id="再生" tabindex="-1">再生 <a class="header-anchor" href="#再生" aria-label="Permalink to &quot;再生&quot;">​</a></h2><p>再生属性会增加玩家的自然回血速度。</p><ul><li>可使用两种模式：<em>原版（Vanilla）<em>或</em>自定义（Custom）</em></li><li><strong>原版</strong><ul><li>在“regeneration.custom-regen-mechanics”项为 false 时使用</li><li>会在血量恢复原因为 RegainReason.SATIATED（玩家吃饱）时修改 EntityRegainHealthEvent 事件为玩家恢复的生命值</li><li>若玩家的饱和度大于 0： <ul><li>计算公式为 <code>AmountRegenerated = VanillaAmount + (Stat.REGENRATION * Setting.SATURATED_MODIFIER)</code></li><li>Stat.REGENERATION 即 /stats 界面内所展示的再生属性，而 Setting.SATURATED_MODIFIER 则为配置文件中“regeneration.saturated-modifier”的值（默认值为 0.5）</li></ul></li><li>若玩家的饱食度满而饱和度为 0： <ul><li>计算公式为 <code>AmountRegenerated = VanillaAmount + (Stat.REGENRATION * Setting.HUNGER_FULL_MODIFIER)</code></li><li>Stat.REGENERATION 即 /stats 界面内所展示的再生属性，而 Setting.HUNGER_FULL_MODIFIER 则为配置文件中“regeneration.hunger-full-modifier”的值（默认值为 0.025）</li></ul></li><li>若玩家的饱食度未满但大于 14： <ul><li>计算公式为 <code>AmountRegenerated = VanillaAmount + (Stat.REGENRATION * Setting.HUNGER_ALMOST_FULL_MODIFIER)</code></li><li>Stat.REGENERATION 即 /stats 界面内所展示的再生属性，而 Setting.HUNGER_ALMOST_FULL_MODIFIER 则为配置文件中“regeneration.hunger-almost-full-modifier”的值（默认值为 0.025）</li></ul></li></ul></li><li><strong>自定义</strong><ul><li>在“regeneration.custom-regen-mechanics”项为 true 时使用</li><li>无饱和度的情况下： <ul><li>每 Setting.HUNGER_DELAY 刻恢复生命值（配置文本“regeneration.custom-regen-options.hunger-delay”项，默认为 60）</li><li>若玩家饱食度满： <ul><li>计算公式为 <code>AmountRegenerated = Setting.BASE_REGEN + (Stat.REGENERATION * Setting.HUNGER_FULL_MODIFIER</code></li><li>Setting.BASE_REGEN 为配置文件中“regeneration.base-regen”的值（默认值为 1）</li></ul></li><li>若玩家饱食度未满但大于 14： <ul><li>计算公式为 <code>AmountRegenerated = Setting.BASE_REGEN + (Stat.REGENERATION * Setting.HUNGER_ALMOST_FULL_MODIFIER</code></li></ul></li></ul></li><li>有饱和度的情况下： <ul><li>每 Setting.SATURATED_DELAY 刻恢复生命值（配置文本“regeneration.custom-regen-options.hunger-delay”项，默认为 20）</li><li>计算公式为 <code>AmountRegenerated = Setting.BASE_REGEN + (Stat.REGENERATION * Setting.SATURATED_MODIFIER</code></li><li>Setting.SATURATED_MODIFIER 为配置文件中“regeneration.saturated-modifier”的值（默认值为 0.5）</li></ul></li><li>对 Setting.SATURATED_DELAY 和 Setting.HUNGER_DELAY 项的改动只会在服务器重启时生效</li></ul></li></ul><h2 id="幸运" tabindex="-1">幸运 <a class="header-anchor" href="#幸运" aria-label="Permalink to &quot;幸运&quot;">​</a></h2><p>幸运属性会提升玩家战利品（箱子和渔获物）的质量，并提升双倍掉落的几率</p><ul><li>会影响 Attribute.GENERIC_LUCK 的值</li><li>计算公式为 <code>Luck = Stat.LUCK * Setting.LUCK_MODIFIER</code></li><li>会在玩家加入（PlayerJoinEvent 事件触发）、幸运属性变动和配置文件重载时刷新</li><li>会在挖掘特定方块时概率触发双倍掉落 <ul><li>默认包括了石头、圆石、沙子、泥土、砂砾、草方块、安山岩、花岗岩和闪长岩</li><li>几率的计算公式为 <code>% Chance = Stat.LUCK * Setting.DOUBLE_DROP_MODIFIER * 100</code></li><li>Setting.DOUBLE_DROP_MODIFIER 为配置文件中“luck.double-drop-modifier”的值（默认为 0.005）</li><li>概率的上限为 Setting.DOUBLE_DROP_PERCENT_MAX 的值 （配置文件中“luck.double-drop-percent-max”的值，默认为 100）</li></ul></li></ul><h2 id="智慧" tabindex="-1">智慧 <a class="header-anchor" href="#智慧" aria-label="Permalink to &quot;智慧&quot;">​</a></h2><p>智慧属性会提升各方面所获经验的值，同时降低玩家的铁砧经验消耗</p><ul><li>获取经验的计算公式为 <code>ExperienceGained = InitialExperience * (1 + (Stat.WISDOM * Setting.EXPERIENCE_MODIFIER))</code></li><li>Setting.EXPERIENCE_MODIFIER 为配置文件中“wisdom.experience-modifier”的值（默认为 0.01）</li><li>减免后铁砧费用的计算公式为 <code>NewCost = OriginalCost * (1 - (-1 * 1.025^(-1 * Stat.WISDOM * Setting.ANVIL_COST_MODIFIER) + 1))</code></li><li>Setting.ANVIL_COST_MODIFIER 为配置文件中“wisdom.anvil-cost-modifier”的值（默认为 0.25）</li></ul>',21)),i(l),i(a)])}const I=n(u,[["render",s]]);export{m as __pageData,I as default};
