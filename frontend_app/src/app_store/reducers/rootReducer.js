import { combineReducers } from 'redux';
import poiReducer from './poiReducer';
import newPoiReducer from './newPoiReducer';

const rootReducer = combineReducers({ poiReducer, newPoiReducer });

export default rootReducer;