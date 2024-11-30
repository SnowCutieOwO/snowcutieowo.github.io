# 表达式

WorldEdit 的表达式格式与 Java 等一类语言的差不多，但有一些不同：


* 可以省略末尾的分号；
* 语句中的最后一个值即使不设置 return，也会返回；
* 二元中缀符 `^` 是用于指数运算而非通常的异或运算符号，且其优先级有相应的标注；
* 可以使用阶乘（`!`）；
* 可以使用约等于符号（`~=`）；
* 没有对象:)

[[toc]]

## 运算符

表达式判断使用 [Java 的 优先级规则](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html)，它可以简要概括为以下几点：

* 二元指数运算符（`^`）的优先级介于 2 和 3；
* 阶乘后缀运算符（`!`）的优先级为 2；
* 约等于运算符（`~=`）的优先级为 7。

### 二元中缀符

这些运算符需要被放在两个被运算数之间。

::: info 基本运算

|运算符|描述|
|---|---|
|`+`|加法|
|`-`|减法|
|`*`|乘法|
|`/`|除法|
|`%`|余除|
|`^`|指数运算|

:::

::: info 数位运算

这些符号会将被运算数表示为 32 位整数并在这些位上进行操作。

|运算符|描述|
|---|---|
|`<<`|左移|
|`>>`|右移|

:::

::: info 逻辑运算

这些运算符会将任意大于 0 的数字当做 true，而将其他的当做 false。在表示 true 时返回 1，而在表示 false 时返回 0。

|运算符|描述|
|---|---|
|`&&`|逻辑“和”|
|`\|\|`|逻辑“或”|

:::

::: info 比较运算

这些运算符号会将被运算数进行比较，并在结果为 true 时返回 1，在结果为 false 时返回 0。

|运算符|描述|
|---|---|
|`<`|小于|
|`>`|大于|
|`<=`|小等于|
|`>=`|大等于|
|`==`|等于|
|`!=`|不等于|
|`~=`|约等于|

:::

::: info 赋值

这些运算符左侧需要提供一个值。使用简单赋值符号将值赋给一个不存在的变量可创建临时变量。

|运算符|描述|
|---|---|
|`=`|简单赋值|
|`+=`|相加赋值|
|`-=`|相减赋值|
|`*=`|相乘赋值|
|`/=`|相除赋值|
|`%=`|余除赋值|
|`^=`|指数运算赋值|

:::

### 前缀运算

这些运算符应当处于对应表达式之前。

::: info 前缀运算符

|运算符|描述|
|---|---|
|`-x`|（将值置负）|
|`~x`|按位补码（见上文“按位二元运算符”）|
|`!x`|逻辑补全（见上文“逻辑二元运算符”）|
|`++x`|前缀增量运算符|
|`--x`|前缀减量运算符|

:::

### 后缀运算

::: info 后缀运算符

这些运算符应当处于对应表达式的末尾。
|`x!`|阶乘运算|
|---|---|
|`x++`|后缀增量运算符|
|`x--`|后缀减量运算符|

:::

### 三元中缀

三元中缀符用于三元表达式：
```
<条件> ? <满足时分支> : <不满足时分支>
```
与 if/else 工作原理相同，但这里的分支只能为单句表达式。

## 函数

::: info 数学函数

