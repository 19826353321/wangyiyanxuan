import styled from 'styled-components'
import style,{ px2rem } from '@/assets/styles/global-style' 

export const CartWrapper = styled.div`
    .cartlist-box{
        padding:${px2rem(10)};
        .cart-item{
            margin: ${px2rem(10)} 0;
                .check-button{
                    padding:0 ${px2rem(5)};
                }
                .icon-yuanxingxuanzhongfill{
                    
                    color: red;
                }
                .cart-item-box{
                    flex:1;
                    display: flex;
                    .cart-item-img{
                        width: ${px2rem(100)};
                        height: ${px2rem(100)};
                        margin-right: ${px2rem(10)};
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
                                border: ${px2rem(1)} solid black;
                                /* width: ${px2rem(90)}; */
                                text-align: center;
                                .cart-item-goods-num{
                                    flex:1;
                                    border-left: ${px2rem(1)} solid black;
                                    border-right: ${px2rem(1)} solid black;
                                    width: ${px2rem(30)};

                                }
                                i{
                                    flex:1;
                                    width: ${px2rem(30)};

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
        bottom: ${px2rem(44)};
        height: ${px2rem(44)};
        background-color: #fff;
        padding:0 ${px2rem(15)};
        border-top: ${px2rem(1)} solid black;
        .icon-yuanxingxuanzhongfill{
                    
             color: red;
        }
    }
    
    
`