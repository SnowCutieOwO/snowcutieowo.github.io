import{_ as r,B as l,o as i,c,a7 as o,j as t,a,G as d,w as n}from"./chunks/framework.DSL0mkng.js";const q=JSON.parse('{"title":"🎡 稀有度、权重与几率","description":"","frontmatter":{},"headers":[],"relativePath":"ExcellentCrates/features.rarity-weights-chances.md","filePath":"ExcellentCrates/features.rarity-weights-chances.md"}'),p={name:"ExcellentCrates/features.rarity-weights-chances.md"},h={class:"warning custom-block"};function u(f,e,m,b,k,g){const s=l("font");return i(),c("div",null,[e[4]||(e[4]=o('<h1 id="🎡-稀有度、权重与几率" tabindex="-1">🎡 稀有度、权重与几率 <a class="header-anchor" href="#🎡-稀有度、权重与几率" aria-label="Permalink to &quot;🎡 稀有度、权重与几率&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>奖励使用的是稀有度与权重，而非概率。权重决定了奖励与稀有度的随机几率。</p><p>权重可以是任何值，但它会影响所有奖励/稀有度的随机几率。</p><p>你可以在<a href="./features.reward-placeholders.html">奖励变量</a>章节查看编辑器内的随机几率。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>如果你遇到了权重低但经常抽中的问题，请确保它们的随机几率在你的预料之中。</p></div><h2 id="稀有度" tabindex="-1">稀有度 <a class="header-anchor" href="#稀有度" aria-label="Permalink to &quot;稀有度&quot;">​</a></h2><p>稀有度是一种“分类”奖励的好方法，每种稀有度都有自己的随机几率，这可以让指定的奖励变得更普通或稀有。</p><p>当一个宝箱中存在不同稀有度的奖励时，插件会先选择玩家获得奖励的稀有度。然后再基于稀有度选择最终的奖励物品。</p><p>若要编辑或创建稀有度，你可前往 <code>config.yml</code> -&gt; Rewards -&gt; Rarities。你可以在这里找到一系列默认稀有度的设置。你可以随意编辑或删除它们。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>如果你不喜欢稀有度这个功能，只需将宝箱内所有的奖励都设置为同一稀有度即可（这样无论如何都不会影响最终的随机几率），或在配置文件内设置到只剩一个品质。</p></div>',11)),t("div",h,[e[3]||(e[3]=t("p",{class:"custom-block-title"},"警告",-1)),t("p",null,[e[1]||(e[1]=a("你必须在插件配置中至少留下")),d(s,{color:"red"},{default:n(()=>e[0]||(e[0]=[a("一个")])),_:1}),e[2]||(e[2]=a("可用的稀有度来让插件正常载入运行。"))])]),e[5]||(e[5]=o('<h2 id="随机几率的计算方式" tabindex="-1">随机几率的计算方式 <a class="header-anchor" href="#随机几率的计算方式" aria-label="Permalink to &quot;随机几率的计算方式&quot;">​</a></h2><h3 id="精简版" tabindex="-1">精简版 <a class="header-anchor" href="#精简版" aria-label="Permalink to &quot;精简版&quot;">​</a></h3><p>计算几率按如下公式计算：<code>&lt;权重&gt;/&lt;权重总和&gt; = &lt;随机几率&gt;%</code></p><h3 id="详细版" tabindex="-1">详细版 <a class="header-anchor" href="#详细版" aria-label="Permalink to &quot;详细版&quot;">​</a></h3><p>让我们拿三个奖励作为示例：</p><p>泥土（权重 50）<br> 苹果（权重 10）<br> 金锭（权重 2）</p><p>权重总和为 62（50+10+2）。</p><p>现在，每个奖励的随机几率会通过上述公式计算：</p><p>泥土：<code>50 / 62 = ~0.8</code>（80%） 苹果：<code>10 / 62 = ~0.17</code>（17%） 金锭：<code>2 / 62 = ~0.03</code>（3%）</p><p>若你将这些值加起来，则会得到 1.0（100%）。这就是为什么你可以使用任意权重值而插件总能正确均分的原因。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>受奖励稀有度影响的随机几率计算公式如下： <code>&lt;权重&gt; / &lt;权重总和&gt; * (&lt;稀有度权重&gt; / 稀有度权重总和)</code></p></div>',11))])}const v=r(p,[["render",u]]);export{q as __pageData,v as default};