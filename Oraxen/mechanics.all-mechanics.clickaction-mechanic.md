# 点击动作（clickAction）机制
在玩家点击方块或家具时执行命令、发出声音或发送消息

## 信息

`clickAction` 机制允许你在玩家点击方块或家具时执行命令、发出声音或发送消息。

## 配置

若要着手制作，先创建一个基础的[方块](mechanics.noteblock-mechanic.md)或[家具](mechanics.furniture-mechanic.md)。

接下来，在 `mechanics` 不分，你可以在任何 `noteblock-mechanic`、`furniture-mechanic` 或 `stringblock-mechanic` 下添加默认的 clickAction 机制。

```YAML
Mechanics:      
  noteblock/furniture/stringblock:
    clickActions:
      - conditions:
          - '#player.hasPermission("test.permission")'
        actions:
          - '[console] say <player> hello <player>!'
```

在这步过后，如果玩家拥有权限 `test.permission`，玩家会触发控制台命令 `say hello <player>` 的动作。

如果你没有使用条件，你需要在必要的地方插入括号：

```YAML
Mechanics:
  noteblock/furniture/stringblock:
    clickActions:
      - conditions: []
        actions:
          - '[console] say <player> hello <player>!'
```

> [!WARNING|label:警告]
> 这个机制不支持没有碰撞箱的家具。

## 条件

条件具有强大的灵活性。你可以对玩家（Player）或服务器（Server）使用任意“get”类方法。可参阅下文 Spigot Javadoc 获取所有可用的方法。

<div class="grid-container-1">
<div class="item1">
<div class="card">
<div class="card-details">
    <a href="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Player.html">
    <p class="text-title"><img src="https://www.spigotmc.org/favicon.ico"> Player (Spigot-API 1.18.1-R0.1-SNAPSHOT API)</p>
    </a>
</div>
</div>
</div>
<div class="item2">
<div class="card">
<div class="card-details">
    <a href="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Server.html">
    <p class="text-title"><img src="https://www.spigotmc.org/favicon.ico"> Server (Spigot-API 1.18.1-R0.1-SNAPSHOT API)</p>
    </a>
</div>
</div>
</div>
</div>

<center><sup>提示！按“Ctrl + F”并搜索“get”就可以找到所有有效的方法。</sup></center>

除此之外，Spring 文档提供了一种理解条件表达式的思路。

<div class="card">
<div class="card-details">
    <a href="https://docs.spring.io/spring-framework/docs/3.0.x/reference/expressions.html">
    <p class="text-title"><img src="https://docs.spring.io/favicon.ico"> 6. Spring 表达式语言（SpEL）</p>
    </a>
</div>
</div>

### 条件示例

`#server.getOnlinePlayers().size() > 10`

`#server.getAllowEnd()`

`#server.getDefaultGameMode()`

`#player.world.name == 'world'`

`#player.hasPermission("test.permission")`

`#player.gamemode.name() == 'ADVENTURE'`

## 动作

`[console] <命令>`

`[player] <命令>`

`[message] <消息>`

`[actionbar] <消息>`

`{source=声源 volume=音量 pitch=音调} [sound] <声音名称>`

### 动作示例

`[console] say hello`

`[player] say hello`

`[message] <blue>Hello!`

`[actionbar] <gray>Hello from the actionbar!`

`{source=AMBIENT volume=0.1 pitch=1} [sound] minecraft:block.shulker_box.close`