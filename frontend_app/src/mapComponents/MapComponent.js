import React, {Component} from 'react';
import { Map, TileLayer } from 'react-leaflet';
import OpenStreetMapMarker from './OpenStreetMapMarker';
import NewPoiMarker from './NewPoiMarker';
import Search from './MapSearch';
import { connect } from 'react-redux';
import { updateLatLon } from '../app_store/actions';

  class MapComponent extends Component {
    
    render() {
      
      return (
        <div>
          <Map className="leflet-map"
            center={[44.8110, 20.4625]}
            zoom={13}
            maxZoom={20}
            onClick={this.props.setLatLon}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxNativeZoom={19}
                maxZoom={20}
              />
        
              <OpenStreetMapMarker />
              <NewPoiMarker />
              <Search />

          </Map>
        </div>
      );
    }
  }

const mapDispatchToProps = ( dispatch ) => {
  return {
      setLatLon: (e) => { dispatch(updateLatLon(e.latlng)) }
  }
}
  
  export default connect(null, mapDispatchToProps)(MapComponent);
  