export interface DictionaryRow {
    domain: string
    range: string
}

export interface Dictionary {
    id?: string
    name: string
    rows: DictionaryRow[]
};

export interface DictionariesState {
    readonly dictionaries: Dictionary[]
};

export enum DictionariesActionTypes {
    CREATE_DICTIONARY = 'CREATE_DICTIONARY',
    DELETE_DICTIONARY = 'DELETE_DICTIONARY',
    UPDATE_DICTIONARY = 'UPDATE_DICTIONARY',
    VALIDATE_DICTIONARY = 'VALIDATE_DICTIONARY'
}

export interface DictionariesAction {
    type: DictionariesActionTypes
    payload: any
};

export interface CreateDictionaryAction extends DictionariesAction {
    type: DictionariesActionTypes.CREATE_DICTIONARY
    payload: Dictionary
}

export interface DeleteDictionaryAction extends DictionariesAction {
    type: DictionariesActionTypes.DELETE_DICTIONARY,
    payload: Dictionary[]
}

export interface UpdateDictionaryAction extends DictionariesAction {
    type: DictionariesActionTypes.UPDATE_DICTIONARY,
    payload: Dictionary
}

export enum DictionaryFormMode {
    NEW = 0,
    EDIT = 1
}
