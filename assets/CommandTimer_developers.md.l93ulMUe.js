import{_ as s,c as a,o as t,al as l}from"./chunks/framework.LK_RS8Nx.js";const o=JSON.parse('{"title":"开发者相关","description":"","frontmatter":{},"headers":[],"relativePath":"CommandTimer/developers.md","filePath":"CommandTimer/developers.md"}'),n={name:"CommandTimer/developers.md"};function e(h,i,k,p,r,d){return t(),a("div",null,i[0]||(i[0]=[l(`<h1 id="开发者相关" tabindex="-1">开发者相关 <a class="header-anchor" href="#开发者相关" aria-label="Permalink to &quot;开发者相关&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="gradle" tabindex="-1">Gradle <a class="header-anchor" href="#gradle" aria-label="Permalink to &quot;Gradle&quot;">​</a></h3><div class="language-Kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">repositories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   maven</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { url </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://jitpack.io&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-Kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    implementation </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;com.github.titivermeesch:CommandTimer:&lt;version&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="maven" tabindex="-1">Maven <a class="header-anchor" href="#maven" aria-label="Permalink to &quot;Maven&quot;">​</a></h3><div class="language-HTML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">HTML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">repositories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;jitpack.io&lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;https://jitpack.io&lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">repositories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-HTML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">HTML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;com.github.titivermeesch&lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;CommandTimer&lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;version&lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><p>与本插件最合适的交互方式为拓展模块。若某个要用到的功能不能用这个方法实现，那么就需要用到 CommandTimer API。</p><p><strong>API 尚不存在文档，现在若要交互，你可能需要阅读源码</strong></p><h2 id="贡献" tabindex="-1">贡献 <a class="header-anchor" href="#贡献" aria-label="Permalink to &quot;贡献&quot;">​</a></h2><p>如果找到了插件或文档的问题并想改进之，你可以来我们的 Github 提交合并请求！</p>`,13)]))}const g=s(n,[["render",e]]);export{o as __pageData,g as default};
