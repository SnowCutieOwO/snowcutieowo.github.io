# 常见问题
本章节回答了一些常被问到的问题。

## 如何让玩家总是回到上次离开的服务器？

换句话说，你需要在玩家离开你的群组服时，确保他们能在下次上线时回到原位，而不是再次进入大厅服。这不能由本插件控制实现，但你可以通过调整群组服设置达到目的。

* 在 Velocity 端上：安装并配置 [Yunfaremember](https://modrinth.com/plugin/yunfaremember)。
* 在 BungeeCord 端上：确保 `force_default_server` 已被禁用，之后你的服务器就能够在硬盘中保存玩家上次所处服务器的缓存数据。

如果以上操作不生效，请确保你没有设置优先级高过如上内容的服务器。