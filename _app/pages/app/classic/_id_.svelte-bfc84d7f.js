import{S as we,i as Ee,s as Ie,a4 as Ue,e as f,c as h,a as N,d as y,b as r,g as ke,a5 as Ne,q as Te,J as Pe,o as ye,Z as fe,O as he,E as P,t as ne,k as I,h as oe,m as U,H as s,I as O,j as be,X as Se,w as De,x as Oe,y as qe,B as Ae}from"../../../chunks/index-1adf6e90.js";import{L as Be}from"../../../chunks/Loader-13568200.js";import{b as me}from"../../../chunks/index-4c96ced9.js";import{s as ve}from"../../../chunks/db-3cefa901.js";import{s as ge}from"../../../chunks/index-030725e0.js";import{p as Ce}from"../../../chunks/stores-67c1f236.js";/* empty css                                                           */import"../../../chunks/index-022c0e8e.js";function He(e){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Le(e){let l,t,i,o=e[2].titel+"",p,_,u,S,H,L,E,R,j,V,d,m,q,A,a,b,B,Z,te,w,z,K,le,g,X,M,ae,k,F,Q,se,T,G,W,re,C,D,J=e[1]?"... loading":"Update",Y,$,ue,ie;return{c(){l=f("section"),t=f("hgroup"),i=f("h4"),p=ne(o),_=I(),u=f("label"),S=f("span"),H=ne("Edit"),L=I(),E=f("input"),R=I(),j=f("hr"),V=I(),d=f("div"),m=f("input"),a=I(),b=f("input"),te=I(),w=f("textarea"),le=I(),g=f("input"),ae=I(),k=f("input"),se=I(),T=f("input"),re=I(),C=f("div"),D=f("button"),Y=ne(J),this.h()},l(c){l=h(c,"SECTION",{class:!0});var n=N(l);t=h(n,"HGROUP",{class:!0});var x=N(t);i=h(x,"H4",{});var ce=N(i);p=oe(ce,o),ce.forEach(y),_=U(x),u=h(x,"LABEL",{class:!0});var ee=N(u);S=h(ee,"SPAN",{class:!0});var pe=N(S);H=oe(pe,"Edit"),pe.forEach(y),L=U(ee),E=h(ee,"INPUT",{class:!0,type:!0}),ee.forEach(y),x.forEach(y),R=U(n),j=h(n,"HR",{}),V=U(n),d=h(n,"DIV",{class:!0});var v=N(d);m=h(v,"INPUT",{class:!0,type:!0,placeholder:!0}),a=U(v),b=h(v,"INPUT",{class:!0,type:!0,placeholder:!0}),te=U(v),w=h(v,"TEXTAREA",{rows:!0,class:!0}),N(w).forEach(y),le=U(v),g=h(v,"INPUT",{class:!0,type:!0,placeholder:!0}),ae=U(v),k=h(v,"INPUT",{class:!0,type:!0,placeholder:!0}),se=U(v),T=h(v,"INPUT",{class:!0,type:!0,placeholder:!0}),re=U(v),C=h(v,"DIV",{class:!0});var de=N(C);D=h(de,"BUTTON",{class:!0});var _e=N(D);Y=oe(_e,J),_e.forEach(y),de.forEach(y),v.forEach(y),n.forEach(y),this.h()},h(){r(S,"class","text-sm"),r(E,"class","ml-2 checkbox"),r(E,"type","checkbox"),r(u,"class","text-gray-800"),r(t,"class","flex justify-between items-center"),r(m,"class","input"),r(m,"type","text"),m.value=q=e[2].titel,r(m,"placeholder","Titel"),m.disabled=A=!e[0],r(b,"class","input"),r(b,"type","text"),b.value=B=e[2].tags,r(b,"placeholder","Tags"),b.disabled=Z=!e[0],r(w,"rows","3"),w.disabled=z=!e[0],r(w,"class","input"),w.value=K=e[2].info,r(g,"class","input"),r(g,"type","text"),g.value=X=e[2].fileurl,r(g,"placeholder","File"),g.disabled=M=!e[0],r(k,"class","input"),r(k,"type","text"),k.value=F=e[2].thumb,r(k,"placeholder","Thumb"),k.disabled=Q=!e[0],r(T,"class","input"),r(T,"type","text"),T.value=G=e[2].screen,r(T,"placeholder","Screen"),T.disabled=W=!e[0],D.disabled=$=!e[0],r(D,"class","btn btn-blue"),r(C,"class","py-4"),r(d,"class","space-y-2"),r(l,"class","w-full container mx-auto px-4 py-4 space-y-4")},m(c,n){ke(c,l,n),s(l,t),s(t,i),s(i,p),s(t,_),s(t,u),s(u,S),s(S,H),s(u,L),s(u,E),E.checked=e[0],s(l,R),s(l,j),s(l,V),s(l,d),s(d,m),s(d,a),s(d,b),s(d,te),s(d,w),s(d,le),s(d,g),s(d,ae),s(d,k),s(d,se),s(d,T),s(d,re),s(d,C),s(C,D),s(D,Y),ue||(ie=[O(E,"change",e[5]),O(m,"blur",e[6]),O(b,"blur",e[7]),O(w,"blur",e[8]),O(g,"blur",e[9]),O(k,"blur",e[10]),O(T,"blur",e[11]),O(D,"click",e[3])],ue=!0)},p(c,n){n&4&&o!==(o=c[2].titel+"")&&be(p,o),n&1&&(E.checked=c[0]),n&4&&q!==(q=c[2].titel)&&m.value!==q&&(m.value=q),n&1&&A!==(A=!c[0])&&(m.disabled=A),n&4&&B!==(B=c[2].tags)&&b.value!==B&&(b.value=B),n&1&&Z!==(Z=!c[0])&&(b.disabled=Z),n&1&&z!==(z=!c[0])&&(w.disabled=z),n&4&&K!==(K=c[2].info)&&(w.value=K),n&4&&X!==(X=c[2].fileurl)&&g.value!==X&&(g.value=X),n&1&&M!==(M=!c[0])&&(g.disabled=M),n&4&&F!==(F=c[2].thumb)&&k.value!==F&&(k.value=F),n&1&&Q!==(Q=!c[0])&&(k.disabled=Q),n&4&&G!==(G=c[2].screen)&&T.value!==G&&(T.value=G),n&1&&W!==(W=!c[0])&&(T.disabled=W),n&2&&J!==(J=c[1]?"... loading":"Update")&&be(Y,J),n&1&&$!==($=!c[0])&&(D.disabled=$)},i:P,o:P,d(c){c&&y(l),ue=!1,Se(ie)}}}function Re(e){let l,t;return l=new Be({}),{c(){De(l.$$.fragment)},l(i){Oe(l.$$.fragment,i)},m(i,o){qe(l,i,o),t=!0},p:P,i(i){t||(Te(l.$$.fragment,i),t=!0)},o(i){ye(l.$$.fragment,i),t=!1},d(i){Ae(l,i)}}}function je(e){let l,t,i,o={ctx:e,current:null,token:null,hasCatch:!1,pending:Re,then:Le,catch:He,value:17,blocks:[,,,]};return Ue(e[4],o),{c(){l=f("section"),o.block.c(),this.h()},l(p){l=h(p,"SECTION",{class:!0});var _=N(l);o.block.l(_),_.forEach(y),this.h()},h(){r(l,"class","h-full overflow-x-hidden overflow-y-auto w-full")},m(p,_){ke(p,l,_),o.block.m(l,o.anchor=null),o.mount=()=>l,o.anchor=null,i=!0},p(p,[_]){e=p,Ne(o,e,_)},i(p){i||(Te(o.block),Pe(()=>{t||(t=fe(l,ge,{},!0)),t.run(1)}),i=!0)},o(p){for(let _=0;_<3;_+=1){const u=o.blocks[_];ye(u)}t||(t=fe(l,ge,{},!1)),t.run(0),i=!1},d(p){p&&y(l),o.block.d(),o.token=null,o=null,p&&t&&t.end()}}}function Ve(e,l,t){let i,o;he(e,Ce,a=>t(12,i=a)),he(e,me,a=>t(13,o=a));let p=o,_,u;const S=async()=>{try{let{data:a,error:b}=await ve.from("bb_classics").select("*").eq("id",i.params.id).single();t(2,u=a)}catch(a){console.log(a)}},H=async a=>{t(1,_=!0);try{const{data:b,error:B}=await ve.from("datalist").update({titel:a.titel,tags:a.tags,info:a.info,fileurl:a.fileurl,thumb:a.thumb,screen:a.screen}).eq("id",a.id);await S()}catch(b){console.log(b)}finally{t(1,_=!1)}},L=()=>{H(u)};let E=S();function R(){p=this.checked,t(0,p)}const j=a=>{t(2,u.titel=a.currentTarget.value,u)},V=a=>{t(2,u.tags=a.currentTarget.value,u)},d=a=>{t(2,u.info=a.currentTarget.value,u)},m=a=>{t(2,u.fileurl=a.currentTarget.value,u)},q=a=>{t(2,u.thumb=a.currentTarget.value,u)},A=a=>{t(2,u.screen=a.currentTarget.value,u)};return e.$$.update=()=>{e.$$.dirty&1&&me.set(p)},[p,_,u,L,E,R,j,V,d,m,q,A]}class Qe extends we{constructor(l){super(),Ee(this,l,Ve,je,Ie,{})}}export{Qe as default};
