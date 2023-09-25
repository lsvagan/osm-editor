import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

import { connect } from 'react-redux';

function NewPoiMarker(props) {
    var mapPointer = L.icon({
        iconUrl: require('./redPointer.png'),
        iconSize: [20, 36],
        iconAnchor: [10, 36],
        popupAnchor: [0, -36],
    });

    return (
        <Marker position={[props.lat, props.lon]} icon={mapPointer}></Marker>
    );
}

const mapStateToProps = (state) => {
    return {
        lat: state.newPoiReducer.lat,
        lon: state.newPoiReducer.lon,
    };
};

export default connect(mapStateToProps)(NewPoiMarker);
