import styled from 'styled-components'
import style,{ px2rem } from '@/assets/styles/global-style' 

export const GoodsDetailHeaderWrapper = styled.div`
    height: ${px2rem(44)};
    display: flex;
    align-items: center;
    i{
        margin: 0 ${px2rem(10)};
        font-size: ${px2rem(20)};
        color:#2e2e2e;
    }
    .search-box{
        margin: 0 ${px2rem(10)};

        /* box-sizing: content-box; */
        /* height: ${px2rem(30)}; */
        /* text-align: center; */
        background-color: #ededed;
        padding: ${px2rem(5)} 0;
        font-size: ${px2rem(14)};
        border-radius:${px2rem(24.2)};
        i{
        font-size: ${px2rem(14)};
        margin: 0 ${px2rem(5)};

        }
        .search-input{
        background-color: #ededed;
        }
    }
    .mask-box{
       
        .mask-content{ 
            margin-top:${px2rem(300)};
            display: flex;
            flex-wrap: wrap;
            color:#fff;
            .mask-item{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin:${px2rem(10)} ${px2rem(28.5)};
                i{
                    font-size: ${px2rem(48)};
                    
                }
                .mask-name{
                    font-size: ${style["font-size-s"]};
                }
            }

        }
        .icon-cuowukongxin{
            position: fixed;
            left:${px2rem(157.5)};
            bottom:${px2rem(50)};
            color:#fff;
            font-size: ${px2rem(30)};
            /* margin:${px2rem(100)} auto; */
        }
        
        
        
    }
    
`