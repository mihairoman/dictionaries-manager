export interface DictionaryRow {
    domain: string
    range: string
}

export interface Dictionary {
    id: string
    name: string
    rows: DictionaryRow[]
};

export interface DictionariesState {
    readonly dictionaries: Dictionary[]
    // readonly isLoading: boolean
    // readonly errors?: string[]
};

export enum DictionariesActionTypes {
    FETCH_DICTIONARIES = 'FETCH_DICTIONARIES',
    CREATE_DICTIONARY = 'CREATE_DICTIONARY',
    DELETE_DICTIONARY = 'DELETE_DICTIONARY',
    EDIT_DICTIONARY = 'EDIT_DICTIONARY',
    VALIDATE_DICTIONARY = 'VALIDATE_DICTIONARY'
}

export interface DictionariesAction {
    type: DictionariesActionTypes
    payload: any
};

interface FetchDictionariesAction extends DictionariesAction {
    type: DictionariesActionTypes.FETCH_DICTIONARIES,
    payload: Dictionary[]
}
  
interface CreateDictionaryAction extends DictionariesAction {
    type: DictionariesActionTypes.CREATE_DICTIONARY
    payload: Dictionary
}

interface DeleteDictionaryAction extends DictionariesAction {
    type: DictionariesActionTypes.DELETE_DICTIONARY
}

interface EditDictionaryAction extends DictionariesAction {
    type: DictionariesActionTypes.EDIT_DICTIONARY,
    payload: Dictionary
}
