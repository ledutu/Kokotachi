import axios from './axios'

const LIST_PERPAGE = 10;

export function fetchBanners() {
    return axios.get('/v1/banners', {
        params: {
            per_page: 3
        }
    })
}

export function fetchArticles({ type, slug_category, page = 1, author_id, per_page = LIST_PERPAGE, order = 'approved_at', cancelToken }) {
    return axios.get('/v1/articles', {
        params: { per_page, type, slug_category, page, order, author_id, mobileApp: 'native' },
        cancelToken,
    })
};

export function fetchTopChurch() {
    return axios.get('/v1/church', {
        params: {
            top: 4,
        }
    })
};

export function fetchEvents({ category_slug, page = 1, per_page = LIST_PERPAGE }, searchQuery = {}) {
    return axios.get('/v1/events', {
        params: { page, category_slug, per_page, ...searchQuery }
    })
}