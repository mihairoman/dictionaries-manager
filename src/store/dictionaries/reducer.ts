import { Reducer } from 'react';
import { DictionariesState, DictionariesActionTypes, DictionariesAction } from './types';
import { mockData } from '../localStorage';


const initialState: DictionariesState = {
    dictionaries: mockData
}

const dictionariesReducer: Reducer<DictionariesState, DictionariesAction> = (state = initialState, action) => {
    switch (action.type) {
        case DictionariesActionTypes.CREATE_DICTIONARY:
            return {
                dictionaries: [...state.dictionaries, ...action.payload]
            }
        case DictionariesActionTypes.UPDATE_DICTIONARY:
            return {
                dictionaries: [...state.dictionaries, ...action.payload]
            }
        case DictionariesActionTypes.DELETE_DICTIONARY:
            return {
                dictionaries: [...action.payload]
            }
        default:
            return {
                ...state,
                ...action.payload
            }
    }
};

export default dictionariesReducer;