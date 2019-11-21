export const ActionTypes = {
    SET_PREFECTURES: '[Static list] Set prefectures',
    SET_NATIONALITIES: '[Static list] Set nationalities',
    SET_JLPT_LEVELS: '[Static list] Set jlpt levels',
    SET_SITUATIONS: '[Static list] Set situations',
    SET_STATIC_LIST: '[Static list] Set static list'
}

export default function reducer(state, action) {
    switch (action.type) {
        case ActionTypes.SET_PREFECTURES:
            return {
                ...state,
                prefectures: action.prefectures
            }

        case ActionTypes.SET_NATIONALITIES:
            return {
                ...state,
                nationalities: action.nationalities
            }

        case ActionTypes.SET_JLPT_LEVELS:
            return {
                ...state,
                jlpt_levels: action.jlpt_levels
            }

        case ActionTypes.SET_SITUATIONS:
            return {
                ...state,
                situations: action.situations
            }

        case ActionTypes.SET_STATIC_LIST:
            const { data } = action
            return {
                ...state,
                prefectures: data.prefectures,
                nationalities: data.nationalities,
                jlpt_levels: data.jlpt_levels,
                situations: data.situations,
                periods: data.periods,
                working_types: data.working_types,
                occupations: data.occupations,
                resident_methods: data.resident_methods,
                eventTypes: data.eventTypes
            }
    
        default:
            return state
    }
}