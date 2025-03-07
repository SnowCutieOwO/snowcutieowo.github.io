import{_ as c,C as r,c as s,o as l,b1 as n,G as a}from"./chunks/framework.CC7vnuC4.js";const m="/assets/contributing-1.CdFZNqhN.png",h=JSON.parse('{"title":"贡献","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/LuckPerms"},{"title":"贡献","link":"/LuckPerms/developers.contributing"}]},"headers":[],"relativePath":"LuckPerms/developers.contributing.md","filePath":"LuckPerms/developers.contributing.md"}'),u={name:"LuckPerms/developers.contributing.md"};function i(k,e,p,d,P,b){const o=r("NolebaseGitContributors"),t=r("NolebaseGitChangelog");return l(),s("div",null,[e[0]||(e[0]=n('<h1 id="贡献" tabindex="-1">贡献 <a class="header-anchor" href="#贡献" aria-label="Permalink to &quot;贡献&quot;">​</a></h1><p>你好！</p><p>本章节的目的是引导开发者建立并处理 LuckPerms 的代码。</p><p>与下文所述的那样，我们也有一个 Discord 平台用于交流 LuckPerms 的开发与拉取请求。你可随意<a href="https://discord.gg/luckperms" target="_blank" rel="noreferrer">加入并选择 #contributors 频道</a>。若你遇到问题，我们也很乐意伸出援手。</p><h2 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h2><p>LuckPerms 使用 <strong>Gradle</strong> 来管理依赖与构建。</p><p>浏览 <a href="https://github.com/LuckPerms/LuckPerms/blob/master/README.md" target="_blank" rel="noreferrer">README.md</a> 文件获得如何将代码克隆到本地的更多信息</p><p>我们推荐在开发 LuckPerms 时使用 Intellij IDEA Java IDE。它有着对 Gradle 的强大支持与优秀的自动补全功能。安装 Intellij 后只需静待 LuckPerms 代码从 Git 仓库克隆到本地即可（希望是这样的！）。</p><h2 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h2><p>项目被分为几个不同的模块。</p><ul><li><strong>API</strong>（<code>/api</code>）- 其他插件使用的公共 API，用于 LuckPerms 的数据交互及返回。该模块（大部分情况来讲）不包含任何实现，由插件本身提供。</li><li><strong>Common</strong>（<code>/common</code>）- 包含由所有 LuckPerms 实现（插件）共享的抽象代码。这个想法是为了降低在所有支持平台之间的重复逻辑。该模块具体取决于 API。</li><li><strong>Plugin</strong>（如 <code>/bukkit</code>）- 对指定服务器平台实现“LuckPerms 插件”简便的通用模块。插件会因平台而略有不同。</li><li><strong>Plugin Loaders</strong>（如 <code>/bukkit/loader</code>）- 在插件载入前启用并表现得像 bootstrap loader 的额外模块。这个模块的目的是为了实现 jar 中 jar（原文如此）与无运行时插件依赖注入本地支持的平台加载。</li></ul><h2 id="抽象概念" tabindex="-1">抽象概念 <a class="header-anchor" href="#抽象概念" aria-label="Permalink to &quot;抽象概念&quot;">​</a></h2><p>LuckPerms 有着许多抽象概念，用于化解重复代码并将其与逻辑组件分隔。若你还不熟悉代码库，解释起来会非常麻烦，但它对项目保持可维护性至关重要。</p><p>下文为解释了该抽象概念的图表。</p><p><img src="'+m+'" alt="img"></p><p>在这里我以 Bukkit 为例子，其他平台的类大致相似。</p><h3 id="底层-loader" tabindex="-1">底层 loader <a class="header-anchor" href="#底层-loader" aria-label="Permalink to &quot;底层 loader&quot;">​</a></h3><p><code>class BukkitLoaderPlugin extends JavaPlugin</code></p><p>bootstrap loader 插件负责在平台载入插件并将一切初始化。它体积非常小，大部分时间你都不需要管它。</p><p>但一般来讲它什么都不算，因为这只是插件的入口（为 Bukkit 部分的 <code>extend JavaPlugin</code> 类）</p><p>不是所有平台都有各自的 loader，它只在插件不允许控制自己的类载入器时才会用到。在本例子中，LuckPerms 使用了一个“jar 中 jar”系统，在主插件中载入了一个子 classloader 和 bootstraps。</p><p>例如，请参阅 <a href="https://github.com/LuckPerms/LuckPerms/blob/master/bukkit/loader/src/main/java/me/lucko/luckperms/bukkit/loader/BukkitLoaderPlugin.java" target="_blank" rel="noreferrer"><code>BukkitLoaderPlugin</code></a> 类。</p><p>这个类做的事情就是建立一个特殊的 classloader，然后将 onEnable/onDisable/等方法委托给 bootstrap。我们下一部分会讲到。</p><h3 id="底层-bootstrap" tabindex="-1">底层 bootstrap <a class="header-anchor" href="#底层-bootstrap" aria-label="Permalink to &quot;底层 bootstrap&quot;">​</a></h3><p><code>class LPBukkitBootstrap implements LuckPermsBootstrap</code></p><p><a href="https://github.com/LuckPerms/LuckPerms/blob/master/common/src/main/java/me/lucko/luckperms/common/plugin/bootstrap/LuckPermsBootstrap.java" target="_blank" rel="noreferrer"><code>LuckPermsBootstrap</code></a> 为用于与服务器平台交互的底层实例。它一般处理诸如记录、定时、对平台提供底层对象（在线玩家等）的信息等内容。</p><p>例如，见 <a href="https://github.com/LuckPerms/LuckPerms/blob/master/bukkit/src/main/java/me/lucko/luckperms/bukkit/LPBukkitBootstrap.java" target="_blank" rel="noreferrer"><code>LPBukkitBootstrap</code></a> 类。</p><p>这个类不包含任何逻辑，它只为 LuckPerms 插件提供内容。</p><h3 id="顶层插件" tabindex="-1">顶层插件 <a class="header-anchor" href="#顶层插件" aria-label="Permalink to &quot;顶层插件&quot;">​</a></h3><p><code>class LPBukkitPlugin extends AbstractLuckPermsPlugin implements LuckPermsPlugin</code></p><p><a href="https://github.com/LuckPerms/LuckPerms/blob/master/common/src/main/java/me/lucko/luckperms/common/plugin/LuckPermsPlugin.java" target="_blank" rel="noreferrer"><code>LuckPermsPlugin</code></a> 为 LuckPerms 中的主实例。抽象实现则是由 <a href="https://github.com/LuckPerms/LuckPerms/blob/master/common/src/main/java/me/lucko/luckperms/common/plugin/AbstractLuckPermsPlugin.java" target="_blank" rel="noreferrer"><code>AbstractLuckPermsPlugin</code></a> 提供的，它在每个平台上进行扩展，用于特定平台的集成。</p><p><a href="https://github.com/LuckPerms/LuckPerms/blob/master/common/src/main/java/me/lucko/luckperms/common/plugin/LuckPermsPlugin.java" target="_blank" rel="noreferrer"><code>LuckPermsPlugin</code></a> 只是一个实例。它由一堆决定了“LuckPerms 插件”成分的方法组成。这个实例会在项目内的其他类之间传递（作为构建依赖注入）来允许不同的组件能获取各自的数据。如果你想要获取诸如记录器或计划表的底层组件，你也可以从它这里获得 <a href="https://github.com/LuckPerms/LuckPerms/blob/master/common/src/main/java/me/lucko/luckperms/common/plugin/bootstrap/LuckPermsBootstrap.java" target="_blank" rel="noreferrer"><code>LuckPermsBootstrap</code></a>。</p><p><a href="https://github.com/LuckPerms/LuckPerms/blob/master/common/src/main/java/me/lucko/luckperms/common/plugin/AbstractLuckPermsPlugin.java" target="_blank" rel="noreferrer"><code>AbstractLuckPermsPlugin</code></a> 为插件主类。它决定了许多在 LuckPerms 内共享的逻辑。例如，在任意 LuckPerms 插件启用时，它们都需要进行相似的步骤，如建立存储并注册监听器与命令。尽可能多的抽象内容对减少重复有一定的意义。</p><p><a href="https://github.com/LuckPerms/LuckPerms/blob/master/common/src/main/java/me/lucko/luckperms/common/plugin/AbstractLuckPermsPlugin.java" target="_blank" rel="noreferrer"><code>AbstractLuckPermsPlugin</code></a> 提供了启用/禁用插件的顶层逻辑，但也有一些受保护的抽象方法允许插件提供并使用自己的逻辑或类。</p><p>抽象插件类会在不同平台上被覆盖，例如 <a href="https://github.com/LuckPerms/LuckPerms/blob/master/bukkit/src/main/java/me/lucko/luckperms/bukkit/LPBukkitPlugin.java" target="_blank" rel="noreferrer"><code>LPBukkitPlugin</code></a> 类的示例。子类定义了自定义行为，并提供了插件在指定平台上使用的自定义对象（如 <code>BukkitContextManager</code> 为 <code>LPBukkitPlugin</code> 提供的 <code>ContextManager</code> 在平台上的实现）。</p><h2 id="代码库剩余部分" tabindex="-1">代码库剩余部分 <a class="header-anchor" href="#代码库剩余部分" aria-label="Permalink to &quot;代码库剩余部分&quot;">​</a></h2><p>上文提及，<a href="https://github.com/LuckPerms/LuckPerms/blob/master/common/src/main/java/me/lucko/luckperms/common/plugin/LuckPermsPlugin.java" target="_blank" rel="noreferrer"><code>LuckPermsPlugin</code></a> 为插件的“根”，延伸至其他包与类中。</p><p>例如：</p><ul><li><code>UserManager</code> 处理 LuckPerms 玩家在内存中的存储</li><li><code>GroupManager</code> 处理 LuckPerms 权限组在内存中的存储</li><li><code>TrackManager</code> 处理 LuckPerms 路线在内存中的存储</li><li><code>LuckPermsConfiguration</code> 处理配置文件</li><li><code>Storage</code> 为所有与插件的存储容器进行操作的根实例</li><li><code>CommandManager</code> 处理所有 LuckPerms 的命令及其调用</li><li><code>DependencyManager</code> 处理运行时的依赖载入等相关决定</li><li><code>ContextManager</code> 处理玩家的上下文查找与缓存</li><li>.. 还有很多，但愿名称/JavaDocs 能够解释这些的模块的功能。</li></ul><h2 id="代码风格" tabindex="-1">代码风格 <a class="header-anchor" href="#代码风格" aria-label="Permalink to &quot;代码风格&quot;">​</a></h2><p>编写代码非常有必要保持一致与执行<em>合理</em>，因为它对插件源码的可读性与可维护性至关重要。</p><p>有人可能会说，偶尔出现问题没什么大不了，挑三拣四只是项目维护者有强迫症罢了 —— 有时候还真是这样 —— 但话说回来，如果放任不管，这些问题只会随着时间的推移而增加，从长远来看，这样的高标准有益于项目的维护。</p><p>总的来说：</p><ol><li><strong>尽可能模仿现存代码的风格</strong>。这<em>通常</em>是有效的，除了编写项目本身的要求以外，遵照别人的“风格”进行代码编写也更简单。</li><li><strong>最小化空白的改变</strong>，在提交审查合并请求前先<strong>检查你的差异对比</strong>。大部分编辑器既有显示修改/增加/移除内容显示的功能，也提供了回滚某些修改内容的按钮。</li></ol><p>我们很乐意帮你整洁提交内容，但如果你自己来的话，会快上很多！</p>',45)),a(o),a(t)])}const L=c(u,[["render",i]]);export{h as __pageData,L as default};
