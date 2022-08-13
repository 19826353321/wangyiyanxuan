import styled from 'styled-components'
import style,{ px2rem } from '@/assets/styles/global-style' 

export const CountdownWrapper = styled.div`
.countdown-box{
   display: flex;
   align-items: center;
   color:#a84a26;
   background-color: #fbe1bc;
   width: ${px2rem(80)};
   padding:0 ${px2rem(3)};
   border-radius: ${px2rem(19.6)};
   .time{
      padding: ${px2rem(3)} 0;
   }
   .count{
      box-sizing: content-box;
      width: ${px2rem(16)};
      height: ${px2rem(16)};
      line-height: ${px2rem(16)};
      background-color: #fff;
      border-radius: 50%;
      text-align: center;
   }
}
   
   
   
`