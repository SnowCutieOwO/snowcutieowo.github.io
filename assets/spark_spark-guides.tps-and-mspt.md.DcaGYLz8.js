import{_ as p,c as a,o as e,al as r}from"./chunks/framework.LK_RS8Nx.js";const s="/assets/ticks-lagging-breakdown.DFetratP.png",i="/assets/tps-and-mspt.DkQ-Bilu.png",g=JSON.parse('{"title":"TPS 与 MSPT","description":"","frontmatter":{},"headers":[],"relativePath":"spark/spark-guides.tps-and-mspt.md","filePath":"spark/spark-guides.tps-and-mspt.md"}'),o={name:"spark/spark-guides.tps-and-mspt.md"};function n(c,t,m,d,k,l){return e(),a("div",null,t[0]||(t[0]=[r('<h1 id="tps-与-mspt" tabindex="-1">TPS 与 MSPT <a class="header-anchor" href="#tps-与-mspt" aria-label="Permalink to &quot;TPS 与 MSPT&quot;">​</a></h1><p>命令 <a href="https://spark.lucko.me/docs/Command-Usage#spark-tps" target="_blank" rel="noreferrer"><code>/spark tps</code></a> 显示服务器的每秒刻数（Ticks per Second，缩写为TPS）和每刻毫秒数（Milliseconds per Tick，缩写为MSPT），但这些值到底是什么意思？</p><p>这两个数据是检测游戏运行状况的指标。它们与刻循环有关：多少 tick 正在被执行，而它们执行又平均耗时多少。</p><h2 id="tps" tabindex="-1">TPS <a class="header-anchor" href="#tps" aria-label="Permalink to &quot;TPS&quot;">​</a></h2><p>每秒刻数（Ticks per Second，缩写为TPS）显示了游戏每秒能<em>平均</em>处理多少个 tick。</p><p>不卡的情况下，TPS 一般为 <strong>20</strong>。</p><p>若要达到这个数字，每个 tick 处理的耗时不能超过 50 毫秒。</p><p><img src="'+s+'" alt="img" title="一个服务器刻循环的示意图。"></p><p>这个例子中，一些 tick 计算的耗时超过了 50 毫秒，这导致一秒内只有 16 个 tick 参与计算。如果这种情况一直存在，spark 就会认为服务器的 <strong>TPS</strong> 是 <strong>16</strong>。</p><h2 id="mspt-每刻毫秒数" tabindex="-1">MSPT（每刻毫秒数） <a class="header-anchor" href="#mspt-每刻毫秒数" aria-label="Permalink to &quot;MSPT（每刻毫秒数）&quot;">​</a></h2><p>每刻毫秒数（Milliseconds per Tick，缩写为MSPT）显示了游戏每个 tick 处理的<em>平均</em>耗时。</p><p>不卡的情况下，MSPT 一般<strong>小于 50</strong> 毫秒/刻。</p><p><img src="'+s+'" alt="img" title="一个服务器刻循环的示意图。"></p><p>使用与上文相同的例子，你可以看到每个 tick 的耗时略有差异。</p><p>耗时最短的 tick 只花费了 20 毫秒，那么 spark 会将这个数字认为“最小 MSPT”。耗时最长的 tick 花费了 100 毫秒，那么 spark 会将这个数字认为“最大 MSPT”。</p><p>spark 也会使用这个数字计算其他内容：中值和 95% 分位数。</p><p><strong>在命令输出中的样子...</strong></p><p>这就是 <code>/spark tps</code> 命令中显示的一堆数字的真正含义。😎</p><p><img src="'+i+'" alt="img"></p><p>spark 会自动将这些数值按服务器的健康情况标为<em>绿</em>、<em>黄</em>或<em>红</em>色。</p>',20)]))}const P=p(o,[["render",n]]);export{g as __pageData,P as default};
