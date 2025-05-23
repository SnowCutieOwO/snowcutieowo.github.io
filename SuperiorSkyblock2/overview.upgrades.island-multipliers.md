# 岛屿翻倍卡

插件允许你通过升级系统修改不同的翻倍卡。

## 作物生长

作物生长翻倍卡会改变岛屿上的作物生长倍率。

为了解释作物生长相关机制，你首先要了解原版的相关内容。

因此，你必须先了解如下概念：

### 区块

区块（世界中 16x16 的区域）以选区的方式存储在世界文件夹中——每块 16x16x16 格方块。

### 刻

服务器通过刻进行运算，每刻至少 50 毫秒（即 20 刻为 1 秒）。

### 参与刻计算的方块

“刻/滴答”、“参与刻计算的方块/被滴答的方块”等说法在本章节中均指作物类方块。

服务器运行的每一刻都会遍历可参与刻计算的载入区块（即玩家目光所能看见的所有区块），并尝试让区块内的方块进行可计算。每个区块中，服务器会遍历方块并随机地挑选一些方块进行刻计算。服务器如何决定这个数字？这就是游戏规则 `randomTickSpeed` 的作用！它会选择每个区块内的随机方块（间隔由 `randomTickSpeed` 决定），并检查它们是否可以进行下一步刻计算，若可以，则进行。在游戏内的表现就是作物方块生长至下一阶段。

现在你已经理解了原版机制，让我们来看看插件如何处理翻倍卡。你大概能猜到，选择方块的过程相当随机，因此不可能获取作物生长的实际速率。但是，插件可以增加参与刻计算的方块。原版只让 `randomTickSpeed` 数量的方块参与刻计算，而插件则将这个数量改为了 $randomTickSpeed \times 作物生长倍率 \times 作物间隔$（乘以 `作物间隔` 的值是因为插件不会在每刻将所有方块纳入计算——但这可以配置）。

## 刷怪速率

刷怪速率翻倍卡会改变下一波怪物生成的时间。在本章节中，`波次` 指刷怪笼生成一波实体。这个操作可以在一或多个刻内完成，取决于实际情况。

在生成一波怪物之后，插件会等待几刻（实际为 5 刻），并缩短下一波刷怪笼的生成时间。这个延迟可以确保当前波次的怪物生成完毕，并使得修改后的延迟能被游戏正常应用。因为波次可以持续超过 1 刻，插件必须在修改延迟前确保波次完成生成怪物的任务。

插件通过获取当前延迟并除以岛屿刷怪翻倍卡的值达到修改延迟的目的。插件会在进行操作前确保刷怪笼的速率大于 1。除数（即便为偏小值）也会显著降低刷怪笼的延迟，并因此建议使用偏小的值（若可以建议使用小数）——生成过多实体会拖慢服务器。

## 实体掉落

实体掉落翻倍卡会修改岛屿上实体的掉落产出数量。

::: info 

翻倍卡只修改掉落物的数量，不会增加其他物品掉落的几率。

:::

在实体死亡后，插件会遍历其掉落的所有物品，并将其乘以掉落翻倍卡的值。若计算后的数量超出了物品的最大堆叠数，插件会生成一叠新的物品。

插件会确保实体不额外掉落装备（盔甲、手持物品、箱子的内容等）来防止刷物品漏洞的出现。