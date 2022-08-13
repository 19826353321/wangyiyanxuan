import { Dispatch } from 'redux'
import * as actionTypes from '../action-types'
import {
   getGoodsDetailListRequest,
   getGoodsDetailItemtRequest
} from '@/api/request'

export const getGoodsDetailListAction = (goodsId:string):any => {
    return (dispatch: Dispatch) => {
        // dispatch(setLoading(true))
        getGoodsDetailListRequest().then((data:any)=>{
            // const data1=data.filter((item:any)=>(item.id==goodsId))
            // console.log(data1,"data1");
            // console.log(1);
            
             dispatch(setGoodsDetailList(data));
        }
           
        )
    }
}
export const getGoodsDetailItemAction = (goodsId:string):any => {
    return (dispatch: Dispatch) => {
        // dispatch(setLoading(true))
        getGoodsDetailItemtRequest(goodsId).then((data:any)=>{
            // const data1=data.filter((item:any)=>(item.id==goodsId))
            // console.log(data1,"data1");
            // console.log(1);
            
             dispatch(setGoodsDetailItem(data));
        }
           
        )
    }
}

export const setGoodsDetailList = (data: any) =>{
   
    
    return ({
    type: actionTypes.SET_GOODS_DETAIL_LIST,
    data
})}
export const setGoodsDetailItem = (data: any) =>{
   
    
    return ({
    type: actionTypes.SET_GOODS_DETAIL_ITEM,
    data
})}
