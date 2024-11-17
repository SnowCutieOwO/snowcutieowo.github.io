import{_ as a,o,c as r,a7 as t}from"./chunks/framework.DSL0mkng.js";const u=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"WorldEdit/common-questions.md","filePath":"WorldEdit/common-questions.md"}'),i={name:"WorldEdit/common-questions.md"};function l(d,e,n,h,c,s){return o(),r("div",null,e[0]||(e[0]=[t('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#通用">通用</a><ul><li><a href="#为什么所有命令都无效">为什么所有命令都无效？</a></li><li><a href="#worldedit-存在多久了">WorldEdit 存在多久了？</a></li><li><a href="#谁在维护-worldedit">谁在维护 WorldEdit？</a></li></ul></li><li><a href="#世界编辑">世界编辑</a><ul><li><a href="#所有命令在任何情况下都返回-0-个方块已改变-。">所有命令在任何情况下都返回“0 个方块已改变”。</a></li><li><a href="#我的服务器在大面积操作时崩溃了-大于-100-万方块数量的操作">我的服务器在大面积操作时崩溃了（大于 100 万方块数量的操作）！</a></li><li><a href="#我的服务器在单人客户端操作时崩溃了-大于-100-万方块数量的操作">我的服务器在单人客户端操作时崩溃了（大于 100 万方块数量的操作）！</a></li><li><a href="#我如何移除手上物品绑定的工具-笔刷">我如何移除手上物品绑定的工具/笔刷？</a></li><li><a href="#为何告示牌文本-箱子内容-实体等不工作">为何告示牌文本/箱子内容/实体等不工作？</a></li><li><a href="#当我选择位点时-worldedit-也选中了-1-1-1">当我选择位点时，WorldEdit 也选中了(-1, -1, -1)！</a></li></ul></li></ul></nav><h2 id="通用" tabindex="-1">通用 <a class="header-anchor" href="#通用" aria-label="Permalink to &quot;通用&quot;">​</a></h2><h3 id="为什么所有命令都无效" tabindex="-1">为什么所有命令都无效？ <a class="header-anchor" href="#为什么所有命令都无效" aria-label="Permalink to &quot;为什么所有命令都无效？&quot;">​</a></h3><p>如果命令无效，这可能说明 WorldEdit 在启动时遇到了问题：</p><ul><li><p>请确保你正在使用 Bukkit/Forge/Sponge 等服务端。原版的 Minecraft 服务器不会载入插件/模组！</p></li><li><p>你可以执行诸如 <code>version</code>（Bukkit）、<code>sponge version</code>（Sponge）或 <code>forge help</code>（Forge）来确保你所运行的服务器种类对应。单人游戏中，主菜单会有“模组”按钮（且 WorldEdit 应当处于模组列表中！）；</p></li><li><p>请确保你为你的 Minecraft 选择了对应版本的 WorldEdit；</p></li></ul><p>如果上面这些解决方法没能抱到你，你可能需要查看你的启动日志：</p><ul><li>若你正在使用游戏服务器托管（面板服），则你需要打开它的日志浏览功能；</li><li>你也可以打开服务器根目录下的 logs 文件夹，找到并打开“latest.log”进行浏览。（旧版本的 Minecraft 下，日志文件为根目录下的“server.log”。）</li></ul><p>若你仍然无法通过服务器日志找到问题，你可以寻求他人帮助或提交漏洞报告。</p><h3 id="worldedit-存在多久了" tabindex="-1">WorldEdit 存在多久了？ <a class="header-anchor" href="#worldedit-存在多久了" aria-label="Permalink to &quot;WorldEdit 存在多久了？&quot;">​</a></h3><p>WorldEdit 是 2010 年 10 月由 sk89q 发布于“hMod”模组发布网站的。随后，WorldEdit 就被转为 Bukkit 项目，并最终传播到了 Forge 等其他平台。</p><h3 id="谁在维护-worldedit" tabindex="-1">谁在维护 WorldEdit？ <a class="header-anchor" href="#谁在维护-worldedit" aria-label="Permalink to &quot;谁在维护 WorldEdit？&quot;">​</a></h3><p>WorldEdit 是由许多用户共同维护开发的，WorldEdit 的很大一部分都包含着社区贡献的代码。贡献者排行榜可在 <a href="https://github.com/EngineHub/WorldEdit/graphs/contributors" target="_blank" rel="noreferrer">Github 的页面</a> 上找到。</p><h2 id="世界编辑" tabindex="-1">世界编辑 <a class="header-anchor" href="#世界编辑" aria-label="Permalink to &quot;世界编辑&quot;">​</a></h2><h3 id="所有命令在任何情况下都返回-0-个方块已改变-。" tabindex="-1">所有命令在任何情况下都返回“0 个方块已改变”。 <a class="header-anchor" href="#所有命令在任何情况下都返回-0-个方块已改变-。" aria-label="Permalink to &quot;所有命令在任何情况下都返回“0 个方块已改变”。&quot;">​</a></h3><p>如果你之前通过命令 <code>//gmask &lt;蒙版&gt;</code> 设置了一个全局蒙版，你需要使用命令 <code>//gmask</code> 清除蒙版，这样它就不会影响你的其他编辑操作了。</p><h3 id="我的服务器在大面积操作时崩溃了-大于-100-万方块数量的操作" tabindex="-1">我的服务器在大面积操作时崩溃了（大于 100 万方块数量的操作）！ <a class="header-anchor" href="#我的服务器在大面积操作时崩溃了-大于-100-万方块数量的操作" aria-label="Permalink to &quot;我的服务器在大面积操作时崩溃了（大于 100 万方块数量的操作）！&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">信息</p><p>如果你的客户端出现了连接丢失/超时现象，则下文的操作不能解决这个问题。在这个时候，WorldEdit 不会尝试在编辑方块的时候保持客户端连接。下文所述步骤的效果仅仅是让服务器能完成操作而已。</p></div><p>造成这个问题的两个原因可能是线程守护强行中止了服务器进程，或者服务器内存溢出。</p><p>请确保你至少为服务器分配了 1GB（维持服务器运行）+ 每 1000 万个操作的方块增加 2GB 内存。例如，若你正在编辑的方块数量达到了 5000 万左右，则 <code>50 / 10 = 5</code>，然后 <code>1 + 2 * 5</code>，即你需要分配 11GB 的内存。若要将 11GB 分配至你的服务器，你需要在开服参数中添加 <code>-Xmx11G</code>。Bukkit/Spigot 服务端见<a href="https://bukkit.gamepedia.com/Setting_the_Java_Virtual_Machine_Heap_Size" target="_blank" rel="noreferrer">此示例操作步骤</a>。在 NeoForge/Fabric 服务器上大体相同。</p><p>若要修复线程守护强行中止服务器的问题，尝试将线程守护的超时时间拉长。对于 Spigot/Paper 服务端，可以在 <code>spigot.yml</code> 下的 <code>timeout-time</code> 项设置处调整。对于 NeoForge/Fabric 服务端，则是 <code>server.properties</code> 下的 <code>max-tick-time</code> 项。大多数情况下这些操作是不必要的，因为 WorldEdit 在大多数情况下都会触发线程守护。</p><h3 id="我的服务器在单人客户端操作时崩溃了-大于-100-万方块数量的操作" tabindex="-1">我的服务器在单人客户端操作时崩溃了（大于 100 万方块数量的操作）！ <a class="header-anchor" href="#我的服务器在单人客户端操作时崩溃了-大于-100-万方块数量的操作" aria-label="Permalink to &quot;我的服务器在单人客户端操作时崩溃了（大于 100 万方块数量的操作）！&quot;">​</a></h3><p>你可以使用与上文针对服务器使用的步骤对客户端进行调整，但你不需要担心线程守护。单人客户端不会用到线程守护。</p><h3 id="我如何移除手上物品绑定的工具-笔刷" tabindex="-1">我如何移除手上物品绑定的工具/笔刷？ <a class="header-anchor" href="#我如何移除手上物品绑定的工具-笔刷" aria-label="Permalink to &quot;我如何移除手上物品绑定的工具/笔刷？&quot;">​</a></h3><p>在手持绑定工具的物品时使用 <code>/tool none</code> 或 <code>/brush none</code> 命令。这两个命令功能相同，所以你随便选哪个都行。</p><h3 id="为何告示牌文本-箱子内容-实体等不工作" tabindex="-1">为何告示牌文本/箱子内容/实体等不工作？ <a class="header-anchor" href="#为何告示牌文本-箱子内容-实体等不工作" aria-label="Permalink to &quot;为何告示牌文本/箱子内容/实体等不工作？&quot;">​</a></h3><p>在所有版本的 WorldEdit 中，你都需要拥有 <code>worldedit.setnbt</code> 权限（OP 默认拥有）来选择方块实体。</p><p>在 Bukkit 服务端上，WorldEdit 因 Bukkit 机制的差异，需要使用对应版本的适配器才可正常使用某些功能。它会对方块实体（存有额外数据的方块，例如告示牌、容器等）、实体和其他内容使用适配器。这意味着每当你使用新版本的 WorldEdit，你都需要更新 WorldEdit。通常，WorldEdit 将会快速更新，你可以在<a href="https://worldedit.enginehub.org/en/latest/" target="_blank" rel="noreferrer">主页</a>找到新发布版本或实验性构建。</p><h3 id="当我选择位点时-worldedit-也选中了-1-1-1" tabindex="-1">当我选择位点时，WorldEdit 也选中了(-1, -1, -1)！ <a class="header-anchor" href="#当我选择位点时-worldedit-也选中了-1-1-1" aria-label="Permalink to &quot;当我选择位点时，WorldEdit 也选中了(-1, -1, -1)！&quot;">​</a></h3><p>这是 MrCrayFish 的模组 Enchantable 导致的冲突，相关问题描述可<a href="https://github.com/MrCrayfish/Enchantable/issues/18" target="_blank" rel="noreferrer">见此</a>。</p><p>你可以删除这个模组，也可以使用超距魔杖。</p>',31)]))}const f=a(i,[["render",l]]);export{u as __pageData,f as default};