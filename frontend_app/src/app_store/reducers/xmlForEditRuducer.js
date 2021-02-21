import { 
    DISPLAY_FETCHED_NODES_XML_FROM_OSM,
    EDIT_XML
    } from '../constants';

const initState = {
    xml: ''
}

const xmlForEditReducer = ( state=initState, action= {} ) => {

    switch(action.type) {

        case DISPLAY_FETCHED_NODES_XML_FROM_OSM:
            return Object.assign( {}, state, { xml: action.payload } );

        case EDIT_XML: 
            return Object.assign( {}, state, { xml: action.payload } );

        default:
            return state;
    }

}

export default xmlForEditReducer;
