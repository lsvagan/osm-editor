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
    UPDATE_POI_IN_STATE,
    STORE_FETCHED_NODES_FROM_OVERPASS,
    DISPLAY_FETCHED_NODES_XML_FROM_OSM,
    EDIT_XML
    } from './constants';

export const fetchPois = () => {
    return ( dispatch, getState ) => {
        //async action
        fetch('http://localhost:5000/api/getAllPois', {
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
        fetch('http://localhost:5000/api/addPoi', {
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
        fetch('http://localhost:5000/api/removePoi', {
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
        fetch('http://localhost:5000/api/updatePoi', {
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


export const storeFetchedNodesFormOverpass = (osmFeatures) => {
    return {
        type: STORE_FETCHED_NODES_FROM_OVERPASS,
        payload: osmFeatures
    }
}

export const fetchNodesXmlFromOsm = ( id ) => {

    return ( dispatch, getState ) => {
        fetch(`https://www.openstreetmap.org/api/0.6/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/xml'}
        })
        .then(response => (response.text()))
        .then(data => {
            let sliceStart = data.indexOf("<node");
            let sliceEnd = data.indexOf("</osm>");

            let nodeXml = data.slice(sliceStart, sliceEnd);
            console.log(nodeXml)
            // let myobj = JSON.parse(JSON.stringify(data))
            dispatch( dispayFetchedNodesXmlFormOsm(nodeXml) )
        } )
    }

}

const dispayFetchedNodesXmlFormOsm = (xml) => {
    return {
        type: DISPLAY_FETCHED_NODES_XML_FROM_OSM,
        payload: xml
    }
}

export const editXml = ( e ) => {
    return {
        type: EDIT_XML,
        payload: e.target.value
    }
}
