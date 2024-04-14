# 📄 命令
插件的主命令可以在 `config.yml` 中修改。默认情况下为 `excellentcrates` 或者 `crates`。

<font color="green">[]</font> - 可选参数，<font color="red"><></font> - 必选参数。

标志 -s 会将命令标记为静默执行（玩家不会收到命令执行的提醒）。

`/crate [help]` - 列出可用的插件命令。    
`/crate reload` - 重载插件。    
`/crate drop <宝箱名称> <x> <y> <z> [世界名称]` - 在指定世界的指定位置生成宝箱。    
`/crate dropkey <钥匙名称> <x> <y> <z> [世界名称]` - 在指定世界的指定位置生成钥匙。    
`/crate open <宝箱名称>` - 打开一个宝箱。    
`/crate openfor <玩家名称> <宝箱名称> [-f] [-s]` - 强制某个玩家打开宝箱。-f 标志表示无视其他限制条件为玩家打开宝箱。    
`/crate give <玩家名称> <宝箱名称> [数量] [-s]` - 将宝箱给予玩家。    
`/crate key [help]` - 列出所有钥匙相关的子命令。    
    `/crate key give <玩家名称> <钥匙名称> [数量] [-s]` - 向指定玩家给予钥匙。    
    `/crate key giveall <钥匙名称> [数量] [-s]` - 向在线所有玩家给予钥匙。    
    `/crate key take <玩家名称> <钥匙名称> [数量] [-s]` - 从指定玩家处拿走钥匙。    
    `/crate key set <玩家名称> <钥匙名称> [数量] [-s]` - 将指定玩家的钥匙数量设置为固定值。
    `/crate key inspect [玩家名称]` - 浏览指定玩家拥有的虚拟钥匙。

`/crate menu <菜单名称> [玩家名称]` -（为指定玩家）打开菜单。    
`/crate preview <宝箱名称> [玩家名称]` -（为玩家）打开宝箱预览。    
`/crate resetcooldown <玩家名称> <宝箱名称>` - 重置指定玩家的开箱冷却。    
`/crate resetlimit <玩家名称> <宝箱名称> <奖励名称>` - 重置玩家指定宝箱或奖励的获取次数。