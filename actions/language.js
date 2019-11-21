import { ActionTypes } from './../reducers'

/**
 * Set language
 * @param {string} language
 */
export const setLanguage = language => ({ type: ActionTypes.SET_LANGUAGE, language })