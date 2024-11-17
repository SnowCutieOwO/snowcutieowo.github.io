# 💵 开箱收费
在 ExcellentCrates 中，除了钥匙以外，你还可以要求玩家在开启宝箱时支付一定量的货币。

::: info 提示
玩家不能在没有足够货币的情况下线打开宝箱，即便他们持有宝箱的对应钥匙。
:::

一个宝箱可以一次要求多种货币。阅读下文来获得可用货币的更多信息。

## 可用货币

插件支持使用下列货币：

经验值（内置，玩家的原版经验值）
经验等级（内置，玩家的原版经验等级）
硬币（内置，需要安装 [Vault](https://www.spigotmc.org/resources/34315/) 及任一支持 Vault 的经济插件）
[CoinsEngine](https://www.spigotmc.org/resources/84121/)（⭐推荐，且兼容 Vault！）

## 如何设置开箱收费

按下列步骤可将宝箱设置为收费开箱：

1. 输入命令 `/crate editor` -> Crates -> 选择你的宝箱；
2. 找到 `Open Cost（开箱收费）` 按钮；
3. 点击 `add cost（添加收费）`；
4. 聊天栏中会显示一系列可用的货币；
5. 点击选择你想使用的货币并输入数量，如 `money 50`；
6. 完成。你成功为你的宝箱加入了收费！

## 货币设置

对于某些货币，`config.yml` 下的 `Currency` 部分设置有额外内容可以进行调整。使用前可参考！

```YAML
Currency:
  xp:
    Enabled: true
    Name: XP
    Format: '%amount% %name%'
  levels:
    Enabled: true
    Name: XP Levels
    Format: '%amount% %name%'
  money:
    Enabled: true
    Name: Money
    Format: $%amount%
```

如果出于某些原因你需要知道货币 ID，插件启动时你可以在控制台中找到如下的文本：

```log
[ExcellentCrates] Registered currency: xp
[ExcellentCrates] Registered currency: levels
[ExcellentCrates] Registered currency: money
[ExcellentCrates] Registered currency: coinsengine_gems
[ExcellentCrates] Registered currency: coinsengine_coins
```