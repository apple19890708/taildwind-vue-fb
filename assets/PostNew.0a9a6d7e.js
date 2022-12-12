import{x as b,r as p,b as w,c as d,e as y,a as e,w as u,v as x,n as k,u as a,F as m,d as N,q as C,h as V,C as F,L as P,o as c,f as v}from"./index.709cefc9.js";import{_ as j}from"./CardTitle.48157af5.js";import{d as D}from"./apiPost.01cd23ee.js";const H={class:"rounded-lg border-2 border-black bg-white p-8 shadow-post"},L=e("p",null,"\u8CBC\u6587\u5167\u5BB9",-1),T={class:"relative my-4 w-32 gap-y-8 rounded bg-black py-1 px-8 text-white"},W=["accept"],z=e("span",null,"\u4E0A\u50B3\u5716\u7247",-1),B=["src"],I={class:"text-center"},R={class:"text-red_x -mt-2 mb-2 mb-1 text-sm"},S=v(" \u5716\u7247\u6A94\u6848\u904E\u5927\uFF0C\u50C5\u9650 1mb \u4EE5\u4E0B\u6A94\u6848"),U=e("br",null,null,-1),$=v("\u5716\u7247\u683C\u5F0F\u932F\u8AA4\uFF0C\u50C5\u9650 JPG\u3001PNG \u5716\u7247 "),E=[S,U,$],J={setup(G){b();const n=p(),l=p(""),f=P(),g={contentLength:1,fileNum:10,fileSize:1024*1024,fileType:["image/jpg","image/jpeg","image/png"]},r=w({isWarnHint:!1,previews:[],images:[]}),h=o=>{if(!!n.value.files)for(const t of n.value.files){const s=new FileReader;s.onload=i=>{r.previews.push(i.target.result)},s.readAsDataURL(t),r.images.push(t)}},_=async()=>{r.isWarnHint=!0;try{const o=new FormData;o.append("content",l.value),r.images.forEach(s=>{o.append("photos",s)});const t=await D(o);f.push({name:"posts"})}catch(o){console.log("error",o)}};return(o,t)=>(c(),d(m,null,[y(j,{title:"\u5F35\u8CBC\u52D5\u614B"}),e("div",H,[L,u(e("textarea",{name:"postContent",rows:"6",placeholder:"\u8F38\u5165\u60A8\u7684\u8CBC\u6587\u5167\u5BB9",class:"mt-1 w-full rounded-none border-2 px-4 py-3 focus:border-black focus:shadow-transparent",onFocus:t[0]||(t[0]=s=>o.isWarnHint=!1),"onUpdate:modelValue":t[1]||(t[1]=s=>l.value=s)},null,544),[[x,l.value]]),e("div",T,[e("input",{ref_key:"uploadImages",ref:n,type:"file",accept:g.fileType.join(", "),class:"absolute left-0 z-10 w-full cursor-pointer opacity-0",onChange:h,multiple:""},null,40,W),z]),e("div",{class:k([{"items-center justify-center py-4":a(r).previews.length===0,"grid-cols-2":a(r).previews.length>1},"mb-4 grid w-full overflow-hidden rounded-lg border-2 border-black"])},[a(r).previews.length>0?(c(!0),d(m,{key:0},N(a(r).previews,(s,i)=>(c(),d("div",{class:"relative aspect-video hover:brightness-110",key:i},[e("img",{src:s},null,8,B)]))),128)):C("",!0)],2),e("div",I,[u(e("div",R,E,512),[[V,o.isWarnHint]]),e("button",{class:"rounded-lg border-2 border-black bg-subtitle py-3 px-32 font-semibold hover:bg-warning hover:text-black hover:shadow-btn",onClick:t[2]||(t[2]=F(s=>_(),["prevent"]))}," \u9001\u51FA\u8CBC\u6587 ")])])],64))}};export{J as default};