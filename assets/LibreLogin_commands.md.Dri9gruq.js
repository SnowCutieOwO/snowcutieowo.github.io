import{_ as a,c as r,o,b0 as t}from"./chunks/framework.w6NQj85O.js";const b=JSON.parse('{"title":"命令列表","description":"","frontmatter":{},"headers":[],"relativePath":"LibreLogin/commands.md","filePath":"LibreLogin/commands.md"}'),i={name:"LibreLogin/commands.md"};function l(n,e,s,d,h,c){return o(),r("div",null,e[0]||(e[0]=[t('<h1 id="命令列表" tabindex="-1">命令列表 <a class="header-anchor" href="#命令列表" aria-label="Permalink to &quot;命令列表&quot;">​</a></h1><h2 id="认证命令" tabindex="-1">认证命令 <a class="header-anchor" href="#认证命令" aria-label="Permalink to &quot;认证命令&quot;">​</a></h2><h3 id="登录命令" tabindex="-1">登录命令 <a class="header-anchor" href="#登录命令" aria-label="Permalink to &quot;登录命令&quot;">​</a></h3><p><code>/login &lt;密码&gt;</code> - 使用密码登录至服务器 - 无需权限</p><h3 id="注册命令" tabindex="-1">注册命令 <a class="header-anchor" href="#注册命令" aria-label="Permalink to &quot;注册命令&quot;">​</a></h3><p><code>/register &lt;密码&gt; &lt;确认密码&gt;</code> - 使用密码在服务器注册 - 无需权限</p><h2 id="免密登录相关" tabindex="-1">免密登录相关 <a class="header-anchor" href="#免密登录相关" aria-label="Permalink to &quot;免密登录相关&quot;">​</a></h2><h3 id="认证命令-1" tabindex="-1">认证命令 <a class="header-anchor" href="#认证命令-1" aria-label="Permalink to &quot;认证命令&quot;">​</a></h3><p><code>/premium &lt;密码&gt;</code> - 启用自动登录 - 无需权限</p><h3 id="解除认证" tabindex="-1">解除认证 <a class="header-anchor" href="#解除认证" aria-label="Permalink to &quot;解除认证&quot;">​</a></h3><p><code>/cracked</code> - 禁用自动登录 - 无需权限</p><h2 id="管理员命令" tabindex="-1">管理员命令 <a class="header-anchor" href="#管理员命令" aria-label="Permalink to &quot;管理员命令&quot;">​</a></h2><h3 id="librepremium" tabindex="-1">LibrePremium <a class="header-anchor" href="#librepremium" aria-label="Permalink to &quot;LibrePremium&quot;">​</a></h3><p><code>/librelogin &lt;子命令&gt;</code> - 需要子命令 - 根据子命令分权限</p><h4 id="重载" tabindex="-1">重载 <a class="header-anchor" href="#重载" aria-label="Permalink to &quot;重载&quot;">​</a></h4><p><code>/librelogin reload &lt;子命令&gt;</code> - 需要子命令 - 根据子命令分权限</p><h5 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h5><p><code>/librelogin reload configuration</code> - 重载所有配置 - <strong>librepremium.reload.configuration</strong></p><h5 id="消息文本" tabindex="-1">消息文本 <a class="header-anchor" href="#消息文本" aria-label="Permalink to &quot;消息文本&quot;">​</a></h5><p><code>/librelogin reload message</code> - 重载消息文本 - <strong>librepremium.reload.messages</strong></p><h4 id="玩家" tabindex="-1">玩家 <a class="header-anchor" href="#玩家" aria-label="Permalink to &quot;玩家&quot;">​</a></h4><p><code>/librelogin user &lt;子命令&gt;</code> - 需要子命令 - 根据子命令分权限</p><h5 id="信息" tabindex="-1">信息 <a class="header-anchor" href="#信息" aria-label="Permalink to &quot;信息&quot;">​</a></h5><p><code>/librelogin user info &lt;玩家名称&gt;</code> - 显示玩家有关的信息（UUID、正版 UUID、加入日期与最后上线）- <strong>librepremium.user.info</strong></p><h5 id="迁移" tabindex="-1">迁移 <a class="header-anchor" href="#迁移" aria-label="Permalink to &quot;迁移&quot;">​</a></h5><p><code>/librelogin user migrate &lt;玩家名称&gt; &lt;新名称&gt;</code> - 将当前玩家数据迁移至对应新名称中，若启用了自动登录，则也会将其一并禁用 - <strong>librepremium.user.migrate</strong></p><h5 id="注销" tabindex="-1">注销 <a class="header-anchor" href="#注销" aria-label="Permalink to &quot;注销&quot;">​</a></h5><p><code>/librelogin user unregister &lt;玩家名称&gt;</code> - 注销玩家，若其他玩家再次注册账号，仍然会保留旧玩家相关内容（背包、其他插件数据等）。- <strong>librepremium.user.unregister</strong></p><h5 id="删号" tabindex="-1">删号 <a class="header-anchor" href="#删号" aria-label="Permalink to &quot;删号&quot;">​</a></h5><p><code>/librelogin user delete &lt;玩家名称&gt;</code> - 删除玩家。<strong>警告：如果你删除了某个玩家，他们的数据会永久丢失。请考虑使用注销命令</strong> - <strong>librepremium.user.premium</strong></p><h5 id="开启自动登录" tabindex="-1">开启自动登录 <a class="header-anchor" href="#开启自动登录" aria-label="Permalink to &quot;开启自动登录&quot;">​</a></h5><p><code>/librelogin user premium &lt;玩家名称&gt;</code> - 启用指定玩家的自动登录 - <strong>librepremium.user.premium</strong></p><h5 id="关闭自动登录" tabindex="-1">关闭自动登录 <a class="header-anchor" href="#关闭自动登录" aria-label="Permalink to &quot;关闭自动登录&quot;">​</a></h5><p><code>/librelogin user cracked &lt;玩家名称&gt;</code> - 禁用指定玩家的自动登录 - <strong>librepremium.user.cracked</strong></p><h5 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to &quot;注册&quot;">​</a></h5><p><code>/librelogin user register &lt;玩家名称&gt; &lt;密码&gt;</code> - 使用指定名称与密码注册玩家账户 - <strong>librepremium.user.register</strong></p><h5 id="登录" tabindex="-1">登录 <a class="header-anchor" href="#登录" aria-label="Permalink to &quot;登录&quot;">​</a></h5><p><code>/librelogin user login &lt;玩家名称&gt;</code> - 将指定玩家登录（前提是玩家在线且未登录）- <strong>librepremium.user.login</strong></p><h5 id="禁用二步验证" tabindex="-1">禁用二步验证 <a class="header-anchor" href="#禁用二步验证" aria-label="Permalink to &quot;禁用二步验证&quot;">​</a></h5><p><code>/librelogin user 2faoff &lt;玩家名称&gt;</code> - 关闭玩家的二步验证 - <strong>librepremium.user.2faoff</strong></p><h5 id="修改密码" tabindex="-1">修改密码 <a class="header-anchor" href="#修改密码" aria-label="Permalink to &quot;修改密码&quot;">​</a></h5><p><code>/librelogin user pass-change &lt;玩家名称&gt; &lt;密码&gt;</code> - 修改玩家密码 - <strong>librepremium.user.pass-change</strong></p><h5 id="查看小号" tabindex="-1">查看小号 <a class="header-anchor" href="#查看小号" aria-label="Permalink to &quot;查看小号&quot;">​</a></h5><p><code>/librelogin user alts &lt;玩家名称&gt;</code> - 显示同一 IP 下的账号。需要注意的是，某些村庄（包含上百人）可能会使用相同的 IP<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> - <strong>librelogin.user.alts</strong></p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>基于国内的 IP 策略（动态 IP），该功能很有可能不会生效。 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',46)]))}const g=a(i,[["render",l]]);export{b as __pageData,g as default};
