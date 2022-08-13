import * as actionTypes from '../action-types'

export const setLoading = (data: boolean) => ({
    type: actionTypes.SET_LOADING,
    data
})