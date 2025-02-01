import{_ as r,c as d,o as l,al as e}from"./chunks/framework.LK_RS8Nx.js";const i=JSON.parse('{"title":"从 GroupManager 或 PermissionsEx 迁移至 LuckPerms","description":"","frontmatter":{},"headers":[],"relativePath":"LuckPerms/reference.migrating-from-gm-or-pex.md","filePath":"LuckPerms/reference.migrating-from-gm-or-pex.md"}'),g={name:"LuckPerms/reference.migrating-from-gm-or-pex.md"};function p(s,t,a,o,u,m){return l(),d("div",null,t[0]||(t[0]=[e('<h1 id="从-groupmanager-或-permissionsex-迁移至-luckperms" tabindex="-1">从 GroupManager 或 PermissionsEx 迁移至 LuckPerms <a class="header-anchor" href="#从-groupmanager-或-permissionsex-迁移至-luckperms" aria-label="Permalink to &quot;从 GroupManager 或 PermissionsEx 迁移至 LuckPerms&quot;">​</a></h1><p>此为<a href="./how-to.migrate-from-other-plugins.html">迁移教程</a>的续章。</p><p>在你按照指示将 GroupManager 或 PermissionsEx 迁移至 LuckPerms 之后，本章节的信息可以教你快速适应 LuckPerms！</p><p>首先下表比较了 GroupManager、PermissionsEx 和 LuckPerms 中的<strong>等价命令</strong>。如果你知道如何在 GM 或 PEX 中使用哪条命令，那么下表可以帮你快速找出在 LuckPerms 中执行相同命令的方法。</p><p>当然也有 <a href="./command-usage.html">LuckPerms 的完整命令列表</a>，你可能更需要阅读这个章节！</p><p>其次，也有额外插件能让你继续使用<em>某些</em> GroupManager 或 PermissionsEx 的命令，并自动执行 LuckPerms 对应的功能。你可以在<a href="https://github.com/LuckPerms/LuckPermsCompat" target="_blank" rel="noreferrer">这里</a>找到更多有关信息。但是，通常来说，我们希望你“除旧迎新”，这样就可以立即适应<em>对应</em>的 LuckPerms 命令 —— 一段时间后就会像 GM 或 PEX 那样熟练使用！</p><p>祝你好运，也祝你使用 LuckPerms 愉快！</p><h2 id="groupmanager-命令等价用法" tabindex="-1">GroupManager 命令等价用法 <a class="header-anchor" href="#groupmanager-命令等价用法" aria-label="Permalink to &quot;GroupManager 命令等价用法&quot;">​</a></h2><table tabindex="0"><thead><tr><th>GroupManager</th><th>LuckPerms</th></tr></thead><tbody><tr><td>manuadd &lt;玩家&gt; &lt;权限组&gt;</td><td>lp user &lt;玩家&gt; parent set &lt;权限组&gt;</td></tr><tr><td>manudel &lt;玩家&gt;</td><td>lp user &lt;玩家&gt; clear</td></tr><tr><td>manuaddsub &lt;玩家&gt; &lt;权限组&gt;</td><td>lp user &lt;玩家&gt; parent add &lt;权限组&gt;</td></tr><tr><td>manudelsub &lt;玩家&gt; &lt;权限组&gt;</td><td>lp user &lt;玩家&gt; parent remove &lt;权限组&gt;</td></tr><tr><td>manpromote &lt;玩家&gt; &lt;权限组&gt;</td><td>lp user &lt;玩家&gt; promote &lt;路线&gt;</td></tr><tr><td>mandemote &lt;玩家&gt; &lt;权限组&gt;</td><td>lp user &lt;玩家&gt; demote &lt;路线&gt;</td></tr><tr><td>manwhois &lt;玩家&gt;</td><td>lp user &lt;玩家&gt; info</td></tr><tr><td>manuaddp &lt;玩家&gt; &lt;权限&gt;</td><td>lp user &lt;玩家&gt; permission set &lt;权限&gt; true</td></tr><tr><td>manudelp &lt;玩家&gt; &lt;权限&gt;</td><td>lp user &lt;玩家&gt; permission unset &lt;权限&gt;</td></tr><tr><td>manulistp &lt;玩家&gt;</td><td>lp user &lt;玩家&gt; permission info</td></tr><tr><td>manucheckp &lt;玩家&gt; &lt;权限&gt;</td><td>lp user &lt;玩家&gt; haspermission &lt;权限&gt;</td></tr><tr><td>manuaddv &lt;玩家&gt; prefix &lt;值&gt;</td><td>lp user &lt;玩家&gt; meta addprefix &lt;权重&gt; &lt;值&gt;</td></tr><tr><td>manuaddv &lt;玩家&gt; suffix &lt;值&gt;</td><td>lp user &lt;玩家&gt; meta addsuffix &lt;权重&gt; &lt;值&gt;</td></tr><tr><td>manuaddv &lt;玩家&gt; &lt;键&gt; &lt;值&gt;</td><td>lp user &lt;玩家&gt; meta set &lt;键&gt; &lt;值&gt;</td></tr><tr><td>manudelv &lt;玩家&gt; &lt;键&gt;</td><td>lp user &lt;玩家&gt; meta unset &lt;键&gt;</td></tr><tr><td>manulistv &lt;玩家&gt;</td><td>lp user &lt;玩家&gt; meta info</td></tr><tr><td></td><td></td></tr><tr><td>mangadd &lt;权限组&gt;</td><td>lp creategroup &lt;权限组&gt;</td></tr><tr><td>mangdel &lt;权限组&gt;</td><td>lp deletegroup &lt;权限组&gt;</td></tr><tr><td>mangaddi &lt;组1&gt; &lt;组2&gt;</td><td>lp group &lt;组1&gt; parent add &lt;组2&gt;</td></tr><tr><td>mangdeli &lt;组1&gt; &lt;组2&gt;</td><td>lp group &lt;组1&gt; parent remove &lt;组2&gt;</td></tr><tr><td>listgroups</td><td>lp listgroups</td></tr><tr><td>mangaddp &lt;权限组&gt; &lt;权限&gt;</td><td>lp group &lt;权限组&gt; permission set &lt;权限&gt; true</td></tr><tr><td>mangdelp &lt;权限组&gt; &lt;权限&gt;</td><td>lp group &lt;权限组&gt; permission unset &lt;权限&gt;</td></tr><tr><td>manglistp &lt;权限组&gt;</td><td>lp group &lt;权限组&gt; permission info</td></tr><tr><td>mangcheckp &lt;权限组&gt; &lt;权限&gt;</td><td>lp group &lt;权限组&gt; haspermission &lt;权限&gt;</td></tr><tr><td>mangaddv &lt;玩家&gt; prefix &lt;值&gt;</td><td>lp group &lt;权限组&gt; meta addprefix &lt;权重&gt; &lt;值&gt;</td></tr><tr><td>mangaddv &lt;玩家&gt; suffix &lt;值&gt;</td><td>lp group &lt;权限组&gt; meta addsuffix &lt;权重&gt; &lt;值&gt;</td></tr><tr><td>mangaddv &lt;玩家&gt; &lt;键&gt; &lt;值&gt;</td><td>lp group &lt;权限组&gt; meta set &lt;键&gt; &lt;值&gt;</td></tr><tr><td>mangdelv &lt;玩家&gt; &lt;键&gt;</td><td>lp group &lt;权限组&gt; meta unset &lt;键&gt;</td></tr><tr><td>manglistv &lt;玩家&gt;</td><td>lp group &lt;权限组&gt; meta info</td></tr><tr><td></td><td></td></tr><tr><td>mansave</td><td>lp sync</td></tr><tr><td>manload</td><td>lp sync</td></tr></tbody></table><h2 id="permissionsex-命令等价用法" tabindex="-1">PermissionsEx 命令等价用法 <a class="header-anchor" href="#permissionsex-命令等价用法" aria-label="Permalink to &quot;PermissionsEx 命令等价用法&quot;">​</a></h2><table tabindex="0"><thead><tr><th>PermissionsEx</th><th>LuckPerms</th></tr></thead><tbody><tr><td>pex</td><td>lp</td></tr><tr><td>pex reload</td><td>lp sync</td></tr><tr><td>pex toggle debug</td><td>lp verbose &lt;选项&gt;</td></tr><tr><td>pex user &lt;玩家&gt; check &lt;权限&gt;</td><td>lp user &lt;玩家&gt; haspermission &lt;权限&gt;</td></tr><tr><td>pex backend</td><td>lp info</td></tr><tr><td>pex import &lt;后端&gt;</td><td>lp export &lt;文件&gt; / lp import &lt;文件&gt;</td></tr><tr><td></td><td></td></tr><tr><td>pex user &lt;玩家&gt; list</td><td>lp user &lt;玩家&gt; permission info</td></tr><tr><td>pex user &lt;玩家&gt; prefix</td><td>lp user &lt;玩家&gt; meta infov</td></tr><tr><td>pex user &lt;玩家&gt; prefix &lt;文&gt;</td><td>lp user &lt;玩家&gt; meta addprefix &lt;权重&gt; &lt;前缀&gt;</td></tr><tr><td>pex user &lt;玩家&gt; suffix</td><td>lp user &lt;玩家&gt; meta info</td></tr><tr><td>pex user &lt;玩家&gt; suffix &lt;后缀&gt;</td><td>lp user &lt;玩家&gt; meta addsuffix &lt;权重&gt; &lt;后缀&gt;</td></tr><tr><td>pex user &lt;玩家&gt; delete</td><td>lp user &lt;玩家&gt; clear</td></tr><tr><td>pex user &lt;玩家&gt; add &lt;权限&gt; &lt;世界&gt;</td><td>lp user &lt;玩家&gt; permission set &lt;权限&gt; &lt;true/false&gt; world=&lt;世界&gt;</td></tr><tr><td>pex user &lt;玩家&gt; remove &lt;权限&gt; &lt;世界&gt;</td><td>lp user &lt;玩家&gt; permission unset &lt;权限&gt; world=&lt;世界&gt;</td></tr><tr><td>pex user &lt;玩家&gt; timed add &lt;权限&gt; &lt;时间&gt; &lt;世界&gt;</td><td>lp user &lt;玩家&gt; permission settemp &lt;权限&gt; &lt;true/false&gt; &lt;时间&gt; world=&lt;世界&gt;</td></tr><tr><td>pex user &lt;玩家&gt; timed remove &lt;权限&gt; &lt;时间&gt; &lt;世界&gt;</td><td>lp user &lt;玩家&gt; permission unsettemp &lt;权限&gt; world=&lt;世界&gt;</td></tr><tr><td>pex user &lt;玩家&gt; set &lt;键&gt; &lt;值&gt; &lt;世界&gt;</td><td>lp user &lt;玩家&gt; meta set &lt;键&gt; &lt;值&gt; world=&lt;世界&gt;</td></tr><tr><td></td><td></td></tr><tr><td>pex user &lt;玩家&gt; group list</td><td>lp user &lt;玩家&gt; parent info</td></tr><tr><td>pex user &lt;玩家&gt; group add &lt;权限组&gt; &lt;世界&gt;</td><td>lp user &lt;玩家&gt; parent add &lt;权限组&gt; world=&lt;世界&gt;</td></tr><tr><td>pex user &lt;玩家&gt; group add &lt;权限组&gt; &lt;世界&gt; &lt;时间&gt;</td><td>lp user &lt;玩家&gt; parent addtemp &lt;权限组&gt; &lt;时间&gt; world=&lt;世界&gt;</td></tr><tr><td>pex user &lt;玩家&gt; group set &lt;权限组&gt;</td><td>lp user &lt;玩家&gt; parent set &lt;权限组&gt;</td></tr><tr><td>pex user &lt;玩家&gt; group remove &lt;权限组&gt; &lt;世界&gt;</td><td>lp user &lt;玩家&gt; parent remove &lt;权限组&gt; world=&lt;世界&gt;</td></tr><tr><td>pex groups list</td><td>lp listgroups</td></tr><tr><td>pex group &lt;权限组&gt; list</td><td>lp group &lt;权限组&gt; permission info</td></tr><tr><td>pex group &lt;权限组&gt; prefix</td><td>lp group &lt;权限组&gt; meta info</td></tr><tr><td>pex group &lt;权限组&gt; prefix &lt;前缀&gt;</td><td>lp group &lt;权限组&gt; meta addprefix &lt;权重&gt; &lt;前缀&gt;</td></tr><tr><td>pex group &lt;权限组&gt; suffix</td><td>lp group &lt;权限组&gt; meta info</td></tr><tr><td>pex group &lt;权限组&gt; suffix &lt;后缀&gt;</td><td>lp group &lt;权限组&gt; meta addsuffix &lt;权重&gt; &lt;后缀&gt;</td></tr><tr><td>pex group &lt;权限组&gt; create</td><td>lp creategroup &lt;权限组&gt;</td></tr><tr><td>pex group &lt;权限组&gt; delete</td><td>lp deletegroup &lt;权限组&gt;</td></tr><tr><td>pex group &lt;权限组&gt; parents list</td><td>lp group &lt;权限组&gt; parent info</td></tr><tr><td>pex group &lt;权限组&gt; users</td><td>lp group &lt;权限组&gt; listmembers</td></tr><tr><td>pex group &lt;权限组&gt; parents set &lt;继承权限组&gt;</td><td>lp group &lt;权限组&gt; parent add &lt;继承权限组&gt;</td></tr><tr><td>pex group &lt;权限组&gt; add &lt;权限&gt; &lt;世界&gt;</td><td>lp group &lt;权限组&gt; permission set &lt;权限&gt; &lt;true/false&gt; world=&lt;世界&gt;</td></tr><tr><td>pex group &lt;权限组&gt; remove &lt;权限&gt; &lt;世界&gt;</td><td>lp group &lt;权限组&gt; permission unset &lt;权限&gt; world=&lt;世界&gt;</td></tr><tr><td>pex group &lt;权限组&gt; timed add &lt;权限&gt; &lt;时间&gt; &lt;世界&gt;</td><td>lp group &lt;权限组&gt; permission settemp &lt;权限&gt; &lt;true/false&gt; &lt;时间&gt; world=&lt;世界&gt;</td></tr><tr><td>pex group &lt;权限组&gt; timed remove &lt;权限&gt; &lt;时间&gt; &lt;世界&gt;</td><td>lp group &lt;权限组&gt; permission unsettemp &lt;权限&gt; world=&lt;世界&gt;</td></tr><tr><td>pex group &lt;权限组&gt; set &lt;键&gt; &lt;值&gt; &lt;世界&gt;</td><td>lp group &lt;权限组&gt; meta set &lt;键&gt; &lt;值&gt; world=&lt;世界&gt;</td></tr><tr><td></td><td></td></tr><tr><td>pex group &lt;权限组&gt; user add &lt;玩家&gt;</td><td>lp user &lt;玩家&gt; parent add &lt;权限组&gt;</td></tr><tr><td>pex group &lt;权限组&gt; user remove &lt;玩家&gt;</td><td>lp user &lt;玩家&gt; parent remove &lt;权限组&gt;</td></tr><tr><td>pex promote &lt;玩家&gt; &lt;等级&gt;</td><td>lp user &lt;玩家&gt; promote &lt;等级&gt;</td></tr><tr><td>pex demote &lt;玩家&gt; &lt;等级&gt;</td><td>lp user &lt;玩家&gt; demote &lt;等级&gt;</td></tr></tbody></table>',11)]))}const x=r(g,[["render",p]]);export{i as __pageData,x as default};
