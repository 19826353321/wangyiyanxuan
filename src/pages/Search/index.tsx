import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { getSearchListAction, setOldSearchListAction } from '@/store/actions/search'
import { getKeywordsAction } from '@/store/actions/keywords'

import { CSSTransition } from 'react-transition-group';
import { SearchWrapper, } from './style'
import SearchInput from './SearchInput'
import SearchItem from './SearchItem';
import OldSearch from './OldSearch';
import SearchRecommend from './SearchRecommend';

const Search: React.FC<any> = (props) => {
  const { searchList, keywords, oldSearchList } = props;
  const { getSearchListDispatch, getKeywordsDispatch, setOldSearchDispatch } = props;
  const navigate = useNavigate();
  const [query, setQuery] = useState('')
  const [show, setShow] = useState(false);
  // const [oldSearchList, setOldSearchList] = useState<any[]>([]);
  useEffect(() => {
    setShow(true);
    // getSearchListDispatch();
    getKeywordsDispatch();
    // setOldSearchDispatch(1)
  }, [])

  const searchBack = () => {
    setShow(false);
  }
  const handleQuery = (q: any) => {
    setQuery(q)
  }
  const addOldSearchList = (q: any) => {
    setOldSearchDispatch(q)
  }
  // const handleOldSearch = (q: any) => {
  //   setOldSearchList([q]);
  // }

  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExit={() => {
        navigate(-1)
      }}>
      <SearchWrapper>
        <SearchInput
          back={searchBack}
          newQuery={query}
          handleQuery={handleQuery}
        />

       


        <div className={classnames(
          "position-box",
          "search-body-box"
          // "none": query
        )}>
          <OldSearch oldSearchList={oldSearchList} keywords={keywords}/>
          <SearchRecommend keywords={keywords} />
        </div>

 <div className={classnames(
          "position-box", 
          {
          "search-item-box": query
        }
        )}>

          <SearchItem searchList={searchList} keywords={keywords}
            query={query}
            addOldSearchList={addOldSearchList}
          />

        </div>



      </SearchWrapper>
    </CSSTransition>
  )
}
const mapStateToProps = (state: any) => ({
  searchList: state.search.searchList,
  keywords: state.home.keywords,
  oldSearchList: state.search.oldSearchList
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSearchListDispatch() {
    dispatch(getSearchListAction());
  },
  getKeywordsDispatch() {
    dispatch(getKeywordsAction());
  },
  setOldSearchDispatch(keywords: any) {
    dispatch(setOldSearchListAction(keywords));
  }
})

export default memo(connect(mapStateToProps, mapDispatchToProps)(Search))

