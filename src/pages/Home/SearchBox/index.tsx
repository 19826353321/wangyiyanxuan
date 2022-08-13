import { memo } from 'react'
import { Link } from 'react-router-dom'
import { SearchBoxWrapper } from './style'
import { FlexRowBetweenWrapper } from '@/components/commonstyle'

const SearchBox = () => {
    return (
        <SearchBoxWrapper>
            <Link to={{ pathname: "/search" }}
            >
                <FlexRowBetweenWrapper className="search-box">
                    <i className='iconfont icon-sousuo'></i>
                    <input type="search" placeholder='鞋子' className='search-input' />
                    <div className='search-button'>搜索</div>
                </FlexRowBetweenWrapper>
            </Link>
        </SearchBoxWrapper>
    )
}

export default memo(SearchBox)