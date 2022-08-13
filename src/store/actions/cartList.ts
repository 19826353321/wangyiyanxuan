import { AnyAction, Dispatch } from "redux";
import * as ActionTypes from '../action-types'
import { getCateListRequest } from "@/api/request";

// export const setHotword = (data: any[]): AnyAction => ({
//     type: ActionTypes.SET_HOTWORD,
//     data
// })

// export const getHotword = () => {
//     return (dispatch: Dispatch<AnyAction>) => {
//         //请求数据？
//         dispatch(setHotword([]))
//     }
// }
export const setCateList = (data: any[]): AnyAction => ({
    type: ActionTypes.SET_CATE_LIST,
    data
})

export const getCateList = ():any => {
    return (dispatch: Dispatch<AnyAction>) => {
        //请求数据？
        getCateListRequest()
            .then(data => {
                const action = setCateList(data);
                dispatch(action)
            })
    }
}