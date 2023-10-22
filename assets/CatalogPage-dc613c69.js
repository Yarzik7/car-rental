import{r,n as a,j as t,i as S}from"./index-3dd5d1aa.js";import{g as v,u as m,C as w}from"./CarList-3624fcb5.js";const y=e=>{const[n,o]=r.useState([]),[l,s]=r.useState(null),[u,p]=r.useState(0);return r.useEffect(()=>{const x=i=>{o(h=>[...h,...i]),p(i.length)},c=i=>{s(i)};v({page:e,limit:8}).then(x).catch(c)},[e]),{data:n,error:l,responseLength:u}},j=a.button`
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
`,k=({onClick:e})=>t.jsx(j,{onClick:e,children:"Load more"}),L=a.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 50px;
`;a.div`
  position: relative;
  width: ${({width:e})=>e};
  height: 48px;
`;const C=a.button`
  position: relative;

  display: flex;
  align-items: center;
  width: ${({width:e})=>e};
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
`,O=a.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--label-color);
`,M=a.svg`
  position: absolute;
  top: 14px;
  right: 18px;

  width: 20px;
  height: 20px;

  stroke: var(--primary-text-color);
  fill: none;
`,A=a.div`
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
`,B=a.ul`
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
`,E=a.li`
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
`,b=({text:e,value:n,getValue:o,toggleOptionsShow:l})=>{const s=()=>{o(n),console.log("select")};return t.jsx(E,{onClick:s,children:e})},f=({width:e,placeholder:n,label:o,options:l,getValue:s,firstOptText:u,firstOptValue:p})=>{const[x,c]=r.useState(!1),i=r.useRef(null),h=d=>{console.log("t: ",d.target),console.log("cT: ",d.currentTarget),c(g=>!g)};return t.jsxs(O,{children:[o,t.jsxs(C,{width:e,ref:i,onClick:d=>{console.log("click"),h(d)},onBlur:()=>{c(!1)},children:[n,t.jsx(M,{children:t.jsx("use",{xlinkHref:`${S}#icon-chevron`})}),x&&t.jsx(A,{children:t.jsxs(B,{children:[t.jsx(b,{text:u,value:p,getValue:s,toggleOptionsShow:c},0),l.map((d,g)=>t.jsx(b,{text:d,value:d,getValue:s,toggleOptionsShow:c},++g))]})})]})]})},F=({amount:e,step:n})=>new Array(e).fill(0).reduce((o,l,s)=>(o.push(++s*n),o),[]),R=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],P=({getFilter:e})=>{const[n,o]=r.useState(""),[l,s]=r.useState("");return r.useState(""),r.useState(""),r.useEffect(()=>{e({brand:n,price:l})},[l,n,e]),t.jsxs(L,{children:[t.jsx(f,{placeholder:n||"Enter the text",width:"224px",label:"Car brand",firstOptText:"All",firstOptValue:"",options:R,getValue:o}),t.jsx(f,{placeholder:l||"To $",width:"125px",label:"Price/ 1 hour",firstOptText:"All",firstOptValue:"",options:F({amount:50,step:10}),getValue:s})]})},I=()=>{const[e,n]=r.useState(1);m("ids",[]);const[o,l]=r.useState(""),[s,u]=r.useState([]),{data:p,responseLength:x}=y(e);console.log("filter: ",o),r.useEffect(()=>{u(p.filter(({make:i,rentalPrice:h})=>i.includes(o.brand)&&Number(h.match(/(\d+)/)[0])<=o.price||!o.price))},[o,p]);const c=()=>{n(i=>i+1)};return t.jsxs(t.Fragment,{children:[t.jsx(P,{getFilter:l}),t.jsx(w,{items:s}),!(x<8)&&t.jsx(k,{onClick:c})]})};export{I as default};
