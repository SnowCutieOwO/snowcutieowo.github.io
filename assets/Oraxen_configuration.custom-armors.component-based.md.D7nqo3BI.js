import{_ as t,C as a,c as p,o as l,b1 as o,G as i}from"./chunks/framework.CC7vnuC4.js";const u=JSON.parse('{"title":"基于组件（1.21.2+）","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/Oraxen"},{"title":"基于组件（1.21.2+）","link":"/Oraxen/configuration.custom-armors.component-based"}]},"headers":[],"relativePath":"Oraxen/configuration.custom-armors.component-based.md","filePath":"Oraxen/configuration.custom-armors.component-based.md"}'),r={name:"Oraxen/configuration.custom-armors.component-based.md"};function h(k,s,d,c,E,g){const e=a("NolebaseGitContributors"),n=a("NolebaseGitChangelog");return l(),p("div",null,[s[0]||(s[0]=o(`<h1 id="基于组件-1-21-2" tabindex="-1">基于组件（1.21.2+） <a class="header-anchor" href="#基于组件-1-21-2" aria-label="Permalink to &quot;基于组件（1.21.2+）&quot;">​</a></h1><p>若选择组件作为 <code>custom_armor</code> 类型，则你不会像盔甲纹饰和着色器方法那样受到任何限制。</p><p>与着色器方法不同的是，这个方法不会破坏着色器模组的兼容性，且不仅限于皮革盔甲物品。</p><p>除此之外，它也可以不仅限于盔甲类物品。你甚至可以使用纸。</p><p>其他方法过去的不足之处都不会在它这里遇到。</p><h2 id="如何配置盔甲" tabindex="-1">如何配置盔甲？ <a class="header-anchor" href="#如何配置盔甲" aria-label="Permalink to &quot;如何配置盔甲？&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">提示</p><p>确保你的 Oraxen 物品的 itemID 遵照了<code>盔甲名称_盔甲类型</code>的格式。</p><p>对于上文的示例，则为 <code>ruby_chestplate</code>、<code>ruby_leggings</code> 和 <code>ruby_boots</code>。</p><p>确保你的 <code>armor-layer</code> 文件遵照了 <code>**盔甲名称**_armor_layer_1或2.png</code> 的格式。</p><p>在下文的示例中，我们需要一份 <code>**ruby**_armor_layer_1.png</code> 和 <code>**ruby**_armor_layer_2.png</code> 文件。</p></div><p>只需设置材料，无需重复指定纹理图标：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ruby_helmet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  displayname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;gradient:#FA7CBB:#F14658&gt;Ruby Helmet&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PAPER</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Pack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    generate_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    parent_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item/generated&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    textures</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default/armors/ruby_helmet</span></span></code></pre></div><p>若要让盔甲能正常显示，可装备组件必须存在。</p><p>Oraxen 会在你没有手动指定的情况下自动为其分配。</p><p>如果你想的话，你也可以手动分配。</p><p>值必须为 <code>oraxen:盔甲名称</code>，所以在本示例中为：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ruby_helmet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Components</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    equippable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">HEAD</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">oraxen:ruby</span></span></code></pre></div>`,14)),i(e),i(n)])}const y=t(r,[["render",h]]);export{u as __pageData,y as default};
