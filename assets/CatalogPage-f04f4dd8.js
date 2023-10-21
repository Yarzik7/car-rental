import{r,n as a,j as t,i as S}from"./index-23e13716.js";import{g as w,u as m,C as j}from"./CarList-ffb89c6f.js";const y=e=>{const[s,o]=r.useState([]),[i,n]=r.useState(null),[u,p]=r.useState(0);return r.useEffect(()=>{const h=l=>{o(g=>[...g,...l]),p(l.length)},c=l=>{n(l)};w({page:e,limit:8}).then(h).catch(c)},[e]),{data:s,error:i,responseLength:u}},k=a.button`
  display: block;
  margin: 0 auto;
  margin-top: 100px;

  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  color: #3470ff;

  background-color: transparent;
  border: none;

  outline: none;
  cursor: pointer;
`,v=({onClick:e})=>t.jsx(k,{onClick:e,children:"Load more"}),L=a.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 50px;
`;a.option`
  background-color: #f9f9f9;
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
  color: #121417;

  border-radius: 14px;
  background-color: #f7f7fb;
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
  color: #8a8a89;
`,M=a.svg`
  position: absolute;
  top: 14px;
  right: 18px;

  width: 20px;
  height: 20px;

  stroke: #121417;
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
  border: 1px solid rgba(18, 20, 23, 0.05);
  background-color: #fff;
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
    background-color: rgba(18, 20, 23, 0.05);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: grey;
  }
`,E=a.li`
  padding-left: 18px;

  font-weight: 500;
  line-height: 1.25;
  color: rgba(18, 20, 23, 0.2);
  text-align: left;

  transition: color cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
  cursor: pointer;

  &:hover {
    color: #121417;
  }
`,f=({text:e,value:s,getValue:o,toggleOptionsShow:i})=>{const n=()=>{o(s),console.log("select")};return t.jsx(E,{onClick:n,children:e})},b=({width:e,placeholder:s,label:o,options:i,getValue:n,firstOptText:u,firstOptValue:p})=>{const[h,c]=r.useState(!1),l=r.useRef(null),g=d=>{console.log("t: ",d.target),console.log("cT: ",d.currentTarget),c(x=>!x)};return t.jsxs(O,{children:[o,t.jsxs(C,{width:e,ref:l,onClick:d=>{console.log("click"),g(d)},onBlur:()=>{c(!1)},children:[s,t.jsx(M,{children:t.jsx("use",{xlinkHref:`${S}#icon-chevron`})}),h&&t.jsx(A,{children:t.jsxs(B,{children:[t.jsx(f,{text:u,value:p,getValue:n,toggleOptionsShow:c},0),i.map((d,x)=>t.jsx(f,{text:d,value:d,getValue:n,toggleOptionsShow:c},++x))]})})]})]})},F=({amount:e,step:s})=>new Array(e).fill(0).reduce((o,i,n)=>(o.push(++n*s),o),[]),R=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],z=({getFilter:e})=>{const[s,o]=r.useState(""),[i,n]=r.useState("");return r.useState(""),r.useState(""),r.useEffect(()=>{e({brand:s,price:i})},[i,s,e]),t.jsxs(L,{children:[t.jsx(b,{placeholder:s||"Enter the text",width:"224px",label:"Car brand",firstOptText:"All",firstOptValue:"",options:R,getValue:o}),t.jsx(b,{placeholder:i||"To $",width:"125px",label:"Price/ 1 hour",firstOptText:"All",firstOptValue:"",options:F({amount:50,step:10}),getValue:n})]})},I=()=>{const[e,s]=r.useState(1);m("ids",[]);const[o,i]=r.useState(""),[n,u]=r.useState([]),{data:p,responseLength:h}=y(e);console.log("filter: ",o),r.useEffect(()=>{u(p.filter(({make:l,rentalPrice:g})=>l.includes(o.brand)&&Number(g.match(/(\d+)/)[0])<=o.price||!o.price))},[o,p]);const c=()=>{s(l=>l+1)};return t.jsxs(t.Fragment,{children:[t.jsx(z,{getFilter:i}),t.jsx(j,{items:n}),!(h<8)&&t.jsx(v,{onClick:c})]})};export{I as default};
