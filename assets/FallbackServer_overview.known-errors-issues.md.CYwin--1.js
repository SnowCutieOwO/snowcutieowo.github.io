import{_ as i,c as s,o as e,al as t}from"./chunks/framework.LK_RS8Nx.js";const F=JSON.parse('{"title":"💥 已知问题","description":"","frontmatter":{},"headers":[],"relativePath":"FallbackServer/overview.known-errors-issues.md","filePath":"FallbackServer/overview.known-errors-issues.md"}'),l={name:"FallbackServer/overview.known-errors-issues.md"};function n(p,a,r,o,h,c){return e(),s("div",null,a[0]||(a[0]=[t(`<h1 id="💥-已知问题" tabindex="-1">💥 已知问题 <a class="header-anchor" href="#💥-已知问题" aria-label="Permalink to &quot;💥 已知问题&quot;">​</a></h1><p>ViaVersion（包括其附属 ViaRewind、ViaBackwards）安装在群组服上时有可能导致服务器出现问题，也有可能会使得本插件不会正常工作。</p><p>一些奇怪的分支核心如 Aegis，也会破坏包括本插件在内的一系列插件的兼容性。</p><p>防火墙规则设置不正确会阻止本插件的 ping。</p><p>Geyser（包括 FloodGate）可能存在兼容性问题。</p><p>诸如 Protocolize 等的发包处理类插件可能会导致群组服核心兼容性变差。</p><p>LibreLogin 会将玩家从群组服中踢出，希望你能联系到开发者。</p><div class="language-Log vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Log</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">java.lang.IllegalArgumentException</span></span></code></pre></div><p>若你见到了诸如此类的报错，请在开服参数中加入 <code>-Duser.language=en</code> （感谢 @LoneDev<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> 的帮助）</p><div class="language-Log vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Log</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Could not load plugin from file plugins/FallBackServer-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">X.X.X-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Beta).jar</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">java.util.zip.ZipException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: zip file is empty</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	at java.util.zip.ZipFile$Source.zerror(ZipFile.java:1598) ~[?:?]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	at java.util.zip.ZipFile$Source.findEND(ZipFile.java:1382) ~[?:?]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	at java.util.zip.ZipFile$Source.initCEN(ZipFile.java:1477) ~[?:?]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	at java.util.zip.ZipFile$Source.&lt;init&gt;(ZipFile.java:1315) ~[?:?]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	at java.util.zip.ZipFile$Source.get(ZipFile.java:1277) ~[?:?]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	at java.util.zip.ZipFile$CleanableResource.&lt;init&gt;(ZipFile.java:709) ~[?:?]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	at java.util.zip.ZipFile.&lt;init&gt;(ZipFile.java:243) ~[?:?]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	at java.util.zip.ZipFile.&lt;init&gt;(ZipFile.java:172) ~[?:?]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	at java.util.jar.JarFile.&lt;init&gt;(JarFile.java:347) ~[?:?]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	at java.util.jar.JarFile.&lt;init&gt;(JarFile.java:318) ~[?:?]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	at java.util.jar.JarFile.&lt;init&gt;(JarFile.java:284) ~[?:?]</span></span></code></pre></div><p>这类错误一般是插件损坏导致的，大多数时候都是因为下载的插件出了问题，这时你只需要返回 SpigotMC 并再次下载本插件并重新按步骤安装即可。</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>ItemsAdder 的开发者。 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,13)]))}const d=i(l,[["render",n]]);export{F as __pageData,d as default};
