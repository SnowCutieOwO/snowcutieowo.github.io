import{_ as a,c as o,o as d,al as c}from"./chunks/framework.LK_RS8Nx.js";const h=JSON.parse('{"title":"命令","description":"","frontmatter":{},"headers":[],"relativePath":"CommandTimer/configuration.commands.md","filePath":"CommandTimer/configuration.commands.md"}'),l={name:"CommandTimer/configuration.commands.md"};function i(r,e,t,n,m,s){return d(),o("div",null,e[0]||(e[0]=[c('<h1 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h1><h2 id="执行模式" tabindex="-1">执行模式 <a class="header-anchor" href="#执行模式" aria-label="Permalink to &quot;执行模式&quot;">​</a></h2><p>执行模式会覆盖所有定时任务，而不只是单条命令</p><ul><li><code>ALL</code>（全部）：一次执行所有命令</li><li><code>ORDERED</code>（顺序）：按顺序执行所有命令。执行命令的间隔则为该定时任务的间隔。若间隔设置为 10 秒且配置了 3 个命令，那么插件会先执行一个命令，再等待 10 秒，再执行命令，再等待 10 秒，直至执行完所有命令后，间隔 10 秒会再次执行第一条命令。</li><li><code>RANDOM</code>（随机）：每次随机执行一条命令</li><li><code>INTERVAL</code>（间隔）：与上述的 <code>ORDERED</code> 非常相似，但会在菜单中多出一个可配置的秒数选项。该设置不会影响到全局的定时命令间隔。在菜单内可直接点击执行模式物品来修改这个设置的值。</li></ul><h2 id="命令设置" tabindex="-1">命令设置 <a class="header-anchor" href="#命令设置" aria-label="Permalink to &quot;命令设置&quot;">​</a></h2><ul><li>Reset last executed command index（重置上次执行命令的顺序）：该选项允许你在服务器启动时就开始执行定时任务中的命令。仅对 <code>ORDERED</code> 和 <code>INTERVAL</code> 等此前已存在执行顺序的模式有效。</li></ul><h2 id="执行身份" tabindex="-1">执行身份 <a class="header-anchor" href="#执行身份" aria-label="Permalink to &quot;执行身份&quot;">​</a></h2><p>执行身份决定了命令被触发时使用的身份。</p><ul><li><code>CONSOLE</code>（控制台）：命令将会以控制台身份执行。该模式下不可使用任何玩家的数据，若要这么做，请使用 <code>CONSOLE_PER_USER</code> 模式。</li><li><code>CONSOLE_PER_USER</code>（带玩家身份的控制台）：命令将会以控制台身份执行，但会带上指定玩家的数据。这意味着若你有 20 个在线玩家，插件将会执行 20 次这条命令（将每个玩家的身份代入并执行一次）。诸如 <code>%player_name%</code> 等的变量可以在这里使用（前提是安装了 PlaceholderAPI）。</li><li><code>OPERATOR</code>（OP权限）：每条命令将会模拟玩家 OP 身份执行。会为每位在线玩家都执行一次命令。诸如 <code>%player_name%</code> 等的变量可以在这里使用。在该角度下，这个变量返回的是玩家自己的名字。</li><li><code>PLAYER</code>（玩家）：以玩家身份执行命令。若玩家没有足够权限执行这个命令，他们会正常收到缺少权限的相关信息。诸如 <code>%player_name%</code> 等的变量可以在这里使用。若你不想要玩家看见那些缺少权限的提示消息，你应该使用条件模块来在定时任务执行命令之前检查是否拥有对应权限。</li><li><code>CONSOLE_PER_USER_OFFLINE</code>（带离线玩家身份的控制台）：与 <code>CONSOLE_PER_USER</code> 相似，但会以所有加入过的离线玩家身份执行一次命令。<strong>需要注意的是，条件模块暂时不能用在这个执行模式下</strong></li></ul><h2 id="命令遍历间隔" tabindex="-1">命令遍历间隔 <a class="header-anchor" href="#命令遍历间隔" aria-label="Permalink to &quot;命令遍历间隔&quot;">​</a></h2><p>对（除了 <code>CONSOLE</code> 即控制台）的所有身份均可设置间隔。这个间隔可以在每次执行特定命令之后生效。这意味着如果你使用了 <code>PLAYER</code> 身份并将间隔设置为 2 秒，插件会在每次以一个玩家身份执行完毕之后间隔 2 秒再代入其他玩家的身份执行命令。请不要将这个间隔与一般的间隔搞混，后者仍可以与本设置正常组合使用。</p><h2 id="独立命令延迟" tabindex="-1">独立命令延迟 <a class="header-anchor" href="#独立命令延迟" aria-label="Permalink to &quot;独立命令延迟&quot;">​</a></h2><p>在你的定时任务模式为 <code>ORDERED</code> 时，你可以为每个命令设置执行后的延迟。只有当延迟结束时才会继续执行下一条命令。</p><p>让我们假定你这样设置了你的命令：</p><ul><li>命令 1，延迟 5 秒</li><li>命令 2，延迟 10 秒</li><li>命令 3，不设置延迟</li></ul><p>命令 1 会按定时任务配置第一个被触发，第二条命令则会在 5 秒之后触发，第三条则会在第一条命令触发后的 15 秒后触发（第二个命令执行完毕后才会开始计算 10 秒的延迟）。</p>',16)]))}const u=a(l,[["render",i]]);export{h as __pageData,u as default};
