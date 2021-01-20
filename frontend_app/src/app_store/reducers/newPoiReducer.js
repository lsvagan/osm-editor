import {
    UPDATE_LAT_LON_ONCLICK_OR_ONSEARCH
} from '../constants'

const newPoiInitalState = {
    newPoiInfo: {
        name: '',
        street: '',
        housenumber: '',
        lat: '',
        lon: '',
        amenity: ''
    },
    //show red border if input is empty
    errors: {
        nameError: false,
        streetError: false,
        housenumberError: false,
        latError: false,
        lonError: false,
        amenityError: false
    }
};

const newPoiReducer = ( state = newPoiInitalState, action = {} ) => {
    switch(action.type) {
        case UPDATE_LAT_LON_ONCLICK_OR_ONSEARCH:
            console.log(action.payload);
            let testObj = JSON.parse(JSON.stringify(state));
            console.log(testObj)
            testObj.newPoiInfo.lat = action.payload.lat.toFixed(7);
            testObj.newPoiInfo.lon = action.payload.lng.toFixed(7);
            return testObj;
        default:
            return state
    }
}

export default newPoiReducer;