import{_ as r,C as l,c as E,o as d,j as i,G as t,b1 as g,a as s,w as k}from"./chunks/framework.CC7vnuC4.js";const m=JSON.parse('{"title":"开发者 API","description":"","frontmatter":{"breadcrumbs":[{"title":"Continue Project","link":"/spark"},{"title":"开发者 API","link":"/spark/spark.developer-api"}]},"headers":[],"relativePath":"spark/spark.developer-api.md","filePath":"spark/spark.developer-api.md"}'),o={name:"spark/spark.developer-api.md"};function y(c,a,u,F,b,D){const h=l("tab"),n=l("tabs"),e=l("NolebaseGitContributors"),p=l("NolebaseGitChangelog");return d(),E("div",null,[a[3]||(a[3]=i("h1",{id:"开发者-api",tabindex:"-1"},[s("开发者 API "),i("a",{class:"header-anchor",href:"#开发者-api","aria-label":'Permalink to "开发者 API"'},"​")],-1)),a[4]||(a[4]=i("p",null,"spark 的 API 允许插件/模组开发者获取 spark 所记录的信息，并将它们为己所用。",-1)),a[5]||(a[5]=i("p",null,"推荐开发者使用本文介绍的 API，而不是硬拆内部代码。如果 API 提供的内容没有你想要的，先来问问我们，我们可能会为你添加！",-1)),a[6]||(a[6]=i("h2",{id:"导入-api",tabindex:"-1"},[s("导入 API "),i("a",{class:"header-anchor",href:"#导入-api","aria-label":'Permalink to "导入 API"'},"​")],-1)),a[7]||(a[7]=i("p",null,"API 成品会发布到 Sonatype Snapshots 仓库中。",-1)),a[8]||(a[8]=i("p",null,"你可以通过 Gradle 或者 Maven 将它导入至你的项目，或将其用作依赖。可以根据需要添加下文的构建脚本或 pom。",-1)),t(n,null,{default:k(()=>[t(h,{name:"Maven"},{default:k(()=>a[0]||(a[0]=[i("div",{class:"language-HTML vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"HTML"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"repositories"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"repository"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"id"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">sonatype-snapshots</"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"id"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"url"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">https://oss.sonatype.org/content/repositories/snapshots</"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"url"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"repository"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"repositories"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"dependencies"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"dependency"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"groupId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">me.lucko</"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"groupId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"artifactId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">spark-api</"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"artifactId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"version"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">0.1-SNAPSHOT</"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"version"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"scope"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">provided</"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"scope"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"dependency"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"dependencies"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),_:1}),t(h,{name:"Gradle (Groovy DSL)"},{default:k(()=>a[1]||(a[1]=[i("div",{class:"language-Kotlin vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"Kotlin"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"repositories"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    maven"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { url "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'https://oss.sonatype.org/content/repositories/snapshots'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"dependencies"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    compileOnly "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'me.lucko:spark-api:0.1-SNAPSHOT'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1)])),_:1}),t(h,{name:"Gradle (Kotlin DSL)"},{default:k(()=>a[2]||(a[2]=[i("div",{class:"language-Kotlin vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"Kotlin"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"repositories"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    maven"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { url "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," uri"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"https://oss.sonatype.org/content/repositories/snapshots"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"dependencies"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    compileOnly"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"me.lucko:spark-api:0.1-SNAPSHOT"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1)])),_:1})]),_:1}),a[9]||(a[9]=g("",24)),t(e),t(p)])}const v=r(o,[["render",y]]);export{m as __pageData,v as default};
