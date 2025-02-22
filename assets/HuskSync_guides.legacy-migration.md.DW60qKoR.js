import{_ as a,c as l,o as i,al as c}from"./chunks/framework.CAEutmY3.js";const y=JSON.parse('{"title":"从旧版迁移","description":"","frontmatter":{},"headers":[],"relativePath":"HuskSync/guides.legacy-migration.md","filePath":"HuskSync/guides.legacy-migration.md"}'),s={name:"HuskSync/guides.legacy-migration.md"};function o(t,e,n,r,u,d){return i(),l("div",null,e[0]||(e[0]=[c('<h1 id="从旧版迁移" tabindex="-1">从旧版迁移 <a class="header-anchor" href="#从旧版迁移" aria-label="Permalink to &quot;从旧版迁移&quot;">​</a></h1><p>该教程会指导你将 1.4.x 版本的 HuskSync 数据迁移至 2.x 版本。</p><h2 id="需求" tabindex="-1">需求 <a class="header-anchor" href="#需求" aria-label="Permalink to &quot;需求&quot;">​</a></h2><ul><li>带有 HuskSync 1.4.x 版本数据的 MySQL 数据库； <ul><li>暂不支持从 SQLite 转化数据，因为 HuskSync 2.x 版本需要 MySQL 数据库，且不支持 SQLite。多有不便敬请谅解；</li><li>若正在使用 1.3.x 或更低版本的 HuskSync，建议在升级至 2.x 版本前先按照操作升级至 1.4.x 版本。</li></ul></li></ul><h2 id="迁移步骤" tabindex="-1">迁移步骤 <a class="header-anchor" href="#迁移步骤" aria-label="Permalink to &quot;迁移步骤&quot;">​</a></h2><h3 id="_1-将所有子服的-husksync-卸载" tabindex="-1">1. 将所有子服的 HuskSync 卸载 <a class="header-anchor" href="#_1-将所有子服的-husksync-卸载" aria-label="Permalink to &quot;1. 将所有子服的 HuskSync 卸载&quot;">​</a></h3><ul><li>关闭你所有的群组服和子服；</li><li>删除子服下 <code>~/plugins/</code> 的 jar 插件；</li><li>同时删除群组服下 <code>~/plugins/</code> 的插件。HuskSync 的 2.x 版本不再需要安装在群组服上；</li><li>直接删除（或先备份再删除）所有的配置文件夹（<code>~/plugins/HuskSync</code>）。HuskSync 3.x 版本有新的 <code>config.yml</code>、<code>message-xx-xx.yml</code> 和 <code>server.yml</code> 文件。</li></ul><h3 id="_2-在子服上安装-husksync-的-3-x-版本" tabindex="-1">2. 在子服上安装 HuskSync 的 3.x 版本 <a class="header-anchor" href="#_2-在子服上安装-husksync-的-3-x-版本" aria-label="Permalink to &quot;2. 在子服上安装 HuskSync 的 3.x 版本&quot;">​</a></h3><ul><li>所有的 HuskSync 的 3.x 版本只需要安装在你的子服上，而无需安装在群组服上；</li><li>详细请参照开头的<a href="./setup.setup.html">安装教程</a>章节。</li></ul><h3 id="_3-设置迁移" tabindex="-1">3. 设置迁移 <a class="header-anchor" href="#_3-设置迁移" aria-label="Permalink to &quot;3. 设置迁移&quot;">​</a></h3><ul><li>确保服务器没有玩家并按步骤正确安装 HuskSync 3.x 版本；</li><li>在子服控制台输入命令 <code>husksync migrate legacy</code>；</li><li>仔细阅读迁移配置的指导信息。在大多数情况下，你无需改动配置文本的设置，如果你需要更改，请使用命令 <code>husksync migrate legacy set &lt;设置&gt; &lt;值&gt;</code>；</li><li>迁移将会<em>从</em>你在控制台中指定的数据库迁移<em>至</em>你在 <code>config.yml</code> 中指定的数据库。若你要从多个群组中迁移数据，请确保数据迁移的数据库一一对应。</li></ul><h3 id="_4-开始迁移" tabindex="-1">4. 开始迁移 <a class="header-anchor" href="#_4-开始迁移" aria-label="Permalink to &quot;4. 开始迁移&quot;">​</a></h3><ul><li>输入命令 <code>husksync migrate legacy start</code> 来开始迁移程序。这会消耗一些时间，具体时长取决于迁移数据量。</li></ul><h3 id="_5-确保数据迁移成功" tabindex="-1">5. 确保数据迁移成功 <a class="header-anchor" href="#_5-确保数据迁移成功" aria-label="Permalink to &quot;5. 确保数据迁移成功&quot;">​</a></h3><ul><li>数据迁移完毕之后，HuskSync 将会在控制台发出提醒。若要验证数据迁移是否成功，可以进入游戏，输入命令 <code>/userdata list &lt;玩家名称&gt;</code>，检查数据是否因 <code>legacy migration</code> 原因而转化；</li><li>你可以删除数据库中的旧数据表。确保你删除了原数据表而不是转化后的数据表。默认情况下，<em>新的</em>数据表名称为 <code>husksync_users</code> 和 <code>husksync_user_data</code>，而<em>旧版本</em>数据表名称为 <code>husksync_players</code> 和 <code>husksync_data</code>，具体情况视配置文本设置而定。</li></ul>',15)]))}const k=a(s,[["render",o]]);export{y as __pageData,k as default};
