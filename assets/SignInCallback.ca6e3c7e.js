import{s as o,c as a,G as u,M as n,o as c}from"./index.af32323a.js";const i={class:"hidden"},p={setup(l){const t=o(),r=u(),e=n();if(console.log("route.query",e.query),e.query.token&&e.query.id&&e.query.name&&e.query.avatar){localStorage.setItem("metaWall",`Bearer ${e.query.token}`),localStorage.setItem("isLogin",!0);const s={id:e.query.id,name:e.query.name,avatar:e.query.avatar};t.updateUser(s),e.query.mode&&e.query.mode==="forgetPassword"?r.push({name:"profile-settings"}):r.push({name:"posts"})}else r.push({name:"sign-in"});return(s,m)=>(c(),a("div",i))}};export{p as default};
