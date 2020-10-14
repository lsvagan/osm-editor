import React, {Component} from 'react';
import { Map, TileLayer } from 'react-leaflet';
import OpenStreetMapMarker from './OpenStreetMapMarker';
import NewPoiMarker from './NewPoiMarker';
import Search from './MapSearch';

  class MapComponent extends Component {
    
    render() {
      
      return (
        <div>
          <Map className="leflet-map"
            center={[44.8110, 20.4625]}
            zoom={13}
            onClick={this.props.setLatLonOfNewPoi}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <OpenStreetMapMarker pois = {this.props.pois} />
              <NewPoiMarker newPoiInfo = {this.props.newPoiInfo} />
              <Search setLatLonOfNewPoi = {this.props.setLatLonOfNewPoi} />

          </Map>
        </div>
      );
    }
  }
  
  export default MapComponent;
  