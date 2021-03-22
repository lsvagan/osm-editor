import { 
    FETCH_POIS,
    SHOW_HIDE_ON_MAP,
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
    EDIT_XML,
    FETCH_NODES,
    CLEAR_XML_FOR_EDIT,
    CLEAR_FETCHED_NODES_FROM_OVERPASS
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

export const addNewPoi = ( newPoi, ownProps ) => {
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
            //redirect on home page 
            ownProps.history.push('/map/pois');
        })
    }
}

const addNewPoiToState = ( newPoi ) => {
    return {
        type: ADD_NEW_POI,
        payload: newPoi
    }
}

export const showHideOnMap = ( e, poiId, poiLat, poiLon, poiName ) => {
   
    let showHideObj = {
        poiId,
        poiName,
        positionLatLon: [poiLat, poiLon]
    };

    return {
        type: SHOW_HIDE_ON_MAP,
        payload: { e, showHideObj }
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

export const updatePoi = ( updatedInfo, ownProps ) => {
    return ( dispatch, getState ) => {
        fetch('http://localhost:5000/api/updatePoi', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedInfo)
        })
        .then(result => result.json())
        .then(data => {
            dispatch(updatePoiInState(data[0]));
            ownProps.history.push('/map/pois');
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

export const storeFetchedNodesFromOverpass = (osmFeatures) => {
    return {
        type: STORE_FETCHED_NODES_FROM_OVERPASS,
        payload: osmFeatures
    }
}

export const clearFetchedNodesFromOverpass = () => {
    return {
        type: CLEAR_FETCHED_NODES_FROM_OVERPASS
    }
}

export const fetchNodesXmlFromOsm = ( id ) => {

    return ( dispatch, getState ) => {

        let idSpliter = id.split('/');
        let idNumber = idSpliter[idSpliter.length - 1];

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
            console.log('xml length: ', nodeXml.length)
            // let myobj = JSON.parse(JSON.stringify(data))
            dispatch( dispayFetchedNodesXmlFromOsm(idNumber, nodeXml) )
        } )
    }

}

const dispayFetchedNodesXmlFromOsm = (idNumber, xml) => {
    return {
        type: DISPLAY_FETCHED_NODES_XML_FROM_OSM,
        payload: { 
            id: idNumber,
            xmlString: xml
        }
    }
}

export const editXml = ( e ) => {
    return {
        type: EDIT_XML,
        payload: e.target.value
    }
}


export const postNode = ( xmlObj, ownProps ) => {

    return (dispatch, getState) => {
        fetch('http://localhost:5000/api/postNode', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(xmlObj)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // ownProps.history.push('/map/pois');
            dispatch(clearXmlInput());
            
        })
    }
}

const clearXmlInput = () => {
    return{
        type: CLEAR_XML_FOR_EDIT
    }
}

export const fetchNodes = () => {

    return(dispatch, getState) => {
        //async action
        fetch('http://localhost:5000/api/getAllNodes', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
            })
        .then((result) => result.json())
        .then(data => dispatch(fetchNodeAction( data )))
        }

}

const fetchNodeAction = (nodes) => {
    return {
        type: FETCH_NODES,
        payload: nodes
    }
}
