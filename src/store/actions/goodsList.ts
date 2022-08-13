import { Dispatch } from 'redux'
import * as actionTypes from '../action-types'
import {
    getSearchListRequest
} from '@/api/request'
import { setLoading } from './loading'

export const getGoodsListAction = (): any => {
    return (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        return Promise.all([
            getSearchListRequest()
        ]).then(([SearchListResult]: any) => {
            dispatch(
                setGoodsGroupList(SearchListResult)
            );
            let arr = []
            for (let i = 0; i < SearchListResult.length; i++) {
                arr.push(...SearchListResult[i].directlyList)
            }
            dispatch(setGoodsList(arr));
            dispatch(setLoading(false));

        })
    }
}

export const setGoodsGroupList = (data: any) => ({
    type: actionTypes.SET_GOODS_GROUP_LIST,
    data
})
export const setGoodsList = (data: any) => ({
    type: actionTypes.SET_GOODS_LIST,
    data
})
export const checkGoodsAction = (goodsId: string) => ({
    type: actionTypes.CHECK_GOODS,
    data: goodsId
})
export const checkAllGoodsAction = (data: any) => ({
    type: actionTypes.CHECK_ALL_GOODS,
    data
})
export const changeGoodsNumAction = (data: any) => ({
    type: actionTypes.CHNAGE_GOODS_NUM,
    data: data
})
export const addCartAction = (goodsId: string) => {
    return ({
        type: actionTypes.ADD_CART,
        data: goodsId
    })
}