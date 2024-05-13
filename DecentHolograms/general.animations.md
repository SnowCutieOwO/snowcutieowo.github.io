# :fas fa-images: 动画
如何使用 DecentHolograms 内置的动画

DecentHolograms 支持两种类型的动画：预制动画与自定义动画。

自定义动画可以在文件中进行配置，更多内容会在[这里](general.configuration.animation.md)讲到。

## 格式

```
<#ANIM:<名称>>文本</#ANIM>
<#ANIM:<名称>:<参数>>文本</#ANIM>
```

> [!NOTE|label:提示]
> 若要在动画中使用变量，你应该在 [`config.yml`](general.configuration.config.md) 下启用 `allow-placeholder-inside-animation` 设置，

## 预制动画
这里有一些你可以使用的预制动画，任何文本都可套用这些格式。

### 随机颜色

在所有可用的原版颜色代码之间切换。与 HolographicDisplays 的彩色相似，且也提供了 `&u` 这样的变量作为另一种使用方法。

```
<#ANIM:colors>文本</#ANIM>
```

### 波浪

文本将以 `<颜色1>` 显示，而 `<颜色2>` 则会按顺序逐字扫过文本。

```
<#ANIM:wave:<颜色1>,<颜色2>>文本</#ANIM>
```

> [!NOTE|label:示例]
> ```
> <#ANIM:wave:&f,&b&l>文本</#ANIM>
> ```

### 燃烧

文本将以 `<颜色1>` 显示，而 `<颜色2>` 则会按从左到右覆盖文本。

```
<#ANIM:burn:<color1>,<color2>>文本</#ANIM>
```

> [!NOTE|label:示例]
> ```
> <#ANIM:burn:&f,&b&l>文本</#ANIM>
> ```

### 打字机

文本会在短时间内逐字显示。

```
<#ANIM:typewriter>文本</#ANIM>
```

### 滚动

将文本切换至滚动显示。长度会被设置为 `<文本长度> / 3 * 2`。

```
<#ANIM:scroll>文本</#ANIM>
```