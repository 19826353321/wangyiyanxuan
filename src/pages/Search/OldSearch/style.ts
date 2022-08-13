import styled from 'styled-components'
import style,{ px2rem } from '@/assets/styles/global-style' 

export const OldSearchWrapper = styled.div`
    color:${style["font-color-dark"]};
    .old-search-header{
        margin: ${px2rem(10)};
        .old-search-title{
            font-weight: 700;
        }
    }
   .old-search-body{
    display: flex;
    flex-wrap: wrap;
        .old-search-body-item{
            padding: ${px2rem(5)} ${px2rem(10)};
            margin-right: ${px2rem(20)};
            margin-bottom: ${px2rem(10)};
            border-radius: ${px2rem(15.5)};
            background-color: #f4f4f4;

        }
   }
`

