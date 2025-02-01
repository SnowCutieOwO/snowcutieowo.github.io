import{_ as a,c as p,o,al as t}from"./chunks/framework.LK_RS8Nx.js";const h=JSON.parse('{"title":"HappyHUD","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/compatibility.happyhud.md","filePath":"Oraxen/compatibility.happyhud.md"}'),c={name:"Oraxen/compatibility.happyhud.md"};function r(d,e,i,s,n,l){return o(),p("div",null,e[0]||(e[0]=[t('<h1 id="happyhud" tabindex="-1">HappyHUD <a class="header-anchor" href="#happyhud" aria-label="Permalink to &quot;HappyHUD&quot;">​</a></h1><p>HappyHUD 允许你制作真正的自定义界面</p><p>本章节会列出让 HappyHUD 与 Oraxen 正确兼容的步骤。</p><p>如下所示：</p><ol><li><code>settings.yml</code> 下设置 <code>hide_scoreboard_numbers: false</code></li><li>如果存在，则删除 <code>Oraxen/pack/shaders/core/</code> 下的 <code>render_text.vsh</code> 和 <code>render_text.json</code> 这两个文件</li><li>在 HappyHUD 的配置文件，启用 <code>copy-resource-pack</code> 并设置 <code>path: &quot;Oraxen/pack/assets&quot;</code>（需要 HappyHUD 版本高于 2.7-SNAPSHOT）</li></ol><div class="warning custom-block"><p class="custom-block-title">警告</p><p>如果你真的需要隐藏计分板上的数字，可以将 Oraxen 的光影文件手动合并至 HappyHUD 的文件夹，路径为 <code>HappyHUD/pack/minecraft/shaders/core/</code>。</p></div>',6)]))}const y=a(c,[["render",r]]);export{h as __pageData,y as default};
