# 安装教程

本章节将会引导你安装 HuskSync 至你的 Spigot 群组子服上。

## 安装需求

> [!NOTE|label:注意]
> 若插件启动失败，请检查你是否在运行[不受支持的版本](unsupported-versions.md)。

* MySQL 数据库（8.0 或更高版本）
* Redis 数据库（5.0 或更高版本）— 请浏览[常见问题](guides.faqs.md)来获取更多信息。
* Spigot 子服若干，以 BungeeCord 或 Velocity 组建的群组服（Minecraft 1.17.1 或更高，使用 Java 17 或更高）

## 安装步骤

### 1. 安装 jar 文件

* 将插件拖放至每个 Spigot 子服的 `/plugins/` 文件夹下；
* 无需将 HuskSync 安装在群组服上。
* 额外地，你可以安装 [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/) 加强对锁定用户处理能力，或安装 [Plan](https://www.spigotmc.org/resources/plan-player-analytics.32536/) 插件来快速统计玩家数据。

### 2. 重启服务器

* 开启，之后关闭服务器，使 HuskSync 生成一份[配置文件](guides.config-file.md)；
* HuskSync 会因无法连接到数据库后在控制台报错并自行禁用。鉴于你还未设置登录凭据，所以这是预料之内的；
* 对于高级用户：如果你喜欢的话，你可以自己创建一个 config.yml 文件并使得每个子服的 `/plugins/HuskSync/` 文件夹同步，更方便地更新配置文件。

### 3. 输入 MySQL 和 Redis 数据库的登录凭据

* 找到每个子服的 HuskSync 的配置文件（一般位于 `~/plugins/HuskSync/config.yml`）；
* 在 `database` 设置区域下的 `credentials` 部分，输入你的 MySQL 数据库登录凭据。通常情况下你不应该动 `connection_pool` 部分设置的任何内容；
* 在 `redis` 的 `credentials` 设置中，输入你的 Redis 数据库登录凭据。如果你的 Redis 数据库没有设置密码，请将密码一项留空（译者注：即空字符串 '' 或 ""）；
* 除非你在一个群组下区分多个子群组，每个子群组之间的玩家数据相互隔离，否则不应更改 `cluster_id` 的值。

<details>
<summary>重要 - MongoDB 用户</summary>

* 找到服务器上的 HuskSync 配置文件（`~/plugins/HuskSync/config.yml`）。
* 将 `database` 下的 `type` 值设置为 `MONGO`。
* 在 `database` 下的 `credentials` 配置中，输入 MongoDB 数据库的登录凭据。切记不要擅自修改 `connection_pool` 部分的设置。
</details>

<details>
<summary>对 MongoDB Atlas 用户的额外配置</summary>

* 找到服务器上的 HuskSync 配置文件（`~/plugins/HuskSync/config.yml`）。
* 将 `mongo_settings` 下的 `using_atlas` 设置为 `true`。
* 将 `mongo_settings` 下的 `parameters` 中的 `&authSource=HuskSync` 部分删去即可。
（在使用 Atlas 时自动无视 `credentials` 下 `port` 设置的值）
</details>

### 4. 在 server.yml 文件中设置服务器名称

* 找到服务器上的 HuskSync 服务器名称配置文件（~/plugins/HuskSync/server.yml）
* 将该文件中的 `name:` 后的值改为自己的服务器名称，与群组服核心配置中设置的服务器名字相同（示例，若此服务器名称为“hub”，也就是在切换服务器时输入的命令是 `/server hub`，那么就把 `'hub'` 填在该设置的末尾）

### 5. 再次重启每个子服

* 若提供的 MySQL 和 Redis 数据库登录凭据有效，服务器开启之后数据同步功能就会正常运行；
* 若你需要从 HuskSync 1.x 版本或 MySQLPlayerDataBridge 导入数据，请浏览下方的教程：
  * [从旧版迁移]
  * [从 MPDB 迁移]
