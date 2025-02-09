import{_ as a,c as o,o as s,al as i}from"./chunks/framework.ySGSHPST.js";const g=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"PlaceholderAPI/common-issues.md","filePath":"PlaceholderAPI/common-issues.md"}'),l={name:"PlaceholderAPI/common-issues.md"};function n(t,e,d,r,c,h){return s(),o("div",null,e[0]||(e[0]=[i('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><p>本页列出了你使用 PlaceholderAPI 时可能遇到的问题及其解决方法。</p><p>如果你还有更多问题，欢迎进入 <a href="https://discord.gg/helpchat" target="_blank" rel="noreferrer">Discord 频道</a>询问。</p><h2 id="java-lang-noclassdeffounderror-com-google-gson-gson¶" tabindex="-1"><code>java.lang.NoClassDefFoundError: com/google/gson/Gson¶</code> <a class="header-anchor" href="#java-lang-noclassdeffounderror-com-google-gson-gson¶" aria-label="Permalink to &quot;`java.lang.NoClassDefFoundError: com/google/gson/Gson¶`&quot;">​</a></h2><div class="language-log vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">log</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">org.bukkit.plugin.InvalidPluginException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">java.lang.NoClassDefFoundError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: com/google/gson/Gson</span></span></code></pre></div><p>如果你碰到了诸如上述的报错，这表示你安装了 PlaceholderAPI 的服务器没有包含 Gson，这通常是 1.8 或更低版本的服务器会遇到的问题。若要修复这个，请升级到至少 1.8.8，这个版本包含了所需的依赖。</p><h2 id="变量拓展不生效" tabindex="-1">变量拓展不生效 <a class="header-anchor" href="#变量拓展不生效" aria-label="Permalink to &quot;变量拓展不生效&quot;">​</a></h2><p>如果一或多个变量不生效，请确保你检查了如下内容：</p><ul><li>下载变量拓展后输入了 <code>/papi ecloud</code> 命令。</li><li>所有需要的插件都已安装并启用。</li><li>变量拓展有效（见下）。</li></ul><h2 id="载入变量拓展类-拓展名称-失败-failed-to-load-expansion-class-expansion" tabindex="-1"><code>载入变量拓展类 &lt;拓展名称&gt; 失败...（Failed to load expansion class &lt;expansion&gt; ...）</code> <a class="header-anchor" href="#载入变量拓展类-拓展名称-失败-failed-to-load-expansion-class-expansion" aria-label="Permalink to &quot;`载入变量拓展类 &lt;拓展名称&gt; 失败...（Failed to load expansion class &lt;expansion&gt; ...）`&quot;">​</a></h2><h3 id="其中的一个属性为空-这不被允许-one-of-its-properties-is-null-which-is-not-allowed" tabindex="-1"><code>- 其中的一个属性为空，这不被允许（- One of its properties is null which is not allowed）</code> <a class="header-anchor" href="#其中的一个属性为空-这不被允许-one-of-its-properties-is-null-which-is-not-allowed" aria-label="Permalink to &quot;`- 其中的一个属性为空，这不被允许（- One of its properties is null which is not allowed）`&quot;">​</a></h3><p>这个报错消息表示拓展内的 <code>getAuthor()</code>、<code>getIdentifier()</code> 或 <code>getVersion()</code> 返回了 <code>null</code>，而这是不被允许的。<br> 在这种情况下，联系变量的开发者并提及有关问题，并等待他们对其进行修复即可。</p><h3 id="是否缺失依赖-is-a-dependency-missing" tabindex="-1"><code>（是否缺失依赖？）（(Is a dependency missing?)）</code> <a class="header-anchor" href="#是否缺失依赖-is-a-dependency-missing" aria-label="Permalink to &quot;`（是否缺失依赖？）（(Is a dependency missing?)）`&quot;">​</a></h3><p>这个错误会在变量拓展无法载入时显示，通常是因为依赖缺失（所需插件）或创建实例失败。</p><p>你能做的只有提供完整错误，这样我们才可以检查错误是否来源于 PlaceholderAPI（大多数情况下不是）或变量拓展。</p>',15)]))}const u=a(l,[["render",n]]);export{g as __pageData,u as default};
