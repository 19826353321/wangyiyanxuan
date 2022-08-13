import styled from 'styled-components'
import style, { px2rem } from '@/assets/styles/global-style'

export const SearchInputWrapper = styled.div`
    display:flex;
    align-items: center;
    height: ${px2rem(44)};
    border-bottom: ${px2rem(1)} solid black;
    font-size: ${style["font-size-m"]};
    .search-box{
        padding:  ${px2rem(5)} 0;
        flex:1;
        display: flex;
        justify-content: space-between;
        background-color: #ededed;
        border-radius: ${px2rem(17)};     
        .icon-sousuo{
            font-size: ${px2rem(16)};
            margin-left: ${px2rem(5)};
        }
        &>input{
            flex:1;
            border:0;
            padding: 0 ${px2rem(5)};
            border-radius: ${px2rem(17)};
            font-size: ${style["font-size-l"]};
            background-color: #ededed;
        }
        .icon-quxiao{
            padding-right: ${px2rem(10)};
        }                 
    }
   .back{
        margin-left:${px2rem(10)};
    }   
`