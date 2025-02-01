import{_ as i,c as a,o as n,al as l}from"./chunks/framework.LK_RS8Nx.js";const c=JSON.parse('{"title":"自定义数据 API","description":"","frontmatter":{},"headers":[],"relativePath":"HuskSync/developers.api-v3.custom-data-api.md","filePath":"HuskSync/developers.api-v3.custom-data-api.md"}'),e={name:"HuskSync/developers.api-v3.custom-data-api.md"};function t(h,s,k,p,r,d){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="自定义数据-api" tabindex="-1">自定义数据 API <a class="header-anchor" href="#自定义数据-api" aria-label="Permalink to &quot;自定义数据 API&quot;">​</a></h1><p>HuskSync 允许你以现有的通用 DataSnapshot 格式保存并同步数据。本章节假设你已阅读过 <a href="./developers.api-v3.html">API</a> 介绍并已熟悉了<a href="./developers.api-v3.data-snapshot-api.html">数据快照 API</a>。本页着重讨论对于 Bukkit 上的 API 实现。</p><p>若要这么做，你必须创建并注册一个平台的 <code>Data</code> 实现类（如 <code>BukkitData</code>）以及一个对应的 <code>Serializer</code> 类（如 <code>BukkitSerializer</code>）。你之后就可以通过 <code>OnlineUser#setData(Identifier, Data)</code> 方法向服务器添加自定义类型数据。</p><div class="info custom-block"><p class="custom-block-title">提示</p><p>在你开始之前，请再三确认这是否是你想要做的事情。对于更简单/小的数据同步任务，请考虑使用 OersistentDataContainer API 格式，它会比本章节所讲的内容依赖性更弱。</p></div><p>若你需要找一些使用了 HuskSync 的数据扩展且提供了 Pixelmon 数据序列化方法的 Arclight 插件，快去看看 <a href="https://github.com/GsTio86/PokeSync" target="_blank" rel="noreferrer">GsTio86 编写的 PokeSync</a>吧！</p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ol><li><a href="#1-继承-bukkitdata-类">继承 BukkitData 类</a><ol><li><a href="#11-继承-adaptable">Adaptable 实现</a></li></ol></li><li><a href="#1-继承-bukkitdata-类">继承 BukkitSerializer 类</a></li><li><a href="#3-鉴别并注册我们的-serializer">鉴别并注册我们的 Serializer</a></li><li><a href="#从向玩家获取或设置数据">向玩家设置/获取数据</a><ol><li><a href="#41-datasaveevent-的持久化自定义数据">在 DataSaveEvent 事件的持久化自定义数据</a></li></ol></li></ol><h2 id="_1-继承-bukkitdata-类" tabindex="-1">1. 继承 BukkitData 类 <a class="header-anchor" href="#_1-继承-bukkitdata-类" aria-label="Permalink to &quot;1. 继承 BukkitData 类&quot;">​</a></h2><ul><li>HuskSync 提供了一个你必须实现的 <code>Data</code> 实例，以此来承载你的自定义数据。</li><li>在 Bukkit 服务端上，你必须创建一个带有 <code>extends BukkitData</code> 的类。这个类有方法实现：<code>#apply(BukkitUser, BukkitHuskSync)</code>，在数据需要应用至玩家时会被调用。</li><li>你可以使用 <code>BukkitUser</code> 类来获取玩家的 <code>Player</code> 对象。请避免使用 <code>BukkitHuskSync</code>，因为这是与插件内核交互用的。</li></ul><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// An example of a BukkitData class that you could use in a cosmetic plugin to store player particle data.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoginParticleData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BukkitData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String particleId;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> numberOfParticles;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoginParticleData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">particleId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> numberOfParticles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.particleId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> particleId;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.numberOfParticles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> numberOfParticles;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // This method is called whenever a user has their data applied.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // If you just want to use HuskSync to sync data used elsewhere, you don&#39;t have to do anything here, of course</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BukkitUser </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, BukkitHuskSync </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Player player </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Let&#39;s use the Bukkit API to spawn some particles when a user&#39;s data is applied (e.g. when they login).</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">spawnParticle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Particle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">valueOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(particleId), player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), numberOfParticles);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_1-1-继承-adaptable" tabindex="-1">1.1 继承 Adaptable <a class="header-anchor" href="#_1-1-继承-adaptable" aria-label="Permalink to &quot;1.1 继承 Adaptable&quot;">​</a></h3><ul><li>HuskSync 提供了 <code>Adaptable</code> 标记实例来让你的数据能更好地通过 Gson 序列化和反序列化（下一步需要用到）。</li><li>我非常推荐实现 <code>Adaptable</code> 接口。它无需 arg 构建。需要注意的是你<em>不能</em>用 <code>Adaptable</code> 序列化持久化数据类型或 <code>final</code> 部分的内容。</li></ul><h4 id="代码示例——adaptable-loginparticledata-类" tabindex="-1">代码示例——Adaptable LoginParticleData 类 <a class="header-anchor" href="#代码示例——adaptable-loginparticledata-类" aria-label="Permalink to &quot;代码示例——Adaptable LoginParticleData 类&quot;">​</a></h4><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// We&#39;ve implemented Adaptable here to make it easier to serialize and deserialize our data using Gson.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoginParticleData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BukkitData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Adaptable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String particleId;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> numberOfParticles;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoginParticleData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">particleId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> numberOfParticles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.particleId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> particleId;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.numberOfParticles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> numberOfParticles;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SuppressWarnings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;unused&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Suppress compiler warnings</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoginParticleData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // This is required for the Adaptable interface so that Gson can intantiate the class when deserializing.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BukkitUser </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, BukkitHuskSync </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">spawnParticle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Particle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">valueOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(particleId), player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), numberOfParticles);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="继承-bukkitserializer-类" tabindex="-1">继承 BukkitSerializer 类 <a class="header-anchor" href="#继承-bukkitserializer-类" aria-label="Permalink to &quot;继承 BukkitSerializer 类&quot;">​</a></h2><ul><li>若要存储你的 <code>Data</code>，你需要提供一个 <code>Serializer</code> 类用于在 <code>Data</code> 和 java 的 <code>String</code> 间序列和反序列化，同时可被转化为字节数组并为 HuskSync 压缩/存储。 <ul><li>例如，你可能需要一个诸如 <code>public class LoginParticleSerializer extends BukkitSerializer implements Serializer&lt;LoginParticleData&gt;</code> 的类来序列化前一个示例中的内容。</li><li>那么你就需要实现 <code>Serializer</code> 接口，它有两种方法：<code>#serialize(T)</code> 和 <code>#deserialize(String)</code>。</li></ul></li><li>若你通过上述方法实现了 <code>Adaptable</code> 接口，那么 HuskSync 也提供了 <code>BukkitSerializer.Json&lt;T extends Adaptable&gt;</code> 类，便于你继承以创建一个使用 Gson 的简单序列化工具。 <ul><li>这是创建序列化方法的推荐方式，即便如此，若你在着手 NBT 数据相关的内容，你可能需要实现一个带有你自己方法的基础序列化方法接口。</li></ul></li></ul><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// An example of a BukkitSerializer class that you could use in a cosmetic plugin to store player particle data.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoginParticleSerializer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BukkitSerializer.Json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LoginParticleData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Serializer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LoginParticleData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // We need to create a constructor that takes our instance of the API</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoginParticleSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NotNull</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HuskSyncAPI </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">api</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(api, LoginParticleData.class); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// We pass the class type here so that Gson knows what class we&#39;re serializing</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_3-鉴别并注册我们的-serializer" tabindex="-1">3. 鉴别并注册我们的 Serializer <a class="header-anchor" href="#_3-鉴别并注册我们的-serializer" aria-label="Permalink to &quot;3. 鉴别并注册我们的 Serializer&quot;">​</a></h2><ul><li>现在我们已经有了自己的 <code>Data</code> 和 <code>Serializer</code> 类，我们需要将它注册进 HuskSync。</li><li>若要这么做，我们需要将一个 <code>Identifier</code> 注册进 HuskSync。此为你的物品的独特标识符。 <ul><li>使用 <code>Identifer#from(String, String)</code> 或 <code>Identifier#from(Key)</code> 来从键值对或 adventure <code>key</code> 对象中创建一个标识。</li></ul></li><li>确保你注册了序列化方法的插件在每个服务器上安装，这样 HuskSync 才能同步数据。</li></ul><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Create an identifier for our data (you may wish to store this somewhere where it can be accessed statically)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Identifier LOGIN_PARTICLES_ID </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Identifier.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myplugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;login_particles&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// (...)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Register our serializer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">huskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">registerSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LOGIN_PARTICLES_ID, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoginParticleSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HuskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()));</span></span></code></pre></div><h2 id="从-向玩家获取或设置数据" tabindex="-1">从/向玩家获取或设置数据 <a class="header-anchor" href="#从-向玩家获取或设置数据" aria-label="Permalink to &quot;从/向玩家获取或设置数据&quot;">​</a></h2><ul><li>现在我们已经注册了我们的 <code>Data</code> 和 <code>Serializer</code> 类，可以向玩家设置数据并应用。</li><li>若要这么做，我们会使用 <code>OnlineUser#setData(Identifier, Data)</code> 方法。 <ul><li>这个方法会将数据应用至玩家，并将数据存储至玩家插件自定义数据表，来允许数据之后的获取或保存至快照。</li></ul></li><li>在注册数据类型的服务器上创建的快照现在会带着我们的数据并在服务器之间同步！</li></ul><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Create an instance of our data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LoginParticleData loginParticleData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoginParticleData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;FIREWORKS_SPARK&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Set the data to a player</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">huskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LOGIN_PARTICLES_ID, loginParticleData);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Get our data from a player</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LoginParticleData loginParticleData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (LoginParticleData) huskSyncAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LOGIN_PARTICLES_ID);</span></span></code></pre></div><h3 id="_4-1-datasaveevent-的持久化自定义数据" tabindex="-1">4.1 DataSaveEvent 的持久化自定义数据 <a class="header-anchor" href="#_4-1-datasaveevent-的持久化自定义数据" aria-label="Permalink to &quot;4.1 DataSaveEvent 的持久化自定义数据&quot;">​</a></h3><p>向 <code>DataSaveEvent</code> 添加监听器并使用 <code>#editData</code> Consumer 方法来向标准的 DataSave 中添加自定义数据。这会在数据保存时将应用至玩家的数据持久化（在玩家登出、服务器关闭、世界保存时触发）</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EventHandler</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onDataSave</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BukkitDataSaveEvent event) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">editData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((unpacked) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> unpacked.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(LOGIN_PARTICLES_ID, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoginParticleData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;FIREWORKS_SPARK&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,26)]))}const g=i(e,[["render",t]]);export{c as __pageData,g as default};
