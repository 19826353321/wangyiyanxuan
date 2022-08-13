import React, { memo } from 'react'
import logoImg from "@/assets/imgs/logo.png"
import { HeaderWrapper } from './style'
import { FlexRowBetweenWrapper, FlexColumnBetweenWrapper } from '@/components/commonstyle'

const Header = () => {
    return (
        <HeaderWrapper>
            <FlexRowBetweenWrapper>
                <div className="header-left">
                    <div className="header-left-item">
                        <img src={logoImg} alt="网易严选" className="logo-img" height="100%" width="100%" />
                    </div>
                </div>
                <FlexRowBetweenWrapper className="header-right">
                    <div >
                        图片
                    </div>
                    <FlexColumnBetweenWrapper className='header-right-item'>
                        <i className='iconfont icon-saoyisao'></i>
                        <div className='header-right-name'>扫一扫</div>
                    </FlexColumnBetweenWrapper>
                    <FlexColumnBetweenWrapper className='header-right-item'>
                        <i className='iconfont icon-xiaoxi'></i>
                        <div className='header-right-name'>消息</div>
                    </FlexColumnBetweenWrapper>
                </FlexRowBetweenWrapper>
            </FlexRowBetweenWrapper>
        </HeaderWrapper>
    )
}

export default memo(Header)