import{_ as s,c as a,o as n,b0 as t}from"./chunks/framework.w6NQj85O.js";const c=JSON.parse('{"title":"与其他插件兼容","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/developers.add-compability-with-a-plugin.md","filePath":"Oraxen/developers.add-compability-with-a-plugin.md"}'),l={name:"Oraxen/developers.add-compability-with-a-plugin.md"};function e(p,i,h,k,r,o){return n(),a("div",null,i[0]||(i[0]=[t(`<h1 id="与其他插件兼容" tabindex="-1">与其他插件兼容 <a class="header-anchor" href="#与其他插件兼容" aria-label="Permalink to &quot;与其他插件兼容&quot;">​</a></h1><p>让 Oraxen 能直接从源代码层面与其他插件兼容</p><h2 id="运作原理" tabindex="-1">运作原理？ <a class="header-anchor" href="#运作原理" aria-label="Permalink to &quot;运作原理？&quot;">​</a></h2><h3 id="第一步-创建一个兼容类" tabindex="-1">第一步：创建一个兼容类 <a class="header-anchor" href="#第一步-创建一个兼容类" aria-label="Permalink to &quot;第一步：创建一个兼容类&quot;">​</a></h3><p>你需要创建一个继承了 <code>CompatibilityProvider&lt;想要添加支持的插件主类&gt;</code> 的类，并向其中加入你想要为支持插件增加的代码。</p><h3 id="第二步-将兼容类添加至-oraxen" tabindex="-1">第二步：将兼容类添加至 Oraxen <a class="header-anchor" href="#第二步-将兼容类添加至-oraxen" aria-label="Permalink to &quot;第二步：将兼容类添加至 Oraxen&quot;">​</a></h3><p>使用 <code>CompatibilitiesManager.addCompatibility(添加支持的插件, 第一步中创建的类)</code> 将类添加至 Oraxen。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">提示</p><p>在本章节中我会以 MythicMobs 为示例。</p></div><h3 id="第一步-创建一个兼容类-1" tabindex="-1">第一步：创建一个兼容类 <a class="header-anchor" href="#第一步-创建一个兼容类-1" aria-label="Permalink to &quot;第一步：创建一个兼容类&quot;">​</a></h3><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> io.lumine.xikage.mythicmobs.MythicMobs;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> io.lumine.xikage.mythicmobs.api.bukkit.events.MythicDropLoadEvent;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> io.th0rgal.oraxen.compatibilities.CompatibilityProvider;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MythicMobsCompatibility</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CompatibilityProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MythicMobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EventHandler</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onMythicDropLoadEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(MythicDropLoadEvent </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="第二步-将兼容类添加至-oraxen-1" tabindex="-1">第二步：将兼容类添加至 Oraxen <a class="header-anchor" href="#第二步-将兼容类添加至-oraxen-1" aria-label="Permalink to &quot;第二步：将兼容类添加至 Oraxen&quot;">​</a></h3><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> io.th0rgal.oraxen.compatibilities.CompatibilitiesManager;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.bukkit.plugin.java.JavaPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OraxenMythicMobsCompatibilityPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JavaPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onEnable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        CompatibilitiesManager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addCompatibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MythicMobs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, MythicMobsCompatibility.class)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,13)]))}const E=s(l,[["render",e]]);export{c as __pageData,E as default};
