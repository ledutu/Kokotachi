import Config from 'react-native-config'
import { ImageSourcePropType } from 'react-native'

const APP_URL = "https://admin.kokotachi.com";

/**
 * Check given url is absolute or not
 * 
 * @param {string} url 
 */
export function isAbsoluteUrl(url) {
    return !url || /^(https?|ftps?|mailto|javascript|data:image\/[^;]{2,9};):/i.test(url)
}

/**
 * Get source of image
 * 
 * @param {string} path 
 * @returns {ImageSourcePropType}
 */
export function imageSource(path) {
    if(!path) {
        return require('../assets/images/noimage.jpg')
    }

    if (isAbsoluteUrl(path)) {
        return { uri: path }
    }

    return {
        uri: APP_URL + path,
        headers: {
            Authorization: 'Basic a29rb3RhY2hpOnI1dGFwaA=='
        }
    }
}

/**
 * Get image source of avatar
 * 
 * @param {string} path 
 * @returns {ImageSourcePropType}
 */
// export function avatarSource(path) {
//     if (!path) {
//         return require('./../assets/images/avatar-no-image.jpg')
//     }

//     if (isAbsoluteUrl(path)) {
//         return { uri: path }
//     }

//     // remove-leading-slash
//     path = path.replace(/^\/+/g, '')

//     return { uri: APP_URL + "/storage/" + path }
// }

/**
 * Detect scrollbar is close to bottom
 */
export const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }, paddingToBottom = 200) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom
}