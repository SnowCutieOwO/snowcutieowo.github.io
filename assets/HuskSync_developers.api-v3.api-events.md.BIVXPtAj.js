import{_ as n,C as e,c as i,o as r,b1 as d,G as a}from"./chunks/framework.CC7vnuC4.js";const b=JSON.parse('{"title":"API 事件","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/HuskSync"},{"title":"API 事件","link":"/HuskSync/developers.api-v3.api-events"}]},"headers":[],"relativePath":"HuskSync/developers.api-v3.api-events.md","filePath":"HuskSync/developers.api-v3.api-events.md"}'),p={name:"HuskSync/developers.api-v3.api-events.md"};function l(c,t,u,_,v,k){const o=e("NolebaseGitContributors"),s=e("NolebaseGitChangelog");return r(),i("div",null,[t[0]||(t[0]=d('<h1 id="api-事件" tabindex="-1">API 事件 <a class="header-anchor" href="#api-事件" aria-label="Permalink to &quot;API 事件&quot;">​</a></h1><p>HuskSync 提供了可供你的插件监听的三个 API 事件，可以在插件同步玩家数据的过程中触发。这些事件涉及不同的 HuskSync 类，所以在阅读本章之前建议先熟悉 API 基础章节。有两个事件是可取消的（但是也会将数据同步的过程阻断），一些事件可以使用方法来修改它们的结果（例如修改保存时的数据）</p><p>阅读 Javadoc 来获得更多信息。请注意在这些事件的执行期间不应取消，因为这么做不仅花销巨大，而且可能会影响到插件运行的效率。</p><h2 id="api-事件列表" tabindex="-1">API 事件列表 <a class="header-anchor" href="#api-事件列表" aria-label="Permalink to &quot;API 事件列表&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">提示</p><p>不要忘记了在监听事件调用时注册你的监听器。</p></div><table tabindex="0"><thead><tr><th>Bukkit 事件类名</th><th>是否可取消</th><th>描述</th></tr></thead><tbody><tr><td>BukkitDataSaveEvent</td><td>✅</td><td>在快照被创建、保存或因 DataSaveCause 而被缓存时调用</td></tr><tr><td>BukkitPreSync</td><td>✅</td><td>在玩家登录后通过缓存或数据库更新数据时调用</td></tr><tr><td>BukkitSyncCompleteEvent</td><td>❌</td><td>在玩家完成数据同步或登录后调用†</td></tr></tbody></table><p>† 该事件也可在玩家登入游戏并更新数据后触发；例如，当管理员回档一名玩家、通过命令更新背包或末影箱内容或 API 强制玩家更新数据。</p>',7)),a(o),a(s)])}const m=n(p,[["render",l]]);export{b as __pageData,m as default};
