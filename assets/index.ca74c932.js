import{r as s,d as u,E as x,j as e,a1 as c,I as i}from"./index.d897f267.js";const r=[{key:"fruits",title:"\u6C34\u679C"},{key:"vegetables",title:"\u852C\u83DC"},{key:"animals",title:"\u52A8\u7269"}],p=()=>{const a=s.exports.useRef(null),[n,l]=s.exports.useState(1);return s.exports.useEffect(()=>{console.log(r[n].key)},[n]),u(x,{children:[e(c,{activeKey:r[n].key,onChange:t=>{var o;const d=r.findIndex(h=>h.key===t);l(d),(o=a.current)==null||o.swipeTo(d)},children:r.map(t=>e(c.Tab,{title:t.title},t.key))}),u(i,{direction:"horizontal",loop:!0,indicator:()=>null,ref:a,defaultIndex:n,onIndexChange:t=>{l(t)},children:[e(i.Item,{children:e("div",{children:"\u83E0\u841D"})}),e(i.Item,{children:e("div",{children:"\u897F\u7EA2\u67FF"})}),e(i.Item,{children:e("div",{children:"\u8682\u8681"})})]})]})};export{p as default};