import{_ as e,o as t,c as r,a7 as n}from"./chunks/framework.DSL0mkng.js";const b=JSON.parse('{"title":"Java 代理警告","description":"","frontmatter":{},"headers":[],"relativePath":"spark/spark-misc.java-agent-warning.md","filePath":"spark/spark-misc.java-agent-warning.md"}'),s={name:"spark/spark-misc.java-agent-warning.md"};function i(o,a,l,p,d,c){return t(),r("div",null,a[0]||(a[0]=[n('<h1 id="java-代理警告" tabindex="-1">Java 代理警告 <a class="header-anchor" href="#java-代理警告" aria-label="Permalink to &quot;Java 代理警告&quot;">​</a></h1><p>自 Java 21 起，你可能会在使用 spark 的时候在控制台/日志中发现这些内容：</p><blockquote><p>WARNING: A Java agent has been loaded dynamically (/tmp/byteBuddyAgentxxxxxxxxxxxxxxxxxxx.jar)<br> WARNING: If a serviceability tool is in use, please run with -XX:+EnableDynamicAgentLoading to hide this warning<br> WARNING: If a serviceability tool is not in use, please run with -Djdk.instrument.traceUsage for more information<br> WARNING: Dynamic loading of agents will be disallowed by default in a future release</p></blockquote><h2 id="为什么-spark-会使用-java-agent" tabindex="-1">为什么 spark 会使用 Java Agent？ <a class="header-anchor" href="#为什么-spark-会使用-java-agent" aria-label="Permalink to &quot;为什么 spark 会使用 Java Agent？&quot;">​</a></h2><p>spark 使用了 Java 仪表 API 来寻找关于载入 JVM Java 类的元数据（该部分请见 <a href="https://github.com/lucko/spark/blob/master/spark-common/src/main/java/me/lucko/spark/common/util/ClassFinder.java" target="_blank" rel="noreferrer"><code>ClassFinder.java</code></a>）。</p><p>为了访问仪表 API，spark 使用了 <a href="https://github.com/raphw/byte-buddy" target="_blank" rel="noreferrer">byte-buddy-agent</a> 库，而它会动态载入一个 Java 代理以获得访问仪表 API 的能力。</p><h2 id="我正在使用-java-21-我应该做什么" tabindex="-1">我正在使用 Java 21，我应该做什么？ <a class="header-anchor" href="#我正在使用-java-21-我应该做什么" aria-label="Permalink to &quot;我正在使用 Java 21，我应该做什么？&quot;">​</a></h2><p>spark 会在仪表 API 不可用或载入失败时使用另一种方法（虽然效率相对低）来查找类。</p><p>也正因如此，我们推荐使用 Java 21 的用户无视报错，或按照下面的操作支持来手动启用动态代理载入。</p><h2 id="我正在使用-java-22-我应该做什么" tabindex="-1">我正在使用 Java 22，我应该做什么？ <a class="header-anchor" href="#我正在使用-java-22-我应该做什么" aria-label="Permalink to &quot;我正在使用 Java 22，我应该做什么？&quot;">​</a></h2><p>你有两个选择：</p><h3 id="_1-重新启用动态代理载入" tabindex="-1">1. 重新启用动态代理载入 <a class="header-anchor" href="#_1-重新启用动态代理载入" aria-label="Permalink to &quot;1. 重新启用动态代理载入&quot;">​</a></h3><p>这会将 JVM 的行为回退至之前的状态，spark 可以因此正常工作。</p><p>若要这么做，你需要将下列内容添加至服务器启动参数中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-XX:+EnableDynamicAgentLoading</span></span></code></pre></div><h4 id="_2-什么都不做" tabindex="-1">2. 什么都不做 <a class="header-anchor" href="#_2-什么都不做" aria-label="Permalink to &quot;2. 什么都不做&quot;">​</a></h4><p>如上文所述，spark 在代理安装失败时仍会换用其他方法继续工作。</p>',17)]))}const u=e(s,[["render",i]]);export{b as __pageData,u as default};