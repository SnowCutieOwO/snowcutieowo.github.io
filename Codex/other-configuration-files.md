# 其他配置文件

## Config.yml 文件

```YAML
# When enabled, names of locked discoveries will be hid den.
hi de_locked_discoveries_name: true

# This is the item to be used when a discovery is locked.
locked_discoveries_item: GRAY_DYE
locked_discoveries_item_custom_model_data: 0

# Time in seconds in which player data will be saved automatically.
data_auto_save_time: 600

# Properties for the %progress_bar% variable in the inventory.yml file.
progress_bar_placeholder:
  filled_symbol: "&a|"
  empty_symbol: "&c|"
  amount: 20
  
# You can enable the MySQL Database for player data storage.
mysql_database:
  enabled: false
  host: localhost
  port: 3306
  username: root
  password: root
  database: database
```

## Messages.yml 文件

```YAML
prefix: "&4[&cCodex&4] "
noPermissions: "&cYou don't have permissions."
configReloaded: "&aConfig reloaded."
commandUnlockErrorUse: "&cYou need to use: &7/codex unlock <player> <category> <discovery>"
commandNotExists: "&cThat command doesn't exists. Use &7/codex help&c."
commandResetErrorUse: "&cYou need to use: &7/codex reset <player> <category> <discovery>"
notOnline: "&cThat player is not online."
playerNotUnlockedDiscovery: "&cThat player doesn't have unlocked that Codex discovery."
playerResetDiscovery: "&aDiscovery &7%discovery% &aon category &7%category% &areset for &7%player%&a."
categoryNotExists: "&cThe category &7%category% &cdoesn't exists."
discoveryNotExists: "&cThe discovery &7%discovery% &cdoesn't exists for category &7%category%&c."
playerAlreadyHasDiscovery: "&cPlayer &7%player% &chas already unlocked discovery &7%discovery% &con category &7%category%&c."
playerUnlockDiscovery: "&aPlayer &7%player% &aunlocked discovery &7%discovery% &aon category &7%category%&a!"
inventoryUnlockedVariable: "%current%&8/%max%"
inventoryLockedDiscoveryLore:
- "&7You haven't unlocked this discovery yet."
inventoryLockedDiscoveryName: "&c??"
commandCodexError: "&cThere are errors on the plugin, check the console."
```