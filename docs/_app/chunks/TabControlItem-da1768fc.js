var D=Object.defineProperty,E=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var S=(i,s,a)=>s in i?D(i,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[s]=a,p=(i,s)=>{for(var a in s||(s={}))G.call(s,a)&&S(i,a,s[a]);if(w)for(var a of w(s))H.call(s,a)&&S(i,a,s[a]);return i},T=(i,s)=>E(i,F(s));import{S as O,i as j,s as v,a1 as k,k as J,m as K,g as z,_ as C,$ as h,a0 as q,q as b,o as d,d as A,r as L,l as I,n as P,p as Q,a6 as R,O as U,v as V}from"./index-1adf6e90.js";import{w as W}from"./index-022c0e8e.js";const X=i=>({tabs:i&1}),M=i=>({tabs:i[0]});function Y(i){let s,a;const e=i[3].tabs,t=k(e,i,i[2],M),o=i[3].default,u=k(o,i,i[2],null);return{c(){t&&t.c(),s=J(),u&&u.c()},l(l){t&&t.l(l),s=K(l),u&&u.l(l)},m(l,n){t&&t.m(l,n),z(l,s,n),u&&u.m(l,n),a=!0},p(l,[n]){t&&t.p&&(!a||n&5)&&C(t,e,l,l[2],a?q(e,l[2],n,X):h(l[2]),M),u&&u.p&&(!a||n&4)&&C(u,o,l,l[2],a?q(o,l[2],n,null):h(l[2]),null)},i(l){a||(b(t,l),b(u,l),a=!0)},o(l){d(t,l),d(u,l),a=!1},d(l){t&&t.d(l),l&&A(s),u&&u.d(l)}}}function Z(i,s,a){let{$$slots:e={},$$scope:t}=s,{tabs:o}=s;const u=W([]),l=n=>u.update(g=>g.map(c=>T(p({},c),{active:c.id==n})));return u.subscribe(n=>a(0,o=n)),L("tabcontrols_tabs",{_tabs:u,setTab:l}),i.$$set=n=>{"tabs"in n&&a(0,o=n.tabs),"$$scope"in n&&a(2,t=n.$$scope)},[o,l,t,e]}class at extends O{constructor(s){super(),j(this,s,Z,Y,v,{tabs:0,setTab:1})}get setTab(){return this.$$.ctx[1]}}function N(i){let s;const a=i[9].default,e=k(a,i,i[8],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,o){e&&e.m(t,o),s=!0},p(t,o){e&&e.p&&(!s||o&256)&&C(e,a,t,t[8],s?q(a,t[8],o,null):h(t[8]),null)},i(t){s||(b(e,t),s=!0)},o(t){d(e,t),s=!1},d(t){e&&e.d(t)}}}function x(i){let s,a,e=i[0]&&N(i);return{c(){e&&e.c(),s=I()},l(t){e&&e.l(t),s=I()},m(t,o){e&&e.m(t,o),z(t,s,o),a=!0},p(t,[o]){t[0]?e?(e.p(t,o),o&1&&b(e,1)):(e=N(t),e.c(),b(e,1),e.m(s.parentNode,s)):e&&(P(),d(e,1,1,()=>{e=null}),Q())},i(t){a||(b(e),a=!0)},o(t){d(e),a=!1},d(t){e&&e.d(t),t&&A(s)}}}function $(i,s,a){let e,t,o,{$$slots:u={},$$scope:l}=s;const{_tabs:n,setTab:g}=R("tabcontrols_tabs");U(i,n,f=>a(7,o=f));let{active:c=!1}=s,{disabled:m=!1}=s,{id:_}=s,{payload:y}=s;const B=()=>g(_);return V(()=>n.update(f=>[...f,{active:c,disabled:m,id:_,select:B,payload:y}])),i.$$set=f=>{"active"in f&&a(2,c=f.active),"disabled"in f&&a(3,m=f.disabled),"id"in f&&a(4,_=f.id),"payload"in f&&a(5,y=f.payload),"$$scope"in f&&a(8,l=f.$$scope)},i.$$.update=()=>{i.$$.dirty&144&&a(6,e=o.find(f=>_===f.id)),i.$$.dirty&64&&a(0,t=e&&e.active),i.$$.dirty&24&&n.update(f=>f.map(r=>r.id===_?T(p({},r),{disabled:m}):r)),i.$$.dirty&20&&n.update(f=>f.map(r=>r.id===_?T(p({},r),{active:c}):r))},[t,n,c,m,_,y,e,o,l,u]}class it extends O{constructor(s){super(),j(this,s,$,x,v,{active:2,disabled:3,id:4,payload:5})}}export{at as T,it as a};
