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
        lon: ''
      }
      };
    }

    //clear value of lat and lon, after adding poi action
    clearLatLonInputs = () => {
      let newPoi = this.state.newPoi;
      newPoi.lat = '';
      newPoi.lon = '';

      this.setState({
        newPoi: newPoi
      })
    }
  
    setLatLonOfNewPoi = (e) => {
      
      let updatedPoi;

      // statement where we set lat lon using onChange event in form inputs
      if(e.target.id){

        if(e.target.id === "inputLat"){
          updatedPoi = {
            lat: e.target.value,
            lon: this.state.newPoi.lon
          }
          this.setState({
            newPoi : updatedPoi
          })
          return true;
        }else{
          updatedPoi = {
            lat: this.state.newPoi.lat,
            lon: e.target.value
          }
          this.setState({
            newPoi : updatedPoi
          })
          return true;
        }
      }
      let latValue = e.latlng.lat.toFixed(7);
      let lonValue  = e.latlng.lng.toFixed(7);
      //set lat lon using onClick event on map
      this.setState({
        newPoi : {
          lat: latValue,
          lon: lonValue
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
            onClick={this.setLatLonOfNewPoi}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <OpenStreetMapMarker pois = {this.props.pois} />
              <NewPoiMarker newPoi = {this.state.newPoi} />
              <Search setLatLonOfNewPoi = {this.setLatLonOfNewPoi} />

          </Map>

          <NewPoiInput
            setLatLonOfNewPoi={this.setLatLonOfNewPoi}
            newPoiLatLon={ this.state.newPoi }
            pushNewPoiInState = {this.props.pushNewPoiInState}
            clearLatLonInputs = {this.clearLatLonInputs}
          />
        </div>
      );
    }
  }
  
  export default MapComponent;
  