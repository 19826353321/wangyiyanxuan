import React, { useEffect, memo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import defaultImg from '@/assets/imgs/default.png'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { getSearchDetailItemAction } from '@/store/actions/searchDetail'
import { SearchDetailWrapper } from './style'


const SearchDetail: React.FC<any> = (props) => {
  const { searchDetailItem } = props;
  const { getSearchDetailDispatch } = props;
  // 拿到URL上搜索内容对应的的id
  const { pathname } = useLocation();
  const pathRes = pathname.split('/');
  const searchIndex = pathRes[2];
  useEffect(() => {
    getSearchDetailDispatch(searchIndex)
  }, [])

  return (
    <SearchDetailWrapper>
      {<div className='goodslist-box'>
        {
          searchDetailItem.map((item: any) => (
              <div className='goodslist-item' key={item.id}>
                <Link to={{
                  pathname: `/goodsDetail/${item.id}`,
                }} >
                  <div className='goodeslist-img'>
                    <LazyLoad
                      placeholder={<img width="100%"
                        height="100%" src={defaultImg} />}>
                      <img src={item.listPicUrl} alt="" width="100%" height="100%" />
                    </LazyLoad>
                  </div>
                  <div className="goodslist-name">
                    {item.name}
                  </div>
                  <div className="goods-price">
                    <span className="danwei">
                      ￥
                    </span>
                    <span className="new-price">
                      {item.retailPrice ? item.retailPrice : ""}
                    </span>
                    <span className="old-price">
                      {item.counterPrice ? `￥${item.counterPrice}` : ""}
                    </span>
                  </div>
                </Link>
              </div>
            ))}</div>}
    </SearchDetailWrapper>
  )
}

const mapStateToProps = (state: rootState) => ({
  searchList: state.search.searchList,
  searchDetailItem: state.search.searchDetailItem
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSearchDetailDispatch(index: number) {
    dispatch(getSearchDetailItemAction(index));
  },

})

export default memo(connect(mapStateToProps, mapDispatchToProps)(SearchDetail))
