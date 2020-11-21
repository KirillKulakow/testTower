import { UPLOAD_USERS, SET_LOADING, SET_PAGE } from '../types'

export const uploadUsers = (DB) => ({
    type: UPLOAD_USERS,
    payload: DB,
})

export const setLoading = (bool) => ({
    type: SET_LOADING,
    payload: bool,
})

export const setPage = (number) => ({
    type: SET_PAGE,
    payload: number,
})