import{_ as e,c as p,o as t,al as r}from"./chunks/framework.CAEutmY3.js";const m=JSON.parse('{"title":"设置玩家商店","description":"","frontmatter":{},"headers":[],"relativePath":"Shopkeepers/creating-shops.setup-player-shop.md","filePath":"Shopkeepers/creating-shops.setup-player-shop.md"}'),o={name:"Shopkeepers/creating-shops.setup-player-shop.md"};function s(h,a,i,n,l,c){return t(),p("div",null,a[0]||(a[0]=[r('<h1 id="设置玩家商店" tabindex="-1">设置玩家商店 <a class="header-anchor" href="#设置玩家商店" aria-label="Permalink to &quot;设置玩家商店&quot;">​</a></h1><p>本章节描述了设置与编辑不同类型玩家商店的教程。更多编辑商店的信息可参阅<a href="./creating-shops.editing-shops.html">编辑商店</a>章节。</p><p>这里有不同类型的玩家商店，略有差别。你可以在<a href="./installtion-updating.configuration.html">配置文本</a>中指定用于在玩家商店中出售与购买的<strong>货币物品</strong>。</p><h2 id="出售商店" tabindex="-1">出售商店 <a class="header-anchor" href="#出售商店" aria-label="Permalink to &quot;出售商店&quot;">​</a></h2><p>该商店以货币物品出售其他物品。</p><p>首先，将你需要出售的物品放置在箱子中。你也可以通过<a href="./creating-shops.placeholder-items.html">变量物品</a>设置你尚未得到的物品。若要出售成书，你需要使用特殊的复印商店。</p><p>现在打开编辑器。最顶上会显示多种箱子中放着的物品。下面一行则会显示物品的价格。若未指定则会显示屏障。左键点击价格栏即可升高一单位价格，右键点击反之。你也可以在左右键点击时按住 shift，来达到调整 10 单位价格的操作。你可以以相同的方式点击调整出售物品的数量。</p><p>第四行的按钮可以在多页交易之间切换。你可以在商店中设置至多 5 页即 45 条交易。</p><p>在设定好价格之后，关闭界面即可保存。</p><p>当玩家通过玩家商店购买物品后，箱子中的物品会减少，而货币物品会被放入箱子。在玩家买光最后一份物品时，交易条目则会关闭。如果玩家尝试购买缺货或没有空间的交易，插件会试图阻止。</p><h2 id="收购商店" tabindex="-1">收购商店 <a class="header-anchor" href="#收购商店" aria-label="Permalink to &quot;收购商店&quot;">​</a></h2><p>这种商店会以货币物品收购物品。</p><p>通常情况下，你只能收购已拥有至少一个的物品。但是，你也可以使用重命名的物品替代当前缺少的物品。详见<a href="./creating-shops.placeholder-items.html">变量物品</a>章节。</p><p>首先，你必须将收购的物品与货币物品放入箱子。之后打开编辑器，接下来的操作步骤与上一节提到的出售商店设置大致相似，但是收购物品与货币物品的位置会对调。中间一行不会被使用。</p><p>需要注意的是，你收购的物品要求越多，玩家就越难找到符合要求的物品出售。例如，如果你想要买一把钻石剑，但你现在拥有的包含了附魔，则玩家卖给你的每把剑附魔都必须相同。另外如果你的钻石剑包含指定的损坏值，则他们收购的物品也需要有相同的内容。</p><p>另外，收购商店也对特定类型的物品无效，如成书或地图。</p><p>Minecraft 对某个物品是否能参与交易的匹配逻辑有时会有负面效果。比如你想要收购一把无任何附魔的钻石剑，玩家可以卖给你带附魔甚至是诅咒的钻石剑。因此收购商店最好用在那些不具备特殊值的物品上，例如建筑方块。</p><h2 id="以物易物商店" tabindex="-1">以物易物商店 <a class="header-anchor" href="#以物易物商店" aria-label="Permalink to &quot;以物易物商店&quot;">​</a></h2><p>该类型的商店能交换到任何你想要的物品。</p><p>与出售商店一样，将待售物品放入箱子。打开编辑器时，这些物品会出现在最上一行。若要指定被交易物品，你可以在背包中点击物品并将其放入编辑器界面，之后指针上拿着的物品就会被复制到菜单中。你也可以以这样的操作替换顶上的物品。</p><p>你也可以使用<a href="./creating-shops.placeholder-items.html">变量物品</a>设置你还没有的物品交易。</p><p>对着物品左键或右键点击可修改数量。你也可以将物品的数量降至 0 来移除这条交易。</p><h2 id="复印商店" tabindex="-1">复印商店 <a class="header-anchor" href="#复印商店" aria-label="Permalink to &quot;复印商店&quot;">​</a></h2><p>该类型的商店出售复制书本。</p><p>这种商店的创建方式与出售商店大致相似，但你需要将出售的书本与用于复印的书与笔（可编辑的书本）放在箱子中。商店会自动为你复印书本。复印的书本会与原本略有查差距，且你不能二次出售复印书本。</p><p>另外需要注意的是，这些书本的取用顺序由标题决定。如果你在箱子中放入了多本名称相同的书，它只会使用它找到的第一本书。如果你移除了它使用的这本书，交易将会失效，直到你将另一本标题相同的书再次放入。</p>',26)]))}const _=e(o,[["render",s]]);export{m as __pageData,_ as default};
