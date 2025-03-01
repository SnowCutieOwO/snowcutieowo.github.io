# 经验条件  
指导自定义经验值条件的教程。  
  
每一等级升级技能所需的经验值大小均可在插件文件夹的 `xp_requirements.yml` 文件中配置。  
  
## 表达式与变量  
在单独的配置区域中，例如默认的 `default` 配置，你可以见到一个表达式（`expression`），其中包括了表达式和等号，以计算最终的升级所需经验。  
这个表达式可任你修改，但必须为有效的 EvalEx 表达式，你可以在[这个页面](https://github.com/uklimaschewski/EvalEx#supported-operators)浏览支持的计算符号和功能。

::: info 
表达式的结果通常会取相差最小的整数。
:::

变量也支持嵌入表达式，为了让每个等级都有不同的升级所需经验值，你必须在表达式中的某一个合适的位置插入等级变量。该变量代表的是玩家当前的下一等级。该数值从 2 开始，一直到技能等级的最大值。例如，这个表达式在 `level` 变量为 5 级时，表示的是玩家从 4 级升到 5 级所需的经验值。  
  
自定义变量同样可嵌入表达式，这允许你标记并组织表达式的各个结构。除了直接在表达式中使用树脂字，你还可以通过为这个数字指定命名来将它变成一个变量。在默认的示例表达式中，`multiplier` 和 `base` 都是自定义变量。  

```multiplier * (level - 2) ^ 2 + base```

正如你所见，`multiplier` 和 `base` 都是在下方指定了值的变量名称：  

``` YAML
default:
  expression: 'multiplier * (level - 2) ^ 2 + base'
  multiplier: 100.0
  base: 100.0
```

你可以使用任何变量名，只要变量名称在下方以类似上述格式的方式定义即可嵌入表达式。  
  
## 技能覆写 
你可以通过在配置文件中添加 `skill.[技能名称]`，来创建每个技能不同的经验值要求，同时覆盖默认的经验设定。键的名称与值应当与默认设置相同。  
这里是一个覆盖了默认炼金技能经验值的示例配置：  

``` YAML
default:
  expression: 'multiplier * (level - 2) ^ 2 + base'
  multiplier: 100.0
  base: 100.0
skills:
  alchemy:
    expression: 'multiplier * (level - 2) ^ 3 + base'
    multiplier: 20.5
    base: 20.0
```

## 直接表示  
除了使用等式，经验设置还允许直接使用一串包含整数的列表表示。可在 `default` 设置下创建一个名为 `values` 的列表，也可在特定技能设置区下直接创建。  
这里是一个使用了直接表示经验值列表的示例配置：  

``` YAML
default:
  values:
    - 100
    - 200
    - 300
    - 500
    - 750
    - 1250
    - 1720
```

在该列表里的第一个值表示从 1 级升到 2 级的经验值条件。
