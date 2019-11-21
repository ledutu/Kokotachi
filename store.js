import { createStore } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import Config from 'react-native-config'
import defaultReducer from './reducers'
import staticListReducer from './reducers/staticList'
import staticPageReducer from './reducers/staticPage'
import reduceReducers from './utils/reduceReducers'
import homeReducer from './reducers/home'

const { DEFAULT_LANGUAGE } = Config

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}


const initState = {
    language: DEFAULT_LANGUAGE,
    user: null,

    // MODALS
    modal_static_page_name: null,
    
    // STATIC LIST
    prefectures: [],
    nationalities: [],
    jlpt_levels: [],
    situations: [],
    periods: [],
    working_types: [],
    occupations: [],
    resident_methods: [],

    // HOME
    banners: [],
    topViewArticles: [],
    jobArticles: [],
    apartmentArticles: [],
    lifestyleArticles: [],
    simArticles: [],
    cosmeArticles: [],
    churchs: [],
    events: [],
    eventTypes: []
}

const reducedReducer = reduceReducers(
    initState, 
    defaultReducer, 
    staticListReducer,
    staticPageReducer,
    homeReducer
)

const persistedReducer = persistReducer(persistConfig, reducedReducer)

const store = createStore(persistedReducer)

export default store;