import { Dispatch } from 'redux'
import * as actionTypes from '../action-types'
import {
    getKeywordsRequest
} from '@/api/request'

export const getKeywordsAction = ():any => {
    return (dispatch: Dispatch) => {
        // dispatch(setLoading(true))
        getKeywordsRequest().then((data:any)=>{
            
             dispatch(setKeywords(data));
        }
           
        )
    }
}


export const setKeywords = (data: any) =>{
   
    
    return ({
    type: actionTypes.SET_KEYWORDS,
    data
})}
