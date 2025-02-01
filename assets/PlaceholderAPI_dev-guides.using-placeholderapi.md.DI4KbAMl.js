import{_ as p,C as k,c as E,o as r,j as s,G as l,al as t,a as i,w as h}from"./chunks/framework.LK_RS8Nx.js";const P=JSON.parse('{"title":"使用 PlaceholderAPI","description":"","frontmatter":{},"headers":[],"relativePath":"PlaceholderAPI/dev-guides.using-placeholderapi.md","filePath":"PlaceholderAPI/dev-guides.using-placeholderapi.md"}'),d={name:"PlaceholderAPI/dev-guides.using-placeholderapi.md"};function g(y,a,o,c,F,u){const n=k("tab"),e=k("tabs");return r(),E("div",null,[a[6]||(a[6]=s("h1",{id:"使用-placeholderapi",tabindex:"-1"},[i("使用 PlaceholderAPI "),s("a",{class:"header-anchor",href:"#使用-placeholderapi","aria-label":'Permalink to "使用 PlaceholderAPI"'},"​")],-1)),a[7]||(a[7]=s("p",null,"本页讲述了如何在你的插件内使用 PlaceholderAPI，达到让其他插件引用你的变量的目的，或是允许其他插件的变量在你的插件中使用。",-1)),a[8]||(a[8]=s("p",null,[i("需要注意的是，本页所提及的示例只对"),s("strong",null,"PlaceholderAPI 2.10.0 或更高版本"),i("有效！")],-1)),a[9]||(a[9]=s("h2",{id:"第一步",tabindex:"-1"},[i("第一步 "),s("a",{class:"header-anchor",href:"#第一步","aria-label":'Permalink to "第一步"'},"​")],-1)),a[10]||(a[10]=s("p",null,[i("在你可以实际使用 PlaceholderAPI 之前，首先你要将其导入你的项目。"),s("br"),i(" 使用下列示例代码匹配你的依赖管理器。")],-1)),l(e,null,{default:h(()=>[l(n,{name:"Maven"},{default:h(()=>a[0]||(a[0]=[s("div",{class:"language-XML vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"XML"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"repositories"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"repository"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"id"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">placeholderapi</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"id"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"url"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">https://repo.extendedclip.com/releases/</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"url"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"repository"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"repositories"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"dependencies"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"dependency"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"         <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"groupId"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">me.clip</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"groupId"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"artifactId"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">placeholderapi</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"artifactId"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"version"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">{版本}</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"version"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"         <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"scope"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">provided</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"scope"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"dependency"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"dependencies"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),_:1}),l(n,{name:"Gradle"},{default:h(()=>a[1]||(a[1]=[s("div",{class:"language-Kotlin vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"Kotlin"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"repositories"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    maven"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        url "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'https://repo.extendedclip.com/releases/'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"dependencies"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    compileOnly "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'me.clip:placeholderapi:{版本}'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1)])),_:1})]),_:1}),a[11]||(a[11]=t('<details class="details custom-block"><summary>什么是 <code>{版本}</code>？</summary><p>在使用 Javascript 的时候，<code>{版本}</code> 会被替换为 PlaceholderAPI 最新的 API 版本。<br> 如果你的变量没有被解析，这意味着你阻止了 Javascript，或是在填入的版本在载入时发现不存在。</p><p>你可以在 Github 仓库的<a href="https://github.com/PlaceholderAPI/PlaceholderAPI/releases" target="_blank" rel="noreferrer">发行版页面</a>中找到最新版与对应 API 的版本号。</p></details><h3 id="将-placeholderapi-设为-软-依赖" tabindex="-1">将 PlaceholderAPI 设为（软）依赖 <a class="header-anchor" href="#将-placeholderapi-设为-软-依赖" aria-label="Permalink to &quot;将 PlaceholderAPI 设为（软）依赖&quot;">​</a></h3><p>下一步就是打开你的 plugin.yml 或是 paper-plugin.yml，然后根据其是否可选，将 PlaceholderAPI 添加为依赖或软依赖。</p><h4 id="plugin-yml" tabindex="-1">plugin.yml <a class="header-anchor" href="#plugin-yml" aria-label="Permalink to &quot;plugin.yml&quot;">​</a></h4>',4)),l(e,null,{default:h(()=>[l(n,{name:"可选依赖"},{default:h(()=>a[2]||(a[2]=[s("div",{class:"language-YAML vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"YAML"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"ExamplePlugin")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"version"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1.0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"author"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"author")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"main"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"your.main.path.Here")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"softdepend"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ["),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"PlaceholderAPI"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 这会将 PlacehodlerAPI 设置为插件的可选依赖。")])])])],-1)])),_:1}),l(n,{name:"必选依赖"},{default:h(()=>a[3]||(a[3]=[s("div",{class:"language-YAML vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"YAML"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"ExamplePlugin")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"version"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1.0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"author"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"author")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"main"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"your.main.path.Here")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"depend"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ["),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"PlaceholderAPI"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 这会将 PlacehodlerAPI 设置为插件的必选依赖。")])])])],-1)])),_:1})]),_:1}),a[12]||(a[12]=s("h4",{id:"paper-plugins-yml",tabindex:"-1"},[i("paper-plugins.yml "),s("a",{class:"header-anchor",href:"#paper-plugins-yml","aria-label":'Permalink to "paper-plugins.yml"'},"​")],-1)),l(e,null,{default:h(()=>[l(n,{name:"可选依赖"},{default:h(()=>a[4]||(a[4]=[s("div",{class:"language-YAML vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"YAML"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"ExamplePlugin")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"version"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1.0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"author"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"author")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"main"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"your.main.path.Here")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"dependencies"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"server"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    PlaceholderAPI"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    load"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"BEFORE"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 载入顺序依照依赖。这表示在本示例中，PlaceholderAPI **先于**你的插件载入。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    required"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false")])])])],-1)])),_:1}),l(n,{name:"必选依赖"},{default:h(()=>a[5]||(a[5]=[s("div",{class:"language-YAML vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"YAML"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"ExamplePlugin")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"version"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1.0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"author"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"author")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"main"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"your.main.path.Here")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"dependencies"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"server"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    PlaceholderAPI"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    load"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"BEFORE"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 载入顺序依照依赖。这表示在本示例中，PlaceholderAPI **先于**你的插件载入。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    required"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")])])])],-1)])),_:1})]),_:1}),a[13]||(a[13]=t(`<h2 id="向-placeholderapi-添加变量" tabindex="-1">向 PlaceholderAPI 添加变量 <a class="header-anchor" href="#向-placeholderapi-添加变量" aria-label="Permalink to &quot;向 PlaceholderAPI 添加变量&quot;">​</a></h2><p>创建变量拓展的完整教程可以在稍后的“创建变量拓展”章节中浏览。</p><h2 id="在插件中设置变量" tabindex="-1">在插件中设置变量 <a class="header-anchor" href="#在插件中设置变量" aria-label="Permalink to &quot;在插件中设置变量&quot;">​</a></h2><p>PlaceholderAPI 提供了自动解析插件内其他插件变量的能力，从而使得其他成百上千的变量能够在插件内使用而无需额外代码兼容。<br> 若要在你的插件内使用来自其他插件的变量，我们只需<a href="#将-placeholderapi-设为软依赖">将 PlaceholderAPI 设置为软依赖</a>，然后使用 <code>setPlaceholders</code> 方法即可。</p><p>需要注意的是，任何需要插件或依赖的变量拓展必须在服务器上启用，否则变量不会被解析（返回原字符串）。</p><details class="details custom-block"><summary>示例</summary><p>假设我们需要对一个玩家拥有的初级权限组发送一条自定义加入消息。<br> 若要这么做，我们可以按如下步骤实现：</p><p>下文假设 PlaceholderAPI 是软依赖，以便更好应对该插件不存在的情况。</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> at.helpch.placeholderapi;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> me.clip.placeholderapi.PlaceholderAPI;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.bukkit.Bukkit;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.bukkit.event.EventHandler;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.bukkit.event.EventPriority;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.bukkit.event.Listener;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.bukkit.event.player.PlayerJoinEvent;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.bukkit.plugin.java.JavaPlugin;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> me.clip.placeholderapi.PlaceholderAPI;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JoinExample</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JavaPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Listener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onEnable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Bukkit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPluginManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isPluginEnabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PlaceholderAPI&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Bukkit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPluginManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">registerEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这一步检查 PlaceholderAPI 是否存在并启用，然后注册事件至处理器（见下）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            getLogger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;找不到 PlaceholderAPI! 插件已被禁用.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在 PlaceholderAPI 不存在的情况下弹出问题，并禁用自身</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Bukkit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPluginManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">disablePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EventHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">priority</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EventPriority.HIGHEST)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onJoin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PlayerJoinEvent </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String joinText </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;%player_name% 加入了服务器! 他的级别是 %vault_rank%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        joinText </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PlaceholderAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPlaceholders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), joinText); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 \`PlaceholderAPI.serPlaceholders(Player, String)\`，我们可以将给定字符串中的 \`%变量%\` 解析为对应内容，条件为对应变量拓展存在且返回非空字符串。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 在我们的示例中，我们提供了一条包含 \`%player_name%\` 和 \`%vault_rank%\` 变量的字符串，需要安装 Player 和 Vault 变量拓展。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 示例输出：\`Notch 加入了服务器! 他的级别是 管理员\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setJoinMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(joinText);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details>`,6))])}const m=p(d,[["render",g]]);export{P as __pageData,m as default};
