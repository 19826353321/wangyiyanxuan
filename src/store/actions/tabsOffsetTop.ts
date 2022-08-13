import { Dispatch } from 'redux'
import * as actionTypes from '../action-types'

export const setTabsOffsetTopAction = (data: number): any => {
    return (dispatch: Dispatch) => {

        dispatch(setTabsOffsetTop(data));


    }
}


export const setTabsOffsetTop = (data: any) => {


    return ({
        type: actionTypes.SET_TABS_OFFSET_TOP,
        data
    })
}
