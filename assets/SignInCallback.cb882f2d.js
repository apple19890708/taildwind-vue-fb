import{x as a,c as o,L as u,K as n,o as c}from"./index.969468d0.js";const i={class:"hidden"},p={setup(m){const t=a(),r=u(),e=n();if(e.query.token&&e.query.id&&e.query.name&&e.query.avatar){localStorage.setItem("metaWall",`Bearer ${e.query.token}`),localStorage.setItem("isLogin",!0);const s={id:e.query.id,name:e.query.name,avatar:e.query.avatar};t.updateUser(s),e.query.mode&&e.query.mode==="forgetPassword"?r.push({name:"profile-settings"}):r.push({name:"posts"})}else r.push({name:"sign-in"});return(s,l)=>(c(),o("div",i))}};export{p as default};