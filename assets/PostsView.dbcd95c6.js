import{r as n,g as f,c as s,w as u,h as i,a as o,F as c,d as m,j as h,k as v,o as t,e as p,n as g}from"./index.969468d0.js";import{_ as k,a as y}from"./PostLoadingCard.16bc6f83.js";import{P as w}from"./PostEmptyCard.bde71a3d.js";import{g as x}from"./apiPost.0b5cb8dd.js";import"./UserInfo.a57d2548.js";const B={key:0},P=o("p",{class:"p-8 text-center text-subtitle"}," \u76EE\u524D\u5C1A\u7121\u52D5\u614B\uFF0C\u65B0\u589E\u4E00\u5247\u8CBC\u6587\u5427\uFF01 ",-1),N={setup(b){const r=n(!0);n([]);const a=n([]),_=async()=>{try{const e=await x();e.status&&(a.value=e.data.data,r.value=!1)}catch(e){console.log("error",e)}};return f(()=>{_()}),(e,C)=>(t(),s(c,null,[u(o("ul",null,[(t(),s(c,null,m(3,l=>o("li",{key:l,class:"mb-4"},[p(k)])),64))],512),[[i,r.value]]),u(o("div",null,[a.value.length>0?(t(),s("ul",B,[(t(!0),s(c,null,m(a.value,(l,d)=>(t(),s("li",{key:l.id,class:g({"mb-4":d<a.value.length-1})},[p(y,{post:l},null,8,["post"])],2))),128))])):(t(),h(w,{key:1},{default:v(()=>[P]),_:1}))],512),[[i,!r.value]])],64))}};export{N as default};