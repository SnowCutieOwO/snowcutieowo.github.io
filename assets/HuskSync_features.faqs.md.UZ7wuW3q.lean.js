import{_ as s,c as e,a7 as t,o as l}from"./chunks/framework.CMhgUA9K.js";const n=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"HuskSync/features.faqs.md","filePath":"HuskSync/features.faqs.md"}'),r={name:"HuskSync/features.faqs.md"};function i(m,a,u,c,d,o){return l(),e("div",null,a[0]||(a[0]=[t('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><p>该页面解答了一些常被提及的问题。</p><h2 id="问题列表" tabindex="-1">问题列表 <a class="header-anchor" href="#问题列表" aria-label="Permalink to &quot;问题列表&quot;">​</a></h2><details class="details custom-block"><summary>哪些数据可以被同步？</summary><p>HuskSync 支持同步许多数据，所有同步的数据种类均可按照你的喜好更高。请浏览“<a href="./features.sync-features.html">同步功能</a>”章节以获取可同步数据的完整列表。</p></details><details class="details custom-block"><summary>是否支持模组物品？</summary><p>若你在 Arclight 或类似的核心上运行 HuskSync，请注意我们不会给你提供支持，但基本上 v3.x+ 的 HuskSync 可以正常地保存及同步物品。</p><p><strong>太长不读</strong> - 可能支持但不完全保证兼容性，我们不会将其直接标记为支持。在部署至实际生产环境之前请再三测试！</p></details><details class="details custom-block"><summary>是否支持 MMOItems/SlimeFun/ItemsAdder 的物品？</summary><p>带有自定义物品的插件，在 3.x 之后的 HuskSync 应该会被支持；但我们无法确保所有种类的自定义物品实现方法都可以正常显示。在部署至实际生产环境之前请再三测试！</p></details><details class="details custom-block"><summary>HuskSync 支持哪些版本的 Minecraft？</summary><p>检查<a href="./setup.compatbility.html">兼容性</a>中的表格。除了最新版的 Minecraft 之外，最新版的 HuskSync 也会基于热门程度和模组情况支持一些稍旧的指定版本。</p><p>如果最新版本不支持你的 Minecraft，你可以下载稍旧的稳定版 HuskSync，但这些版本的技术支持将会受到限制。</p></details><details class="details custom-block"><summary>运行 HuskSync 需要什么？</summary><p>见“安装”章节的“条件”部分内容。</p><p>你需要一个<a href="./setup.database.html">数据库</a>服务器，一个 <a href="./.html">Redis</a> 服务器，以及<a href="./setup.compatbility.html">版本合适的 Minecraft</a>。</p></details><details class="details custom-block"><summary>是否需要 Redis？什么是 Redis？</summary><p>是的，HuskSync 需要一个 [Redis] 服务器<strong>以及<a href="./setup.database.html">数据库</a>服务器</strong>才可使用。</p><p>HuskSync 需要 Redis 来操作（原因如下）。Redis 是一种运行在内存中的数据库，可用于服务器之间的数据缓存与群组之间的信息交换。安装 Redis 的方法与安装 MySQL 的方式相似（译者注：是真的。尤其是 Windows，除 MySQL 有安装包需要解压外，二者均可通过 cmd 观察运行状态。）若你正在使用官方的服务器，则你可能需要咨询客服是否支持 Redis。若你正在寻找支持 Redis 的服务器提供商，我在<a href="https://william278.net/redis-hosts" target="_blank" rel="noreferrer">这里</a>为你提供了一个列表，你可以稍后浏览。</p><p>更多信息请浏览 <a href="./setup.redis.html">Redis 安装教程</a>。</p></details><details class="details custom-block"><summary>我的 Redis 需要多少运行内存？</summary><p>我们推荐你至少为 Redis 服务器分配 1GB 的运行内存，且至少安装在本地（与游戏服务器共处同一台实体机，或至少与 Velocity/BungeeCord/Waterfall 群组共处同一台实体机）。</p><details class="details custom-block"><summary>是否需要数据库？插件支持哪些数据库？</summary><p>是的，HuskSync 需要一个<a href="./setup.database.html">数据库</a>服务器和 <a href="./setup.redis.html">Redis</a> 服务器才可使用。</p><p>HuskSync 支持如下种类的数据库：</p><ul><li>MySQL v8.0+</li><li>MariaDB v5.0+</li><li>PostgreSQL</li><li>MongoDB</li></ul></details></details><details class="details custom-block"><summary>插件如何同步数据？</summary><p>HuskSync 利用 MySQL 和 Redis 来实现最大效率的数据同步。</p><p>当一个玩家切换服务器时，除了保存在 MySQL 的数据之外，插件也会通过 Redis 以一个临时的秘钥验证数据缓存数据。当切换服务器后，对应服务器会检查秘钥并读取缓存，从而将其应用在玩家上。当玩家重新加入群组服时，系统会从 MySQL 获取最后保存的数据快照。</p><p>该方法用于显著提升同步性能与稳定性。一些其他的方法被用于优化这个过程，例如通过 Snappy 压缩序列化的数据。</p></details><details class="details custom-block"><summary>HuskSync 为什么不支持同步玩家经济/支持 Vault？</summary><p>这个问题被经常提及，我有一个很好的理由来解释为什么 HuskSync 不支持它。</p><p>Vault 是一个为开发者提供通用 API 的插件，它主要实现这两件事：</p><ol><li>开发者可以<em>集成</em> Vault 来编写自己的经济插件；</li><li>开发者可以<em>以</em> Vault <em>为基础</em>来修改或检查经济而无需编写代码与其他独立的经济插件对接</li></ol><p>基本上，Vault 的优势就在于它允许开发者写更少的代码。普通开发者仅需在接触玩家经济相关内容时编写与 Vault API 交互的代码即可。</p><p>而 <em>Vault 本身，不是一个经济插件</em>。<em>集成</em>了 Vault 的经济插件开发者可以借此编写集成代码与数据库系统来创建玩家经济并更新之。这也意味着开发者需要以数据能跨服同步的形式使用 Vault API。另外 Vault API 本身并没有这样的功能。</p><p>大多数经济插件是不能这么干的，因为跨服支持并不是（也从来不是）当前最大的需求。<em>MySQLPlayerDataBridge</em> 允许你在这方面进行探索并允许同步 Vault 经济——但就像上面说的那样，因为 Vault 并不是一个经济插件，所以 MySQLPlayerDataBridge 必须为<em>依赖</em>或<em>使用了</em> Vault 的插件提供持续维护。</p><p>导入一个像 HuskSync 这样的系统会使得代码量增加，拖长更新时间并降低整体的系统稳定性。显而易见的更优解就是找一个自己能跨服同步数据的经济插件。</p><p>因此，这里有些经济插件——例如 <a href="https://github.com/YiC200333/XConomy" target="_blank" rel="noreferrer">XConomy</a> 或 <a href="https://github.com/Emibergo02/RedisEconomy" target="_blank" rel="noreferrer">RedisEconomy</a> 能够胜任，并且我也推荐你们使用。若要使用不兼容的经济插件，Vault 为你提供了在插件之间迁移经济数据的方法（即 <code>/vault-convert</code>）。</p></details><details class="details custom-block"><summary>这个插件会比 MySQLDataBridge 好吗？</summary><p>我可没法回答这个问题！使用体验应当是因人而异的。</p><p>HuskSync 提供数据同步方法的性能，取决于你的服务器网络环境，以及你的玩家数据量。另外 HuskSync 还提供了更强大的回滚功能，以及快照备份/管理功能，如果这是你想要的话，你就更应该使用本插件。</p></details>',13)]))}const y=s(r,[["render",i]]);export{n as __pageData,y as default};
