import { CreateDictionaryAction, DictionariesState, DictionariesAction, DictionariesActionTypes, DeleteDictionaryAction, Dictionary, UpdateDictionaryAction } from './types';
import { Dispatch } from 'redux';
import { AppState } from '../rootReducer';
import { v4 } from 'uuid';

export type DictionaryThunkAction = (arg: any) => (dispatch: Dispatch<DictionariesAction>, getState?: () => AppState) => void;

export const createDictionary: DictionaryThunkAction = (dictionary: Dictionary) =>
    (dispatch: Dispatch<CreateDictionaryAction>) => {

        const newItem = { id: v4(), ...dictionary };

        dispatch({
            payload: newItem,
            type: DictionariesActionTypes.CREATE_DICTIONARY
        });
    }


export const updateDictionary: DictionaryThunkAction = (dictionary: Dictionary) =>
    (dispatch: Dispatch<UpdateDictionaryAction>) => {

        const newItem = { ...dictionary };

        dispatch({
            payload: newItem,
            type: DictionariesActionTypes.UPDATE_DICTIONARY
        });
    }

export const deleteDictionary: DictionaryThunkAction = (id: string) =>
    (dispatch: Dispatch<DeleteDictionaryAction>, getState) => {

        const { dictionaries } = getState().dictionaries;
        const filtered = dictionaries.filter((dictionary) => dictionary.id !== id);

        dispatch({
            payload: filtered,
            type: DictionariesActionTypes.DELETE_DICTIONARY
        });
    }