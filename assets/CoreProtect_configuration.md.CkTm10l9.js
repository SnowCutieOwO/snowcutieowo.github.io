import{_ as o,c as a,o as t,al as c}from"./chunks/framework.LK_RS8Nx.js";const m=JSON.parse('{"title":"配置文件","description":"","frontmatter":{},"headers":[],"relativePath":"CoreProtect/configuration.md","filePath":"CoreProtect/configuration.md"}'),l={name:"CoreProtect/configuration.md"};function i(n,e,r,d,s,p){return t(),a("div",null,e[0]||(e[0]=[c(`<h1 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h1><p>CoreProtect 的配置文件位于 <code>CoreProtect</code> 文件夹下的 <code>config.yml</code>。</p><h2 id="分世界配置" tabindex="-1">分世界配置 <a class="header-anchor" href="#分世界配置" aria-label="Permalink to &quot;分世界配置&quot;">​</a></h2><p>如果你需要为指定世界修改记录设置，只需按如下步骤即可：</p><ol><li>复制 <code>config.yml</code> 文件，改为指定世界的名称（如，<code>world_nether.yml</code>）。</li><li>在新文件中，按需修改记录设置。</li><li>重启服务器或在游戏内输入 <code>/co reload</code> 以应用改动。</li></ol><p>二级配置文件会覆盖 <code>config.yml</code> 中的值。二级配置中未设置的值会使用 <code>config.yml</code> 设置的值。</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><ul><li>如果你需要禁用末地世界的所有记录，只需将 <code>config.yml</code> 复制并改名为 <code>world_the_end.yml</code>（匹配对应世界的文件夹名称）。然后，在新文件中将所有记录设置关闭即可。</li><li>如果你只需要禁用下界的实体死亡记录而保留其他记录，则只需创建一个 <code>world_nether.yml</code> 文件并添加 <code>rollback-entities: false</code> 即可。</li></ul><h2 id="禁用记录" tabindex="-1">禁用记录 <a class="header-anchor" href="#禁用记录" aria-label="Permalink to &quot;禁用记录&quot;">​</a></h2><p>若要禁用指定玩家、方块或命令的记录，只需按如下步骤即可：</p><ol><li>在 CoreProtect 插件文件夹中，创建一个名为 <code>blacklist.txt</code> 的文件。</li><li>输入需要禁用记录的玩家（或命令）名称（每行一条玩家名称）。</li><li>重启服务器或在游戏内输入 <code>/co reload</code> 以应用改动。</li></ol><p>这可以禁用非玩家的记录，如 “#creeper”。例如，如果你需要禁用玩家“Notch”的 TNT 爆炸、石头方块以及“/help”命令的记录，那么 <code>blacklist.txt</code> 需要写作如下格式：</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Notch</span></span>
<span class="line"><span>#tnt</span></span>
<span class="line"><span>/help</span></span>
<span class="line"><span>minecraft:stone</span></span></code></pre></div><p><em>需要注意的是，只有 CoreProtect 23+ 才支持禁用方块记录，且需要一并输入命名空间。例如，若需要禁用泥土，则你必须将其写成“minecraft:dirt”。</em></p>`,14)]))}const _=o(l,[["render",i]]);export{m as __pageData,_ as default};
