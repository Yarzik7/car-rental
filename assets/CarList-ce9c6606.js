import{s as yt,n as w,j as f,i as De,r as ue,M as xt}from"./index-d55ba480.js";var $e={exports:{}},x={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=typeof Symbol=="function"&&Symbol.for,ye=g?Symbol.for("react.element"):60103,xe=g?Symbol.for("react.portal"):60106,J=g?Symbol.for("react.fragment"):60107,V=g?Symbol.for("react.strict_mode"):60108,W=g?Symbol.for("react.profiler"):60114,K=g?Symbol.for("react.provider"):60109,G=g?Symbol.for("react.context"):60110,be=g?Symbol.for("react.async_mode"):60111,X=g?Symbol.for("react.concurrent_mode"):60111,Q=g?Symbol.for("react.forward_ref"):60112,Z=g?Symbol.for("react.suspense"):60113,bt=g?Symbol.for("react.suspense_list"):60120,Y=g?Symbol.for("react.memo"):60115,ee=g?Symbol.for("react.lazy"):60116,wt=g?Symbol.for("react.block"):60121,St=g?Symbol.for("react.fundamental"):60117,gt=g?Symbol.for("react.responder"):60118,Et=g?Symbol.for("react.scope"):60119;function A(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ye:switch(e=e.type,e){case be:case X:case J:case W:case V:case Z:return e;default:switch(e=e&&e.$$typeof,e){case G:case Q:case ee:case Y:case K:return e;default:return t}}case xe:return t}}}function Ie(e){return A(e)===X}x.AsyncMode=be;x.ConcurrentMode=X;x.ContextConsumer=G;x.ContextProvider=K;x.Element=ye;x.ForwardRef=Q;x.Fragment=J;x.Lazy=ee;x.Memo=Y;x.Portal=xe;x.Profiler=W;x.StrictMode=V;x.Suspense=Z;x.isAsyncMode=function(e){return Ie(e)||A(e)===be};x.isConcurrentMode=Ie;x.isContextConsumer=function(e){return A(e)===G};x.isContextProvider=function(e){return A(e)===K};x.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ye};x.isForwardRef=function(e){return A(e)===Q};x.isFragment=function(e){return A(e)===J};x.isLazy=function(e){return A(e)===ee};x.isMemo=function(e){return A(e)===Y};x.isPortal=function(e){return A(e)===xe};x.isProfiler=function(e){return A(e)===W};x.isStrictMode=function(e){return A(e)===V};x.isSuspense=function(e){return A(e)===Z};x.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===J||e===X||e===W||e===V||e===Z||e===bt||typeof e=="object"&&e!==null&&(e.$$typeof===ee||e.$$typeof===Y||e.$$typeof===K||e.$$typeof===G||e.$$typeof===Q||e.$$typeof===St||e.$$typeof===gt||e.$$typeof===Et||e.$$typeof===wt)};x.typeOf=A;$e.exports=x;var Rt=$e.exports,Me=Rt,At={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ot={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},He={};He[Me.ForwardRef]=At;He[Me.Memo]=Ot;function Ct(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return yt(t)}const jt=w.li`
  flex-basis: calc((100% - 3 * 29px) / 4);
`,Tt=w.div`
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
  background-color: var(--label-color);

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

  fill: ${({favorite:e})=>e?"var(--accent-color)":"transparent"};
  stroke: ${({favorite:e})=>e?"var(--accent-color)":"var(--heart-stroke-color)"};
`,ze=Ct`
  font-weight: 500;
  line-height: 1.5;
  color: var(--primary-text-color);
`,vt=w.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  flex-grow: 1;

  ${ze}
`,qe=w.h3`
  font-size: 16px;
  ${ze}

  & > span {
    color: var(--accent-color);
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
  color: var(--button-text-color);

  border-radius: 12px;
  background-color: var(--accent-color);
  border: none;

  cursor: pointer;
  outline: none;
  transition: background-color var(--timing-function) var(--transition-duration);

  &:hover,
  &:focus {
    background-color: var(--hover-color);
  }
`,Lt=Je.withComponent("a"),Ve=({caption:e,styles:t,onClick:n,type:r="button"})=>f.jsx(f.Fragment,{children:r==="button"?f.jsx(Je,{onClick:n,styles:t,children:e}):f.jsx(Lt,{onClick:o=>o.preventDefault(),styles:t,href:"tel:+380730000000",children:e})}),_t=w.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 541px;
  padding: 40px;

  background-color: var(--button-text-color);
  border-radius: 24px;
`,kt=w.button`
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
    stroke: var(--primary-text-color);
  }

  & svg:hover,
  & svg:focus {
    stroke: var(--hover-color);
  }
`,Ut=w.svg`
  width: 24px;
  height: 24px;

  stroke: currentColor;
  transition: stroke var(--timing-function) var(--transition-duration);
`,Dt=({children:e,onClose:t})=>f.jsxs(_t,{children:[f.jsx(kt,{onClick:t,children:f.jsx(Ut,{children:f.jsx("use",{xlinkHref:`${De}#icon-close`})})}),e]}),$t=w.div`
  width: 100%;
  height: 248px;

  border-radius: 14px;

  overflow: hidden;
`,It=w.img`
  width: 100%;
  height: 100%;
`;w.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-text-color);

  & > span {
    color: var(--accent-color);
  }
`;const Mt=w.p`
  font-size: 14px;
  line-height: 1.43;
  color: var(--primary-text-color);
  width: 400px;
`,Oe=w.h4`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: var(--primary-text-color);
`,Ce=w.div`
  display: flex;
  gap: 6px;
`,_=w.p`
  padding: 7px 14px;

  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: var(--condition-item-color);

  & > span {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
    color: var(--accent-color);
  }
`,Ht=w.p`
  margin-bottom: ${({marginBottom:e})=>e?`${e}px`:0};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--secondary-text-color);
