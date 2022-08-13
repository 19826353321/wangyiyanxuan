import styled from 'styled-components'
import style,{ px2rem } from '@/assets/styles/global-style' 

export const ContentWrapper = styled.div`
   /* margin-bottom: 90px; */
         
   
   .goodslist-box{
      padding: 0  ${px2rem(10)};
      display: flex;
      /* justify-content: space-between; */
      flex-wrap: wrap;
      
      .goodslist-item{
         width: ${px2rem(172.5)};
         &:nth-child(2n+1){
                  margin-right:  ${px2rem(10)};
         }
         &:nth-child(n){
                  margin-bottom:  ${px2rem(20)};
         }
         .goodeslist-img{
            
         }
         .goods-price{
            display:flex;
            align-items: end;
            .danwei{
               color: #f91e32;
               font-size: ${px2rem(12)};
               font-weight: 700;

            }
            .new-price{
               
               margin-right:${px2rem(2)};
               color: #f91e32;
               font-weight: 700;
            }
            .old-price{
               font-size: ${px2rem(12)};
               text-decoration:line-through;
               color:#999999;
            }
         }
      }
   }
`
