var T=Object.defineProperty;var F=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var I=(d,t,r)=>t in d?T(d,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):d[t]=r,y=(d,t)=>{for(var r in t||(t={}))q.call(t,r)&&I(d,r,t[r]);if(F)for(var r of F(t))A.call(t,r)&&I(d,r,t[r]);return d};import{q as L,s as R,r as p,a as x,m as G,c as k,f as _,b as e,n as z,E as g,F as E,u as n,z as B,k as M,w as c,v as f,t as N,i as H,B as P,C as V,S as J,o as b}from"./index.af32323a.js";import{_ as K}from"./CardTitle.942f2c04.js";const O={class:"flex flex-wrap pl-6 text-center text-sm font-medium"},Q={class:"flex flex-col items-center rounded-xl border-2 border-black bg-white p-8 shadow-post"},W=["value"],X={key:0,class:"mb-4 text-alert"},Y=["onSubmit"],Z={class:"mb-1"},ee=e("label",{for:"nickName",class:"mb-1 block"},"\u66B1\u7A31",-1),se={type:"submit",class:"flex w-full items-center justify-center rounded border-2 border-black bg-warning py-4 text-black disabled:opacity-50"},ae={class:"mb-1"},re=e("label",{for:"newPassword",class:"mb-1 block"},"\u8F38\u5165\u65B0\u5BC6\u78BC",-1),te={class:"mb-1"},oe=e("label",{for:"checkPassword",class:"mb-1 block"},"\u518D\u6B21\u8F38\u5165",-1),le={type:"submit",class:"mt-8 flex w-full items-center justify-center rounded border-2 border-black bg-subtitle py-4 text-black disabled:opacity-50"},ne={ref:"resetvPassword",type:"button",class:"hidden"},ue={setup(d){const t=L(),r=R(),u=p(!1),U=x({profile:"\u9001\u51FA\u66F4\u65B0",password:"\u91CD\u8A2D\u5BC6\u78BC"}),v=p("editNickName"),C=o=>{v.value=o},m=p(y({},r.user));G(r,o=>{m.value=y({},o.user)});const h=p(null),S=p(null),i=x({base64:"",errorMessage:{size:"\u6A94\u6848\u9700\u5728 2 MB \u4EE5\u5167"},hasError:!1}),$=o=>{const s=o.target.files[0];if(s.size>=2*1024*1024)return i.hasError=!0;const l=new FileReader;l.readAsDataURL(s),l.onload=a=>{i.hasError=!1,i.base64=a.target.result}},j=()=>{S.value.reset(),i.base64="",i.hasError=!1},D=async()=>{try{const o=h.value.files[0],s=new FormData;u.value=!0,s.append("photo",o),s.append("name",m.value.name.trim());const l=await J(s);if(console.log("res",l),l.status==="success"){t.success("\u66F4\u65B0\u500B\u4EBA\u8CC7\u6599\u6210\u529F");const a={name:l.resInfo.name,avatar:l.resInfo.photo,role:l.resInfo.role,id:l.resInfo._id};r.updateUser(a),u.value=!1}}catch(o){console.log("error",o),t.success("\u66F4\u65B0\u500B\u4EBA\u8CC7\u6599\u6210\u529F\u5931\u6557"),u.value=!1}},w=x({});return(o,s)=>{var l;return b(),k(E,null,[_(K,{title:"\u4FEE\u6539\u500B\u4EBA\u8CC7\u6599"}),e("ul",O,[e("li",null,[e("a",{href:"#",class:z(["inline-block rounded-t-md border-x-2 border-t-2 border-black bg-white py-2 px-6 hover:bg-black hover:text-white",v.value==="editNickName"?"bg-black text-white":""]),onClick:s[0]||(s[0]=g(a=>C("editNickName"),["prevent"]))}," \u66B1\u7A31\u4FEE\u6539 ",2)]),e("li",null,[e("a",{href:"#",class:z(["inline-block rounded-t-md border-t-2 border-r-2 border-black bg-white py-2 px-6 hover:bg-black hover:text-white",v.value==="resetPassword"?"bg-black text-white":""]),onClick:s[1]||(s[1]=g(a=>C("resetPassword"),["prevent"]))}," \u91CD\u8A2D\u5BC6\u78BC ",2)])]),e("div",Q,[v.value==="editNickName"?(b(),k(E,{key:0},[n(i).base64?(b(),B(M,{key:0,size:"107",imgUrl:n(i).base64,class:"mb-4 rounded-full border-2 border-black"},null,8,["imgUrl"])):(b(),B(M,{key:1,size:"107",imgUrl:(l=m.value)==null?void 0:l.avatar,class:"mb-4 rounded-full border-2 border-black"},null,8,["imgUrl"])),e("form",{ref_key:"avatarForm",ref:S,action:"",class:"text-center"},[e("input",{ref_key:"imageFile",ref:h,type:"file",name:"photos",accept:"image/png, image/jpeg, image/jpg",class:"btn btn-dark mb-4 hidden px-8 py-1",onChange:s[2]||(s[2]=a=>$(a))},null,544),c(e("input",{type:"reset",value:"\u53D6\u6D88",class:"mb-4 mr-4 cursor-pointer rounded border border-black bg-white px-10 py-1 text-black",onClick:j},null,512),[[f,n(i).base64]]),e("input",{type:"button",value:n(i).base64===""?"\u4E0A\u50B3\u5927\u982D\u7167":"\u518D\u9078\u4E00\u5F35",class:"mb-4 cursor-pointer rounded border border-black bg-black px-6 py-1 text-white",onClick:s[3]||(s[3]=a=>h.value.click())},null,8,W),n(i).hasError?(b(),k("p",X," Tip: "+N(n(i).errorMessage.size),1)):H("",!0)],512),e("form",{onSubmit:g(D,["prevent"]),action:"",class:"w-10/12 lg:w-8/12"},[e("div",Z,[ee,c(e("input",{"onUpdate:modelValue":s[4]||(s[4]=a=>m.value.name=a),type:"text",name:"",id:"nickName",placeholder:"\u8ACB\u8F38\u5165\u66B1\u7A31",class:"w-full border-2 border-black",maxlength:"10"},null,512),[[P,m.value.name]])]),e("button",se,[c(e("span",null,N(n(U).profile),513),[[f,!u.value]]),c(_(V,{class:"my-1 ml-1 h-4 w-4 animate-spin"},null,512),[[f,u.value]])])],40,Y)],64)):(b(),k("form",{key:1,onSubmit:s[7]||(s[7]=g((...a)=>o.updateUserPwd&&o.updateUserPwd(...a),["prevent"])),action:"",class:"flex-col items-center w-10/12 lg:w-8/12"},[e("div",ae,[re,c(e("input",{"onUpdate:modelValue":s[5]||(s[5]=a=>n(w).password=a),type:"password",id:"newPassword",placeholder:"\u8ACB\u8F38\u5165\u65B0\u5BC6\u78BC",class:"w-full border-2 border-black",maxlength:"20",required:""},null,512),[[P,n(w).password]])]),e("div",te,[oe,c(e("input",{"onUpdate:modelValue":s[6]||(s[6]=a=>n(w).passwordConfirm=a),type:"password",id:"checkPassword",placeholder:"\u518D\u6B21\u8F38\u5165\u65B0\u5BC6\u78BC",class:"w-full border-2 border-black",maxlength:"20",required:""},null,512),[[P,n(w).passwordConfirm]])]),e("button",le,[c(e("span",null,N(n(U).password),513),[[f,!u.value]]),c(_(V,{class:"my-1 ml-1 h-4 w-4 animate-spin"},null,512),[[f,u.value]])]),e("button",ne," reset ",512)],32))])],64)}}};export{ue as default};