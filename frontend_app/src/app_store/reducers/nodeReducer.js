import {
    FETCH_NODES
} from '../constants';

const initState = {
    nodes: []
};

const nodeReducer = ( state = initState, action= {} ) => {

    switch (action.type) {

        case FETCH_NODES:
            return Object.assign( {}, state, {nodes: action.payload});
        
        default:
            return state;

    }
}

export default nodeReducer;