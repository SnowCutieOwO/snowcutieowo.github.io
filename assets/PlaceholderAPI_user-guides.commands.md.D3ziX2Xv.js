import{_ as e,c as o,o as s,b0 as p}from"./chunks/framework.w6NQj85O.js";const h=JSON.parse('{"title":"命令","description":"","frontmatter":{},"headers":[],"relativePath":"PlaceholderAPI/user-guides.commands.md","filePath":"PlaceholderAPI/user-guides.commands.md"}'),l={name:"PlaceholderAPI/user-guides.commands.md"};function t(i,a,c,d,n,r){return s(),o("div",null,a[0]||(a[0]=[p('<h1 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h1><p>本页列出了所有命令，及其详细的功能描述。</p><h2 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-label="Permalink to &quot;概览&quot;">​</a></h2><nav class="table-of-contents"><ul><li><a href="#概览">概览</a><ul><li><a href="#判断命令">判断命令</a></li><li><a href="#ecloud-命令">eCloud 命令</a></li><li><a href="#拓展命令">拓展命令</a></li><li><a href="#其他命令">其他命令</a></li></ul></li></ul></nav><h3 id="判断命令" tabindex="-1">判断命令 <a class="header-anchor" href="#判断命令" aria-label="Permalink to &quot;判断命令&quot;">​</a></h3><p>这些命令用于将变量在聊天栏内替换为对应值。适用于调试。</p><h4 id="papi-bcparse" tabindex="-1"><code>/papi bcparse</code> <a class="header-anchor" href="#papi-bcparse" aria-label="Permalink to &quot;`/papi bcparse`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>解析字符串内的变量并显示在所有玩家的聊天栏。</p><p><strong>参数：</strong></p><ul><li><code>&lt;player|me|--null&gt;</code> - 判断变量时使用的玩家身份（填入 <code>me</code> 表示你自己，<code>--null</code> 则表示强制指定为空（适用于模仿控制台调试））。</li><li><code>&lt;带变量的文本&gt;</code> - 用于判断的文本。</li></ul><p><strong>示例：</strong></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi bcparse funnycube My name is %player_name%!</span></span></code></pre></div></div><h4 id="papi-cmdparse" tabindex="-1"><code>/papi cmdparse</code> <a class="header-anchor" href="#papi-cmdparse" aria-label="Permalink to &quot;`/papi cmdparse`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>执行命令并解析其中的变量。</p><p><strong>参数：</strong></p><ul><li><code>&lt;player|me|--null&gt;</code> - 判断变量时使用的玩家身份（填入 <code>me</code> 表示你自己，<code>--null</code> 则表示强制指定为空（适用于模仿控制台调试））。</li><li><code>&lt;带变量的命令&gt;</code> - 用于执行的命令。</li></ul><p><strong>示例：</strong></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi cmdparse funnycube say My name is %player_name%!</span></span></code></pre></div></div><h4 id="papi-parse" tabindex="-1"><code>/papi parse</code> <a class="header-anchor" href="#papi-parse" aria-label="Permalink to &quot;`/papi parse`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>解析指定文本中的变量并显示结果。</p><p><strong>参数：</strong></p><ul><li><code>&lt;player|me|--null&gt;</code> - 判断变量时使用的玩家身份（填入 <code>me</code> 表示你自己，<code>--null</code> 则表示强制指定为空（适用于模仿控制台调试））。</li><li><code>&lt;带变量的文本&gt;</code> - 用于判断的文本。</li></ul><p><strong>示例：</strong></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi parse funnycube My group is %vault_group%</span></span></code></pre></div></div><h4 id="papi-parserel" tabindex="-1"><code>/papi parserel</code> <a class="header-anchor" href="#papi-parserel" aria-label="Permalink to &quot;`/papi parserel`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>以指定玩家对另一个玩家的视角解析一个相对变量。</p><p><strong>参数：</strong></p><ul><li><code>&lt;玩家 1&gt;</code> - 变量解析中代指“自己”的玩家名称。</li><li><code>&lt;玩家 2&gt;</code> - 变量解析中代指其他玩家的名称。</li><li><code>&lt;带变量的文本&gt;</code> - 待解析的变量。</li></ul><p><strong>示例：</strong></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi parserel funnycube extended_clip %placeholder%</span></span></code></pre></div></div><h3 id="ecloud-命令" tabindex="-1">eCloud 命令 <a class="header-anchor" href="#ecloud-命令" aria-label="Permalink to &quot;eCloud 命令&quot;">​</a></h3><p>这些命令都以 <code>/papi ecloud</code> 开头，用于使用<a href="./dev-guides.ecloud">拓展云</a>相关的功能。</p><h4 id="papi-ecloud-clear" tabindex="-1"><code>/papi ecloud clear</code> <a class="header-anchor" href="#papi-ecloud-clear" aria-label="Permalink to &quot;`/papi ecloud clear`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>清除 eCloud 的缓存。</p></div><h4 id="papi-ecloud-disable" tabindex="-1"><code>/papi ecloud disable</code> <a class="header-anchor" href="#papi-ecloud-disable" aria-label="Permalink to &quot;`/papi ecloud disable`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>关闭与 eCloud 的连接。</p></div><h4 id="papi-ecloud-download" tabindex="-1"><code>/papi ecloud download</code> <a class="header-anchor" href="#papi-ecloud-download" aria-label="Permalink to &quot;`/papi ecloud download`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>从 eCloud 下载指定的变量拓展。</p><p><strong>参数：</strong></p><ul><li><code>&lt;拓展名称&gt;</code> - 所要下载的变量拓展名称。</li><li><code>[版本号]</code> - 变量拓展的版本号（可选）。</li></ul><p><strong>示例：</strong></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi ecloud download Vault</span></span>\n<span class="line"><span>/papi ecloud download Vault 1.5.2</span></span></code></pre></div></div><h4 id="papi-ecloud-enable" tabindex="-1"><code>/papi ecloud enable</code> <a class="header-anchor" href="#papi-ecloud-enable" aria-label="Permalink to &quot;`/papi ecloud enable`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>启用与 eCloud 的连接。</p></div><h4 id="papi-ecloud-info" tabindex="-1"><code>/papi ecloud info</code> <a class="header-anchor" href="#papi-ecloud-info" aria-label="Permalink to &quot;`/papi ecloud info`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>列出指定变量拓展的有关信息。</p><p><strong>参数：</strong></p><ul><li><code>&lt;拓展名称&gt;</code> - 查询的变量拓展名称。</li><li><code>[版本号]</code> - 查询的变量拓展版本。</li></ul><p><strong>示例：</strong></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi ecloud info Vault</span></span></code></pre></div></div><h4 id="papi-ecloud-list" tabindex="-1"><code>/papi ecloud list</code> <a class="header-anchor" href="#papi-ecloud-list" aria-label="Permalink to &quot;`/papi ecloud list`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>列出所有 eCloud 上可用的变量拓展，查询指定作者发布的变量拓展，或查看服务器上<a href="#papi-ecloud-download">安装</a>的变量拓展。<br> 已安装的变量会在拓展列表中显示为绿色，有更新可用的会显示为亮黄色。</p><p><strong>参数：</strong></p><ul><li><code>&lt;all（全部）|作者名称|installed（已安装）&gt;</code> - 列出所有拓展、指定作者发布的拓展或服务器上安装的拓展。</li></ul><p><strong>示例：</strong></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi ecloud list all</span></span>\n<span class="line"><span>/papi ecloud list clip</span></span>\n<span class="line"><span>/papi ecloud list installed</span></span></code></pre></div></div><h4 id="papi-ecloud-placeholders" tabindex="-1"><code>/papi ecloud placeholders</code> <a class="header-anchor" href="#papi-ecloud-placeholders" aria-label="Permalink to &quot;`/papi ecloud placeholders`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>列出拓展添加的所有变量。</p><p><strong>参数：</strong></p><ul><li><code>&lt;变量拓展&gt;</code> - 列出变量的拓展。</li></ul><p><strong>示例：</strong></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi ecloud placeholders Vault</span></span></code></pre></div></div><h4 id="papi-ecloud-refresh" tabindex="-1"><code>/papi ecloud refresh</code> <a class="header-anchor" href="#papi-ecloud-refresh" aria-label="Permalink to &quot;`/papi ecloud refresh`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>刷新来自 eCloud 的缓存数据。</p></div><h4 id="papi-ecloud-status" tabindex="-1"><code>/papi ecloud status</code> <a class="header-anchor" href="#papi-ecloud-status" aria-label="Permalink to &quot;`/papi ecloud status`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>显示 eCloud 当前的状态。</p></div><h3 id="拓展命令" tabindex="-1">拓展命令 <a class="header-anchor" href="#拓展命令" aria-label="Permalink to &quot;拓展命令&quot;">​</a></h3><p>这些命令可以用于管理你已安装的变量拓展。</p><h4 id="papi-info" tabindex="-1"><code>/papi info</code> <a class="header-anchor" href="#papi-info" aria-label="Permalink to &quot;`/papi info`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>列出指定变量拓展的信息。</p><p><strong>参数：</strong></p><ul><li><code>&lt;变量拓展&gt;</code> - 查询的拓展名称（对应拓展需要注册且启用）。</li></ul><p><strong>示例：</strong></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi info Vault</span></span></code></pre></div></div><h4 id="papi-list" tabindex="-1"><code>/papi list</code> <a class="header-anchor" href="#papi-list" aria-label="Permalink to &quot;`/papi list`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>列出所有活跃/注册的变量。<br> 与 <a href="#papi-ecloud-list">/papi ecloud list installed</a> 不同的是，这个命令会列出插件注册的变量拓展（非独立的 .jar 文件），且不会显示有更新可用的变量拓展。</p></div><h4 id="papi-register" tabindex="-1"><code>/papi register</code> <a class="header-anchor" href="#papi-register" aria-label="Permalink to &quot;`/papi register`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>从指定文件中读取并注册变量。<br> 在手动下载变量拓展且不想重启服务器时很有用。<br> 文件需存放于 <code>/plugins/PlacholderAPI/expansions</code> 文件夹中。</p><p><strong>参数：</strong></p><ul><li><code>&lt;文件名称&gt;</code> - 注册的文件名称（包括其后缀名）。</li></ul><p><strong>示例：</strong></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi register MyExpansion.jar</span></span></code></pre></div></div><h4 id="papi-unregister" tabindex="-1"><code>/papi unregister</code> <a class="header-anchor" href="#papi-unregister" aria-label="Permalink to &quot;`/papi unregister`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>注销指定的变量拓展。</p><p><strong>参数：</strong></p><ul><li><code>&lt;文件名称&gt;</code> - 待注销的变量拓展文件名称。</li></ul><p><strong>示例：</strong></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi unregister MyExpansion.jar</span></span></code></pre></div></div><h3 id="其他命令" tabindex="-1">其他命令 <a class="header-anchor" href="#其他命令" aria-label="Permalink to &quot;其他命令&quot;">​</a></h3><p>这里是本插件中不属于任何分类的命令。</p><h4 id="papi-dump" tabindex="-1"><code>/papi dump</code> <a class="header-anchor" href="#papi-dump" aria-label="Permalink to &quot;`/papi dump`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>生成本插件的部分信息，如插件版本、服务器版本和安装的变量拓展，并将其上传至 <a href="https://paste.helpch.at/" target="_blank" rel="noreferrer">https://paste.helpch.at/</a> 用于反馈漏洞。</p></div><h4 id="papi-help" tabindex="-1"><code>/papi help</code> <a class="header-anchor" href="#papi-help" aria-label="Permalink to &quot;`/papi help`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>显示本插件的所有命令。</p></div><h4 id="papi-reload" tabindex="-1"><code>/papi reload</code> <a class="header-anchor" href="#papi-reload" aria-label="Permalink to &quot;`/papi reload`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>重载配置。<br> 从 eCloud <a href="#papi-ecloud-download">下载变量拓展</a>之后，你需要使用这个命令，否则它们不会正确注册。</p></div><h4 id="papi-version" tabindex="-1"><code>/papi version</code> <a class="header-anchor" href="#papi-version" aria-label="Permalink to &quot;`/papi version`&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">信息</p><p><strong>描述：</strong></p><p>显示本插件当前版本与作者信息。</p></div>',54)]))}const g=e(l,[["render",t]]);export{h as __pageData,g as default};
