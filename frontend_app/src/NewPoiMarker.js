import React from 'react';
import {Marker} from 'react-leaflet';
import L from 'leaflet';

function NewPoiMarker (props) {
    var mapPointer = L.icon({
        iconUrl: require('./redPointer.png'),
        iconSize: [20, 36],
        iconAnchor: [10, 36],
        popupAnchor: [0, -36]
    });
    
        return(
                <Marker
                    position={[props.newPoi.lat, props.newPoi.lng]}
                    icon = {mapPointer}
                >
                </Marker>
        )
}

export default NewPoiMarker;