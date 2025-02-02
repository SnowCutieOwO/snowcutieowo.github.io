# 蒙版

蒙版与图案，在 WorldEdit 的命令中是常客。不像图案那样，蒙版决定了*哪些*方块会被命令、笔刷或其他东西影响。

除了将蒙版视作一个参数的命令（例如 `//replace [蒙版] <方块>`），你也可以将蒙版通过命令 `/mask` 单独添加至手持的笔刷，或者你可以通过命令 `//gmask` 将蒙版应用至你的每一次操作。

::: info
通过不同方法施加的蒙版会相互叠加。如果你通过命令 `//gmask dirt` 添加了一个全局蒙版，然后再在笔刷上通过命令 `/mask stone` 添加了蒙版，那么这个笔刷将不再能修改任何方块！这是因为结合的蒙版只会允许玩家对既为石头*又为*泥土的方块进行操作！
:::

::: tip  
你可以通过不带参数的命令 `//gmask` 来清除你设置的全局蒙版。
:::

[[toc]]

## 组合蒙版

若要获取一个*同时*满足多个蒙版的组合蒙版，你需要使用一个空格来分开它们。当所有给定的蒙版条件*都*被满足时，指定的方块才能被称作满足组合蒙版。

::: info 示例：组合蒙版
通过组合蒙版将一个选区中地表的石头替换为泥土：
```
//replace "stone <air" dirt
```
设置一个蒙版，以限制当前笔刷不能修改空气方块：
```
/mask "air #sel"
```
:::

## 可用蒙版

### 方块蒙版

最简单的蒙版，方块蒙版匹配一或多个方块或其状态。与单方块图案相似，你可以单独指定方块，或者指定一类任意数量状态的方块。但与图案不同的是，蒙版*不会*对未指定的方块状态使用默认值——它们会“模糊”未设置状态的值，使其能被任意匹配。

若要匹配多个方块，请使用英文逗号将方块名称分隔。

::: info 示例：使用单方块蒙版
删除选区内的所有的橡木栅栏：
```
//replace oak_fence air
```
删除选区内的所有只连接了东面方块的橡木栅栏和任意橡木栅栏门：
```
//replace oak_fence[east=true],oak_fence_gate air
```

:::

### 反选蒙版

英文感叹号 `!` 表示将其后的内容反选表示。也就是说，它匹配任何*不与*指定蒙版匹配的内容。其他任意的蒙版都可以与这个符号组合。

::: info 示例：反置一个蒙版  
将一个选区内所有不是泥土、石头或草方块的方块替换成石头：
```
//replace !dirt,stone,grass_block stone
```
:::

### 现存方块蒙版

蒙版 `#existing` 会匹配所有非空气方块。需要注意的是这个蒙版与 *!air* 有所区别，因为游戏实际上在不同的情况下有多种空气[^1]。

### 固体方块蒙版

蒙版 `#solid` 会匹配所有被考虑为“固体”的方块。也就是——能阻止实体（例如玩家）通过的方块。

### 偏移蒙版

使用符号 `>`（顶部覆盖）或 `<`（底部覆盖），将会匹配符合蒙版方块实际位置下方/上方的方块。

::: info 示例：偏移蒙版
将选区中任意木板的上方放置一层平滑石台阶：
```
//replace >##planks smooth_stone_slab
```
:::

### 区域蒙版

当例如替换等的命令没有用时，设置一个区域蒙版对在区域中使用笔刷很有帮助。例如，如果你想要用笔刷为基地的墙壁上绘制一些泥土，你可以选中墙壁，并将其设置为反选蒙版，这样泥土就不会影响到墙壁（但仍可影响其周围的地面）。

第一种区域蒙版为 `#region`（或：`#sel`、`#selection`），这会在你输入命令时复制你的区域并以此为蒙版。

第二种区域蒙版为 `#dregion`（d 表示 dynamic，即“动态”，也作 `#dsel`、`#dselection`），它会随时根据你的选区而保持更新。

### 方块分类蒙版

方块分类，或称作“标签”，可以用于蒙版。一个分类蒙版会匹配任意处于该分类中的方块。就像图案一样，它的格式为 *##<标签>*。

::: info 示例：方块分类蒙版
将一个选区内的所有地毯替换为一层雪：
```
//replace ##carpets snow
```
:::

### 随机噪声蒙版

噪声蒙版可以创建随机的噪声[^2]。指定 `%<占比>` 可以匹配给定比例的公开。不像权重图案那样，`%50` 就是选区内匹配到的一半方块。

### 方块状态蒙版

像方块蒙版那样，这个蒙版匹配方块的指定状态。但又与方块蒙版不同的是，你不必指定方块的种类。这意味着你可以匹配任意属性中有给定值的方块[^3]。

状态蒙版有两个模式，“宽松”和“严格”。在“宽松”判定模式（`^[状态=值,...]`）下，会匹配任意状态符合给定值的方块，*或*任何甚至没有这些属性的方块。在“严格”判定模式（`^=[状态=值,...]`）下，它*只会*匹配那些有这些属性且其值符合给定值的方块。

::: info 示例：使用方块状态蒙版
移除一个选区内所有关上的门、栅栏门和活板门：
```
//replace ^=[open=false] air
```
:::

### 表达式蒙版

这个蒙版可以在每个方块上计算一个数学表达式。这类蒙版需以 `=` 开头，其后须有数学表达式（详见“表达式”章节），且可使用变量 `x`、`y` 和 `z`。该蒙版会在表达式返回正值时匹配其所处的方块。[^4]

::: info 示例：表达式蒙版
只编辑指定 Y 轴内的方块：
```
//gmask =y<64
```
只编辑上方有两格空气方块的方块：
```
//gmask =queryRel(0,-2,0,0,0)
```
:::

### 生物群系蒙版

生物群系蒙版会匹配处于指定生物群系中的方块。它的格式为 `$<生物群系>`。生物群系的 ID 需为其的[命名 ID](https://zh.minecraft.wiki/w/Java%E7%89%88%E6%95%B0%E6%8D%AE%E5%80%BC#%E7%94%9F%E7%89%A9%E7%BE%A4%E7%B3%BB)，且 *minecraft:* 前缀在纯原版模式下的可选的，如果装有模组则是必要的。

### 地面蒙版

地面蒙版匹配选区内至少一面暴露在空气中的所有方块。这意味着它只会匹配地表的方块，而不是完全被其他方块阻挡的方块。

这个蒙版的格式为 `#surface`（或：`#exposed`）。

## 另见

* 小白学视觉, 2023.01.12,《数字图像中的噪声》, https://blog.csdn.net/qq_42722197/article/details/128668606

[^1]: 译者注：例如“洞穴空气”。

[^2]: 译者注：噪声，在这里特指一种产生随机（数）的方法，在理论上可以定义为“不可预测，只能用概率统计方法来认识的随机误差”。

[^3]: 译者注：例如，所有的台阶，所有方向相同的玻璃板，所有方向相同的栅栏等。

[^4]: 译者注：此处的 x、y 和 z，以原版的 Minecraft 坐标系为准参与计算。所写入的数学表达式可以相应地近似拟合为一串连续的方块。需要注意的是，在 Minecraft 中 Y 轴为纵轴，而通常的数学中，Z 轴才是默认的纵轴。

