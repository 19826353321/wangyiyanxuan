import styled from 'styled-components'
import style,{ px2rem } from '@/assets/styles/global-style' 

export const HeaderWrapper = styled.div`
    .header-left{
        .header-left-item{
            width: ${px2rem(125)};         
            .header-left-img{
                width: 186px;
                height: 40px;
                background: url(src/assets/imgs/sprite.png) no-repeat 0 -966px;                
            }
            .logo-img{
            }
        }  
    }
    .header-right{
        .header-right-item{
            margin-left:1rem;
            i{
                font-size: ${px2rem(20)};
                color: ${style["font-color-dark"]};
            }
            .header-right-name{
                font-size:${style["font-size-s"]};
                color: ${style["font-color-dark"]};
            }
        }
    }
   
`
