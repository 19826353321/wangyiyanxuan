import{s as k,p as c,r as N,f as $,d as l,j as o,F as d,c as h,h as v,i as y,k as C,l as m}from"./index.d897f267.js";const G=k.div`
    .cartlist-box{
        padding:${c(10)};
        .cart-item{
            margin: ${c(10)} 0;
                .check-button{
                    padding:0 ${c(5)};
                }
                .icon-yuanxingxuanzhongfill{
                    
                    color: red;
                }
                .cart-item-box{
                    flex:1;
                    display: flex;
                    .cart-item-img{
                        width: ${c(100)};
                        height: ${c(100)};
                        margin-right: ${c(10)};
                    }
                    .cart-item-content{
                        flex:1;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .cart-item-body{
                           
                                    .cart-item-price{
                                        color: red;
                                    }
                              
                            .cart-item-button{
                                border: ${c(1)} solid black;
                                /* width: ${c(90)}; */
                                text-align: center;
                                .cart-item-goods-num{
                                    flex:1;
                                    border-left: ${c(1)} solid black;
                                    border-right: ${c(1)} solid black;
                                    width: ${c(30)};

                                }
                                i{
                                    flex:1;
                                    width: ${c(30)};

                                }
                            }
                            
                        }
                    }
                }
        }
    }
    .total-cartlist-box{
        position: fixed;
        left: 0;
        right: 0;
        bottom: ${c(44)};
        height: ${c(44)};
        background-color: #fff;
        padding:0 ${c(15)};
        border-top: ${c(1)} solid black;
        .icon-yuanxingxuanzhongfill{
                    
             color: red;
        }
    }
    
    
`,w=a=>{const{goodsList:i,checkAll:t,totalPrice:n}=a,{checkGoodsDispatch:g,checkAllGoodsDispatch:u,changeGoodsNumDispatch:x}=a,p=e=>{g(e)},f=()=>{u(t)},s=(e,r,b)=>{e.preventDefault(),e.stopPropagation(),x({status:r,goodsId:b})};return l(G,{children:[o("div",{className:"cartlist-box",children:(()=>i.filter((e,r)=>e.enterCart).map(e=>l(m,{className:"cart-item",children:[o("i",{className:h("iconfont","check-button",{"icon-yuanxingweixuanzhong":!e.check},{"icon-yuanxingxuanzhongfill":e.check}),onClick:p.bind(null,""+e.id)}),l("div",{className:"cart-item-box",children:[o("div",{className:"cart-item-img",children:o("img",{src:e.listPicUrl,alt:"",width:"100%",height:"100%"})}),l("div",{className:"cart-item-content",children:[o("div",{className:"cart-item-name",children:e.name}),l(d,{className:"cart-item-body",children:[o("div",{className:"cart-item-price",children:"\uFFE5"+e.retailPrice}),l(m,{className:"cart-item-button",children:[e.goodsNum!=0?o("i",{className:"iconfont icon-jianhao",onClick:r=>s(r,"reduce",e.id)}):o("div",{}),o("div",{className:"cart-item-goods-num",children:e.goodsNum}),o("i",{className:"iconfont icon-jiahao",onClick:r=>s(r,"add",e.id)})]})]})]})]})]},e.id)))()}),l(d,{className:"total-cartlist-box",children:[l("div",{className:"check-all-box",children:[o("i",{className:h("iconfont","check-all-button",{"icon-yuanxingweixuanzhong":!t},{"icon-yuanxingxuanzhongfill":t}),onClick:()=>f()}),o("span",{children:"\u5168\u9009"})]}),o("div",{className:"total-content-box",children:o("div",{className:"total-price-box",children:`\u5408\u8BA1: ${n.toFixed(2)}`})})]})]})},A=a=>{let i=a.home.goodsList.filter((t,n)=>t.enterCart).reduce((t,n)=>t+(n.check?parseFloat(""+n.retailPrice*n.goodsNum):0),0);return{goodsList:a.home.goodsList,checkAll:a.home.goodsList.filter((t,n)=>t.enterCart).filter(t=>t.check).length==a.home.goodsList.filter((t,n)=>t.enterCart).length,totalPrice:i}},D=a=>({checkGoodsDispatch(i){a(v(i))},changeGoodsNumDispatch(i){a(y(i))},checkAllGoodsDispatch(i){a(C(i))}});var j=N.exports.memo($(A,D)(w));export{j as default};
