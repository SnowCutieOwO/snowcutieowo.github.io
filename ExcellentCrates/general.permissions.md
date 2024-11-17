# ⛔ 权限列表

权限会在此以父子关系列出。给予父权限会使得其下的子权限也会生效。

`excllentcrates.*` - 允许完全控制插件。    
`excllentcrates.crate.[宝箱 ID]` - 允许开启指定宝箱。    
`excllentcrates.massopen` - 允许使用连抽功能。（默认拥有）
`excllentcrates.command.*` - 允许使用插件所有的命令。
    `excllentcrates.command.drop` - 允许使用 /crate drop 命令。
    `excllentcrates.command.dropkey` - 允许使用 /crate dropkey 命令。
    `excllentcrates.command.open` - 允许使用 /crate open 命令。
    `excllentcrates.command.openfor` - 允许使用 /crate openfor 命令。
    `excllentcrates.command.give` - 允许使用 /crate give 命令。
    `excllentcrates.command.key` - 允许使用 /crate key 命令。
    `excllentcrates.command.key.give` - 允许使用 /crate key give 和 /crate key giveall 命令。
    `excllentcrates.command.key.take` - 允许使用 /crate key take 命令。   
    `excllentcrates.command.key.set` - 允许使用 /crate key set 命令。    
    `excllentcrates.command.key.show` - 允许使用 /crate key inspect 命令。    
    `excllentcrates.command.key.show.others` - 允许对其他玩家使用 /crate key inspect 命令。    
    `excllentcrates.command.menu` - 允许使用 /crate menu 命令。    
    `excllentcrates.command.menu.others` - 允许对其他玩家使用 /crate menu 命令。    
    `excllentcrates.command.preview` - 允许使用 /crate preview 命令。    
    `excllentcrates.command.preview.others` - 允许对其他玩家使用 /crate preview 命令。    
    `excllentcrates.command.resetcooldown` - 允许使用 /crate resetcooldown 命令。    
    `excllentcrates.command.resetlimit` - 允许使用 /crate resetlimit 命令。
`excllentcrates.bypass.*` - 绕过插件所有的限制。    
    `excllentcrates.bypass.crate.open.cost.*` - 绕过所有开箱限制。    
        `excllentcrates.bypass.crate.open.cost.[currency]` - 无视支付指定货币开箱的要求。    
    `excllentcrates.bypass.crate.opencooldown` - 无视开箱冷却。    
    `excllentcrates.bypass.reward.limit.amount` - 无视奖励获取限制。    
    `excllentcrates.bypass.reward.limit.cooldown` - 无视奖励获取冷却。    