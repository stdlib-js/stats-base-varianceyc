"use strict";var x=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var l=x(function(C,d){
function j(r,a,u,e,y){var i,n,c,t,s,o,v,q,f;for(q=r-a,i=u.data,n=u.accessors[0],c=n(i,y),t=y+e,s=0,f=2;f<=r;f++)o=n(i,t),c+=o,v=f*o-c,s+=1/(f*(f-1))*v*v,t+=e;return s/q}d.exports=j
});var p=x(function(D,m){
var k=require('@stdlib/array-base-arraylike2object/dist'),O=l();function P(r,a,u,e,y){var i,n,c,t,s,o,v,q;if(o=r-a,r<=0||o<=0)return NaN;if(r===1||e===0)return 0;if(q=k(u),q.accessorProtocol)return O(r,a,q,e,y);for(i=u[y],n=y+e,c=0,v=2;v<=r;v++)t=u[n],i+=t,s=v*t-i,c+=1/(v*(v-1))*s*s,n+=e;return c/o}m.exports=P
});var S=x(function(E,b){
var R=require('@stdlib/strided-base-stride2offset/dist'),h=p();function w(r,a,u,e){return h(r,a,u,e,R(r,e))}b.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=S(),A=p();z(g,"ndarray",A);module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
