import styled from 'styled-components'
import style,{ px2rem } from '@/assets/styles/global-style' 

export const SearchItemWrapper = styled.div`
  .search-item{
    padding:${px2rem(10)} 0;
    border-bottom: ${px2rem(1)} solid black;
    .query-word{
      color:red;
    }
  }

`
