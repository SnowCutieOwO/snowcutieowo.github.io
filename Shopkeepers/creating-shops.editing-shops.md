# 编辑商店

在[创建商店](creating-shops.md)（管理员或玩家商店）后，你可以通过多种方式来自定义你的商店，或者将其删除。本章节描述了编辑商店的大致方法，并介绍了大部分商店都可使用的操作。

## 打开商店“编辑界面”

蹲下右键本插件的商店即可打开“编辑界面”。这个界面有点像大型箱子，但有一些特殊的图标。这些就是操作按钮，可以对商店进行修改。

*管理员商店编辑界面的示例（无交易情况下）*：

### 重命名商店

若要设置商店名称，点击命名牌并在聊天栏中输入商店的名称。

新名称会按[配置文件](installtion-updating.configuration.md)中的 `name-regex` 内容过滤：这个正则表达式指定了允许在名称中出现的字符，以及名称的长短。

若需要，管理员可以通过将 `§` 与 `&` 添加至 `name-regex` 中，使得商店可以使用基于这些符号的[彩色代码](https://zh.minecraft.wiki/w/%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81)。例如 `&c名称` 将会显示为红色的 `名称`。

你也可以使用 HEX 彩色字，格式可以是 Bukkit 原生（`&x&a&a&b&b&c&c`），也可以是更紧凑的 HEX 格式（`&#aabbcc`）。内部上，因为 Spigot 只在某些情况下支持 Bukkit 内置的格式，任何用户指定的紧凑式 HEX 彩色代码都会自动转化为 Bukkit 原生格式后再显示在插件的商店名称上。

需要注意的是，颜色格式代码也会算进名称长度中。

### 修改商店样式

一些用作商店的实体可能有多个类型，可以在编辑界面中选择。例如，村民可以在界面中点击对应的按钮切换职业与所在的生物群系。

### 移动商店

若要将商店移动到其他位置，点击界面内的末影珍珠。编辑器会自动关闭，之后你可以通过右键点击目标位置来将商店移动至此。左键点击即可撤销操作。

当右键点击方块放置商店后，插件会阻止部分方块的交互行为，例如门、活板门、栅栏门。按钮与拉杆等。其他类型的可交互方块（如工作台、箱子、告示牌等）的交互行为不会被阻止，以此确保这些方块不会与插件的商店重叠（有些方块可能会被其他插件使用，比如命令告示牌右键执行命令）。

商店只会在右键点击的位置有效时成功移动，这取决于商店实体类型。相同的放置限制会在创建商店时同样生效：例如，玩家只能在被指定为货架的容器一定范围内创建商店。

玩家移动商店的行为可以在配置文本中 `enable-moving-of-player-shops` 调整。

移动商店时也可进行旋转，这点在首次创建时就能看到：放置的商店村民会转过来看着你。但是，目前并不支持“原地”旋转商店，你还是要将它移动到其他位置，再移回来以旋转视角。

当告示牌交易在配置文本中启用时，商店移动后会根据你点击方块的情况改为贴壁或直立的告示牌。

### 修改实体装备

可以通过编辑装备的方式修改商店的外观。

默认情况下，编辑选项只在部分已知实体上可用。如果某个实体不会被装备影响外观，则编辑菜单中会省去此编辑项。

如果实体提供了对应的装备格子（如马的马铠、羊驼的地毯），则我们也会在编辑器中将其隐藏。

管理员可以启用设置 `enable-all-editor-slots`（默认值：`false`）来让所有实体允许使用所有装备槽，而无视实体实际支持显示哪些槽位。这可以用于测试目的。如果某些装备槽提供了对应的编辑选项，那么编辑界面中的非空槽位都会优先显示。

额外提示：

* 尚无 [Citizens NPC](creating-shops.citizens-shopkeepers.md) 商店的装备编辑选项。
* 也可以使用[变量物品](creating-shops.placeholder-items.md)来为实体装备物品栏中没有的物品。
* 卫道士：默认情况下，卫道士不支持主手槽位，因为它们只会在追逐目标时露出主手，而本插件没有办法让其保持该状态。
* 在白天会着火的实体（僵尸、骷髅及它们的变种）：为了减轻插件负担，我们会为这些实体装备一个隐形头盔。若在编辑界面中为其装备头盔，则新物品会将这个默认的物品替换。若配置的物品会损失耐久，插件会自动将其改为不可破坏以防止阳光将其耐久耗尽。
* 末影人：你可以将方块放置在主手栏来修改末影人手中拿着的方块类型。
    * 只有带有指定方块形态的物品才可以被末影人拿起。
    * 你也可以使用[变量物品](creating-shops.placeholder-items.md)来指定方块类型。这也允许你使用那些不存在物品形式的方块（如花盆）。
    * 任何方块上的状态数据（`BlockStateTag`/`block_state` 组件）会被应用至手持的方块。若装备的物品为变量物品，任何包含的方块状态数据都会替换对应的方块类型。
    * 部分方块不支持渲染（如玩家头颅，告示牌等）。

### 删除商店

若要删除商店，你可以点击右下角的骨头物品。请谨慎操作，它不可撤销！

## 设置交易

每种商店类型的交易方式略有不同。更多信息可以在[设置管理员商店](creating-shops.admin-shop-setup.md)和[设置玩家商店](creating-shops.setup-player-shop.md)章节详细了解。