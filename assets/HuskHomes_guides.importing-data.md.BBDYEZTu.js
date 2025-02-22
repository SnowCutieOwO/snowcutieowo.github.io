import{_ as e,c as s,o as a,al as o}from"./chunks/framework.CAEutmY3.js";const c=JSON.parse('{"title":"数据导入","description":"","frontmatter":{},"headers":[],"relativePath":"HuskHomes/guides.importing-data.md","filePath":"HuskHomes/guides.importing-data.md"}'),i={name:"HuskHomes/guides.importing-data.md"};function l(r,t,d,n,h,p){return a(),s("div",null,t[0]||(t[0]=[o('<h1 id="数据导入" tabindex="-1">数据导入 <a class="header-anchor" href="#数据导入" aria-label="Permalink to &quot;数据导入&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p>导入数据后会覆盖 HuskHomes 的已有数据，请在开始导入之前备份数据库中的数据。</p></div><p>HuskHomes 支持从下列插件/模组中导入数据，可使用 <code>/huskhomes import</code> 命令进行数据迁移。</p><table tabindex="0"><thead><tr><th>插件名称</th><th>支持导入数据内容</th><th>核心类型</th><th>链接</th></tr></thead><tbody><tr><td><a href="https://william278.net/docs/huskhomes/importing-data#essentialsx" target="_blank" rel="noreferrer">EssentialsX</a></td><td>家传送点、地标传送点、玩家数据</td><td>Spigot、Paper</td><td><a href="https://essentialsx.net/" target="_blank" rel="noreferrer">https://essentialsx.net/</a></td></tr></tbody></table><h2 id="essentialsx" tabindex="-1">EssentialsX <a class="header-anchor" href="#essentialsx" aria-label="Permalink to &quot;EssentialsX&quot;">​</a></h2><p>HuskHomes 支持导入来自 EssentialsX(<code>v2.19.7</code>+)</p><p>需要注意的是导入的数据会覆盖已存在的重复数据（例如，名称相同的家传送点会被导入的 Essentials 数据覆盖）。 下文为导入数据的操作步骤：</p><ol><li>在服务器上<a href="./setup.setup.html">安装最新版本的 HuskHomes</a>。</li><li>确保你安装的 EssentialsX 使用的版本为 v2.19.7+ 且存在用户数据。若有必要可重启服务器。</li><li>输入命令 <code>/huskhomes import list</code> 可确认 EssentialsX 是否能导入。</li><li>输入命令 <code>/huskhomes import start EssentialsX</code> 来开始数据迁移。进度和导入的数据量将会在聊天栏和/或控制台一并显示。</li><li>在导入完毕后，可通过输入命令 <code>/huskhomes:warplist</code> 和 <code>/huskhomes:homelist &lt;玩家名称&gt;</code> 验证数据是否正确迁移。</li></ol><p>在完成导入后应当重启服务器。</p>',9)]))}const u=e(i,[["render",l]]);export{c as __pageData,u as default};
