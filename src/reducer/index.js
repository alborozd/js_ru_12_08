import { combineReducers } from 'redux'
import counterReducer from './counter'
import articleReducer from './articles'
import articlesFilter from "./articlesFilter"

export default combineReducers({
    count: counterReducer,
    articles: articleReducer,
    articlesFilter: articlesFilter
})
