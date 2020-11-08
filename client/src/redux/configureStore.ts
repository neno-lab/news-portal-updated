import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../redux/reducers/rootReducer';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppActions } from './actions/actionTypes';

export type AppState = ReturnType<typeof rootReducer>; // returna sve tipove iz root reducera

const store=createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));

export default store;