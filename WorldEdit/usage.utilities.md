# 实用工具

WorldEdit 提供了一系列的实用工具。可以代替有多个选区或命令时需要做到的重复工作。下面的所有命令都会基于你的“放置位置”进行操作。默认情况下，这个位置是你所在的位置，但它也可以通过 `/toggleplace` 命令切换。

[[toc]]

## 编辑邻近方块

有些时候你可能需要替换附近的一些方块，且不使用选区——这时候你就需要用到你身边的区域

移除上下附近的方块：
```
/removeabove <大小> [高度]
/removebelow <大小> [深度]
```
这两个命令允许你快速移除头顶或脚下的方块。例如玩家可以通过使用这个命令到达高处。“大小”参数即为移除方块的操作半径，这个立方体的边长为 `(size - 1) * 2 + 1`。这个立方体的中心为你所站着的方块的上方一格。若你没有指定“高度”或“深度”参数，则命令将会范围拓展到全世界。

移除附近的方块：
```
/removenear <蒙版> <大小>
```
该命令移除附近区域内指定种类的方块。“大小”参数即为移除方块的操作半径，这个立方体的边长为 `(size - 1) * 2 + 1`。这个立方体的中心为你所站着的方块的上方一格。

替换附近的方块：
```
/replacenear <大小> <蒙版> <方块>
```
如果你需要快速替换附近方块的话，这个快捷命令就是你的最佳选择。“大小”参数即为替换方块的操作半径，这个立方体的边长为 `(size - 1) * 2 + 1`。这个立方体的中心为你所站着的方块的上方一格。

## 填坑

```
//fill <方块> <半径> [深度]
```

填充命令会以你的“放置位置”为中心，向外向下将空气方块填充为命令中指定的方块。需要注意的是它只会从开始检测的那一层向下延伸而不会向上，因此它可以填充一个水池但不可以填充洞穴（洞穴结构往下的时候是朝外的，会慢慢延伸到命令能操作的范围之外）

填充命令不会向上填充其所在的操作区域。

![](https://worldedit.enginehub.org/en/latest/_images/fill_pond.png)

一个通过 `//fill` 命令填充的不规则形状水池。在本图的示例中你不需要将空气替换成水（通过命令 `/replace`），因为这片不规则的水池很难使用长方体区域进行圈定操作。

### 连锁填充

```
//fillr <图案> <半径>
```

与填充命令不同的是，连锁填充*可以*在向下填充的同时向外填充，这意味着你可以使用这条命令填充洞穴，或者其他延伸进墙壁的洞穴。

与填充命令相同的是，它不会对 Y 轴高于操作位置的区域进行填充。

## 排水

```
//drain [-w] <半径>
```

排水命令可以将一池的水或岩浆清空。它只会清空与起始位置的流体方块与直接相邻或通过其他流体方块间接相邻的流体方块，所以它不会抽干那些不相连但在操作范围内的池子。

将标志 `-w` 加入命令会排出含水方块中的水。

::: info 
一些方块，例如海带和海草，虽然它们看起来像是包含了水方块，但实际上并没有处于干燥的状态。如果你正在尝试抽干包含这些方块的河流或者海洋，请先使用 `//removenear`（上文有解释）命令移除这些方块。
:::

## 水流矫正

```
/fixwater <半径>
/fixlava <半径>
```

该命令将会把“流动”的岩浆和水替换成“静止”的岩浆和水。这条命令在清除因方块破坏或水桶放出导致的水流动方面很有用。需要注意的是自 Mojang 最近对水流机制作出修改之后，这条命令便越来越不重要。

## 覆雪

```
/snow <半径>
```

将一片区域都盖上雪！这条命令使用的算法允许你只把那些能够覆雪的方块覆雪（例如，它会忽略火把，使其不被覆雪）。如果某块区域上空被某些东西覆盖（例如自然生成的浮空岛），雪不会在其上覆盖。原版中的“降雪”才是垂直覆盖的。

::: info
覆雪命令现在还不能让雪片层层叠加。
:::

![](https://worldedit.enginehub.org/en/latest/_images/snow.jpg)    
覆雪命令改变地形的示例

## 融雪

```
/thaw <半径>
```

该命令与上文的 `/snow` 命令完全不同，它会将暴露区域中的冰雪都移除。

## 绿化

```
/green [-f] <半径>
```

绿化指定范围内的土地！该命令会向外水平扩张地将泥土替换为草方块。

在命令中添加 `-f` 参数可将砂土也替换为草方块。

## 灭火

```
/ex [半径]
```

这是命令 `/removenear fire <半径>` 的快捷方式，允许你快速灭掉附近的火。

## 清除生物

```
/butcher [-pngabtfl] [半径]
```

该命令会移除附近的实体。如果你不在命令中指定半径参数，整个世界的载入区域中的实体都会被移除。这些被移除的实体不会掉落任何物品。需要注意的是，如果你没有手段阻止生物重新生成，被清除的实体很快就会再次出现。

**清除命令标志**
|标志|描述|
|---|---|
|`-p`|击杀驯服的宠物|
|`-n`|击杀 NPC|
|`-g`|击杀傀儡|
|`-a`|击杀动物|
|`-b`|击杀环境实体|
|`-t`|击杀命名实体|
|`-f`|上述所有实体|
|`-r`|击杀盔甲架|