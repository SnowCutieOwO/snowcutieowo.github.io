import{_ as l,C as a,c as p,o,b1 as i,G as e}from"./chunks/framework.CC7vnuC4.js";const f=JSON.parse('{"title":"使用 async-profiler 引擎","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/spark"},{"title":"使用 async-profiler 引擎","link":"/spark/spark-misc.using-async-profiler-engine"}]},"headers":[],"relativePath":"spark/spark-misc.using-async-profiler-engine.md","filePath":"spark/spark-misc.using-async-profiler-engine.md"}'),r={name:"spark/spark-misc.using-async-profiler-engine.md"};function c(h,s,d,k,b,g){const t=a("NolebaseGitContributors"),n=a("NolebaseGitChangelog");return o(),p("div",null,[s[0]||(s[0]=i('<h1 id="使用-async-profiler-引擎" tabindex="-1">使用 async-profiler 引擎 <a class="header-anchor" href="#使用-async-profiler-引擎" aria-label="Permalink to &quot;使用 async-profiler 引擎&quot;">​</a></h1><p>spark 有两种分析引擎：</p><ul><li>Java（基于 WarmRoast）</li><li>async-profiler</li></ul><p>async-profiler 引擎相比 Java/WarmRoast 引擎更为精确，且它不会出现安全点抽样偏差的问题。若你的系统支持该引擎，它会自动启用。</p><h2 id="系统需求" tabindex="-1">系统需求 <a class="header-anchor" href="#系统需求" aria-label="Permalink to &quot;系统需求&quot;">​</a></h2><p>async-profiler 引擎仅支持 <strong>x86_64</strong> 架构的 <strong>Linux</strong> 系统。</p><p>但好消息是，大多数专用服务器和 VPS 都是基于这个系统的！<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p><h2 id="面板服" tabindex="-1">面板服 <a class="header-anchor" href="#面板服" aria-label="Permalink to &quot;面板服&quot;">​</a></h2><p>如果你开的是诸如翼龙一类的面板服的话，你可能需要调整一些内容才能让 async-profile 引擎正常工作。</p><p>先试试看吧，如果你遇到了错误，那么请参照下面的步骤。</p><h3 id="安装-libstdc" tabindex="-1">安装 libstdc++ <a class="header-anchor" href="#安装-libstdc" aria-label="Permalink to &quot;安装 libstdc++&quot;">​</a></h3><p>async-profiler 依赖于 libstdc++。如果当前镜像中不存在这个库，你可能需要手动安装它。</p><p>如果出现下列的错误，说明你遇到的很可能就是这个问题：</p><blockquote><p>java.lang.UnsatisfiedLinkError: /tmp/spark-xxxx-libasyncProfiler.so.tmp: Error loading shared library libstdc++.so.6: No such file or directory (needed by /tmp/spark-xxxx-libasyncProfiler.so.tmp)</p></blockquote><p>若要在 Alpine 上安装 libstdc++，你需要输入这个命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libstdc++</span></span></code></pre></div><p>若要在 Debian/Ubuntu 上安装 libstdc++，你需要输入这个命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libstdc++6</span></span></code></pre></div><p>若你正在使用基于 Alpine 的 Java Docker 镜像，你需要将下列内容加入你的 Dockerfile：</p><div class="language-docker vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apk add --no-cache libstdc++</span></span></code></pre></div><p>若你正在使用基于 Debian 的 Java Docker 镜像，你需要将下列内容加入你的 Dockerfile：</p><div class="language-docker vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apt-get install libstdc++6</span></span></code></pre></div><h3 id="允许访问内核-perf-event" tabindex="-1">允许访问内核 perf-event <a class="header-anchor" href="#允许访问内核-perf-event" aria-label="Permalink to &quot;允许访问内核 perf-event&quot;">​</a></h3><p>async-profiler 会在不能使用 perf-event 时自动使用“itimer”模式。大多数 Docker 运行时环境均限制此类访问。</p><p>对大部分用户来讲，这无伤大雅，但如果你想记录本地代码的有关信息，你就需要将下列标志添加至面板服，以此确保 async-profiler 能正常使用。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cap-add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SYS_ADMIN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span></code></pre></div><h3 id="安装-hotspot-调试符" tabindex="-1">安装 Hotspot 调试符 <a class="header-anchor" href="#安装-hotspot-调试符" aria-label="Permalink to &quot;安装 Hotspot 调试符&quot;">​</a></h3><p>分配分析模式需要安装 Hotspot 调试符。在现代的 JVM（Java 11+）中自带。</p><p>如果没有，你需要通过你的操作系统包管理器安装下列包：</p><ul><li><code>openjdk-8-dbg</code> 或</li><li><code>openjdk-11-dbg</code></li></ul><p>例如，在 Ubuntu 中为：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openjdk-11-dbg</span></span></code></pre></div><p>在其他发行版本的系统中安装的相关信息可以在<a href="https://github.com/jvm-profiling-tools/async-profiler#installing-debug-symbols" target="_blank" rel="noreferrer">这里</a>找到。</p>',33)),e(t),e(n),s[1]||(s[1]=i('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>国内的绝大部分 VPS 都是基于 Windows 的，若想要使用本章节所提及的功能，请先联系服务器提供商客服。 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2))])}const y=l(r,[["render",c]]);export{f as __pageData,y as default};
