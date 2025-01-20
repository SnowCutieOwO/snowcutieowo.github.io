# 🔖 折扣变量 - 仅付费版

## 配置

* 打开插件的 `config.yml`，找到如下内容：

``` YAML
placeholder:
  # 仅付费版本.
  discount:
    buy:
      mode: MIN
      default: 1
      vip: 0.5
      mvp: 0.3
    sell:
      mode: MAX
      default: 1
      vip: 1.5
      mvp: 2
  discount-conditions:
    vip:
      type: permission
      permission: 'group.vip'
    mvp:
      type: permission
      permission: 'group.mvp'
```

你可以根据自己的喜好随意修改这里。

- mode: 你可以创建数量不限的折扣变量，它们分两种：`MIN`（最小值）和 `MAX`（最大值），最小值意味着购买，这可以让玩家在购买时付得更少，最大值意味着出售，可以让玩家在出售物品时获利更多。
- default: 默认值，没有必要设置为 1 之外的其他值。
- vip/mvp: 条件的 ID 值，满足对应条件的玩家会使用这些值。

每个条件 ID 的部分应当使用[条件格式](format.condition-format.md)。

## 使用变量

通过内置变量 `{discount_<ID>}` 来使用这些折扣。更多信息请见“[变量](placeholders.built-in-placeholder.md)”章节。

例如：

``` YAML
items:
  A:
    price-mode: CLASSIC_ALL
    product-mode: CLASSIC_ALL
    products:
      1:
        material: sea_lantern
        lore: 
          - '%player_health%'
    buy-prices:
      1:
        economy-plugin: Vault
        amount: '{discount_buy} * 5' # <--- 修改了这里
        start-apply: 0
        placeholder: '{amount} Coins'
```

- 5 为基础价格，请将其与 `{discount_buy}` 相乘。

## 自动应用折扣变量

* 自 2.3.2 起，你可以自动对所有价格应用折扣变量！只需在 `config.yml` 进行设置。

``` YAML
placeholder:
  auto-settings:
    # 若启用，则会对所有价格应用折扣。
    # 可以避免在物品中逐个添加折扣选项。
    add-discount-in-all-price-amount:
      enabled: false
      buy-placeholder: buy
      sell-placeholder: sell
      black-dynamic-price: true
      black-shops:
        - 'example'
```

* 建议对动态定价禁用该功能，若你想要对动态定价启用此功能，只需将这里的 `black-dynamic-price` 设置为 `false` 即可！
* 若你想要为指定商店禁用该功能，请使用 `black-shops` 选项。