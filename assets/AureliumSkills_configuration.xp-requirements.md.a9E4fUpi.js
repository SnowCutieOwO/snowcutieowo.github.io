import{_ as i,c as a,o as e,al as l}from"./chunks/framework.LK_RS8Nx.js";const c=JSON.parse('{"title":"经验条件","description":"","frontmatter":{},"headers":[],"relativePath":"AureliumSkills/configuration.xp-requirements.md","filePath":"AureliumSkills/configuration.xp-requirements.md"}'),n={name:"AureliumSkills/configuration.xp-requirements.md"};function p(t,s,h,k,r,d){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="经验条件" tabindex="-1">经验条件 <a class="header-anchor" href="#经验条件" aria-label="Permalink to &quot;经验条件&quot;">​</a></h1><p>指导自定义经验值条件的教程。</p><p>每一等级升级技能所需的经验值大小均可在插件文件夹的 <code>xp_requirements.yml</code> 文件中配置。</p><h2 id="表达式与变量" tabindex="-1">表达式与变量 <a class="header-anchor" href="#表达式与变量" aria-label="Permalink to &quot;表达式与变量&quot;">​</a></h2><p>在单独的配置区域中，例如默认的 <code>default</code> 配置，你可以见到一个表达式（<code>expression</code>），其中包括了表达式和等号，以计算最终的升级所需经验。<br> 这个表达式可任你修改，但必须为有效的 EvalEx 表达式，你可以在<a href="https://github.com/uklimaschewski/EvalEx#supported-operators" target="_blank" rel="noreferrer">这个页面</a>浏览支持的计算符号和功能。</p><div class="info custom-block"><p class="custom-block-title">信息</p><p>表达式的结果通常会取相差最小的整数。</p></div><p>变量也支持嵌入表达式，为了让每个等级都有不同的升级所需经验值，你必须在表达式中的某一个合适的位置插入等级变量。该变量代表的是玩家当前的下一等级。该数值从 2 开始，一直到技能等级的最大值。例如，这个表达式在 <code>level</code> 变量为 5 级时，表示的是玩家从 4 级升到 5 级所需的经验值。</p><p>自定义变量同样可嵌入表达式，这允许你标记并组织表达式的各个结构。除了直接在表达式中使用树脂字，你还可以通过为这个数字指定命名来将它变成一个变量。在默认的示例表达式中，<code>multiplier</code> 和 <code>base</code> 都是自定义变量。</p><p><code>multiplier * (level - 2) ^ 2 + base</code></p><p>正如你所见，<code>multiplier</code> 和 <code>base</code> 都是在下方指定了值的变量名称：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  expression</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;multiplier * (level - 2) ^ 2 + base&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  multiplier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100.0</span></span></code></pre></div><p>你可以使用任何变量名，只要变量名称在下方以类似上述格式的方式定义即可嵌入表达式。</p><h2 id="技能覆写" tabindex="-1">技能覆写 <a class="header-anchor" href="#技能覆写" aria-label="Permalink to &quot;技能覆写&quot;">​</a></h2><p>你可以通过在配置文件中添加 <code>skill.[技能名称]</code>，来创建每个技能不同的经验值要求，同时覆盖默认的经验设定。键的名称与值应当与默认设置相同。<br> 这里是一个覆盖了默认炼金技能经验值的示例配置：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  expression</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;multiplier * (level - 2) ^ 2 + base&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  multiplier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">skills</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  alchemy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    expression</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;multiplier * (level - 2) ^ 3 + base&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    multiplier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20.5</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20.0</span></span></code></pre></div><h2 id="直接表示" tabindex="-1">直接表示 <a class="header-anchor" href="#直接表示" aria-label="Permalink to &quot;直接表示&quot;">​</a></h2><p>除了使用等式，经验设置还允许直接使用一串包含整数的列表表示。可在 <code>default</code> 设置下创建一个名为 <code>values</code> 的列表，也可在特定技能设置区下直接创建。<br> 这里是一个使用了直接表示经验值列表的示例配置：</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  values</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">750</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1250</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1720</span></span></code></pre></div><p>在该列表里的第一个值表示从 1 级升到 2 级的经验值条件。</p>`,19)]))}const o=i(n,[["render",p]]);export{c as __pageData,o as default};
