import { Dispatch } from 'redux'
import * as actionTypes from '../action-types'
import {
    getSearchListRequest
} from '@/api/request'

export const getSearchListAction = (): any => {
    return (dispatch: Dispatch) => {
        return Promise.all([
            getSearchListRequest()
        ]).then(([SearchListResult]: any) => {
            dispatch(
                setSearchList(SearchListResult)
            );
        })
    }
}
export const setOldSearchListAction = (keywords: any): any => {
    return (dispatch: Dispatch) => {

        dispatch(
            setOldSearchList(keywords)
        );
    }
}
export const setSearchList = (data: any) => {
    return ({
        type: actionTypes.SET_SEARCH_LIST,
        data
    })
}
export const setOldSearchList = (data: any) => {
    return ({
        type: actionTypes.SET_OLD_SEARCH_LIST,
        data
    })
}
