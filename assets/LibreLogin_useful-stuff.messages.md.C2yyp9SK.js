import{_ as n,c as a,a7 as p,o as l}from"./chunks/framework.Bz4u1pnU.js";const g=JSON.parse('{"title":"消息文本","description":"","frontmatter":{},"headers":[],"relativePath":"LibreLogin/useful-stuff.messages.md","filePath":"LibreLogin/useful-stuff.messages.md"}'),e={name:"LibreLogin/useful-stuff.messages.md"};function t(i,s,o,r,c,u){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="消息文本" tabindex="-1">消息文本 <a class="header-anchor" href="#消息文本" aria-label="Permalink to &quot;消息文本&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#  !!文件为 HOCON 格式!!</span></span>
<span class="line"><span>#  HOCON 格式与 JSON 相似，但有一些额外特征。</span></span>
<span class="line"><span>#  你可以在 Sponge 维基中找到更多信息：</span></span>
<span class="line"><span>#  https://docs.spongepowered.org/stable/en/server/getting-started/configuration/hocon.html</span></span>
<span class="line"><span>#  ----------------------------------------------------------------------------------------</span></span>
<span class="line"><span>#  LibreLogin 消息文本</span></span>
<span class="line"><span>#  ----------------------------------------------------------------------------------------</span></span>
<span class="line"><span>#  该部分包含了插件使用的消息文本，你可以按需修改其中的内容。</span></span>
<span class="line"><span>#  消息支持使用原版代码格式和 MiniMessage 代码格式。例如，这条消息被视作有效并能正常解析：&lt;bold&gt;&amp;a重载成功!&lt;/bold&gt;</span></span>
<span class="line"><span>#  你可以在 Github 页面找到 LibreLogin 的更多信息：</span></span>
<span class="line"><span>#  https://github.com/kyngs/LibreLogin</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 玩家正在登录时这段消息会显示在 ActionBar 上，请确保你启用了配置文本中的请确保你在配置文本中启用了 use-action-bar 选项。</span></span>
<span class="line"><span>action-bar-login=&quot;&amp;e/login &amp;b&lt;密码&gt;&quot;</span></span>
<span class="line"><span># 玩家正在注册时这段消息会显示在 ActionBar 上，请确保你在配置文本中启用了 use-action-bar 选项。</span></span>
<span class="line"><span>action-bar-register=&quot;&amp;e/register &amp;b&lt;密码&gt; &lt;密码&gt;&quot;</span></span>
<span class="line"><span># 该部分包含了命令的自动补全。因其繁杂，一般人会保持默认设置。</span></span>
<span class="line"><span># !!请勿翻译内建变量 @players!! 这个变量用于提及在线的所有玩家。</span></span>
<span class="line"><span>autocomplete {</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /2fa-confirm 时显示。</span></span>
<span class="line"><span>    &quot;2fa-confirm&quot;=验证码</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /changepassword 时显示。</span></span>
<span class="line"><span>    change-password=&quot;旧密码 新密码&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /confirmpasswordreset 时显示。</span></span>
<span class="line"><span>    confirm-password-reset=&quot;验证码 旧密码 新密码&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin email test 时显示。</span></span>
<span class="line"><span>    email-test=邮箱地址</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /login 时显示。</span></span>
<span class="line"><span>    login=密码</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /premium 时显示。</span></span>
<span class="line"><span>    premium=密码</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /register 时显示。</span></span>
<span class="line"><span>    register=&quot;密码 确认密码&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /resetpassword 时显示。</span></span>
<span class="line"><span>    reset-password=&quot;&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /setemail 时显示。</span></span>
<span class="line"><span>    set-email=&quot;邮箱地址 密码&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin user 2fa-off 时显示。</span></span>
<span class="line"><span>    user-2fa-off=&quot;@players&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin user alts 时显示。</span></span>
<span class="line"><span>    user-alts=&quot;@players&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin user cracked 时显示。</span></span>
<span class="line"><span>    user-cracked=&quot;@players&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin user delete 时显示。</span></span>
<span class="line"><span>    user-delete=&quot;@players&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin user emailoff 时显示。</span></span>
<span class="line"><span>    user-email-off=&quot;@players&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin user info 时显示。</span></span>
<span class="line"><span>    user-info=&quot;@players&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin user login 时显示。</span></span>
<span class="line"><span>    user-login=&quot;@players&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin user migrate 时显示。</span></span>
<span class="line"><span>    user-migrate=&quot;@players newName&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin user pass-change 时显示。</span></span>
<span class="line"><span>    user-pass-change=&quot;@players newPassword&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin user premium 时显示。</span></span>
<span class="line"><span>    user-premium=&quot;@players&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin user register 时显示。</span></span>
<span class="line"><span>    user-register=&quot;@players password&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin user setemail 时显示。</span></span>
<span class="line"><span>    user-set-email=&quot;@players email&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /librelogin user unregister 时显示。</span></span>
<span class="line"><span>    user-unregister=&quot;@players&quot;</span></span>
<span class="line"><span>    # 这条消息会在玩家尝试输入命令 /verifyemail 时显示。</span></span>
<span class="line"><span>    verify-email=code</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># 这封邮件会在玩家尝试重置密码时发送，你可以在这条消息中插入任何 HTML 代码。</span></span>
<span class="line"><span>email-password-reset-content=&quot;你好 %name%!&lt;br&gt;\\n你 (来自 IP %ip% 的请求) 发送了来自 %server% 服务器的重置密码请求.&lt;br&gt;\\n若你没有进行过相关操作，请无视该邮件。&lt;br&gt;\\n若要确认此操作，请在&lt;b&gt;游戏内输入命令：&lt;/b&gt;&lt;br&gt;\\n&lt;b&gt;&lt;验证码&gt;&lt;h1&gt;/confirmpasswordreset %code%&lt;/h1&gt;&lt;/code&gt;&lt;/b&gt;&lt;br&gt;\\n&quot;</span></span>
<span class="line"><span># 这封邮件会在玩家尝试重置密码时发送。</span></span>
<span class="line"><span>email-password-reset-subject=&quot;来自 %server% 服务器的重置密码请求&quot;</span></span>
<span class="line"><span># 这封邮件会在玩家尝试添加恢复邮箱时发送。你可以在这条消息中插入任何 HTML 代码。</span></span>
<span class="line"><span>email-verification-content=&quot;你好 %name%!&lt;br&gt;\\n你发送了来自 %server% 服务器的添加恢复邮箱请求.&lt;br&gt;\\n若你没有进行过相关操作，请无视该邮件。&lt;br&gt;\\n若要确认此操作，请在&lt;b&gt;游戏内输入命令：&lt;/b&gt;&lt;br&gt;\\n&lt;b&gt;&lt;验证码&gt;&lt;h1&gt;/verifyemail %code%&lt;/h1&gt;&lt;/code&gt;&lt;/b&gt;&lt;br&gt;\\n&quot;</span></span>
<span class="line"><span># 这封邮件会在玩家尝试添加恢复邮箱时发送。</span></span>
<span class="line"><span>email-verification-subject=&quot;在 %server% 服务器上验证你的邮箱&quot;</span></span>
<span class="line"><span># 在玩家尝试再次登录时显示的消息。</span></span>
<span class="line"><span>error-already-authorized=&quot;请勿重复登录!&quot;</span></span>
<span class="line"><span># 在玩家尝试再次注册显示的消息。</span></span>
<span class="line"><span>error-already-registered=&quot;请勿重复注册!&quot;</span></span>
<span class="line"><span># 在配置文件出现问题时显示的消息。</span></span>
<span class="line"><span>error-corrupted-configuration=&quot;配置文件出现问题，将保留备份后生成新文件。原因: %cause%&quot;</span></span>
<span class="line"><span># 在消息文本 messages.conf 文件出现问题时显示的消息。</span></span>
<span class="line"><span>error-corrupted-messages=&quot;消息文本出现问题，将保留备份后生成新文件。原因: %cause%&quot;</span></span>
<span class="line"><span># 在玩家尝试使用过短或违非法密码注册时显示的消息。</span></span>
<span class="line"><span>error-forbidden-password=&quot;密码过短或存在非法字符！&quot;</span></span>
<span class="line"><span># 在玩家执行来自 Floodgate 的命令时显示的消息。</span></span>
<span class="line"><span>error-from-floodgate=&quot;你不能在 Floodgate 中使用这个命令!&quot;</span></span>
<span class="line"><span># 在玩家使用了无效命令时显示的消息。</span></span>
<span class="line"><span>error-invalid-syntax=&quot;Usage: &lt;c2&gt;{command}&lt;/c2&gt; &lt;c3&gt;{syntax}&lt;/c3&gt;&quot;</span></span>
<span class="line"><span># 在玩家尝试发送邮件但未能成功显示的消息。</span></span>
<span class="line"><span>error-mail-not-sent=&quot;发送邮件失败，是否正确填写邮箱地址？如果你确信邮箱填写正确，请联系服务器管理员。&quot;</span></span>
<span class="line"><span># 在玩家尝试发送邮箱请求过快时显示的消息。</span></span>
<span class="line"><span>error-mail-throttle=&quot;发送邮箱次数过多！请稍后再试。&quot;</span></span>
<span class="line"><span># 在玩家尝试输入 /premium 前执行命令 /premiumconfirm 时显示的消息。</span></span>
<span class="line"><span>error-no-confirm=&quot;请先使用命令 /premium &lt;密码&gt;！&quot;</span></span>
<span class="line"><span># 在玩家尝试重置密码但没有找到恢复邮箱时显示的消息。</span></span>
<span class="line"><span>error-no-email=&quot;你尚未设置恢复密码邮箱！&quot;</span></span>
<span class="line"><span># 在玩家尝试输入 /mail 前执行命令 /mailconfirm 时显示的消息。</span></span>
<span class="line"><span>error-no-mail-confirm=&quot;请先使用命令 /setemail &lt;邮箱&gt; &lt;密码&gt; ！&quot;</span></span>
<span class="line"><span># 在玩家尝试重置空密码时显示的消息。</span></span>
<span class="line"><span>error-no-password=&quot;尚未设置密码。你可以尝试使用命令 /cracked 禁用自动登录后注册。&quot;</span></span>
<span class="line"><span># 在玩家尝试执行命令 /resetpasswordconfirm, before running /resetpassword.</span></span>
<span class="line"><span>error-no-password-reset=&quot;请先使用命令 /resetpassword ！&quot;</span></span>
<span class="line"><span># 在玩家无权限执行命令时显示的消息。</span></span>
<span class="line"><span>error-no-permission=&quot;你没有权限使用该命令！&quot;</span></span>
<span class="line"><span># 在玩家尝试使用登录后才可执行的命令时显示的消息。</span></span>
<span class="line"><span>error-not-authorized=&quot;请先登录！&quot;</span></span>
<span class="line"><span># 在玩家尝试使用 MultiProxy 不支持的功能时显示的消息。</span></span>
<span class="line"><span>error-not-available-on-multi-proxy=&quot;该功能在 MultiProxy 上不可用！&quot;</span></span>
<span class="line"><span># 在玩家尝试重复启用自动登录时显示的消息。</span></span>
<span class="line"><span>error-not-cracked=&quot;你已经启用了自动登录，若要解除请输入 /cracked！&quot;</span></span>
<span class="line"><span># 在玩家尝试启用自动登录但账号不存在于 Mojang 数据库中显示的消息。</span></span>
<span class="line"><span>error-not-paid=&quot;该账号不存在于 Mojang 数据库！&quot;</span></span>
<span class="line"><span># 在玩家尝试重复禁用自动登录时显示的消息。</span></span>
<span class="line"><span>error-not-premium=&quot;你已经禁用了自动登录，若要启用请输入 /premium &lt;密码&gt;！&quot;</span></span>
<span class="line"><span># 在玩家未注册的情况下尝试登录显示的消息。</span></span>
<span class="line"><span>error-not-registered=&quot;请先注册！&quot;</span></span>
<span class="line"><span># 在玩家尝试转移数据至已有账号时显示的消息。</span></span>
<span class="line"><span>error-occupied-user=&quot;该用户名已存在！&quot;</span></span>
<span class="line"><span># 在玩家尝试使用损坏的密码登入时显示的消息。</span></span>
<span class="line"><span>error-password-corrupted=&quot;登录密码出现错误，请联系管理员！&quot;</span></span>
<span class="line"><span># 在玩家尝试使用前后不一的密码注册时显示的消息。</span></span>
<span class="line"><span>error-password-not-match=&quot;前后密码不一致！&quot;</span></span>
<span class="line"><span># 在玩家尝试修改密码且功能被禁用的情况下显示的消息。</span></span>
<span class="line"><span>error-password-resetting-disabled=&quot;本服尚未启用密码重置功能！&quot;</span></span>
<span class="line"><span># 在玩家使用过长密码注册时显示的消息。</span></span>
<span class="line"><span>error-password-too-long=&quot;密码过长！&quot;</span></span>
<span class="line"><span># 在玩家尝试使用错误密码登录时显示的消息。</span></span>
<span class="line"><span>error-password-wrong=&quot;密码错误！&quot;</span></span>
<span class="line"><span># 在尝试引用已登录玩家时显示的消息。</span></span>
<span class="line"><span>error-player-authorized=&quot;该玩家已经登录！&quot;</span></span>
<span class="line"><span># 在尝试引用未注册玩家时显示的消息。</span></span>
<span class="line"><span>error-player-not-registered=&quot;该玩家尚未注册！&quot;</span></span>
<span class="line"><span># 在尝试引用离线玩家时显示的消息。</span></span>
<span class="line"><span>error-player-offline=&quot;该玩家不在线！&quot;</span></span>
<span class="line"><span># 在尝试引用在线玩家时显示的消息。</span></span>
<span class="line"><span>error-player-online=&quot;该玩家在线！&quot;</span></span>
<span class="line"><span># 在验证指定玩家名称因 Mojang 速率限制而导致范文被拒绝时显示的消息。</span></span>
<span class="line"><span>error-premium-throttled=&quot;Mojang API 已达到速率限制，请稍后重试！&quot;</span></span>
<span class="line"><span># 在连接至 Mojang 时出现未知错误而无法进一步验证玩家名称时显示的消息。错误将会输出在控制台上。</span></span>
<span class="line"><span>error-premium-unknown=&quot;连接至 Mojang API 时出错，请检查控制台获取更多信息。&quot;</span></span>
<span class="line"><span># 在玩家执行命令速度过快时显示的消息。</span></span>
<span class="line"><span>error-throttle=&quot;执行命令过快！请稍等一会。&quot;</span></span>
<span class="line"><span># 在出现未知错误时显示的消息。</span></span>
<span class="line"><span>error-unknown=&quot;出现未知错误，请检查控制台。&quot;</span></span>
<span class="line"><span># 在玩家尝试使用未知命令时显示的消息。</span></span>
<span class="line"><span>error-unknown-command=&quot;未知命令！&quot;</span></span>
<span class="line"><span># 在玩家尝试提及未知用户时显示的消息。</span></span>
<span class="line"><span>error-unknown-user=&quot;该玩家不存在！&quot;</span></span>
<span class="line"><span># 在玩家尝试验证邮箱但验证码错误时显示的消息。</span></span>
<span class="line"><span>error-wrong-mail-verify=&quot;验证码错误！&quot;</span></span>
<span class="line"><span># 在玩家尝试重置密码但验证码错误时显示的消息。</span></span>
<span class="line"><span>error-wrong-password-reset=&quot;验证码错误！&quot;</span></span>
<span class="line"><span># 在玩家输入命令 /librelogin about 时显示的消息。</span></span>
<span class="line"><span># !! 以任何方式使得这段消息不可见的方法都是可耻且视作违反证书规定 !!</span></span>
<span class="line"><span>info-about=&quot;该服务器正在运行 FOSS 验证插件，LibreLogin。\\n当前版本：%version%\\n插件作者：kyngs 与其他贡献成员\\n插件源码：https://github.com/kyngs/LibreLogin\\n使用证书：Mozilla Public License 2.0&quot;</span></span>
<span class="line"><span># 在玩家拥有多个账号时显示的消息。</span></span>
<span class="line"><span>info-alts=&quot;当前 IP 地址下有 %count% 个玩家：&quot;</span></span>
<span class="line"><span># 在玩家拥有多个账号时显示的消息。</span></span>
<span class="line"><span>info-alts-entry=&quot;- %name% (最后上线: %last_seen%)&quot;</span></span>
<span class="line"><span># 在删除某些内容时显示的消息。</span></span>
<span class="line"><span>info-deleted=&quot;删除成功！&quot;</span></span>
<span class="line"><span># 正在删除某些内容时显示的消息。</span></span>
<span class="line"><span>info-deleting=&quot;正在删除...&quot;</span></span>
<span class="line"><span># 正在禁用某些内容时显示的消息。</span></span>
<span class="line"><span>info-disabling=&quot;正在禁用...&quot;</span></span>
<span class="line"><span># 在玩家尝试执行命令 /librelogin dump 时显示的消息。</span></span>
<span class="line"><span>info-dumped=&quot;缓存已保存为 %file%!&quot;</span></span>
<span class="line"><span># 在玩家尝试执行命令 /librelogin dump 时显示的消息。</span></span>
<span class="line"><span>info-dumping=&quot;正在创建缓存...&quot;</span></span>
<span class="line"><span># 在编辑某些内容时显示的消息。</span></span>
<span class="line"><span>info-edited=&quot;编辑完毕！&quot;</span></span>
<span class="line"><span># 正在编辑某些内容时显示的消息。</span></span>
<span class="line"><span>info-editing=&quot;编辑中...&quot;</span></span>
<span class="line"><span># 正在启用某些内容时显示的消息。</span></span>
<span class="line"><span>info-enabling=&quot;启用中...&quot;</span></span>
<span class="line"><span># 在玩家被服务器踢出时显示的消息。</span></span>
<span class="line"><span>info-kick=&quot;你已被服务器踢出，理由：%reason%&quot;</span></span>
<span class="line"><span># 在玩家登入时显示的消息。</span></span>
<span class="line"><span>info-logged-in=&quot;登录成功！&quot;</span></span>
<span class="line"><span># 在玩家尝试登录时显示的消息。</span></span>
<span class="line"><span>info-logging-in=&quot;正在登录...&quot;</span></span>
<span class="line"><span># 在玩家执行发送邮件的命令时显示的消息。</span></span>
<span class="line"><span>info-mail-sending=&quot;正在发送邮件...&quot;</span></span>
<span class="line"><span># 在玩家验证邮箱时发送的消息。</span></span>
<span class="line"><span>info-mail-verified=&quot;邮箱验证完成！现在可以在忘记密码时通过邮箱重置。&quot;</span></span>
<span class="line"><span># 在玩家没有同 IP 下账号时显示的消息。</span></span>
<span class="line"><span>info-no-alts=&quot;同一 IP 下没有更多账号。&quot;</span></span>
<span class="line"><span># 在玩家重置密码时显示的消息。</span></span>
<span class="line"><span>info-password-reset=&quot;密码已重置！之后便可使用新密码登录。&quot;</span></span>
<span class="line"><span># 在玩家通过 /premium 启用免密登录后显示的消息。</span></span>
<span class="line"><span>info-premium-logged-in=&quot;你已自动登录！&quot;</span></span>
<span class="line"><span># 在玩家注册完成后显示的消息。</span></span>
<span class="line"><span>info-registered=&quot;注册成功！&quot;</span></span>
<span class="line"><span># 在玩家尝试注册时显示的消息。</span></span>
<span class="line"><span>info-registering=&quot;正在注册...&quot;</span></span>
<span class="line"><span># 完成重载显示的消息。</span></span>
<span class="line"><span>info-reloaded=&quot;重载成功！&quot;</span></span>
<span class="line"><span># 在重载时显示的消息。</span></span>
<span class="line"><span>info-reloading=&quot;重载中...&quot;</span></span>
<span class="line"><span># 在玩家执行发送重置密码邮件时显示的消息。</span></span>
<span class="line"><span>info-reset-password-mail-sent=&quot;密码重置邮件已发送！若收件箱中没有找到，请检查垃圾邮件箱。重置请求有效期为 10 分钟。&quot;</span></span>
<span class="line"><span># 在玩家尝试重置密码时显示的消息。</span></span>
<span class="line"><span>info-resetting-password=&quot;正在重置密码...&quot;</span></span>
<span class="line"><span># 在玩家执行发送邮件的命令时显示的消息。</span></span>
<span class="line"><span>info-sending-email=&quot;正在发送邮件...&quot;</span></span>
<span class="line"><span># 在玩家执行发送邮件的命令时显示的消息。</span></span>
<span class="line"><span>info-sent-email=&quot;邮件已发送！&quot;</span></span>
<span class="line"><span># 在玩家处于会话期间而跳过登录时显示的消息。</span></span>
<span class="line"><span>info-session-logged-in=&quot;你已自动登录！&quot;</span></span>
<span class="line"><span># 在玩家的信息被查询时显示的消息。</span></span>
<span class="line"><span>info-user=&quot;UUID：%uuid%\\n正版 UUID：%premium_uuid%\\n最后上线：%last_seen%\\n注册日期：%joined%\\n二步验证：%2fa%\\n邮箱：%email%\\nIP：%ip%\\n最后登录：%last_authenticated%&quot;</span></span>
<span class="line"><span># 在玩家执行发送验证邮箱的命令时显示的消息。</span></span>
<span class="line"><span>info-verification-mail-sent=&quot;验证邮件已发送！若收件箱中没有找到，请检查垃圾邮件箱。重置请求有效期为 10 分钟。&quot;</span></span>
<span class="line"><span># 在玩家启用二步验证时显示的消息。</span></span>
<span class="line"><span>kick-2fa-enabled=&quot;二步验证已启用！请重新进入服务器。&quot;</span></span>
<span class="line"><span># 在玩家使用错误密码登入服务器时显示的消息。</span></span>
<span class="line"><span>kick-error-password-wrong=&quot;密码错误！&quot;</span></span>
<span class="line"><span># 在玩家使用非法名称进入服务器时显示的消息。</span></span>
<span class="line"><span># 见 https://github.com/kyngs/LibreLogin/wiki/Name-Validation 了解详细。</span></span>
<span class="line"><span>kick-illegal-username=&quot;名称中包含非法字符或长于 16 字符！&quot;</span></span>
<span class="line"><span># 在玩家名称大小写不正确时进入服务器时显示的消息。</span></span>
<span class="line"><span># 见 https://github.com/kyngs/LibreLogin/wiki/Name-Validation 了解详细。</span></span>
<span class="line"><span>kick-invalid-case-username=&quot;请使用 &amp;c%username% &amp;f登录服务器&quot;</span></span>
<span class="line"><span># 在玩家可注册账号数量已达到单 IP 上限时显示的消息。</span></span>
<span class="line"><span># 见配置文件中 &quot;ip-limit&quot; 项的描述。</span></span>
<span class="line"><span>kick-ip-limit=&quot;当前 IP 不能再注册更多账号了！&quot;</span></span>
<span class="line"><span># 该消息会在数据冲突时出现。</span></span>
<span class="line"><span># 见 https://github.com/kyngs/LibreLogin/wiki/Profile-Conflicts 了解详细。</span></span>
<span class="line"><span>kick-name-mismatch=&quot;糟糕！似乎有正版玩家将自己的名字改成了 %nickname%，也就是出现了冲突账号。请立即联系管理员！&quot;</span></span>
<span class="line"><span># 在玩家因无登录服可用时显示的消息。</span></span>
<span class="line"><span>kick-no-limbo=&quot;这里没有你能进入的登录服，请稍后再试。如果你是管理员，请尝试安装 NanoLimboPlugin。&quot;</span></span>
<span class="line"><span># 在玩家因无服务器可用时显示的消息。</span></span>
<span class="line"><span>kick-no-lobby=&quot;这里没有你能进入的大厅，请稍后再试。&quot;</span></span>
<span class="line"><span># 在玩家使用重复名称进入服务器时显示。</span></span>
<span class="line"><span>kick-occupied-username=&quot;请使用 &amp;c%username% &amp;f登录服务器&quot;</span></span>
<span class="line"><span># 在 Mojang API 速率限制请求时，插件无法验证给定玩家是否为正版用户时发送的消息。</span></span>
<span class="line"><span>kick-premium-error-throttled=&quot;Mojang API 查询服务繁忙，请稍后进入服务器。&quot;</span></span>
<span class="line"><span># 在连接至 Mojang 出现问题而无法验证玩家名称时显示的消息。</span></span>
<span class="line"><span># 对应错误会输出在控制台。</span></span>
<span class="line"><span>kick-premium-error-undefined=&quot;与 Mojang 通信时出现错误，若问题持续存在，请联系服务器管理员。&quot;</span></span>
<span class="line"><span># 在玩家禁用自动登录后被踢出显示的消息。</span></span>
<span class="line"><span>kick-premium-info-disabled=&quot;你已成功禁用自动登录！&quot;</span></span>
<span class="line"><span># 在玩家启用自动登录后被踢出显示的消息。</span></span>
<span class="line"><span>kick-premium-info-enabled=&quot;自动登录已启用！&quot;</span></span>
<span class="line"><span># 在玩家名称过短时显示的消息。</span></span>
<span class="line"><span># 见配置文本 &quot;minimum-username-length&quot; 项的描述。</span></span>
<span class="line"><span>kick-short-username=&quot;用户名称过短！不能短于 %length% 个字符。&quot;</span></span>
<span class="line"><span># 在玩家登录超时时显示的消息。（可以在配置文件中设置玩家用于登录的时间长度。）</span></span>
<span class="line"><span>kick-time-limit=&quot;给你登录的时间已经过了！&quot;</span></span>
<span class="line"><span># 在玩家确认使用自动登录时显示的消息。</span></span>
<span class="line"><span>prompt-confirm=&quot;你正在启用正版免密登录。需要注意的是启用后&amp;4将无法&amp;r再使用离线客户端登入服务器。你可以稍后使用 /cracked 命令关闭验证。若要确认本次操作，请在 5 分钟内输入命令 /confirmpremium。&quot;</span></span>
<span class="line"><span># 在玩家要求登录时显示的消息。</span></span>
<span class="line"><span>prompt-login=&quot;请登录：&amp;e/login &amp;b&lt;密码&gt; [二步验证码]&quot;</span></span>
<span class="line"><span># 在玩家要求注册时显示的消息。</span></span>
<span class="line"><span>prompt-register=&quot;请注册：&amp;e/register &amp;b&lt;密码&gt; &lt;确认密码&gt;&quot;</span></span>
<span class="line"><span># 配置修订版本。!!请勿乱动!!</span></span>
<span class="line"><span>revision=3</span></span>
<span class="line"><span># 在登录时显示的子标题。请确保你在配置文本中启用了 use-titles 选项。</span></span>
<span class="line"><span>sub-title-login=&quot;&amp;e/login &amp;b&lt;密码&gt;&quot;</span></span>
<span class="line"><span># 在注册时显示的子标题。请确保你在配置文本中启用了 use-titles 选项。</span></span>
<span class="line"><span>sub-title-register=&quot;&amp;e/register &amp;b&lt;密码&gt; &lt;密码&gt;&quot;</span></span>
<span class="line"><span># 该部分包含了命令的格式文本。因其繁杂，一般人会保持默认设置。</span></span>
<span class="line"><span>syntax {</span></span>
<span class="line"><span>    # 在玩家试图以错误格式进行二步验证时显示。</span></span>
<span class="line"><span>    &quot;2fa-confirm&quot;=&quot;&lt;验证码&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式修改密码时显示。</span></span>
<span class="line"><span>    change-password=&quot;&lt;旧密码&gt; &lt;新密码&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式确认密码修改时显示</span></span>
<span class="line"><span>    confirm-password-reset=&quot;&lt;验证码&gt; &lt;密码&gt; &lt;重复密码&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式测试邮箱时显示。</span></span>
<span class="line"><span>    email-test=&quot;&lt;邮箱地址&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式登录时显示。</span></span>
<span class="line"><span>    login=&quot;&lt;密码&gt; [验证码]&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式启用正版免密登录时显示。</span></span>
<span class="line"><span>    premium=&quot;&lt;密码&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式注册账号时显示。</span></span>
<span class="line"><span>    register=&quot;&lt;密码&gt; &lt;重复密码&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式重置密码时显示。</span></span>
<span class="line"><span>    reset-password=&quot;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式设置邮箱时显示。</span></span>
<span class="line"><span>    set-email=&quot;&lt;邮箱地址&gt; &lt;密码&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式禁用其他玩家二步验证时显示。</span></span>
<span class="line"><span>    user-2fa-off=&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式查询同 IP 账号时显示。</span></span>
<span class="line"><span>    user-alts=&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式禁用其他玩家免密登录时显示。</span></span>
<span class="line"><span>    user-cracked=&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式删除其他玩家时显示。</span></span>
<span class="line"><span>    user-delete=&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式禁用其他玩家邮箱时显示。</span></span>
<span class="line"><span>    user-email-off=&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式获取其他玩家时显示。</span></span>
<span class="line"><span>    user-info=&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式登录其他玩家时显示。</span></span>
<span class="line"><span>    user-login=&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式为其他玩家迁移数据时显示。</span></span>
<span class="line"><span>    user-migrate=&quot;&lt;名称&gt; &lt;新名称&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式为其他玩家修改密码时显示。</span></span>
<span class="line"><span>    user-pass-change=&quot;&lt;名称&gt; &lt;新密码&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式为其他玩家启用免密登录时显示。</span></span>
<span class="line"><span>    user-premium=&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式注册其他用户时显示。</span></span>
<span class="line"><span>    user-register=&quot;&lt;名称&gt; &lt;密码&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式为其他玩家设置邮箱时显示。</span></span>
<span class="line"><span>    user-set-email=&quot;&lt;名称&gt; &lt;邮箱&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式注销时显示。</span></span>
<span class="line"><span>    user-unregister=&quot;&lt;名称&gt;&quot;</span></span>
<span class="line"><span>    # 在玩家试图以错误格式验证邮箱时显示。</span></span>
<span class="line"><span>    verify-email=&quot;&lt;验证码&gt;&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># 在玩家登录时显示的标题。请确保你在配置文本中启用了 use-titles 选项。</span></span>
<span class="line"><span>title-login=&quot;&amp;6&amp;l登录&quot;</span></span>
<span class="line"><span># 在玩家注册时显示的标题。请确保你在配置文本中启用了 use-titles 选项。</span></span>
<span class="line"><span>title-register=&quot;&amp;6&amp;l注册&quot;</span></span>
<span class="line"><span># 在开始二步验证时显示的消息。</span></span>
<span class="line"><span>totp-generating=&quot;正在生成二步验证码...&quot;</span></span>
<span class="line"><span># 在玩家尝试完成二步验证操作但未启用时显示的消息。</span></span>
<span class="line"><span>totp-not-awaiting=&quot;你尚未启用二步验证！请输入命令 /2fa 开启二步验证。&quot;</span></span>
<span class="line"><span># 在玩家尝试不填入二步验证码登录时显示的消息。</span></span>
<span class="line"><span>totp-not-provided=&quot;请输入二步验证码！请使用命令 /login &lt;密码&gt; &lt;验证码&gt;，若丢失验证码，请联系管理员。&quot;</span></span>
<span class="line"><span># 在玩家需要扫描二步验证二维码时显示。</span></span>
<span class="line"><span>totp-show-info=&quot;请使用登录软件扫描地图上的二维码。例如谷歌登录或 Authy。\\n完成后请输入命令 /2faconfirm &lt;验证码&gt; 完成二步验证。\\n断开连接以取消操作。&quot;</span></span>
<span class="line"><span># 在玩家尝试登录或完成二步验证时使用了错误的验证码显示的消息。</span></span>
<span class="line"><span>totp-wrong=&quot;验证码错误！&quot;</span></span>
<span class="line"><span># 在玩家尝试使用旧版本二步验证客户端时显示的消息。</span></span>
<span class="line"><span>totp-wrong-version=&quot;客户端版本需高于 %low% - %high% 才可启用二步验证。之后才可再次使用旧版本登入。&quot;</span></span></code></pre></div>`,2)]))}const m=n(e,[["render",t]]);export{g as __pageData,m as default};
