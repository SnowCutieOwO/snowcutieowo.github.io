import{_ as t,o as e,c as r,a7 as d}from"./chunks/framework.DSL0mkng.js";const l=JSON.parse('{"title":"关于 spark 的统计信息","description":"","frontmatter":{},"headers":[],"relativePath":"spark/spark-misc.about-spark-metrics.md","filePath":"spark/spark-misc.about-spark-metrics.md"}'),o={name:"spark/spark-misc.about-spark-metrics.md"};function s(c,a,n,p,m,i){return e(),r("div",null,a[0]||(a[0]=[d('<h1 id="关于-spark-的统计信息" tabindex="-1">关于 spark 的统计信息 <a class="header-anchor" href="#关于-spark-的统计信息" aria-label="Permalink to &quot;关于 spark 的统计信息&quot;">​</a></h1><p>spark 能提交并计算一些统计数据。</p><p>在所有情况下，测量所用标准的数据都来自别的地方。如果出现错误，说明 spark 所接收的数据很有可能存在错误。</p><table tabindex="0"><thead><tr><th>数据名称</th><th>数据来源</th></tr></thead><tbody><tr><td>TPS</td><td>服务器活动（通过 spark 的 <code>TickHook</code> 接口获取）</td></tr><tr><td>MSPT</td><td>服务器活动（通过 spark 的 <code>TickReporter</code> 接口获取）</td></tr><tr><td>CPU 使用情况</td><td>Java API（<a href="https://docs.oracle.com/en/java/javase/17/docs/api/jdk.management/com/sun/management/OperatingSystemMXBean.html" target="_blank" rel="noreferrer">jdk.management/OperatingSystemMXBean</a>）</td></tr><tr><td>内存使用情况</td><td>Java API（<a href="https://docs.oracle.com/en/java/javase/17/docs/api/jdk.management/com/sun/management/OperatingSystemMXBean.html" target="_blank" rel="noreferrer">jdk.management/OperatingSystemMXBean</a>）&amp; <code>/proc/meminfo</code>（仅 Linux）</td></tr><tr><td>磁盘使用情况</td><td>Java API（<a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/nio/file/FileStore.html" target="_blank" rel="noreferrer">java.base/FileStore</a>）</td></tr><tr><td>GC</td><td>Java API（<a href="https://docs.oracle.com/en/java/javase/17/docs/api/jdk.management/com/sun/management/GarbageCollectorMXBean.html" target="_blank" rel="noreferrer">jdk.management/GarbageCollectorMXBean</a>）</td></tr><tr><td>玩家延迟</td><td>服务器 API（通过 spark 的 <code>PlayerPingProvider</code> 接口获取）</td></tr><tr><td>网络使用情况</td><td><code>/proc/net/dev/</code>（仅 Linux）</td></tr><tr><td>CPU 名称</td><td>Linux 上为 <code>/proc/cpuinfo</code>，Windows 上为 <code>wmic cpu</code></td></tr><tr><td>操作系统名称及版本</td><td>Linux 上为 <code>/proc/os-releases</code>，Windows 上为 <code>wmic os</code></td></tr></tbody></table><h3 id="面板服与-docker-镜像" tabindex="-1">面板服与 Docker 镜像 <a class="header-anchor" href="#面板服与-docker-镜像" aria-label="Permalink to &quot;面板服与 Docker 镜像&quot;">​</a></h3><p>在服务器（以及 spark 的拓展）运行在容器（例如 Pterodactyl 等）中时，我们可以看见某些统计数据（大多数 CPU/内存使用情况）不与实际情况对应。</p><p>spark 对此无能为力。如你所见，spark 只会使用一些标准的 Java 和操作系统的 API 来获取一些统计数据。如果这些内容不准确，那么有可能是你的安装或 Java/Docker/操作系统 的漏洞。</p>',7)]))}const h=t(o,[["render",s]]);export{l as __pageData,h as default};
