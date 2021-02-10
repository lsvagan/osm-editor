import {
    FETCH_POIS,
    TOGGLE_SHOW_HIDE_POI,
    DELETE_POI,
    ADD_NEW_POI,
    UPDATE_POI_IN_STATE
    } from '../constants';

const poiInitalState = {
    pois: []
};

const poiReducer = ( state = poiInitalState, action = {} ) => {

    switch( action.type ) {

        case FETCH_POIS:
            return Object.assign({}, state, { pois: action.payload });
        
        case TOGGLE_SHOW_HIDE_POI:
            
            return Object.assign({}, state, { pois: state.pois.map(poi => {
                if ( poi.id === action.payload.poiId ) {
                    let poiShowHideUpdated = Object.assign( {}, poi );
                    poiShowHideUpdated.showOnMap = action.payload.e.target.checked;
                    return poiShowHideUpdated;
                }
                return poi;
            }) });

        case DELETE_POI:
            return Object.assign({}, state, { pois: state.pois.filter(poi => {
                return poi.id !== action.payload;
            }) });

        case ADD_NEW_POI:
            let updatedPois = [...state.pois];
            updatedPois.unshift(action.payload);
            return Object.assign({}, state, { pois: updatedPois });

        case UPDATE_POI_IN_STATE:
            return Object.assign({}, state, { pois: state.pois.map(poi => {
                if(poi.id === action.payload.id){
                    return action.payload;
                }
                return poi;
                })
            })

        default:
            return state;

    }
}

export default poiReducer;