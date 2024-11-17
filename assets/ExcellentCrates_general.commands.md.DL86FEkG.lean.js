import{_ as a,B as d,o as n,c as s,j as o,a as t,G as l,w as c,a7 as g}from"./chunks/framework.DSL0mkng.js";const y=JSON.parse('{"title":"📄 命令","description":"","frontmatter":{},"headers":[],"relativePath":"ExcellentCrates/general.commands.md","filePath":"ExcellentCrates/general.commands.md"}'),p={name:"ExcellentCrates/general.commands.md"};function i(m,e,f,b,u,x){const r=d("font");return n(),s("div",null,[e[2]||(e[2]=o("h1",{id:"📄-命令",tabindex:"-1"},[t("📄 命令 "),o("a",{class:"header-anchor",href:"#📄-命令","aria-label":'Permalink to "📄 命令"'},"​")],-1)),e[3]||(e[3]=o("p",null,[t("插件的主命令可以在 "),o("code",null,"config.yml"),t(" 中修改。默认情况下为 "),o("code",null,"excellentcrates"),t(" 或者 "),o("code",null,"crates"),t("。")],-1)),l(r,{color:"green"},{default:c(()=>e[0]||(e[0]=[t("[]")])),_:1}),e[4]||(e[4]=t(" - 可选参数，")),l(r,{color:"red"},{default:c(()=>e[1]||(e[1]=[t("<>")])),_:1}),e[5]||(e[5]=g(" - 必选参数。<p>标志 -s 会将命令标记为静默执行（玩家不会收到命令执行的提醒）。</p><p><code>/crate [help]</code> - 列出可用的插件命令。<br><code>/crate reload</code> - 重载插件。<br><code>/crate drop &lt;宝箱名称&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt; [世界名称]</code> - 在指定世界的指定位置生成宝箱。<br><code>/crate dropkey &lt;钥匙名称&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt; [世界名称]</code> - 在指定世界的指定位置生成钥匙。<br><code>/crate open &lt;宝箱名称&gt;</code> - 打开一个宝箱。<br><code>/crate openfor &lt;玩家名称&gt; &lt;宝箱名称&gt; [-f] [-s]</code> - 强制某个玩家打开宝箱。-f 标志表示无视其他限制条件为玩家打开宝箱。<br><code>/crate give &lt;玩家名称&gt; &lt;宝箱名称&gt; [数量] [-s]</code> - 将宝箱给予玩家。<br><code>/crate key [help]</code> - 列出所有钥匙相关的子命令。</p><ul><p><code>/crate key give &lt;玩家名称&gt; &lt;钥匙名称&gt; [数量] [-s]</code> - 向指定玩家给予钥匙。<br><code>/crate key giveall &lt;钥匙名称&gt; [数量] [-s]</code> - 向在线所有玩家给予钥匙。<br><code>/crate key take &lt;玩家名称&gt; &lt;钥匙名称&gt; [数量] [-s]</code> - 从指定玩家处拿走钥匙。<br><code>/crate key set &lt;玩家名称&gt; &lt;钥匙名称&gt; [数量] [-s]</code> - 将指定玩家的钥匙数量设置为固定值。<br><code>/crate key inspect [玩家名称]</code> - 浏览指定玩家拥有的虚拟钥匙。</p></ul><p><code>/crate menu &lt;菜单名称&gt; [玩家名称]</code> -（为指定玩家）打开菜单。<br><code>/crate preview &lt;宝箱名称&gt; [玩家名称]</code> -（为指定玩家）打开宝箱预览。<br><code>/crate resetcooldown &lt;玩家名称&gt; &lt;宝箱名称&gt;</code> - 重置指定玩家的开箱冷却。<br><code>/crate resetlimit &lt;玩家名称&gt; &lt;宝箱名称&gt; &lt;奖励名称&gt;</code> - 重置玩家指定宝箱或奖励的获取次数。</p>",5))])}const v=a(p,[["render",i]]);export{y as __pageData,v as default};
