import {combineReducers} from 'redux';
import {newsReducer} from './newsReducer';

const rootReducer = combineReducers({
    news: newsReducer,
    categoryNews: newsReducer,
    articleNews: newsReducer,
    favoritesNews: newsReducer
});

export default rootReducer;