表达式提供了来自 Java 的 Math 库的下列函数：
|函数|描述|
|---|---|
|`abs`|返回指定数的绝对值。|
|`acos`|返回指定数的反余弦值；返回值介于 [font=Vijaya]0` 到 [font=Vijaya]π` 之间。|
|`asin`|返回指定数的反正弦值；返回值介于 [font=Vijaya]-π/2` 到 [font=Vijaya]π/2` 之间。|
|`atan2`|返回由直角坐标系 [font=Vijaya](x, y)` 转化为极坐标 [font=Vijaya](r, θ)` 后的角度。|
|`atan`|返回指定数的反正弦值；返回值介于 [font=Vijaya]-π/2` 到 [font=Vijaya]π/2`。|
|`cbrt`|返回指定数的平方根。|
|`ceil`|返回（差值最接近于负无穷）大等于指定数的整数。即向上取整。|
|`cos`|返回指定数的三角函数余弦值。|
|`cosh`|返回指定数的双曲余弦值。|
|`exp`|返回欧拉数e的指定幂[^1][/sup]。|
|`floor`|返回（差值最接近负无穷）小等于指定数的整数。即向下取整。|
|`ln`|返回指定数（以 [font=Vijaya]e` 为底）的自然对数。|
|`log`|返回指定数的对数。|
|`log10`|返回指定数（以 10 为底）的对数。|
|`max`|返回数组中的最大数（需包含两到三个数）。|
|`min`|返回数组中的最小数（需包含两到三个数）。|
|`rint`|返回最接近给定数的数学整数。|
|`round`|返回最贴近给定数的整数[^2][/sup]。|
|`sin`|返回指定数的三角函数正弦值。|
|`sinh`|返回指定数的双曲正弦值。|
|`sqrt`|返回指定数的平方根约值。|
|`tan`|返回指定数的三角函数正切值。|
|`tanh`|返回指定数的双曲正切值。|

:::

::: info 额外函数

额外地，本插件提供了一些特殊函数：

|函数|描述|
|---|---|
|`rotate(x, y, 角度)`|以弧度为单位将指定坐标对旋转。|
|`swap(x, y)`|交换给定的两个值。|
|`random()`|生成小于 1.0 的随机正数。|
|`randint(最大值)`|生成小于给定最大值的随机整数。|
|`perlin(种子, x, y, z, 频率, 倍频, 幅度)`|按给定参数生成 berlin 噪声。|
|`voronoi(种子, x, y, z, 频率)`|按给定参数生成 voronoi 噪声。|
|`ridgedmulti(种子, x, y, z, 频率, 倍频)`|按给定参数生成脊状多重分形噪声。|

:::

::: info 方块查询函数

下列函数可以用于在指定世界的编辑内容中找到特定的方块。需要注意的是这些函数仍然使用旧版本的 ID 和数据，所以对高版本（1.13+）的方块可能有难以预测的问题。
|函数|描述|
|---|---|
|`query(x, y, z, 类型, 数据)`|如果指定坐标上的方块匹配给定的数据值或种类, 则该函数会返回 true。若类型或数据为变量，则会赋值给该位置的方块。|
|`queryRel(dx, dy, dz, 类型, 数据)`|与查询相似，但会与当前查询的方块产生偏移。|
|`quesyAbs(xp, yp, zp, 类型, 数据)`|与查询相似，但使用的是世界坐标。|

:::

::: info 缓存函数

这些函数允许你访问数据缓存（基本上就是数组）。插件提供了两个缓存，一个是全局共用的缓存，而另外一个对表达式执行时开放。以 *g* 开头的表达式表示使用全局缓存，而不带 *g* 则表示使用本地缓冲。

|||
|---|---|
|`(g)megabf(索引)`|返回指定索引的缓存内容。|
|`(g)megabf(索引, 值)`|将指定索引位置的缓存填入给定的数据。|
|`(g)closest(x, y, z, 索引, 计数, 步长)`|找到最符合 x, y, z 的值的索引（如三个连续缓存值），函数将会从给定缩索引值，按步长在遍历中查找内容。|

:::

## 常量

::: info 常量

下列常量总是可用，且不能被赋值。
||||
|---|---|---|
|`e`|2.7182818284590452354|自然对数的底数，即自然常数|
|`pi`|3.14159265358979323846|圆的周长与直径之比，即圆周率|
|`true`|1|用于布尔值运算|
|`false`|0|用于布尔值运算|

:::

## 方块状态

方块状态是以如下方式显示的数据：
```
{ x=5; y=6; }
```
大部分情况下这些参数会与控制结构一同使用。

## 控制结构

::: info is/else

```
if (<条件>) <满足时分支>
if (<条件>) <满足时分支> else <不满足时分支>
```

* `<条件>` 用于决定是否继续执行代码块内容；
* 大于零的任何值都被视作 true，其他均为 false；
* `<满足时分支>` 可以为以分号分隔的单句，也可以为方块状态；

:::

::: info 注意：

关键词 else 总是会和上一个 if 相关。这意味着你可以这样写多个条件判断式：
```
**if (<条件1>) <满足时分支1> else if (<条件2>) <满足时分支2> else <不满足时分支>**
```

:::

### 循环

循环最多可进行 256 次。

::: info while

```
while (<条件>) <代码块>
do <代码块> while (<条件>);
```

* `<条件>` 用于决定是否继续循环；
* `<代码块>` 可以为以分号分隔的单句，也可以为方块状态；
* do-while 会在一次循环结束之后检查条件。

:::

::: info Java/C 语言风格的 for

```
for (<初值>; <条件>; <步长>) <代码块>
```

* `<初值>`、`<条件>` 和 `<步长>` 均为单句表达式；
* `<代码块>` 可以为以分号分隔的单句，也可以为方块状态。

:::

::: info 执行步骤

首先，`<初值>` 先进行测算，然后，每次遍历都会遵守这些步骤：

1. 如果 `<条件>` 的值小于等于 0（例如，false），则退出循环；
2. `<代码块>` 被执行；
3. `<步长>` 被执行。

:::

::: info 简单 for

```
for (<计数> = <初值>, <终值>) <代码块>
```

* `<计数>` 为变量，可用于循环计次；
* `<初值>` 和 `<终值>` 均为单句表达式；
* `<代码块>` 可以为以分号分隔的单句，也可以为方块状态。

:::

::: info 执行步骤

首先，初始计数会被赋值给 `<计数>`。之后，每次遍历都会遵守这些步骤：

1. 若当前内部循环数值大于 `<终值>`，则退出循环；
2. `<计数>` 的值会与内部循环数值相同；
3. `<代码块>` 被执行；
4. `<计数>` 的值 +1。

`<初值>` 和 `<终值>` 只会测量一次。

:::

## 另见

* Microsoft Learn, 2023.04.03, *前缀增量和减量运算符* 章节, https://learn.microsoft.com/zh-cn/cpp/c-language/prefix-increment-and-decrement-operators
* 迈克老狼, 2009.11.22,《perlin噪声函数》, https://www.cnblogs.com/mikewolf2009/articles/1608087.html
* MHols_, 2023.03.15,《【Minecraft】worldedit|generate 探索神奇的噪声——从原理到应用》, https://www.bilibili.com/read/cv22408344/
* LocusAzzurro, 2021.06.10, 《WorldEdit 对Perlin噪声函数功能的研究》, https://www.mcbbs.net/thread-491788-1-1.html

[^1]: 即 $e^x$。

[^2]: 即四舍五入。