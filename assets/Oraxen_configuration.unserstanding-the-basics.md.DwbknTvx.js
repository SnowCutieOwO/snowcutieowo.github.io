import{_ as e,c as t,o as r,b0 as n}from"./chunks/framework.w6NQj85O.js";const o="/assets/image29.C1an9jze.png",u=JSON.parse('{"title":"基础学习","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/configuration.unserstanding-the-basics.md","filePath":"Oraxen/configuration.unserstanding-the-basics.md"}'),s={name:"Oraxen/configuration.unserstanding-the-basics.md"};function i(c,a,d,p,l,h){return r(),t("div",null,a[0]||(a[0]=[n('<h1 id="基础学习" tabindex="-1">基础学习 <a class="header-anchor" href="#基础学习" aria-label="Permalink to &quot;基础学习&quot;">​</a></h1><p>了解 Oraxen 的运作机制</p><p>正如前文所述，Oraxen 能生成自定义物品，但也需要玩家使用纹理包。</p><p>它也能为物品添加自定义机制，一般将其称作“机制”。</p><h2 id="颜色与其他-minecraft-格式" tabindex="-1">颜色与其他 Minecraft 格式 <a class="header-anchor" href="#颜色与其他-minecraft-格式" aria-label="Permalink to &quot;颜色与其他 Minecraft 格式&quot;">​</a></h2><p>在旧版本的 Minecraft 中，游戏只能显示 16 种文本颜色，大多数插件使用的是以 &amp; 开头的彩色代码。</p><p>但在 1.16 之后你可以使用任何颜色，让各种各样的格式都能实现（例如可点击的消息），当然我不想要这些功能被限制太多。</p><p>这也是我们建议你使用 <a href="https://docs.adventure.kyori.net/minimessage.html#format" target="_blank" rel="noreferrer">MiniMessage 格式</a>的理由。它的纯文本看起来像这样：</p><p><code>&lt;#FF5555&gt;This is a &lt;#55FF55&gt;test!</code></p><h2 id="oraxen-文件夹的结构" tabindex="-1">Oraxen 文件夹的结构 <a class="header-anchor" href="#oraxen-文件夹的结构" aria-label="Permalink to &quot;Oraxen 文件夹的结构&quot;">​</a></h2><p><img src="'+o+'" alt="img" title="Oraxen 文件夹的结构图例"></p><h3 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor" href="#全局配置" aria-label="Permalink to &quot;全局配置&quot;">​</a></h3><p>在这个配置文件中你会找到两个文件：<code>settings.yml</code>，它包含了 Oraxen 的许多设置，而 <code>mechanics.yml</code> 则包含了全局机制的相关设置。</p><h3 id="物品配置" tabindex="-1">物品配置 <a class="header-anchor" href="#物品配置" aria-label="Permalink to &quot;物品配置&quot;">​</a></h3><p>子文件夹下的文件都是你创建的物品。</p><p>你可以在其中的任何文件创建新物品，甚至是创建新文件或移除已有文件。你也可以在单个文件内完成所有工作，但将配置分隔并以名称标注管理起来更方便。</p><h3 id="纹理包" tabindex="-1">纹理包 <a class="header-anchor" href="#纹理包" aria-label="Permalink to &quot;纹理包&quot;">​</a></h3><p>纹理包是 Oraxen 的重要资源，这其中会包括你需要用到的大多数文件。即便如此你还是需要为自定义物品设置材质，所有这些都在 <code>Pack</code> 文件夹中完成。</p><p>你需要使用 <strong>textures（材质）</strong> 子文件夹来添加材质，以及（若要使用自定义模型物品）<strong>models（模型）</strong> 模型子文件夹来添加模型。</p><p>你也可以在文件夹底层目录中修改纹理包的基础信息（<code>pack.mcmeta</code> 文件，纹理包图标等内容）。</p><p>若你需要覆盖原版纹理中的某些文件，你可以创建一个 <code>assets</code> 文件夹然后将内容放入，比如 <strong>assets/minecraft/sounds.json</strong>。</p><h3 id="配方" tabindex="-1">配方 <a class="header-anchor" href="#配方" aria-label="Permalink to &quot;配方&quot;">​</a></h3><p>这个文件夹包含了按类型排序的配方设置。</p><p>例如，<code>shaped.yml</code> 会包含你创建的有序合成配方。</p><p>一般情况下你不需要用到这个文件夹，因为可以直接在游戏内通过 Oraxen 的配方命令对其编辑。</p>',25)]))}const f=e(s,[["render",i]]);export{u as __pageData,f as default};
