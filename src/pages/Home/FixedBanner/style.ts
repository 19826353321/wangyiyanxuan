import styled from 'styled-components'
import style,{ px2rem } from '@/assets/styles/global-style' 

export const FixedBannerWrapper = styled.div`
   position: fixed;
   left: ${px2rem(5)};
   right: ${px2rem(5)};
   bottom: ${px2rem(74)};
   background-color: #f1c59e;
   height:${px2rem(44)};
   &.none{
      display:none;
   }
   .fixedBanner-box{
      height:100%;
      display: flex;
      align-items: center;
      padding-left:${px2rem(20)} ;
      .triangle-box{
         width: 0;
         height: 0;
         border-top:${px2rem(20)} solid transparent;
         border-right:${px2rem(20)}  solid blue;
         border-bottom:0 solid transparent;
         border-left:0 solid transparent;
      }
      .countdown-wrapper{
         position: absolute;
         right: 0;
         top: ${px2rem(-12.6)};
      }
      .icon-cuowukongxin{
         position: absolute;
         right: ${px2rem(12.6)};
         top: ${px2rem(12.6)};
      }
   } 
`