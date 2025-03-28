# 权重

## 介绍

权重是 LuckPerms 的一个重要功能，可以用来解决潜在的优先级冲突。

LuckPerms 中有两个独立且互不依赖的权重，即[权限组权重](#权限组权重)与[元数据权重](#元数据权重)（如前后缀）。

在所有情况下，**权重越高，优先级越大**

* 在设置权重时，推荐在组之间留一些数值间隔，例如 0 与 100 而不是 0 与 1。这可以让你在插入新内容时不必费劲重写权重。
* 权重可以是任何整数，负数也是！

## 权限组权重

权限组权重在玩家有多个权限组且存在相同权限时决定了哪个组的优先级更大。看个例子或许能更好理解：

* 假设玩家在一个默认组与一个叫“admin”的组，每个组里各有一个 `essentials.fly`[^1] 权限。
* 默认组中，`essentials.fly` 的权限状态是 `false`，而在“admin”组中，它的状态为 `true`。在不设置权重的情况下，权限状态不一，很难判断——也就是说无法知道玩家是否可以使用飞行命令。
* 这时就该**权重**出手了。将默认权限组的权重设置为高于“admin”组权重的值，最终表现为玩家**不能**飞行。反之则玩家**能**飞行。

与此相似，若玩家有多个组，权重最高的权限组会覆盖权重较低权限组中的重复权限。

### 设置权限组权重

这里有两种方式为权限组设置权重：通过[命令](command-usage.group.md#lp-group-权限组-setweight-权重)，或使用[编辑器](features.web-editor.md#luckperms-节点)。

* 若使用前者，你需要输入 `/lp group <权限组> setweight <权重>` 命令。
* 若使用后者，你需要向权限组中添加 `weight.<权重数值>` 权限。

## 元数据权重

元数据权重与权限组权重相似，但它们是用在前后缀上的。与权限组的生效方式相同，在玩家有多个前缀或后缀时，只显示权重最高的前缀或后缀。

### 设置元数据权重

这里有两种方法为前后缀设置权重：通过[命令](command-usage.meta.md#lp-usergroup-玩家权限组-meta-setprefix-权重-前缀-情境)，或使用[编辑器](features.web-editor.md#luckperms-节点)。

* 若使用前者，你只需在向玩家或权限组添加前后缀时使用如下命令即可：    
    `/lp user/group <玩家|权限组> meta setprefix/addprefix <权重> <前缀>`
* 若使用后者，你可以在玩家或权限组中添加或修改 `prefix.<权重>.<前缀>` 节点来改变权重。后缀的修改方式与此相同。

[^1]: 这是一条来自于 Essentials/EssentialsX 的权限，给予后可使用 `/fly` 命令。