import { FILTER_ARTICLES } from "../constants";

export default (articles = [], action) => {
    const { type, payload, response, error } = action;
    //ты как инициализировал его пустым массивом, так никогда в него ничего и не записуешь. Это другая часть стора, она независима от articles
    //Сдесь надо было просто сохранять значения фильтров, вместо того, что б держать их в стейте.
    //Саму фильтрацию выполнять отдельно
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
