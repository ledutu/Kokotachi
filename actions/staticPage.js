import { ActionTypes } from '../reducers/staticPage'

export const openStaticPage = page_name => ({ type: ActionTypes.SET_MODAL_STATIC_PAGE_OPEN, page_name })
export const closeStaticPage = () => ({ type: ActionTypes.SET_MODAL_STATIC_PAGE_CLOSE })