import{_ as p,c as r,j as t,a as i,G as a,w as e,a7 as n,B as o,o as k}from"./chunks/framework.Bz4u1pnU.js";const C=JSON.parse('{"title":"💻 虚拟宝箱与钥匙","description":"","frontmatter":{},"headers":[],"relativePath":"ExcellentCrates/features.virtual-crates-keys.md","filePath":"ExcellentCrates/features.virtual-crates-keys.md"}'),h={name:"ExcellentCrates/features.virtual-crates-keys.md"};function d(g,s,E,y,c,u){const l=o("font");return k(),r("div",null,[s[12]||(s[12]=t("h1",{id:"💻-虚拟宝箱与钥匙",tabindex:"-1"},[i("💻 虚拟宝箱与钥匙 "),t("a",{class:"header-anchor",href:"#💻-虚拟宝箱与钥匙","aria-label":'Permalink to "💻 虚拟宝箱与钥匙"'},"​")],-1)),s[13]||(s[13]=t("p",null,"在本插件中，你可以创建虚拟宝箱与钥匙。你也可以相互绑定这些宝箱与钥匙，完全不限制！",-1)),t("p",null,[s[1]||(s[1]=i("虚拟宝箱可以使用实体或者虚拟钥匙，反之亦然。你甚至可以允许宝箱接受虚拟和实体钥匙")),a(l,{color:"red"},{default:e(()=>s[0]||(s[0]=[i("（玩家只需其中的一种即可开启宝箱）")])),_:1}),s[2]||(s[2]=i("！"))]),s[14]||(s[14]=n('<h2 id="创建虚拟钥匙" tabindex="-1">创建虚拟钥匙 <a class="header-anchor" href="#创建虚拟钥匙" aria-label="Permalink to &quot;创建虚拟钥匙&quot;">​</a></h2><p>若要创建一把虚拟钥匙，请按如下步骤进行操作：</p><ol><li>输入命令 <code>/crate editor</code> -&gt; 钥匙 -&gt; 创建新钥匙；</li><li>输入不重复的钥匙 ID；</li><li>新的钥匙会出现在界面中，点击它；</li><li>找到并点击 <code>Virtual（虚拟化）</code>按钮。这时插件应该会提醒该功能已启用；</li><li>钥匙现在是虚拟的了！</li></ol><p>在钥匙变为虚拟钥匙后，你可以注意到编辑器中的 <code>Key Item（钥匙物品）</code> 按钮消失了。这是正常现象，因为虚拟钥匙本身不应以实体物品的形式出现在玩家背包中。</p><h2 id="创建虚拟宝箱" tabindex="-1">创建虚拟宝箱 <a class="header-anchor" href="#创建虚拟宝箱" aria-label="Permalink to &quot;创建虚拟宝箱&quot;">​</a></h2><p>与钥匙不同，宝箱没有什么明显的方法来将其设置为虚拟。但是，这里有一个叫做 <code>/menu/</code> 的文件夹，你可以通过自行设置将其设置为虚拟宝箱并展示给玩家，这样他们就可以与虚拟宝箱进行交互。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>不要将你的虚拟宝箱给予玩家，或是将它们放在世界的任何位置。</p></div><div class="info custom-block"><p class="custom-block-title">提示</p><p>用于与虚拟宝箱交互（开启、预览奖品）的点击与 <code>config.yml</code> -&gt; Click -&gt; Click_Actions 设置的相同。</p></div><p>在 <code>/menu/</code> 文件夹中你会看见一个 <code>default.yml</code> 配置文件。这是一份示例界面配置，你可以用作参考或基于其修改为你想要的样子。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>你可随意创建配置用于虚拟宝箱菜单。只需复制已有的文件，重命名并按需求修改即可！</p></div><p>菜单配置包含了一些你设置为虚拟宝箱的重要设置项：</p>',11)),t("p",null,[s[5]||(s[5]=i("Crate -> Name（名称）- 此为该菜单中所有虚拟宝箱的名称模板。你可以在这里使用")),s[6]||(s[6]=t("a",{href:"./utility.placeholders.html#宝箱变量"},"宝箱变量",-1)),s[7]||(s[7]=i("。 Crate -> Lore（描述）- 此为该菜单中所有虚拟宝箱的描述模板。你可以在这里使用")),s[8]||(s[8]=t("a",{href:"./utility.placeholders.html#宝箱变量"},"宝箱变量",-1)),s[9]||(s[9]=i("。 Crate -> Slots（格子）- 这是让虚拟宝箱出现在菜单中")),a(l,{color:"red"},{default:e(()=>s[3]||(s[3]=[i("最重要的")])),_:1}),s[10]||(s[10]=i("设置。在这里为你的虚拟宝箱填入 ID 与格子序号，它们便会出现在对应位置。宝箱 ID 与宝箱配置文件名")),a(l,{color:"red"},{default:e(()=>s[4]||(s[4]=[i("（去掉 .yml 后缀名）")])),_:1}),s[11]||(s[11]=i("相同。"))]),s[15]||(s[15]=n(`<div class="tip custom-block"><p class="custom-block-title">提示</p><p>菜单中的虚拟宝箱与你在编辑器中设置的宝箱物品相同。</p></div><p>配置文件看起来应该像这样：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Crate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%crate_name%&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Lore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;light_gray&gt;You have &lt;light_yellow&gt;%keys%&lt;/light_yellow&gt; keys.&lt;/light_gray&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;light_gray&gt;&lt;light_yellow&gt;[▶]&lt;/light_yellow&gt; Left-Click to &lt;light_yellow&gt;preview&lt;/light_yellow&gt;.&lt;/light_gray&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;light_gray&gt;&lt;light_yellow&gt;[▶]&lt;/light_yellow&gt; Right-Click to &lt;light_yellow&gt;open&lt;/light_yellow&gt;.&lt;/light_gray&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  Slots</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    gold_crate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Golden Crate at 11 slot</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    emerald_crate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Emerald Crate at 13 slot</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    diamond_crate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Diamond Crate at 15 slot</span></span></code></pre></div>`,3))])}const f=p(h,[["render",d]]);export{C as __pageData,f as default};
