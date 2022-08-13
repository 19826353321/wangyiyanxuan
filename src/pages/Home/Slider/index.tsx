import React, { useEffect, memo } from 'react'
import LazyLoad from 'react-lazyload'
import defaultImg from '@/assets/imgs/default.png'
import { SliderWrapper } from './style'
import { FlexColumnBetweenWrapper } from '@/components/commonstyle'
import style, { px2rem } from '@/assets/styles/global-style'
import Swiper from "swiper"

const Slider = () => {
  //设置默认的轮播图数据
  const sliderList: sliderType[] = [
    {
      id: "1",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "美食酒水"
    },
    {
      id: "2",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "必买榜单"
    },
    {
      id: "3",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "数码家电"
    },
    {
      id: "4",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "新人福利"
    },
    {
      id: "5",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "服饰鞋包"
    },
    {
      id: "6",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "首单0元"
    },
    {
      id: "7",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "各户清洁"
    },
    {
      id: "8",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "特特特价"
    },
    {
      id: "9",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "居家生活"
    },
    {
      id: "10",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "CEO推荐"
    },
    {
      id: "11",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "运动旅行"
    },
    {
      id: "12",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "每日抄底"
    },
    {
      id: "13",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "母婴亲子"
    },
    {
      id: "14",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "Pro会员"
    },
    {
      id: "15",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "宠物生活"
    },
    {
      id: "16",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "明星商品"
    },
    {
      id: "17",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "猫咖基地"
    },
    {
      id: "18",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "众筹"
    },
    {
      id: "19",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "情趣生活"
    },

    {
      id: "20",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "新品首发"
    },
    {
      id: "21",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "茅台抢购"
    },
    {
      id: "22",
      imgUrl: "https://yanxuan.nosdn.127.net/69bcfd9a83792d1ba295820bd0f427f9.png",
      name: "严选超市"
    },

  ]
  interface sliderType {
    id: string;
    imgUrl: string;
    name: string;
  }
  useEffect(() => {
    let swiper;
    if (!swiper && sliderList.length > 0) {
      swiper = new Swiper('.banner-swiper', {
        freeMode: true,
        slidesPerView: 5,
        spaceBetween: 10,
        centeredSlides: false, // active slide 居中设置（默认居左）
        centeredSlidesBounds: false, // 主要是为了让第一个贴边（赠送最后一个贴合边缘） 
        //滚动条主体部分的长度   
        scrollbar: {
          el: '.swiper-scrollbar',
          dragSize: 20,
        },
      })
      //滚动条主体部分的颜色   
      swiper.scrollbar.$dragEl.css('background', '#dd1a22');
    }
  }, [sliderList])
  //渲染banner里的内容
  const renderSliderList = () => {
    return (
      <>
        {sliderList.filter((item, index) => (index % 2 == 0)).map((item, index) => (
          <div key={item.id} className="swiper-slide">
            <FlexColumnBetweenWrapper >
              <div className="slider-img">
                <LazyLoad
                  placeholder={<img width="100%"
                    height="100%" src={defaultImg} />}>
                  <img src={item.imgUrl} alt="" />
                </LazyLoad>
              </div>
              <div className='slider-name'>{item.name}</div>
            </FlexColumnBetweenWrapper>
            <FlexColumnBetweenWrapper >
              <div className="slider-img">
                <LazyLoad
                  placeholder={<img width="100%"
                    height="100%" src={defaultImg} />}>
                  <img src={sliderList[index + 1].imgUrl} alt="" />
                </LazyLoad>
              </div>
              <div className='slider-name'>{sliderList[index + 1].name}</div>
            </FlexColumnBetweenWrapper>
          </div>
        ))}
      </>
    )
  }

  return (
    <SliderWrapper>
      <div className="swiper-container banner-swiper"
        style={{
          height: `${px2rem(130)}`
        }}
      >
        <div className="swiper-wrapper">
          {renderSliderList()}
        </div>
        {/* 进度条 */}
        <div className="swiper-scrollbar"
          style={{
            "width": `${px2rem(40)}`,
            "height": `${px2rem(3)}`,
            "margin": `${px2rem(100)} 0 0 0`,
            "left": `${px2rem(140.5)}`,
            "bottom": `${px2rem(0)}`,
          }}
        >
        </div>
      </div>
    </SliderWrapper >
  )
}

export default memo(Slider)