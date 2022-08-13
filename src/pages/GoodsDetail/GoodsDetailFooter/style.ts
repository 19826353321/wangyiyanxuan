import styled from 'styled-components'
import style, { px2rem } from '@/assets/styles/global-style'

export const GoodsDetailFooterWrapper = styled.div`
    position:fixed;
    left: 0;
    bottom: 0;
    height: ${px2rem(44)};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: ${px2rem(1)} solid #dadada;
    i{
        margin:0 ${px2rem(10)};
        font-size: ${px2rem(20)};
       
    }
    .shoucang{
        color:#fab550;
    }
    .button{
        display: flex;
        /* &>span{
            padding:${px2rem(5)} ${px2rem(20)};
            border-radius: ${px2rem(12)};
            color: #fff;
        } */
        .cart{
            background-color: #dd1a22;
        }
        .buy{
            background-color: #cc9656;
            margin:0 ${px2rem(15)} 0 ${px2rem(10)};
        }
    }
`
export const GoodsButtonrWrapper = styled.div`
    padding:${px2rem(5)} ${px2rem(20)};
    border-radius: ${px2rem(12)};
    color: #fff;
`
