import {  ADD_FAVORITES, ARTICLE_NEWS_SUCCESS, CATEGORY_NEWS_SUCCESS, NewsActionTypes, NEWS_LOAD_SUCCESS } from '../actions/actionTypes';

const newsReducer = (state:any = [], action: NewsActionTypes): []=>{
    switch (action.type) {
        case NEWS_LOAD_SUCCESS:
            return action.news;
        case CATEGORY_NEWS_SUCCESS:
            return action.categoryNews;
        case ARTICLE_NEWS_SUCCESS:
            return action.articleNews;
        case ADD_FAVORITES:
            return {...state, value: action.favoritesNews}
        default:
            return state;
    }
};

export {newsReducer};