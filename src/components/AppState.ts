import { combineReducers, createStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension';
import NameSlice from './NameSlice';

export const rootReducer = combineReducers({ nameSlice: NameSlice });
export type AppState = ReturnType<typeof rootReducer>;
export const configureStore = () => createStore(rootReducer, {}, devToolsEnhancer({}));
