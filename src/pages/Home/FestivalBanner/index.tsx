import { memo } from 'react'
import { FestivelBannerWrapper } from './style'
//引用定义好的公共样式组件，提高开发效率
import {
  FlexRowBetweenWrapper,
  FlexRowWrapper,
  Flex1Wrapper,
} from '@/components/commonstyle'
import { Swiper } from 'antd-mobile'
import style, { px2rem } from '@/assets/styles/global-style'

const FestivalBanner = () => {
  // 设置轮播图所需的数据
  const sliderList1 = [
    [
      {
        id: 1,
        imgUrl: "https://yanxuan.nosdn.127.net/79b9d2e7a3c232b34972975cc1b6d644.png",
        oldPrice: 170,
        newPrice: 20
      },
      {
        id: 2,
        imgUrl: "https://yanxuan.nosdn.127.net/ce451089bf973a3b1df03074b40e2bfa.png",
        oldPrice: 179,
        newPrice: 0
      }
      ,
      {
        id: 3,
        imgUrl: "https://yanxuan.nosdn.127.net/d5598a699a55bd3f35cfe024a7cd3dea.png",
        oldPrice: 179,
        newPrice: 0
      }
    ],
    [
      {
        id: 1,
        imgUrl: "https://yanxuan.nosdn.127.net/79b9d2e7a3c232b34972975cc1b6d644.png",
        oldPrice: 179,
        newPrice: 0
      },
      {
        id: 2,
        imgUrl: "https://yanxuan.nosdn.127.net/ce451089bf973a3b1df03074b40e2bfa.png",
        oldPrice: 179,
        newPrice: 0
      }
      ,
      {
        id: 3,
        imgUrl: "https://yanxuan.nosdn.127.net/d5598a699a55bd3f35cfe024a7cd3dea.png",
        oldPrice: 179,
        newPrice: 0
      }
    ],
    [
      {
        id: 1,
        imgUrl: "https://yanxuan.nosdn.127.net/79b9d2e7a3c232b34972975cc1b6d644.png",
        oldPrice: 179,
        newPrice: 0
      },
      {
        id: 2,
        imgUrl: "https://yanxuan.nosdn.127.net/ce451089bf973a3b1df03074b40e2bfa.png",
        oldPrice: 179,
        newPrice: 0
      }
      ,
      {
        id: 3,
        imgUrl: "https://yanxuan.nosdn.127.net/d5598a699a55bd3f35cfe024a7cd3dea.png",
        oldPrice: 179,
        newPrice: 0
      }
    ],
  ]
  // 渲染单个轮播图
  const renderSliderList = (i: number) => {
    return (
      <Flex1Wrapper className='body-item' >
        <Swiper
          direction='vertical'
          autoplay={true}
          autoplayInterval={3000}
          loop={true}
          indicator={() => null}
          allowTouchMove={false}
          style={{
            '--height': `${px2rem(103.6)}`,
          }}
        >
          {
            sliderList1.map((item, index) => (
              <Swiper.Item
                key={index}
              >
                <div className='slider-item' >
                  <div className='slider-img'>
                    <img src={item[i].imgUrl} alt="" width="100%" />
                  </div>
                  <FlexRowBetweenWrapper className='price'>
                    <span className='old-price' >{"￥" + item[i].oldPrice}</span>
                    <span className='new-price'>{"折合" + item[i].newPrice + "元"}</span>
                  </FlexRowBetweenWrapper>
                </div>
              </Swiper.Item>
            ))
          }
        </Swiper>
      </Flex1Wrapper>
    )
  }

  return (
    <FestivelBannerWrapper>
      <div className='festival-box'>
        <div className="festival-header">
          <span className='festival-name'>七夕节</span>
          <FlexRowBetweenWrapper className='festival-body' >
            <div className='festival-content'>
              <span className='font-big'>首单折合0元购 </span>
              <span className='font-small'>下单返还100% 最高返还150元</span>
            </div>
            <span className='festival-button' >Go</span>
          </FlexRowBetweenWrapper>
        </div>
        {/* 渲染3个轮播图*/}
        <FlexRowWrapper
          className="slider-body"
        >
          {renderSliderList(0)}
          {renderSliderList(1)}
          {renderSliderList(2)}
        </FlexRowWrapper>
      </div>
      {/* 节日推荐 */}
      <div className='banner-box' >
        <span className='banner-name'>七夕节</span>
        <div className="banner-body">
          <div className='banner-content'>
            <div className='banner-content-1'>七夕新人专属礼</div>
            <div className='banner-content-2'>免费领取3天Pro会员</div>
            <span className='banner-content-3'>爆款0元立抢&gt;</span>
          </div>
        </div>
      </div>
    </FestivelBannerWrapper>
  )
}

export default memo(FestivalBanner)
