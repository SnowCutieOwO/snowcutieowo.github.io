import{_ as e,c as t,a7 as a,o as i}from"./chunks/framework.Bz4u1pnU.js";const d=JSON.parse('{"title":"迁移","description":"","frontmatter":{},"headers":[],"relativePath":"LuckPerms/how-to.migrate-from-other-plugins.md","filePath":"LuckPerms/how-to.migrate-from-other-plugins.md"}'),s={name:"LuckPerms/how-to.migrate-from-other-plugins.md"};function o(l,r,m,n,u,c){return i(),t("div",null,r[0]||(r[0]=[a('<h1 id="迁移" tabindex="-1">迁移 <a class="header-anchor" href="#迁移" aria-label="Permalink to &quot;迁移&quot;">​</a></h1><p>LuckPerms 可以从其他插件转移权限数据 —— 我们叫它“迁移”。</p><h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h3><p>需要注意的是迁移脚本并不完美。它在<em>大部分情况下</em>可以正常运作并完好转化所有数据。但是，所有数据不是一样的，其中也会有一些我不曾预料到的情况。</p><p>LuckPerms 也有与其他权限插件的相似之处。但是有些部分是基本不同的，所以迁移数据会显得有些麻烦。</p><p>除此之外，迁移所有数据意味着你失去了学习本插件命令的大好机会。这可能会埋下隐患。😉如果你正在将 PermissionsEx 或 GroupManager 的插件数据迁移至此，这个页码或许能帮到你。</p><p>若你正在导入的权限时间久远，或是觉得不满意，现在是一个重构和清理权限数据的大好机会，与此同时还能学习 LuckPerms 的命令！</p><h4 id="支持的插件" tabindex="-1">支持的插件 <a class="header-anchor" href="#支持的插件" aria-label="Permalink to &quot;支持的插件&quot;">​</a></h4><p>支持从下列插件迁移数据：</p><ul><li>GroupManager</li><li>PermissionsEx（仅 Bukkit/Spigot）</li><li>zPermissions</li><li>bPermissions</li><li>PermissionsBukkit</li><li>PowerRanks</li><li>UltraPermissions</li><li>BungeePerms（只能在群组服上执行迁移命令）</li></ul><h2 id="过程" tabindex="-1">过程 <a class="header-anchor" href="#过程" aria-label="Permalink to &quot;过程&quot;">​</a></h2><p>迁移过程非常简单，但在不同平台上略有差异。</p><h3 id="第一步-安装-luckperms" tabindex="-1">第一步：安装 LuckPerms <a class="header-anchor" href="#第一步-安装-luckperms" aria-label="Permalink to &quot;第一步：安装 LuckPerms&quot;">​</a></h3><p>首先，你需要<a href="./install-on-a-single-server.html">安装 LuckPerms</a>。先不要删除旧权限插件。</p><p>确保你的旧权限插件还在运作。如果旧权限数据损坏，迁移将不能进行。</p><p>若你想要切换<a href="./storage.html">存储类型</a>，例如，转化为 mysql，现在做这事情最简单。若你需要在迁移后切换存储种类，则需要遵守“<a href="./how-to.switch-storage-types.html">切换存储类型</a>”中的操作指示。</p><h3 id="第二步-安装迁移插件" tabindex="-1">第二步：安装迁移插件 <a class="header-anchor" href="#第二步-安装迁移插件" aria-label="Permalink to &quot;第二步：安装迁移插件&quot;">​</a></h3><p>在下列的表格中按对应的权限插件安装迁移程序。将其一并放入插件文件夹下。</p><table tabindex="0"><thead><tr><th>权限插件</th><th>迁移程序</th><th>迁移命令</th></tr></thead><tbody><tr><td>GroupManager</td><td><a href="https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/groupmanager/build/libs/luckperms-migration-groupmanager.jar" target="_blank" rel="noreferrer">luckperms-migration-groupmanager.jar</a></td><td><code>/migrate-groupmanager</code></td></tr><tr><td>PermissionsEx</td><td><a href="https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/permissionsex/build/libs/luckperms-migration-permissionsex.jar" target="_blank" rel="noreferrer">luckperms-migration-permissionsex.jar</a></td><td><code>/migrate-permissionsex</code></td></tr><tr><td>zPermissions</td><td><a href="https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/zpermissions/build/libs/luckperms-migration-zpermissions.jar" target="_blank" rel="noreferrer">luckperms-migration-zpermissions.jar</a></td><td><code>/migrate-zpermissions</code></td></tr><tr><td>bPermissions</td><td><a href="https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/bpermissions/build/libs/luckperms-migration-bpermissions.jar" target="_blank" rel="noreferrer">luckperms-migration-bpermissions.jar</a></td><td><code>/migrate-bpermissions</code></td></tr><tr><td>PermissionsBukkit</td><td><a href="https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/permissionsbukkit/build/libs/luckperms-migration-permissionsbukkit.jar" target="_blank" rel="noreferrer">luckperms-migration-permissionsbukkit.jar</a></td><td><code>/migrate-permissionsbukkit</code></td></tr><tr><td>PowerRanks</td><td><a href="https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/powerranks/build/libs/luckperms-migration-powerranks.jar" target="_blank" rel="noreferrer">luckperms-migration-powerranks.jar</a></td><td><code>/migrate-powerranks</code></td></tr><tr><td>UltraPermissions</td><td><a href="https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/ultrapermissions/build/libs/luckperms-migration-ultrapermissions.jar" target="_blank" rel="noreferrer">luckperms-migration-ultrapermissions.jar</a></td><td><code>/migrate-ultrapermissions</code></td></tr><tr><td>BungeePerms</td><td><a href="https://ci.lucko.me/job/luckperms-migration/lastSuccessfulBuild/artifact/bungeeperms/build/libs/luckperms-migration-bungeeperms.jar" target="_blank" rel="noreferrer">luckperms-migration-bungeeperms.jar</a></td><td><code>/migrate-bungeeperms</code></td></tr></tbody></table><h3 id="第三步-重启服务器-执行迁移命令" tabindex="-1">第三步：重启服务器，执行迁移命令 <a class="header-anchor" href="#第三步-重启服务器-执行迁移命令" aria-label="Permalink to &quot;第三步：重启服务器，执行迁移命令&quot;">​</a></h3><p>重启服务器来正确载入旧权限插件、LuckPerms 以及迁移程序。</p><p>然后，进入服务器控制台，并执行上述对应的迁移命令。</p><p>稍事等待，让 LuckPerms 处理剩下的事情！你可以在控制台界面看到迁移进度，并在完成之后收到提醒。</p><p>在完成迁移后，关闭服务器并移除旧权限插件与迁移程序，然后再重启服务器。</p><p>若你正在从 GroupManager 或 PermissionsEx 迁移至本插件，那么<a href="./reference.migrating-from-gm-or-pex.html">这里</a>会有更多你需要的信息！</p>',25)]))}const k=e(s,[["render",o]]);export{d as __pageData,k as default};