import{$ as d,a0 as h,s as p,p as s,r as o,f as m,O as g,j as t,d as r,L as f,_ as u,e as x}from"./index.d897f267.js";const D=e=>i=>Promise.all([d(e)]).then(([c])=>{i(w(c))}),w=e=>({type:h,data:e}),I=p.div`
   /* margin-bottom: 90px; */
         
   
   .goodslist-box{
      padding: 0  ${s(10)};
      display: flex;
      /* justify-content: space-between; */
      flex-wrap: wrap;
      
      .goodslist-item{
         width: ${s(172.5)};
         &:nth-child(2n+1){
                  margin-right:  ${s(10)};
         }
         &:nth-child(n){
                  margin-bottom:  ${s(20)};
         }
         .goodeslist-img{
            
         }
         .goods-price{
            display:flex;
            align-items: end;
            .danwei{
               color: #f91e32;
               font-size: ${s(12)};
               font-weight: 700;

            }
            .new-price{
               
               margin-right:${s(2)};
               color: #f91e32;
               font-weight: 700;
            }
            .old-price{
               font-size: ${s(12)};
               text-decoration:line-through;
               color:#999999;
            }
         }
      }
   }
`,S=e=>{const{searchDetailItem:i}=e,{getSearchDetailDispatch:c}=e,{pathname:n}=g(),l=n.split("/")[2];return o.exports.useEffect(()=>{c(l)},[]),t(I,{children:t("div",{className:"goodslist-box",children:i.map(a=>t("div",{className:"goodslist-item",children:r(f,{to:{pathname:`/goodsDetail/${a.id}`},children:[t("div",{className:"goodeslist-img",children:t(u,{placeholder:t("img",{width:"100%",height:"100%",src:x}),children:t("img",{src:a.listPicUrl,alt:"",width:"100%",height:"100%"})})}),t("div",{className:"goodslist-name",children:a.name}),r("div",{className:"goods-price",children:[t("span",{className:"danwei",children:"\uFFE5"}),t("span",{className:"new-price",children:a.retailPrice?a.retailPrice:""}),t("span",{className:"old-price",children:a.counterPrice?`\uFFE5${a.counterPrice}`:""})]})]})},a.id))})})},$=e=>({searchList:e.search.searchList,searchDetailItem:e.search.searchDetailItem}),N=e=>({getSearchDetailDispatch(i){e(D(i))}});var E=o.exports.memo(m($,N)(S));export{E as default};
