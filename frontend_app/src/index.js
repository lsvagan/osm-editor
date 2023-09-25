import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './app_store/reducers/rootReducer';

import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';

import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const middlewareList = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middlewareList));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('app')
);
