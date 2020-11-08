import { Dispatch } from 'redux';
import { ADD_FAVORITES, AppActions, ARTICLE_NEWS_SUCCESS, CATEGORY_NEWS_SUCCESS, NEWS_LOAD_SUCCESS} from './actionTypes';
import client from '../../api/client';

export const loadNews=()=>async (dispatch: Dispatch<AppActions>)=>{
    try {
        const res = await client.get('/news_portal');
        dispatch({
            type: NEWS_LOAD_SUCCESS,
            news: res.data.result.articles
        });

    } catch (err) {
        throw err;
    }
};

export const loadCategoryNews=(category:any)=>async (dispatch: Dispatch<AppActions>)=>{
    console.log(category);
    try {
        const res = await client.get('/news_portal/category', {params: {category}});
        dispatch({
            type: CATEGORY_NEWS_SUCCESS,
            categoryNews: res.data.result.articles
        })
    } catch (err) {
        throw err;
    }
};

export const addArticle=(article:any)=>(dispatch: Dispatch<AppActions>)=>{
    try {
        dispatch({
            type: ARTICLE_NEWS_SUCCESS,
            articleNews: article
        })
    } catch (err) {
        throw err;
    }
};

export const addFavorites=(favorites:any)=>(dispatch: Dispatch<AppActions>)=>{
    try {
        dispatch({
            type: ADD_FAVORITES,
            favoritesNews: favorites
        })
    } catch (err) {
        throw err;
    }

};