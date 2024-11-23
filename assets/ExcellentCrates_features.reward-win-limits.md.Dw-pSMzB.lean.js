import{_ as a,c as t,a7 as r,o}from"./chunks/framework.Bz4u1pnU.js";const u=JSON.parse('{"title":"⏳ 奖励获取限制","description":"","frontmatter":{},"headers":[],"relativePath":"ExcellentCrates/features.reward-win-limits.md","filePath":"ExcellentCrates/features.reward-win-limits.md"}'),n={name:"ExcellentCrates/features.reward-win-limits.md"};function s(l,e,i,d,c,p){return o(),t("div",null,e[0]||(e[0]=[r('<h1 id="⏳-奖励获取限制" tabindex="-1">⏳ 奖励获取限制 <a class="header-anchor" href="#⏳-奖励获取限制" aria-label="Permalink to &quot;⏳ 奖励获取限制&quot;">​</a></h1><p>在 ExcellentCrates 中你可以设置指定的奖励对全服或单个玩家的限制次数！</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>每个奖励都能有全局或按玩家计算的获取限制。每个限制都有下列的选项：</p><p>Enabled - 是否启用限制 Amount - 设置获取次数的上限 Cooldown - 设置获取次数刷新的冷却 Cooldown Step - 决定施加冷却所需的抽中次数。1 = 每次抽中后触发。2 = 每 2 次抽中后触发，依此类推。</p><p>若一个奖励同时设置了玩家和全局限制，最小的 <code>Amount</code> 和最大的 <code>Cooldown</code> 会用于决定玩家是否可以获取该奖励。</p><p>示例 #1：玩家有 5 次个人限制，但全局限制只有 3 次，那么玩家不能获取该奖励超过 3 次。</p><p>示例 #2：玩家 2 小时前有个人冷却，但全局冷却仍存在 4 小时的限制，那么玩家必须等到全局冷却完毕后才可再次获取奖励。</p>',8)]))}const f=a(n,[["render",s]]);export{u as __pageData,f as default};