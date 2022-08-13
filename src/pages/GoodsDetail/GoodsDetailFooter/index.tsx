import React, { memo, useState } from 'react'
import { GoodsDetailFooterWrapper,GoodsButtonrWrapper } from './style'
import { useNavigate, Link } from 'react-router-dom'
import classnames from 'classnames'
import { Button, Modal, Space, Toast, Divider } from 'antd-mobile'

const GoodsDetailFooter: React.FC<any> = (props) => {
  const { itemId } = props;
  const { addCart } = props;
  const [isShouCang, setIsShouCang] = useState<boolean>(false)
  const [visible, setVisible] = useState(false)
  return (
    <GoodsDetailFooterWrapper>
      <div className="icon">
        {/* 客服 */}
        <i className='iconfont icon-kefu'></i>
        {/* 去往购物车 */}
        <Link to={{ pathname: "/cart" }} >
          <i className='iconfont icon-gouwuche'></i>
        </Link>
        {/* 收藏 */}
        <i className={classnames(
          "iconfont",
          { "icon-shoucang": !isShouCang },
          { "icon-star__easyico": isShouCang },
          { shoucang: isShouCang },
        )}
          onClick={() => { setIsShouCang(!isShouCang) }}
        ></i>
      </div>

      <div className="button">
        <GoodsButtonrWrapper className='cart'
          onClick={() => {
            addCart()
            setVisible(true)
            
          }}
        >加入购物车</GoodsButtonrWrapper>
        <GoodsButtonrWrapper className='buy'>立即购买</GoodsButtonrWrapper>
      </div>
      <Modal
        visible={visible}
        content='加入购物车成功'
        closeOnAction
        afterShow={
          () => {
            setTimeout(() => {
               setVisible(false)
            }, 2000);
          }
        }
      />
    </GoodsDetailFooterWrapper>
  )
}

export default memo(GoodsDetailFooter)
