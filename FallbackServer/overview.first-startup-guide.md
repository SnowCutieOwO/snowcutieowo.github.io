# 🌐 初次使用

::: warning
配置文件会随更新而发生变化，这些改动都是迎合用户且必要的改动。若你发现差异，可以加入我们的 Discord 聊天群组。
:::

## 1) 正确选择对应插件版本

首先，关闭群组服；
下载 [.zip](https://www.spigotmc.org/resources/86398/) 文件并提取出来，其中内容大概会像这样：
```
FallbackServer.zip
L Fallback-Server-Addon-版本号.jar
L FallBackServer-版本号.jar
L FallBackServerVelocity-版本号.jar
```
从中拿出适合你使用的核心的版本（如你正在使用 Velocity，则将 `FallBackServerVelocity` 放入服务器插件文件夹，若使用 BungeeCord 则将 `FallBackServer` 放入，依此类推）；
将插件放入文件夹后重启服务器即可。

::: tip 注意
该步骤可能会影响到插件是否能够流畅运转，请正确按照上方步骤进行安装操作。
:::

## 2) 默认模式下的基础安装

启动后，插件会释放配置文件，类型会因使用核心不同而略有差别，你会找到如下的对应文件夹：

- BungeeCord(WaterFall)：
```
plugins\
  L FallBackServer\
  L FallBackServer-版本号.jar
```
- Velocity:
```
plugins\
  L fallbackservervelocity\
  L FallBackServerVelocity-版本号.jar
```
打开文件夹，使用任意一个文本编辑器，并打开 config.yml。

搜索 fallback_list，你将会见到一系列预先配置好的大厅列表。

返回服务器根目录文件夹，现在看起来应该是这样的：
- BungeeCord(WaterFall)：
```
logs\
modules\
pluigns\
config.yml
locations.yml
start.sh
waterfall.jar
waterfall.yml
```
- Velocity：
```
lang\
logs\
plugins\
forwading.secret
messages.yml
start.sh
velocity.jar
velocity.toml
```

根据你使的核心种类打开对应的 config.yml（`BungeeCord`）或 velocity.toml（`Velocity`）。

复制大厅服的名称，如下文所示：
- BungeeCord(Waterfall)：
```YAML
servers:
  lobby1:
    motd: '&1Just another Waterfall - Forced Host'
    address: localhost:25566
    restricted: false
  lobby2:
    motd: '&1Just another Waterfall - Forced Host'
    address: localhost:25567
    restricted: false
  testsv:
    motd: '&1Just another Waterfall - Forced Host'
    address: localhost:25568
    restricted: false
```
- Velocity：

<!--
  这段内容需要改进：
  原因：Shiki 不支持渲染 HOCON 格式
-->

```
[servers]
  testsv = "127.0.0.1:25568"
  testsv2 = "127.0.0.1:25569"
  lobby2 = "127.0.0.1:25567"
  # In what order we should try when a player logs in or is kicked from a server.
  try = ["lobby1"]
  # Configure your servers here. Each key represents the server's name, and the value
  # represents the IP address of the server to connect to.
  lobby1 = "127.0.0.1:25566"
```

回到你的文本编辑器并在 fallback_list 下将你的服务器名称加入，需要注意大小写。下文是一个示例：
```YAML
# Add here all you lobbies that will be used
# for the plugin as fallback and for balancing.
# This list will also be used for /hub command (if enabled).
# WARNING: It's case-sensitive.
fallback_list:
  - lobby1
  - lobby2
  - lobby3
```
::: tip 注意
插件现在可使用默认方法（在崩服时自动整理玩家），若你想要启用 RECONNECT（重连）模式，请转至步骤 2.5。
:::

## 2.5) 重连模式（正在制作，请勿阅读本文）
找到核心的 `plugins/` 文件夹，再找到 `FallBackServer`（BungeeCord/WaterFall）或 `fallbackservervelocity`[^1] 文件夹。
找到 `fallback_mode:` 项，将其从 `DEFAULT` 改为 `RECONNECT`。
保存并不关闭编辑器，重启服务器但先不要重载插件。
在下载的 .zip 压缩包中找到 `FallBackServer-Addon.jar` 并将其复制到每个需要自动重连的子服，但是不要将它放在服务器里。

插件无需你手动配置，它会自动处理大部分内容。

直到这一步，大部分事情都准备好了，在 FallbackServer 的 confif.yml 中配置的默认值已经适合绝大部分服务器，但你需要在 `auto_reconnect` 部分下配置 `ignored_servers` 如下文：
```YAML
auto_reconnect:
  # Tries before disconnecting or moving player to lobbies.
  max_tries: 8

  # Time before pinging this server during reconnect phase.
  # Don't put values under 1, they will NOT work.
  ping_delay: 10

  # This option will trigger normal FallbackServer kick ing procedure.
  # Sorting players in various lobbies.
  player_sort: true

  # Delay before actual connecting the player to the server, useful
  # for preventing spigot instance overload.
  # In seconds.
  connection_delay: 10

  # This is the timeout for checking if the server
  # is online or not using a pinging method.
  # In milliseconds.
  ping_threshold: 2000

  # In second, determines the delay before starting
  # the actual reconnection, useful for preventing
  # backend replying to my plugin ping request on
  # server stop (like /restart)
  task_delay: 10

  # Ignored reasons for reconnecting.
  # If players gets kicked for one of those reasons
  # they will not be reconnected.
  ignored_reasons:
    - "ban"
    - "kick"
    - "afk"
    - "outdated"
    - "whitelist"
    - "connected"
    - "full"
    - "spam"
    - "maintenance"

  # Ignored servers for reconnecting.
  # If players gets kicked from one of those servers
  # they will not be reconnected, instead they will be
  # moved to a fallback lobby.
  # Add event servers, such as minigames, here.
  ignored_servers:
    - lobby1
    - lobby2
    - lobby3
    - bw1
    - bw2
    - bw3
```
::: warning
请小心修改本部分配置；否则的话重连功能不会正常工作。
:::

[^1]:
    事实上，这里应该是小写名称。
    上文的安装步骤中已经体现了这点。