import{_ as o,c,o as d,al as s}from"./chunks/framework.CAEutmY3.js";const _=JSON.parse('{"title":"本地会话","description":"","frontmatter":{},"headers":[],"relativePath":"WorldEdit/developer-api.api-concepts.local-sessions.md","filePath":"WorldEdit/developer-api.api-concepts.local-sessions.md"}'),i={name:"WorldEdit/developer-api.api-concepts.local-sessions.md"};function a(n,e,t,l,r,p){return d(),c("div",null,e[0]||(e[0]=[s('<h1 id="本地会话" tabindex="-1">本地会话 <a class="header-anchor" href="#本地会话" aria-label="Permalink to &quot;本地会话&quot;">​</a></h1><p><code>LocalSession</code> 负责处理操作方的会话数据。</p><p>这意味着如果你需要获取并使用玩家的选区、剪贴板或历史记录等，你就需要先访问玩家的 LocalSession.</p><p>要获取玩家（或操作方）的会话，<code>WorldEdit</code> 类会允许你通过 <code>getSessionManager()</code> 方法访问 <code>SessionManager</code>。<code>SessionManager</code> 则允许你通过 <code>get(SessionOwner)</code> 和 <code>getIfPresent(SessionOwner)</code> 方法获取——但返回内容可能为 null（在某些情况，例如玩家登出且回话已失效的情况）。</p><h2 id="使用-localsession" tabindex="-1">使用 LocalSession <a class="header-anchor" href="#使用-localsession" aria-label="Permalink to &quot;使用 LocalSession&quot;">​</a></h2><p>在你获得一个会话对象之后，你可以使用多种方法访问上述的会话数据。</p><p>不对会话中存储的数据及其可用性进行假设是非常重要的。例如，<code>getClipboard()</code> 和 <code>getSelection(World)</code> 方法将会在玩家的剪贴板没有任何内容或在指定世界中没有圈定选区时抛出错误。若你在使用这些功能的时候预先检查输入参数是否存在，请确保你能捕获这个错误并向玩家发送消息。</p><p>除了选区，需要注意的是 WorldEdit 也支持跨世界选择和编辑（即，它不与玩家所处的世界绑定。）你可以通过方法 <code>getSelectionWorld()</code> 检查当前选区。如果你想要将选区限制在当前世界，请将玩家世界参数传入 <code>getSelection(World)</code> 方法。</p><p>还需注意的是，<code>RegionSelector</code>（<code>getRegionSelector(World)</code>），不与 <code>Region</code> 相同。如果你只需读取玩家的选区，那么请坚持使用 <code>getSelection(World)</code>。选区只在你进行选区点操作时是必须的，即便区域不被完全定义或你想要实际上地修改选区。依此类推，你不应修改从 <code>getSelection(World)</code> 传回的 <code>Region</code> 对象，除非你通过 <code>learnChanges()</code> 频繁更新玩家的选区，并通过 <code>explainRegionAdjust(Actor player, LocalSession session).</code> 重新给玩家发送必要的信息。</p><p>若要参考获取玩家选区的示例，请见“示例”章节。</p><p>其他需要使用到 <code>LocalSession</code> 的内容是玩家的历史记录。如果你通过编辑会话模拟玩家进行操作，你可以使用 <code>LocalSession</code> 来 <code>remember</code> 玩家的 <code>EditSession</code>，这会允许他们通过命令 <code>//undo</code> 来撤销该操作。你也可以通过 <code>EditSession</code> 手动进行 <code>undo</code> 和 <code>redo</code> 操作。</p><div class="info custom-block"><p class="custom-block-title">信息</p><p>通过 <code>LocalSession</code> 操作历史记录只能对由该玩家造成的改动或直接修改至该玩家的改动生效（即，会话的拥有者）。若你在玩家的历史记录之外存储 <code>EditSession</code>（例如，在玩家操作中独立完成的自动操作），你可以通过 <code>EditSession#undo(EditSession)</code> 方法直接撤销操作。</p></div>',12)]))}const g=o(i,[["render",a]]);export{_ as __pageData,g as default};
