import{_ as a,c as l,o,al as r}from"./chunks/framework.LK_RS8Nx.js";const u=JSON.parse('{"title":"使用变量","description":"","frontmatter":{},"headers":[],"relativePath":"PlaceholderAPI/user-guides.using-placeholders.md","filePath":"PlaceholderAPI/user-guides.using-placeholders.md"}'),d={name:"PlaceholderAPI/user-guides.using-placeholders.md"};function i(t,e,s,c,p,h){return o(),l("div",null,e[0]||(e[0]=[r('<h1 id="使用变量" tabindex="-1">使用变量 <a class="header-anchor" href="#使用变量" aria-label="Permalink to &quot;使用变量&quot;">​</a></h1><p>本页为服主介绍了使用本插件的教程。</p><p>如果你是开发者，想要了解如何在自己的插件中添加 PlaceholderAPI 的变量支持，请浏览<a href="./dev-guides.using-placeholderapi.html">使用 PlaceholderAPI</a>章节。</p><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>在你使用变量之前，你需要先检查一些东西。</p><h3 id="插件对本插件的支持" tabindex="-1">插件对本插件的支持 <a class="header-anchor" href="#插件对本插件的支持" aria-label="Permalink to &quot;插件对本插件的支持&quot;">​</a></h3><p>最重要的一点就是，了解你所使用的插件是否支持插入 PlaceholderAPI 的变量。<br> 诸如 EssentialsXChat 的聊天插件一般不支持本插件，除非其他插件将这些替换后的变量“注入”最终显示的聊天消息。</p><p>检查某个插件是否支持本插件的最快方法，就是浏览<a href="./user-guides.plugins-using-placeholderapi.html">支持 PlaceholderAPI 的插件</a>章节。<br> 如果插件出现在列表中，且 <code>支持变量</code> 处打钩，则表示它支持本插件。</p><p>如果插件没有在列表中，你可以浏览插件的介绍页，或其他来源的信息如维基，来确认此插件是否支持 PlaceholderAPI。</p><h3 id="正确的网络连接" tabindex="-1">正确的网络连接 <a class="header-anchor" href="#正确的网络连接" aria-label="Permalink to &quot;正确的网络连接&quot;">​</a></h3><p>本插件会向 <a href="https://api.extendedclip.com" target="_blank" rel="noreferrer">https://api.extendedclip.com</a> 获取 eCloud 中有关变量拓展的信息，同时也会从这里下载变量拓展。请确保你的服务器能够连接到上述网站。如果不能，且你运行的环境为 VPS 等托管服务，请联系服务器提供商放行。</p><div class="info custom-block"><p class="custom-block-title">托管相关信息</p><p>PlaceholderAPI 会自行校验下载环境并阻止服务器下载可疑的变量拓展。<br> 若要在 VPS 等托管服务上阻止指定变量拓展的下载，在环境变量中加入 <code>PAPI_BLOCKED_EXPANSIONS</code>，并在其后设置逗号分隔的拓展名称列表来阻止 PlaceholderAPI 下载这些拓展。</p><p>该功能自本插件 2.11.4 版本起被加入。</p></div><h3 id="下载-获取变量拓展" tabindex="-1">下载/获取变量拓展 <a class="header-anchor" href="#下载-获取变量拓展" aria-label="Permalink to &quot;下载/获取变量拓展&quot;">​</a></h3><p>变量拓展及其变量的提供方式可以为插件（如果有）自带，或 eCloud 上独立的 .jar 文件。<br> 变量拓展类型不同，你的安装方法也会有所差别。</p><p>若要检查变量拓展是独立文件还是内置于插件中，你可以浏览<a href="./user-guides.placeholder-list.html">变量列表</a>章节进行查询。<br> 如果它出现在列表上，你可以浏览下方的提示框来知晓其是否独立：</p><ul><li><code>papi ecloud download &lt;变量拓展&gt;</code>：此拓展存储在 eCloud 上，需要使用 <a href="./user-guides.commands.html#papi-ecloud-download"><code>/papi ecloud download</code> 命令</a> 下载。</li><li><code>内置于插件</code>：变量拓展为插件的一部分，安装对应插件后自动生效，无需额外下载变量拓展。</li><li><em>链接</em>：拓展需要从其他地方下载（如 Github 发行页面）。你需要手动下载它们并放入 expansions 文件夹。</li></ul><p>你可以通过命令 <code>/papi list</code> 查看载入的拓展。</p><h3 id="使用变量拓展" tabindex="-1">使用变量拓展 <a class="header-anchor" href="#使用变量拓展" aria-label="Permalink to &quot;使用变量拓展&quot;">​</a></h3><p>使用拓展中的变量就相对简单了许多。<br> 只需将对应的变量（如 <code>%player_name%</code>）放入支持变量的配置中即可。对应插件的维基或手册也会提供支持变量的相关信息。</p>',19)]))}const P=a(d,[["render",i]]);export{u as __pageData,P as default};
