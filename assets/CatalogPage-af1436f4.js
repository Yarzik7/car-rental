import{r as i,n as r,j as e,i as L}from"./index-efdee4dc.js";import{g as A,B,C as F}from"./CarList-9af50a20.js";const O=o=>{const[l,s]=i.useState([]),[a,c]=i.useState(null),[d,u]=i.useState(0);return i.useEffect(()=>{const g=p=>{s(x=>[...x,...p]),u(p.length)},h=p=>{c(p)};A({page:o,limit:8}).then(g).catch(h)},[o]),{data:l,error:a,responseLength:d}},T=r.button`
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
`,z=({onClick:o})=>e.jsx(T,{onClick:o,children:"Load more"}),I=r.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
`,R=r.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--label-color);
`,M=r.input`
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
`,E=r(M)`
  padding-left: 50px;

  border-radius: 0px 14px 14px 0px;
`,P=r.div`
  display: flex;
  align-items: flex-end;
`,v=r.div`
  position: relative;
`,y=r.span`
  position: absolute;
  top: 14px;
  left: 24px;

  font-size: 18px;

  font-weight: 500;
  line-height: 1.11;
  color: var(--primary-text-color);
`,D=r.div`
  position: relative;
  width: ${({width:o})=>o};
  height: 48px;
`,$=r.div`
  position: relative;
`,V=r.input`
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
`,H=r.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--label-color);
`,N=r.svg`
  position: absolute;
  top: 14px;
  right: 18px;

  width: 20px;
  height: 20px;

  stroke: var(--primary-text-color);
  fill: none;
`,U=r.div`
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
`,K=r.ul`
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
`,G=r.li`
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
`,j=({text:o,value:l,getValue:s,toggleOptionsShow:a})=>{const c=d=>{s(l),console.log("select"),a(d)};return e.jsx(G,{onClick:c,children:o})},w=({width:o,placeholder:l,value:s,label:a,options:c,getValue:d,firstOptText:u,firstOptValue:g})=>{const[h,p]=i.useState(!1),x=i.useRef(null),f=n=>{console.log("t: ",n.target),console.log("cT: ",n.currentTarget),p(t=>!t)};return console.log(h),e.jsxs($,{children:[e.jsxs(H,{children:[a,e.jsxs(D,{width:o,children:[e.jsx(V,{ref:x,readOnly:!0,value:s,onClick:n=>f(n),placeholder:l}),e.jsx(N,{children:e.jsx("use",{xlinkHref:`${L}#icon-chevron`})})]})]}),h&&e.jsx(U,{children:e.jsxs(K,{children:[e.jsx(j,{text:u,value:g,getValue:d,toggleOptionsShow:f},0),c.map((n,t)=>e.jsx(j,{text:n,value:n,getValue:d,toggleOptionsShow:f},++t))]})})]})},W=({amount:o,step:l})=>new Array(o).fill(0).reduce((s,a,c)=>(s.push(++c*l),s),[]),_=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],q=({getFilter:o})=>{const[l,s]=i.useState(""),[a,c]=i.useState(""),[d,u]=i.useState(""),[g,h]=i.useState(""),p=()=>o({brand:l,price:a,toMileage:g,fromMileage:d}),x=({target:{name:n,value:t}})=>{switch(t=t&&Number(t.replaceAll(",","")),n){case"fromMileage":u(t);return;case"toMileage":h(t);return;default:return}},f=n=>{const{key:t}=n;!/[0-9]/.test(t)&&t!=="Backspace"&&t!=="ArrowRight"&&t!=="ArrowLeft"&&n.preventDefault()};return e.jsxs(I,{children:[e.jsx(w,{placeholder:l||"Enter the text",width:"224px",label:"Car brand",firstOptText:"All",firstOptValue:"",options:_,getValue:s}),e.jsx(w,{placeholder:"To $",value:`To ${a}$`,width:"125px",label:"Price/ 1 hour",firstOptText:"All",firstOptValue:"",options:W({amount:50,step:10}),getValue:c}),e.jsxs(P,{children:[e.jsxs(R,{children:["Car mileage / km",e.jsxs(v,{children:[e.jsx(M,{name:"fromMileage",onKeyDown:f,value:d.toLocaleString("en-US"),onChange:x}),e.jsx(y,{children:"From"})]})]}),e.jsxs(v,{children:[e.jsx(E,{name:"toMileage",value:g.toLocaleString("en-US"),onChange:x}),e.jsx(y,{children:"To"})]})]}),e.jsx(B,{caption:"Search",styles:{width:"136px",height:"48px"},onClick:p})]})},X=()=>{const[o,l]=i.useState(1),[s,a]=i.useState(""),[c,d]=i.useState([]),{data:u,responseLength:g}=O(o);i.useEffect(()=>{d(h(u,s))},[s,u]);function h(x,f){const{brand:n,price:t,fromMileage:b,toMileage:S}=f;return x.filter(({make:k,rentalPrice:C,mileage:m})=>!(n&&k.toLowerCase()!==n.toLowerCase()||t&&C.match(/(\d+)/)[0]>t||b&&m<b||S&&m>S))}const p=()=>{l(x=>x+1)};return e.jsxs(e.Fragment,{children:[e.jsx(q,{getFilter:a}),e.jsx(F,{items:c}),!(g<8)&&e.jsx(z,{onClick:p})]})};export{X as default};
