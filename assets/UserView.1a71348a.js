import{_ as I,o as a,c,a as e,r as u,w as m,O as z,v as L,B as N,e as f,s as T,x as q,y as S,g as U,m as E,t as $,u as h,n as V,h as P,A as O,q as R,F as C,d as D,j as G,k as Q,K as H,P as J,Q as W,T as X}from"./index.10b61a3e.js";import{_ as Y,a as Z}from"./PostLoadingCard.d36ef75b.js";import{P as ee}from"./PostEmptyCard.98e322bf.js";import{u as se,a as te}from"./useChat.fd2f300d.js";import{g as oe}from"./apiPost.ba167b31.js";import"./UserInfo.36e784f4.js";const le={},ae={fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},re=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},null,-1),ne=[re];function ce(j,g){return a(),c("svg",ae,ne)}var ie=I(le,[["render",ce]]);const ue={class:"mb-4 grid gap-x-3 gap-y-1.5 md:grid-cols-3"},de=e("option",{value:"1",selected:""},"\u6700\u65B0\u8CBC\u6587",-1),_e=e("option",{value:"2"},"\u6700\u820A\u8CBC\u6587",-1),he=e("option",{value:"3"},"\u71B1\u9580\u8CBC\u6587",-1),pe=[de,_e,he],ve={class:"md:col-span-2"},fe={class:"flex h-11 border-2 border-black"},me=["onKeyup"],ge={emits:["get-posts"],setup(j,{emit:g}){const d=u(""),_=u(1),l=()=>{g("get-posts",_.value,d.value)};return(p,o)=>(a(),c("div",ue,[e("div",null,[m(e("select",{class:"h-11 w-full border-2 border-black",name:"category","onUpdate:modelValue":o[0]||(o[0]=v=>_.value=v),onChange:l},pe,544),[[z,_.value,void 0,{number:!0}]])]),e("div",ve,[e("div",fe,[m(e("input",{class:"w-full border-0",type:"text",placeholder:"\u641C\u5C0B\u8CBC\u6587","onUpdate:modelValue":o[1]||(o[1]=v=>d.value=v),onKeyup:N(l,["enter"])},null,40,me),[[L,d.value,void 0,{trim:!0}]]),e("button",{type:"button",class:"flex w-11 items-center justify-center border-l-2 border-black bg-primary",onClick:l},[f(ie,{class:"h-8 w-8 text-white"})])])])]))}},be={class:"relative mb-4"},we={class:"flex h-20 overflow-hidden rounded-lg border-2 border-black bg-white"},ye={class:"aspect-square h-full border-r-2 border-black"},ke=["src"],xe={class:"flex w-full justify-between p-4"},$e={key:0,class:"flex items-center justify-center"},Pe=e("span",null,"\u50B3\u9001\u8A0A\u606F",-1),Ce=e("div",{class:"absolute top-1 right-1 -z-10 h-full w-full rounded-lg border-2 border-black bg-white"},null,-1),je={key:0},Be=e("p",{class:"p-8 text-center text-subtitle"}," \u76EE\u524D\u5C1A\u7121\u52D5\u614B\uFF0C\u65B0\u589E\u4E00\u5247\u8CBC\u6587\u5427\uFF01 ",-1),Me={setup(j){const g=T(),d=q(),_=H(),l=u(_.params.id),p=u(!1),o=u(!0),{handleRoom:v}=se(),F=async()=>{var n;if(p.value)return;const s={receiver:l.value};try{p.value=!0;const t=await te.room(s);if(console.log("res",t),!(t!=null&&t.status))return;v(t==null?void 0:t.data)}catch(t){const i=(n=t.response.data)==null?void 0:n.message;i&&g.error(i)}finally{p.value=!1}},B=u([]),w=(s=1,n="")=>{M()},M=async()=>{try{const s=await oe();s.status&&(o.value=!1,B.value=s.data.data)}catch{o.value=!1,console.log(err)}},y=S(()=>B.value.filter(s=>{var n;return((n=s.user)==null?void 0:n._id)===l.value}));U(()=>{w()});const r=u({}),b=()=>{o.value=!0,J(l.value).then(s=>{r.value=s.data.user,o.value=!1}).catch(()=>{o.value=!1,console.log(err)})},k=S(()=>{var t;return(r.value.followers?r.value.followers:[]).map(i=>i.user).includes((t=d.user)==null?void 0:t.id)});U(()=>{b()});const A=async()=>{if(k.value)try{await X(r.value._id)&&b()}catch(s){console.log("error",s)}else try{await W(r.value._id)&&b()}catch(s){console.log("error",s)}};return E(_,s=>{s.name==="profile"&&s.params.id&&(l.value=s.params.id,w(),b())}),(s,n)=>{var t,i;return a(),c(C,null,[e("div",be,[e("div",we,[e("div",ye,[e("img",{src:r.value.photo,alt:"Avatar"},null,8,ke)]),e("div",xe,[e("div",null,[e("h2",null,$(r.value.name),1),e("span",null,$((t=r.value.followers)==null?void 0:t.length)+" \u4EBA\u8FFD\u8E64",1)]),l.value!==((i=h(d).user)==null?void 0:i.id)?(a(),c("div",$e,[e("button",{type:"button",class:V(["rounded-lg border-2 border-black px-8 py-1.5 shadow-post hover:bg-primary hover:text-white",h(k)?"bg-secondary":"bg-warning"]),onClick:A},$(h(k)?"\u53D6\u6D88\u8FFD\u8E64":"\u8FFD\u8E64"),3),e("button",{onClick:F,class:"ml-2 flex items-center justify-center rounded-lg border-2 border-black px-6 py-1.5 shadow-post hover:bg-gray-300"},[Pe,m(f(O,{class:"ml-1 h-4 w-4 animate-spin"},null,512),[[P,p.value]])])])):R("",!0)])]),Ce]),f(ge,{onGetPosts:w}),m(e("ul",null,[(a(),c(C,null,D(3,x=>e("li",{key:x,class:"mb-4"},[f(Y)])),64))],512),[[P,o.value]]),m(e("div",null,[h(y).length>0?(a(),c("ul",je,[(a(!0),c(C,null,D(h(y),(x,K)=>(a(),c("li",{key:K,class:V({"mb-4":K<h(y).length-1})},[f(Z,{post:x},null,8,["post"])],2))),128))])):(a(),G(ee,{key:1},{default:Q(()=>[Be]),_:1}))],512),[[P,!o.value]])],64)}}};export{Me as default};