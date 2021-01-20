import React from 'react';
import {Marker, Popup} from 'react-leaflet';
import L from 'leaflet';

import { connect } from 'react-redux';

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
        
        return(
            <div>
                {pois}
            </div>
        )
    
}

const mapStateToProps = ( state ) => {
    return {
        pois: state.poiReducer.pois
    }
}

export default connect(mapStateToProps)(OpenStreetMapMarker);