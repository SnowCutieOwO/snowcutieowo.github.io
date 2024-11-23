import{_ as i}from"./chunks/viewer-infopoint.I1dtnFed.js";import{_ as a,c as e,a7 as n,o as t}from"./chunks/framework.Bz4u1pnU.js";const g=JSON.parse('{"title":"信息点","description":"","frontmatter":{},"headers":[],"relativePath":"spark/spark-misc.info-points.md","filePath":"spark/spark-misc.info-points.md"}'),p={name:"spark/spark-misc.info-points.md"};function l(h,s,k,r,d,o){return t(),e("div",null,s[0]||(s[0]=[n('<h1 id="信息点" tabindex="-1">信息点 <a class="header-anchor" href="#信息点" aria-label="Permalink to &quot;信息点&quot;">​</a></h1><p>spark 中的“信息点”是一段额外的信息，它在 spark 浏览器中显示的内容一般称作调用框架（在用户将鼠标悬停在 ⓘ 图标上显示的内容）。</p><p><img src="'+i+`" alt="img"></p><p>这些描述是开源的（可以通过社区简单地编辑/改进），如果你注意到某些东西看起来不太对，或者某个线程/方法调用值得加上一段描述，请务必来为我们贡献！😎</p><h2 id="贡献" tabindex="-1">贡献 <a class="header-anchor" href="#贡献" aria-label="Permalink to &quot;贡献&quot;">​</a></h2><p>描述在 <a href="https://github.com/lucko/spark-infopoints" target="_blank" rel="noreferrer"><strong>lucko/spark-infopoints</strong></a> Github 仓库的 YML 文件中存储。</p><p>它们依据所属对象被分为多个文件，命名仅是为了与仓库保持一致，本身并无额外意义。</p><p>你既可以克隆仓库在本地进行修改，也可以通过 Github 的网页文本编辑器修改。</p><h3 id="方法描述格式" tabindex="-1">方法描述格式 <a class="header-anchor" href="#方法描述格式" aria-label="Permalink to &quot;方法描述格式&quot;">​</a></h3><p>一段方法描述看起来会像这样：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">net.minecraft.network.protocol.PlayerConnectionUtils.run()</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Manages player (client) connections to the server, in particular the processing of incoming</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    packets (actions performed by players).</span></span></code></pre></div><ul><li><code>method</code> 键必须包含在 spark 浏览器内（在任何映射应用前）显示的方法名称。</li><li><code>description</code> 键中的内容会被渲染在浏览器的描述，格式为 Markdown。</li></ul><h3 id="线程描述格式" tabindex="-1">线程描述格式 <a class="header-anchor" href="#线程描述格式" aria-label="Permalink to &quot;线程描述格式&quot;">​</a></h3><p>对某个方法的描述看起来会像是这样：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Server thread</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    The main server thread that the game loop is executed on. See the</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    [Tick Loop guide](https://spark.lucko.me/docs/guides/The-tick-loop) for more info.</span></span></code></pre></div><ul><li><code>thread</code> 键应该包含显示在 spark 浏览器中的线程名称。</li><li><code>description</code> 键中的内容会被渲染在浏览器的描述，格式为 Markdown。</li></ul><h3 id="描述相同的多个方法-线程" tabindex="-1">描述相同的多个方法/线程 <a class="header-anchor" href="#描述相同的多个方法-线程" aria-label="Permalink to &quot;描述相同的多个方法/线程&quot;">​</a></h3><p>如果多个方法或线程必须拥有同一条描述，它们可以通过 YAML 的列表语法加在一起：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">methods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">net.minecraft.server.MinecraftServer.waitUntilNextTick()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">net.minecraft.server.IAsyncTaskHandler.sleepForTick()</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    todo</span></span></code></pre></div><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">threads</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Server thread</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Main thread</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    todo</span></span></code></pre></div><h3 id="正则匹配" tabindex="-1">正则匹配 <a class="header-anchor" href="#正则匹配" aria-label="Permalink to &quot;正则匹配&quot;">​</a></h3><p><code>method</code>/<code>thread</code> 键所需的值通常为完全匹配状态。但是，也可以在这里通过 <code>/</code> 符号插入正则表达式。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/^Craft Scheduler Thread.*$/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    todo</span></span></code></pre></div>`,23)]))}const y=a(p,[["render",l]]);export{g as __pageData,y as default};