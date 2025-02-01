import{_ as i,c as t,o as a,al as n}from"./chunks/framework.LK_RS8Nx.js";const r=JSON.parse('{"title":"JSON 文件格式详解","description":"","frontmatter":{},"headers":[],"relativePath":"CommandTimer/json-schema.md","filePath":"CommandTimer/json-schema.md"}'),d={name:"CommandTimer/json-schema.md"};function e(h,s,l,k,p,o){return a(),t("div",null,s[0]||(s[0]=[n(`<h1 id="json-文件格式详解" tabindex="-1">JSON 文件格式详解 <a class="header-anchor" href="#json-文件格式详解" aria-label="Permalink to &quot;JSON 文件格式详解&quot;">​</a></h1><p>若你喜欢在 JSON 格式的文件中配置而不是直接通过菜单界面修改，那么你就可以按下列结构创建 JSON 文件。</p><table tabindex="0"><thead><tr><th>键</th><th>描述</th><th>值类型</th></tr></thead><tbody><tr><td><code>name</code></td><td>定时任务的名称，应当只包含英文或数字及下划线</td><td><code>string</code></td></tr><tr><td><code>commands</code></td><td>所要执行的命令</td><td><code>Commands[]</code></td></tr><tr><td><code>interval</code></td><td>每个命令之间执行的间隔</td><td><code>Interval</code></td></tr><tr><td><code>times</code></td><td>执行定时任务的固定时间点</td><td><code>Time[]</code></td></tr><tr><td><code>random</code></td><td>决定是否执行该组命令的几率。<code>1</code> 表示 <code>100%</code>，<code>0.5</code> 表示 <code>50%</code>，<code>0</code> 则表示 <code>0%</code>，依此类推</td><td><code>number</code></td></tr><tr><td><code>days</code></td><td>定时任务所能执行的日期</td><td><code>MONDAY</code>、<code>TUESDAY</code>、<code>WEDNESDAY</code>、<code>THURSDAY</code>、<code>FRIDAY</code>、<code>SATURDAY</code>、<code>SUNDAY</code></td></tr><tr><td><code>executionLimit</code></td><td>执行命令组的次数上限。设置为 <code>-1</code> 可将该设置禁用</td><td><code>number</code></td></tr><tr><td><code>timesExecuted</code></td><td>命令组已执行的次数。<strong>请勿手动更新该项的值</strong></td><td><code>number</code></td></tr><tr><td><code>lastExecutedCommandIndex</code></td><td>最后执行过的命令的序号。这会用于 <code>INTERVAL</code> 模式下的相关内容。<strong>请勿手动更新该项的值</strong></td><td><code>number</code></td></tr><tr><td><code>lastExecuted</code></td><td>定时任务执行的最后日期。<strong>请勿手动更新该项的值</strong></td><td><code>Date</code></td></tr><tr><td><code>commandExecutionMode</code></td><td>命令的执行模式</td><td><code>Execution Mode</code></td></tr><tr><td><code>active</code></td><td>决定定时任务是否启用</td><td><code>boolean</code></td></tr><tr><td><code>resetExecutionAfterRestart</code></td><td>决定 <code>executionLimit</code> 的值是否要在重启时重置</td><td><code>boolean</code></td></tr><tr><td><code>condition</code></td><td>条件判断模块的配置部分</td><td><code>Condition</code></td></tr><tr><td><code>event</code></td><td>事件引擎的配置部分</td><td><code>Event[]</code></td></tr></tbody></table><h2 id="命令部分配置" tabindex="-1">命令部分配置 <a class="header-anchor" href="#命令部分配置" aria-label="Permalink to &quot;命令部分配置&quot;">​</a></h2><table tabindex="0"><thead><tr><th>键</th><th>描述</th><th>值类型</th></tr></thead><tbody><tr><td><code>command</code></td><td>执行的命令，无需在命令中包含 <code>/</code>。</td><td><code>string</code></td></tr><tr><td><code>gender</code></td><td>执行命令时代表的身份</td><td>身份</td></tr><tr><td><code>interval</code></td><td>决定在遍历所有玩家执行命令时的执行间隔</td><td>间隔</td></tr></tbody></table><h2 id="间隔" tabindex="-1">间隔 <a class="header-anchor" href="#间隔" aria-label="Permalink to &quot;间隔&quot;">​</a></h2><table tabindex="0"><thead><tr><th>键</th><th>描述</th><th>值类型</th></tr></thead><tbody><tr><td><code>days</code></td><td>天数</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>小时数</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>分钟数</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>秒数</td><td><code>number</code></td></tr></tbody></table><h2 id="时间点" tabindex="-1">时间点 <a class="header-anchor" href="#时间点" aria-label="Permalink to &quot;时间点&quot;">​</a></h2><p>这些设置的更多信息可以在这里找到。</p><p>如你所见，条件对象有一个名为 <code>conditions</code> 的递归列表。这是因为条件可以多次组合来做到复杂的判断效果。</p><table tabindex="0"><thead><tr><th>键</th><th>描述</th><th>值类型</th></tr></thead><tbody><tr><td><code>conditionType</code></td><td>条件类型</td><td><code>SIMPLE</code>、<code>NOT</code>、<code>AND</code>、<code>OR</code></td></tr><tr><td><code>simpleCondition</code></td><td>最简单的条件形式。仅在模式为 <code>conditionType</code> 为 <code>SIMPLE</code> 或 <code>NOT</code> 时有效</td><td><code>SimpleCondition</code></td></tr><tr><td><code>conditions</code></td><td>条件列表，仅在 <code>conditionType</code> 为 <code>AND</code> 和 <code>OR</code> 时有效</td><td></td></tr></tbody></table><h3 id="简单条件" tabindex="-1">简单条件 <a class="header-anchor" href="#简单条件" aria-label="Permalink to &quot;简单条件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>键</th><th>描述</th><th>值类型</th></tr></thead><tbody><tr><td><code>conditionGroup</code></td><td>该条件归属的拓展</td><td><code>string</code></td></tr><tr><td><code>rule</code></td><td>在选定的 <code>conditionGroup</code> 中指定的条件规则</td><td><code>string</code></td></tr><tr><td><code>conditionParamFields</code></td><td>选定的 <code>rule</code> 所要求的额外值</td><td><code>ConditionParamterField[]</code></td></tr></tbody></table><h3 id="条件字段内容" tabindex="-1">条件字段内容 <a class="header-anchor" href="#条件字段内容" aria-label="Permalink to &quot;条件字段内容&quot;">​</a></h3><table tabindex="0"><thead><tr><th>键</th><th>描述</th><th>值类型</th></tr></thead><tbody><tr><td><code>name</code></td><td>字段的名称</td><td><code>string</code></td></tr><tr><td><code>value</code></td><td>配置字段的指定值</td><td><code>any</code></td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><p>事件引擎的相关文档可在这里找到</p><table tabindex="0"><thead><tr><th>键</th><th>描述</th><th>值类型</th></tr></thead><tbody><tr><td><code>active</code></td><td>指定事件是否激活</td><td><code>boolean</code></td></tr><tr><td><code>conditionGroup</code></td><td>该事件所属的拓展</td><td><code>string</code></td></tr><tr><td><code>event</code></td><td>选定的 <code>conditionGroup</code> 中的事件名称</td><td><code>string</code></td></tr><tr><td><code>condition</code></td><td>该事件配置的执行条件。与普通的执行条件略有区别</td><td><code>EventCondition</code></td></tr></tbody></table><h3 id="事件条件" tabindex="-1">事件条件 <a class="header-anchor" href="#事件条件" aria-label="Permalink to &quot;事件条件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>键</th><th>描述</th><th>值类型</th></tr></thead><tbody><tr><td><code>conditionType</code></td><td>条件类型</td><td><code>SIMPLE</code>、<code>NOT</code>、<code>AND</code>、<code>OR</code></td></tr><tr><td><code>simpleCondition</code></td><td>最简单的条件形式。仅在模式为 <code>conditionType</code> 为 <code>SIMPLE</code> 或 <code>NOT</code> 时有效</td><td><code>SimpleCondition</code></td></tr><tr><td><code>conditions</code></td><td>条件列表，仅在 <code>conditionType</code> 为 <code>AND</code> 和 <code>OR</code> 时有效</td><td></td></tr></tbody></table><h3 id="事件简单条件" tabindex="-1">事件简单条件 <a class="header-anchor" href="#事件简单条件" aria-label="Permalink to &quot;事件简单条件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>键</th><th>描述</th><th>值类型</th></tr></thead><tbody><tr><td><code>fieldName</code></td><td>字段名称</td><td><code>string</code></td></tr><tr><td><code>value</code></td><td>指定字段中的给定值</td><td><code>any</code></td></tr><tr><td><code>compare</code></td><td>与事件的值和传递的 <code>value</code> 进行比较的符号</td><td><code>EQUAL</code>、<code>GREATER_THAN</code>、<code>LESS_THAN</code>、<code>GREATER_OR_EQUAL_THAN</code>、<code>LESS_OR_EQUAL_THEN</code></td></tr></tbody></table><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alert_job_levelup&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;commands&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;say test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;gender&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CONSOLE&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;interval&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;days&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;hours&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;minutes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;seconds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;times&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;time1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;14:00:00&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;time2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;14:00:00&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;isMinecraftTime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;random&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;days&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;MONDAY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;TUESDAY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;WEDNESDAY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;THURSDAY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;FRIDAY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;SATURDAY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;SUNDAY&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;executionLimit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;timesExecuted&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;lastExecutedCommandIndex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;lastExecuted&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Feb 8, 2023, 9:19:51 PM&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;commandExecutionMode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;INTERVAL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;commandExecutionInterval&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;days&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;hours&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;minutes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;seconds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;active&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;resetExecutionsAfterRestart&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;condition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;conditionType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SIMPLE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;conditions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;simpleCondition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;conditionGroup&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JOBSREBORN&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;rule&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HAS_SPECIFIC_JOB&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;conditionParamFields&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;required_job&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LEVEL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;events&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;active&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;conditionGroup&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JOBSREBORN&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;event&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LEVEL_UP&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;condition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;conditionType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SIMPLE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;conditions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;simpleCondition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;fieldName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LEVEL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;compare&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;EQUAL&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,24)]))}const c=i(d,[["render",e]]);export{r as __pageData,c as default};
