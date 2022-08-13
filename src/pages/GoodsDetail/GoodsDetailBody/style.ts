import styled from 'styled-components'
import style,{ px2rem } from '@/assets/styles/global-style' 

export const GoodsDetailBodyWrapper = styled.div`
    .customIndicator {
        position: absolute;
        bottom: ${px2rem(6)};
        right: ${px2rem(6)};
        background: rgba(0, 0, 0, 0.3);
        padding: ${px2rem(4)} ${px2rem(8)};
        color: #ffffff;
        border-radius:${px2rem(4)};;
        user-select: none;
    }
    .price-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: ${px2rem(60)};
        padding: ${px2rem(5)} ${px2rem(10)};
        background-color: #f91e32;
        color: #ffffff; 

        .title-box{
            font-size: ${px2rem(12)};
        }
        .price-box{
            display: flex;
            align-items: end;
            .new-price-box{
                font-weight: 700;
                .new-price-big{
                    font-size: ${px2rem(20)};
                }
                .new-price-small{
                    font-size:${px2rem(15)}
                }
            }
            .old-price-box{
                text-decoration:line-through;
                font-size:${px2rem(12)}

            }

        }
        
    }
   
`