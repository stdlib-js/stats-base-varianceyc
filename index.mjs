// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function e(r,e,n,t){var i,f,u,a,o,d,s;if(d=r-e,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(i=n[f=t<0?(1-r)*t:0],f+=t,u=0,s=2;s<=r;s++)u+=1/(s*(s-1))*(o=s*(a=n[f])-(i+=a))*o,f+=t;return u/d}r(e,"ndarray",(function(r,e,n,t,i){var f,u,a,o,d,s,l;if(s=r-e,r<=0||s<=0)return NaN;if(1===r||0===t)return 0;for(f=n[i],u=i+t,a=0,l=2;l<=r;l++)a+=1/(l*(l-1))*(d=l*(o=n[u])-(f+=o))*d,u+=t;return a/s}));export{e as default};
//# sourceMappingURL=index.mjs.map
