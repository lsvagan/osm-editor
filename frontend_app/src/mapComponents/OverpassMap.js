import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import MapSearch from './MapSearch';
import { connect } from 'react-redux';
import {
    storeFetchedNodesFromOverpass,
    clearFetchedNodesFromOverpass,
} from '../app_store/actions';

import overpass from 'query-overpass';
import GeoJsonLayer from './GeoJsonLayer';

class OverpassMap extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillUnmount() {
        console.log('overpass map unmounted');
        this.props.clearFetchedNodesFromOverpass();
    }

    queryNodes = (event) => {
        console.log(event);
        let { lat, lng } = event.latlng;
        console.log(lat, lng);

        const query = `[out:json];
          node(around:40, ${lat}, ${lng});
          out;`;
        const options = {
            flatProperties: true,
            overpassUrl: 'https://overpass-api.de/api/interpreter',
        };
        overpass(query, this.dataHandler, options);
    };

    dataHandler = (error, osmData) => {
        if (!error && osmData.features !== undefined) {
            console.log('osmData: ', osmData);
            this.props.storeFetchedNodesFromOverpass(osmData.features);
        }
    };

    render() {
        return (
            <div>
                <Map
                    className="leflet-map"
                    center={[44.811, 20.4625]}
                    zoom={13}
                    maxZoom={20}
                    onClick={this.queryNodes}
                >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        maxNativeZoom={19}
                        maxZoom={20}
                    />
                    <GeoJsonLayer />
                    <MapSearch view="geojson" queryNodes={this.queryNodes} />
                </Map>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeFetchedNodesFromOverpass: (osmFeatures) => {
            dispatch(storeFetchedNodesFromOverpass(osmFeatures));
        },
        clearFetchedNodesFromOverpass: () => {
            dispatch(clearFetchedNodesFromOverpass());
        },
    };
};

export default connect(null, mapDispatchToProps)(OverpassMap);
