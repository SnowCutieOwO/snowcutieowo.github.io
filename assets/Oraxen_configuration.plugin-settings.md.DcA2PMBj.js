import{_ as t,C as i,c as h,o as p,b1 as k,G as a}from"./chunks/framework.CC7vnuC4.js";const e="/assets/image30.DOmRWMZh.png",r="/assets/image31.9WzaZPBW.png",u=JSON.parse('{"title":"插件设置","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/Oraxen"},{"title":"插件设置","link":"/Oraxen/configuration.plugin-settings"}]},"headers":[],"relativePath":"Oraxen/configuration.plugin-settings.md","filePath":"Oraxen/configuration.plugin-settings.md"}'),E={name:"Oraxen/configuration.plugin-settings.md"};function d(g,s,y,o,c,F){const n=i("NolebaseGitContributors"),l=i("NolebaseGitChangelog");return p(),h("div",null,[s[0]||(s[0]=k(`<h1 id="插件设置" tabindex="-1">插件设置 <a class="header-anchor" href="#插件设置" aria-label="Permalink to &quot;插件设置&quot;">​</a></h1><p>多个全局影响插件的选项</p><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h2><p>插件相关设置。在这里你可以决定某些内容的工作方式。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    repair</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      oraxen_durability_only</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 若设置为 true 则不会修复原版耐久物品</span></span></code></pre></div><p>是否只修复使用了 Oraxen 耐久系统的自定义物品？</p><h2 id="物品配置" tabindex="-1">物品配置 <a class="header-anchor" href="#物品配置" aria-label="Permalink to &quot;物品配置&quot;">​</a></h2><h3 id="oraxen-的配置是如何工作的" tabindex="-1">Oraxen 的配置是如何工作的？ <a class="header-anchor" href="#oraxen-的配置是如何工作的" aria-label="Permalink to &quot;Oraxen 的配置是如何工作的？&quot;">​</a></h3><p>首先，Oraxen 有好几个文件夹，其中 3 个就是用来存放配置文件的。</p><p>第一是 <code>Oraxen/glyphs</code>，它用于设置自定义字体或其他有关内容。</p><p>第二是 <code>Oraxen/items</code>，用于配置或创建自己的物品 yaml 配置。</p><p>最后是 <code>Oraxen/pack/</code>，所有的材质和模型都在这里打包成纹理包。</p><h2 id="材质包" tabindex="-1">材质包 <a class="header-anchor" href="#材质包" aria-label="Permalink to &quot;材质包&quot;">​</a></h2><h3 id="生成" tabindex="-1">生成 <a class="header-anchor" href="#生成" aria-label="Permalink to &quot;生成&quot;">​</a></h3><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  generation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    generate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    compression</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BEST_COMPRESSION</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 见源代码 Deflater.class</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 保护机制会尽可能让纹理包无法被正常方式打开（Windows 自带的解压、7zip、WinRAR 等）且不提示其完整性。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 但要小心，若你启用该选项，正常的解压方式会导致硬盘被占满。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    protection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The content of this texture pack</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     \\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">belongs to the owner of the Oraxen</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     \\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">plugin and any complete or partial</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     \\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">use must comply with the terms and</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     \\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">conditions of Oraxen.&quot;</span></span></code></pre></div><p>这部分配置允许你决定纹理包的<strong>生成（generation）</strong>。**压缩（compression）<strong>默认设置为尽可能小。下面的</strong>备注（comment）**可以视作纹理包的水印，能自由修改。</p><h4 id="保护" tabindex="-1">保护 <a class="header-anchor" href="#保护" aria-label="Permalink to &quot;保护&quot;">​</a></h4><p>保护功能可以阻止玩家直接偷窃纹理包。这不会让其代码增加，但鉴于代码的特殊性，在启用后<strong>不应</strong>尝试打开生成的 zip 文件，否则会导致硬盘受损。</p><p><img src="`+e+'" alt="img" title="1 艾字节（EB）= 1000000000（1 亿） 吉字节（GB）"></p><p><img src="'+r+`" alt="img" title="操作系统会比你先害怕文件大小导致的后果"></p><h3 id="上传" tabindex="-1">上传 <a class="header-anchor" href="#上传" aria-label="Permalink to &quot;上传&quot;">​</a></h3><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">polymath</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # transfer.sh 或 polymath</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    polymath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">atlas.oraxen.com</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 你也可以运行自己的 polymath 实例</span></span></code></pre></div><p>Oraxen 集成了 Polymoth（以 Python 编写的高兼容性自定义网页服务器）。你可以在<a href="https://github.com/Th0rgal/Polymath/" target="_blank" rel="noreferrer">这里</a>下载源码，并自行托管或使用指定实例（atlas）。你也可以使其<a href="./developers.custom-hosting-service">接入自己的托管服务</a>。</p><h3 id="调度" tabindex="-1">调度 <a class="header-anchor" href="#调度" aria-label="Permalink to &quot;调度&quot;">​</a></h3><p>这部分允许你基于玩家的纹理包安装状态执行指定的动作。</p><p>你可以发送消息（通过踢出（KICK）、聊天栏、ActionBar 或者标题），并指定延迟和间隔（若你使用的是 ActionBar 或标题，则这里是不同消息之间的间隔）</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">receive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  loaded</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # KICK / CHAT / ACTION_BAR / TITLE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ACTION_BAR</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 第一条消息出现的延迟，单位为秒</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 若消息类型设置为了 ACTION_BAR 或 TITLE，则你需要设置这个间隔</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        period</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 点击与悬浮提示框元素只能在消息类型为 CHAT 时显示</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;green&gt;&lt;bold&gt;纹理包载入成功!&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 如果需要执行命令</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        console</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        opped_player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  accepted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # KICK / CHAT / ACTION_BAR / TITLE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TITLE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 第一条消息出现的延迟，单位为秒</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 若消息类型设置为了 ACTION_BAR 或 TITLE，则你需要设置这个间隔</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        period</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 点击与悬浮提示框元素只能在消息类型为 CHAT 时显示</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;green&gt;&lt;bold&gt;已接受纹理包!&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;感谢配合&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 如果需要执行命令</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        console</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        opped_player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  denied</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # KICK / CHAT / ACTION_BAR / TITLE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CHAT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 第一条消息出现的延迟，单位为秒</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 因为这是 CHAT 即聊天栏类型的消息，此设置可填入任何值</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        period</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 点击与悬浮提示框元素只能在消息类型为 CHAT 时显示</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;red&gt;你拒绝了纹理包下载，但新物品只能在纹理包下显示. 请 &lt;/red&gt;&lt;click:run_command:/oraxen pack&gt;&lt;hover:show_text:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;green&gt;显示更多信息</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&gt;&lt;green&gt;&lt;bold&gt;点击这里&lt;/bold&gt;&lt;/hover&gt;&lt;/click&gt; &lt;red&gt;或输入 &lt;bold&gt;/o pack &lt;/bold&gt;了解更多&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 如果需要执行命令</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        console</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        opped_player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  failed_download</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # KICK / CHAT / ACTION_BAR / TITLE</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CHAT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 第一条消息出现的延迟，单位为秒</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 因为这是 CHAT 即聊天栏类型的消息，此设置可填入任何值</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        period</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 点击与悬浮提示框元素只能在消息类型为 CHAT 时显示</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;red&gt;下载纹理包时出现问题，但新物品只能在纹理包下显示. 请 &lt;/red&gt;&lt;click:run_command:/oraxen pack getpack&gt;&lt;hover:show_text:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;red&gt;/!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 在游戏内加载纹理包可能导致卡顿</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&gt;&lt;red&gt;&lt;bold&gt;点击这里&lt;/bold&gt;&lt;/hover&gt;&lt;/click&gt; &lt;red&gt;来重试，或输入命令 &lt;bold&gt;/o pack&lt;/bold&gt; 并从网络下载材质包。&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 如果需要执行命令</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        console</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        opped_player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span></code></pre></div><h2 id="配置工具" tabindex="-1">配置工具 <a class="header-anchor" href="#配置工具" aria-label="Permalink to &quot;配置工具&quot;">​</a></h2><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable_configs_updater</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  error_item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PODZOL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    excludeFromInventory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 若不需要在背包中显示，请将其设置为 true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    injectID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div><h2 id="自定义盔甲" tabindex="-1">自定义盔甲 <a class="header-anchor" href="#自定义盔甲" aria-label="Permalink to &quot;自定义盔甲&quot;">​</a></h2><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">CustomArmor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  disable_leather_repair</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><p>该选项允许你禁用皮革盔甲对自定义装备的修复。</p><p>这意味着修复自定义装备的唯一方式就是获取相同样式的另一套盔甲。</p><h2 id="杂项" tabindex="-1">杂项 <a class="header-anchor" href="#杂项" aria-label="Permalink to &quot;杂项&quot;">​</a></h2><h3 id="hide-scoreboard-numbers" tabindex="-1">hide_scoreboard_numbers <a class="header-anchor" href="#hide-scoreboard-numbers" aria-label="Permalink to &quot;hide_scoreboard_numbers&quot;">​</a></h3><p>该选项可隐藏红色的计分板数字。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    hide_scoreboard_numbers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><h3 id="reset-recpies" tabindex="-1">reset_recpies <a class="header-anchor" href="#reset-recpies" aria-label="Permalink to &quot;reset_recpies&quot;">​</a></h3><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">reset_recipes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><p>该选项可能导致本插件与其他自定义合成插件冲突。若你注意到其他插件在 Oraxen 重载时出现漏洞，你可以试着禁用这个选项。若你这么做，你需要重启服务器才可刷新 Oraxen 的配方。</p><h2 id="oraxen-界面" tabindex="-1">Oraxen 界面 <a class="header-anchor" href="#oraxen-界面" aria-label="Permalink to &quot;Oraxen 界面&quot;">​</a></h2><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">oraxen_inventory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  main_menu_title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;shift:-18&gt;&lt;glyph:menu_items&gt;&lt;shift:-193&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  menu_rows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  menu_layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    armors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">emerald_chestplate</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;main_menu_title&gt;&lt;#362753&gt;&lt;glyph:menu_items_overlay:colorable&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    blocks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">orax_ore</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;main_menu_title&gt;&lt;#EDCDEB&gt;&lt;glyph:menu_items_overlay:colorable&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    furniture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">chair</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;main_menu_title&gt;&lt;#F2F2F2&gt;&lt;glyph:menu_items_overlay:colorable&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    flowers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">dailily</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;main_menu_title&gt;&lt;#bf332c&gt;&lt;glyph:menu_items_overlay:colorable&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    hats</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">crown</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;main_menu_title&gt;&lt;#81B125&gt;&lt;glyph:menu_items_overlay:colorable&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ruby</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;main_menu_title&gt;&lt;#DA2E45&gt;&lt;glyph:menu_items_overlay:colorable&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    mystical</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">legendary_hammer</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;main_menu_title&gt;&lt;#9AB2E4&gt;&lt;glyph:menu_items_overlay:colorable&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    plants</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">weed_leaf</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;main_menu_title&gt;&lt;#44C886&gt;&lt;glyph:menu_items_overlay:colorable&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    skins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">wood_sword</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;main_menu_title&gt;&lt;#C48E40&gt;&lt;glyph:menu_items_overlay:colorable&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    tools</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">iron_serpe</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;main_menu_title&gt;&lt;#FFFFFF&gt;&lt;glyph:menu_items_overlay:colorable&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    weapons</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">energy_crystal_sword</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;main_menu_title&gt;&lt;#2FB6FF&gt;&lt;glyph:menu_items_overlay:colorable&gt;&quot;</span></span></code></pre></div><p>该部分配置允许你配置 Oraxen 界面的内容。你可以在这里使用 Oraxen ID 或 Minecraft 原版材料名称。</p>`,43)),a(n),a(l)])}const C=t(E,[["render",d]]);export{u as __pageData,C as default};
