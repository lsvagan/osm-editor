import React, {Component} from 'react';
import { Map, TileLayer } from 'react-leaflet';
import OpenStreetMapMarker from './OpenStreetMapMarker';
import NewPoiMarker from './NewPoiMarker';
import Search from './MapSearch';
import { connect } from 'react-redux';
import { storeFetchedNodesFromOverpass } from '../app_store/actions';

import overpass from 'query-overpass';
import GeoJsonLayer from './GeoJsonLayer'

  class OverpassMap extends Component {
    constructor(props){
      super(props);
      this.state = {
        
      }
    }

    queryNodes = (event) => {
        console.log(event);
        let { lat, lng} = event.latlng;
        console.log(lat ,lng)

        const query = `[out:json];
          node(around:40, ${lat}, ${lng});
          out;`;
        const options = {
        flatProperties: true,
        overpassUrl: 'https://overpass-api.de/api/interpreter'
        };
        overpass(query, this.dataHandler, options);
    }

    dataHandler = (error, osmData) => {
        if (!error && osmData.features !== undefined) {
            console.log(osmData)
            this.props.storeFetchedNodesFromOverpass(osmData.features);
        }
      };

    // onEachNode = (node, layer) => {

    //   console.log(node, layer);
    //   layer.setStyle({
    //       weight: 7,
    //       opacity: 0.7
    //   })
    //   layer.bindPopup(node.id);
     
    //   layer.on({
    //       click: (event) => {
            
    //           event.target.setStyle({
    //               color: 'blue',
    //               color: 'orange'
    //           });
              
    //       }
    //   })
    
    // }

    // customMarkerForGeojson = (features, latlng) => {
    //   const geojsonIcon = L.icon({
    //     iconUrl: require('./geojsonMarker.png'),
    //     iconSize: [25, 25],
    //     // iconAnchor: [10, 36],
    //     // popupAnchor: [0, -36]
    //   });
    //   return L.marker(latlng, {
    //     icon: geojsonIcon,
    //     opacity: 0.6
    //   });
    // }
    
    render() {
      
      return (
        <div>
          <Map className="leflet-map"
            center={[44.8110, 20.4625]}
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
              {/* <GeoJSON
                // attribution="Capa de Hospitales de ESRI"
                // key='random key'
                data={this.state.geojson}
                onEachFeature={this.onEachNode}
                pointToLayer={this.customMarkerForGeojson}
              /> */}
              <GeoJsonLayer />
              <OpenStreetMapMarker />
              <NewPoiMarker />
              <Search view = "geojson" queryNodes = {this.queryNodes}/>

          </Map>
        </div>
      );
    }
  }

const mapDispatchToProps = ( dispatch ) => {
  return {
    storeFetchedNodesFromOverpass: (osmFeatures) => { dispatch(storeFetchedNodesFromOverpass(osmFeatures)) }
  }
}
  
  export default connect(null, mapDispatchToProps)(OverpassMap);
  