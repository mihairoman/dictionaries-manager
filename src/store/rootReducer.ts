import { combineReducers } from 'redux';
import DictionariesReducer from './dictionaries/reducer';
import { DictionariesState } from './dictionaries/types';

export interface AppState {
    dictionaries: DictionariesState
};

export const rootReducer = combineReducers<AppState>({
    dictionaries: DictionariesReducer
});
