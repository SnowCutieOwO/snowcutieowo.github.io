# 变量物品

玩家在商店中编辑交易时，通常需要至少一个物品才可以收购更多同类物品。为了缓解这种方式的局限性，玩家能使用**重命名的纸**作为他们没有的物品的替代。

变量纸物品可以在**铁砧中重命名普通的纸物品**获得：如果纸的名称与已知物品类型匹配，则它会被插件识别为“变量物品”，并会在编辑器中变成对应的物品。

如果一个变量物品没有出现预期的情况，它的名称可能不与已知物品匹配。有效的物品类型名称可以在这个地方找到：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html

* 只支持物品名称。不存在物品形式的方块名称（如 `air`、`water`、`piston_head`、`bubble_column` 等）不会生效。
* 非英语物品名称，以及与物品类型不同的自定义物品名称，同样不支持。
* 对变量物品的判断在某些情况下会变得宽松：
    * Minecraft 命名空间前缀（`minecraft:`）是可选的。有些物品名称在加上前缀以后可能会显得过长，因此可以省略。
    * 填入的物品名称大小写不敏感。
    * 开头和结尾的空格也会被忽略。
    * 空格会被转化为下划线。
    * 所有颜色代码都会被忽略。

其他有趣的提示：
* 只可指定物品类型。被替换物品的其他属性暂不支持。
* 变量物品可以在出售、收购以及以物易物商店中使用。管理员商店中该功能无效。
* 部分变量物品会在放入编辑器后立即被替换，因此基本不可能在玩家商店中出售变量物品。但是普通的纸或是自定义名称不与任何物品匹配的纸物品，则会像正常物品一样参与交易。
* 变量物品可用于收购或出售中的物品替换。这允许玩家将自己没有的物品放入交易中。

## 附魔书

变量物品能够指定基础附魔书。

* 使用的格式为 `<附魔名称> <附魔等级>`
* 判断方式与物品类型相似：物品名称应当与附魔的 ID 匹配（见 https://zh.minecraft.wiki/w/%E9%AD%94%E5%92%92#%E6%89%80%E6%9C%89%E9%AD%94%E5%92%92）
* 部分附魔可以使用别称，例如 `curse of binding`（绑定诅咒）也可使用 `binding_curse`。
* 只能指定一种附魔。
* 附魔等级可自由指定，即使原版情况下无法获得。
    * 超出数字范围的附魔会被缩减为最匹配的数字。
    * 若不指定等级或无法判断，则使用附魔的最小等级（一般为 `1`）。
    * 附魔可显示罗马数字的最高等级为 10（`I` 至 `X`）。
    * 也可以使用 `min` 或 `max` 指定附魔等级，返回的是该附魔最低及最高等级。

## 药水与药水箭

变量物品同样可用于替换基础药水、喷溅型药水、滞留型药水以及药水箭。

* 使用的格式为：[^1]
    * 普通药水：`[long（长效）] [strong（强力）] [potion] [of] [long] [strong] <药水类型> [2|ii] [potion] [2|ii]`
    * 喷溅型药水：`[long（长效）] [strong（强力）] <splash（喷溅型）> [potion] [of] [long（长效）] [strong（强力）] <药水类型> [2|ii] <splash> [potion] [2|ii]`
    * 滞留型药水：`[long（长效）] [strong（强力）] <lingering（滞留型）> [potion] [of] [long（长效）] [strong（强力）] <药水类型> [2|ii] <lingering> [potion] [2|ii]`
    * 药水箭：`[long（长效）] [strong（强力）] [tipped（药水（箭））] [potion] <arrow> [of] [long（长效）] [strong（强力）] <药水类型> [2|ii] [tipped（药水（箭））] [potion] <arrow（（药水）箭）> [2|ii]`
* `<药水类型>` 需与药水名称匹配。
    * 与上文的物品类型与附魔 ID 相似，药水名称的判定在某些地方也会适当宽松。
    * 我们支持的药水种类可以在创造模式界面（见 [https://zh.minecraft.wiki/w/%E8%8D%AF%E6%B0%B4](https://zh.minecraft.wiki/w/%E8%8D%AF%E6%B0%B4)）中找到。不支持自定义药水与其他属性的物品。
    * Bukkit 原生药水效果名称（[https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionType.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionType.html)）与部分药水效果名称（[https://zh.minecraft.wiki/w/%E7%8A%B6%E6%80%81%E6%95%88%E6%9E%9C](https://zh.minecraft.wiki/w/%E7%8A%B6%E6%80%81%E6%95%88%E6%9E%9C)）都可被识别，但不公开支持。它们可能会在未来被移除。请尝试保持使用 Minecraft 的药水名称。例如，请使用 `healing` 而非 `instant heal` 或 `instant health`。
* 关键词 `splash`、`lingering` 与 `arrow` 用于分别不同的物品类型。如果没有出现这些词，则生成普通的药水。
* 关键词 `long`、`strong`、`2` 与 `ii` 用于指定药水的延时或强效变种。暂时没有既能延时又能强效的药水类型。也就是说，对于一种药水，只能使用其中一个关键词。
  但是，目前插件会无视额外添加的关键词。如果指定的药水效果不支持所选的关键词，则它也会被忽略。但这可能会在未来版本中发生改动，或变得更加严格。
* 每个关键词都只能出现至多一次，但是它可以填入的位置不止一个（上文的列表中一个关键词可以出现在多个位置）。
  但是，出于简化目的，判断不会将词语从属或顺序考虑进去，而是只检查对应关键词是否存在。这可能会在未来版本中发生改动，或变得更加严格。
* 上文其他没有被提到的词语均是可选的。

[^1]: 此处只能使用英文名，因此本维基对该部分的参数不作翻译。`<>` 表示必填参数（词），而 `[]` 表示可选参数（词）。
