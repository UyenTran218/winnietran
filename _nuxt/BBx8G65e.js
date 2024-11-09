import{_ as f,g as n,t as u,L as p,A as e,z as t,B as d,y as h,M as G,x as s,N as J}from"./CcFo23o7.js";const z={data:()=>({show:!1}),props:{imgPath:String,imgPath1:String,imgPath2:String,title:String,subtitle:String,description:String,projectUrl:String}};function U(i,_,a,o,r,l){const c=n("v-img"),m=n("v-carousel-item"),g=n("v-carousel"),w=n("v-card-title"),y=n("v-card-subtitle"),v=n("v-btn"),P=n("v-spacer"),b=n("v-card-actions"),x=n("v-divider"),S=n("v-card-text"),j=n("v-expand-transition"),T=n("v-card");return u(),p(T,{class:"my-6","max-width":"550px"},{default:e(()=>[t(g,{"hide-delimiters":"","show-arrows":"hover",height:"200px"},{default:e(()=>[t(m,null,{default:e(()=>[t(c,{src:a.imgPath,cover:"",style:{filter:"grayscale(1)"}},null,8,["src"])]),_:1}),t(m,null,{default:e(()=>[t(c,{src:a.imgPath1,cover:"",style:{filter:"grayscale(1)"}},null,8,["src"])]),_:1}),t(m,null,{default:e(()=>[t(c,{src:a.imgPath2,cover:"",style:{filter:"grayscale(1)"}},null,8,["src"])]),_:1})]),_:1}),t(w,{class:"card-title my-4"},{default:e(()=>[d(h(a.title),1)]),_:1}),t(y,{class:"my-3"},{default:e(()=>[d(h(a.subtitle),1)]),_:1}),t(b,null,{default:e(()=>[t(v,{color:"#94ada3",variant:"tonal",href:a.projectUrl,target:"_blank"},{default:e(()=>[d(" Github ")]),_:1},8,["href"]),t(P),t(v,{icon:i.show?"mdi-chevron-up":"mdi-chevron-down",onClick:_[0]||(_[0]=F=>i.show=!i.show)},null,8,["icon"])]),_:1}),t(j,null,{default:e(()=>[G(s("div",null,[t(x),t(S,{class:"card-text"},{default:e(()=>[s("p",null,h(a.description),1)]),_:1})],512),[[J,i.show]])]),_:1})]),_:1})}const k=f(z,[["render",U]]),B={},C=s("h1",{class:"ma-12 py-16 section-title",style:{"font-size":"30px"}},"Projects",-1);function V(i,_){const a=k,o=n("v-col"),r=n("v-row"),l=n("v-card");return u(),p(l,{variant:"text",class:"py-10",id:"projects"},{default:e(()=>[C,t(r,null,{default:e(()=>[t(o,{cols:"12",md:"6"},{default:e(()=>[t(a,{imgPath:"./showcase1.JPG",imgPath1:"./showcase11.JPG",imgPath2:"./showcase12.JPG",title:"Business Landing Page",subtitle:"Nuxt3 + Vuetify",projectUrl:"https://github.com/UyenTran218/Movusx-app-nuxt-3",description:`Movusx's Business Landing Page using Vuetify's material design and Nuxt.js's server-side rendering capabilities. \r
          The aim of this project was to create an aesthetically pleasing, yet highly functional page that serves as the first point of contact between the business and potential clients`})]),_:1}),t(o,{cols:"12",md:"6"},{default:e(()=>[t(a,{imgPath:"./showcase2.JPG",imgPath1:"./showcase21.JPG",imgPath2:"./showcase22.JPG",title:"POS System",subtitle:"Typescript + Vue3 + Vuetify",projectUrl:"https://github.com/UyenTran218/Restaurant-app",description:`Streamlined POS system tailored for a restaurant setting. \r
          This web application empowers restaurant staff to easily manage orders, from item selection to billing and print/save functionalities. \r
          The application is built with Nuxt.js using TypeScript for type safety, and it incorporates Vuetify’s Material Design for an elegant, yet intuitive, user interface.`})]),_:1}),t(o,{cols:"12",md:"6"},{default:e(()=>[t(a,{imgPath:"./showcase31.JPG",imgPath1:"./showcase32.JPG",imgPath2:"./showcase33.JPG",title:"Pizza Restaurant",subtitle:"ReactJS + Tailwind CSS",projectUrl:"https://github.com/UyenTran218/restaurant-web-app",description:`Dynamic Pizza Restaurant Website crafted with ReactJS and Tailwind CSS. \r
          Users can easily view menu, find location, customise their pizza to add to their order and more. \r
          Modern design for seamless browsing and ordering experience.`})]),_:1}),t(o,{cols:"12",md:"6"},{default:e(()=>[t(a,{imgPath:"./showcase42.JPG",imgPath1:"./showcase43.JPG",imgPath2:"./showcase44.JPG",title:"Task Center",subtitle:"Windows PowerShell",projectUrl:"TBU",description:`The Task Center is a Windows PowerShell application that centralizes and automates manual tasks, significantly enhancing efficiency in my testing processes at GLI. \r
          Key features include automated folder creation, remote file handling, regulatory compliance checks, and game description lookups, reducing manual workload by 30% and improving productivity.`})]),_:1})]),_:1})]),_:1})}const N=f(B,[["render",V]]),$={},A=s("h1",{class:"ma-12 py-16 section-title",style:{"font-size":"34px"}},"About",-1),M=s("br",null,null,-1),R=s("br",null,null,-1),D=s("p",{class:"about-content"},[d("Hello there! I'm Winnie, a software engineer with a specialization in web development. Based in Adelaide, South Australia, I thrive on turning complex challenges into simple, scalable solutions. "),s("br"),d(" Feel free to explore my projects or get in touch to chat about potential opportunities, tech trends, or even your favorite manga! ")],-1);function L(i,_){const a=n("v-img"),o=n("v-col"),r=n("v-sheet"),l=n("v-row"),c=n("v-card");return u(),p(c,{variant:"text",class:"pa-10",id:"about"},{default:e(()=>[A,t(l,null,{default:e(()=>[t(o,{class:"d-flex justify-space-around"},{default:e(()=>[t(a,{"max-width":"250px","min-width":"220px",src:"./hdprofile.png"})]),_:1}),t(o,{class:"d-flex justify-space-around"},{default:e(()=>[t(r,{"min-width":"320px"},{default:e(()=>[M,R,D]),_:1})]),_:1})]),_:1})]),_:1})}const W=f($,[["render",L]]),I=s("br",null,null,-1),O=s("br",null,null,-1),K={__name:"index",setup(i){return(_,a)=>{const o=n("v-sheet"),r=n("v-col"),l=n("v-row"),c=n("v-container");return u(),p(c,{fluid:""},{default:e(()=>[t(l,{justify:"center"},{default:e(()=>[t(r,{cols:"12"},{default:e(()=>[t(o,null,{default:e(()=>[t(N),I,t(W),O]),_:1})]),_:1})]),_:1})]),_:1})}}};export{K as default};
