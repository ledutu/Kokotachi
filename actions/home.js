import { ActionTypes } from '../reducers/home'

export const setPrimary = payload => ({ type: ActionTypes.SET_PRIMARY, payload })
export const setActicles = payload => ({ type: ActionTypes.SET_ARTICLES, payload })

export const resetAll = () => ({ type: ActionTypes.RESET_ALL })