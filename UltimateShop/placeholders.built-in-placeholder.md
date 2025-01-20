# 🔧 内置变量

## 内置变量列表

|变量名称|显示信息|使用位置|
|---|---|---|
|`{shop}`|显示商店 ID（文件名称）。|消息文件<br>动作|
|`{shop-name}`|显示商店的显示名称。|商店菜单<br>动作|
|`{shop-menu}`|显示商店的菜单 ID。|动作|
|`{product}`|显示商品 ID。|消息文件|
|`{amount}`|显示购买或出售的物品数量。|消息文件<br>动作<br>价格的 `placeholder` 选项|
|`{status}`|显示价格与基础价格相比较高还是较低。仅适用于动态定价。|价格的 `placeholder` 选项|
|`{item}`|显示购买的物品名称。|消息文件|
|`{menu}`|显示商店 ID。|消息文件|
|`{price}`|显示购买/出售价格。|消息文件|
|`{limit}`|显示购买/出售限制。|消息文件|
|`{times}`|显示购买/出售次数。|消息文件|
|`{refresh}`|显示商品重置时间点或剩余重置时间。|消息文件|
|`{buy-price}`|商品的购买价格。|物品附加描述<br>PlaceholderAPI 支持|
|`{sell-price}`|商品的出售价格。|物品附加描述<br>PlaceholderAPI 支持|
|`{buy-times-player}`|玩家个人购买次数。|物品附加描述<br>PlaceholderAPI 支持<br>`amount` 选项|
|`{buy-limit-player}`|玩家个人购买限制。|物品附加描述<br>PlaceholderAPI 支持|
|`{buy-refresh-player}`|玩家个人重置时间。|物品附加描述<br>PlaceholderAPI 支持|
|`{buy-cooldown-player}`|玩家个人冷却时间。|物品附加描述<br>PlaceholderAPI 支持|
|`{sell-xxx}`|xxx 处的内容与上文的 buy 相似，代表回收。例如 `{sell-limit-player}` 代表玩家个人回收限制。|
|`{xxx-server}`|xxx 处的内容与上文的 player 相似，代表全服。例如 `{buy-limit-server}` 代表全服购买限制。|
|`{buy-click}`|购买商品的提示。|物品附加描述|
|`{sell-click}`|出售商品的提示。|物品附加描述|
|`{item-name}`|显示物品的展示名称。|物品附加描述<br>PlaceholderAPI支持|
|`{random_<ID>}`|返回随机变量中首个选中的元素。<br>有关随机变量的更多信息，请浏览“随机”章节。|插件内任意位置<br><font color="red">**仅付费版**</font>|
|`{random_<ID>;;<数字>}`|返回随机变量中选中指定数量的元素。若元素数量不足，我们会选择之前选择过的元素。你可以在随机变量中的 `element-amount` 选项中设置选择元素的最大数量。|插件内任意位置<br><font color="red">**仅付费版**</font>|
|`{random-times_<ID>}`|显示随机变量的刷新时间。|插件内任意位置<br><font color="red">**仅付费版**</font>|
|`{compare_<数字1>_<数字2>}`|比较两个数字。返回的格式可在 `config.yml` 中修改。|插件内任意位置<br><font color="red">**仅付费版**</font>|
|`{math_<公式>}`|计算输入的数学公式。例如 `{math_10+50}` 会返回 60。需要你在 `config.yml` 设置 `math.enabled` 为启用。你可以在 `placeholder.math.scale` 部分设置返回的小数位数。|插件内任意位置|

# PlaceholderAPI 支持

上文的所有的内置变量如果标注“Placeholder 支持”，则其可以在 PlaceholderAPI 中使用。

使用 `%ultimateshop_<商店 ID>_<商品 ID>_<内置变量>%` 即可在插件外显示内建变量！

例如：

`%ultimateshop_example_A_{buy-limit-player}%`

**自 2.5.6 版本开始，无需在内置变量标签中放入 {} 符号，新版本会自动解析内建变量，格式如下：**

`%ultimateshop_example_A_buy-limit-player%`

对于随机及折扣变量，无需指定商店与物品，只需将变量放在 `ultimateshop` 之后，如下所示：

`%ultimateshop_{random-times_rotate}%`

该变量中的 {} 符号不可去除。

## 换行符

使用 `;;` 可另起一行，对需要显示多行价格的用户很有帮助。

``` YAML
placeholder:
  price:
    split-symbol-any: ';;' # <--- 可在 config.yml 中修改
    split-symbol-all: ';;' # <--- 可在 config.yml 中修改
    unknown: "Unknown"
```