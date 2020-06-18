import React, {Component} from 'react';
import { Map, TileLayer } from 'react-leaflet';
import OpenStreetMapMarker from './OpenStreetMapMarker';
import NewPoiMarker from './NewPoiMarker';
import Search from './MapSearch';
import NewPoiInput from './NewPoiInput';

  class MapComponent extends Component {
    constructor() {
      super();
     
      this.state = {
      newPoi: {
        lat: '',
        lng: ''
      }
      };
    }

    //clear value of lat and lng, after adding poi action
    clearLatLngInputs = () => {
      let newPoi = this.state.newPoi;
      newPoi.lat = '';
      newPoi.lng = '';

      this.setState({
        newPoi: newPoi
      })
    }
  
    setLatLngOfNewPoi = (e) => {
      
      let updatedPoi;

      // statement where we set lat lng using onChange event in form inputs
      if(e.target.id){

        if(e.target.id === "inputLat"){
          updatedPoi = {
            lat: e.target.value,
            lng: this.state.newPoi.lng
          }
          this.setState({
            newPoi : updatedPoi
          })
          return true;
        }else{
          updatedPoi = {
            lat: this.state.newPoi.lat,
            lng: e.target.value
          }
          this.setState({
            newPoi : updatedPoi
          })
          return true;
        }
      }
      let latValue = e.latlng.lat.toFixed(4);
      let lngValue  = e.latlng.lng.toFixed(4);
      //set lat lng using onClick event on map
      this.setState({
        newPoi : {
          lat: latValue,
          lng: lngValue
        }
      })
      console.log(e)
      console.log(e.latlng.lat, e.latlng.lng )
    }
    
    render() {
      
      console.log('maps render')
      return (
        <div>
          <Map className="leflet-map"
            center={[44.8110, 20.4625]}
            zoom={13}
            onClick={this.setLatLngOfNewPoi}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <OpenStreetMapMarker pois = {this.props.pois} />
              <NewPoiMarker newPoi = {this.state.newPoi} />
              <Search showSearchPoi = {this.setLatLngOfNewPoi} />

          </Map>

          <NewPoiInput
            setLatLngOfNewPoi={this.setLatLngOfNewPoi}
            newPoiLatLng={ this.state.newPoi }
            pushNewPoiInState = {this.props.pushNewPoiInState}
            clearLatLngInputs = {this.clearLatLngInputs}
          />
        </div>
      );
    }
  }
  
  export default MapComponent;
  