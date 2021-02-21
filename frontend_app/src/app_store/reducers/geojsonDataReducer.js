import {
    STORE_FETCHED_NODES_FROM_OVERPASS
} from '../constants';

const initState = {
    geojsonData: {
        "features": []
    }
}

const geojsonReducer = ( state = initState, action={} ) => {

    switch(action.type) {

        case STORE_FETCHED_NODES_FROM_OVERPASS:
            console.log('action payload: ', action.payload)
            let fetchedNodesFeatures = action.payload;
            let fetchedGeojsonData = { "features": fetchedNodesFeatures }
            return Object.assign({}, state, { geojsonData: fetchedGeojsonData});
        
        default:
            return state;

    }

}

export default geojsonReducer;
