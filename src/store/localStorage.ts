import { AppState } from './rootReducer';

export const loadState = (): AppState => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

export const saveState = (state: AppState): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.error(err);
    }
};

export const mockData = [
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
        name: 'A really really really really really really long name',
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
    },
    {
        id: 'sddfdsfds234234ew',
        name: 'A dictionary',
        rows: [
            { domain: 'Stonegrey', range: 'Dark Grey' },
            { domain: 'Dark Grey', range: 'Almost black' },
            { domain: 'Grey', range: 'Silver Surfer' },
            { domain: 'Yellow', range: 'Sunny' },
            { domain: 'Pink', range: 'Flamingo' },
            { domain: 'Red', range: 'Sunny' },
            { domain: 'Yellow', range: 'Sunny' },
            { domain: 'Yellow', range: 'Sunny' },
        ]
    },
];