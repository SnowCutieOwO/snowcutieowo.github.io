# 从旧版迁移

> [!WARNING"|label:警告]
> 本插件暂不支持直接将 2.11.x 版本的数据转化为 4.x；你必须先下载 HuskHomes 3.2.1 并将旧版本数据转化到该版本，然后再将数据移动至 4.x 的 HuskHomes。鉴于 3.x 和 4.x 的数据结构相同，无需在这两个版本之间进行数据转化。

若要从 HuskHomes 2.11.2 版本转化数据至 3.x 版本，请执行以下步骤：

* 删除服务器下 `plugins` 旧版本的 `HuskHomes-2.x.jar` 文件；
* 将新的 HuskHomes 3.x 版本的 jar 文件安放至文件夹；
* 在你的 `plugins/HuskHomes/` 文件夹中，删除 `messages.yml` 文件使其重新生成；
* 开启你的服务器。若你正在使用群组服，只需要开启其中的一个子服。HuskHomes 会自动升级你的数据；
* 若你正在使用群组服：
    * 从你的每个子服中删除 `plugins/HuskHomes/config.yml` 文件；
    * 重新启动这些被删除文件的子服；
    * 在所有子服开启完毕以后再次关闭它们，打开重新生成的 config.yml 文件，填入你的数据库登录凭据，将数据库种类从 MYSQL 设置为 SQLITE。与此同时请确保开启了 cross_server 跨服模式。
* 更新你的权限管理插件，使用我们新版本的权限节点名称来手动更新你的权限组。

大功告成！享受 3.x 版本的 HuskHomes 吧。