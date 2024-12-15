import{_ as e,c as t,a7 as l,o}from"./chunks/framework.Bz4u1pnU.js";const u=JSON.parse('{"title":"语言文件","description":"","frontmatter":{},"headers":[],"relativePath":"Shopkeepers/installtion-updating.language-files.md","filePath":"Shopkeepers/installtion-updating.language-files.md"}'),r={name:"Shopkeepers/installtion-updating.language-files.md"};function n(i,a,d,c,p,s){return o(),t("div",null,a[0]||(a[0]=[l('<h1 id="语言文件" tabindex="-1">语言文件 <a class="header-anchor" href="#语言文件" aria-label="Permalink to &quot;语言文件&quot;">​</a></h1><h2 id="默认译文" tabindex="-1">默认译文 <a class="header-anchor" href="#默认译文" aria-label="Permalink to &quot;默认译文&quot;">​</a></h2><p>本插件默认支持/包括的语言如下：</p><ul><li>英语（<code>en-default</code>，默认语言）</li><li>德语（<code>de</code>）</li></ul><p>你可以在<a href="./installtion-updating.configuration.html">配置文件</a>中通过修改 <code>language</code> 项切换到其他语言。例如，设置为 <code>langauge: de</code> 可以使用内置的德语。</p><h2 id="其他语言均由社区贡献" tabindex="-1">其他语言均由社区贡献！ <a class="header-anchor" href="#其他语言均由社区贡献" aria-label="Permalink to &quot;其他语言均由社区贡献！&quot;">​</a></h2><p>对于其他语言，你可以自行翻译，或参考社区的<a href="https://github.com/Shopkeepers/Language-Files" target="_blank" rel="noreferrer">语言文档项目</a>，可以浏览其他人是否已经将本插件翻译为你使用的语言。如果没有，或者已有的存在不足，<strong>欢迎你的贡献</strong>！</p><h2 id="使用自定义语言文件" tabindex="-1">使用自定义语言文件 <a class="header-anchor" href="#使用自定义语言文件" aria-label="Permalink to &quot;使用自定义语言文件&quot;">​</a></h2><p>语言文件的格式为 <code>language-&lt;语言代码&gt;.yml</code>，并位于插件存储目录的 <code>lang</code> 文件夹下。插件会在你首次选择某个语言时将它们下载到这里。</p><p>默认的语言文件 <code>language-en-default.yml</code> 一直存在于该文件夹下，不可删除：它会在插件启动时被覆盖，且可以用作译文或自定义语言的模板。如果你想要翻译或修改默认语言：</p><ul><li>复制默认文件并将其重命名，如 <code>language-en-custom.yml</code>。命名格式需要遵守上文提及的格式。</li><li>按需修改新语言文件中的内容。</li><li>将设置 <code>language: &lt;语言代码&gt;</code> 的内容进行调整，如 <code>langauge: en-custom</code>，使得插件应用自定义语言。</li><li>重载插件。</li><li>检查服务器日志：插件将会尝试检测语言文件中的问题，例如缺失的字符串或额外的消息。如果发现问题，插件会尝试切换回默认语言文件，直到你解决它们。</li></ul><h3 id="文本格式" tabindex="-1">文本格式 <a class="header-anchor" href="#文本格式" aria-label="Permalink to &quot;文本格式&quot;">​</a></h3><p>你可以使用基于 <code>&amp;</code> 的<a href="https://zh.minecraft.wiki/w/%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81" target="_blank" rel="noreferrer">颜色代码</a> 装饰消息。例如，<code>&amp;c</code> 会将文本变成红色。</p><p>你也可以使用 HEX 彩色，既可以用 Bukkit 内置的格式（&amp;x&amp;a&amp;a&amp;b&amp;b&amp;c&amp;c），也可以用更复杂的形式（&amp;#aabbcc）。</p><p>其他文本内容（字体、悬浮文本、点击交互）暂不支持。</p><h3 id="排除问题" tabindex="-1">排除问题 <a class="header-anchor" href="#排除问题" aria-label="Permalink to &quot;排除问题&quot;">​</a></h3><p>请确保你的文件编码为 <strong>UTF-8</strong>。诸如 <a href="https://notepad-plus-plus.org/" target="_blank" rel="noreferrer">Notepad++</a> 的编辑器允许你简单地设置或修改语言文件的编码。建议在着手翻译或制作自定义语言文件时就使用 UTF-8 编码，因为文件转码可能会让某些特殊字符丢失。</p>',17)]))}const g=e(r,[["render",n]]);export{u as __pageData,g as default};