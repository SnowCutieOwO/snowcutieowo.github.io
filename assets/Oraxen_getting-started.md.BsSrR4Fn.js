import{_ as e,c as r,a7 as t,o}from"./chunks/framework.Bz4u1pnU.js";const x=JSON.parse('{"title":"初次使用","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/getting-started.md","filePath":"Oraxen/getting-started.md"}'),n={name:"Oraxen/getting-started.md"};function i(l,a,s,c,p,d){return o(),r("div",null,a[0]||(a[0]=[t('<h1 id="初次使用" tabindex="-1">初次使用 <a class="header-anchor" href="#初次使用" aria-label="Permalink to &quot;初次使用&quot;">​</a></h1><p>如何在 Spigot 上安装并设置 Oraxen</p><h2 id="什么是-oraxen" tabindex="-1">什么是 Oraxen？ <a class="header-anchor" href="#什么是-oraxen" aria-label="Permalink to &quot;什么是 Oraxen？&quot;">​</a></h2><p>Oraxen 是一个 Minecraft 插件，它允许你向服务器中增加新的自定义模型/材质物品或方块。它会负责（通过 Polymath）处理纹理包的打包与上传。插件本身开源，且提供了拓展性强的 API。</p><h2 id="它怎么运作的" tabindex="-1">它怎么运作的？ <a class="header-anchor" href="#它怎么运作的" aria-label="Permalink to &quot;它怎么运作的？&quot;">​</a></h2><p>当装有 Oraxen 的 Spigot 服务器启动后，插件将会读取所有的物品配置并使用它们生成 json 模型，并将材质绑定至物品。它会通过优化算法将这些绑定的文件打包成压缩包，并将其上传至 Polymath 实例。Polymath 是一个免费且开源的软件，以 Python 写就，用于托管 Minecraft 的纹理包。默认情况下 Oraxen 会使用我（此指作者）的实例，它托管在瑞士的一台 Oracle 虚拟私有服务器上。在玩家加入服务器后，Oraxen 将会将玩家连接至 Polymath 实例并向他发送纹理包。</p><h2 id="快速安装-oraxen" tabindex="-1">快速安装 Oraxen <a class="header-anchor" href="#快速安装-oraxen" aria-label="Permalink to &quot;快速安装 Oraxen&quot;">​</a></h2><p>安装 Oraxen 的过程相当快且简便：只需将 Oraxen.jar 与 <a href="https://www.spigotmc.org/resources/protocollib.1997/" target="_blank" rel="noreferrer">ProtocolLib</a> 放入 <code>/plugins/</code> 文件夹，然后重启服务器即可。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>经测试，Oraxen 兼容 1.18 至 1.21.3 的 Spigot 与 Paper。</p></div><p>对于 1.21.2+ 的服务器，最新版本建议使用 <a href="https://papermc.io/downloads/paper" target="_blank" rel="noreferrer">Paper</a> 为服务端核心。对于旧版本的 Minecraft，首先请安装 <code>Oraxen 1.183.0</code>，这样你就能让配置文件进行兼容更新，之后即可升级版本。</p>',10)]))}const m=e(n,[["render",i]]);export{x as __pageData,m as default};