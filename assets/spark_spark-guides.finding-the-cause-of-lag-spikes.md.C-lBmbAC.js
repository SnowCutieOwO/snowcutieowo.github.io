import{_ as r,c as o,o as a,b0 as p}from"./chunks/framework.w6NQj85O.js";const i="/assets/finding-lag-tickmonitor.DYYkXp3s.png",t="/assets/finding-lag-tickmonitor-demo.B8Nu5BpL.png",s="/assets/finding-lag-example-viewer.CNdrxZO0.png",_=JSON.parse('{"title":"排查卡顿问题","description":"","frontmatter":{},"headers":[],"relativePath":"spark/spark-guides.finding-the-cause-of-lag-spikes.md","filePath":"spark/spark-guides.finding-the-cause-of-lag-spikes.md"}'),c={name:"spark/spark-guides.finding-the-cause-of-lag-spikes.md"};function n(l,e,d,k,m,f){return a(),o("div",null,e[0]||(e[0]=[p('<h1 id="排查卡顿问题" tabindex="-1">排查卡顿问题 <a class="header-anchor" href="#排查卡顿问题" aria-label="Permalink to &quot;排查卡顿问题&quot;">​</a></h1><p>卡顿会在一小部分滴答（有些时候甚至只有一个滴答）花费很长时间进行计算时出现。</p><p>卡顿发生的频率可长可短，小到每 20 刻，大到每分钟。当然，这些都和玩家的行为有关。</p><p>在一般的性能报告中寻找卡顿根源会让人焦头烂额，因为数据经过平均化处理。正常抽样的加入会“削去”占用波峰，这会导致它们看起来不那么像会卡服的东西。</p><p>还好，spark 为你提供了排查问题的两个工具。</p><h2 id="第一步-使用命令-saprk-tickmonitor-检测高占用" tabindex="-1">第一步：使用命令 <code>/saprk tickmonitor</code> 检测高占用 <a class="header-anchor" href="#第一步-使用命令-saprk-tickmonitor-检测高占用" aria-label="Permalink to &quot;第一步：使用命令 `/saprk tickmonitor` 检测高占用&quot;">​</a></h2><p>若要在报告中找出卡顿的原因，我们需要将这些“卡顿”的滴答从其他正常的滴答中筛选出来。</p><p>所以，这就是我们使用命令 <a href="https://spark.lucko.me/docs/Command-Usage#spark-tickmonitor" target="_blank" rel="noreferrer"><code>/spark tickmonitor</code></a> 的目的。</p><p>这个命令会先检测服务器的平均滴答速率，然后再：</p><ul><li>检测每个后续的滴答耗时；</li><li>计算最近执行的滴答耗时与平均耗时的差异（百分比）；</li><li>在差异超过设定值时发送在聊天栏并提醒管理员。</li></ul><p>若要启动滴答监控，只需执行命令 <code>/spark tickmonitor</code></p><p>默认情况下，设定值为 100%（100% 表示这次滴答耗时是平均耗时的两倍）。</p><p>你可以指定设定值为耗时而不是百分比，例如命令 <code>/spark tickmonitor --threshold-tick 50</code> 会报告任何耗时超过 50 毫秒的滴答（这个值是服务器开始卡顿的临界时间）。</p><p><img src="'+i+'" alt="img" title="一张图片，显示了滴答监视器的开启和关闭，以及结果显示。"></p><p>这之后，你只需要等待。若你正经历的卡顿能在游戏里感受到，那么尝试在监视器的输出与游戏实际体验相结合，找到问题所在。</p><p>如果输出的内容还不够明显，试试将检测值调低。例如，<code>/spark tickmonitor --threshiold-tick 70</code>。</p><p>为了在这里解释，我在这里应用 WorldEdit“制造”了一次卡顿。😃</p><p><img src="'+t+'" alt="img" title="一张图片，显示了滴答监控器检测到的卡顿。"></p><p>如你所见，WorldEdit 在本次操作中的滴答耗时甚至超过了 1000%！</p><h2 id="第二步-在命令-spark-profiler-中使用参数-only-ticks-over-找到问题" tabindex="-1">第二步：在命令 <code>/spark profiler</code> 中使用参数 <code>--only-ticks-over</code> 找到问题 <a class="header-anchor" href="#第二步-在命令-spark-profiler-中使用参数-only-ticks-over-找到问题" aria-label="Permalink to &quot;第二步：在命令 `/spark profiler` 中使用参数 `--only-ticks-over` 找到问题&quot;">​</a></h2><p>参数 <a href="https://spark.lucko.me/docs/Command-Usage#spark-profiler" target="_blank" rel="noreferrer"><code>--only-ticks-over</code></a> 意味着监视器只会记录超过指定值的滴答。这可以将“正常”的内容过滤掉，留下需要仔细排查的滴答。</p><p>你可以使用第一步提及的命令来设置指定值，我推荐使用 50 到 100 毫秒之间的值——但应该总是比那些明显卡顿的滴答短，否则 spark 就不能为你过滤它们。</p><p>例如，在第一步中用于展示的卡顿操作的滴答耗时已经超过了 300 毫秒，但为了确保它们能被检测到，我会选择低于 150 毫秒的数为检测值。</p><p>然后，执行命令 <code>/spark profiler --only-ticks-over 150</code>。</p><p>这会运行一个新的报告检测，但只会记录那些耗时超过 150 毫秒的滴答。</p><p>在完成之后，打开报告浏览器并检查内容。希望我们能马上就发现那卡顿的部分。</p><p>例如...</p><p><img src="'+s+'" alt="img" title="一张图片，显示了 WorldEdit 为本次造成卡顿的根源。"></p>',28)]))}const h=r(c,[["render",n]]);export{_ as __pageData,h as default};
