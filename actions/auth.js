import { ActionTypes } from '../reducers'

export const setAuth = data => ({ type: ActionTypes.SET_AUTH, data })
export const logOut = () => ({ type: ActionTypes.LOGOUT })