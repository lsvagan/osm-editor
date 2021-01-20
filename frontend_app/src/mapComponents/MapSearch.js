import { Component } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { withLeaflet } from "react-leaflet";
import { connect } from 'react-redux';

import { updateLatLon } from '../app_store/actions';

class Search extends Component {
  componentDidMount() {
  
    const setLatLon = this.props.setLatLon;
    const map = this.props.leaflet.map;

    const southWest = L.latLng(44.66767620116956, 20.15161381933688);
    const northEast = L.latLng(44.94536144236941, 20.79993565712487);
    const searchBounds = L.latLngBounds(southWest, northEast);
    const searchControl = new ELG.Geosearch({searchBounds, zoomToResult: true}).addTo(map);
    //const results = new L.LayerGroup().addTo(map);

    searchControl.on("results", function(data) {
      //results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        //results.addLayer(L.marker(data.results[i].latlng));
        console.log(data);
        setLatLon(data.latlng);
      }
    });
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    setLatLon: (latLonObj) => { dispatch(updateLatLon(latLonObj)) }
  }
};

//export default Search;
export default withLeaflet(connect(null, mapDispatchToProps)(Search));