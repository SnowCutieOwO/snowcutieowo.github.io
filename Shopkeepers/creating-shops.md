# 创建商店

本插件支持不同类型的管理员与玩家商店，它们在交易与设置方式上各有不同。

本插件还支持不同种类的方块，可以决定商店在世界内的显示样式。

## 商店类型

默认可用的**管理员商店类型**：目前只有**管理员商店**一种。

默认可用的**玩家商店类型**：**出售（selling）**、**购买（buying）**、**交易（trading）**、**复印（book）**。

每种商店的设置方法略有不同。详见[设置管理员商店](creating-shops.admin-shop-setup.md)和[设置玩家商店](creating-shops.setup-player-shop.md)章节。

若要创建指定类型的商店，玩家首先需要拥有创建它们的权限。详见[权限列表](installtion-updating.permissions.md)章节。但是，一般情况下几乎不需要手动配置权限：非 OP 玩家默认可以创建所有类型的商店。但若要创建玩家商店，他们还需要拥有商店创建物品（`shop-creation-item`）（见[设置玩家商店](creating-shops.setup-player-shop.md)章节）。

## 物体类型

物体类型为商店在世界中的显示形式，例如默认的村民实体。

默认可用的物体类型为：**告示牌（sign）**、**贴在墙上的告示牌（hanging-sign）**、**NPC**（如 **Citizens 插件**提供的），或是支持且在配置中启用的所有**实体的名称**。

两种告示牌的使用方式与实体商店大致相似。唯一不同的是生成商店时会生成一个告示牌而不是实体。

每种物体类型都有对应的创建权限节点。详见[权限列表](installtion-updating.permissions.md)章节。默认情况下，玩家可以设置所有实体类型，也能设置两种告示牌。

另外，每种物体类型均可在配置文件中强制禁用。详见[配置文本](installtion-updating.configuration.md)章节。部分物体可能默认禁用。

## 可用实体类型

理论上每种实体都可用于本插件的交易。**但是**，不是所有实体类型都会正常运作：有些行为可能奇怪但无害，而另一些则会让你的服务器或存档损坏。

因此，只有小部分经过测试的实体默认启用。

若你想要尝试（**后果自负**）让某种实体用于交易，你需要在[配置文本](installtion-updating.configuration.md)中手动启用。你可以在 [Spigot 文档](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)中找到所有可用的实体类型（注意：此列表包含了所有服务器已知的实体，但本插件目前只能使用生物类实体）。

另外，这些实体也需要玩家拥有对应的权限才可使用：`shopkeeper.entity.<实体类型>`（或 `shiopkeeper.entity.*`，表示能够使用启用的所有实体）。示例：`shopkeeper.entity.villager`。

默认情况下，玩家有权限使用所有启用的实体（即拥有权限 `shopkeeper.entity.*`）。

每个用于本插件实体的 AI 均会被覆写，使得它们固定在原地且无法受到伤害。它也会让实体在偏离原位时几秒后传送或重生回去。

若你想要使用其他类型的实体，试试看我们与 Citizens 插件联动的内容！你可以在[这里](creating-shops.citizens-shopkeepers.md)找到更多有关信息。

## 创建管理员商店

管理员商店拥有不限量的库存，且没有物品交易限制。

若要创建管理员商店，只需在看向（非箱子类）方块时输入命令 `/shopkeeper [物体类型]` 即可。这之后，一个商店就会在当前看向的方块位置上生成。

若要编辑商店与其中的交易，详见[编辑商店](creating-shops.editing-shops.md)与[设置管理员商店](creating-shops.admin-shop-setup.md)。

## 创建玩家商店

玩家商店会从指定箱子中获取库存。

### 商店创建物品

若要创建一个玩家商店，你需要拿着商店创建物品（**`shop-creation-item`**），默认情况下是**名称为 `&aShopkeeper` 的村民刷怪蛋**（详见[配置](installtion-updating.configuration.md)）。

作为管理员，你可以通过命令 `/shopkeeper give` 获取创建物品。若你想要其他玩家能够创建自己的商店，你就需要自行设置获取该物品的方式。最直接的方法就是在诸如主城的地方设置一个管理员商店，然后向玩家出售商店创建物品。也可以将商店创建物品作为实体的掉落物，或是将其修改为原版可获取的某个物品。

不建议直接给予玩家 `/shopkeeper give` 命令的权限，因为它一般仅供管理员使用（类似原版的 `give` 命令），且很难防止玩家对其的滥用。

### 通过商店创建物品创建玩家商店

在手中拿着商店创建物品后，它会在聊天栏显示创建商店的步骤。

首先，确保你**没有看向任何方块**。例如对着天上右键，即可在不同的**商店类型**之间切换（出售、收购、交易、复印）。你也可以按 Shift+右键来切换生成的实体种类（村民、告示牌、女巫等）。

之后，**右键点击箱子**（或者其他支持的容器）来**选中**它，然后**右键点击其他方块**将**交易商店放置**在该位置。

若要编辑新创建的商店，见[编辑商店](creating-shops.editing-shops.md)和[设置玩家商店](creating-shops.setup-player-shop.md)章节。

### 通过命令创建玩家商店

若在[配置文本](installtion-updating.configuration.md)中（设置项 `create-player-shop-with-command`，默认禁用）启用，你也可以使用命令 `/shopkeeper [商店类型] [物体类型]` 在**看向箱子时**创建玩家商店。这会让交易商店生成在箱子的一侧。

若你在执行此命令时看向了非箱子类方块（或者其他支持的容器），且你没有指定商店类型，则插件会为你创建一个管理员商店。

`[商店类型]` 与 `[物体类型]` 是可选参数。若未指定，则生成的交易商店会取决于你的选择（通过右键在商店创建物品切换的商店类型），或者默认值。