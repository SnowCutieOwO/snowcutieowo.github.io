import{_ as n,c as a,a7 as p,o as l}from"./chunks/framework.CMhgUA9K.js";const m=JSON.parse('{"title":"配置文件","description":"","frontmatter":{},"headers":[],"relativePath":"LibreLogin/useful-stuff.config.md","filePath":"LibreLogin/useful-stuff.config.md"}'),e={name:"LibreLogin/useful-stuff.config.md"};function i(c,s,t,o,r,u){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#  !!文件为 HOCON 格式!!</span></span>
<span class="line"><span>#  HOCON 格式与 JSON 相似，但有一些额外特征。</span></span>
<span class="line"><span>#  你可以在 Sponge 维基中找到更多信息：</span></span>
<span class="line"><span>#  https://docs.spongepowered.org/stable/en/server/getting-started/configuration/hocon.html</span></span>
<span class="line"><span>#  ----------------------------------------------------------------------------------------</span></span>
<span class="line"><span>#  LibreLogin 配置文件</span></span>
<span class="line"><span>#  ----------------------------------------------------------------------------------------</span></span>
<span class="line"><span>#  此为 LibreLogin 的配置文件.</span></span>
<span class="line"><span>#  你可以在 Github 页面找到本插件的更多信息：</span></span>
<span class="line"><span>#  https://github.com/kyngs/LibreLogin</span></span>
<span class="line"><span></span></span>
<span class="line"><span># !!!该部分仅影响 PAPER!!!</span></span>
<span class="line"><span># 验证玩家在连接至 Mojang 时的 IP 与他们进入服务器时的 IP 是否匹配。禁用该功能会导致安装在代理/VPN下群组的本插件无法正常工作。</span></span>
<span class="line"><span>allow-proxy-connections=true</span></span>
<span class="line"><span># 玩家未登录时能使用的命令</span></span>
<span class="line"><span>allowed-commands-while-unauthorized=[</span></span>
<span class="line"><span>    login,</span></span>
<span class="line"><span>    register,</span></span>
<span class="line"><span>    &quot;2fa&quot;,</span></span>
<span class="line"><span>    &quot;2faconfirm&quot;,</span></span>
<span class="line"><span>    l,</span></span>
<span class="line"><span>    log,</span></span>
<span class="line"><span>    reg,</span></span>
<span class="line"><span>    resetpassword,</span></span>
<span class="line"><span>    confirmpasswordreset</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span># 是否允许带有正版名称的玩家自动注册？</span></span>
<span class="line"><span># !!离线玩家将因此无法注册正版玩家名称!!</span></span>
<span class="line"><span>auto-register=false</span></span>
<span class="line"><span># 该部分用于 MySQL 的数据库配置。</span></span>
<span class="line"><span>database {</span></span>
<span class="line"><span>    properties {</span></span>
<span class="line"><span>        mysql {</span></span>
<span class="line"><span>            # 数据库名称。</span></span>
<span class="line"><span>            database=librelogin</span></span>
<span class="line"><span>            # 数据库域名。</span></span>
<span class="line"><span>            host=localhost</span></span>
<span class="line"><span>            # 数据库的 JDBC URL。如果不知道这部分的功能，请勿乱动。 (使用的 jdbc:mariadb 也适用于纯 mysql)</span></span>
<span class="line"><span>            jdbc-url=&quot;jdbc:mariadb://%host%:%port%/%database%?autoReconnect=true&amp;zeroDateTimeBehavior=convertToNull&quot;</span></span>
<span class="line"><span>            # 数据库连接的最大持续时间。如果不知道这部分的功能，请勿乱动。</span></span>
<span class="line"><span>            max-life-time=600000</span></span>
<span class="line"><span>            # 数据库的密码。</span></span>
<span class="line"><span>            password=&quot;&quot;</span></span>
<span class="line"><span>            # 数据库的端口。</span></span>
<span class="line"><span>            port=3306</span></span>
<span class="line"><span>            # 数据库的用户名。</span></span>
<span class="line"><span>            user=root</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        postgresql {</span></span>
<span class="line"><span>            # 数据库名称。</span></span>
<span class="line"><span>            database=librelogin</span></span>
<span class="line"><span>            # 数据库域名。</span></span>
<span class="line"><span>            host=localhost</span></span>
<span class="line"><span>            # 数据库连接的最大持续时间。如果不知道这部分的功能，请勿乱动。</span></span>
<span class="line"><span>            max-life-time=600000</span></span>
<span class="line"><span>            # 数据库的密码。</span></span>
<span class="line"><span>            password=&quot;&quot;</span></span>
<span class="line"><span>            # 数据库的端口。</span></span>
<span class="line"><span>            port=5432</span></span>
<span class="line"><span>            # 数据库的用户名。</span></span>
<span class="line"><span>            user=root</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        sqlite {</span></span>
<span class="line"><span>            # SQLite 数据库文件的路径. 填入插件所在文件夹的相对路径</span></span>
<span class="line"><span>            path=&quot;user-data.db&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    # 数据库的类型。可用的内置类型：</span></span>
<span class="line"><span>    # librelogin-mysql - MySQL 数据库，需要填写下面的 mysql 部分内容。</span></span>
<span class="line"><span>    # librelogin-postgresql - PostgreSQL 数据库，需要填写下面的 postgresql 部分内容。</span></span>
<span class="line"><span>    # librelogin-sqlite - SQLite 数据库，默认文件为 &quot;database.db&quot;。你可以在下面的 sqlite 部分进行修改。</span></span>
<span class="line"><span>    type=librelogin-sqlite</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># 是否启用调试模式？这会在控制台中输出一些信息。</span></span>
<span class="line"><span>debug=false</span></span>
<span class="line"><span># 默认证书提供者。用于加密密码。可用提供者：</span></span>
<span class="line"><span># SHA-256 - 过时，不推荐。出于兼容考虑而保留。</span></span>
<span class="line"><span># SHA-512 - 相较 SHA-256 更安全，但仍不推荐。出于兼容考虑而保留。</span></span>
<span class="line"><span># BCrypt-2A - 相对较新，更安全，推荐。</span></span>
<span class="line"><span># Argon-2ID - 最新，比 BCrypt-2A 安全，但可能会导致服务器卡顿。</span></span>
<span class="line"><span>default-crypto-provider=BCrypt-2A</span></span>
<span class="line"><span># !!使用 Paper 时该设置无效!! 如果玩家进入的服务器关闭，是否自动返回大厅？若设置为 false，他们将会被踢出。</span></span>
<span class="line"><span>fallback=false</span></span>
<span class="line"><span># 默认情况下选择大厅/登录服时，LibreLogin 会主动排除满员服。</span></span>
<span class="line"><span># 部分情况下可能不会按预期工作。在这种情况下，你可以启用该选项，可无视后端服务器 ping 显示的最大玩家数。</span></span>
<span class="line"><span>ignore-max-players-from-backend-ping=false</span></span>
<span class="line"><span># 同一个 IP 地址可注册的最大账号数量。</span></span>
<span class="line"><span># 设置为不大于 0 的数字可将其禁用。</span></span>
<span class="line"><span># !!不推荐!! 因缺乏 IPv4 的地址，部分村庄或地区可能会共享一个 IP。</span></span>
<span class="line"><span>ip-limit=-1</span></span>
<span class="line"><span># 未登录时玩家所处的世界/服务器。在 Paper 服务端中，玩家会生成在世界的出生点。填入的服务器必须在群组服核心配置中注册。在使用 Paper 的情况下，填入世界必须存在。</span></span>
<span class="line"><span>limbo=[</span></span>
<span class="line"><span>    limbo0,</span></span>
<span class="line"><span>    limbo1</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span># !!使用 Paper 时该设置无效!! 登录服务器绑定的端口号。</span></span>
<span class="line"><span>limbo-port-range=&quot;30000-40000&quot;</span></span>
<span class="line"><span># !!使用 Paper 时，请将世界全部放入 &quot;root&quot; 下!!</span></span>
<span class="line"><span># 在 Paper 服务端中，玩家会生成在世界的出生点。</span></span>
<span class="line"><span># </span></span>
<span class="line"><span># 在完成登录后传送至的服务器。对应服务器必须在群组配置文件中注册。</span></span>
<span class="line"><span># 配置允许设置强制端口。在 &quot;root&quot; 内的服务器为非强制端口进入的玩家所使用。请使用 § 而非正常的点.</span></span>
<span class="line"><span># 另见：https://github.com/kyngs/LibreLogin/wiki/Configuring-Forced-Hosts</span></span>
<span class="line"><span>lobby {</span></span>
<span class="line"><span>    root=[</span></span>
<span class="line"><span>        lobby1,</span></span>
<span class="line"><span>        lobby0</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    bedwars§myserver§com=[</span></span>
<span class="line"><span>        bedwars-hub-0,</span></span>
<span class="line"><span>        bedwars-hub-1</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>mail {</span></span>
<span class="line"><span>    # 验证邮箱的发送者。</span></span>
<span class="line"><span>    email=&quot;email@something.com&quot;</span></span>
<span class="line"><span>    # 是否启用邮箱找回功能？</span></span>
<span class="line"><span>    enabled=false</span></span>
<span class="line"><span>    # SMTP 服务器的域名。</span></span>
<span class="line"><span>    host=&quot;smtp.gmail.com&quot;</span></span>
<span class="line"><span>    # 登入 SMTP 服务器的密码。推荐使用不重复的一次性密码。</span></span>
<span class="line"><span>    password=password</span></span>
<span class="line"><span>    # SMTP 服务器的端口号。</span></span>
<span class="line"><span>    port=587</span></span>
<span class="line"><span>    # 邮件的发送者。</span></span>
<span class="line"><span>    sender=&quot;LibreLogin Network&quot;</span></span>
<span class="line"><span>    # 登入 SMTP 服务器所使用的用户名称。</span></span>
<span class="line"><span>    username=username</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># 当密码输入错误大于一定次数时踢出玩家。设置为 -1 表示禁用该功能。</span></span>
<span class="line"><span>max-login-attempts=-1</span></span>
<span class="line"><span># 该部分用于配置其他插件迁移来的数据库设置。</span></span>
<span class="line"><span># 请见维基获得更多信息：https://github.com/kyngs/LibreLogin/wiki/Database-Migration</span></span>
<span class="line"><span>migration {</span></span>
<span class="line"><span>    old-database {</span></span>
<span class="line"><span>        mysql {</span></span>
<span class="line"><span>            # 数据库的名称。</span></span>
<span class="line"><span>            database=librelogin</span></span>
<span class="line"><span>            # 数据库的端口。</span></span>
<span class="line"><span>            host=localhost</span></span>
<span class="line"><span>            # 数据库连接的最大持续时间。如果不知道该设置的作用，请勿乱动。</span></span>
<span class="line"><span>            max-life-time=600000</span></span>
<span class="line"><span>            # 数据库的密码。</span></span>
<span class="line"><span>            password=&quot;&quot;</span></span>
<span class="line"><span>            # 数据库的端口。</span></span>
<span class="line"><span>            port=3306</span></span>
<span class="line"><span>            # 旧数据库表名。</span></span>
<span class="line"><span>            table=user-data</span></span>
<span class="line"><span>            # 数据库的用户名称。</span></span>
<span class="line"><span>            user=root</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        sqlite {</span></span>
<span class="line"><span>            # SQLite 数据库文件的路径. 填入插件所在文件夹的相对路径</span></span>
<span class="line"><span>            path=&quot;user-data.db&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    # 下次重启时迁移数据库。</span></span>
<span class="line"><span>    on-next-startup=false</span></span>
<span class="line"><span>    # 迁移类型。可填入的类型：</span></span>
<span class="line"><span>    # jpremium-mysql - 可用于转化 MySQL JPremium SHA256 与 BCrypt</span></span>
<span class="line"><span>    # authme-mysql - 可用于转化 MySQL AuthMe BCrypt 与 SHA256</span></span>
<span class="line"><span>    # authme-sqlite - 可用于转化 SQLite AuthMe BCrypt 与 SHA256</span></span>
<span class="line"><span>    # authme-postgresql - 可用于转化 PostgreSQL AuthMe BCrypt 与 SHA256</span></span>
<span class="line"><span>    # aegis-mysql - 可用于转化 MySQL Aegis BCrypt</span></span>
<span class="line"><span>    # dba-mysql - 可用于转化 MySQL DynamicBungeeAuth，其使用了 SHA-512</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # nlogin-sqlite - 可用于转化 SQLite NLogin SHA512</span></span>
<span class="line"><span>    # nlogin-mysql - 可用于转化 MySQL NLogin SHA512</span></span>
<span class="line"><span>    # loginsecurity-mysql - 可用于转化 MySQL LoginSecurity BCrypt</span></span>
<span class="line"><span>    # loginsecurity-sqlite - 可用于转化 SQLite LoginSecurity BCrypt</span></span>
<span class="line"><span>    # fastlogin-sqlite - 可用于转化 SQLite FastLogin, !!请先运行 Authme 迁移程序!!</span></span>
<span class="line"><span>    # fastlogin-mysql - 可用于转化 MySQL FastLogin, !!请先运行 Authme 迁移程序!!</span></span>
<span class="line"><span>    # limboauth-mysql - 可用于转化 MySQL LimboAuth BCrypt 与 SHA256</span></span>
<span class="line"><span>    # authy-mysql - 可用于转化 MySQL Authy SHA256</span></span>
<span class="line"><span>    # authy-sqlite - 可用于转化 SQLite Authy SHA256</span></span>
<span class="line"><span>    # logit-mysql - 可用于转化 MySQL LogIt SHA256</span></span>
<span class="line"><span>    # librelogin-mysql - 可用于转化 MySQL LibreLogin，迁移至不同数据库时很有用</span></span>
<span class="line"><span>    # librelogin-sqlite - 可用于转化 SQLite LibreLogin，迁移至不同数据库时很有用</span></span>
<span class="line"><span>    type=authme-sqlite</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># 重置登录尝试的时间。即玩家等待登录请求过期的时间。每次加入都会重置这个计时器。</span></span>
<span class="line"><span>milliseconds-to-refresh-login-attempts=10000</span></span>
<span class="line"><span># 未登录时提醒玩家登录的时间间隔。设置为任意负数可将其禁用。</span></span>
<span class="line"><span># 包括但不限于：</span></span>
<span class="line"><span># - 聊天栏消息</span></span>
<span class="line"><span># - 标题</span></span>
<span class="line"><span>milliseconds-to-refresh-notification=10000</span></span>
<span class="line"><span># 密码最小长度。设置为任意负数可将其禁用。</span></span>
<span class="line"><span>minimum-password-length=-1</span></span>
<span class="line"><span># 玩家名称最大长度。仅对新玩家生效，设置为负数可将其禁用。</span></span>
<span class="line"><span>minimum-username-length=-1</span></span>
<span class="line"><span># 设置新玩家创建时使用的 UUID 创建器。</span></span>
<span class="line"><span># 见维基获取更多信息：https://github.com/kyngs/LibreLogin/wiki/UUID-Creators</span></span>
<span class="line"><span># 可用创建器：</span></span>
<span class="line"><span># RANDOM - 生成随机 UUID</span></span>
<span class="line"><span># CRACKED - 基于玩家名称生成随机 UUID，与离线模式服务器中玩家 UUID 生成方式相同</span></span>
<span class="line"><span># MOJANG - 若玩家存在于 Mojang 的数据库则使用该 UUID，否则使用离线 UUID 生成。</span></span>
<span class="line"><span>new-uuid-creator=CRACKED</span></span>
<span class="line"><span># !!使用 Paper 时该设置无效!! 是否在服务器在线时向其发送 ping 请求并获取玩家数量？如果禁用，对服务器发送 ping 请求的消息仍然会在控制台中显示。</span></span>
<span class="line"><span>ping-servers=false</span></span>
<span class="line"><span># 用于解决数据冲突的方法。可用设置：</span></span>
<span class="line"><span># BLOCK - 以 &quot;kick-name-mismatch&quot; 对应的消息踢出玩家。管理员需手动解决该问题。</span></span>
<span class="line"><span># USE_OFFLINE - 使用离线数据。在两个玩家加入时，他们会被要求登录并能用离线玩家的密码登录。离线玩家随后需要修改他们的名称来转移账户数据。需要注意的是，修改名称有 30 天的冷却期。</span></span>
<span class="line"><span># OVERWRITE - 正版玩家数据将会覆盖离线玩家的数据。这会不可逆地删除后者的所有数据。!!谨慎使用; 可能导致玩家滥用!!</span></span>
<span class="line"><span>profile-conflict-resolution-strategy=BLOCK</span></span>
<span class="line"><span># 是否记住玩家上一次游戏所在的服务器/世界？不推荐大型服务器启用该设置。</span></span>
<span class="line"><span>remember-last-server=false</span></span>
<span class="line"><span># 配置文件修订版本号。 !!请勿乱动!!</span></span>
<span class="line"><span>revision=8</span></span>
<span class="line"><span># 设置登录/注册的时间限制，单位为秒。设置为任意负数可将其禁用。</span></span>
<span class="line"><span>seconds-to-authorize=-1</span></span>
<span class="line"><span># 设置玩家会话过期的时间。默认值为一周 (604800 秒)。设置为不大于 0 的数可禁用会话。</span></span>
<span class="line"><span>session-timeout=0</span></span>
<span class="line"><span># 该部分为二步验证配置。</span></span>
<span class="line"><span># !! 需要安装 Protocolize 才可使用该功能 !!</span></span>
<span class="line"><span># </span></span>
<span class="line"><span># 可以在维基找到更多信息：https://github.com/kyngs/LibreLogin/wiki/2FA</span></span>
<span class="line"><span>totp {</span></span>
<span class="line"><span>    # 玩家显示二维码地图的延迟。如果消失过快可考虑将该项值调大。</span></span>
<span class="line"><span>    delay=1000</span></span>
<span class="line"><span>    # 是否启用基于 TOTP 的二步验证？如果你不知道这是什么，这是一种使用了诸如谷歌登录等软件的二步验证方法。</span></span>
<span class="line"><span>    # 强烈推荐你阅读维基: https://github.com/kyngs/LibreLogin/wiki/2FA</span></span>
<span class="line"><span>    enabled=true</span></span>
<span class="line"><span>    # 在二步验证软件中显示的名称。请将此项修改为服务器名称。</span></span>
<span class="line"><span>    label=&quot;LibreLogin Network&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># 是否在玩家等待登录时在 ActionBar 上显示登录信息。</span></span>
<span class="line"><span>use-action-bar=false</span></span>
<span class="line"><span># 是否在玩家等待登录时在 BossBar 上显示登录信息。</span></span>
<span class="line"><span>use-titles=true</span></span></code></pre></div>`,2)]))}const b=n(e,[["render",i]]);export{m as __pageData,b as default};
