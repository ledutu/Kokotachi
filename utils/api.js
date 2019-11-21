import { CancelToken } from 'axios'
import axios from './axios'
import Config from 'react-native-config'
import i18n from '../language/i18n'

const { LIST_PERPAGE } = Config

export function fetchBanners() {
    return axios.get('/v1/banners', {
        params: {
            language: i18n.language,
            per_page: 3
        }
    })
}

/**
 * Fetch articles from API (Cancellable)
 * 
 * @param {Object} params 
 * @param {string} params.type 
 * @param {number} params.per_page 
 * @param {number} params.page
 * @param {string} params.language
 * @param {string} params.slug_category
 * @param {string} params.order
 * @param {CancelToken} params.cancelToken
 */
export function fetchArticles({ type, slug_category, page = 1, author_id, language = i18n.language, per_page = LIST_PERPAGE, order = 'approved_at', cancelToken }) {
    return axios.get('/v1/articles', {
        params: { language, per_page, type, slug_category, page, order, author_id, mobileApp: 'native' },
        cancelToken
    })
}

/**
 * Fetch events from API
 * 
 * @param {Object} params 
 * @param {number} params.per_page 
 * @param {number} params.page
 * @param {string} params.language
 * @param {string} params.category_slug
 */
export function fetchEvents({ category_slug, page = 1, language = i18n.language, per_page = LIST_PERPAGE }, searchQuery = {}) {
    return axios.get('/v1/events', {
        params: { page, language, category_slug, per_page, ...searchQuery }
    })
}

/**
 * Fetch all categories from api (Cancellable)
 * 
 * @param {Object} props
 * @param {string} props.language
 * @param {CancelToken} props.cancelToken 
 */
export function fetchCategories({ language = i18n.language, cancelToken }) {
    return axios.get('/v1/categories', {
        params: { language },
        cancelToken
    })
}

/**
 * Fetch related articles (Cancellable)
 * 
 * @param {Object} props 
 * @param {string} props.except_article
 * @param {number} props.per_page
 * @param {CancelToken} props.cancelToken
 */
export function getArticles_MayULike({ except_article, per_page = LIST_PERPAGE, cancelToken }) {
    return axios.get('/v1/articles', {
        params: { language: i18n.language, per_page, except_article },
        cancelToken
    })
}

export function getArticleComments(slug_article, page = 1) {
    return axios.get('/v1/comments', {
        params: { slug_article, page, language: i18n.language }
    })
}

export function fetchContentArticle(article_id, page = 1) {
    return axios.get('/v1/get-content-article', {
        params: { article_id:article_id, language: i18n.language }
    })  
}

export function authenticate(data) {
    return axios.post('/v1/login', data)
}

export function comment(data) {
    return axios.post('/v1/comment', { ...data, language: i18n.language })
}

export function updateComment(id, comment) {
    return axios.put('/v1/comment/' + id, { comment })
}

export function fetchPrefectures() {
    return axios.get('/v1/prefectures', {
        params: {
            language: i18n.language
        }
    })
}

export function fetchCities(prefecture_id) {
    return axios.get(`/v1/prefectures/${prefecture_id}/cities`, {
        params: {
            language: i18n.language
        }
    })
}

export function fetchNationalities() {
    return axios.get('/v1/nationalities', {
        params: {
            language: i18n.language
        }
    })
}

export function fetchJlptlevels() {
    return axios.get('/v1/jlptlevels', {
        params: {
            language: i18n.language
        }
    })
}

export function fetchSituations() {
    return axios.get('/v1/situations', {
        params: {
            language: i18n.language
        }
    })
}

export function fetchPeriods() {
    return axios.get('/v1/periods', {
        params: {
            language: i18n.language
        }
    })
}

export function fetchResidentMethods() {
    return axios.get('/v1/resident-methods', {
        params: {
            language: i18n.language
        }
    })
}

export function fetchOccupations() {
    return axios.get('/v1/occupations', {
        params: {
            language: i18n.language
        }
    })
}

export function fetchWorkingTypes() {
    return axios.get('/v1/working-types', {
        params: {
            language: i18n.language
        }
    })
}

export function saveProfile(data) {
    return axios.post('/v1/profile', { ...data, language: i18n.language })
}

export function signUp(data) {
    return axios.post('/v1/sign-up', { ...data, language: i18n.language })
}

export function uploadFile(data) {
    return axios.post('/v1/upload-file', data)
}

export function fetchChurchs(query = {}) {
    const params = {
        ...query,
        language: i18n.language
    }

    return axios.get('/v1/church', {
        params
    })
}

export function fetchTopChurch() {
    return axios.get('/v1/church', { params: {
        top: 4,
        language: i18n.language
    }})
}

export function likeArticle({ id, user_id }) {
    return axios.post('/v1/like-article', { id, user_id })
}

export function loginSocial(data) {
    return axios.post('/v1/login-social', data)
}

export function fetchPage(id) {
    return axios.get('/v1/static-page/' + id, {
        params: { language: i18n.language }
    })
}

export function deleteComment(id) {
    return axios.delete('/v1/comment/' + id)
}

export function sendContact(data) {
    return axios.post('/v1/contact-us', { ...data, language: i18n.language })
}

export function resetPassword(data) {
    return axios.post('/v1/forget-password', { ...data, language: i18n.language })
}

export function fetchEventTypes() {
    console.log('Api fetchTypeEvents');
    return axios.get('/v1/categories', {
        params: {
            type: 'event',
            language: i18n.language
        }
    })
}