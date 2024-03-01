// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function n(r,n,e,t){var a,i,f,o,u,d,s;if(d=r-n,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(a=e[i=t<0?(1-r)*t:0],i+=t,f=0,s=2;s<=r;s++)f+=1/(s*(s-1))*(u=s*(o=e[i])-(a+=o))*u,i+=t;return f/d}r(n,"ndarray",(function(r,n,e,t,a){var i,f,o,u,d,s,l;if(s=r-n,r<=0||s<=0)return NaN;if(1===r||0===t)return 0;for(i=e[a],f=a+t,o=0,l=2;l<=r;l++)o+=1/(l*(l-1))*(d=l*(u=e[f])-(i+=u))*d,f+=t;return o/s}));const{ndarray:e}=n;export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
