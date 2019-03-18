import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';
import { createStore, applyMiddleware, DeepPartial } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './store/rootReducer';
import { loadState, saveState } from './store/localStorage';
import { throttle } from 'lodash';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
)
