import { DELETE_ARTICLE, ADD_COMMENT_TO_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import { Record, List } from "immutable"

const ArticleModel = new Record({
    id: null,
    date: null,
    title: "",
    text: "",
    comments: []
});

const defaultArticles = new List(normalizedArticles.map(article => new ArticleModel(article)))

export default (articles = defaultArticles, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)
        case ADD_COMMENT:
        return articles.update(
                articles.findIndex((item) => item.get("id") == payload.articleId),
                (item) => {
                    console.log(item)
                    return item.set("comments", item.get("comments").concat([action.commentId]))
                }
            )

    }

    return articles
}