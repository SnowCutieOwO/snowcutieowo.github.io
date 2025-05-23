# 自定义盔甲

如何在不替换已有物品的情况下创建自定义盔甲？

与其他物品相同，盔甲在背包中和装备时使用两张贴图。

Oraxen 能够通过两种方式添加自定义盔甲：纹饰或着色器。

纹饰通过 1.20 添加的盔甲纹饰系统实现，且不在低于 1.20 的版本上生效。

着色器则使用了 1.17 加入的 core-shaders。

**盔甲纹饰** 推荐核心为 1.20+ 且仅允许 1.20+ 的玩家进入的服务器使用。

它的优点是不会破坏原有着色器，且无需额外模组。

它也可以使盔甲真实物品不仅限于皮革盔甲，但默认情况下为锁链盔甲。

**核心着色器** 推荐 1.20 以下且允许低版本玩家进入的服务器使用。

与盔甲纹饰相比，这个方法会破坏 Optifine 与 Iris 使用的着色器。

若要修复这个问题，Oraxen 会将 CIT 纹理置入资源包。

这个方法能完美解决与 Optifine 的兼容性问题，但使用 Iris 的玩家需要用到 [CIT Resewn](https://modrinth.com/mod/cit-resewn)。