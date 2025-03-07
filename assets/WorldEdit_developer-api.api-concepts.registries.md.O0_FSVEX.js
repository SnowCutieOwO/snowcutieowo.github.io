import{_ as a,C as o,c,o as n,b1 as t,G as s}from"./chunks/framework.CC7vnuC4.js";const b=JSON.parse('{"title":"注册项","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/WorldEdit"},{"title":"注册项","link":"/WorldEdit/developer-api.api-concepts.registries"}]},"headers":[],"relativePath":"WorldEdit/developer-api.api-concepts.registries.md","filePath":"WorldEdit/developer-api.api-concepts.registries.md"}'),l={name:"WorldEdit/developer-api.api-concepts.registries.md"};function d(p,e,_,f,m,u){const i=o("NolebaseGitContributors"),r=o("NolebaseGitChangelog");return n(),c("div",null,[e[0]||(e[0]=t('<h1 id="注册项" tabindex="-1">注册项 <a class="header-anchor" href="#注册项" aria-label="Permalink to &quot;注册项&quot;">​</a></h1><p>几乎 Minecraft 中的所有东西都使用一种格式来辨识各自的种类，例如 <code>minecraft:stone</code>。这一般被称作命名空间 ID（详细内容可点击链接查看）。WorldEdit 保持着一些<em>注册项</em>，允许它们读取方块、物品、生物群系、实体、流体以及其他在当前的 Minecraft 平台上以不依赖平台的方式创建的 ID。</p><p>这些注册项在大多数以 <code>*Type</code> 命名的类上可用，例如 <code>BlockType</code> 和 <code>ItemType</code>。但是，非常推荐只使用 <code>*Types</code>，这会在返回非内建类型，例如模组方块时返回 null 或 <code>get</code> 方法，以此防止出错。</p><div class="info custom-block"><p class="custom-block-title">注意：</p><p>这些注册项的常量可能会为 <code>null</code>，因为 API 不会在 Minecraft 版本之间产生变动，所以这就意味着某些方块不存在于低版本的 Minecraft 中，或者像 1.13 那样，方块的 ID 被改成英文 ID 而不是数字 ID，这就导致在 1.12 的 WorldEdit 不能正确地识别这些内容。<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>若你需要这么一个方块，你必须将这些内容包装使得它们能访问 <code>Objects.requireNonNull</code> 中的常量，或者相似的检查代码，以确保它不会在运行时出现常量缺失的情况。</p></div>',4)),s(i),s(r),e[1]||(e[1]=t('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>这里的识别问题仅针对跨版本存档描述，单方块图案一类的内容不受影响。 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2))])}const C=a(l,[["render",d]]);export{b as __pageData,C as default};
