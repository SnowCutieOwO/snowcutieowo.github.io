import{_ as t,C as a,c,o as s,b1 as d,G as o}from"./chunks/framework.CC7vnuC4.js";const r="/assets/image.DbYtHZ5c.png",f=JSON.parse('{"title":"消息文件","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/AuraSkills"},{"title":"消息文件","link":"/AuraSkills/messages"}]},"headers":[],"relativePath":"AuraSkills/messages.md","filePath":"AuraSkills/messages.md"}'),n={name:"AuraSkills/messages.md"};function u(h,e,m,p,_,g){const l=a("NolebaseGitContributors"),i=a("NolebaseGitChangelog");return s(),c("div",null,[e[0]||(e[0]=d('<h1 id="消息文件" tabindex="-1">消息文件 <a class="header-anchor" href="#消息文件" aria-label="Permalink to &quot;消息文件&quot;">​</a></h1><p>消息文件的配置教程</p><p><code>messages/</code> 文件夹包含许多语言的消息和翻译文件。所有内容均可翻译，包括命令、菜单与聊天栏消息。</p><p>插件使用的默认语言可以在 <code>config.yml</code> 中的 <code>default_language</code> 设置。如果有需要，玩家还可以输入 <code>/skills lang [语言]</code> 修改显示语言，<code>[语言]</code> 为配置文本的 <code>languages</code> 列表中的有效二字代码（也即 <code>messages_</code> 文件名称后的字符）。</p><h2 id="编辑消息" tabindex="-1">编辑消息 <a class="header-anchor" href="#编辑消息" aria-label="Permalink to &quot;编辑消息&quot;">​</a></h2><p>编辑消息时切记：</p><ul><li>颜色与样式为 MiniMessage 格式。但仍然兼容旧版的 Bukkit 颜色代码 <code>&amp;</code>。</li><li>请勿修改 <code>{诸如此类}</code> 格式的任意消息变量。这些都会在显示时被插件解析为实际数据。</li><li>不要使用消息文件编辑菜单中的颜色或样式。这些完全可以在<a href="./menus">菜单</a>配置中完成。你只在修改消息的实际文本时才需要编辑菜单消息。</li><li><code>menus</code> 的消息、能力描述及其他消息会自动换行。无需手动插入换行符 <code>\\n</code>。</li><li>请勿改动 <code>file_version</code> 设置。它用于标记消息文件版本，以便在更新时增加新的内容。</li></ul><h2 id="yaml-格式提示" tabindex="-1">YAML 格式提示 <a class="header-anchor" href="#yaml-格式提示" aria-label="Permalink to &quot;YAML 格式提示&quot;">​</a></h2><ul><li>**不要使用 TAB 制表符，**只有空格才能缩进。整个文件应当保持统一的 2 个空格缩进。</li><li>如果你的消息以 <code>&amp;</code>、<code>{</code> 或 <code>}</code> 开头，<strong>请将整条消息以英文双引号括起</strong>（如 <code>&quot;消息文本&quot;</code>）。如果不确定，也请括起。</li></ul><h3 id="单位" tabindex="-1">单位 <a class="header-anchor" href="#单位" aria-label="Permalink to &quot;单位&quot;">​</a></h3><p>所有变量 <code>{xp_unit}</code>、<code>{mana_unit}</code> 与 <code>{hp_unit}</code> 都会被替换为 <code>units</code> 部分的内容。这些变量可以在需要的时候被添加至任何消息中。</p><h2 id="添加翻译" tabindex="-1">添加翻译 <a class="header-anchor" href="#添加翻译" aria-label="Permalink to &quot;添加翻译&quot;">​</a></h2><p>如果你的语言尚无译文，或你的语言中有错译的情况，你可以在 <a href="https://crowdin.com/project/aureliumskills" target="_blank" rel="noreferrer">Crowdin</a> 上进行检查。你可以直接逐个翻译消息，也可以直接上传译毕的消息文件。如果你的语言没有出现于此，你可以在 <a href="https://discord.gg/Bh2EZfB" target="_blank" rel="noreferrer">Discord</a> 上询问并要求添加。</p><p><img src="'+r+'" alt="img"></p><p>若要上传消息文件，点击“上传翻译”。若要下载消息文件，请点击“下载”。</p><p>进度条中的蓝色部分表示翻译已存在但尚未通过开发者/校对者审查。这些译文仍然会包含在下载的文件中。</p><h2 id="翻译准则" tabindex="-1">翻译准则 <a class="header-anchor" href="#翻译准则" aria-label="Permalink to &quot;翻译准则&quot;">​</a></h2><p>在 Crowdin 提交社区翻译前，请将如下准则牢记于心：</p><ul><li>请勿修改原文本中的彩色代码，添加额外的彩色或样式标签。样式应当与 messages_en.yml 中的一致。</li><li>不要去除消息文本中的任何变量。</li><li>尽可能达意。译文不应影响描述与名称的意义。</li><li>请勿重复翻译；若需要更新，请将其添加至已有文件。</li><li>尽可能格式一致，如断句、颜色与大小写。你可能需要根据上下文/参数移动一些颜色标签的位置。</li></ul><h2 id="添加文件" tabindex="-1">添加文件 <a class="header-anchor" href="#添加文件" aria-label="Permalink to &quot;添加文件&quot;">​</a></h2><p>为了添加原本不存在或未载入的消息文件，你必须将其加入 <code>config.yml</code> 下的 <code>lanaguge</code> 或 <code>default_language</code> 列表中。其必须对应有效的语言代码，即文件名 <code>message_</code> 后，<code>.yml</code> 前的内容。部分语言会在其代码后额外拥有一段地区代码，以 <code>-</code> 分隔。例如，巴西葡萄牙语的格式代码为 <code>pt-BR</code>。</p>',21)),o(l),o(i)])}const k=t(n,[["render",u]]);export{f as __pageData,k as default};
