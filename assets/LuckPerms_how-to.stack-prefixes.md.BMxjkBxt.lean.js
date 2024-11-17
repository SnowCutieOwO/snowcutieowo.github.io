import{_ as i,o as a,c as t,a7 as n}from"./chunks/framework.DSL0mkng.js";const E=JSON.parse('{"title":"前后缀堆叠","description":"","frontmatter":{},"headers":[],"relativePath":"LuckPerms/how-to.stack-prefixes.md","filePath":"LuckPerms/how-to.stack-prefixes.md"}'),h={name:"LuckPerms/how-to.stack-prefixes.md"};function e(l,s,p,d,k,r){return a(),t("div",null,s[0]||(s[0]=[n(`<h1 id="前后缀堆叠" tabindex="-1">前后缀堆叠 <a class="header-anchor" href="#前后缀堆叠" aria-label="Permalink to &quot;前后缀堆叠&quot;">​</a></h1><h2 id="这是干什么用的" tabindex="-1">这是干什么用的？ <a class="header-anchor" href="#这是干什么用的" aria-label="Permalink to &quot;这是干什么用的？&quot;">​</a></h2><p>“元数据堆叠”功能允许你在玩家聊天中一次显示多个前后缀。</p><p>你还是需要先安装一个聊天格式插件。</p><h2 id="它如何运作" tabindex="-1">它如何运作？ <a class="header-anchor" href="#它如何运作" aria-label="Permalink to &quot;它如何运作？&quot;">​</a></h2><p>在聊天插件请求玩家前/后缀时，除了返回权重最高的前缀之外，LuckPerms 还能应用一些规则来将多个前后缀结合在一起。</p><p>默认配置如下：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta-formatting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;highest&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    duplicates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">first-only</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    start-spacer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    middle-spacer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    end-spacer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  suffix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;highest&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    duplicates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">first-only</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    start-spacer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    middle-spacer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    end-spacer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span></code></pre></div><p>所有这些加起来表示在请求前缀或后缀时，返回权重最高的前后缀。</p><h2 id="我如何添加其他元素" tabindex="-1">我如何添加其他元素？ <a class="header-anchor" href="#我如何添加其他元素" aria-label="Permalink to &quot;我如何添加其他元素？&quot;">​</a></h2><p>下列元素是必需的。</p><table tabindex="0"><thead><tr><th>元素</th><th>描述</th></tr></thead><tbody><tr><td><code>highest</code></td><td>选中拥有最高权重的值，无论是玩家直接拥有或通过继承拥有。</td></tr><tr><td><code>lowest</code></td><td>与上述相同，但只取权重最低的值。</td></tr><tr><td><code>highest_own</code></td><td>选中拥有最高权重的值，但忽略继承所得的值。</td></tr><tr><td><code>lowest_own</code></td><td>与上述相同，但只取权重最低的值。</td></tr><tr><td><code>highest_inherited</code></td><td>选中拥有最高权重的值，但只接受继承所得的值。</td></tr><tr><td><code>lowest_inherited</code></td><td>与上述相同，但只取权重最低的值。</td></tr><tr><td><code>highest_on_track_&lt;路线&gt;</code></td><td>选中拥有最高权重的值，但只取给定路线中权限组的继承所得值。</td></tr><tr><td><code>lowest_on_track_&lt;路线&gt;</code></td><td>与上述相同，但只取权重最低的值。</td></tr><tr><td><code>highest_not_on_track_&lt;路线&gt;</code></td><td>选中拥有最高权重的值，但只取非给定路线中权限组的继承所得值。</td></tr><tr><td><code>lowest_not_on_track_&lt;路线&gt;</code></td><td>与上述相同，但只取权重最低的值。</td></tr><tr><td><code>highest_from_group_&lt;权限组&gt;</code></td><td>选中拥有最高权重的值，但只取继承自给定权限组的值。</td></tr><tr><td><code>lowest_from_group_&lt;权限组&gt;</code></td><td>与上述相同，但只取权重最低的值。</td></tr><tr><td><code>highest_not_from_group_&lt;权限组&gt;</code></td><td>选中拥有最高权重的值，但不取继承自给定权限组的值。</td></tr><tr><td><code>lowest_not_from_group_&lt;权限组&gt;</code></td><td>与上述相同，但只取权重最低的值。</td></tr></tbody></table><h2 id="重复设置" tabindex="-1">重复设置 <a class="header-anchor" href="#重复设置" aria-label="Permalink to &quot;重复设置&quot;">​</a></h2><table tabindex="0"><thead><tr><th>元素</th><th>描述</th></tr></thead><tbody><tr><td><code>first-only</code></td><td>仅允许首次重复</td></tr><tr><td><code>last-only</code></td><td>仅允许末次重复</td></tr><tr><td><code>retain-all</code></td><td>允许任意重复</td></tr><tr><td><code>none</code></td><td>不允许任意重复</td></tr></tbody></table><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>例如，在某个监狱风云服务器上，有三种类型的组。“gameplay”组，捐赠玩家组和管理员组。</p><p>若一个玩家处于所有三个组中，且我想要所有三个前缀都显示，就像： <code>[Mine C] [Donor] [Admin] Luck: hi!.</code></p><p>但是如果某个玩家没有管理员组，那么我想要显示： <code>[Mine C] [Donor] Luck: hi.</code></p><p>在叠加系统中这都是可以实现的。每个堆叠中的“元素”都可以在 format 部分添加。</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;highest_on_track_prison&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;highest_on_track_donor&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;highest_on_track_staff&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  duplicates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">first-only</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  start-spacer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  middle-spacer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  end-spacer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span></code></pre></div><p>若玩家没有能够加入元素的值，那么它会被排除。</p><p>“start”、“middle”与“end”允许控制元素的分隔方式。例如：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;highest_on_track_prison&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;highest_on_track_donor&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;highest_on_track_staff&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  duplicates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">first-only</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  start-spacer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;★ &quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  middle-spacer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; | &quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  end-spacer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span></span></code></pre></div><p>显示结果为： <code>★ [Mine C] | [Donor] | [Admin] Luck: hi.</code></p><p>你可以根据你的聊天插件修改这些值，聊天插件可能也会有相似的功能。</p>`,25)]))}const c=i(h,[["render",e]]);export{E as __pageData,c as default};
