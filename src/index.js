import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise'

const appStore = applyMiddleware(reduxPromise)(createStore)(rootReducer)

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


