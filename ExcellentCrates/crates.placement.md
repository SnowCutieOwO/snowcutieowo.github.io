# 放置

你可以将宝箱与方块绑定，从而将其“放置”在世界中！

你可以通过[编辑器](editor-gui.md)将宝箱绑定至方块。

## 绑定宝箱

1. 打开编辑器 -> **宝箱（Crates）**-> 选择宝箱。
2. 点击**放置（Placement）**按钮。
3. **左键**点击**分配方块**（Assigned Blocks）按钮。
4. 点击方块使其与宝箱绑定。

在宝箱成功与方块绑定之后，你就可以在绑定方块附近看到悬浮字与粒子效果。

::: warning

若你在绑定 Nexo/Oraxen/ItemsAdder 方块时遇到了问题，请确保它们是方块而**不是家具**！

:::

::: info

若你需要与实体或 NPC 绑定宝箱，最好的方法就是绑定[宝箱命令](commands.md)。

:::

## 悬浮字

宝箱使用悬浮字模板，你可以在 `config.yml` 中配置、

默认情况下有两种模板：`default` 与 `example`。

::: info

所有新创建的宝箱都使用 `default` 模板。

若你重命名或将该模板移除，请确保为所有宝箱提供一个有效的模板！

:::

你可以通过编辑器添加或编辑悬浮字的设置：

1. 打开编辑器 -> **宝箱（Crates）**-> 选择宝箱。
2. 点击**放置（Placement）**按钮。

这里有悬浮字相关的三个设置：

* **悬浮字状态（Hologram State）**：决定悬浮字是否在宝箱方块上显示。
* **悬浮字模板（Hologram Template）**：决定悬浮字包含的文本。
* **悬浮字 Y 轴偏移（Hologram Y Offset）**：在 Y 轴上移动悬浮字。对于较大模型的自定义方块很有用。

使用这些按钮来管理宝箱的悬浮字。

::: warning 没有悬浮字！

若你的编辑器中没有悬浮字按钮，请确保安装了[对应的插件](intergrations.holograms.md)。

否则的话，确保你使用的是有效的悬浮字模板。

:::

## 粒子效果

你可以通过编辑器添加或编辑宝箱周围的动态粒子效果！

1. 打开编辑器 -> **宝箱（Crates）**-> 选择宝箱。
2. 点击**放置（Placement）**按钮。

这里有粒子效果相关的三个设置：

* **效果模型（Effect Model）**：设置粒子效果的动画/形状。
* **粒子效果（Effect Particle）**：设置粒子效果名称。
* **粒子数据（Particle Data）**：为粒子效果提供额外的数据。若你没有见到此按钮，说明所使用的粒子效果不支持该选项。

::: info

若要禁用粒子效果，只需将**效果模型（Effect Model）**设置为 `none` 即可。

:::