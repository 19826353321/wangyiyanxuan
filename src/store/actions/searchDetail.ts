import { Dispatch } from 'redux'
import * as actionTypes from '../action-types'
import { getSearchDetailItemRequest } from '@/api/request'

export const getSearchDetailItemAction = (index: number): any => {
    return (dispatch: Dispatch) => {
        return Promise.all([
            getSearchDetailItemRequest(index)
        ]).then(([SearchDetailItemResult]: any) => {
            dispatch(
                setSearchDetailItem(SearchDetailItemResult)
            );
        })
    }
}


export const setSearchDetailItem = (data: any) => {


    return ({
        type: actionTypes.SET_SEARCH_DETAIL_ITEM,
        data
    })
}
