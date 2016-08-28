import { DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterArticles(articleIds, dateFrom, dateTo) {
    console.log('-----> action filter', FILTER_ARTICLES);
    
    return {
        type: FILTER_ARTICLES,
        payload: {
            articleIds: articleIds,
            dateFilter: {
                from: dateFrom,
                to: dateTo
            }
        }
    }
}