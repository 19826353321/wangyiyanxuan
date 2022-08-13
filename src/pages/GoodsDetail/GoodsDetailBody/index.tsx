import React, { useEffect, useState } from 'react'
import { getGoodsDetailListRequest } from '@/api/request'
import LazyLoad from 'react-lazyload'
import defaultImg from '@/assets/imgs/default.png'
import { Space, Swiper } from 'antd-mobile'
import { GoodsDetailBodyWrapper } from './style'

const GoodsDetailBody: React.FC<any> = (props) => {
  const { goodsDetailItem } = props;
  console.log(goodsDetailItem);
  //渲染轮播图
  const renderSwiper = () => (
    goodsDetailItem.map((item: any, index: any) =>
      <Swiper
        key={item.id}
        indicator={(total, current) => (
          <div className="customIndicator">
            {`${current + 1} / ${total}`}
          </div>
        )}
      >
        <Swiper.Item >
          <div className="slider-img">
            <LazyLoad
              placeholder={<img width="100%"
                height="100%" src={defaultImg} />}>
              <img src={item.itemDetail.picUrl1} alt="" width="100%" />
            </LazyLoad>
          </div>
        </Swiper.Item>
        <Swiper.Item >
          <div className="slider-img">
            <LazyLoad
              placeholder={<img width="100%"
                height="100%" src={defaultImg} />}>
              <img src={item.itemDetail.picUrl2} alt="" width="100%" />
            </LazyLoad>
          </div>
        </Swiper.Item>
        <Swiper.Item >
          <div className="slider-img">
            <LazyLoad
              placeholder={<img width="100%"
                height="100%" src={defaultImg} />}>
              <img src={item.itemDetail.picUrl3} alt="" width="100%" />
            </LazyLoad>
          </div>
        </Swiper.Item>
        <Swiper.Item >
          <div className="slider-img">
            <LazyLoad
              placeholder={<img width="100%"
                height="100%" src={defaultImg} />}>
              <img src={item.itemDetail.picUrl4} alt="" width="100%" />
            </LazyLoad>
          </div>
        </Swiper.Item>
        <Swiper.Item >
          <div className="slider-img">
            <LazyLoad
              placeholder={<img width="100%"
                height="100%" src={defaultImg} />}>
              <img src={item.itemDetail.picUrl5} alt="" width="100%" />
            </LazyLoad>
          </div>
        </Swiper.Item>
      </Swiper>
    )
  )
  const renderPrice = () => (
    goodsDetailItem.map((item: any, index: any) => (
      <div className='price-wrapper' key={item.id}>
        <div className="title-box">
          {item.promotionDesc}
        </div>
        <div className="price-box">
          <div className="new-price-box">
            <span className='new-price-small'>￥</span>
            <span className='new-price-big'>{Math.floor(item.price.basicPrice) + ((item.price.basicPrice + "").split(".")[1] ? "." : "")}</span>
            <span className='new-price-small'>{(item.price.basicPrice + "").split(".")[1]}</span>
          </div>
          <div className="old-price-box">{item.price.counterPrice ? `￥${item.price.counterPrice}` : ""}</div>
        </div>
      </div>
    ))
  )
  return (
    <GoodsDetailBodyWrapper>
      {renderSwiper()}
      {renderPrice()}
    </GoodsDetailBodyWrapper>
  )
}

export default GoodsDetailBody
