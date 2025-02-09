import{_ as t,c as i,o as l,al as o}from"./chunks/framework.ySGSHPST.js";const u=JSON.parse('{"title":"快照","description":"","frontmatter":{},"headers":[],"relativePath":"WorldEdit/usage.snapshots.md","filePath":"WorldEdit/usage.snapshots.md"}'),a={name:"WorldEdit/usage.snapshots.md"};function d(r,e,s,c,n,p){return l(),i("div",null,e[0]||(e[0]=[o('<h1 id="快照" tabindex="-1">快照 <a class="header-anchor" href="#快照" aria-label="Permalink to &quot;快照&quot;">​</a></h1><p>WorldEdit 的一个强大功能就是它可以载入世界的部分结构，由选区框定，做到在不关闭服务器或关闭游戏使用第三方编辑器的情况下将该部分区域从备份的存档还原。这种方式可以解决很多问题，例如撤销熊孩子的破坏、还原世界因保存出错导致的存档损坏，甚至是还原你中途废弃的一些建筑项目。</p><nav class="table-of-contents"><ul><li><a href="#配置快照">配置快照</a><ul><li><a href="#支持的归档格式">支持的归档格式</a></li></ul></li><li><a href="#使用快照">使用快照</a></li></ul></nav><h2 id="配置快照" tabindex="-1">配置快照 <a class="header-anchor" href="#配置快照" aria-label="Permalink to &quot;配置快照&quot;">​</a></h2><p>若要 WorldEdit 能够读取你的备份，你就需要为其指定一个文件夹用于存储备份。路径可以在配置文件中找到，且它的相对根目录为 <code>/.minecraft</code>（不是插件文件夹里面的 WorldEdit 文件夹！）。你也可以在备份文件存储在服务器之外的情况下使用绝对路径（例如在另一分区中，这个建议对大部分硬盘读取失败的情况有效）。</p><p>在设置后，只需将备份文件或世界的压缩包文件放入你的存档备份文件夹即可。下文为一个备份文件夹的示例结构。</p><div class="info custom-block"><p class="custom-block-title">示例：备份储存的可能结构</p><ul><li><img src="https://worldedit.enginehub.org/en/latest/_images/folder.png" alt="img"> <code>backups/</code>（此为配置文本下的文件夹名称） <ul><li><img src="https://worldedit.enginehub.org/en/latest/_images/folder.png" alt="img"> <code>world/</code>（此为世界名称） <ul><li><img src="https://worldedit.enginehub.org/en/latest/_images/zip.png" alt="img"> <code>2019-06-15-03-00-00.zip</code>（对该世界的备份） <ul><li><img src="https://worldedit.enginehub.org/en/latest/_images/folder.png" alt="img"> <code>world/</code>（必须与上述世界名称相匹配） <ul><li><img src="https://worldedit.enginehub.org/en/latest/_images/folder.png" alt="img"> <code>region/</code>（包括该世界的 <code>.mca</code> 文件）</li></ul></li></ul></li><li><img src="https://worldedit.enginehub.org/en/latest/_images/folder.png" alt="img"> <code>2019-05-15-03-00-00</code>（备份不必为压缩包文件） <ul><li><img src="https://worldedit.enginehub.org/en/latest/_images/folder.png" alt="img"> <code>world/</code></li></ul></li></ul></li><li><img src="https://worldedit.enginehub.org/en/latest/_images/folder.png" alt="img"> <code>world_nether/</code>（另外一个世界名称） <ul><li><img src="https://worldedit.enginehub.org/en/latest/_images/zip.png" alt="img"> <code>2019-06-15-03-00-00.zip</code></li></ul></li><li><img src="https://worldedit.enginehub.org/en/latest/_images/zip.png" alt="img"> <code>2019-06-01-03-00-00.zip</code>（这个备份保存了多个世界） <ul><li><img src="https://worldedit.enginehub.org/en/latest/_images/folder.png" alt="img"> <code>world/</code><ul><li><img src="https://worldedit.enginehub.org/en/latest/_images/folder.png" alt="img"> <code>region/</code>（所有 <code>.mca</code> 文件都在这里）</li></ul></li><li><img src="https://worldedit.enginehub.org/en/latest/_images/folder.png" alt="img"> <code>world_nether/</code></li></ul></li><li><img src="https://worldedit.enginehub.org/en/latest/_images/zip.png" alt="img"> <code>2019-05-01-03-00-00.zip</code>（另一份一个月之前的备份）</li></ul></li></ul></div><p>你可能注意到了，每个单独的备份都有各自的时间戳。WorldEdit 给这些备份以时间戳命名以表明哪些备份是最新的。世界文件夹必须存在于备份文件中，而世界文件夹中又必须有一个区域文件夹。你可以在顶级目录中拥有多个世界存档文件夹的备份，或者为单独世界文件夹添加多个备份。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果你正在使用 Linux 等类似的系统，你可以使用下列选项在合适的文件夹中创建一个 zip 文件备份：<code>zip -v backups\\`date &quot;+%Y-%m-%d-%H-%M-%S&quot;`.zip -r world</code>。</p></div><h3 id="支持的归档格式" tabindex="-1">支持的归档格式 <a class="header-anchor" href="#支持的归档格式" aria-label="Permalink to &quot;支持的归档格式&quot;">​</a></h3><p>WorldEdit 本身通过 Java 的 zip 库支持 zip 文件。但是，Java 的 zip 库只能支持那些最基础的 zip 文件。如果你在使用 zip 的时候遇到了莫名其妙的读取错误，你可能就需要安装 TrueZip。若你要使用其他的归档格式，例如 tarballs，则你也可以安装 TrueZip。</p><p>TrueZip 可以<a href="https://repo.maven.apache.org/maven2/de/schlichtherle/truezip/6.8.1/truezip-6.8.1.jar" target="_blank" rel="noreferrer">从 maven 仓库下载 Jar 文件</a>并将其保存为 <code>truezip.jar</code> 文件。这个文件在 Bukkit 服务端下应该被放在 <code>plugins</code> 或 <code>plugins/WorldEdit</code>，在其他平台上应该被放在 <code>mods</code> 文件夹！）。你也可以在备份文件存储在服务器之外的情况下使用绝对路径（例如在另一分区中，这个建议对大部分硬盘读取失败的情况有效）。 [!TIP|label:提示]<br> 使用归档备份（例如，zip 文件）可以保存硬盘空间，但相对会在还原的时候提升 CPU 用量。这些利弊应当由你自己权衡。</p><h2 id="使用快照" tabindex="-1">使用快照 <a class="header-anchor" href="#使用快照" aria-label="Permalink to &quot;使用快照&quot;">​</a></h2><p>现在你的快照已被充分配置，使用它们非常简单。只需要选中一块区域并使用命令 <code>//restore</code> 即可。</p><p>默认情况下，WorldEdit 会为当前的世界寻找最近的备份，并从中为你恢复选区中的内容。</p><p>若你不想要使用最近的备份（建筑可能在备份的时候就已经被破坏，所以你需要找一份时间更早的备份），这里有额外的命令帮助你选择特定时间点的存档。</p><p>若要开始，你需要使用命令 <code>/snap list</code>，这会为你当前的世界列出所有快照。</p><p>你也可以使用 <code>/snap use latest</code> 或 <code>/snap yse [名称]</code> 来选用最新的快照或是按名称选用指定的快照。你也可以使用命令 <code>/snap sel &lt;数字&gt;</code> 来按列表中的序号选择所要使用的快照。</p><p>如果你知道你需要进行还原的具体时间点，或者你需要指定时间点附近的备份，你可以使用命令 <code>/snap before &lt;时间&gt;</code> 或 <code>/snap after &lt;时间&gt;</code> 来找到所指定时间点之后/之前的备份快照。这些命令需要一个与备份文件名称相似的时间戳作为参数，或者甚至是一个用词汇表示的自然时间，例如 <code>/snap before &quot;last friday&quot;</code>。</p>',19)]))}const m=t(a,[["render",d]]);export{u as __pageData,m as default};
