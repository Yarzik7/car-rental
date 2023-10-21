import{s as yt,n as w,j as f,i as $e,r as ue,M as xt}from"./index-83e701c5.js";var Ie={exports:{}},x={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=typeof Symbol=="function"&&Symbol.for,ye=g?Symbol.for("react.element"):60103,xe=g?Symbol.for("react.portal"):60106,J=g?Symbol.for("react.fragment"):60107,V=g?Symbol.for("react.strict_mode"):60108,W=g?Symbol.for("react.profiler"):60114,K=g?Symbol.for("react.provider"):60109,G=g?Symbol.for("react.context"):60110,be=g?Symbol.for("react.async_mode"):60111,X=g?Symbol.for("react.concurrent_mode"):60111,Q=g?Symbol.for("react.forward_ref"):60112,Z=g?Symbol.for("react.suspense"):60113,bt=g?Symbol.for("react.suspense_list"):60120,Y=g?Symbol.for("react.memo"):60115,ee=g?Symbol.for("react.lazy"):60116,wt=g?Symbol.for("react.block"):60121,St=g?Symbol.for("react.fundamental"):60117,gt=g?Symbol.for("react.responder"):60118,Et=g?Symbol.for("react.scope"):60119;function A(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ye:switch(e=e.type,e){case be:case X:case J:case W:case V:case Z:return e;default:switch(e=e&&e.$$typeof,e){case G:case Q:case ee:case Y:case K:return e;default:return t}}case xe:return t}}}function Me(e){return A(e)===X}x.AsyncMode=be;x.ConcurrentMode=X;x.ContextConsumer=G;x.ContextProvider=K;x.Element=ye;x.ForwardRef=Q;x.Fragment=J;x.Lazy=ee;x.Memo=Y;x.Portal=xe;x.Profiler=W;x.StrictMode=V;x.Suspense=Z;x.isAsyncMode=function(e){return Me(e)||A(e)===be};x.isConcurrentMode=Me;x.isContextConsumer=function(e){return A(e)===G};x.isContextProvider=function(e){return A(e)===K};x.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ye};x.isForwardRef=function(e){return A(e)===Q};x.isFragment=function(e){return A(e)===J};x.isLazy=function(e){return A(e)===ee};x.isMemo=function(e){return A(e)===Y};x.isPortal=function(e){return A(e)===xe};x.isProfiler=function(e){return A(e)===W};x.isStrictMode=function(e){return A(e)===V};x.isSuspense=function(e){return A(e)===Z};x.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===J||e===X||e===W||e===V||e===Z||e===bt||typeof e=="object"&&e!==null&&(e.$$typeof===ee||e.$$typeof===Y||e.$$typeof===K||e.$$typeof===G||e.$$typeof===Q||e.$$typeof===St||e.$$typeof===gt||e.$$typeof===Et||e.$$typeof===wt)};x.typeOf=A;Ie.exports=x;var Rt=Ie.exports,ve=Rt,At={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ot={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ze={};ze[ve.ForwardRef]=At;ze[ve.Memo]=Ot;function Ct(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return yt(t)}const Tt=w.li`
  flex-basis: calc((100% - 3 * 29px) / 4);
`,jt=w.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,Pt=w.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 268px;
  margin-bottom: 14px;

  border-radius: 14px;
  background-color: grey;

  overflow: hidden;
`,Nt=w.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,Ft=w.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  border: none;
  background-color: transparent;

  cursor: pointer;
  outline: none;
`,Bt=w.svg`
  width: 18px;
  height: 18px;

  fill: ${({favorite:e})=>e?"#3470FF":"transparent"};
  stroke: ${({favorite:e})=>e?"#3470FF":"#fff"};
`,He=Ct`
  font-weight: 500;
  line-height: 1.5;
  color: #121417;
`,Lt=w.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  flex-grow: 1;

  ${He}
`,qe=w.h3`
  font-size: 16px;
  ${He}

  & > span {
    color: #3470ff;
  }
`;w.div`
  margin-bottom: 28px;
`;const Je=w.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({styles:e})=>`${e.width}`};
  height: ${({styles:e})=>`${e.height}`};

  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  color: #fff;

  border-radius: 12px;
  background-color: #3470ff;
  border: none;

  cursor: pointer;
  outline: none;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`,_t=Je.withComponent("a"),Ve=({caption:e,styles:t,onClick:n,type:r="button"})=>f.jsx(f.Fragment,{children:r==="button"?f.jsx(Je,{onClick:n,styles:t,children:e}):f.jsx(_t,{onClick:s=>s.preventDefault(),styles:t,href:"tel:+380730000000",children:e})}),Ut=w.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 541px;
  padding: 40px;

  background-color: #fff;
  border-radius: 24px;
`,Dt=w.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;

  background-color: transparent;
  border: none;

  cursor: pointer;
  outline: none;

  & svg {
    stroke: #000;
  }

  & svg:hover,
  & svg:focus {
    stroke: #0b44cd;
  }
`,kt=w.svg`
  width: 24px;
  height: 24px;

  stroke: currentColor;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
`,$t=({children:e,onClose:t})=>f.jsxs(Ut,{children:[f.jsx(Dt,{onClick:t,children:f.jsx(kt,{children:f.jsx("use",{xlinkHref:`${$e}#icon-close`})})}),e]}),It=w.div`
  width: 100%;
  height: 248px;

  border-radius: 14px;

  overflow: hidden;
`,Mt=w.img`
  width: 100%;
  height: 100%;
`;w.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: #121417;

  & > span {
    color: #3470ff;
  }
`;const vt=w.p`
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  width: 400px;
`,Oe=w.h4`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: #121417;
`,Ce=w.div`
  display: flex;
  gap: 6px;
`,_=w.p`
  padding: 7px 14px;

  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: #363535;

  & > span {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
    color: #3470ff;
  }
`,zt=w.p`
  margin-bottom: ${({marginBottom:e})=>e?`${e}px`:0};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`,D=({children:e,marginBottom:t})=>f.jsx(zt,{marginBottom:t,children:e}),We=({address:e,rentalCompany:t,type:n,model:r,id:s,functionalities:o,year:i,fuelConsumption:l,engineSize:d},h="carItem")=>{const[c,p]=e.split(",").slice(-2);return{carItem:[c,p,t,n,r,s,o[0]],popUp:[[c,p,`id: ${s}`,`year: ${i}`,`type ${n}`],[`Fuel Consumption: ${l}`,`Engine Size: ${d}`]]}[h]},Ht=({carInfo:e})=>{const{img:t,model:n,make:r,year:s,description:o,accessories:i,functionalities:l,rentalPrice:d,rentalConditions:h,mileage:c}=e,[p,b,E]=h.split(`
`),u=We(e,"popUp");return f.jsxs(f.Fragment,{children:[f.jsx(It,{children:f.jsx(Mt,{src:t,alt:n})}),f.jsxs("div",{children:[f.jsxs(qe,{children:[r," ",f.jsx("span",{children:n}),", ",s]}),f.jsx(D,{marginBottom:4,children:u[0].join(" | ")}),f.jsx(D,{marginBottom:14,children:u[1].join(" | ")}),f.jsx(vt,{children:o})]}),f.jsxs("div",{children:[f.jsx(Oe,{children:"Accessories and functionalities:"}),f.jsx(D,{children:i.join(" | ")}),f.jsx(D,{children:l.join(" | ")})]}),f.jsxs("div",{children:[f.jsx(Oe,{children:"Rental Conditions:"}),f.jsxs(Ce,{children:[f.jsxs(_,{children:[p.match(/([a-zA-Z\s:]+)/)[0],f.jsx("span",{children:p.match(/(\d+)/)[0]})]}),f.jsx(_,{children:b})]}),f.jsxs(Ce,{children:[f.jsx(_,{children:E}),f.jsxs(_,{children:["Mileage: ",f.jsx("span",{children:c.toLocaleString("en-US")})]}),f.jsxs(_,{children:["Price: ",f.jsx("span",{children:d.match(/(\d+)/)[0]+"$"})]})]})]}),f.jsx(Ve,{caption:"Rental car",styles:{width:"168px",height:"44px"},type:"link"})]})},qt=({carInfo:e,favorite:t=!1,toggleFavorite:n})=>{const[r,s]=ue.useState(!1),{img:o,model:i,rentalPrice:l,make:d,year:h}=e,c=We(e),p=()=>s(b=>!b);return f.jsx(Tt,{children:f.jsxs(jt,{children:[f.jsxs(Pt,{children:[f.jsx(Nt,{src:o,alt:i}),f.jsx(Ft,{onClick:()=>n(e.id),children:f.jsx(Bt,{favorite:t,children:f.jsx("use",{xlinkHref:`${$e}#icon-heart`})})})]}),f.jsxs(Lt,{children:[f.jsxs(qe,{children:[d," ",f.jsx("span",{children:i}),", ",h]}),f.jsx("p",{children:l})]}),f.jsx(D,{marginBottom:28,children:c.join(" | ")}),f.jsx(Ve,{caption:"Learn more",styles:{width:"100%",height:"44px"},onClick:p}),r&&f.jsx(xt,{onClose:p,children:f.jsx($t,{onClose:p,children:f.jsx(Ht,{carInfo:e})})})]})})},Jt=w.ul`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
`,Vt=(e,t=[])=>{const[n,r]=ue.useState(()=>JSON.parse(localStorage.getItem(e))??t);return ue.useEffect(()=>{localStorage.setItem(e,JSON.stringify(n))},[e,n]),[n,r]};function Ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:Wt}=Object.prototype,{getPrototypeOf:we}=Object,te=(e=>t=>{const n=Wt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),j=e=>(e=e.toLowerCase(),t=>te(t)===e),ne=e=>t=>typeof t===e,{isArray:L}=Array,k=ne("undefined");function Kt(e){return e!==null&&!k(e)&&e.constructor!==null&&!k(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ge=j("ArrayBuffer");function Gt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ge(e.buffer),t}const Xt=ne("string"),O=ne("function"),Xe=ne("number"),re=e=>e!==null&&typeof e=="object",Qt=e=>e===!0||e===!1,v=e=>{if(te(e)!=="object")return!1;const t=we(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Zt=j("Date"),Yt=j("File"),en=j("Blob"),tn=j("FileList"),nn=e=>re(e)&&O(e.pipe),rn=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=te(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},sn=j("URLSearchParams"),on=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Qe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ze=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ye=e=>!k(e)&&e!==Ze;function fe(){const{caseless:e}=Ye(this)&&this||{},t={},n=(r,s)=>{const o=e&&Qe(t,s)||s;v(t[o])&&v(r)?t[o]=fe(t[o],r):v(r)?t[o]=fe({},r):L(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&$(arguments[r],n);return t}const an=(e,t,n,{allOwnKeys:r}={})=>($(t,(s,o)=>{n&&O(s)?e[o]=Ke(s,n):e[o]=s},{allOwnKeys:r}),e),cn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ln=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},un=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&we(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},fn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},dn=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},pn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&we(Uint8Array)),hn=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},mn=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},yn=j("HTMLFormElement"),xn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Te=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),bn=j("RegExp"),et=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};$(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},wn=e=>{et(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Sn=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return L(e)?r(e):r(String(e).split(t)),n},gn=()=>{},En=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ie="abcdefghijklmnopqrstuvwxyz",je="0123456789",tt={DIGIT:je,ALPHA:ie,ALPHA_DIGIT:ie+ie.toUpperCase()+je},Rn=(e=16,t=tt.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function An(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const On=e=>{const t=new Array(10),n=(r,s)=>{if(re(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=L(r)?[]:{};return $(r,(i,l)=>{const d=n(i,s+1);!k(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Cn=j("AsyncFunction"),Tn=e=>e&&(re(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:L,isArrayBuffer:Ge,isBuffer:Kt,isFormData:rn,isArrayBufferView:Gt,isString:Xt,isNumber:Xe,isBoolean:Qt,isObject:re,isPlainObject:v,isUndefined:k,isDate:Zt,isFile:Yt,isBlob:en,isRegExp:bn,isFunction:O,isStream:nn,isURLSearchParams:sn,isTypedArray:pn,isFileList:tn,forEach:$,merge:fe,extend:an,trim:on,stripBOM:cn,inherits:ln,toFlatObject:un,kindOf:te,kindOfTest:j,endsWith:fn,toArray:dn,forEachEntry:hn,matchAll:mn,isHTMLForm:yn,hasOwnProperty:Te,hasOwnProp:Te,reduceDescriptors:et,freezeMethods:wn,toObjectSet:Sn,toCamelCase:xn,noop:gn,toFiniteNumber:En,findKey:Qe,global:Ze,isContextDefined:Ye,ALPHABET:tt,generateString:Rn,isSpecCompliantForm:An,toJSONObject:On,isAsyncFn:Cn,isThenable:Tn};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const nt=y.prototype,rt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{rt[e]={value:e}});Object.defineProperties(y,rt);Object.defineProperty(nt,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(nt);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const jn=null;function de(e){return a.isPlainObject(e)||a.isArray(e)}function st(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Pe(e,t,n){return e?e.concat(t).map(function(s,o){return s=st(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Pn(e){return a.isArray(e)&&!e.some(de)}const Nn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function se(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,R){return!a.isUndefined(R[m])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,m,R){let P=u;if(u&&!R&&typeof u=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&Pn(u)||(a.isFileList(u)||a.endsWith(m,"[]"))&&(P=a.toArray(u)))return m=st(m),P.forEach(function(M,mt){!(a.isUndefined(M)||M===null)&&t.append(i===!0?Pe([m],mt,o):i===null?m:m+"[]",h(M))}),!1}return de(u)?!0:(t.append(Pe(R,m,o),h(u)),!1)}const p=[],b=Object.assign(Nn,{defaultVisitor:c,convertValue:h,isVisitable:de});function E(u,m){if(!a.isUndefined(u)){if(p.indexOf(u)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(u),a.forEach(u,function(P,C){(!(a.isUndefined(P)||P===null)&&s.call(t,P,a.isString(C)?C.trim():C,m,b))===!0&&E(P,m?m.concat(C):[C])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Ne(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Se(e,t){this._pairs=[],e&&se(e,this,t)}const ot=Se.prototype;ot.append=function(t,n){this._pairs.push([t,n])};ot.toString=function(t){const n=t?function(r){return t.call(this,r,Ne)}:Ne;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Fn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function it(e,t,n){if(!t)return e;const r=n&&n.encode||Fn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new Se(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Bn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Fe=Bn,at={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ln=typeof URLSearchParams<"u"?URLSearchParams:Se,_n=typeof FormData<"u"?FormData:null,Un=typeof Blob<"u"?Blob:null,Dn=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),kn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),T={isBrowser:!0,classes:{URLSearchParams:Ln,FormData:_n,Blob:Un},isStandardBrowserEnv:Dn,isStandardBrowserWebWorkerEnv:kn,protocols:["http","https","file","blob","url","data"]};function $n(e,t){return se(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function In(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Mn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function ct(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Mn(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(In(r),s,n,0)}),n}return null}function vn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ge={transitional:at,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(ct(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return $n(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return se(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),vn(t)):t}],transformResponse:[function(t){const n=this.transitional||ge.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?y.from(l,y.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ge.headers[e]={}});const Ee=ge,zn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Hn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&zn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Be=Symbol("internals");function U(e){return e&&String(e).trim().toLowerCase()}function z(e){return e===!1||e==null?e:a.isArray(e)?e.map(z):String(e)}function qn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Jn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ae(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Vn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Wn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class oe{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,h){const c=U(d);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(s,c);(!p||s[p]===void 0||h===!0||h===void 0&&s[p]!==!1)&&(s[p||d]=z(l))}const i=(l,d)=>a.forEach(l,(h,c)=>o(h,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Jn(t)?i(Hn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=U(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return qn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=U(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ae(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=U(i),i){const l=a.findKey(r,i);l&&(!n||ae(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ae(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=z(s),delete n[o];return}const l=t?Vn(o):String(o).trim();l!==o&&delete n[o],n[l]=z(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Be]=this[Be]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=U(i);r[l]||(Wn(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}oe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(oe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(oe);const N=oe;function ce(e,t){const n=this||Ee,r=t||n,s=N.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function lt(e){return!!(e&&e.__CANCEL__)}function I(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(I,y,{__CANCEL__:!0});function Kn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Gn=T.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Xn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Qn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ut(e,t){return e&&!Xn(t)?Qn(e,t):t}const Zn=T.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Yn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function er(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const h=Date.now(),c=r[o];i||(i=h),n[s]=d,r[s]=h;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const E=c&&h-c;return E?Math.round(b*1e3/E):void 0}}function Le(e,t){let n=0;const r=er(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),h=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&h?(i-o)/d:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const tr=typeof XMLHttpRequest<"u",nr=tr&&function(e){return new Promise(function(n,r){let s=e.data;const o=N.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let h;a.isFormData(s)&&(T.isStandardBrowserEnv||T.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(h=o.getContentType())&&o.setContentType(h.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(u+":"+m))}const p=ut(e.baseURL,e.url);c.open(e.method.toUpperCase(),it(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const u=N.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),R={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};Kn(function(C){n(C),d()},function(C){r(C),d()},R),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const R=e.transitional||at;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new y(m,R.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},T.isStandardBrowserEnv){const u=(e.withCredentials||Zn(p))&&e.xsrfCookieName&&Gn.read(e.xsrfCookieName);u&&o.set(e.xsrfHeaderName,u)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(m,R){c.setRequestHeader(R,m)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Le(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Le(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{c&&(r(!u||u.type?new I(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const E=Yn(p);if(E&&T.protocols.indexOf(E)===-1){r(new y("Unsupported protocol "+E+":",y.ERR_BAD_REQUEST,e));return}c.send(s||null)})},pe={http:jn,xhr:nr};a.forEach(pe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const _e=e=>`- ${e}`,rr=e=>a.isFunction(e)||e===null||e===!1,ft={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!rr(n)&&(r=pe[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(_e).join(`
`):" "+_e(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:pe};function le(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new I(null,e)}function Ue(e){return le(e),e.headers=N.from(e.headers),e.data=ce.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ft.getAdapter(e.adapter||Ee.adapter)(e).then(function(r){return le(e),r.data=ce.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return lt(r)||(le(e),r&&r.response&&(r.response.data=ce.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const De=e=>e instanceof N?e.toJSON():e;function B(e,t){t=t||{};const n={};function r(h,c,p){return a.isPlainObject(h)&&a.isPlainObject(c)?a.merge.call({caseless:p},h,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(h,c,p){if(a.isUndefined(c)){if(!a.isUndefined(h))return r(void 0,h,p)}else return r(h,c,p)}function o(h,c){if(!a.isUndefined(c))return r(void 0,c)}function i(h,c){if(a.isUndefined(c)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,c)}function l(h,c,p){if(p in t)return r(h,c);if(p in e)return r(void 0,h)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(h,c)=>s(De(h),De(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=d[c]||s,b=p(e[c],t[c],c);a.isUndefined(b)&&p!==l||(n[c]=b)}),n}const dt="1.5.1",Re={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Re[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ke={};Re.transitional=function(t,n,r){function s(o,i){return"[Axios v"+dt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!ke[i]&&(ke[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function sr(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new y("option "+o+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const he={assertOptions:sr,validators:Re},F=he.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new Fe,response:new Fe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&he.assertOptions(r,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:he.assertOptions(s,{encode:F.function,serialize:F.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=N.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const h=[];this.interceptors.response.forEach(function(m){h.push(m.fulfilled,m.rejected)});let c,p=0,b;if(!d){const u=[Ue.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,h),b=u.length,c=Promise.resolve(n);p<b;)c=c.then(u[p++],u[p++]);return c}b=l.length;let E=n;for(p=0;p<b;){const u=l[p++],m=l[p++];try{E=u(E)}catch(R){m.call(this,R);break}}try{c=Ue.call(this,E)}catch(u){return Promise.reject(u)}for(p=0,b=h.length;p<b;)c=c.then(h[p++],h[p++]);return c}getUri(t){t=B(this.defaults,t);const n=ut(t.baseURL,t.url);return it(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(B(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}q.prototype[t]=n(),q.prototype[t+"Form"]=n(!0)});const H=q;class Ae{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new I(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Ae(function(s){t=s}),cancel:t}}}const or=Ae;function ir(e){return function(n){return e.apply(null,n)}}function ar(e){return a.isObject(e)&&e.isAxiosError===!0}const me={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(me).forEach(([e,t])=>{me[t]=e});const cr=me;function pt(e){const t=new H(e),n=Ke(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return pt(B(e,s))},n}const S=pt(Ee);S.Axios=H;S.CanceledError=I;S.CancelToken=or;S.isCancel=lt;S.VERSION=dt;S.toFormData=se;S.AxiosError=y;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=ir;S.isAxiosError=ar;S.mergeConfig=B;S.AxiosHeaders=N;S.formToJSON=e=>ct(a.isHTMLForm(e)?new FormData(e):e);S.getAdapter=ft.getAdapter;S.HttpStatusCode=cr;S.default=S;const ht=S;ht.defaults.baseURL="https://6531500a4d4c2e3f333cd38e.mockapi.io/api";const ur=async e=>{const t=new URLSearchParams(e);return(await ht.get(`/catalog?${t}`)).data},fr=({items:e})=>{const[t,n]=Vt("ids",[]),r=o=>t.includes(o),s=o=>{if(!~t.indexOf(o)){n(i=>[...i,o]);return}n(i=>t.filter(l=>l!==o))};return f.jsx(Jt,{children:e.map(o=>f.jsx(qt,{carInfo:o,favorite:r(o.id),toggleFavorite:s},o.id))})};export{fr as C,ht as a,ur as g,Vt as u};
