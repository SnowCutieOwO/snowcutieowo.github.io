import{_ as a,c as i,a7 as e,o as t}from"./chunks/framework.Bz4u1pnU.js";const k=JSON.parse('{"title":"基于盔甲纹饰（1.20-1.21.1）","description":"","frontmatter":{},"headers":[],"relativePath":"Oraxen/configuration.custom-armors.trims-based.md","filePath":"Oraxen/configuration.custom-armors.trims-based.md"}'),n={name:"Oraxen/configuration.custom-armors.trims-based.md"};function p(l,s,r,o,h,d){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="基于盔甲纹饰-1-20-1-21-1" tabindex="-1">基于盔甲纹饰（1.20-1.21.1） <a class="header-anchor" href="#基于盔甲纹饰-1-20-1-21-1" aria-label="Permalink to &quot;基于盔甲纹饰（1.20-1.21.1）&quot;">​</a></h1><p>若你选择了纹饰作为 <code>custom-armor</code> 的类型，插件会帮你处理好大部分内容。</p><p>与核心着色器方法不同的是，盔甲纹饰可以不仅限于皮革材质。</p><p>默认情况下，Oraxen 使用锁链（<code>CHAINMAIL</code>），但可以在 <code>settings.yml</code> 中修改这些内容。</p><p>这之后，Oraxen 会基于你的自定义盔甲配置生成数据包。</p><p>因为它需要用到数据包，你需要在添加/移除盔甲套装后完全重启服务器才可应用改动。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>将 <code>CustomArmor.armor_type</code> 设置为 <code>TRIMS</code> 后，你需要：</p><ol><li>启动服务器，让其生成数据包</li><li>关闭服务器</li><li>再次重启，使其应用先前生成的数据包</li></ol></div><h2 id="如何配置盔甲" tabindex="-1">如何配置盔甲？ <a class="header-anchor" href="#如何配置盔甲" aria-label="Permalink to &quot;如何配置盔甲？&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">提示</p><p>确保你的 Oraxen 物品的 itemID 遵照了<code>盔甲名称_盔甲类型</code>的格式。</p><p>对于上文的示例，则为 <code>ruby_chestplate</code>、<code>ruby_leggings</code> 和 <code>ruby_boots</code>。</p><p>确保你的 <code>armor-layer</code> 文件遵照了 <code>**盔甲名称**_armor_layer_1或2.png</code> 的格式。</p><p>在下文的示例中，我们需要一份 <code>**ruby**_armor_layer_1.png</code> 和 <code>**ruby**_armor_layer_2.png</code> 文件。</p></div><p>只需设置材料并指定两次纹理图标即可：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ruby_helmet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  displayname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;gradient:#FA7CBB:#F14658&gt;红宝石头盔&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CHAINMAIL_HELMET</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Pack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    generate_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    parent_model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item/generated&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    textures</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default/armors/ruby_helmet</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default/armors/ruby_helmet</span></span></code></pre></div><p><code>trim_pattern</code> 必须存在才能让盔甲正常显示。</p><p>Oraxen 会在未指定该内容的情况下自动分配。</p><p>你也可以在 <code>trim_pattern</code> 下手动设置。</p><p>值应当为 <code>oraxen:盔甲名称</code>，所以在我们的示例中，它应该像这样：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ruby_helmet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  trim_pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">oraxen:ruby</span></span></code></pre></div>`,16)]))}const E=a(n,[["render",p]]);export{k as __pageData,E as default};