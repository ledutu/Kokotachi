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
};

export function fetchContentArticle(article_id, page = 1) {
    return axios.get('/v1/get-content-article', {
        params: { article_id: article_id }
    })
};

export function getArticles_MayULike({ except_article, per_page = LIST_PERPAGE, cancelToken }) {
    return axios.get('/v1/articles', {
        params: { per_page, except_article },
        cancelToken
    })
};

export function fetchChurchs(query = {}) {
    const params = {
        ...query,
    }

    return axios.get('/v1/church', {
        params
    })
};

export function fetchPrefectures() {
    return axios.get('/v1/prefectures', {
        params: {
            // language: i18n.language
        }
    })
}

export function fetchCities(prefecture_id) {
    return axios.get(`/v1/prefectures/${prefecture_id}/cities`, {
        params: {
            // language: i18n.language
        }
    })
};

export function fetchEventTypes() {
    console.log('Api fetchTypeEvents');
    return axios.get('/v1/categories', {
        params: {
            type: 'event',
            // language: i18n.language
        }
    })
};

export function deleteComment(id) {
    return axios.delete('/v1/comment/' + id)
};

export function loginSocial(data) {
    return axios.post('/v1/login-social', data)
};

export function likeArticle({ id, user_id }) {
    return axios.post('/v1/like-article', { id, user_id })
};

export function authenticate(data) {
    return axios.post('/v1/login', data)
}

export function comment(data) {
    return axios.post('/v1/comment', {
        ...data,
        // language: i18n.language
    })
}

export function updateComment(id, comment) {
    return axios.put('/v1/comment/' + id, { comment })
};

export function getArticleComments(slug_article, page = 1) {
    return axios.get('/v1/comments', {
        params: {
            slug_article, page,
            // language: i18n.language
        }
    })
}
