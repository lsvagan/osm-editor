import {
    UPDATE_LAT_LON_ONCLICK_OR_ONSEARCH,
    CHANGE_POI_INFO,
    CHANGE_AMENITY,
    SELECT_POI_FOR_EDIT,
    CLEAR_NEW_POI_INFO_STATE,
} from '../constants';

const newPoiInitalState = {
    name: '',
    street: '',
    housenumber: '',
    lat: '',
    lon: '',
    amenity: '',
};

const newPoiReducer = (state = newPoiInitalState, action = {}) => {
    switch (action.type) {
        case UPDATE_LAT_LON_ONCLICK_OR_ONSEARCH:
            return Object.assign({}, state, {
                lat: action.payload.lat.toFixed(7),
                lon: action.payload.lng.toFixed(7),
            });

        case CHANGE_POI_INFO:
            // console.log(action.payload);
            return Object.assign({}, state, {
                [action.payload.target.id]: action.payload.target.value,
            });

        case CHANGE_AMENITY:
            return Object.assign({}, state, {
                amenity: action.payload,
            });

        case SELECT_POI_FOR_EDIT:
            const { id, name, street, housenumber, lat, lon, amenity } =
                action.payload;
            return Object.assign({}, state, {
                id,
                name,
                street,
                housenumber,
                lat: lat.toFixed(7),
                lon: lon.toFixed(7),
                amenity,
            });

        case CLEAR_NEW_POI_INFO_STATE:
            return newPoiInitalState;

        default:
            return state;
    }
};

export default newPoiReducer;
