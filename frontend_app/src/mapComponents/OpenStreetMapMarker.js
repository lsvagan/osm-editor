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

        const pois = [];

        for ( let key in props.showHideOnMap) {
            console.log(key)
            pois.push(
                <Marker 
                        position={props.showHideOnMap[key]}
                        icon = {mapPointer}
                        key = {key}
                        >
                        <Popup popupOpen={true}>
                            {'test name'}
                        </Popup>
                    </Marker>
            )
        }
        
        return(
            <div>
                {pois}
            </div>
        )
    
}

const mapStateToProps = ( state ) => {
    return {
        showHideOnMap: state.showHideOnMapReducer
    }
}

export default connect(mapStateToProps)(OpenStreetMapMarker);