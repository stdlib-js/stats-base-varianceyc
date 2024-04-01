"use strict";var y=function(r,n){return function(){return n||r((n={exports:{}}).exports,n),n.exports}};var q=y(function(w,p){
function R(r,n,o,e){var s,a,u,i,t,c,v;if(c=r-n,r<=0||c<=0)return NaN;if(r===1||e===0)return 0;for(e<0?a=(1-r)*e:a=0,s=o[a],a+=e,u=0,v=2;v<=r;v++)i=o[a],s+=i,t=v*i-s,u+=1/(v*(v-1))*t*t,a+=e;return u/c}p.exports=R
});var m=y(function(z,x){
function b(r,n,o,e,s){var a,u,i,t,c,v,f;if(v=r-n,r<=0||v<=0)return NaN;if(r===1||e===0)return 0;for(a=o[s],u=s+e,i=0,f=2;f<=r;f++)t=o[u],a+=t,c=f*t-a,i+=1/(f*(f-1))*c*c,u+=e;return i/v}x.exports=b
});var O=y(function(A,S){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=q(),h=m();g(l,"ndarray",h);S.exports=l
});var j=O();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
