# 基础学习
了解 Oraxen 的运作机制

正如前文所述，Oraxen 能生成自定义物品，但也需要玩家使用纹理包。

它也能为物品添加自定义机制，一般将其称作“机制”。

## 颜色与其他 Minecraft 格式

在旧版本的 Minecraft 中，游戏只能显示 16 种文本颜色，大多数插件使用的是以 & 开头的彩色代码。

但在 1.16 之后你可以使用任何颜色，让各种各样的格式都能实现（例如可点击的消息），当然我不想要这些功能被限制太多。

这也是我们建议你使用 [MiniMessage 格式](https://docs.adventure.kyori.net/minimessage.html#format)的理由。它的纯文本看起来像这样：

`<#FF5555>This is a <#55FF55>test!`

## Oraxen 文件夹的结构

![img](images/image29.png 'Oraxen 文件夹的结构图例')

### 全局配置

在这个配置文件中你会找到两个文件：`settings.yml`，它包含了 Oraxen 的许多设置，而 `mechanics.yml` 则包含了全局机制的相关设置。

### 物品配置

子文件夹下的文件都是你创建的物品。

你可以在其中的任何文件创建新物品，甚至是创建新文件或移除已有文件。你也可以在单个文件内完成所有工作，但将配置分隔并以名称标注管理起来更方便。

### 纹理包

纹理包是 Oraxen 的重要资源，这其中会包括你需要用到的大多数文件。即便如此你还是需要为自定义物品设置材质，所有这些都在 `Pack` 文件夹中完成。

你需要使用 **textures（材质）** 子文件夹来添加材质，以及（若要使用自定义模型物品）**models（模型）** 模型子文件夹来添加模型。

你也可以在文件夹底层目录中修改纹理包的基础信息（`pack.mcmeta` 文件，纹理包图标等内容）。

若你需要覆盖原版纹理中的某些文件，你可以创建一个 `assets` 文件夹然后将内容放入，比如 **assets/minecraft/sounds.json**。

### 配方

这个文件夹包含了按类型排序的配方设置。

例如，`shaped.yml` 会包含你创建的有序合成配方。

一般情况下你不需要用到这个文件夹，因为可以直接在游戏内通过 Oraxen 的配方命令对其编辑。