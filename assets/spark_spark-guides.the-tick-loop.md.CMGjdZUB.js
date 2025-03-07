import{_ as s,C as i,c as o,o as p,b1 as l,G as e}from"./chunks/framework.CC7vnuC4.js";const n="/assets/ticks-linear.C2LuDK6V.png",c="/assets/ticks-with-sleeping.7zrh18Kn.png",k="/assets/ticks-lagging.CZpVn9dx.png",h="/assets/ticks-in-profiler.AKRGa83L.png",T=JSON.parse('{"title":"刻循环","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/spark"},{"title":"刻循环","link":"/spark/spark-guides.the-tick-loop"}]},"headers":[],"relativePath":"spark/spark-guides.the-tick-loop.md","filePath":"spark/spark-guides.the-tick-loop.md"}'),g={name:"spark/spark-guides.the-tick-loop.md"};function d(m,t,u,_,f,b){const a=i("NolebaseGitContributors"),r=i("NolebaseGitChangelog");return p(),o("div",null,[t[0]||(t[0]=l('<h1 id="刻循环" tabindex="-1">刻循环 <a class="header-anchor" href="#刻循环" aria-label="Permalink to &quot;刻循环&quot;">​</a></h1><p>几乎所有的游戏（包括Minecraft）都是由一个大的程序循环驱动的。服务器（和游戏）的执行内容可以按“刻（下称 <code>tick</code>）”拆分。</p><p>每次“滴答/刻”后，游戏服务器将会完成一系列的任务，包括但不限于：</p><ul><li>处理来自玩家的数据包（例如，移动、放置/破坏方块、攻击其他实体）；</li><li>更新玩家和其他实体的位置；</li><li>向所有玩家发送服务器相关的数据包（例如方块变动、实体移动以及各种操作）；</li><li>生产实体、处理实体 AI 以及寻路等；</li><li>处理红石更新。 以及更多！</li></ul><h2 id="minecraft-中的刻-滴答" tabindex="-1">Minecraft 中的刻/滴答 <a class="header-anchor" href="#minecraft-中的刻-滴答" aria-label="Permalink to &quot;Minecraft 中的刻/滴答&quot;">​</a></h2><p>正常情况下的 Minecraft 服务器<strong>每秒会有 20 个“tick”</strong>，或者换言之，<strong>每 50 毫秒一次 tick</strong>。</p><p><img src="'+n+'" alt="img"></p><p>正常情况下的刻循环示例。</p><p>当然，每个刻所分配的任务量是根据游戏实际情况而有所<strong>不同</strong>的，实际情况下的 tick 不会这般整齐！</p><h3 id="正常情况下" tabindex="-1">正常情况下 <a class="header-anchor" href="#正常情况下" aria-label="Permalink to &quot;正常情况下&quot;">​</a></h3><p>服务器在正常运行时，执行一个完整的 tick 耗时应当小于（或等于）50 毫秒。</p><p>若一个 tick 耗时小于 50 毫秒，则服务器会在剩余的时间中“瞌睡”（不做任何事），直到处理下一次 tick。</p><p>例如：</p><ul><li>服务器消耗 15 毫秒处理一个 tick；</li><li>刻循环控制会会在接下来的 35 毫秒中“瞌睡”，直到执行下一次 tick。</li></ul><p><img src="'+c+'" alt="img" title="服务器在空闲时的刻循环示意图。"></p><p>如你所见，本示例中的 tick 耗时均小于 50 毫秒，但是它们还是会空出一段来保持每秒有 20 个 tick。</p><p>如果服务器不把这些东西空出来（期间的“瞌睡”）的话，游戏会在“感觉”上变得更快——像是被加速了一样！</p><h3 id="卡顿情况下" tabindex="-1">卡顿情况下 <a class="header-anchor" href="#卡顿情况下" aria-label="Permalink to &quot;卡顿情况下&quot;">​</a></h3><p>当处理一个 tick 耗时超过 50 毫秒时，下一个 tick 的计算就会被延后，因为 tick 只能排队而不可并行处理。在这种情况下，玩家的游玩体验就会变差，所有东西的反应速度都会变慢，也就是常说的“变卡”。</p><p><img src="'+k+'" alt="img" title="服务器在卡顿时的刻循环示意图。"></p><p>如你所见，当每个 tick 的耗时变长时，之后的刻就会“向右推移”，这会导致在一段相同的时间中，处理的游戏刻会变少。这就是服务器卡顿的原因，服务器变得更慢了。</p><p>你也可以在这里看到<strong>每秒刻数</strong>（Ticks per Second，缩写为TPS）和<strong>每刻毫秒数</strong>（Milliseconds per Tick，缩写为MSPT）的数据来源。</p><p>在上述的例子中：</p><ul><li>spark 计算所得的 TPS 为 <strong>17</strong>，因为一秒内只能处理 17 个滴答；</li><li>spark 计算所得的 MSPT 最小为 <strong>~20ms</strong>（状况良好！）而最大为 <strong>~80ms</strong>（状况糟糕！）。</li></ul><h2 id="spark-报告中的刻-滴答" tabindex="-1">spark 报告中的刻/滴答 <a class="header-anchor" href="#spark-报告中的刻-滴答" aria-label="Permalink to &quot;spark 报告中的刻/滴答&quot;">​</a></h2><p>你可以在 spark 的健康报告中清楚地找到刻循环，它会显示在靠近页面顶部的地方！</p><p><img src="'+h+'" alt="img" title="一张截图，显示了健康报告中的刻循环方法。"></p><p>在上述的例子中，我们可以看见 <code>waitForNextTick()</code> 方法在“服务器主线程”上占用了 81% 的 CPU 活动。这表示服务器一切正常！这也意味着在平均意义上，服务器能在为每个 tick 中的 50 毫秒分配所有任务的同时，还能有 80% 的时间休息。</p><p>这是一个好现象，表示服务器仍有余力。如果服务器活动中出现了一些突然的运算增长（例如，玩家加入、更多实体/方块更新），服务器就能游刃有余地处理它。</p><p>大体上讲：</p><ul><li>“瞌睡”时间占比越高，服务器越空闲；</li><li>如果“瞌睡”时间占比小于 20%（也就是处理内容占一整个 tick 的 80%），表示服务器运行良好，但可能会在运算<em>某些</em>滴答时卡顿（谨记，这些只是平均值！）</li><li>如果“瞌睡”时间占比小于 5%（也就是处理内容占一整个 tick 的 95%），你的服务器可能正经历卡顿，且难以应付更多的运算。</li></ul><p><strong>再重复一次，这些只是平均值！</strong></p><p>假如你的服务器处理<em>大多数</em> tick 只需 20 毫秒，而处理<em>某些</em> tick 则需要超过 300 毫秒（这表示服务器可能运行不畅！）。这就有可能表示你遭遇了突然卡顿而非上文所述的持续卡顿。</p><p>如果这是实际情况，那么用于“瞌睡”和“tick”的百分比通常不符——极值会被平均化。</p><h2 id="另见" tabindex="-1">另见 <a class="header-anchor" href="#另见" aria-label="Permalink to &quot;另见&quot;">​</a></h2><ul><li>本文部分译名参考自 Minecraft 中文维基：<a href="https://zh.minecraft.wiki/w/%E5%88%BB" target="_blank" rel="noreferrer">https://zh.minecraft.wiki/w/刻</a></li></ul>',36)),e(a),e(r)])}const q=s(g,[["render",d]]);export{T as __pageData,q as default};
