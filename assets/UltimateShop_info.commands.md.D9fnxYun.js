import{_ as r,C as p,c as n,o as a,j as o,al as i,a as t,G as s,w as d}from"./chunks/framework.ySGSHPST.js";const v=JSON.parse('{"title":"⌨️ 命令","description":"","frontmatter":{},"headers":[],"relativePath":"UltimateShop/info.commands.md","filePath":"UltimateShop/info.commands.md"}'),u={name:"UltimateShop/info.commands.md"},m={id:"shop-givesellstick-物品-id-玩家-id-数量-仅付费版本",tabindex:"-1"},g={id:"shop-getplaceholdervalue-文本-仅付费版本",tabindex:"-1"},b={id:"shop-resetrandomplaceholder-变量-id-仅付费版本",tabindex:"-1"},f={id:"shop-setrandomplaceholder-变量-id-元素-仅付费版本",tabindex:"-1"},h={id:"shop-editor-仅付费版本",tabindex:"-1"};function I(D,l,k,T,P,q){const e=p("font");return a(),n("div",null,[l[39]||(l[39]=o("h1",{id:"⌨️-命令",tabindex:"-1"},[t("⌨️ 命令 "),o("a",{class:"header-anchor",href:"#⌨️-命令","aria-label":'Permalink to "⌨️ 命令"'},"​")],-1)),l[40]||(l[40]=o("h2",{id:"shop-menu-菜单id-商店id",tabindex:"-1"},[t("/shop menu <菜单ID>/<商店ID> "),o("a",{class:"header-anchor",href:"#shop-menu-菜单id-商店id","aria-label":'Permalink to "/shop menu <菜单ID>/<商店ID>"'},"​")],-1)),l[41]||(l[41]=o("p",null,"打开普通菜单或商店菜单。",-1)),l[42]||(l[42]=o("p",null,[t("需要权限 ``ultimateshop.menu"),o("code",null,"。 这个指令可在控制台执行，只需在末尾添加 "),t("<玩家>"),o("code",null,"参数即可。如"),t("/shop menu Shop1 Player1`。")],-1)),o("p",null,[l[1]||(l[1]=t("命令末尾可添加 ")),l[2]||(l[2]=o("code",null,"-b",-1)),l[3]||(l[3]=t(" 参数，来无视菜单开启条件检查。")),o("strong",null,[s(e,{color:"Red"},{default:d(()=>l[0]||(l[0]=[t("（仅付费版本）")])),_:1})])]),l[43]||(l[43]=i('<h2 id="shop-quickbuy-商店id-商品id-数量" tabindex="-1">/shop quickbuy &lt;商店ID&gt; &lt;商品ID&gt; [数量] <a class="header-anchor" href="#shop-quickbuy-商店id-商品id-数量" aria-label="Permalink to &quot;/shop quickbuy &lt;商店ID&gt; &lt;商品ID&gt; \\[数量\\]&quot;">​</a></h2><p>快速购买商店中的指定物品。</p><p>需要权限 <code>ultimateshop.quickbuy</code>。</p><p>这个指令可在控制台执行，只需在末尾添加 <code>&lt;玩家&gt;</code> 参数即可。如 <code>/shop quickbuy ore A 5 Player1</code>。</p><h2 id="shop-quicksell-商店id-商品id-数量" tabindex="-1">/shop quicksell &lt;商店ID&gt; &lt;商品ID&gt; [数量] <a class="header-anchor" href="#shop-quicksell-商店id-商品id-数量" aria-label="Permalink to &quot;/shop quicksell &lt;商店ID&gt; &lt;商品ID&gt; \\[数量\\]&quot;">​</a></h2><p>与快速购买相同，将 quickbuy 替换为 quicksell 即可。</p>',6)),o("p",null,[l[5]||(l[5]=o("code",null,"amount",-1)),l[6]||(l[6]=t(" 可替换为 ")),l[7]||(l[7]=o("code",null,"*",-1)),l[8]||(l[8]=t(" 符号，此时插件会将背包中所有符合条件的物品出售。")),o("strong",null,[s(e,{color:"Red"},{default:d(()=>l[4]||(l[4]=[t("（仅付费版本）")])),_:1})])]),l[44]||(l[44]=o("h2",{id:"shop-reload",tabindex:"-1"},[t("/shop reload "),o("a",{class:"header-anchor",href:"#shop-reload","aria-label":'Permalink to "/shop reload"'},"​")],-1)),l[45]||(l[45]=o("p",null,"重载插件，一些配置需要你重启服务器才可生效。",-1)),l[46]||(l[46]=o("p",null,[t("需要权限 "),o("code",null,"ultimateshop.reload"),t("。")],-1)),o("h2",m,[l[10]||(l[10]=t("/shop givesellstick <物品 ID> <玩家 ID> [数量] ")),o("strong",null,[s(e,{color:"Red"},{default:d(()=>l[9]||(l[9]=[t("（仅付费版本）")])),_:1})]),l[11]||(l[11]=t()),l[12]||(l[12]=o("a",{class:"header-anchor",href:"#shop-givesellstick-物品-id-玩家-id-数量-仅付费版本","aria-label":'Permalink to "/shop givesellstick <物品 ID> <玩家 ID> \\[数量\\] **<font color="Red">（仅付费版本）</font>**"'},"​",-1))]),l[47]||(l[47]=i('<p>给予指定玩家指定数量（不填则默认为 1）的出售魔杖。</p><p>需要权限 <code>ultimateshop.givesellstick</code>。</p><h2 id="shop-setbuytimes-商店-id-物品-id-玩家-global-次数" tabindex="-1">/shop setbuytimes &lt;商店 ID&gt; &lt;物品 ID&gt; &lt;玩家&gt;/global [次数] <a class="header-anchor" href="#shop-setbuytimes-商店-id-物品-id-玩家-global-次数" aria-label="Permalink to &quot;/shop setbuytimes &lt;商店 ID&gt; &lt;物品 ID&gt; &lt;玩家&gt;/global \\[次数\\]&quot;">​</a></h2><p>将玩家对指定商品的购买次数限制在特定值。</p><p>需要权限 <code>ultimateshop.setbuytimes</code>。</p><p>若不指定 <code>次数</code> 参数，则插件会重置购买/出售次数。</p>',6)),o("p",null,[l[14]||(l[14]=o("code",null,"物品 ID",-1)),l[15]||(l[15]=t(" 可被替换为 ")),l[16]||(l[16]=o("code",null,"*",-1)),l[17]||(l[17]=t(" 符号，插件会自动选择商店内的所有物品。")),o("strong",null,[s(e,{color:"Red"},{default:d(()=>l[13]||(l[13]=[t("（仅付费版本）")])),_:1})])]),l[48]||(l[48]=i('<p><code>setselltimes</code> 命令用法与其相似。</p><div class="info custom-block"><p class="custom-block-title">信息</p><p>global 参数表示为 <code>{buy-times-server}</code> 或 <code>{sell-times-server}</code> 变量设置购买/出售次数，而非所有玩家的购买/出售次数。</p><p><strong>无法</strong>通过本插件的命令一次性设置所有玩家的数据。因为假设你的玩家数据量较多，在没有优化代码的支撑下，服务器会立即崩溃。很多插件都没有这个功能，但仍有极少部分以此为卖点。我们从未承认在任何场合提供此功能，且它也不会在未来更新至本插件，因为它的开发非常耗时且意义不大。你可以通过<strong>自动重置</strong>功能实现相似效果，有关内容可以在这里浏览。</p></div><h2 id="shop-addbuytimes-addselltimes-商店-id-物品-id-玩家-global-次数" tabindex="-1">/shop addbuytimes/addselltimes &lt;商店 ID&gt; &lt;物品 ID&gt; &lt;玩家&gt;/global &lt;次数&gt; <a class="header-anchor" href="#shop-addbuytimes-addselltimes-商店-id-物品-id-玩家-global-次数" aria-label="Permalink to &quot;/shop addbuytimes/addselltimes &lt;商店 ID&gt; &lt;物品 ID&gt; &lt;玩家&gt;/global &lt;次数&gt;&quot;">​</a></h2><p>向指定玩家的指定商店内物品添加指定的购买次数。</p><p>需要权限 <code>ultimateshop.addbuytimes</code></p>',5)),o("p",null,[l[19]||(l[19]=o("code",null,"物品 ID",-1)),l[20]||(l[20]=t(" 可被替换为 ")),l[21]||(l[21]=o("code",null,"*",-1)),l[22]||(l[22]=t(" 符号，插件会自动选择商店内的所有物品。")),o("strong",null,[s(e,{color:"Red"},{default:d(()=>l[18]||(l[18]=[t("（仅付费版本）")])),_:1})])]),l[49]||(l[49]=i('<p><code>addselltimes</code> 命令用法与其相似。</p><h2 id="shop-sellall" tabindex="-1">/shop sellall <a class="header-anchor" href="#shop-sellall" aria-label="Permalink to &quot;/shop sellall&quot;">​</a></h2><p>打开全部出售菜单。</p><p>需要权限 <code>ultimateshop.sellall</code>。</p><h2 id="shop-saveitem-物品-id" tabindex="-1">/shop saveitem &lt;物品 ID&gt; <a class="header-anchor" href="#shop-saveitem-物品-id" aria-label="Permalink to &quot;/shop saveitem &lt;物品 ID&gt;&quot;">​</a></h2><p>保存手持的物品。</p><p>需要权限 <code>ultimateshop.saveitem</code>。</p><h2 id="shop-generateitemformat" tabindex="-1">/shop generateitemformat <a class="header-anchor" href="#shop-generateitemformat" aria-label="Permalink to &quot;/shop generateitemformat&quot;">​</a></h2><p>将手持物品数据转化为本插件特有的物品格式，并将其保存在 <code>plugins/UltimateShop</code> 文件夹下。</p><p>需要权限 <code>ultimateshop.generateitemformat</code>。</p>',10)),o("h2",g,[l[24]||(l[24]=t("/shop getplaceholdervalue <文本> ")),o("strong",null,[s(e,{color:"Red"},{default:d(()=>l[23]||(l[23]=[t("（仅付费版本）")])),_:1})]),l[25]||(l[25]=t()),l[26]||(l[26]=o("a",{class:"header-anchor",href:"#shop-getplaceholdervalue-文本-仅付费版本","aria-label":'Permalink to "/shop getplaceholdervalue <文本> **<font color="Red">（仅付费版本）</font>**"'},"​",-1))]),l[50]||(l[50]=o("p",null,"解析输入文本中的变量并返回。",-1)),l[51]||(l[51]=o("p",null,[t("需要权限 "),o("code",null,"ultimateshop.getplaceholdervalue"),t("。")],-1)),o("h2",b,[l[28]||(l[28]=t("/shop resetrandomplaceholder <变量 ID> ")),o("strong",null,[s(e,{color:"Red"},{default:d(()=>l[27]||(l[27]=[t("（仅付费版本）")])),_:1})]),l[29]||(l[29]=t()),l[30]||(l[30]=o("a",{class:"header-anchor",href:"#shop-resetrandomplaceholder-变量-id-仅付费版本","aria-label":'Permalink to "/shop resetrandomplaceholder <变量 ID> **<font color="Red">（仅付费版本）</font>**"'},"​",-1))]),l[52]||(l[52]=o("p",null,"重置随机变量的值。",-1)),l[53]||(l[53]=o("p",null,[t("需要权限 "),o("code",null,"ultimateshop.resetrandomplaceholder"),t("。")],-1)),o("h2",f,[l[32]||(l[32]=t("/shop setrandomplaceholder <变量 ID> [元素] ")),o("strong",null,[s(e,{color:"Red"},{default:d(()=>l[31]||(l[31]=[t("（仅付费版本）")])),_:1})]),l[33]||(l[33]=t()),l[34]||(l[34]=o("a",{class:"header-anchor",href:"#shop-setrandomplaceholder-变量-id-元素-仅付费版本","aria-label":'Permalink to "/shop setrandomplaceholder <变量 ID> \\[元素\\] **<font color="Red">（仅付费版本）</font>**"'},"​",-1))]),l[54]||(l[54]=i("<p>设置随机变量的值。</p><p>与上一条命令不同的是，它不会重设刷新时间，并允许玩家选择指定的元素。</p><p>可在命令末尾添加 <code>-b</code> 参数来绕过元素存在性检查，即你可自行设置自定义元素。例如，一个随机变量只有 <code>A,B,C</code> 三个元素，若在此填入元素 <strong>D</strong>，则插件会报错，如果在命令末尾添加了 <code>-b</code> 参数，则变量值会被设置为 <strong>D</strong>，且插件不会报错，但不推荐你这么干。</p><p>需要权限 <code>ultimateshop.setrandomplaceholder</code>。</p>",4)),o("h2",h,[l[36]||(l[36]=t("/shop editor ")),o("strong",null,[s(e,{color:"Red"},{default:d(()=>l[35]||(l[35]=[t("（仅付费版本）")])),_:1})]),l[37]||(l[37]=t()),l[38]||(l[38]=o("a",{class:"header-anchor",href:"#shop-editor-仅付费版本","aria-label":'Permalink to "/shop editor **<font color="Red">（仅付费版本）</font>**"'},"​",-1))]),l[55]||(l[55]=o("p",null,"打开商店编辑器。",-1)),l[56]||(l[56]=o("p",null,[t("需要附属插件 "),o("strong",null,"UltimateShopEditor"),t("，你可在 SpigotMC 下载它。")],-1)),l[57]||(l[57]=o("p",null,[t("需要权限 "),o("code",null,"ultimateshop.editor"),t("。")],-1))])}const x=r(u,[["render",I]]);export{v as __pageData,x as default};
