import{R as a,c as g,w as h,a as E,r as u,j as c,t as L,u as B,s as C,g as P,S as A,p as v,b as I,d as x,_ as K,e as T,f as _}from"./index.d897f267.js";const m="adm-badge",S=a.createElement(a.Fragment,null),R=e=>{const{content:t,color:l,children:n}=e,r=t===S,d=g(m,!!n&&`${m}-fixed`,r&&`${m}-dot`,e.bordered&&`${m}-bordered`),p=t||t===0?h(e,a.createElement("div",{className:d,style:{"--color":l}},!r&&a.createElement("div",{className:`${m}-content`},t))):null;return n?a.createElement("div",{className:g(`${m}-wrapper`,e.wrapperClassName),style:e.wrapperStyle},n,p):p};var D=E(R,{dot:S});const y=u.exports.memo(e=>h(e,c("svg",{viewBox:"0 0 30 30",children:c("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:c("path",{d:"M30,0 C13.4314575,3.04359188e-15 -2.02906125e-15,13.4314575 0,30 L0,30 L0,0 Z",fill:"var(--adm-color-background)",transform:"translate(15.000000, 15.000000) scale(-1, -1) translate(-15.000000, -15.000000) "})})}))),s="adm-side-bar",j=()=>null,z=e=>{var t;let l=null;const n=[];L(e.children,(i,o)=>{if(!a.isValidElement(i))return;const f=i.key;typeof f=="string"&&(o===0&&(l=f),n.push(i))});const[r,d]=B({value:e.activeKey,defaultValue:(t=e.defaultActiveKey)!==null&&t!==void 0?t:l,onChange:i=>{var o;i!==null&&((o=e.onChange)===null||o===void 0||o.call(e,i))}}),p=n[n.length-1],b=p&&p.key===r;return h(e,a.createElement("div",{className:s},a.createElement("div",{className:`${s}-items`},n.map((i,o)=>{const f=i.key===r,k=n[o-1]&&n[o-1].key===r,w=n[o+1]&&n[o+1].key===r;return h(i.props,a.createElement("div",{key:i.key,onClick:()=>{const{key:$}=i;$==null||i.props.disabled||d($.toString())},className:g(`${s}-item`,{[`${s}-item-active`]:f,[`${s}-item-disabled`]:i.props.disabled})},a.createElement(a.Fragment,null,k&&a.createElement(y,{className:`${s}-item-corner ${s}-item-corner-top`}),w&&a.createElement(y,{className:`${s}-item-corner ${s}-item-corner-bottom`})),a.createElement(D,{content:i.props.badge,className:`${s}-badge`},a.createElement("div",{className:`${s}-item-title`},f&&a.createElement("div",{className:`${s}-item-highlight`}),i.props.title))))})),a.createElement("div",{className:g(`${s}-extra-space`,b&&`${s}-item-active-next-sibling`)},b&&a.createElement(y,{className:`${s}-item-corner ${s}-item-corner-top`}))))};var N=E(z,{Item:j});const V=C.div`
`,W=e=>({type:A,data:e}),F=()=>e=>{P().then(t=>{const l=W(t);e(l)})},q=C.div`
    display:flex;
    .adm-side-bar{
        position: fixed;
        .chosed{
            font-size: ${v(14)};
            font-weight: 700;
        }
    }
    
    .sidebar-content{
        flex:1;
        margin-left:${v(80)};
        .content {
            display: none;
            &.active {
                display: flex;
                flex-wrap: wrap;               
            }
            .content-item{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: ${v(80)};
                margin: ${v(5)} ${v(9)};
                font-size:${I["font-size-s"]} ;
                .cate-img{                  
                }               
            }
        }
    }
   
`,M=e=>{const{cateList:t}=e,[l,n]=u.exports.useState("");return u.exports.useEffect(()=>{t.length>0&&n(""+t[0].id)},[t]),x(q,{children:[c(N,{activeKey:l,onChange:n,style:{"--width":`${v(80)}`,"--background-color":"#f8f8f8"},children:t.map(r=>c(N.Item,{title:r.name},r.id))}),c("div",{className:"sidebar-content",children:t.map(r=>c("div",{className:g({content:!0},{active:l==`${r.id}`}),children:r.subCateList.map(d=>x("div",{className:"content-item",children:[c("div",{className:"cate-img",children:c(K,{placeholder:c("img",{width:"100%",height:"100%",src:T}),children:c("img",{src:d.wapBannerUrl,alt:"",width:"100%",height:"100%"})})}),c("div",{children:d.name})]},d.id))},r.id))})]})};var U=u.exports.memo(M);const Z=e=>{const{cateList:t}=e,{getCateListDispatch:l}=e;return u.exports.useEffect(()=>{l()},[]),c(V,{children:c(U,{cateList:t})})},G=e=>({cateList:e.partitions.cateList}),H=e=>({getCateListDispatch(){e(F())}});var O=u.exports.memo(_(G,H)(Z));export{O as default};
