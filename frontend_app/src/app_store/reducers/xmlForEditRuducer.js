import {
    DISPLAY_FETCHED_NODES_XML_FROM_OSM,
    EDIT_XML,
    CLEAR_XML_FOR_EDIT,
    SELECT_NODE_FOR_EDIT,
} from '../constants';

const initState = {
    xml: {
        id: '',
        xmlString: '',
    },
};

const xmlForEditReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case DISPLAY_FETCHED_NODES_XML_FROM_OSM:
            return Object.assign({}, state, { xml: action.payload });

        case EDIT_XML:
            let updatedXml = Object.assign({}, state.xml, {
                xmlString: action.payload,
            });
            return Object.assign({}, state, { xml: updatedXml });

        case SELECT_NODE_FOR_EDIT:
            return Object.assign({}, state, { xml: action.payload });

        case CLEAR_XML_FOR_EDIT:
            return initState;

        default:
            return state;
    }
};

export default xmlForEditReducer;
