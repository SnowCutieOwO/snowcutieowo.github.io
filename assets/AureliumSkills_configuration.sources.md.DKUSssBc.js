import{_ as a,c as i,o as e,al as n}from"./chunks/framework.ySGSHPST.js";const k=JSON.parse('{"title":"经验来源","description":"","frontmatter":{},"headers":[],"relativePath":"AureliumSkills/configuration.sources.md","filePath":"AureliumSkills/configuration.sources.md"}'),t={name:"AureliumSkills/configuration.sources.md"};function l(o,s,r,p,c,h){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="经验来源" tabindex="-1">经验来源 <a class="header-anchor" href="#经验来源" aria-label="Permalink to &quot;经验来源&quot;">​</a></h1><p>指导配置经验来源的教程。</p><p>这是一个指导你使用和配置 <code>sources_config.yml</code> 文件的教程。</p><h2 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h2><p>经验来源配置文件可以配置不同技能进行交互时获得的经验数量，例如挖掘方块、特定行为或击杀实体等。<code>sources_config.yml</code> 按技能分成了许多文件。</p><p>每个经验来源的键名不应被修改。该值是对应经验来源所可以提供的默认数值（在没有任何翻倍影响的情况下）。在修改该值后，请确保输入命令 <code>/skills reload</code> 来使改动生效。</p><h2 id="自定义方块" tabindex="-1">自定义方块 <a class="header-anchor" href="#自定义方块" aria-label="Permalink to &quot;自定义方块&quot;">​</a></h2><p>农耕、锻造、挖矿与采集技能支持从自定义方块（默认没有被定义经验数值的方块）获得经验。</p><p>若要添加自定义方块，请在对应技能的设置中添加一个 <code>custom:</code> 模块。在这个自定义模块中，键名为方块名称，值为所增加的经验数值。例如：<code>blue_concrete: 10.0</code> 表示对应技能在挖掘蓝色混凝土时会获得 10.0 点经验。</p><p>你所添加的自定义方块默认启用检查重复放置的功能，这意味着玩家不能通过重复放置方块来刷取技能经验。<br> 方块默认使用 1.13+ 扁平化后的 ID，在 1.12 的服务器上使用这些 ID 也可以被识别。</p><p>这里是一个挖掘技能通过自定义方块获取经验的完整示例：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  mining</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    custom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      sandstone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.0</span></span></code></pre></div>`,12)]))}const u=a(t,[["render",l]]);export{k as __pageData,u as default};
