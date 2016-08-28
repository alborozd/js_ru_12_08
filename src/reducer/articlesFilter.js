import { FILTER_ARTICLES } from "../constants";

export default (articles = [], action) => {
    const { type, payload, response, error } = action;
    console.log('reduceR FILTER ATrticles: ', articles);

    if (type === FILTER_ARTICLES) {
        return articles.filter(article => {
            
            var idContains = true;
            var dateResult = true;

            if (payload.articleIds && payload.articleIds.length > 0) {
                idContains = payload.articleIds.includes(article.id);
            }

            if (dateFilter && dateFilter.from && dateFilter.to) {
                dateResult = article.date >= dateFilter.from && article.date <= dateFilter.to; 
            }

            return idContains && dateResult;
        });
    }

    return articles;
}