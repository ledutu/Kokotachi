import { Dimensions } from 'react-native'
export const { width, height } = Dimensions.get('window')

export const IPHONE_5S_WIDTH = 320

export const ASPECT_RATIO = width / height

export const type_utils = {
    most_viewed: {
        icon: require("../assets/images/title-icon-01.png"),
        display: 'Most viewed',
        list_screen: 'ArticleList',
        all_message: null
    },
    job: {
        icon: require("../assets/images/title-icon-job.png"),
        display: 'Job',
        list_screen: 'ArticleList',
        all_message: 'All articles'
    },
    apartment: {
        icon: require("../assets/images/title-icon-apartment.png"),
        display: 'Apartment',
        list_screen: 'ArticleList',
        all_message: 'All articles'
    },
    lifestyle: {
        icon: require("../assets/images/title-icon-lifestyle.png"),
        display: 'Life style',
        list_screen: 'ArticleList',
        all_message: null
    },
    event: {
        icon: require("../assets/images/title-icon-event.png"),
        display: 'Event',
        list_screen: 'EventList',
        all_message: 'All events'
    },
    // sim: {
    //     icon: require("../assets/images/title-icon-sim.png"),
    //     display: 'SIM',
    //     list_screen: null,
    //     all_message: null
    // },
    cosme: {
        icon: require("../assets/images/title-icon-cosme.png"),
        display: 'Cosmetic',
        list_screen: 'ArticleList',
        all_message: 'All articles'
    },
    // date: {
    //     icon: require("../assets/images/title-icon-date.png"),
    //     display: 'Date',
    //     list_screen: null,
    //     all_message: null
    // },
    church: {
        icon: require("../assets/images/title-icon-church.png"),
        display: 'Church',
        list_screen: 'ChurchList',
        all_message: null
    }
}