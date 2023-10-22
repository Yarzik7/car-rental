import{r,n,j as e,i as y}from"./index-d55ba480.js";import{g as v,B as w,C as j}from"./CarList-ce9c6606.js";const k=t=>{const[s,o]=r.useState([]),[a,l]=r.useState(null),[g,x]=r.useState(0);return r.useEffect(()=>{const h=i=>{o(u=>[...u,...i]),x(i.length)},c=i=>{l(i)};v({page:t,limit:8}).then(h).catch(c)},[t]),{data:s,error:a,responseLength:g}},M=n.button`
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
`,L=({onClick:t})=>e.jsx(M,{onClick:t,children:"Load more"}),C=n.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
`,O=n.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--label-color);
`,m=n.input`
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
`,B=n(m)`
  border-radius: 0px 14px 14px 0px;
`,F=n.div`
  display: flex;
  align-items: flex-end;
`;n.div`
  position: relative;
  width: ${({width:t})=>t};
  height: 48px;
`;const A=n.button`
  position: relative;

  display: flex;
  align-items: center;
  width: ${({width:t})=>t};
  height: 48px;
  padding: 0 18px;

  font-size: 18px;
  font-weight: 500;
  color: var(--primary-text-color);

  border-radius: 14px;
  background-color: var(--bg-select-color);
  border: none;

  cursor: pointer;
  outline: none;
`,z=n.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--label-color);
`,E=n.svg`
  position: absolute;
  top: 14px;
  right: 18px;

  width: 20px;
  height: 20px;

  stroke: var(--primary-text-color);
  fill: none;
`,P=n.div`
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
`,R=n.ul`
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
`,T=n.li`
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
`,b=({text:t,value:s,getValue:o,toggleOptionsShow:a})=>{const l=()=>{o(s),console.log("select")};return e.jsx(T,{onClick:l,children:t})},S=({width:t,placeholder:s,label:o,options:a,getValue:l,firstOptText:g,firstOptValue:x})=>{const[h,c]=r.useState(!1),i=r.useRef(null),u=d=>{console.log("t: ",d.target),console.log("cT: ",d.currentTarget),c(p=>!p)};return e.jsxs(z,{children:[o,e.jsxs(A,{width:t,ref:i,onClick:d=>{console.log("click"),u(d)},onBlur:()=>{c(!1)},children:[s,e.jsx(E,{children:e.jsx("use",{xlinkHref:`${y}#icon-chevron`})}),h&&e.jsx(P,{children:e.jsxs(R,{children:[e.jsx(b,{text:g,value:x,getValue:l,toggleOptionsShow:c},0),a.map((d,p)=>e.jsx(b,{text:d,value:d,getValue:l,toggleOptionsShow:c},++p))]})})]})]})},I=({amount:t,step:s})=>new Array(t).fill(0).reduce((o,a,l)=>(o.push(++l*s),o),[]),N=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],D=({getFilter:t})=>{const[s,o]=r.useState(""),[a,l]=r.useState(""),[g,x]=r.useState(""),[h,c]=r.useState(""),i=()=>t({brand:s,price:a}),u=({target:{name:p,value:f}})=>{switch(p){case"fromMileage":x(f.replace(",",""));return;case"toMileage":c(f.replace(",",""));return;default:return}},d=p=>{!/[0-9]/.test(p.key)&&p.key!=="Backspace"&&p.preventDefault()};return e.jsxs(C,{children:[e.jsx(S,{placeholder:s||"Enter the text",width:"224px",label:"Car brand",firstOptText:"All",firstOptValue:"",options:N,getValue:o}),e.jsx(S,{placeholder:a||"To $",width:"125px",label:"Price/ 1 hour",firstOptText:"All",firstOptValue:"",options:I({amount:50,step:10}),getValue:l}),e.jsxs(F,{children:[e.jsxs(O,{children:["Car mileage / km",e.jsx(m,{name:"fromMileage",onKeyDown:d,value:Number(g).toLocaleString("en-US"),onChange:u})]}),e.jsx(B,{name:"toMileage",value:Number(h).toLocaleString("en-US"),onChange:u})]}),e.jsx(w,{caption:"Search",styles:{width:"136px",height:"48px"},onClick:i})]})},H=()=>{const[t,s]=r.useState(1),[o,a]=r.useState(""),[l,g]=r.useState([]),{data:x,responseLength:h}=k(t);r.useEffect(()=>{g(x.filter(({make:i,rentalPrice:u})=>i.includes(o.brand)&&Number(u.match(/(\d+)/)[0])<=o.price||!o.price))},[o,x]);const c=()=>{s(i=>i+1)};return e.jsxs(e.Fragment,{children:[e.jsx(D,{getFilter:a}),e.jsx(j,{items:l}),!(h<8)&&e.jsx(L,{onClick:c})]})};export{H as default};
