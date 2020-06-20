import React from 'react';
import {Marker, Popup} from 'react-leaflet';
import L from 'leaflet';

function OpenStreetMapMarker (props) {

        var mapPointer = L.icon({
            iconUrl: require('./bluePointer.png'),
            iconSize: [20, 36],
            iconAnchor: [10, 36],
            popupAnchor: [0, -36]
        });

        const pois = props.pois.map(function(poi){
            if(poi.showOnMap){
                return(
                    <Marker 
                        position={[poi.lat, poi.lon]}
                        icon = {mapPointer}
                        key = {poi.id}
                        >
                        <Popup popupOpen={true}>
                            {poi.name}
                        </Popup>
                    </Marker>
                )
            } else {
                return null
            }
        })
        console.log(pois)
        return(
            <div>
                {pois}
            </div>
        )
    
}

export default OpenStreetMapMarker;