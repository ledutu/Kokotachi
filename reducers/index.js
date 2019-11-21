import Config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';
const { AUTH_TOKEN } = Config;

export const ActionTypes = {
    SET_LANGUAGE: '[Language] Set language',
    SET_AUTH: '[Auth] Set authenticated user: user, token',
    SET_USER: '[User] Set user',
    LOGOUT: '[Auth] Logout',
};

export default function reducer(state, action = {}) {
    switch (action.type) {
        case ActionTypes.SET_LANGUAGE:
            return {
                ...state,
                language: action.language
            }

        case ActionTypes.SET_AUTH:
            AsyncStorage.setItem(AUTH_TOKEN, action.data.token.key)
            return {
                ...state,
                user: action.data.user
            }

        case ActionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }

        case ActionTypes.LOGOUT:
            AsyncStorage.removeItem(AUTH_TOKEN)
            return {
                ...state,
                user: null
            }

        default:
            return state;
    }
}