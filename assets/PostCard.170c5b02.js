import{_ as T}from"./UserInfo.5a0b9203.js";import{o as c,c as p,f as v,b as e,I as O,k as V,_ as X,r as h,l as A,m as G,p as J,n as x,F as L,d as Q,t as b,i as $,q as Y,s as Z,x as ee,y as se,g as te,u as o,z as j,w as le,B as ae,C as oe,D as ne,E as re}from"./index.494c5e34.js";import{a as ie,c as ce,p as ue}from"./apiPost.19977cfe.js";const de={class:"animate-pulse rounded-lg border-2 border-black bg-white p-6 shadow-post"},me=e("p",{class:"mb-4 h-10 whitespace-pre"},"Loading...",-1),ve={type:"button",class:"flex items-center justify-center py-5"},pe={class:"mb-5 flex items-center"},he=e("div",{class:"flex w-full max-w-[89%] border-2 border-black"},[e("input",{class:"w-full border-none focus:ring-2 focus:ring-primary",type:"text"}),e("button",{class:"flex w-full max-w-[128px] items-center justify-center border-l-2 border-black bg-primary text-base text-white"}," \u7559\u8A00 ")],-1),ge={class:"mb-4 rounded-lg bg-secondary px-4 py-5"},_e=e("p",{class:"mb-4 whitespace-pre"},null,-1),qe={setup(m){return(g,_)=>(c(),p("div",de,[v(T,{class:"mb-4",subTitle:"loading..."}),me,e("div",null,[e("button",ve,[v(O,{class:"mr-2 h-5 w-5"})])]),e("div",pe,[v(V,{class:"mx-2",size:"40"}),he]),e("div",ge,[v(T,{class:"mb-4",userPageUrl:"#"}),_e])]))}},be={},fe={class:"h-5 w-5",viewBox:"0 0 24 24",fill:"currentColor",stroke:"white","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round"},we=e("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"},null,-1),ke=[we];function xe(m,g){return c(),p("svg",fe,ke)}var ye=X(be,[["render",xe]]);function D(m){return new Date(m).toLocaleString()}const $e={class:"overflow-hidden rounded-lg border-2 border-black"},Ce=["onClick"],Ue=["src"],Le={key:0,class:"absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40"},Te={class:"text-3xl text-white"},Ae={props:{images:{type:Array,default(){return[]}}},setup(m){const g=m,_=h(!1),f=h(0),s=h(A(g.images).map(u=>u.url));G(g,u=>{s.value=A(u.images).map(t=>t.url)});const y=u=>{f.value=u,_.value=!0},w=()=>{_.value=!1};return(u,t)=>{const C=J("vue-easy-lightbox");return c(),p(L,null,[e("div",$e,[e("div",{class:x(["grid gap-0",{"grid-cols-1":m.images.length<=2,"grid-cols-2":m.images.length==3,"grid-cols-3":m.images.length==4,"max-h-96 grid-flow-col grid-rows-6":m.images.length>=5}])},[(c(!0),p(L,null,Q(s.value,(I,d)=>(c(),p(L,{key:d},[d<5?(c(),p("div",{key:0,onClick:P=>y(d),class:x(["cursor-pointer",{"col-span-2":s.value.length==3&&d==0,"col-span-3":s.value.length==4&&d==0,"row-span-3":s.value.length>=5&&d<2,"row-span-2":s.value.length>=5&&d>=2,relative:s.value.length>5&&d==4}])},[e("img",{src:I,class:x(["object-center",{"max-h-full":s.value.length==1,"max-h-48":s.value.length==2||s.value.length==3||s.value.length==4}])},null,10,Ue),s.value.length>5&&d==4?(c(),p("div",Le,[e("span",Te,b(`+ ${s.value.length-5}`),1)])):$("",!0)],10,Ce)):$("",!0)],64))),128))],2)]),v(C,{visible:_.value,imgs:s.value,index:f.value,onHide:w},null,8,["visible","imgs","index"])],64)}}},Ie={class:"rounded-lg border-2 border-black bg-white p-6 shadow-post"},Pe={class:"flex items-center gap-x-2"},je={class:"text-sm text-subtitle"},De={class:"mb-4 whitespace-pre-wrap"},Ve=["disabled"],ze={class:"flex w-full max-w-[89%] border-2 border-black"},Be=["disabled"],Se=e("span",null,"\u7559\u8A00",-1),He={key:1},Me={class:"mb-4 rounded-lg bg-secondary p-4"},Ne={class:"whitespace-pre"},Fe={class:"whitespace-pre"},Oe={props:{post:{type:Object,default:()=>({})}},setup(m){const g=m,_=Y(),f=Z(),s=h(!1),y=h(!0),w=h(""),u=h(!1),t=h(A(g.post));G(g,l=>{t.value=A(l.post)});const C=h(t.value.comments),I=async l=>{if(s.value=!0,t.value.likes.includes(l))try{const i=await ce(l);d(f.user.id),s.value=!1}catch(i){console.log("error",i),s.value=!1}else try{const i=await ie(l);d(f.user.id),s.value=!1}catch(i){console.log("error",i),s.value=!1}},d=l=>{if(t.value.likes.includes(l)){const i=t.value.likes.findIndex(k=>k===l);t.value.likes.splice(i,1)}else t.value.likes.push(l)},P=async l=>{if(w.value.trim()===""){_.error("\u60A8\u5C1A\u672A\u8F38\u5165\u4EFB\u4F55\u8A0A\u606F");return}u.value=!0;try{const a={comment:w.value},i=await ue(l,a);i.status==="success"&&(W(i.data.comments),_.success("\u65B0\u589E\u7559\u8A00\u6210\u529F"),w.value="",u.value=!1)}catch(a){console.log("error",a),_.error("\u7559\u8A00\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66"),u.value=!1}},W=l=>{const a={comment:l.comment,createdAt:l.createdAt,user:{_id:l.user._id,name:l.user.name,photo:l.user.photo,createdAt:l.createdAt}};C.value.push(a)},r=ee(()=>C.value.sort((a,i)=>{const k=new Date(a.createdAt),U=new Date(i.createdAt);return k-U}));return(l,a)=>{var k,U,z,B,S,H,M,N,F,R,E,K,q;const i=J("RouterLink");return c(),p("div",Ie,[e("div",Pe,[v(V,{size:"40",imgUrl:(k=t.value.user)==null?void 0:k.photo},null,8,["imgUrl"]),e("div",null,[v(i,{to:`/profile/${(U=t.value.user)==null?void 0:U._id}`,class:"font-bold hover:text-primary hover:underline"},{default:se(()=>{var n;return[te(b((n=t.value.user)==null?void 0:n.name),1)]}),_:1},8,["to"]),e("p",je,b(o(D)(t.value.createdAt)),1)])]),e("p",De,b(t.value.content),1),((z=t.value.image)==null?void 0:z.length)>0?(c(),j(Ae,{key:0,images:t.value.image},null,8,["images"])):$("",!0),e("div",null,[e("button",{type:"button",class:x(["flex items-center justify-center py-5",{"cursor-not-allowed":s.value}]),onClick:a[0]||(a[0]=n=>I(t.value._id)),disabled:s.value},[(B=t.value.likes)!=null&&B.includes(o(f).user.id)?(c(),j(ye,{key:1,class:"mr-2 h-5 w-5 text-primary"})):(c(),j(O,{key:0,class:"mr-2 h-5 w-5 text-primary"})),e("span",null,b((S=t.value.likes)==null?void 0:S.length),1)],10,Ve)]),e("div",{class:"mb-5 flex items-center",onKeyup:a[3]||(a[3]=ne(re(n=>P(t.value._id),["exact"]),["enter"]))},[v(V,{class:"mx-2",size:"40",imgUrl:o(f).user.avatar},null,8,["imgUrl"]),e("div",ze,[le(e("input",{"onUpdate:modelValue":a[1]||(a[1]=n=>w.value=n),class:"w-full border-none focus:ring-2 focus:ring-primary",type:"text"},null,512),[[ae,w.value]]),e("button",{class:x(["flex w-full max-w-[128px] items-center justify-center border-l-2 border-black bg-primary text-base text-white",{"cursor-not-allowed bg-slate-500":u.value}]),onClick:a[2]||(a[2]=n=>P(t.value._id)),disabled:u.value},[Se,v(oe,{class:x(["ml-1 h-4 w-4 animate-spin",{hidden:!u.value}])},null,8,["class"])],10,Be)])],32),o(r).length>1&&y.value?(c(),p("div",He,[e("div",{class:"cursor-pointer",onClick:a[4]||(a[4]=n=>y.value=!1)},"\u986F\u793A"+b(o(r).length-1)+"\u5247\u8F03\u65E9\u7559\u8A00",1),e("div",Me,[v(T,{class:"mb-4",imgUrl:(M=(H=o(r)[o(r).length-1])==null?void 0:H.user)==null?void 0:M.photo,name:(F=(N=o(r)[o(r).length-1])==null?void 0:N.user)==null?void 0:F.name,userPageUrl:`/profile/${(E=(R=o(r)[o(r).length-1])==null?void 0:R.user)==null?void 0:E._id}`,subTitle:o(D)((K=o(r)[o(r).length-1])==null?void 0:K.createdAt)},null,8,["imgUrl","name","userPageUrl","subTitle"]),e("p",Ne,b((q=o(r)[o(r).length-1])==null?void 0:q.comment),1)])])):$("",!0),!y.value||o(r).length===1?(c(!0),p(L,{key:2},Q(o(r),n=>(c(),p("div",{class:"mb-4 rounded-lg bg-secondary p-4",key:n._id},[v(T,{class:"mb-4",imgUrl:n.user.photo,name:n.user.name,userPageUrl:`/profile/${n.user._id}`,subTitle:o(D)(n.createdAt)},null,8,["imgUrl","name","userPageUrl","subTitle"]),e("p",Fe,b(n.comment),1)]))),128)):$("",!0)])}}};export{qe as _,Oe as a};
