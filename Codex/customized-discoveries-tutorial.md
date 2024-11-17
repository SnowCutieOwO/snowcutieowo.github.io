# 自定义可发现物教程

在这一章节中我会向你解释如何使用我的另一个插件 ConditionalEvents 与本插件进行配合。ConditionalEvents 允许你在达到特定条件时触发时间，并执行不同的操作。例如，如果玩家捡起了一个物品，或是按下了一个按钮，设置好的一些时间就会被触发。

所以，在我的插件 ConditionalEvents 的帮助下，你可以创建更复杂的可发现物。让我们假设你想要做通过消耗一个物品来解锁一个可发现物的功能，比如吃掉一个苹果，所以我们就可以这样创建分类：
``` YAML
name: "&c&lFood"
discover_title:
  title: "&c&lCODEX UPDATED"
  subtitle: "&7Food: %name%"
  fade_in: 20
  stay: 60
  fade_out: 20
discover_message:
- "{centered}&f&m00                                                 00"
- " "
- "{centered}&c&lCODEX UPDATED"
- "{centered}&7Food: %name%"
- " "
- "{centered}&7Check it now by using &e/codex"
- " "
- "{centered}&f&m00                                                 00"
discover_sound:
  name: BLOCK_GILDED_BLACKSTONE_STEP
  volume: 10
  pitch: 0.1
discoveries:
  1:
    name: "&a&lMystery Apple"
    lore:
    - "&7A mysterious apple found in the cave of"
    - "&7Gashmii. It will give you Strength II for"
    - "&730 seconds."
```

如你所见，我们只是创建了一个“食物”分类下的可发现物（文件名称可以为 food.yml）。所以我们现在就来着手制作一个 ConditionalEvents 触发事件。
``` YAML
mystery_apple_eat:
    type: item_consume
    conditions:
    - '%item% equals APPLE'
    - '%item_name% equals Mystery Apple'
    actions:
      default:
      - 'give_potion_effect: INCREASE_DAMAGE;600;2'
      - 'console_command: codex unlock %player% food 1'
```

这个事件将会检查玩家是否吃掉了一个名称为“神秘苹果”的物品，如果检测到，插件将会给予玩家 600 刻（30 秒）的力量药水效果，以及以控制台身份执行的一个命令 `/codex unlock %player% food 1`。这将为该玩家解锁这个可发现物。如果玩家再次吃掉这个苹果，同样的命令将会被执行，但接下来不会发生任何事，因为玩家已经解锁了这个可发现物。

当然一些更为复杂的时间也可以通过此插件的多个事件做到，如果你对我的另一个插件感兴趣的话，你可以点击[这里](https://ajneb97.gitbook.io/conditionalevents/)来阅读这个插件的 Wiki 页面。