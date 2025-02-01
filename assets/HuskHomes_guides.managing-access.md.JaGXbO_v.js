import{_ as a,c as s,o as t,al as l}from"./chunks/framework.LK_RS8Nx.js";const u=JSON.parse('{"title":"访问控制","description":"","frontmatter":{},"headers":[],"relativePath":"HuskHomes/guides.managing-access.md","filePath":"HuskHomes/guides.managing-access.md"}'),r={name:"HuskHomes/guides.managing-access.md"};function i(o,e,c,n,m,p){return t(),s("div",null,e[0]||(e[0]=[l('<h1 id="访问控制" tabindex="-1">访问控制 <a class="header-anchor" href="#访问控制" aria-label="Permalink to &quot;访问控制&quot;">​</a></h1><p>若要管理服务器上玩家能使用 HuskHomes 的哪些功能，你应该安装一个权限管理插件。如果你只是开服与朋友玩耍，那么只需改动 <code>config.yml</code> 下的一些内容而无需安装权限管理插件。</p><h2 id="luckperms" tabindex="-1">LuckPerms <a class="header-anchor" href="#luckperms" aria-label="Permalink to &quot;LuckPerms&quot;">​</a></h2><p><a href="https://luckperms.net/" target="_blank" rel="noreferrer">LuckPerms</a> 是一个标准、稳定且备受推崇的权限插件，且可以在 Spigot、Fabric 和 Sponge 服务器上运行。你可以先行阅读 LuckPerms 的教程来安装此插件。之后你可以输入命令 <code>/lp editor</code> 来将本页所提及的权限分配给对应的权限组。HuskHomes 大部分的权限都对默认玩家启用（见下）。你可以将权限设置为“false”来将权限从指定组中移除。</p><h2 id="无权限插件的情况" tabindex="-1">无权限插件的情况 <a class="header-anchor" href="#无权限插件的情况" aria-label="Permalink to &quot;无权限插件的情况&quot;">​</a></h2><p>所有命令都有默认的 OP 等级限制，使得你可以无需安装权限插件便可进行管理。下列命令需要 OP（通过命令 <code>/op &lt;玩家名称&gt;</code> 获得）才可使用：</p><ul><li>/tp</li><li>/tphere</li><li>/tpaall</li><li>/tpall</li><li>/setspawn</li><li>/setwarp</li><li>/delwarp</li><li>/editwarp</li><li>/tpoffline</li></ul><p>其他命令（但<em>不是所有子命令</em>）都默认可以被玩家使用。你可以<a href="./features.commands.html#禁用命令">完全禁用这些命令</a>来防止玩家使用它们，或者若要更好控制的话，安装一个权限插件（<em>推荐</em>）</p>',8)]))}const _=a(r,[["render",i]]);export{u as __pageData,_ as default};
