export const NEWS_LOAD_SUCCESS='NEWS_LOAD_SUCCESS';
export const CATEGORY_NEWS_SUCCESS='CATEGORY_NEWS_SUCCESS';
export const ARTICLE_NEWS_SUCCESS='ARTICLE_NEWS_SUCCESS';
export const ADD_FAVORITES='ADD_FAVORITES';

export interface NewsSuccess{
    type: typeof NEWS_LOAD_SUCCESS;
    news: [];
}

export interface CategoryNews{
    type: typeof CATEGORY_NEWS_SUCCESS;
    categoryNews: []; 
}

export interface ArticleNews{
    type: typeof ARTICLE_NEWS_SUCCESS;
    articleNews: any;
}

export interface FavoritesNews{
    type: typeof ADD_FAVORITES;
    favoritesNews: [];
}

export type NewsActionTypes = NewsSuccess | CategoryNews | ArticleNews | FavoritesNews;
export type AppActions = NewsActionTypes; // all possible redux actions 
