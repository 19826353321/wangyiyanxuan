import React, { useEffect, useState ,memo} from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { addCartAction } from '@/store/actions/goodsList'
import { GoodsDetailWrapper } from './style'
import GoodsDetailHeader from "./GoodsDetailHeader"
import GoodsDetailBody from "./GoodsDetailBody"
import GoodsDetailFooter from "./GoodsDetailFooter"
import {getGoodsDetailListAction,getGoodsDetailItemAction} from '@/store/actions/goodsDetail'

interface Props{
    goodsList:any[];
    goodsDetailList:any[];
    goodsDetailItem:any;
    addCartDispatch:(itemId:string)=>void;
    getGoodsDetailListDispatch:(goodsId:string)=>void;
    getGoodsDetailItemDispatch:(goodsId:string)=>void;
  }
const GoodsDetail: React.FC<Props> = (props) => {
  // 拿到URL上商品的id
  const { pathname } = useLocation();
  const pathRes = pathname.split('/');
  const itemId = pathRes[2];
  // 拿到商品列表
  const {
    goodsList,
    goodsDetailList,
    goodsDetailItem

  } = props
  const { addCartDispatch,getGoodsDetailListDispatch ,getGoodsDetailItemDispatch} = props
  
  const addCart = () => {
    addCartDispatch(itemId);
  }
  useEffect(()=>{
    // getGoodsDetailListDispatch(itemId)
    getGoodsDetailItemDispatch(itemId)
  },[])
  return (
    <GoodsDetailWrapper>
      <GoodsDetailHeader/>
      <GoodsDetailBody goodsDetailList={goodsDetailList} itemId={itemId}
      goodsDetailItem={goodsDetailItem}/>
      <GoodsDetailFooter itemId={itemId} addCart={addCart}/>
      <div>
        {/* {goodsDetail.id} */}
        {/* {goodsList.filter(item => (item.id == itemId)).map((item, index) => (
          <div key={index}>{item.id}</div>
        ))} */}
        {/* {goodsDetailItem.updateTime} */}
        
      </div>
      {/* {goodsDetailItem.itemDetail.detailHtml} */}
    </GoodsDetailWrapper>
  )
}
const mapStateToProps = (state: any) => ({
  goodsList:state.home.goodsList,
  goodsDetailList:state.goodsDetail.goodsDetailList,
  goodsDetailItem:state.goodsDetail.goodsDetailItem,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addCartDispatch(goodsId: string) {
    dispatch(addCartAction(goodsId))
    // console.log(goodsId);
  },
  getGoodsDetailListDispatch(goodsId:string) {
    dispatch(getGoodsDetailListAction(goodsId))
    // console.log(goodsId);
  },
  getGoodsDetailItemDispatch(goodsId:string) {
    dispatch(getGoodsDetailItemAction(goodsId))
    // console.log(goodsId);
  }
})

export default memo(connect(mapStateToProps, mapDispatchToProps)(GoodsDetail))

