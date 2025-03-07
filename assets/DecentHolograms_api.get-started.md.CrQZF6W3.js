import{_ as r,C as k,c as g,o,b1 as y,G as l,w as n,j as s,a as i}from"./chunks/framework.CC7vnuC4.js";const v=JSON.parse('{"title":"⚙️ 开始","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/DecentHolograms"},{"title":"⚙️ 开始","link":"/DecentHolograms/api.get-started"}]},"headers":[],"relativePath":"DecentHolograms/api.get-started.md","filePath":"DecentHolograms/api.get-started.md"}'),c={name:"DecentHolograms/api.get-started.md"};function u(t,a,m,F,b,A){const e=k("el-tab-pane"),p=k("el-tabs"),E=k("NolebaseGitContributors"),d=k("NolebaseGitChangelog");return o(),g("div",null,[a[7]||(a[7]=y(`<h1 id="⚙️-开始" tabindex="-1">⚙️ 开始 <a class="header-anchor" href="#⚙️-开始" aria-label="Permalink to &quot;⚙️ 开始&quot;">​</a></h1><p>着手使用 DecentHolograms API</p><p>在本章节中，你会学习如何将 DecentHolograms 作为前置打包进你自己的插件，并使用它的 API。请注意，这之后为了让你的插件正常工作，它就会以 DecentHolograms 为硬依赖。</p><p>最新版本的插件可在 Github 仓库中的发行版页面找到。</p><h2 id="添加-api" tabindex="-1">添加 API <a class="header-anchor" href="#添加-api" aria-label="Permalink to &quot;添加 API&quot;">​</a></h2><p>将下列内容添加至你的构建文件中，来将 DecentHolograms API 加入项目。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-e86x5" id="tab-Sse6Plg" checked><label data-title="build.gradle" for="tab-Sse6Plg">build.gradle</label><input type="radio" name="group-e86x5" id="tab-ciYTYT7"><label data-title="pom.xml" for="tab-ciYTYT7">pom.xml</label></div><div class="blocks"><div class="language-Kotlin vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">Kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">repositories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    maven</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;jitpack&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://jitpack.io/&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">depencencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    compileOnly </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;com.github.decentsoftware-eu:decentholograms:2.8.6&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-XML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">XML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">repositories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;jitpack&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;https://jitpack.io/&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">repositories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;com.github.decentsoftware-eu&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;decentholograms&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2.8.6&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;provided&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div><div class="tip custom-block"><p class="custom-block-title">收到了关于 NBT-API 不能正常载入的报错？</p><p>试着将 CodeMC 的仓库加入你的构建文件：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-MnFXS" id="tab-rRaP-8J" checked><label data-title="build.gradle" for="tab-rRaP-8J">build.gradle</label><input type="radio" name="group-MnFXS" id="tab-Yc6f6aE"><label data-title="pom.xml" for="tab-Yc6f6aE">pom.xml</label></div><div class="blocks"><div class="language-Kotlin vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">Kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">repositories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Other repositories, including jitpack</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  maven</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;codemc&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://repo.codemc.io/repository/maven-public/&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-XML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">XML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">repositories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 其他仓库, 包括 jitpack --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;codemc&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;https://repo.codemc.io/repository/maven-public/&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">repositories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div></div><h2 id="作为-软-依赖导入" tabindex="-1">作为（软）依赖导入 <a class="header-anchor" href="#作为-软-依赖导入" aria-label="Permalink to &quot;作为（软）依赖导入&quot;">​</a></h2><p>DecentHolograms 需要安装在服务器中才可使用它的 API。 为确保 DecentHolograms 先于你的插件载入，将它在你的 <code>plugin.yml</code> 或 <code>paper-plugin.yml</code> 文件中添加为软依赖，如下所示：</p>`,10)),l(p,{modelValue:t.first,"onUpdate:modelValue":a[2]||(a[2]=h=>t.first=h),type:"border-card"},{default:n(()=>[l(e,{label:"plugin.yml",name:"first"},{default:n(()=>[l(p,{modelValue:t.first,"onUpdate:modelValue":a[0]||(a[0]=h=>t.first=h),type:"border-card"},{default:n(()=>[l(e,{label:"软依赖",name:"first"},{default:n(()=>a[3]||(a[3]=[s("div",{class:"language-YAML vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"YAML"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'MyPlugin'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"author"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Me'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"version"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1.0.0'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"main"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'com.example.plugin.MyPlugin'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"softdepend"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"DecentHolograms")])])])],-1)])),_:1}),l(e,{label:"硬依赖",name:"second"},{default:n(()=>a[4]||(a[4]=[s("div",{class:"language-YAML vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"YAML"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'MyPlugin'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"author"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Me'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"version"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1.0.0'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"main"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'com.example.plugin.MyPlugin'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"depend"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"DecentHolograms")])])])],-1)])),_:1})]),_:1},8,["modelValue"])]),_:1}),l(e,{label:"paper-plugin.yml",type:"border-card",name:"second"},{default:n(()=>[l(p,{modelValue:t.first,"onUpdate:modelValue":a[1]||(a[1]=h=>t.first=h),type:"border-card"},{default:n(()=>[l(e,{label:"软依赖",name:"first"},{default:n(()=>a[5]||(a[5]=[s("div",{class:"language-YAML vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"YAML"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'MyPlugin'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"author"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Me'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"version"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1.0.0'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"main"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'com.example.plugin.MyPlugin'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"dependencies"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  server"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    DecentHolograms"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"      load"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"BEFORE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"      required"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 不存在时默认使用的值")])])])],-1)])),_:1}),l(e,{label:"硬依赖",name:"second"},{default:n(()=>a[6]||(a[6]=[s("div",{class:"language-YAML vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"YAML"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'MyPlugin'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"author"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Me'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"version"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1.0.0'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"main"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'com.example.plugin.MyPlugin'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"dependencies"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  server"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    DecentHolograms"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"      load"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"BEFORE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"      required"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")])])])],-1)])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),l(E),l(d)])}const C=r(c,[["render",u]]);export{v as __pageData,C as default};
