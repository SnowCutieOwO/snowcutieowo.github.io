# 💻 虚拟宝箱与钥匙

在本插件中，你可以创建虚拟宝箱与钥匙。你也可以相互绑定这些宝箱与钥匙，完全不限制！

虚拟宝箱可以使用实体或者虚拟钥匙，反之亦然。你甚至可以允许宝箱接受虚拟和实体钥匙<font color="red">（玩家只需其中的一种即可开启宝箱）</font>！

## 创建虚拟钥匙

若要创建一把虚拟钥匙，请按如下步骤进行操作：

1. 输入命令 `/crate editor` -> 钥匙 -> 创建新钥匙；
2. 输入不重复的钥匙 ID；
3. 新的钥匙会出现在界面中，点击它；
4. 找到并点击 `Virtual（虚拟化）`按钮。这时插件应该会提醒该功能已启用；
5. 钥匙现在是虚拟的了！

在钥匙变为虚拟钥匙后，你可以注意到编辑器中的 `Key Item（钥匙物品）` 按钮消失了。这是正常现象，因为虚拟钥匙本身不应以实体物品的形式出现在玩家背包中。

## 创建虚拟宝箱

与钥匙不同，宝箱没有什么明显的方法来将其设置为虚拟。但是，这里有一个叫做 `/menu/` 的文件夹，你可以通过自行设置将其设置为虚拟宝箱并展示给玩家，这样他们就可以与虚拟宝箱进行交互。

> [!INFO|label:提示]
> 不要将你的虚拟宝箱给予玩家，或是将它们放在世界的任何位置。

> [!INFO|label:提示]
> 用于与虚拟宝箱交互（开启、预览奖品）的点击与 `config.yml` -> Click -> Click_Actions 设置的相同。

在 `/menu/` 文件夹中你会看见一个 `default.yml` 配置文件。这是一份示例界面配置，你可以用作参考或基于其修改为你想要的样子。

> [!INFO|label:提示]
> 你可随意创建配置用于虚拟宝箱菜单。只需复制已有的文件，重命名并按需求修改即可！

菜单配置包含了一些你设置为虚拟宝箱的重要设置项：

Crate -> Name（名称）- 此为该菜单中所有虚拟宝箱的名称模板。你可以在这里使用[宝箱变量](utility.placeholders.md#宝箱变量)。
Crate -> Lore（描述）- 此为该菜单中所有虚拟宝箱的描述模板。你可以在这里使用[宝箱变量](utility.placeholders.md#宝箱变量)。
Crate -> Slots（格子）- 这是让虚拟宝箱出现在菜单中<font color="red">最重要的</font>设置。在这里为你的虚拟宝箱填入 ID 与格子序号，它们便会出现在对应位置。宝箱 ID 与宝箱配置文件名<font color="red">（去掉 .yml 后缀名）</font>相同。

> [!NOTE|label:提示]
> 菜单中的虚拟宝箱与你在编辑器中设置的宝箱物品相同。

配置文件看起来应该像这样：

```YAML
Crate:
  Name: '%crate_name%'
  Lore:
  - <light_gray>You have <light_yellow>%keys%</light_yellow> keys.</light_gray>
  - ''
  - <light_gray><light_yellow>[▶]</light_yellow> Left-Click to <light_yellow>preview</light_yellow>.</light_gray>
  - <light_gray><light_yellow>[▶]</light_yellow> Right-Click to <light_yellow>open</light_yellow>.</light_gray>
  Slots:
    gold_crate: 11 # Golden Crate at 11 slot
    emerald_crate: 13 # Emerald Crate at 13 slot
    diamond_crate: 15 # Diamond Crate at 15 slot
```