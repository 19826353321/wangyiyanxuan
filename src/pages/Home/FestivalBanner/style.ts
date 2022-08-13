import styled from 'styled-components'
import style, { px2rem } from '@/assets/styles/global-style'

export const FestivelBannerWrapper = styled.div`
   .festival-box{
      .festival-header{
      box-sizing: border-box;
      padding: 0 ${px2rem(20)};
      border:${px2rem(1)} solid #ee7a91;
      background-color: #ffc3cf;
      .festival-name{
         padding:0 ${px2rem(20)};
         background-color: black;
         font-size: ${style["font-size-s"]};
         color:#fff;
      }
      .festival-body{
         padding-bottom: ${px2rem(5)};
         color:${style["font-color-dark"]}; 
         .festival-content{
            .font-big{
               font-size: ${px2rem(15)};
               font-weight: 700;
            
            }
            .font-small{
               font-size: ${px2rem(13)};
            }
         }
         .festival-button{
            box-sizing: border-box;
            width:  ${px2rem(30)};
            height:  ${px2rem(30)};
            line-height:${px2rem(30)};
            border-radius:50%;
            text-align: center;
            /* padding:   ${px2rem(2)}; */
            background-color: #fff;
         }
         
      }
     
   }
   .slider-body{
      background-color: #fb7784;
      padding:  ${px2rem(8)};
      /* .body-border{
         background-color: #ffbfcd;
         padding: ${px2rem(4)};
         
      } */
      .body-item{
         background-color: #fff;
         /* padding:${px2rem(4)}; */
         border: ${px2rem(4)} solid #ffbfcd;
         border-radius: ${px2rem(5)};
         &:nth-child(-n+2){
            margin-right: ${px2rem(5)};
         }
         .slider-item{
            position: relative;
            margin:  ${px2rem(4)};
            border-radius: ${px2rem(5)};
            .slider-img{
              
            }


            .price{ 
               width: 100%;
               position: absolute;
                  bottom: ${px2rem(0)};
                  left: ${px2rem(0)};
                  border-radius:${px2rem(11)};
                  /* padding: 0 4px; */

                  background-color: #e8e8e8;
                  font-size: ${style["font-size-s"]};
               .old-price{
                  margin-left: ${px2rem(5)};
                  text-decoration:line-through;
                  color:#848484;
               }
               .new-price{
                  padding: ${px2rem(0)} ${px2rem(3)};
                  border-radius:${px2rem(11)};
                  background-color: #e8202b;
                  color:#ffeff3;
               }
            }
         
         }
      }
   }
   }
   .banner-box{
      margin:${px2rem(5)} 0 ${px2rem(10)} 0;
      background-color: #ffc3cf;
      .banner-body{
         padding-left:${px2rem(30)};
         height: ${px2rem(90)};
         .banner-content{
            text-align: center;
            padding-right:${px2rem(100)};
            .banner-content-1{
               @keyframes scale1 {
                  0% {                 
                     font-size: ${px2rem(16)};
                  }              
                  50% {
                     font-size: ${px2rem(20)};
                  }
                  100%{
                     font-size: ${px2rem(16)};
                  }
               }
               animation: scale1 1.5s ease .1s;
               animation-iteration-count:infinite;
               color: #202123;
               font-weight: 700;
            }
            .banner-content-2{
               @keyframes scale2 {
                  0% {                 
                     font-size: ${px2rem(14)};
                  }              
                  50% {
                     font-size: ${px2rem(15)};
                  }
                  100%{
                     font-size: ${px2rem(14)};
                  }
               }
               animation: scale2 1.5s ease .1s;
               animation-iteration-count:infinite;
               color:#281d23;
               font-weight: 700;
               /* animation-fill-mode:both;  */
            }
            .banner-content-3{
               @keyframes scale3 {
                  0% {                 
                     font-size: ${px2rem(14)};
                  }              
                  50% {
                     font-size: ${px2rem(15)};
                  }
                  100%{
                     font-size: ${px2rem(14)};
                  }
               }
               animation: scale3 1.5s ease .1s;
               animation-iteration-count:infinite;
               /* color:#281d23; */
               font-weight: 700;
               /* animation-fill-mode:both;  */
               background-color: #19181e;
               color:#e4e3e8;
            }
         }
      }
    
   }
   
   
  
`