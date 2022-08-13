import React, { useEffect, memo } from 'react'
import { HomeWrapper } from './style'
import HomeHeader from './HomeHeader'
import SearchBox from "./SearchBox"
import Slider from './Slider'
import Content from './Content'
import FestivalBanner from './FestivalBanner'
import FixedBanner from './FixedBanner'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { getGoodsListAction } from '@/store/actions/goodsList'
// import { getKeywordsAction } from '@/store/actions/keywords'
import { setTabsOffsetTopAction } from '@/store/actions/tabsOffsetTop'

const Home: React.FC<any> = (props) => {
  const {
    goodsGroupList,
    loading
  } = props
  const { getHomeDataActionDispatch, setTabsOffsetTopDispatch } = props
  //为了在无数据库的情况下表现购物车功能，首页只渲染一次商品列表数据
  useEffect(() => {
    if (!(goodsGroupList.length > 0)) {
      getHomeDataActionDispatch();
    }
  }, [])

  return (
    <>
      {/* 首页请求数据时显示loading */}
      {loading ? <>loading...</> :
        <HomeWrapper>
          <div className="bgcolor-box">
            <HomeHeader />
            <SearchBox />
            <Slider />
            <FestivalBanner />
          </div>
          <Content goodsGroupList={goodsGroupList}
            setTabsOffsetTopDispatch={setTabsOffsetTopDispatch} />
          <FixedBanner />
        </HomeWrapper>
      }
    </>
  )
}
const mapStateToProps = (state: rootState) => ({
  goodsGroupList: state.home.goodsGroupList,
  // searchList: state.search.searchList,
  // keywords: state.home.keywords,
  loading: state.loading
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getHomeDataActionDispatch() {
    dispatch(getGoodsListAction());
  },
  // getKeywordsDispatch() {
  //   dispatch(getKeywordsAction());
  // },
  setTabsOffsetTopDispatch(height: number) {
    dispatch(setTabsOffsetTopAction(height));
  }
})

export default memo(connect(mapStateToProps, mapDispatchToProps)(Home))
