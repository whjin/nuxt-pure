import{M as i,N as c,O as m,Q as P,C as h,r as v,R as b,S as u,T as L,U as k,y as g,P as R,V as l,W as S,X as T,Y as j,Z as A,$ as O,a0 as _,A as d}from"./DYdLsu83.js";const x=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,o){const t=await u[e.name]().then(a=>a.default||a);return()=>l(t,e.layoutProps,o.slots)}}),N=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,o){const t=g(),a=c(R),n=a===m()?P():a,r=h(()=>{let s=d(e.name)??n.meta.layout??"default";return s&&!(s in u)&&e.fallback&&(s=d(e.fallback)),s}),y=v();o.expose({layoutRef:y});const p=t.deferHydration();if(t.isHydrating){const s=t.hooks.hookOnce("app:error",p);b().beforeEach(s)}return()=>{const s=r.value&&r.value in u,f=n.meta.layoutTransition??L;return k(A,s&&f,{default:()=>l(j,{suspensible:!0,onResolve:()=>{T(p)}},{default:()=>l(B,{layoutProps:S(o.attrs,{ref:y}),key:r.value||void 0,name:r.value,shouldProvide:!e.name,hasTransition:!!f},o.slots)})}).default()}}}),B=i({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,o){const t=e.name;return e.shouldProvide&&O(_,{isCurrent:a=>t===(a.meta.layout??"default")}),()=>{var a,n;return!t||typeof t=="string"&&!(t in u)?(n=(a=o.slots).default)==null?void 0:n.call(a):l(x,{key:t,layoutProps:e.layoutProps,name:t},o.slots)}}});export{N as _};
