import React, { memo } from 'react'
import { CartWrapper } from './style'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { FlexRowBetweenWrapper, FlexRowWrapper, FlexColumnBetweenWrapper } from '@/components/commonstyle';
import classnames from 'classnames';
import { checkGoodsAction, checkAllGoodsAction, changeGoodsNumAction } from '@/store/actions/goodsList';


interface Props {
  goodsList: any[];
  checkAll: boolean;
  totalPrice: number;
  checkGoodsDispatch: (goodsId: string) => void;
  checkAllGoodsDispatch: (data: any) => void;
  changeGoodsNumDispatch: (data: any) => void;

}

const Cart: React.FC<Props> = (props) => {
  const {
    goodsList,
    checkAll,
    totalPrice
  } = props;
  const {
    checkGoodsDispatch,
    checkAllGoodsDispatch,
    changeGoodsNumDispatch
  } = props;
  const checkGoods = (goodsId: string) => {
    // console.log(goodsId, '-------------')
    checkGoodsDispatch(goodsId);
  }
  const checkAllGoods = () => {
    checkAllGoodsDispatch(checkAll)
  }
  const changeGoodNum = (e: any, status: string, goodsId: string) => {
    e.preventDefault();
    e.stopPropagation();
    let data = {
      status: status,
      goodsId: goodsId
    }

    changeGoodsNumDispatch(data)
  }
  const renderCartList = () => {
    return (
      goodsList
        .filter((item, index) => item.enterCart)
        .map(item => (
          <FlexRowWrapper className="cart-item" key={item.id}>
            <i className={classnames(
              "iconfont",
              "check-button",
              { "icon-yuanxingweixuanzhong": (!item.check) },
              { "icon-yuanxingxuanzhongfill": item.check },

            )}
              onClick={checkGoods.bind(null, "" + item.id)}
            ></i>
            <div className="cart-item-box">
              <div className="cart-item-img" >
                <img src={item.listPicUrl} alt="" width="100%" height="100%" />
              </div>
              <div className="cart-item-content">
                <div className="cart-item-name">{item.name}</div>
                <FlexRowBetweenWrapper className="cart-item-body">
                  {/* ???????????? */}
                  <div className="cart-item-price">{"???"+item.retailPrice}</div>
                  {/* ??????????????????????????? */}
                  <FlexRowWrapper className="cart-item-button">
                    {item.goodsNum != 0 ? <i className='iconfont icon-jianhao'
                      onClick={(e) => changeGoodNum(e, 'reduce', item.id)}></i> : <div></div>}
                    <div className="cart-item-goods-num">{item.goodsNum}</div>
                    <i className='iconfont icon-jiahao'
                      onClick={(e) => changeGoodNum(e, 'add', item.id)}></i>
                  </FlexRowWrapper>
                </FlexRowBetweenWrapper>
              </div>
            </div>
          </FlexRowWrapper>
        ))
    )
  }

  return (
    <CartWrapper>
      {/* ?????? */}
      <div className="cartlist-box">
        {renderCartList()}
      </div>
      {/* ?????? */}
      <FlexRowBetweenWrapper className="total-cartlist-box">
        <div className="check-all-box">
          <i className={classnames(
            "iconfont",
            "check-all-button",
            { "icon-yuanxingweixuanzhong": !checkAll },
            { "icon-yuanxingxuanzhongfill": checkAll },

          )}
            onClick={() => checkAllGoods()}
          ></i>
          <span>??????</span>
        </div>
        <div className="total-content-box">
          <div className="total-price-box">
            {`??????: ${totalPrice.toFixed(2)}`}
          </div>

        </div>
      </FlexRowBetweenWrapper>
    </CartWrapper>
  )
}

const mapStateToProps = (state: any) => {
  let totalPrice = state.home.goodsList
    .filter((item: any, index: any) => item.enterCart)
    // .filter((item: any, index: any) => item.check)
    .reduce(
      (total: number, item: any) => total + (item.check ?
        parseFloat("" + (item.retailPrice * item.goodsNum)) : 0), 0)
  return {
    goodsList: state.home.goodsList,
    checkAll: state.home.goodsList
      .filter((item: any, index: any) => item.enterCart)
      .filter((item: any) => item.check).length
      == state.home.goodsList
        .filter((item: any, index: any) => item.enterCart)
        .length,
    totalPrice: totalPrice,

  }

}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    checkGoodsDispatch(goodsId: string) {
      dispatch(checkGoodsAction(goodsId))
    },
    changeGoodsNumDispatch(data: any) {
      dispatch(changeGoodsNumAction(data))
    },
    checkAllGoodsDispatch(data: any) {
      dispatch(checkAllGoodsAction(data))
    },
    // getAllGoodsDispatch() {
    //   dispatch(getAllGoodsAction())
    // }
  }
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(Cart))