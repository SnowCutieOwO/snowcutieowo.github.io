# 变量

## PlaceholderAPI

`%excellentcrates_keys_[宝箱 ID]%` - 显示玩家拥有指定宝箱的剩余钥匙数量。    
`%excellentcrates_openings_[宝箱 ID]%` - 显示玩家开启宝箱的次数。    
`%excellentcrates_cooldown_[宝箱 ID]%` - 显示玩家距下次开启宝箱的冷却时间。    

[宝箱 ID] 表示宝箱的 ID（即宝箱文件名称）

### 奖励物品内的变量

你可以在奖励物品的名称和描述中使用任何 [PlaceholderAPI](https://www.spigotmc.org/resources/6245/) 的变量。它们会在给予玩家时自动替换为对应的内容。

## 内部变量

> [!NOTE|label:提示]
> 此为插件配置内部使用的变量。若要使用 PlaceholderAPI，请浏览上文 ↑。

### 玩家变量

`%player_name%` - 玩家名称
`%player_display_name%` - 玩家显示名称

### 宝箱变量

`%crate_id%` - 宝箱 ID（文件名称）    
`%crate_name%` - 宝箱显示名称    
`%crate_permission%` - 宝箱的权限节点    
`%crate_open_cooldown%` - 格式化的宝箱开启冷却时间    
`%crate_open_cost%` - 格式化的宝箱开箱收费价格    
`%crate_last_opener%` - 显示最后一个开启该宝箱的玩家    
`%crate_last_reward%` - 显示最后一个获取的宝箱奖励    

### 钥匙变量

`%key_id%` - 钥匙 ID（文件名称）    
`%key_name%` - 钥匙显示名称    
`%key_virtual%` - 是否为虚拟钥匙    

### 奖励变量

`%reward_id%` - 奖励 ID    
`%reward_name%` - 奖励显示名称    
`%reward_weight%` - 奖励的权重    
`%reward_roll_chance%` - 奖励的随机几率    
