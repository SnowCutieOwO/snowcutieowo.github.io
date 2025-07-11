# 🔑 物品给予方法

本插件的物品给予方法分为两种。

## BUKKIT

给予玩家物品最稳定的方式，但购买超出堆叠上限的物品时还是会有一些小问题。

例如，你购买了 64 个末影珍珠，插件会将其堆叠在一个格子中。

在如下的图片中，第一个格子即为描述的问题。

![](images/image7.png)

## SMART - 早期测试

智能方法由 UltimateShop 自行提供，它会自动检测原版物品的最大堆叠数。在同一个示例中，这个方法会让物品分为四组，因为末影珍珠一组为 16 个。另外，这个方法还支持检测购买后背包是否会满。

这个方法会增加插件占用，因此大规模服务器或玩家较多的情况下会产生卡顿。

![](images/image8.png)

很难在不接触原版 NMS 的情况下尝试模仿原版机制，所以这个方法仍存在很多问题且仍在测试。