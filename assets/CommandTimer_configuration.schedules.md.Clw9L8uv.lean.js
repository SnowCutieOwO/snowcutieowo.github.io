import{_ as e,o as r,c as t,a7 as i}from"./chunks/framework.DSL0mkng.js";const m=JSON.parse('{"title":"计划表","description":"","frontmatter":{},"headers":[],"relativePath":"CommandTimer/configuration.schedules.md","filePath":"CommandTimer/configuration.schedules.md"}'),n={name:"CommandTimer/configuration.schedules.md"};function o(c,a,l,s,d,h){return r(),t("div",null,a[0]||(a[0]=[i('<h1 id="计划表" tabindex="-1">计划表 <a class="header-anchor" href="#计划表" aria-label="Permalink to &quot;计划表&quot;">​</a></h1><p>CommandTimer 支持不同类型的计划表，并可结合使用来应对更复杂的情况。</p><h2 id="间隔-intervals" tabindex="-1">间隔（Intervals） <a class="header-anchor" href="#间隔-intervals" aria-label="Permalink to &quot;间隔（Intervals）&quot;">​</a></h2><p>该模式简单地间隔一段时间重复地执行命令。</p><h2 id="固定时间" tabindex="-1">固定时间 <a class="header-anchor" href="#固定时间" aria-label="Permalink to &quot;固定时间&quot;">​</a></h2><p>该模式可用于在指定的时间执行一条命令，例如 14:30:00. 该模式也允许你设置能触发命令的时间段。更多信息请见下文。</p><p>范围与时间点可正常结合使用。</p><h3 id="普通固定时间" tabindex="-1">普通固定时间 <a class="header-anchor" href="#普通固定时间" aria-label="Permalink to &quot;普通固定时间&quot;">​</a></h3><p>正如上文所述，它只会在指定时间点触发预先设置的命令。在使用该模式时不会考虑间隔。</p><h3 id="范围固定时间" tabindex="-1">范围固定时间 <a class="header-anchor" href="#范围固定时间" aria-label="Permalink to &quot;范围固定时间&quot;">​</a></h3><p>在配置固定时间时，插件允许你输入第二个时间点。在这么设置的情况下，预先设置的命令会在时间段内以预设的间隔执行。</p><h3 id="minecraft-世界时间" tabindex="-1">Minecraft 世界时间 <a class="header-anchor" href="#minecraft-世界时间" aria-label="Permalink to &quot;Minecraft 世界时间&quot;">​</a></h3><p>对于固定时间点和范围时间，插件也允许玩家使用 Minecraft 时间而非服务器的时间。可以在固定时间点触发，这意味着按服务器时间运作的定时任务可以和 Minecraft 世界时间混合使用。</p><p>在按 Minecraft 时间配置时，需要选中一个世界作为时间参考才可以继续配置。</p><p>若你想要了解有关世界时间的更多信息，前往你想要设置为参考的世界并输入命令 <code>/cmt time</code>。</p><h2 id="天" tabindex="-1">天 <a class="header-anchor" href="#天" aria-label="Permalink to &quot;天&quot;">​</a></h2><p>在按日期设置的菜单中，你可以选择定时任务在哪天执行。默认情况下每天都会执行。</p><p>如果有预先设置的固定时间点，也会将其考虑在内。</p>',18)]))}const u=e(n,[["render",o]]);export{m as __pageData,u as default};