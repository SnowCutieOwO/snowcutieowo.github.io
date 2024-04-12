# 冷却
HuskHomes 支持在玩家执行特定操作时设置冷却。玩家在执行下一次相同的操作之前，必须要等待一段时间，否则操作就不会执行。冷却仅会在操作执行之后被刷新，玩家在冷却期间试图执行操作会被发送消息以提示剩余的冷却时间。

## 设置冷却
冷却可以在 [`config.yml`](guides.config-files.md) 的 `cooldowns` 下设置。若要启用冷却，将 `enabled` 的值改为 `true`，并在 `cooldown_times` 下设置指定操作的冷却时间。冷却时间为整数，单位为秒。

### 绕过冷却

拥有[权限节点](guide.commands.md) `huskhomes.bypass_cooldowns` 的玩家可以无视冷却，并可立即执行他们想要的操作。

[size=3][b]操作列表[/b][/size]

|操作|描述|
|---|---|
|`additional_home_slot`|玩家尝试购买额外的家设置点容量|
|`make_home_public`|玩家将家传送点设置为开放|
|`random_teleport`|玩家输入命令 /rtp|
|`back_command`|玩家输入命令 /back 返回上一个位置|
|`home_teleport`|玩家输入命令 /home 传送至家|
|`public_home_teleport`|玩家使用 /phome 传送至公开家传送点|
|`warp_teleport`|玩家使用 /warp 传送至地标|
|`spawn_teleport`|玩家使用 /spawn 传送至出生点|
|`send_teleport_request`|玩家发出传送请求|
|`accept_teleport_request`|玩家接受传送请求|

### 示例配置

冷却在 `config.yml` 文件中，`cooldowns` 的 `cooldown_times` 下设置。默认情况下，只有一个随机传送（`random_teleport`）的冷却设置。可按照上表在这块区域中添加你想要的冷却。

设置冷却（config.yml）
```YAML
cooldowns:
  # 是否在不同操作之间添加冷却
  enabled: true
  # 特定操作冷却的时间长度（单位为秒）。相关文档： https://william278.net/docs/huskhomes/cooldowns/
  cooldown_times:
    random_teleport: 600
    additional_home_slot: 0
    make_home_public: 0
    random_teleport: 600
    back_command: 0
    home_teleport: 0
    public_home_teleport: 0
    warp_teleport: 0
    spawn_teleport: 0
    send_teleport_request: 0
    accept_teleport_request: 0
```