import{r as o,n as r,j as e,i as j}from"./index-f105d622.js";import{g as w,B as k,C as M}from"./CarList-72e8b4b7.js";const C=t=>{const[s,n]=o.useState([]),[c,l]=o.useState(null),[x,u]=o.useState(0);return o.useEffect(()=>{const g=p=>{n(i=>[...i,...p]),u(p.length)},h=p=>{l(p)};w({page:t,limit:8}).then(g).catch(h)},[t]),{data:s,error:c,responseLength:x}},L=r.button`
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
`,B=({onClick:t})=>e.jsx(L,{onClick:t,children:"Load more"}),O=r.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
`,A=r.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--label-color);
`,S=r.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
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
`,F=r(S)`
  border-radius: 0px 14px 14px 0px;
`,T=r.div`
  display: flex;
  align-items: flex-end;
`,z=r.div`
  position: relative;
  width: ${({width:t})=>t};
  height: 48px;
`,E=r.div`
  position: relative;
`,P=r.input`
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
`,R=r.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--label-color);
`,I=r.svg`
  position: absolute;
  top: 14px;
  right: 18px;

  width: 20px;
  height: 20px;

  stroke: var(--primary-text-color);
  fill: none;
`,D=r.div`
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
`,N=r.ul`
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
`,V=r.li`
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
`,b=({text:t,value:s,getValue:n,toggleOptionsShow:c})=>{const l=x=>{n(s),console.log("select"),c(x)};return e.jsx(V,{onClick:l,children:t})},m=({width:t,placeholder:s,label:n,options:c,getValue:l,firstOptText:x,firstOptValue:u})=>{const[g,h]=o.useState(!1),p=o.useRef(null),i=d=>{console.log("t: ",d.target),console.log("cT: ",d.currentTarget),h(a=>!a)};return console.log(g),e.jsxs(E,{children:[e.jsxs(R,{children:[n,e.jsxs(z,{width:t,children:[e.jsx(P,{ref:p,readOnly:!0,onClick:d=>i(d),placeholder:s}),e.jsx(I,{children:e.jsx("use",{xlinkHref:`${j}#icon-chevron`})})]})]}),g&&e.jsx(D,{children:e.jsxs(N,{children:[e.jsx(b,{text:x,value:u,getValue:l,toggleOptionsShow:i},0),c.map((d,a)=>e.jsx(b,{text:d,value:d,getValue:l,toggleOptionsShow:i},++a))]})})]})},H=({amount:t,step:s})=>new Array(t).fill(0).reduce((n,c,l)=>(n.push(++l*s),n),[]),K=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],U=({getFilter:t})=>{const[s,n]=o.useState(""),[c,l]=o.useState(""),[x,u]=o.useState(""),[g,h]=o.useState(""),p=()=>t({brand:s,price:c}),i=({target:{name:a,value:f}})=>{switch(a){case"fromMileage":u(f.replace(",",""));return;case"toMileage":h(f.replace(",",""));return;default:return}},d=a=>{!/[0-9]/.test(a.key)&&a.key!=="Backspace"&&a.preventDefault()};return e.jsxs(O,{children:[e.jsx(m,{placeholder:s||"Enter the text",width:"224px",label:"Car brand",firstOptText:"All",firstOptValue:"",options:K,getValue:n}),e.jsx(m,{placeholder:c||"To $",width:"125px",label:"Price/ 1 hour",firstOptText:"All",firstOptValue:"",options:H({amount:50,step:10}),getValue:l}),e.jsxs(T,{children:[e.jsxs(A,{children:["Car mileage / km",e.jsx(S,{name:"fromMileage",onKeyDown:d,value:Number(x).toLocaleString("en-US"),onChange:i})]}),e.jsx(F,{name:"toMileage",value:Number(g).toLocaleString("en-US"),onChange:i})]}),e.jsx(k,{caption:"Search",styles:{width:"136px",height:"48px"},onClick:p})]})},W=()=>{const[t,s]=o.useState(1),[n,c]=o.useState(""),[l,x]=o.useState([]),{data:u,responseLength:g}=C(t);o.useEffect(()=>{x(h(u,n))},[n,u]);function h(i,d){const{brand:a,price:f}=d;return i.filter(({make:v,rentalPrice:y})=>!(a&&v.toLowerCase()!==a.toLowerCase()||f&&y.match(/(\d+)/)[0]>f))}const p=()=>{s(i=>i+1)};return e.jsxs(e.Fragment,{children:[e.jsx(U,{getFilter:c}),e.jsx(M,{items:l}),!(g<8)&&e.jsx(B,{onClick:p})]})};export{W as default};
