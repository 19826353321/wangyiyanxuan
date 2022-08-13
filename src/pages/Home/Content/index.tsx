import React, { useRef, useState, useEffect, memo } from 'react'
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazyload'
import defaultImg from '@/assets/imgs/default.png'
import { ContentWrapper } from './style'
import { Tabs, Swiper } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

const Content: React.FC<any> = (props) => {
  const { goodsGroupList, setTabsOffsetTopDispatch } = props
  //提供索引号
  const tabItems = [
    { key: "0" },
    { key: "1" },
    { key: "2" },
    { key: "3" },
    { key: "4" },
    { key: "5" },
    { key: "6" },
    { key: "7" },
    { key: "8" },
    { key: "9" },
    { key: "10" },
    { key: "11" },
    { key: "12" },
    { key: "13" },
    { key: "14" },
  ]
  const swiperRef = useRef<SwiperRef>(null)
  //提供useRef拿到<Content/>组件的在页面的高度偏移
  const heightRef = useRef<any>()
  //渲染商品列表的初始索引号
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setTabsOffsetTopDispatch(heightRef.current.offsetTop)
  }, [])
  //渲染商品列表
  const renderGoodsGroupList = () => {
    return (
      goodsGroupList.map((group: any, index: any) => (
        <Swiper.Item key={index}>
          <div className='goodslist-box'>
            {group.directlyList.map((item: any) => (
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
            ))}</div>
        </Swiper.Item>
      ))
    )
  }

  return (
    <ContentWrapper ref={heightRef}>
      <Tabs
        activeKey={tabItems[activeIndex].key}
        onChange={key => {
          const index = tabItems.findIndex(item => item.key === key)
          setActiveIndex(index)
          swiperRef.current?.swipeTo(index)
        }}
      >
        {goodsGroupList.map((item: any, index: any) => (
          <Tabs.Tab title={item.directOrginQuery} key={index} />
        ))}
      </Tabs>
      <Swiper
        direction='horizontal'
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={index => {
          setActiveIndex(index)
        }}
      >
        {renderGoodsGroupList()}
      </Swiper>
    </ContentWrapper>
  )
}

export default memo(Content)