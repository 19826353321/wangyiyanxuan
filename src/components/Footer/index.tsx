import React, { memo } from 'react'
import { FooterWrapper } from './style'
import { useLocation, Link } from 'react-router-dom'
import classnames from 'classnames'
import { isPathPartlyExisted } from '@/utils'
import { connect } from 'react-redux'

const Footer: React.FC<any> = (props) => {
  // TabsOffsetTop是主页Tabs组件在页面的偏移高度
  const { TabsOffsetTop } = props;
  // 拿到url上的网址
  const { pathname } = useLocation();
  // 根据url判断页面是否应该添加tabbars
  if (isPathPartlyExisted(pathname)) return (<></>)

  return (
    <FooterWrapper>
      <Link to="/home" className={classnames({ active: pathname == '/home' || pathname == '/' })}
        onClick={() => {
          //比较页面偏移的高度与tabs组件在页面中的位置
          if (Math.ceil(window.pageYOffset) >= (TabsOffsetTop)) {
            window.scroll(0, 0)
          } else {
            window.scroll(0, TabsOffsetTop)
          }
        }}
      >
        <i className={classnames("iconfont",
          { "icon-shouye": !(pathname == '/home' || pathname == '/') },
          { "icon-xiangxia1": Math.ceil(window.pageYOffset) < TabsOffsetTop && (pathname == '/home' || pathname == '/') },
          { "icon-xiangshang4": Math.ceil(window.pageYOffset) >= TabsOffsetTop && (pathname == '/home' || pathname == '/') }
        )}></i>
        <div className='tabbar-name'>首页</div>
      </Link>
      <Link to="/partitions" className={classnames({ active: pathname == '/partitions' })}>
        <i className="iconfont icon-fenlei"></i>
        <div className='tabbar-name'>分类</div>
      </Link>
      <Link to="/cat" className={classnames({ active: pathname == '/cat' })}>
        <i className="iconfont icon-mao"></i>
        <div className='tabbar-name'>猫咖</div>
      </Link>
      <Link to="/cart" className={classnames({ active: pathname == '/cart' })}>
        <i className="iconfont icon-gouwuche"></i>
        <div className='tabbar-name'>购物车</div>
      </Link>
      <Link to="/mine" className={classnames({ active: pathname == '/mine' })}>
        <i className="iconfont icon-geren"></i>
        <div className='tabbar-name'>个人</div>
      </Link>
    </FooterWrapper>
  )
}

const mapStateToProps = (state: any) => ({
  TabsOffsetTop: state.home.TabsOffsetTop
})

export default memo(connect(mapStateToProps)(Footer))
