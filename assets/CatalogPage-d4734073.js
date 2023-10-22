import{r as n,n as r,j as e,i as L}from"./index-30eef320.js";import{g as B,B as F,C as A}from"./CarList-a11bd8bf.js";const O=t=>{const[s,i]=n.useState([]),[a,c]=n.useState(null),[d,h]=n.useState(0);return n.useEffect(()=>{const g=l=>{i(p=>[...p,...l]),h(l.length)},f=l=>{c(l)};B({page:t,limit:8}).then(g).catch(f)},[t]),{data:s,error:a,responseLength:d}},I=r.button`
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
`,T=({onClick:t})=>e.jsx(I,{onClick:t,children:"Load more"}),z=r.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
`,E=r.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--label-color);
`,C=r.input`
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
`,R=r(C)`
  padding-left: 50px;

  border-radius: 0px 14px 14px 0px;
`,P=r.div`
  display: flex;
  align-items: flex-end;
`,j=r.div`
  position: relative;
`,w=r.span`
  position: absolute;
  top: 14px;
  left: 24px;

  font-size: 18px;

  font-weight: 500;
  line-height: 1.11;
  color: var(--primary-text-color);
`,$=r.div`
  position: relative;
  width: ${({width:t})=>t};
  height: 48px;
`,D=r.div`
  position: relative;
`,V=r.button`
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
  top: 78px;
  left: 0;

  width: 100%;
  height: 272px;
  padding: 14px 0;
  padding-right: 8px;

  border-radius: 14px;
  border: 1px solid var(--secondary-text-color);
  background-color: var(--button-text-color);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  z-index: 999;
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
`,M=({text:t,value:s,getValue:i,toggleOptionsShow:a,blur:c})=>{const d=()=>{i(s),a(),c()};return e.jsx(G,{onClick:d,children:t})},k=({width:t,placeholder:s,value:i,label:a,options:c,getValue:d,firstOptText:h,firstOptValue:g})=>{const[f,l]=n.useState(!1),p=n.useRef(null),b=()=>l(u=>!u),x=()=>p.current.blur(),o=u=>()=>setTimeout(u,100),S=()=>l(!0),m=()=>l(!1),y=u=>{u.currentTarget===u.target&&b(),f&&x()};return e.jsxs(D,{children:[e.jsxs(H,{children:[a,e.jsxs($,{width:t,children:[e.jsx(V,{ref:p,tabIndex:0,onClick:y,onFocus:o(S),onBlur:o(m),placeholder:s,children:i}),e.jsx(N,{children:e.jsx("use",{xlinkHref:`${L}#icon-chevron`})})]})]}),f&&e.jsx(U,{children:e.jsxs(K,{children:[e.jsx(M,{text:h,value:g,getValue:d,toggleOptionsShow:b,blur:x},0),c.map((u,v)=>e.jsx(M,{text:u,value:u,getValue:d,toggleOptionsShow:b,blur:x},++v))]})})]})},W=({amount:t,step:s})=>new Array(t).fill(0).reduce((i,a,c)=>(i.push(++c*s),i),[]),_=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],q=({getFilter:t})=>{const[s,i]=n.useState(""),[a,c]=n.useState(""),[d,h]=n.useState(""),[g,f]=n.useState(""),l=()=>t({brand:s,price:a,toMileage:g,fromMileage:d}),p=({target:{name:x,value:o}})=>{switch(o=o&&Number(o.replaceAll(",","")),x){case"fromMileage":h(o);return;case"toMileage":f(o);return;default:return}},b=x=>{const{key:o}=x;!/[0-9]/.test(o)&&o!=="Backspace"&&o!=="ArrowRight"&&o!=="ArrowLeft"&&x.preventDefault()};return e.jsxs(z,{children:[e.jsx(k,{placeholder:s||"Enter the text",value:s||"Enter the text",width:"224px",label:"Car brand",firstOptText:"All",firstOptValue:"",options:_,getValue:i}),e.jsx(k,{placeholder:"To $",value:`To ${a}$`,width:"125px",label:"Price/ 1 hour",firstOptText:"All",firstOptValue:"",options:W({amount:50,step:10}),getValue:c}),e.jsxs(P,{children:[e.jsxs(E,{children:["Car mileage / km",e.jsxs(j,{children:[e.jsx(C,{name:"fromMileage",onKeyDown:b,value:d.toLocaleString("en-US"),onChange:p}),e.jsx(w,{children:"From"})]})]}),e.jsxs(j,{children:[e.jsx(R,{name:"toMileage",value:g.toLocaleString("en-US"),onChange:p}),e.jsx(w,{children:"To"})]})]}),e.jsx(F,{caption:"Search",styles:{width:"136px",height:"48px"},onClick:l})]})},X=()=>{const[t,s]=n.useState(1),[i,a]=n.useState(""),[c,d]=n.useState([]),{data:h,responseLength:g}=O(t);n.useEffect(()=>{d(f(h,i))},[i,h]);function f(p,b){const{brand:x,price:o,fromMileage:S,toMileage:m}=b;return p.filter(({make:y,rentalPrice:u,mileage:v})=>!(x&&y.toLowerCase()!==x.toLowerCase()||o&&u.match(/(\d+)/)[0]>o||S&&v<S||m&&v>m))}const l=()=>s(p=>p+1);return e.jsxs(e.Fragment,{children:[e.jsx(q,{getFilter:a}),e.jsx(A,{items:c}),!(g<8)&&e.jsx(T,{onClick:l})]})};export{X as default};
