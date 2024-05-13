# :fas fa-cog:开始
着手使用 DecentHolograms API

在本章节中，你会学习如何将 DecentHolograms 作为前置打包进你自己的插件，并使用它的 API。请注意，这之后为了让你的插件正常工作，它就会以 DecentHolograms 为硬依赖。

最新版本的插件可在 Github 仓库中的发行版页面找到。

## 添加 API

将下列内容添加至你的构建文件中，来将 DecentHolograms API 加入项目。

<!-- tabs:start -->

#### **Gradle**

### build.gradle
```Kotlin
repositories {
    maven { 
      id = "jitpack"
      url = "https://jitpack.io/"
    }
}

depencencies {
    compileOnly 'com.github.decentsoftware-eu:decentholograms:2.8.6'
}
```

#### **Maven**

### pom.xml

```XML
<repositories>
  <repository>
    <id>jitpack</id>
    <url>https://jitpack.io/</url>
  </repository>
</repositories>

<dependencies>
  <dependency>
    <groupId>com.github.decentsoftware-eu</groupId>
    <artifactId>decentholograms</artifactId>
    <version>2.8.6</version>
    <scope>provided</scope>
  </dependency>
</dependencies>
```

<!-- tabs:end -->

> [!TIP|label:收到了关于 NBT-API 不能正常载入的报错？]
> 试着将 CodeMC 的仓库加入你的构建文件：
> <!-- tabs:start -->
>
> #### **Gradle**
> 
> ### build.gradle
>
> ```Kotlin
> repositories {
>   // Other repositories, including jitpack
>   maven {
>     id = "codemc"
>     url = "https://repo.codemc.io/repository/maven-public/"
>   }
> }
> ```
>
> #### **Maven**
> 
> ```XML
> <repositories>
>   <!-- Other repositories, including jitpack -->
>   <repository>
>     <id>codemc</id>
>     <url>https://repo.codemc.io/repository/maven-public/</url>
>   </repository>
> </repositories>
> ```
> 
> <!-- tabs:end -->

## 作为（软）依赖导入

DecentHolograms 需要安装在服务器中才可使用它的 API。
为确保 DecentHolograms 先于你的插件载入，将它在你的 `plugin.yml` 或 `paper-plugin.yml` 文件中添加为软依赖，如下所示：

<!-- tabs:start -->

#### **plugin.yml**

<!-- tabs:start -->

#### **软依赖**

```YAML
name: 'MyPlugin'
author: 'Me'
version: '1.0.0'

main: 'com.example.plugin.MyPlugin'

softdepend:
  - DecentHolograms
```

#### **硬依赖**

```YAML
name: 'MyPlugin'
author: 'Me'
version: '1.0.0'

main: 'com.example.plugin.MyPlugin'

depend:
  - DecentHolograms
```

<!-- tabs:end -->

#### **paper-plugin.yml**

<!-- tabs:start -->

#### **软依赖**

```YAML
name: 'MyPlugin'
author: 'Me'
version: '1.0.0'

main: 'com.example.plugin.MyPlugin'

dependencies:
  server:
    DecentHolograms:
      load: BEFORE
      required: false # This is the default when not present
```

#### **硬依赖**

```YAML
name: 'MyPlugin'
author: 'Me'
version: '1.0.0'

main: 'com.example.plugin.MyPlugin'

dependencies:
  server:
    DecentHolograms:
      load: BEFORE
      required: true
```

<!-- tabs:end -->

<!-- tabs:end -->