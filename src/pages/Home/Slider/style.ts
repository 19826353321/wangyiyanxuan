import styled from 'styled-components'
import style,{ px2rem } from '@/assets/styles/global-style' 

export const SliderWrapper = styled.div`
background-color: #fff;
margin: ${px2rem(10)} 0;
padding: ${px2rem(10)};
.swiper-container{
}
   .slider-name{
        font-size: ${style["font-size-s"]};
   }
   .swiper-wrapper{
    overflow:"visible",

    /* margin-bottom:100px; */
   }
   
`
