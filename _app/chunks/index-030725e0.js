import{a3 as f}from"./index-1adf6e90.js";function y(n){const o=n-1;return o*o*o+1}function b(n,{delay:o=0,duration:r=400,easing:p=f}={}){const t=+getComputedStyle(n).opacity;return{delay:o,duration:r,easing:p,css:s=>`opacity: ${s*t}`}}function u(n,{delay:o=0,duration:r=400,easing:p=y,x:t=0,y:s=0,opacity:d=0}={}){const e=getComputedStyle(n),i=+e.opacity,m=e.transform==="none"?"":e.transform,g=i*(1-d);return{delay:o,duration:r,easing:p,css:(c,l)=>`
			transform: ${m} translate(${(1-c)*t}px, ${(1-c)*s}px);
			opacity: ${i-g*l}`}}function $(n,{delay:o=0,duration:r=400,easing:p=y}={}){const t=getComputedStyle(n),s=+t.opacity,d=parseFloat(t.height),e=parseFloat(t.paddingTop),i=parseFloat(t.paddingBottom),m=parseFloat(t.marginTop),g=parseFloat(t.marginBottom),c=parseFloat(t.borderTopWidth),l=parseFloat(t.borderBottomWidth);return{delay:o,duration:r,easing:p,css:a=>`overflow: hidden;opacity: ${Math.min(a*20,1)*s};height: ${a*d}px;padding-top: ${a*e}px;padding-bottom: ${a*i}px;margin-top: ${a*m}px;margin-bottom: ${a*g}px;border-top-width: ${a*c}px;border-bottom-width: ${a*l}px;`}}export{b as a,y as c,u as f,$ as s};
