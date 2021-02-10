import { 
    FETCH_POIS,
    TOGGLE_SHOW_HIDE_POI,
    DELETE_POI,
    ADD_NEW_POI,
    UPDATE_LAT_LON_ONCLICK_OR_ONSEARCH,
    CHANGE_POI_INFO,
    CHANGE_AMENITY,
    SELECT_POI_FOR_EDIT,
    CLEAR_NEW_POI_INFO_STATE,
    UPDATE_POI_IN_STATE
    } from './constants';

export const fetchPois = () => {
    return ( dispatch, getState ) => {
        //async action
        fetch('http://localhost:5000/getAllPois', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
            })
        .then((result) => result.json())
        .then(data => dispatch(fetchPoisAction( data )))
        }
}

const fetchPoisAction = ( pois ) => {
    return {
        type: FETCH_POIS,
        payload: pois
    }
}

export const addNewPoi = ( newPoi ) => {
    return ( dispatch, getState ) => {
        fetch('http://localhost:5000/addPoi', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPoi)
        })
        .then(result => result.json())
        .then(data => {
            dispatch(addNewPoiToState(data[0]));
            // console.log(data);
        })
    }
}

const addNewPoiToState = ( newPoi ) => {
    return {
        type: ADD_NEW_POI,
        payload: newPoi
    }
}

export const showHidePoi = ( e, poiId ) => {
    return {
        type: TOGGLE_SHOW_HIDE_POI,
        payload: { e, poiId }
    }
}

export const deletePoi = ( poiId ) => {
    console.log('delete from action, id: ', poiId);
    return ( dispatch, getState ) => {
        fetch('http://localhost:5000/removePoi', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: poiId
            })
        })
        .then(result => {
            if(result.status === 200) {
                dispatch(deletePoiFromState(poiId));
            }
        })
    }
}

const deletePoiFromState = ( poiId ) => {
    return {
        type: DELETE_POI,
        payload: poiId
    }
}

export const updateLatLon = ( latLonObj ) => {
    return {
        type: UPDATE_LAT_LON_ONCLICK_OR_ONSEARCH,
        payload: latLonObj
    }
}

export const changePoiInfo = ( obj ) => {
    return {
        type: CHANGE_POI_INFO,
        payload: obj
    }
}

export const changeAmenity = ( newAmenity ) => {
    return {
        type: CHANGE_AMENITY,
        payload: newAmenity
    }
}

export const selectPoiForEdit = ( poiObj ) => {
    return {
        type: SELECT_POI_FOR_EDIT,
        payload: poiObj
    }
}

export const updatePoi = ( updatedInfo ) => {
    return ( dispatch, getState ) => {
        fetch('http://localhost:5000/updatePoi', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedInfo)
        })
        .then(result => result.json())
        .then(data => {
            dispatch(updatePoiInState(data[0]))
        });
    }
}

const updatePoiInState = (updatedPoi) => {
    return {
        type: UPDATE_POI_IN_STATE,
        payload: updatedPoi
    }
}

export const clearNewPoiInfoState = () => {
    return {
        type: CLEAR_NEW_POI_INFO_STATE
    }
}
