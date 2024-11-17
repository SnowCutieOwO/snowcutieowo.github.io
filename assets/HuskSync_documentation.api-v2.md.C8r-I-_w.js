import{_ as i,o as a,c as n,a7 as t}from"./chunks/framework.DSL0mkng.js";const y=JSON.parse('{"title":"API v2","description":"","frontmatter":{},"headers":[],"relativePath":"HuskSync/documentation.api-v2.md","filePath":"HuskSync/documentation.api-v2.md"}'),h={name:"HuskSync/documentation.api-v2.md"};function l(k,s,e,p,E,r){return a(),n("div",null,s[0]||(s[0]=[t(`<h1 id="api-v2" tabindex="-1">API v2 <a class="header-anchor" href="#api-v2" aria-label="Permalink to &quot;API v2&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p>API v2 已不再受支持且不与 HuskSync v3.0 兼容。见<a href="./documentation.api-v3.data-snapshot-api.html">数据快照 API</a> 获取 v3 API 的相关信息。 🚨</p></div><p>HuskSync 提供了一个 API 用于获取和返回 <code>UserData</code> 对象；这是一个用户同步数据的快照。 该页面默认你已阅读 <a href="./documentation.api-v3.html">API</a> 介绍章节，并将 HuskSync（v2.x）的 API 导入了你的仓库。</p><p>🚨 HuskSync API v2 仅针对 v2.0 - v2.2.8 的 HuskSync。它不与 v3.0+ 的 HuskSync 兼容。HuskSync v3 的等价 API 可以在<a href="./documentation.api-v3.data-snapshot-api.html">数据快照 API</a>找到。</p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ol><li><a href="#1-通过-uuid-获取玩家">通过 UUID 获取玩家</a></li><li><a href="#2-获取玩家数据">获取玩家数据</a></li><li><a href="#3-获取玩家的背包内容">获取玩家的背包内容</a></li><li><a href="#4-更新玩家数据">更新玩家数据</a></li></ol><h2 id="_1-通过-uuid-获取玩家" tabindex="-1">1. 通过 UUID 获取玩家 <a class="header-anchor" href="#_1-通过-uuid-获取玩家" aria-label="Permalink to &quot;1. 通过 UUID 获取玩家&quot;">​</a></h2><ul><li>HuskSync 有一个 <code>User</code> 对象，代表着特定玩家在数据库中保存的数据。你可以通过方法 <code>HuskSyncAPI#getUser(uuid)</code> 请求玩家数据。</li><li>若你有一个在线的 <code>org.bukkit.Player</code> 对象，你可以使用方法 <code>BukkitPlayer#adapt(player)</code> 来获取一个 <code>OnlineUser</code> 对象（继承 <code>User</code>），以此代表一个已登入的玩家。</li></ul><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HuskSyncAPIHook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HuskSyncAPI huskSyncAPI;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HuskSyncAPIHook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.huskSyncAPI </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HuskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> logUserName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(UUID </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">uuid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // getUser() returns a CompletableFuture supplying an Optional&lt;User&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        huskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uuid).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thenAccept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(optionalUser </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // Check if we found a user by that UUID either online or on the database</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (optionalUser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // If we didn&#39;t, we&#39;ll log that they don&#39;t exist</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;User does not exist!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // The User object has two fields; uuid and username.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;User name is: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> optionalUser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().username);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_2-获取玩家数据" tabindex="-1">2. 获取玩家数据 <a class="header-anchor" href="#_2-获取玩家数据" aria-label="Permalink to &quot;2. 获取玩家数据&quot;">​</a></h2><ul><li>通过一个 <code>User</code> 对象，我们现在可以调用方法 <code>HuskSyncAPI#getUserData()</code> 来获取他们最新的数据。</li><li><code>UserData</code> 对象包含八个数据“模块”，每个模块都包含特定的信息。</li><li>UserData 对象不会包含全部的数据“模块”；在被插件保存的 UserData 中所包含的模块内容由配置文本决定。</li><li>你可以单独或获取每一个模块的内容，返回值会包装为一个 Optional（若未指定则返回为空），见下： <ul><li><code>UserData#getStatus();</code> - 玩家的基本属性（生命值、饱食度、饱和度、经验值和游戏模式等）</li><li><code>UserData#getInventory();</code> - 玩家的背包内容。包含一个 base64 序列化的 <code>ItemStack</code> 数组。</li><li><code>UserData#getEnderChest();</code> - 玩家的末影箱内容。包含一个 base64 序列化的 <code>ItemStack</code> 数组。</li><li><code>UserData#getPotionEffects();</code> - 玩家当前的药水效果。包含一个 base64 序列化的 <code>PotionEffect</code> 数组。</li><li><code>UserData#getAdvancements();</code> - 返回玩家当前获取的进度和成就</li><li><code>UserData#getStatistics();</code> - 玩家的四大类统计数据（未分类、物品、方块和实体）</li><li><code>UserData#getLocation();</code> - 玩家的位置数据，用于启用了同步位置数据的服务器</li><li><code>UserData#getPersistentDataContainer();</code> - 玩家的持久化数据容器，包含了一个有键值的映射表</li></ul></li></ul><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HuskSyncAPIHook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ... //</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> logUserData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(UUID </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">uuid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        huskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uuid).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thenAccept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(optionalUser </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // Optional#isPresent() is the opposite of #isEmpty()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (optionalUser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isPresent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                logHealth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(optionalUser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> logHealth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(User </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // A user might not have data, if it&#39;s deleted by an admin or they&#39;re brand new</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        huskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thenAccept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(optionalUserData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (optionalUserData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isPresent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // Get the StatusData from the UserData object</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                Optional&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">StatusData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; statusData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> optionalUserData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStatus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // Print the health from the fields, if the user has a status object</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                statusData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ifPresent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(status </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%s&#39;s health: %d/%d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, user.username, status.health, status.maxHealth);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_3-获取玩家的背包内容" tabindex="-1">3. 获取玩家的背包内容 <a class="header-anchor" href="#_3-获取玩家的背包内容" aria-label="Permalink to &quot;3. 获取玩家的背包内容&quot;">​</a></h2><ul><li>API 提供了反序列化 <code>ItemData</code> 的方法来处理 base64 序列化的背包和末影箱 <code>ItemStack</code> 数组，将它们转化为实际的 <code>ItemStack</code> 数组数据。</li><li>若要反序列化背包物品，使用方法 <code>HuskSyncAPI#deserializeInventory(serializedItems)</code>。</li><li>若要翻序列化末影箱物品，使用方法 <code>HuskSyncAPI#deserializeItemStackArray(serializedItems)</code>。</li><li>相似地，<code>HuskSyncAPI#getPlayerInventory(user)</code> 和 <code>HuskSyncAPI#getPlayerEnderChest(user)</code> 方法可以更优雅地达到目的。请注意如果最后的 UserData 不包含 ItemData（译者注：原文似乎笔误，写成了 UserData），那么这里返回的 ItemData 将会是对应的空 ItemStack 数组。</li><li>序列化和反序列化对药水效果同样可用。</li></ul><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HuskSyncAPIHook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ... //</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> printInventoryItems</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(User </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        huskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thenAccept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(optionalUserData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (optionalUserData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isPresent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // Get the ItemData and make sure it&#39;s present</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                Optional&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ItemData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; inventoryDataOptional </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> optionalUserData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInventory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (inventoryDataOptional.isEmpty) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                ItemData inventoryData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inventoryDataOptional.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // Get the ItemStack[] array as a BukkitInventoryMap.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // This returns a future, but we&#39;re using #join() to block the thread until it&#39;s done</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                BukkitInventoryMap inventory </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> huskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deserializeInventory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inventoryData.serializedItems).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // A BukkitInventoryMap is simply a wrapper for an ItemStack array.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // It provides a few handy methods for getting the player&#39;s armor, their offhand item, etc.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // To get the ItemStack array from it, just call BukkitInventoryMap#getContents();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ItemStack item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inventory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    // Print out the item material types of every item in the player&#39;s inventory</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="husksyncapi-getplayerinventory" tabindex="-1">HuskSyncAPI#getPlayerInventory() <a class="header-anchor" href="#husksyncapi-getplayerinventory" aria-label="Permalink to &quot;HuskSyncAPI#getPlayerInventory()&quot;">​</a></h3><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> printInventoryItems</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(User user) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    huskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlayerInventory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thenAccept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inventory </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (inventory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isPresent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ItemStack item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inventory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="husksyncapi-getplayerinventory-1" tabindex="-1">HuskSyncAPI#getPlayerInventory() <a class="header-anchor" href="#husksyncapi-getplayerinventory-1" aria-label="Permalink to &quot;HuskSyncAPI#getPlayerInventory()&quot;">​</a></h3><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> printEnderChestItems</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(User user) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    huskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlayerEnderChest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thenAccept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(enderChest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (enderChest.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isPresent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ItemStack item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> enderChest.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_4-更新玩家数据" tabindex="-1">4. 更新玩家数据 <a class="header-anchor" href="#_4-更新玩家数据" aria-label="Permalink to &quot;4. 更新玩家数据&quot;">​</a></h2><ul><li>你可以使用 <code>HuskSyncAPI#setUserData(user, userData)</code> 来将一个玩家的数据修改并提交至数据库。</li><li>若你需要在每次更新后修改玩家数据，你可能需要监听 HuskSync 所提供的事件。</li><li>你可以使用 <code>HuskSyncAPI#serializeItemStackArray(itemStack[])</code> 来将任何 ItemStack 序列化为 base64 值。</li><li>相似地，你可以使用 <code>HuskSyncAPI#setInventoryData(user, bukkitInventoryMap)</code> 来设置玩家背包内容，或使用 <code>HuskSyncAPI#setEnderChestData(user, itemStack[])</code> 来设置玩家的末影箱内容。</li><li>更新 UserData 将会完全覆盖玩家当前的“活跃”数据。HuskSync 设计之初就不会追踪玩家的“活跃”数据，仅会在保存时产生数据的“快照”。换句话说，获取并更新用户数据有可能造成回档。</li></ul><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HuskSyncAPIHook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Set a user&#39;s health to 20</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> updateUserHealth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(User </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        huskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUserData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thenAccept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(optionalUserData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (optionalUserData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isPresent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                UserData data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> optionalUserData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                Optional&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">StatusData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; statusDataOptional </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStatus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                StatusData statusData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> statusDataOptional.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();            </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                statusData.health </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // This returns a CompletableFuture&lt;Void&gt; that will invoke #thenRun() when it has completed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                huskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setUserData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user, data).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thenRun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Healed &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user.username </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,22)]))}const g=i(h,[["render",l]]);export{y as __pageData,g as default};