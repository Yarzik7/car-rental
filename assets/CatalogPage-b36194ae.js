import{r as n,n as o,j as e,i as k}from"./index-34829251.js";import{g as A,B,C as F}from"./CarList-ca83ea5e.js";const O=t=>{const[s,i]=n.useState([]),[c,l]=n.useState(null),[p,h]=n.useState(0);return n.useEffect(()=>{const g=x=>{i(a=>[...a,...x]),h(x.length)},f=x=>{l(x)};A({page:t,limit:8}).then(g).catch(f)},[t]),{data:s,error:c,responseLength:p}},T=o.button`
  display: block;
  margin: 0 auto;
  margin-top: 100px;

  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  color: var(--accent-color);

  background-color: transparent;
  border: none;

  outline: none;
  cursor: pointer;
`,z=({onClick:t})=>e.jsx(T,{onClick:t,children:"Load more"}),I=o.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
`,R=o.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--label-color);
`,M=o.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 70px;
  padding-right: 10px;
  width: 160px;
  height: 48px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: var(--primary-text-color);

  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  background-color: var(--bg-select-color);

  cursor: pointer;
  outline: none;
`,E=o(M)`
  padding-left: 50px;

  border-radius: 0px 14px 14px 0px;
`,P=o.div`
  display: flex;
  align-items: flex-end;
`,v=o.div`
  position: relative;
`,y=o.span`
  position: absolute;
  top: 14px;
  left: 24px;

  font-size: 18px;

  font-weight: 500;
  line-height: 1.11;
  color: var(--primary-text-color);
`,D=o.div`
  position: relative;
  width: ${({width:t})=>t};
  height: 48px;
`,V=o.div`
  position: relative;
`,H=o.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 18px;

  font-size: 18px;
  font-weight: 500;
  color: var(--primary-text-color);

  border-radius: 14px;
  background-color: var(--bg-select-color);
  border: none;

  cursor: pointer;
  outline: none;

  &::placeholder {
    color: var(--primary-text-color);
  }
`,N=o.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--label-color);
`,U=o.svg`
  position: absolute;
  top: 14px;
  right: 18px;

  width: 20px;
  height: 20px;

  stroke: var(--primary-text-color);
  fill: none;
`,$=o.div`
  position: absolute;
  top: 52px;
  left: 0;

  width: 100%;
  height: 272px;
  padding: 14px 0;
  padding-right: 8px;

  border-radius: 14px;
  border: 1px solid var(--secondary-text-color);
  background-color: var(--button-text-color);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  z-index: 1;
`,K=o.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;

  cursor: auto;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--select-text-color);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--label-color);
  }
`,G=o.li`
  padding-left: 18px;

  font-weight: 500;
  line-height: 1.25;
  color: var(--select-text-color);
  text-align: left;

  transition: color var(--timing-function) var(--transition-duration);
  cursor: pointer;

  &:hover {
    color: var(--primary-text-color);
  }
`,j=({text:t,value:s,getValue:i,toggleOptionsShow:c})=>{const l=p=>{i(s),console.log("select"),c(p)};return e.jsx(G,{onClick:l,children:t})},w=({width:t,placeholder:s,label:i,options:c,getValue:l,firstOptText:p,firstOptValue:h})=>{const[g,f]=n.useState(!1),x=n.useRef(null),a=d=>{console.log("t: ",d.target),console.log("cT: ",d.currentTarget),f(r=>!r)};return console.log(g),e.jsxs(V,{children:[e.jsxs(N,{children:[i,e.jsxs(D,{width:t,children:[e.jsx(H,{ref:x,readOnly:!0,onClick:d=>a(d),placeholder:s}),e.jsx(U,{children:e.jsx("use",{xlinkHref:`${k}#icon-chevron`})})]})]}),g&&e.jsx($,{children:e.jsxs(K,{children:[e.jsx(j,{text:p,value:h,getValue:l,toggleOptionsShow:a},0),c.map((d,r)=>e.jsx(j,{text:d,value:d,getValue:l,toggleOptionsShow:a},++r))]})})]})},W=({amount:t,step:s})=>new Array(t).fill(0).reduce((i,c,l)=>(i.push(++l*s),i),[]),_=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],q=({getFilter:t})=>{const[s,i]=n.useState(""),[c,l]=n.useState(""),[p,h]=n.useState(""),[g,f]=n.useState(""),x=()=>t({brand:s,price:c,toMileage:g,fromMileage:p}),a=({target:{name:r,value:u}})=>{switch(u=u&&Number(u.replaceAll(",","")),r){case"fromMileage":h(u);return;case"toMileage":f(u);return;default:return}},d=({key:r,preventDefault:u})=>{!/[0-9]/.test(r)&&r!=="Backspace"&&r!=="ArrowRight"&&r!=="ArrowLeft"&&(console.log(r),u())};return e.jsxs(I,{children:[e.jsx(w,{placeholder:s||"Enter the text",width:"224px",label:"Car brand",firstOptText:"All",firstOptValue:"",options:_,getValue:i}),e.jsx(w,{placeholder:c||"To $",width:"125px",label:"Price/ 1 hour",firstOptText:"All",firstOptValue:"",options:W({amount:50,step:10}),getValue:l}),e.jsxs(P,{children:[e.jsxs(R,{children:["Car mileage / km",e.jsxs(v,{children:[" ",e.jsx(M,{name:"fromMileage",onKeyDown:d,value:p.toLocaleString("en-US"),onChange:a}),e.jsx(y,{children:"From"})]})]}),e.jsxs(v,{children:[e.jsx(E,{name:"toMileage",value:g.toLocaleString("en-US"),onChange:a}),e.jsx(y,{children:"To"})]})]}),e.jsx(B,{caption:"Search",styles:{width:"136px",height:"48px"},onClick:x})]})},X=()=>{const[t,s]=n.useState(1),[i,c]=n.useState(""),[l,p]=n.useState([]),{data:h,responseLength:g}=O(t);n.useEffect(()=>{p(f(h,i))},[i,h]);function f(a,d){const{brand:r,price:u,fromMileage:b,toMileage:S}=d;return a.filter(({make:C,rentalPrice:L,mileage:m})=>!(r&&C.toLowerCase()!==r.toLowerCase()||u&&L.match(/(\d+)/)[0]>u||b&&m<b||S&&m>S))}const x=()=>{s(a=>a+1)};return e.jsxs(e.Fragment,{children:[e.jsx(q,{getFilter:c}),e.jsx(F,{items:l}),!(g<8)&&e.jsx(z,{onClick:x})]})};export{X as default};
