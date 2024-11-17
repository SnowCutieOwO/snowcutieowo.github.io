import{_ as a,o,c as t,a7 as d}from"./chunks/framework.DSL0mkng.js";const m=JSON.parse('{"title":"切换存储方式","description":"","frontmatter":{},"headers":[],"relativePath":"ajLeaderboards/moving-storage-methods.md","filePath":"ajLeaderboards/moving-storage-methods.md"}'),r={name:"ajLeaderboards/moving-storage-methods.md"};function c(p,e,s,i,l,n){return o(),t("div",null,e[0]||(e[0]=[d('<h1 id="切换存储方式" tabindex="-1">切换存储方式 <a class="header-anchor" href="#切换存储方式" aria-label="Permalink to &quot;切换存储方式&quot;">​</a></h1><p>这个手把手的简单教程会教你如何切换存储方式且不丢失数据。</p><p>若你不担心数据丢失（指定时间刷新的排行榜会被重置，玩家需要重新加入才可在全时计分板中重新出现），那么请直接跳转到第二步，完成之后重启服务器即可。</p><h2 id="_1-导出" tabindex="-1">1. 导出 <a class="header-anchor" href="#_1-导出" aria-label="Permalink to &quot;1. 导出&quot;">​</a></h2><p>首先，我们需要保存所有数据为一个文件，这样才可以将其导入至其他存储方法中。</p><p>若要如此，请输入命令 <code>/ajlb export &lt;文件名称&gt;</code>，在 <code>&lt;文件名称&gt;</code> 处填入新文件的名称。文件名称无关紧要，便于记忆即可。</p><p>处理这条命令需要一些时间，取决于你存储的数据量及存储方法本身的读写速度。（例如，如果你使用的是 SQLite，则可能需要几分钟）。每次成功导入排行榜后，插件都会在聊天栏中发送进度消息。</p><h2 id="_2-切换" tabindex="-1">2. 切换 <a class="header-anchor" href="#_2-切换" aria-label="Permalink to &quot;2. 切换&quot;">​</a></h2><p>在完成到处之后，你可以在缓存存储配置文件中切换存储方法。</p><p>打开 <code>cache_storage.yml</code>，修改 <code>method</code> 项至你想要的存储方式。可选择的类型可在注释中找到（个人比较推荐 <code>h2</code>）。</p><p>在修改完毕（并保存文件）之后，重启服务器。</p><h2 id="_3-导入" tabindex="-1">3. 导入 <a class="header-anchor" href="#_3-导入" aria-label="Permalink to &quot;3. 导入&quot;">​</a></h2><p>现在你已经使用新的存储方法，但你可以注意到大部分地方都显示 <code>排行榜不存在</code>。若要修复这个，我们只需导入我们在第一步导出的数据。</p><p>只需输入命令 <code>/ajlb import &lt;文件名称&gt;</code>，在 <code>&lt;文件名称&gt;</code> 处填入上文保存的文件名称。</p><p>需要注意的是如果插件提示文件不存在，你可能需要在文件名末尾加上 <code>.json</code>。</p><p>取决于存储文件的大小，命令完成处理可能需要一段时间。（但按道理讲，如果使用的是 h2，则这只需要几秒）。</p><h2 id="_4-大功告成" tabindex="-1">4. 大功告成！ <a class="header-anchor" href="#_4-大功告成" aria-label="Permalink to &quot;4. 大功告成！&quot;">​</a></h2><p>你已经成功地切换了存储类型！可以按需删除旧的存储文件（如使用 SQLite 的话，则可以删除 <code>cache.db</code>）以及导出的文件 <code>&lt;文件名称&gt;.json</code>。</p><p>请确保只在复制完成后删除不需要的文件。</p>',19)]))}const _=a(r,[["render",c]]);export{m as __pageData,_ as default};
