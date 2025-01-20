# 🪄 出售魔杖 - 仅付费版

打开 `config.yml` 并找到如下内容：

``` YAML
# 仅付费版
sell-stick-items:
  A:
    material: STICK
    name: '&d出售魔杖 &7(可使用 5 次)'
    lore:
      - '&f点击箱子使用这个物品!'
      - ''
      - '&c剩余使用次数: {times}'
    usage-times: 5
  B:
    material: STICK
    name: '&d高级出售魔杖 &7(可使用 50 次)'
    lore:
      - '&f点击箱子使用这个物品!'
      - ''
      - '&c剩余使用次数: {times}'
    usage-times: 50
  C:
    material: STICK
    name: '&5史诗出售魔杖
    lore:
      - '&f点击箱子使用这个物品!'
      - ''
      - '&c剩余使用次数: {times}'
    usage-times: -1
```

`A` 和 `B` 为物品 ID，其下则是对应配置。

此处可以使用[物品格式]()。

* `usage-times`：物品最大使用次数。若次数小于零或无效，我们将其视作使用次数不限。