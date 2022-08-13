import styled from 'styled-components'
import style,{ px2rem } from '@/assets/styles/global-style' 

export const SideBarWrapper = styled.div`
    display:flex;
    .adm-side-bar{
        position: fixed;
        .chosed{
            font-size: ${px2rem(14)};
            font-weight: 700;
        }
    }
    
    .sidebar-content{
        flex:1;
        margin-left:${px2rem(80)};
        .content {
            display: none;
            &.active {
                display: flex;
                flex-wrap: wrap;               
            }
            .content-item{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: ${px2rem(80)};
                margin: ${px2rem(5)} ${px2rem(9)};
                font-size:${style["font-size-s"]} ;
                .cate-img{                  
                }               
            }
        }
    }
   
`