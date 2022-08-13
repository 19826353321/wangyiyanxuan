import React, { useEffect } from 'react'
import { getSearchListRequest } from '@/api/request'
import { useLocation, Link } from 'react-router-dom'
import classnames from 'classnames'
import { SearchItemWrapper } from './style'

const SearchItem: React.FC<any> = (props) => {
  const { query, searchList, keywords, addOldSearchList } = props
// console.log();

  return (
    <SearchItemWrapper>

      {keywords
        .map((item: any, index: any) =>
        (
          <Link to={{
            pathname: `/searchDetail/${index}`
          }}
            key={index}
          >
            {new RegExp('^.*' + query + '.*$').test(item)
              ? <div onClick={() => { addOldSearchList(item) }} 
              className="search-item"
              >
                {/* {item} */}
                {item.split(query)[0]}
                <span className='query-word'>{query}</span>
                {item.split(query)[1]}
                </div>
              : <></>}
          </Link>
        )
        )}

    </SearchItemWrapper>
  )
}

export default SearchItem
