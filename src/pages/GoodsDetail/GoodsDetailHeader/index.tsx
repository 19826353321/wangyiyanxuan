import React, { useState, memo } from 'react'
import { GoodsDetailHeaderWrapper } from './style'
import { FlexRowWrapper, Flex1Wrapper, FlexRowBetweenWrapper } from '@/components/commonstyle'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Mask, Space } from 'antd-mobile'

const GoodsDetailHeader = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false)
  return (
    <GoodsDetailHeaderWrapper>
      {/* <FlexRowWrapper> */}

      <i className='iconfont icon-xiangzuo' onClick={() => { navigate(-1) }}></i>
      <Flex1Wrapper className="search-box">
        <i className='iconfont icon-sousuo'></i>

        <Link to={{
          pathname: "/search",
        }} >
          <input type="text" placeholder='酱油' className='search-input' />
        </Link>
      </Flex1Wrapper>
      <Link to={{
        pathname: "/home",
      }} >
        <i className='iconfont icon-shouye'></i>
      </Link>
      <i className='iconfont icon-fenxiang' onClick={() => setVisible(true)}></i>
      {/* 分享遮罩层模块 */}
      <Mask
        visible={visible}
        onMaskClick={() => setVisible(false)}
        opacity={1}
      >
        <div className="mask-box">
          <div className="mask-content">
            <div className="mask-item">
              <i className='iconfont icon-weixin'></i>
              <span className="mask-name">微信好友</span>
            </div>
            <div className="mask-item">
              <i className='iconfont icon-weixin'></i>
              <div className="mask-name">微信好友</div>
            </div>
            <div className="mask-item">
              <i className='iconfont icon-weixin'></i>
              <div className="mask-name">微信好友</div>
            </div>
            <div className="mask-item">
              <i className='iconfont icon-weixin'></i>
              <div className="mask-name">微信好友</div>
            </div>
            <div className="mask-item">
              <i className='iconfont icon-weixin'></i>
              <div className="mask-name">微信好友</div>
            </div>
            <div className="mask-item">
              <i className='iconfont icon-weixin'></i>
              <div className="mask-name">微信好友</div>
            </div>
            <div className="mask-item">
              <i className='iconfont icon-fenxiangweixinpengyouquan'></i>
              <div className="mask-name">微信朋友圈</div>
            </div>
            <div className="mask-item">
              <i className='iconfont icon-fenxiangweixinpengyouquan'></i>
              <div className="mask-name">微信朋友圈</div>
            </div>
            <div className="mask-item">
              <i className='iconfont icon-fenxiangweixinpengyouquan'></i>
              <div className="mask-name">微信朋友圈</div>
            </div>
          </div>
          <i className='iconfont icon-cuowukongxin'
          onClick={() => setVisible(false)}
          ></i>

        </div>
      </Mask>
    </GoodsDetailHeaderWrapper >
  )
}

export default memo(GoodsDetailHeader)
