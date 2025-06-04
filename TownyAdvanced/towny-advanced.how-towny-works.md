# 运作方式

本页将会讲述 Towny 的运作方式，以及配置文本中的设置如何影响游戏体验，并指导你如何将 Towny 调整得更适合需求。

[[toc]]

- - -

## 层级

### 游民

游民是不属于任何城镇的玩家。他们没有任何土地，拥有的权限可以在 [townyperms.yml](reference.configs.townyperms-yml.md)。如果游民通过该设置拥有了 `towny.command.plot.claim` 权限，则他们可以购买[外交土地](#)。除此之外，游民还默认拥有 `towny.townless` 权限节点。

### 居民

每个加入服务器的玩家都可以成为城镇居民（默认权限下会通过 townyperms.yml 的游民部分设置获得 `towny.town.resident` 权限）。居民拥有自己的[命令](reference.commands.md)，即 `/resident`，输入后显示住所状态界面，会显示钱包余额、所在城镇、占领区域数及好友列表。居民可以加入城镇或自发设立。

加入城镇的居民可以认领镇长设置为出售状态的区域。当居民拥有至少一块区域时，住所界面会显示一行新文本，显示拥有的区域及分配至其拥有的所有（没有设置自定义权限的）地皮[权限](#)。

加入城镇居民的权限可以在 [townyperms.yml](reference.configs.townyperms-yml.md) 的 `towns.default` 部分编辑。

### 城镇 [^1]

城镇就是一些（或一位）居民选举出一位镇长所形成的。城镇拥有一个仅镇长可存取的金库。镇长也可以招募书记，拥有同等权利与地位。城镇可以每日向居民收取一定量的税。

城镇通常由核心地块向外扩散，核心地块即镇长所占领的区域。城镇地块需要相邻占领，除非镇长在郊区通过 `/t claim outpost` 设置了前哨站。城镇可以通过配置文件的 `global_town_settings.max_residents_per_town` 的选项设置最大居民数，默认不限制。服务器上的所有城镇可通过命令 `/town list` 浏览。

在 Towny 0.95.1.0 之后，可在城镇中存储元数据，见此[^2]了解更多。

在 Towny 0.99.6.0 之后，城镇可通过命令 `/t forsale [价格]` 出售，玩家可输入 `/t buytown [城镇名称]` 将其买下。另外可通过命令 `/t notforsale` 将其下架。

### 镇长

镇长及其书记管理着城镇和居民。镇长的权限可通过 [townyperms.yml](reference.configs.townyperms-yml.md) 编辑。

镇长可以决定居民的等级。可以是城镇助理或由管理员在 `townyperms.yml` 中创建的任意等级。玩家可以通过 `/town rank {add|remove} {玩家名称} {等级名称}` 设置等级。玩家只能被分配一个等级，使得管理员能创建多个城镇职位，如银行家、建筑师、邀请者，并为受信任的玩家分配这些等级。

镇长也可以决定向居民收取的[税收](#)类型及比率。

一个玩家不能同时管理两个以上的城镇，除非你是管理员。管理员可通过如下步骤管理多个城镇：

> 示例：管理员张三/如何创建 NPC 城镇。

> 张三想要设置一个归属于服务器的城镇以及他自己的城镇。他首先需要创建服务器城镇并设置税收、区域价格以及权限。这种城镇不应给予其他玩家居民、盟友或外来者权限。
>
> 张三可通过命令 `/ta town {城镇名称} toggle unlimitedclaims` 为城镇获取无限的区域。
>
> 当张三完成城镇设置之后，他可以通过命令 `/townyadmin set mayor {城镇名称} npc` 将指定 NPC 设置为服务器城镇的镇长。这通常足以保护大部分服务器的出生点。
>
> 张三通过命令 `/t leave` 离开城镇，并通过命令 ` /t new {城镇名称}` 创建了他自己的城镇。通过命令 `/townyadmin set mayor {城镇名称} npc`、`/t leave` 和 `/ta town {城镇名称} add {玩家名称}`，张三可以在城镇之间来回管理。
> 
> 张三无需离开城镇即可向服务器城镇添加居民！他可以使用命令 `/townyadmin town {城镇名称} add {玩家名称}` 强制向服务器城镇添加玩家，或在 [`config.yml`](reference.configs.config-yml.md) 中设置 `default_town_name: 'Server_Town'`。许多城镇设置可以通过命令 `/ta town {城镇名称}` 进行修改。
> 
> 张三也可以将 NPC 城镇通过 `/ta nation {国家名称} add {城镇名称}` 加入国家。
> 
> 作为管理员，张三还可以在不离开自己城镇的情况下通过命令 `/ta town new {城镇名称} npc` 创建 NPC 城镇。

在 Towny 0.95.1.0 之后，镇长能够为城镇内居民设置称号（前缀）及称谓（后缀）。可通过如下命令实现：

* `/town set title {玩家名称} 称号`
* `/town set surname {玩家名称} 称谓`

## 罪犯

在 Towny 0.90.0.0 之后，城镇（默认是镇长，但其他职位也可完成）能够设置罪犯列表。设置命令为 `/town outlaw [add/remove] [玩家名称]`，所需权限为 `towny.command.town.outlaw`。罪犯可以是任意玩家，无需属于某个城镇或国家。

如果新加入的罪犯为城镇的成员，他们会被踢出城镇。设置为开放（任意玩家可通过命令 `/town join` 加入）的城镇，都可以使用罪犯列表来防止这些玩家加入城镇。玩家成为罪犯后将不能重生在公开城镇。

进入城镇的罪犯会向所有居民显示警告标题消息。如果玩家在线时被判为罪犯，他们会在聊天栏收到消息。

罪犯如果在对应城镇死亡，可将其关入监狱。这需要将 Towny config.yml 下的 `jail.is_jailing_attacking_outlaws` 设置为 true。同时也需要击杀罪犯的玩家拥有 `towny.outlaw.jailer` 权限。另外城镇需要设立至少一个监狱区域。默认情况下只有镇长、书记与警长拥有 `towny.outlaw.jailer` 权限。

城镇居民可通过命令 `/town outlawlist` 浏览罪犯列表。任何人都可以通过命令 `/town outlawlist {城镇名称}` 浏览其他城镇的罪犯列表。

玩家可以通过命令 `/res outlawlist {玩家名称}` 查询对应玩家被哪些城镇列为罪犯。若不填则默认显示自己的罪犯状态。

在 Towny 0.96.4.0 后，你可以设置是否将罪犯在对应城镇禁足。当 Towny config.yml 下的 `allow_outlaws_to_enter_town` 被设置为 false 时，他们在进入城镇时会被传送走。另外 `outlaw_teleport_warmup` 选项则会决定传送过程发生的时间，若设置为 0 则罪犯在进入后会立即被传送。

## 国家

国家为（一或）多个城镇的集合，其中一个城镇作为其首都。首都的镇长即为国家领袖。国家可以参与战争事件，也可以与其他国家结盟。国家有自己的国库，也可以向城镇收税。

如果国家设置为“公开”，即任意非敌方玩家均可进入的状态，可以通过命令 `/nation spawn` 设置出生点。config.yml 中 `global_nation_settings.capital_spawn` 可决定出生点是否限制在首都范围内。

两个国家可结盟，使其下的玩家不会受到互相的伤害，帮助对方的区域（如果区域权限允许为盟友设置的话），并支援战争。在 0.91.0.0 之后，你可以限制双向结盟，即只有在两国互相将对方考虑为盟国后才能形成盟友关系。你可以在配置文件中 `war.disallow_one_way_alliance` 处进行设置，默认为 false。

另外，在 0.91.0.0 之后，你可以通过要求居民数量来限制能够创建、加入和维护国家的玩家。详见 [config.yml](reference.configs.config-yml.md) 的全局城镇部分设置。

在 0.93.0.0 之后，国家可以设置一个国家区，由成员城镇环绕。这可以在 [config.yml](reference.configs.config-yml.md) `global_nation_settings.nationzone.enable` 处启用。国家区域与普通郊区无异，但只有属于该国家的玩家才可以对其进行破坏。这可以防止临近城镇的其他国家破坏国内的土地。国家区域可以通过 [config.yml](reference.configs.config-yml.md) 中的国家等级扩大，而国家等级则受到人口数量的影响，你还可以让首都城镇拥有更大的国家区域范围。[config.yml](reference.configs.config-yml.md) 的 `global_nation_settings.nationzone.war_disables` 设置可以决定是否在战时停用国家区域功能。在 0.97.3.0 之后，镇长可以通过 `/t toggle nationzone` 命令关闭国家区域，管理员可以为城镇通过命令 `/ta town set nationzoneoverride #` 设置国家区域。

在 0.96.2.0 之后，你可以在 `global_town_settings.maximum_number_residents_without_nation` 处设置每个无国家城镇的居民上限。设置为大于零的数字时，城镇需要组成国家才可以招收更多玩家。

在 0.100.1.0 之后，你可以设置能够加入国家的城镇与首都的最大距离。见 [config.yml](reference.configs.config-yml.md) 全局国家设置的邻近部分设置。这里有选项可以决定每个城镇是否需要邻近首都，以及决定距离首都或其他城镇的最大距离（使得国家的领土形状能够变得更长），以及可选的在某城镇范围内时加入所需首都距离的硬上限。

在 0.100.1.0 之后，国家可以制裁城镇。这可以防止城镇通过 `/n join` 命令加入国家。这也可以防止玩家通过 `/n spawn [国家名称]` 进入公开国家区域。制裁城镇可通过命令 `/nation sanctiontown` 完成。

国家相较城镇拥有更多特权，使其更容易吸引玩家居住，这些特权包括：

* 城镇区域占领数量额外增加。
* 城镇维护费用降低。
* 环绕国家区域范围增加。
* 前哨站数量上限增加。

## 国家领袖

国家领袖引导国家，是首都城镇的镇长。领袖的权限节点可以在 [townyperms.yml](reference.configs.townyperms-yml.md) 中编辑。领袖可以决定国家内所有居民的等级。可以是国家书记或其他由管理员在 townyperms.yml 文件中添加的自定义等级。领袖可通过 `/nation ranklist` 命令浏览所有可用等级，通过 `/nation rank {add|remove} {玩家名称} {等级名称}` 设置玩家等级。一个玩家只能拥有一个等级，管理员可以创建更多细分的国家等级，如银行家、外交官等供国家领袖选择。

领袖有能力为玩家分配称号（前缀）与别称（后缀）。命令如下：

* `/nation set title {玩家名称} 称号内容`
* `/nation set surname {玩家名称} 别称内容`

如果输入命令时不填写前/后缀内容，则会重置玩家对应前/后缀。

## 配置镇长与国家领袖的称号、城镇及国家名称

Towny 允许你自定义镇长、国家领袖、城镇、首都城镇及国家的命名方式。对应 config.yml 中两部分设置。

## 配置 town_level 与 nation_level

### town_level:

* townLevel 的基础格式如下所示：

``` YAML
  - numResidents: 1
    namePrefix: ''
    namePostfix: ' (定居点)'
    mayorPrefix: '隐士 '
    mayorPostfix: ''
    townBlockBuyBonusLimit: 0
    townBlockLimit: 16
    upkeepModifier: 1.0
    townOutpostLimit: 0
    debtCapModifier: 1.0
    peacefulCostMultiplier: 1.0
    bankCapModifier: 1.0
    resourceProductionModifier: 1.0
    townBlockTypeLimits:
    - shop: 2
    - arena: 2

  - numResidents: 2
    namePrefix: ''
    namePostfix: ' (小村)'
    mayorPrefix: '村长 '
    mayorPostfix: ''
    townBlockBuyBonusLimit: 0
    townBlockLimit: 32
    upkeepModifier: 1.0
    townOutpostLimit: 1
    debtCapModifier: 1.0
    peacefulCostMultiplier: 1.0
    bankCapModifier: 1.0
    resourceProductionModifier: 1.0
    townBlockTypeLimits:
    - shop: 5
    - arena: 4
```

各个参数如下表所示：

|变量|描述|
|---|---|
|`numresidents: 1`|到达该城镇等级所需玩家数量。|
|`namePrefix: ''`|城镇名称前缀。|
|`namePostfix: '(定居者)'`|城镇名称后缀。|
|`mayorPrefix: '隐士 '`|镇长名称前缀。|
|`mayorPostfix: ''`|镇长名称后缀。|
|`townBlockBuyBonusLimit: 0`|城镇可通过命令 `/town buy` 额外购买的最大区域数量。<br>需要 [config.yml](reference.configs.md) 下的 `town.max_purchased_blocks_uses_town_levels` 权限设置为 true。|
|`townBlockLimit: 16`|覆盖 `town_block_ratio` 设置项，决定城镇拥有多少地块。<br>需要将 [config.yml](reference.configs.md) 中 `town_block_ratio` 设置为 `0`。|
|`upkeepModifier: 1.0`|填入更高的值可在城镇居民规模增加时收取更多维护费用。<br>不影响 `town_plotbased_upkeep: true` 状态的设置服务器，因为其基于区域数量而非居民数量，*除非*你同时设置了 `town_plotbased_upkeep_affected_by_town_level_modifier: true`。|
|`townOutpostLimit: 1`|城镇可设置的前哨站数量。<br>需要将 [config.yml](reference.configs.md) 的 `limit_outposts_using_town_and_nation_levels` 设置为 true。|
|`debtCapModifier: 1.0`|当 [config.yml](reference.configs.md) 中的 `debt_cap_uses_town_levels` 设置为 true 时，`debt_cap.override` 将会乘以 town_level 的 `debtCapModifier` 值。（示例：debtCapModifier 为 3.0，debt_cap.override 为 1000.0 时，债务上限为 $3.0 \times 1000 = 3000$。）|
|`peacefulCostMultiplier: 1.0`|城镇保持中立的维持费用，受城镇居民数量影响，另外还要乘以 [config.yml](reference.configs.md) 下 `economy.price_town_neutrality` 的值。|
|`resourceProductionModifier: 1.0`|决定 TownyResources 插件每日获取的资源数量。|
|`bankCapModifier: 1.0`|城镇金库的储量上限，受城镇居民数量影响，另外还要乘以 [config.yml](reference.configs.md) 下 `economy.banks.town_bank_cap` 的值。|
|`townBlockTypeLimits`|可选列表。用于限制[每种区域](#)的数量。列表可为空 `[]` 或填入任何类型的区域。|

* 上述示例的两个等级分别为拥有 1 位和 2 位居民的城镇设置。城镇创建之初，城镇名称的末尾就会带上“（定居点）”后缀，镇长则会获得“隐士”的前缀。当城镇拥有第二位居民时，则会变为“城镇名称（小村）”，他的前缀则会变为“村长”。

### nation_level:

* nationLevel 的基础格式如下所示：

``` YAML
        -   numResidents: 10
            capitalPrefix: ''
            capitalPostfix: ''
            namePrefix: '联邦'
            namePostfix: ' (国家)'
            kingPrefix: '伯爵 '
            kingPostfix: ''
            townBlockLimitBonus: 10
            upkeepModifier: 1.0
            nationTownUpkeepModifier: 1.0
            nationZonesSize: 1
            nationBonusOutpostLimit: 2
            peacefulCostMultiplier: 1.0
            bankCapModifier: 1.0

        -   numResidents: 20
            capitalPrefix: ''
            capitalPostfix: ''
            namePrefix: '领土 '
            namePostfix: ' (国家)'
            kingPrefix: '公爵 '
            kingPostfix: ''
            townBlockLimitBonus: 20
            upkeepModifier: 1.0
            nationTownUpkeepModifier: 1.0
            nationZonesSize: 2
            nationBonusOutpostLimit: 3
            peacefulCostMultiplier: 1.0
            bankCapModifier: 1.0
```

各个参数如下表所示：

|变量|描述|
|---|---|
|`numResidents: 10`|到达该等级所需居民数量。<br>**注意：** 如果在 [config.yml](reference.configs.md) 中启用了 `global_nation_settings.nation_level_is_determined_by_town_count_instead_of_resident_count`设置，则此项为城镇数量而非居民总数。|
|`capitalPrefix: ''`|国家首都名称的前缀。|
|`capitolPostfix: ''`|国家首都名称的后缀。|
|`namePrefix: '联邦 '`|国家名称的前缀。|
|`namePostfix: ' (国家)'`|国家名称的后缀。|
|`kingPrefix: '伯爵 '`|国家领袖的前缀。|
|`kingPostfix: ''`|国家领袖的后缀。|
|`townBlockLimitBonus: 10`|加入国家后的城镇额外获得的占地上限。|
|`upkeepModifier: 1.0`|填入更高的值可增加国家居民数量增加后的维持费用（除非将 `town_plotbased_upkeep` 设置为 `true`，这样会使得其依赖占地数量而非玩家数量判断）。|
|`nationTownUpkeepModifier: 1.0`|加入国家会降低/提升城镇的维护费用。这个修饰符的计算顺序后于其他修饰符。设置为 1.0 时，维护费用不会变化。|
|`nationZonesSize: 2`|环绕城镇附近的国家区域大小。|
|`nationBonusOutpostLimit: 2`|城镇额外增加的前哨站数量上限。|
|`peacefulCostMultiplier: 1.0`|国家保持中立的维持费用，受国家居民数量影响，另外还要乘以 [config.yml](reference.configs.md) 下 `economy.price_nation_neutrality` 的值。|
|`bankCapModifier: 1.0`|国家金库的储量上限，受国家居民数量影响，另外还要乘以 [config.yml](reference.configs.md) 下 `economy.banks.town_bank_cap` 的值。|

## 城镇扩张

### 建立城镇

镇长可通过命令 `/town new {城镇名称}` 建立新的城镇。这需要收取一定量的金钱，具体数值则在配置文本的 `price_new_town` 中。

创建者所在区域则会成为城镇的核心地块，即该城镇所有居民重生后的位置。镇长可通过命令 `/t set spawn` 重设区域内的出生点。核心地块可通过命令 `/t set homeblock` 移动到城镇区域的其他位置。

可通过命令 `/town claim` 占领区域。这些区域需要与已占领区相邻，除非其为[前哨站](#)。

在 Towny 0.100.2.0 之后，能够给予新创建的城镇一些地块奖励。可通过 [config.yml](reference.configs.md) 的 `claiming.new_town_bonus_claims` 设置修改。

### 加入城镇

加入城镇的方式有两种，被镇长或镇书记邀请，或者加入公开城镇。

镇长与镇书记可以通过命令 `/town add {玩家名称}` 将玩家加入城镇。玩家会收到请求，此时可输入 `/accept` 或 `/deny` 同意或拒绝。

镇长可通过命令 `/town toggle open` 将城镇设置为对外开放。不属于任何城镇的玩家可以通过命令 `/town join {城镇名称}` 加入这些开放城镇。开放城镇可以通过命令 `/town list by open` 浏览、

在居民加入城镇后，可供镇长占领的地块数量上限会相应增加。

## 土地系统相关

### 城镇地块

Towny 提供了一种玩家自行使用的方块保护系统。方块保护将世界分为一块块区域，称之为城镇地块，默认 16x16xN（N 为世界最大高度）。将这些区域看做网格，相互对其且没有间距，大小相同。城镇地块由镇长占领，而他则可以将占领的区域分发或出售给居民。

在 Towny 0.95.1.0 后，可在城镇地块上赋予元数据，见此了解更多。

#### 城镇地块大小

你可以在 [config.yml](reference.configs.md) 的 `town_block_size` 处修改城镇地块的大小。只建议在首次安装 Towny 时修改配置。在已有数据后进入世界则会导致占领区域出现偏移。使用更小的值会需要更高的精确度，使得占领更加麻烦。另外，更小的值会导致 Towny 自带的缓存系统毫无用处（因此不推荐将其设置为小于 4 的值）。每格大小均为 `town_block_size` x `town_block_size` x N，N 为世界最大高度。

#### 认领城镇地块

##### 城镇认领

城镇居民可以在拥有权限的情况下认领城镇内的地块。默认情况下只有镇长与镇书记可以做到。玩家可通过命令 `/town claim` 或 `/town claim #` 或 `/town claim rect|circle #|auto` 或 `/town claim auto` 自行认城镇地块。为了一次认领多个地块，你需要给予镇长 `towny.command.town.claim.town.multiple` 权限。

|命令|描述|
|---|---|
|`/town claim`|认领玩家脚下所处的地块。|
|`/town claim #`|以玩家为中心，认领给定半径内的方形区域，会对值向下取整以贴合实际形状。|
|`/town claim rect #`|以玩家为中心，认领给定半径内的方形区域，会对值向下取整以贴合实际形状。|
|`/town claim rect auto`|以玩家为中心，认领玩家可领取的最大方形区域。|
|`/town claim circle #`|以玩家为中心，认领给定半径内的圆形区域，会对值向下取整以贴合实际形状。|
|`/town claim circle auto`|以玩家为中心，认领玩家可领取的最大圆形区域。|
|`/town claim auto`|以玩家为中心，认领玩家可领取的最大方形区域。|
|`/town claim fill`|填充认领由地块环绕的区域。在形成有效封闭图形前不会触发。|

输入 `/town` 命令会列出剩余可认领地块数。

在 0.95.0.0 之后，你可以通过 `economy.new_expand.price_claim_townblock_refund` 设置决定解除占领地块的退款数量。不推荐将其设置为高于认领区块的价格。在 0.98.0.0 之后，你可以将其设置为负数，使得玩家在解除认领时会被收取费用。

在 0.95.0.0 之后，你可以通过 `economy.new_expand.price_claim_townblock_increase` 设置决定占领地块后的增加价格。当设置为 1 时表示不启用。1.3 表示每次认领后，下一个地块的价格会增加 30%。价格增加状态可以在 `/towny prices` 的信息中浏览。

在 0.96.3.0 之后，你可以通过 [config.yml](reference.configs.md) 的 `economy.new_expand.max_price_claim_townblock` 设置决定 `economy.new_expand.price_claim_townblock_increase` 增加的最大价格。

在 0.99.0.0 之后，你可以强制城镇以不同形状占领其地块。[config.yml](reference.configs.md) 中的 `claiming.min_adjacent_blocks` 表示城镇待占领的地块与已占领地块相邻边的最少条数。默认将其设置为 -1，即表示禁用，但设置为 2 或 3 时可防止城镇的占地变为一条直线。

在 0.100.1.0 之后，你可以防止城镇在海洋等无人生物群系中占领区域。[config.yml](reference.configs.md) 下的占领部分配置的群系规则部分可以找到这两个选项。不允许玩家占领包含过多无人生物群系或海洋的区域。通过这个功能，你可以禁止玩家占领海洋、河流、不可占领的山脉，使得地图能保留独特的景观。

#### 个人（玩家）占领

当城镇通过命令 `/town claim` 占领地块时，镇长可通过命令 `/plot fs {可选价格}` 将地块/地皮设置为待售状态。在上架后，居民可通过 `/plot claim` 认领地块。相似地，可通过 `/plot unclaim` 命令解除认领。

### 转让土地

在 Towny 0.100.2.0 之后，玩家可自愿将土地给予其他城镇，通过命令 `/town cede plot [城镇名称]` 完成。为了让城镇能转让土地，拥有土地的城镇必须能在土地被解除占领时通过命令 `/t claim` 认领它。这表示对方城镇必须有足够的剩余地块数用于占领转让的土地，且占领区域的相邻状态等内容也必须符合规则。在输入命令 `/t cede plot [城镇名称]` 之后，玩家必须再输入一次命令确认操作，且对方镇长必须在线才可接受地皮给予请求。

### 城镇拥有地块数量设置

你可以修改城镇认领地块的最大数量。这在配置里有两个地方。Towny 会先检查 [config.yml](reference.configs.md) 的 `town_block_ratio` 设置，默认值为 8，即每位居民默认可占领 8 个地块。你可以将其设置为 `town_block_ratio: 0` 并使用 [config.yml](reference.configs.md) 中 `town_level` 部分的配置。更多有关 town_level 及其配置教程的信息可以点击[这里](#town_level)浏览。设置 `town.town_block_limit` 决定了城镇可拥有的地块总数，设置小于 0 时不生效。

在 Towny 0.98.0.0 之后，城镇可以占领数量不限的地块。这可以通过将配置文本的 `town_block_ratio` 设置为 -1（影响所有城镇），或通过命令 `/ta town {城镇名称} toggle unlimitedclaims` 完成（只影响指定城镇）。

[^1]: 原文插入的视频暂时不在此显示。

[^2]: 原文链接指向不存在的页面。