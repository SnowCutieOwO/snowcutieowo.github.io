import{_ as o,o as t,c as d,a7 as c}from"./chunks/framework.DSL0mkng.js";const f=JSON.parse('{"title":"区域","description":"","frontmatter":{},"headers":[],"relativePath":"WorldEdit/developer-api.api-concepts.regions.md","filePath":"WorldEdit/developer-api.api-concepts.regions.md"}'),r={name:"WorldEdit/developer-api.api-concepts.regions.md"};function a(i,e,p,n,s,l){return t(),d("div",null,e[0]||(e[0]=[c('<h1 id="区域" tabindex="-1">区域 <a class="header-anchor" href="#区域" aria-label="Permalink to &quot;区域&quot;">​</a></h1><p>WorldEdit 使用区域来定义需要被操作的地方。一个 <code>Region</code> 对象是一些位置的几何，通常与 <code>World</code> 对象相关联。区域可以在任何情况下算作连续区域。</p><p>区域集成了 <code>Iterable&lt;BlockVector&gt;</code>，这意味着获取<em>任意</em>区域的所有点最快方法是使用 <code>for-each</code> 循环，例如，<code>for (BlockVector point : region)</code>。额外地，这里有更方便的方法来返回最小值、最大值、红心、区域、宽度、长度、高度、区块和方块区块等值。你也可以简单地对区域使用 <code>expand()</code>、<code>contract()</code> 和 <code>shift()</code> 方法，这些函数的工作方式与同名命令相同。需要注意的是这些方法<em>不会</em>修改任何方块。</p><p>创建一个区域与调用所要对应区域的构建器一样建安。简单来说，如果你想要一个 <code>CuboidRegion</code>，但 WorldEdit 的每种选区各有对应的子类，你也可以集成你自己的！</p><p>普通区域的使用可以体现在执行方和剪贴板边界等常见功能上。</p>',5)]))}const _=o(r,[["render",a]]);export{f as __pageData,_ as default};