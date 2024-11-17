# 分类教程

在 categories 文件夹下你可以按你的需要创建任意多的文件。每一个文件都会对应一个“可发现对象”的类别。在下一个展示的配置文本中你可以见到 regions.yml 的内容。接下来会展示分类配置文件中你所有可配置的选项。
``` YAML
name: "&c&lWorld &7&lRegions"
discover_title:
  title: "&c&lCODEX UPDATED"
  subtitle: "&7Region: %name%"
  fade_in: 20
  stay: 60
  fade_out: 20
discover_message:
- "{centered}&f&m00                                                 00"
- " "
- "{centered}&c&lCODEX UPDATED"
- "{centered}&7World Region: %name%"
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
    name: "&a&lShadow Swamp"
    lore:
    - "&7The shadow swamp is a dark place full of"
    - "&7magical creatures. It has been uninhabited"
    - "&7for several years."
    discovered_on_region: shadow_swamp
  2:
    name: "&a&lCity of Kryngel"
    lore:
    - "&7The center of commerce and the capital of"
    - "&7the Yubbin province."
    discovered_on_region: kryngel
```

## 分类选项

|设置|描述|
|---|---|
|**name:** "&c&lWorld &7&lRegions"|此分类的名称。这个名称将会显示在本插件的 GUI 中。|
|**discover_title:**<br>**title:** "&c&lCODEX UPDATED"<br>**subtitle:** "&7Region: %name%"<br>**fade_in:** 20<br>**stay:** 60<br>**fade_out:** 20|在此分类下解锁可发现对象时对玩家发送的标题内容。使用内建变量 `%name%` 来指代当前被发现的对象（译者注: 触发解锁新条目内容的可发现对象）。`fade_in`（标题淡入时间）`stay`（标题保持时间）和 `fade_out`（标题淡出时间） 均以刻为单位。 (20 刻 = 1秒)<br><br>若你不想设置发现新条目时触发标题提醒，你完全可以删去这一整段内容。|
|**discover_message:**<br>-"&c&lCODEX UPDATED"<br>-"&7World Region: %name%"<br>-"&7Check it now by using &e/codex"|当玩家解锁该分类下新条目时向玩家发送的消息内容。使用内建变量 `%name%` 来指代当前被发现的对象 (译者注: 触发解锁新条目内容的可发现对象)。你可以在一行内容的开头添加 `{centered}` 格式占位符来使这行文本居中。<br><br>若你不想设置发现新条目时触发消息提醒，你完全可以删去这一整段内容。|
|**discover_sound:**<br>**name:** BLOCK_GILDED_BLACKSTONE_STEP<br>**volume:** 10<br>**pitch:** 0.1|当玩家解锁该分类下新条目时向玩家发送的声音。下列链接可以帮你找到你想要的声音。<br>最新版本：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html<br>1.8(1.8.8) 版本：https://helpch.at/docs/1.8.8/index.html?org/bukkit/Sound.html|

## 可发现对象设定

你可以在一个分类中设置不同的可发现对象。这里是一个可发现对象的示例配置：

```YAML
discoveries:
  1:
    name: "&a&lShadow Swamp"
    lore:
    - "&7The shadow swamp is a dark place full of"
    - "&7magical creatures. It has been uninhabited"
    - "&7for several years."
    discovered_on_region: shadow_swamp
```

在这个示例中，该可发现对象被命名为“1”，实际上它可以是你想要的任何名称。

|设置|描述|
|---|---|
|**name:** "&a&lShadow Swamp"|该可发现对象的名称。这个名称将会被展示在本插件此分类的GUI列表中。|
|**lore:**<br>-"&7The shadow swamp is a dark place full of"<br>-"&7magical creatures. It has been uninhabited"<br>-"&7for several years."|该可发现对象的描述。这段描述将会被展示在本插件此分类的GUI列表中。|
|**discovered_on_region:** shadow_swamp|若你想要玩家在第一次进入 WorldGuard 的区域后解锁这个条目，那么你需要将此选项加入，并在其后添加你需要指定的区域名称。|
|**discovered_on_mob_kill:**<br>**type:** ZOMBIE<br>**name:** "Shadow Warrior"<br>**discovered_on_mob_kill:**<br>**type:** SKELETON<br>**discovered_on_mob_kill:**<br>**mythic_mobs_id:** SkeletonKing|若你想要玩家通过击杀实体来解锁这个条目，那么你就需要添加这段设置，并且指定实体的种类和/或名称。<br>所有有效实体名称一栏：https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html
|**commands:**<br>-"xp give %player% 50"<br>-"msg %player% &7+50 &6XP"`|若你想要玩家在解锁区域后执行命令，那么你就需要填写这个部分的设置。<br>（译者注: 每一行填入一个命令。）|

::: info 谨记：
如果一个可发现对象没有 `discovered_on_region` 或 `discovered_on_mob_kill` 参数中的至少一个，那么代表着这个条目仅能通过命令 `/codex unlock` 解锁。
:::