`,B=({children:e,marginBottom:t})=>f.jsx(Ht,{marginBottom:t,children:e}),We=({address:e,rentalCompany:t,type:n,model:r,id:o,functionalities:s,year:i,fuelConsumption:l,engineSize:d},h="carItem")=>{const[c,p]=e.split(",").slice(-2);return{carItem:[[c,p,t],[n,r,o,s[0]]],popUp:[[c,p,`id: ${o}`,`year: ${i}`,`type ${n}`],[`Fuel Consumption: ${l}`,`Engine Size: ${d}`]]}[h]},zt=({carInfo:e})=>{const{img:t,model:n,make:r,year:o,description:s,accessories:i,functionalities:l,rentalPrice:d,rentalConditions:h,mileage:c}=e,[p,b,E]=h.split(`
`),u=We(e,"popUp");return f.jsxs(f.Fragment,{children:[f.jsx($t,{children:f.jsx(It,{src:t,alt:n})}),f.jsxs("div",{children:[f.jsxs(qe,{children:[r," ",f.jsx("span",{children:n}),", ",o]}),f.jsx(B,{marginBottom:4,children:u[0].join(" | ")}),f.jsx(B,{marginBottom:14,children:u[1].join(" | ")}),f.jsx(Mt,{children:s})]}),f.jsxs("div",{children:[f.jsx(Oe,{children:"Accessories and functionalities:"}),f.jsx(B,{children:i.join(" | ")}),f.jsx(B,{children:l.join(" | ")})]}),f.jsxs("div",{children:[f.jsx(Oe,{children:"Rental Conditions:"}),f.jsxs(Ce,{children:[f.jsxs(_,{children:[p.match(/([a-zA-Z\s:]+)/)[0],f.jsx("span",{children:p.match(/(\d+)/)[0]})]}),f.jsx(_,{children:b})]}),f.jsxs(Ce,{children:[f.jsx(_,{children:E}),f.jsxs(_,{children:["Mileage: ",f.jsx("span",{children:c.toLocaleString("en-US")})]}),f.jsxs(_,{children:["Price: ",f.jsx("span",{children:d.match(/(\d+)/)[0]+"$"})]})]})]}),f.jsx(Ve,{caption:"Rental car",styles:{width:"168px",height:"44px"},type:"link"})]})},qt=({carInfo:e,favorite:t=!1,toggleFavorite:n})=>{const[r,o]=ue.useState(!1),{img:s,model:i,rentalPrice:l,make:d,year:h}=e,c=We(e),p=()=>o(b=>!b);return f.jsx(jt,{children:f.jsxs(Tt,{children:[f.jsxs(Pt,{children:[f.jsx(Nt,{src:s,alt:i}),f.jsx(Ft,{onClick:()=>n(e.id),children:f.jsx(Bt,{favorite:t,children:f.jsx("use",{xlinkHref:`${De}#icon-heart`})})})]}),f.jsxs(vt,{children:[f.jsxs(qe,{children:[d," ",f.jsx("span",{children:i}),", ",h]}),f.jsx("p",{children:l})]}),f.jsx(B,{marginBottom:4,children:c[0].join(" | ")}),f.jsx(B,{marginBottom:28,children:c[1].join(" | ")}),f.jsx(Ve,{caption:"Learn more",styles:{width:"100%",height:"44px"},onClick:p}),r&&f.jsx(xt,{onClose:p,children:f.jsx(Dt,{onClose:p,children:f.jsx(zt,{carInfo:e})})})]})})},Jt=w.ul`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
`,Vt=(e,t=[])=>{const[n,r]=ue.useState(()=>JSON.parse(localStorage.getItem(e))??t);return ue.useEffect(()=>{localStorage.setItem(e,JSON.stringify(n))},[e,n]),[n,r]};function Ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:Wt}=Object.prototype,{getPrototypeOf:we}=Object,te=(e=>t=>{const n=Wt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>te(t)===e),ne=e=>t=>typeof t===e,{isArray:L}=Array,U=ne("undefined");function Kt(e){return e!==null&&!U(e)&&e.constructor!==null&&!U(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ge=T("ArrayBuffer");function Gt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ge(e.buffer),t}const Xt=ne("string"),O=ne("function"),Xe=ne("number"),re=e=>e!==null&&typeof e=="object",Qt=e=>e===!0||e===!1,M=e=>{if(te(e)!=="object")return!1;const t=we(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Zt=T("Date"),Yt=T("File"),en=T("Blob"),tn=T("FileList"),nn=e=>re(e)&&O(e.pipe),rn=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=te(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},on=T("URLSearchParams"),sn=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function Qe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Ze=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ye=e=>!U(e)&&e!==Ze;function fe(){const{caseless:e}=Ye(this)&&this||{},t={},n=(r,o)=>{const s=e&&Qe(t,o)||o;M(t[s])&&M(r)?t[s]=fe(t[s],r):M(r)?t[s]=fe({},r):L(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&D(arguments[r],n);return t}const an=(e,t,n,{allOwnKeys:r}={})=>(D(t,(o,s)=>{n&&O(o)?e[s]=Ke(o,n):e[s]=o},{allOwnKeys:r}),e),cn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ln=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},un=(e,t,n,r)=>{let o,s,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&we(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},fn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},dn=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},pn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&we(Uint8Array)),hn=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},mn=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},yn=T("HTMLFormElement"),xn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),je=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),bn=T("RegExp"),et=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},wn=e=>{et(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Sn=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return L(e)?r(e):r(String(e).split(t)),n},gn=()=>{},En=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ie="abcdefghijklmnopqrstuvwxyz",Te="0123456789",tt={DIGIT:Te,ALPHA:ie,ALPHA_DIGIT:ie+ie.toUpperCase()+Te},Rn=(e=16,t=tt.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function An(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const On=e=>{const t=new Array(10),n=(r,o)=>{if(re(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=L(r)?[]:{};return D(r,(i,l)=>{const d=n(i,o+1);!U(d)&&(s[l]=d)}),t[o]=void 0,s}}return r};return n(e,0)},Cn=T("AsyncFunction"),jn=e=>e&&(re(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:L,isArrayBuffer:Ge,isBuffer:Kt,isFormData:rn,isArrayBufferView:Gt,isString:Xt,isNumber:Xe,isBoolean:Qt,isObject:re,isPlainObject:M,isUndefined:U,isDate:Zt,isFile:Yt,isBlob:en,isRegExp:bn,isFunction:O,isStream:nn,isURLSearchParams:on,isTypedArray:pn,isFileList:tn,forEach:D,merge:fe,extend:an,trim:sn,stripBOM:cn,inherits:ln,toFlatObject:un,kindOf:te,kindOfTest:T,endsWith:fn,toArray:dn,forEachEntry:hn,matchAll:mn,isHTMLForm:yn,hasOwnProperty:je,hasOwnProp:je,reduceDescriptors:et,freezeMethods:wn,toObjectSet:Sn,toCamelCase:xn,noop:gn,toFiniteNumber:En,findKey:Qe,global:Ze,isContextDefined:Ye,ALPHABET:tt,generateString:Rn,isSpecCompliantForm:An,toJSONObject:On,isAsyncFn:Cn,isThenable:jn};function y(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const nt=y.prototype,rt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{rt[e]={value:e}});Object.defineProperties(y,rt);Object.defineProperty(nt,"isAxiosError",{value:!0});y.from=(e,t,n,r,o,s)=>{const i=Object.create(nt);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),y.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Tn=null;function de(e){return a.isPlainObject(e)||a.isArray(e)}function ot(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Pe(e,t,n){return e?e.concat(t).map(function(o,s){return o=ot(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Pn(e){return a.isArray(e)&&!e.some(de)}const Nn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function oe(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,R){return!a.isUndefined(R[m])});const r=n.metaTokens,o=n.visitor||c,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function h(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,m,R){let P=u;if(u&&!R&&typeof u=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&Pn(u)||(a.isFileList(u)||a.endsWith(m,"[]"))&&(P=a.toArray(u)))return m=ot(m),P.forEach(function(I,mt){!(a.isUndefined(I)||I===null)&&t.append(i===!0?Pe([m],mt,s):i===null?m:m+"[]",h(I))}),!1}return de(u)?!0:(t.append(Pe(R,m,s),h(u)),!1)}const p=[],b=Object.assign(Nn,{defaultVisitor:c,convertValue:h,isVisitable:de});function E(u,m){if(!a.isUndefined(u)){if(p.indexOf(u)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(u),a.forEach(u,function(P,C){(!(a.isUndefined(P)||P===null)&&o.call(t,P,a.isString(C)?C.trim():C,m,b))===!0&&E(P,m?m.concat(C):[C])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Ne(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Se(e,t){this._pairs=[],e&&oe(e,this,t)}const st=Se.prototype;st.append=function(t,n){this._pairs.push([t,n])};st.toString=function(t){const n=t?function(r){return t.call(this,r,Ne)}:Ne;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Fn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function it(e,t,n){if(!t)return e;const r=n&&n.encode||Fn,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new Se(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Bn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Fe=Bn,at={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vn=typeof URLSearchParams<"u"?URLSearchParams:Se,Ln=typeof FormData<"u"?FormData:null,_n=typeof Blob<"u"?Blob:null,kn=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Un=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),j={isBrowser:!0,classes:{URLSearchParams:vn,FormData:Ln,Blob:_n},isStandardBrowserEnv:kn,isStandardBrowserWebWorkerEnv:Un,protocols:["http","https","file","blob","url","data"]};function Dn(e,t){return oe(e,new j.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return j.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function $n(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function In(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function ct(e){function t(n,r,o,s){let i=n[s++];const l=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=In(o[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t($n(r),o,n,0)}),n}return null}function Mn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ge={transitional:at,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(ct(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Dn(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return oe(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),Mn(t)):t}],transformResponse:[function(t){const n=this.transitional||ge.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?y.from(l,y.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:j.classes.FormData,Blob:j.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ge.headers[e]={}});const Ee=ge,Hn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zn=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&Hn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Be=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function H(e){return e===!1||e==null?e:a.isArray(e)?e.map(H):String(e)}function qn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Jn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ae(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Vn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Wn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class se{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,d,h){const c=k(d);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(o,c);(!p||o[p]===void 0||h===!0||h===void 0&&o[p]!==!1)&&(o[p||d]=H(l))}const i=(l,d)=>a.forEach(l,(h,c)=>s(h,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Jn(t)?i(zn(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return qn(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ae(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=k(i),i){const l=a.findKey(r,i);l&&(!n||ae(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||ae(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=H(o),delete n[s];return}const l=t?Vn(s):String(s).trim();l!==s&&delete n[s],n[l]=H(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Be]=this[Be]={accessors:{}}).accessors,o=this.prototype;function s(i){const l=k(i);r[l]||(Wn(o,i),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}se.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(se.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(se);const N=se;function ce(e,t){const n=this||Ee,r=t||n,o=N.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function lt(e){return!!(e&&e.__CANCEL__)}function $(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits($,y,{__CANCEL__:!0});function Kn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Gn=j.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Xn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Qn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ut(e,t){return e&&!Xn(t)?Qn(e,t):t}const Zn=j.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=a.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Yn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function er(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const h=Date.now(),c=r[s];i||(i=h),n[o]=d,r[o]=h;let p=s,b=0;for(;p!==o;)b+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),h-i<t)return;const E=c&&h-c;return E?Math.round(b*1e3/E):void 0}}function ve(e,t){let n=0;const r=er(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,l=s-n,d=r(l),h=s<=i;n=s;const c={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&h?(i-s)/d:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const tr=typeof XMLHttpRequest<"u",nr=tr&&function(e){return new Promise(function(n,r){let o=e.data;const s=N.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let h;a.isFormData(o)&&(j.isStandardBrowserEnv||j.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?a.isString(h=s.getContentType())&&s.setContentType(h.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(u+":"+m))}const p=ut(e.baseURL,e.url);c.open(e.method.toUpperCase(),it(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const u=N.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),R={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};Kn(function(C){n(C),d()},function(C){r(C),d()},R),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const R=e.transitional||at;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new y(m,R.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},j.isStandardBrowserEnv){const u=(e.withCredentials||Zn(p))&&e.xsrfCookieName&&Gn.read(e.xsrfCookieName);u&&s.set(e.xsrfHeaderName,u)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(m,R){c.setRequestHeader(R,m)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ve(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ve(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{c&&(r(!u||u.type?new $(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const E=Yn(p);if(E&&j.protocols.indexOf(E)===-1){r(new y("Unsupported protocol "+E+":",y.ERR_BAD_REQUEST,e));return}c.send(o||null)})},pe={http:Tn,xhr:nr};a.forEach(pe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Le=e=>`- ${e}`,rr=e=>a.isFunction(e)||e===null||e===!1,ft={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){n=e[s];let i;if(r=n,!rr(n)&&(r=pe[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+s]=r}if(!r){const s=Object.entries(o).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(Le).join(`
`):" "+Le(s[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:pe};function le(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $(null,e)}function _e(e){return le(e),e.headers=N.from(e.headers),e.data=ce.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ft.getAdapter(e.adapter||Ee.adapter)(e).then(function(r){return le(e),r.data=ce.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return lt(r)||(le(e),r&&r.response&&(r.response.data=ce.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const ke=e=>e instanceof N?e.toJSON():e;function v(e,t){t=t||{};const n={};function r(h,c,p){return a.isPlainObject(h)&&a.isPlainObject(c)?a.merge.call({caseless:p},h,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function o(h,c,p){if(a.isUndefined(c)){if(!a.isUndefined(h))return r(void 0,h,p)}else return r(h,c,p)}function s(h,c){if(!a.isUndefined(c))return r(void 0,c)}function i(h,c){if(a.isUndefined(c)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,c)}function l(h,c,p){if(p in t)return r(h,c);if(p in e)return r(void 0,h)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(h,c)=>o(ke(h),ke(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=d[c]||o,b=p(e[c],t[c],c);a.isUndefined(b)&&p!==l||(n[c]=b)}),n}const dt="1.5.1",Re={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Re[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ue={};Re.transitional=function(t,n,r){function o(s,i){return"[Axios v"+dt+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new y(o(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Ue[i]&&(Ue[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function or(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const l=e[s],d=l===void 0||i(l,s,e);if(d!==!0)throw new y("option "+s+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+s,y.ERR_BAD_OPTION)}}const he={assertOptions:or,validators:Re},F=he.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new Fe,response:new Fe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=v(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&he.assertOptions(r,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:he.assertOptions(o,{encode:F.function,serialize:F.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete s[u]}),n.headers=N.concat(i,s);const l=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const h=[];this.interceptors.response.forEach(function(m){h.push(m.fulfilled,m.rejected)});let c,p=0,b;if(!d){const u=[_e.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,h),b=u.length,c=Promise.resolve(n);p<b;)c=c.then(u[p++],u[p++]);return c}b=l.length;let E=n;for(p=0;p<b;){const u=l[p++],m=l[p++];try{E=u(E)}catch(R){m.call(this,R);break}}try{c=_e.call(this,E)}catch(u){return Promise.reject(u)}for(p=0,b=h.length;p<b;)c=c.then(h[p++],h[p++]);return c}getUri(t){t=v(this.defaults,t);const n=ut(t.baseURL,t.url);return it(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(n,r){return this.request(v(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(v(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}q.prototype[t]=n(),q.prototype[t+"Form"]=n(!0)});const z=q;class Ae{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new $(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Ae(function(o){t=o}),cancel:t}}}const sr=Ae;function ir(e){return function(n){return e.apply(null,n)}}function ar(e){return a.isObject(e)&&e.isAxiosError===!0}const me={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(me).forEach(([e,t])=>{me[t]=e});const cr=me;function pt(e){const t=new z(e),n=Ke(z.prototype.request,t);return a.extend(n,z.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return pt(v(e,o))},n}const S=pt(Ee);S.Axios=z;S.CanceledError=$;S.CancelToken=sr;S.isCancel=lt;S.VERSION=dt;S.toFormData=oe;S.AxiosError=y;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=ir;S.isAxiosError=ar;S.mergeConfig=v;S.AxiosHeaders=N;S.formToJSON=e=>ct(a.isHTMLForm(e)?new FormData(e):e);S.getAdapter=ft.getAdapter;S.HttpStatusCode=cr;S.default=S;const ht=S;ht.defaults.baseURL="https://6531500a4d4c2e3f333cd38e.mockapi.io/api";const ur=async e=>{const t=new URLSearchParams(e);return(await ht.get(`/catalog?${t}`)).data},fr=({items:e})=>{const[t,n]=Vt("ids",[]),r=s=>t.includes(s),o=s=>{if(!~t.indexOf(s)){n(i=>[...i,s]);return}n(i=>t.filter(l=>l!==s))};return f.jsx(Jt,{children:e.map(s=>f.jsx(qt,{carInfo:s,favorite:r(s.id),toggleFavorite:o},s.id))})};export{Ve as B,fr as C,ht as a,ur as g,Vt as u};
