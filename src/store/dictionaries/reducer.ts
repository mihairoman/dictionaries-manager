import { Reducer } from 'react';
import { DictionariesState, Dictionary } from './types';

const mockData = [
    {
        id: 'dsdfd22132213',
        name: 'Some name',
        rows: [
            { domain: 'Stonegrey', range: 'Dark Grey' },
            { domain: 'Midnight Black', range: 'Black' },
            { domain: 'Mystic Silver', range: ' Silver' }
        ]
    }, 
    {
        id: '2dr32efdsfds',
        name: 'Another name',
        rows: [
            { domain: 'Stonegrey', range: 'Dark Grey' },
            { domain: 'Stonegrey', range: 'Dark Grey' },
            { domain: 'Midnight', range: 'Black Black' },
            { domain: 'Mystic', range: 'Silver Silver' }
        ]
    },
    {
        id: 'f23221dasa',
        name: 'The name',
        rows: [
            { domain: 'Stonegrey', range: 'Dark Grey' },
            { domain: 'Dark Grey', range: 'Stonegrey' },
            { domain: 'Mystic', range: 'Silver Silver' }
        ]
    }
];

const initialState: DictionariesState = {
    dictionaries: mockData,
    // isLoading: true,
    // errors: []
}

const dictionariesReducer: Reducer<DictionariesState, any> = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state,
                ...action.payload
            }
    }
};

export default dictionariesReducer;