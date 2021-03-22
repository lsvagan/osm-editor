import {
    SHOW_HIDE_ON_MAP
} from '../constants';

const initState = {};

const showHideOnMapReducer = ( state = initState, action = {} ) => {

    switch (action.type) {

        case SHOW_HIDE_ON_MAP:

            let { poiId } = action.payload.showHideObj;

            if(action.payload.e.target.checked) {

                let { positionLatLon } = action.payload.showHideObj
                return Object.assign( {}, state, { [poiId]: positionLatLon } )

            } else {

               let updatedState = Object.assign( {}, state );
               delete updatedState[poiId];
               return updatedState; 

            }
        
        default:
            return state;

    }

}


export default showHideOnMapReducer;
