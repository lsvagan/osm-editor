import {
    FETCH_NODES,
    ADD_NEW_NODE_TO_STATE,
    UPDATE_NODE_IN_STATE
} from '../constants';

const initState = {
    nodes: []
};

const nodeReducer = ( state = initState, action= {} ) => {

    switch (action.type) {

        case FETCH_NODES:
            return Object.assign( {}, state, {nodes: action.payload});
        
        case ADD_NEW_NODE_TO_STATE:
            let updatedNodes = [...state.nodes];
            updatedNodes.unshift(action.payload);
            return Object.assign( {}, state, {nodes: updatedNodes});
        
        case UPDATE_NODE_IN_STATE:

            return Object.assign({}, state, { nodes: state.nodes.map(node => {
                return node.id === action.payload.id ? action.payload : node;
            })
        });
        
        default:
            return state;

    }
}

export default nodeReducer;