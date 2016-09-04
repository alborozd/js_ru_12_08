import { DELETE_ARTICLE, FILTER_ARTICLES, ADD_COMMENT, ADD_COMMENT_TO_ARTICLE } from '../constants'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            comment,
            articleId
        }
    }
}
