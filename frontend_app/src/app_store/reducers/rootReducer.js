import { combineReducers } from 'redux';
import poiReducer from './poiReducer';
import newPoiReducer from './newPoiReducer';
import geojsonDataReducer from './geojsonDataReducer';
import xmlForEditReducer from './xmlForEditRuducer';
import nodeReducer from './nodeReducer';

const rootReducer = combineReducers({ poiReducer, newPoiReducer, geojsonDataReducer, xmlForEditReducer, nodeReducer });

export default rootReducer;