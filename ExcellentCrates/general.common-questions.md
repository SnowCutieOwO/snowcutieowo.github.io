# ❓ 常见功能问题

> [!NOTE|label:提示]
> 首先首先，看在老天爷的份上，检查配置文件，尤其是 [config.yml] 和 [/lang/] 文件夹。你的大部分问题（如果不是全部的话）都可以在那里解决。

<details>
<summary>我要如何修改宝箱/钥匙物品的名称/描述/附魔？</summary>

在将其用作宝箱/钥匙物品前，你必须使用其他插件将它们先设置好。    
在 ExcellentCrates 中没有简单的方式做到这种效果，因为这不是插件的主要功能。

</details>
<details>
<summary>我能不能用这个插件做在线奖励，给活跃一定时间的玩家发放宝箱/钥匙？</summary>

不能。单一个插件做不到。

</details>
<details>
<summary>我要如何将宝箱/钥匙放进礼包？</summary>

向你的礼包插件添加给予宝箱/钥匙的命令。这是<font color="green">最好</font>且<font color="green">推荐</font>的方式。我们<font color="red">不</font>推荐直接将宝箱/钥匙放进你的礼包插件，否则它们可能会失效而不能及时更新。

</details>
<details>
<summary>我如何在玩家投票（顶帖）时给予他们宝箱/钥匙？</summary>

只需在你的投票（顶帖）插件中添加给予宝箱/钥匙的命令即可。    
<font color="red">注意：</font>给予命令中的玩家变量会因<fnt color="blue">你的</font>投票（顶帖）插件而有差异，<font color="red">而非</font>我们的插件。不要因为你的投票（顶帖）插件用错了变量而来责怪 ExcellentCrates 处理不了命令。

</details>
<details>
<summary>你能添加对 CMI 悬浮字的支持吗？</summary>

（译者注：相当幽默。）    
绝不。这插件的代码和 API 非常混乱。

</details>
<details>
<summary>我如何选择我的悬浮字插件？</summary>

`config.yml` -> Crate -> Holograms -> Handler 部分配置

</details>
<details>
<summary>我如何编辑/创建悬浮字模板？</summary>

`config.yml` -> Crate -> Holograms -> Templates

</details>

<details>
<summary>我如何强制玩家持有钥匙才可开启宝箱？</summary>

`config.yml` -> Hold_Key_To_Open

</details>
