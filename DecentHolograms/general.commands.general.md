# 通用
DecentHolograms 的通用命令

## 参数
括号只是用于标注参数的必要性，你最终输入的命令不需要带着它们！

|括号种类|参数意义|
|---|---|
|尖角括号“`<>`”|必须填入的参数。|
|方括号“`[]`”|可选填入的参数。|
|花括号“`{}`”|可能填入的值的列举，用 `|` 分隔。|

## 命令

::: info 命令帮助
可输入如下命令来查看所有可用的子命令：
```
/dh help
```
:::

### `/dh convert <插件> [文件]`

**权限：**`dh.command.convert`

从其他悬浮字插件导入悬浮字数据。
对应的悬浮字插件无需安装在服务器上，只需它的文件！

* `<插件>` - 转化的悬浮字插件。见[此页](general.compatibility.md)获取列表。
* `[文件]` - 转化文件的位置，仅当待转化文件不在原位时需要输入这个参数。

### `/dh list [页码]`

**权限：**`dh.command.list`

列出悬浮字文件中载入的所有悬浮字。

* `[页码]` - 查看的页码。

### `/dh reload`

**权限：**`dh.command.reload`

重载插件。

### `/dh version`

**权限：**`dh.command.version`

**别名：**`about`、`ver`

显示当前版本 DecentHolograms 的有关信息。