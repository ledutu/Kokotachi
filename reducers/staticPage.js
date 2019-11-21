export const ActionTypes = {
    SET_MODAL_STATIC_PAGE_OPEN: '[Auth] Set modal static page open',
    SET_MODAL_STATIC_PAGE_CLOSE: '[Auth] Set modal static page close',
}

export default function reducer(state, action) {
    switch (action.type) {
        case ActionTypes.SET_MODAL_STATIC_PAGE_OPEN:
            return {
                ...state,
                modal_static_page_name: action.page_name
            }

        case ActionTypes.SET_MODAL_STATIC_PAGE_CLOSE:
            return {
                ...state,
                modal_static_page_name: null
            }
    
        default:
            return state
    }
}