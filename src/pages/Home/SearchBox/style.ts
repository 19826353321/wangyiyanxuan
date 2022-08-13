import styled from 'styled-components'
import style, { px2rem } from '@/assets/styles/global-style'

export const SearchBoxWrapper = styled.div` 
    .search-box{
        box-sizing: content-box;
        height: ${px2rem(40)};
        border: ${px2rem(2)} solid ${style["search-color"]};
        border-right: 0;
        border-radius: ${px2rem(22)};
        background-color: #fff;
        i{
            margin:auto ${px2rem(10)};
            font-size: ${px2rem(20)};
            color: ${style["font-color-dark"]};
        }
        .search-input{
            flex:1;
            border: 0;
            font-size: ${style["font-size-l"]};
            color:${style['font-color-light']};
            &::placeholder{
                color:#939393;
            }
        }
        .search-button{
            height: 100%;
            border-radius: ${px2rem(22)};
            padding: ${px2rem(10)} ${px2rem(15)};
            background-color:${style["search-color"]};
            color: white;
            font-size: ${style['font-size-l']};
            text-align: center;
        }
    }
   
`
