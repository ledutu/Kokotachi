export const ActionTypes = {
    SET_PRIMARY: '[HOME] Set primary',
    SET_ARTICLES: '[HOME] Set nationalities',
    RESET_ALL: '[HOME] Reset all'
}

export default function reducer(state, action) {
    switch(action.type) {
        case ActionTypes.SET_PRIMARY:
            return {
                ...state,
                banners: action.payload.banners,
                topViewArticles: action.payload.topViewArticles
            }

        case ActionTypes.SET_ARTICLES:
            return {
                ...state,
                jobArticles: action.payload.jobArticles,
                apartmentArticles: action.payload.apartmentArticles,
                lifestyleArticles: action.payload.lifestyleArticles,
                simArticles: action.payload.simArticles,
                cosmeArticles: action.payload.cosmeArticles,
                churchs: action.payload.churchs,
                events: action.payload.events,
            }

        case ActionTypes.RESET_ALL: 
            return {
                ...state,
                banners: [],
                topViewArticles: [],
                jobArticles: [],
                apartmentArticles: [],
                lifestyleArticles: [],
                simArticles: [],
                cosmeArticles: [],
                churchs: [],
                events: []
            }

        default:
            return state
    }
}