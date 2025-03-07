import{_ as n,C as e,c as i,o as l,b1 as c,G as o}from"./chunks/framework.CC7vnuC4.js";const b=JSON.parse('{"title":"❓ 常见问题","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/UltimateShop"},{"title":"❓ 常见问题","link":"/UltimateShop/info.faq"}]},"headers":[],"relativePath":"UltimateShop/info.faq.md","filePath":"UltimateShop/info.faq.md"}'),s={name:"UltimateShop/info.faq.md"};function d(h,a,p,m,u,f){const t=e("NolebaseGitContributors"),r=e("NolebaseGitChangelog");return l(),i("div",null,[a[0]||(a[0]=c('<h1 id="❓-常见问题" tabindex="-1">❓ 常见问题 <a class="header-anchor" href="#❓-常见问题" aria-label="Permalink to &quot;❓ 常见问题&quot;">​</a></h1><h2 id="问-shop-命令需要权限吗" tabindex="-1">问：<code>/shop</code> 命令需要权限吗？ <a class="header-anchor" href="#问-shop-命令需要权限吗" aria-label="Permalink to &quot;问：`/shop` 命令需要权限吗？&quot;">​</a></h2><p><strong>答：</strong> <code>/shop</code> 命令可直接打开名为 <code>main</code> 的菜单。这个功能被称作<strong>自动开启</strong>，你可以在 config.yml 的 <code>menu.auto-open.enabled</code> 选项中关闭。若你只需要某些玩家可以使用这个命令，你可以在菜单中设置 <code>conditions</code> 来限制满足条件的玩家打开它。更多信息详见菜单章节。</p><h2 id="问-为什么我只能一次出售一组物品" tabindex="-1">问：为什么我只能一次出售一组物品？ <a class="header-anchor" href="#问-为什么我只能一次出售一组物品" aria-label="Permalink to &quot;问：为什么我只能一次出售一组物品？&quot;">​</a></h2><p><strong>答：</strong> 问这个问题的人可能不知道：在使用插件之前应当熟悉 <code>config.yml</code>。在 <code>config.yml</code> 中，有一个选项叫 <code>sell.max-amount</code>，我想你应该能从它的名字就看出来它的作用。</p><h2 id="问-如何修改增量购买菜单中的最大数量限制" tabindex="-1">问：如何修改增量购买菜单中的最大数量限制？ <a class="header-anchor" href="#问-如何修改增量购买菜单中的最大数量限制" aria-label="Permalink to &quot;问：如何修改增量购买菜单中的最大数量限制？&quot;">​</a></h2><p><strong>答：</strong> <code>config.yml</code> 中有一个叫 <code>menu.buy-more.&lt;增量购买菜单名称&gt;.max-amount</code> 的选项，或者如果你为某个物品设置了单独的增量购买菜单，你可以在物品配置中找到 <code>buy-more-menu.max-amount</code> 选项。</p><h2 id="问-start-apply-是什么意思" tabindex="-1">问：<code>start-apply</code> 是什么意思？ <a class="header-anchor" href="#问-start-apply-是什么意思" aria-label="Permalink to &quot;问：`start-apply` 是什么意思？&quot;">​</a></h2><p><strong>答：</strong> 这表示价格生效的时间。若设置为 5，则五次购买之后的价格就会发生变动。</p><p>该选项仅对 <code>ANY</code> 或 <code>ALL</code> 价格模式生效。</p><h2 id="问-在菜单外快速点击物品会导致物品复制" tabindex="-1">问：在菜单外快速点击物品会导致物品复制！ <a class="header-anchor" href="#问-在菜单外快速点击物品会导致物品复制" aria-label="Permalink to &quot;问：在菜单外快速点击物品会导致物品复制！&quot;">​</a></h2><p><strong>答：</strong> 某些插件或模组引发了这个问题。尝试在 <code>config.yml</code> 中启用 <code>ignore-click-outside</code> 选项。</p><h2 id="问-完整-免费-版与付费版有什么区别" tabindex="-1">问：完整（免费）版与付费版有什么区别？ <a class="header-anchor" href="#问-完整-免费-版与付费版有什么区别" aria-label="Permalink to &quot;问：完整（免费）版与付费版有什么区别？&quot;">​</a></h2><p><strong>答：</strong> 请参阅“<a href="./welcome#付费版本和免费版本的区别">欢迎</a>”页面获悉详情。</p><h2 id="问-我可以为每个物品设置不同的添加描述吗" tabindex="-1">问：我可以为每个物品设置不同的添加描述吗？ <a class="header-anchor" href="#问-我可以为每个物品设置不同的添加描述吗" aria-label="Permalink to &quot;问：我可以为每个物品设置不同的添加描述吗？&quot;">​</a></h2><p><strong>答：</strong> 在商店章节中我们已经提到过，<code>add-lore</code> 也对单独物品配置生效。</p><h2 id="问-商店菜单打开一次后无法再次打开" tabindex="-1">问：商店菜单打开一次后无法再次打开！ <a class="header-anchor" href="#问-商店菜单打开一次后无法再次打开" aria-label="Permalink to &quot;问：商店菜单打开一次后无法再次打开！&quot;">​</a></h2><p><strong>答：</strong> 请确保 <code>config.yml</code> 是最新的。如果没有，请尝试更新。或者检查一下你有没有使用菜单冷却功能，将其关闭可能可以修复。</p><h2 id="问-如何将增量购买菜单与插件消息中的物品名称汉化" tabindex="-1">问：如何将增量购买菜单与插件消息中的物品名称汉化？ <a class="header-anchor" href="#问-如何将增量购买菜单与插件消息中的物品名称汉化" aria-label="Permalink to &quot;问：如何将增量购买菜单与插件消息中的物品名称汉化？&quot;">​</a></h2><p><strong>答：</strong> 请参阅“<a href="./features.localized-item-name">本地化物品名称</a>”章节。</p><h2 id="问-ultimateshop-在控制台中输出错误消息-xxx" tabindex="-1">问：UltimateShop 在控制台中输出错误消息：XXX <a class="header-anchor" href="#问-ultimateshop-在控制台中输出错误消息-xxx" aria-label="Permalink to &quot;问：UltimateShop 在控制台中输出错误消息：XXX&quot;">​</a></h2><p><strong>答：</strong> 它一般会说明遇到了什么问题。如：</p><p><strong>错误：商店配置中无法读取价格部分！！</strong></p><p>如果商店没有问题，则不需要理会。此时显示的错误消息仅为提示，插件会自行修复。</p><h2 id="问-如何重置动态定价" tabindex="-1">问：如何重置动态定价？ <a class="header-anchor" href="#问-如何重置动态定价" aria-label="Permalink to &quot;问：如何重置动态定价？&quot;">​</a></h2><p><strong>答：</strong> 参阅“<a href="./dynamic-prices.dynamic-price">动态定价</a>”章节。</p>',26)),o(t),o(r)])}const q=n(s,[["render",d]]);export{b as __pageData,q as default};
