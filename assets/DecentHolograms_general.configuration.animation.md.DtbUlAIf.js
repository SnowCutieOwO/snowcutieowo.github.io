import{_ as e,C as a,c as t,o as p,b1 as h,G as i}from"./chunks/framework.CC7vnuC4.js";const D=JSON.parse('{"title":"动画","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/DecentHolograms"},{"title":"动画","link":"/DecentHolograms/general.configuration.animation"}]},"headers":[],"relativePath":"DecentHolograms/general.configuration.animation.md","filePath":"DecentHolograms/general.configuration.animation.md"}'),k={name:"DecentHolograms/general.configuration.animation.md"};function o(r,s,c,d,g,A){const n=a("NolebaseGitContributors"),l=a("NolebaseGitChangelog");return p(),t("div",null,[s[0]||(s[0]=h(`<h1 id="动画" tabindex="-1">动画 <a class="header-anchor" href="#动画" aria-label="Permalink to &quot;动画&quot;">​</a></h1><p>自定义动画的配置</p><h2 id="格式" tabindex="-1">格式 <a class="header-anchor" href="#格式" aria-label="Permalink to &quot;格式&quot;">​</a></h2><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;#ANIM:&lt;名称&gt;&gt;任意文本&lt;/#ANIM&gt;</span></span></code></pre></div></blockquote><div class="info custom-block"><p class="custom-block-title">示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;#ANIM:example&gt;文本&lt;/#ANIM&gt;</span></span></code></pre></div></div><h2 id="示例动画文件" tabindex="-1">示例动画文件 <a class="header-anchor" href="#示例动画文件" aria-label="Permalink to &quot;示例动画文件&quot;">​</a></h2><h3 id="animation-example-yml" tabindex="-1">animation_example.yml <a class="header-anchor" href="#animation-example-yml" aria-label="Permalink to &quot;animation_example.yml&quot;">​</a></h3><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 单位为刻的动画速度.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 代表每帧动画之间的延迟.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果设置为 2, 则每帧之间会等待 2 刻.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 单位为刻的动画间隔.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 表示每次动画播放之间的延迟.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果设置为 20, 则每次动画播放时都会等待 20 刻.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pause</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 动画帧</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 动画逐帧显示的文本内容.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以使用 &#39;{text}&#39; 变量来显示通过标签传入的文本参数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如下文中的 &quot;文本&quot; 可以通过 {text} 显示</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &lt;#ANIM:example&gt;文本&lt;/ANIM&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;示例 1 {text}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;示例 2&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;示例 3&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;示例 4&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;示例 5&#39;</span></span></code></pre></div>`,8)),i(n),i(l)])}const y=e(k,[["render",o]]);export{D as __pageData,y as default};
