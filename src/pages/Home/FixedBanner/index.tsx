import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { FixedBannerWrapper } from './style'
import Countdown from '@/components/Countdown'

const FixedBanner = () => {
  const [isNone, setIsNone] = useState(false);
  useEffect(() => {
    setIsNone(false);
  }, [])
  
  return (
    <FixedBannerWrapper className={classnames({ none: isNone })}>
      <div className="fixedBanner-box">
        新人15元礼包限时领取 2天后失效
        {/* 倒计时 */}
        <div className="countdown-wrapper">
          <Countdown />
        </div>
        {/* 退出广告 */}
        <i className='iconfont icon-cuowukongxin'
          onClick={() => { setIsNone(true) }}
        ></i>
      </div>
    </FixedBannerWrapper>
  )
}

export default FixedBanner
