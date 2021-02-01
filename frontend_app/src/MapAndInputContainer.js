import React, { Component } from 'react';
import NewPoiInput from './NewPoiInput';
import MapComponent from './mapComponents/OpenStreetMap';

import { connect } from 'react-redux';
import { addNewPoi } from './app_store/actions';

class MapAndInputContainer extends Component {
    constructor() {
        super();

        this.state = {
            newPoiInfo:{
                name: '',
                street: '',
                housenumber: '',
                lat: '',
                lon: '',
                amenity: ''
            },
            //show red border if input is empty
            errors: {
                nameError: false,
                streetError: false,
                housenumberError: false,
                latError: false,
                lonError: false,
                amenityError: false
            }
        }
    }
  
    setLatLonOfNewPoi = (e) => {
      
      let updatedLatLonOfNewPoi;

      // statement where we set lat lon using onChange event in form inputs
      if(e.target.id){

        if(e.target.id === "inputLat"){
            updatedLatLonOfNewPoi = {...this.state.newPoiInfo};
            updatedLatLonOfNewPoi.lat = e.target.value;
          
            this.setState({
                newPoiInfo : updatedLatLonOfNewPoi
            })
          return true;
        }else{
            updatedLatLonOfNewPoi = {...this.state.newPoiInfo};
            updatedLatLonOfNewPoi.lon = e.target.value;
            this.setState({
                newPoiInfo : updatedLatLonOfNewPoi
            })
            return true;
        }
      }
      //this part of code execute only for set lat and lon using onClick event on map, or using map search box
      updatedLatLonOfNewPoi = {...this.state.newPoiInfo}
      updatedLatLonOfNewPoi.lat = e.latlng.lat.toFixed(7);
      updatedLatLonOfNewPoi.lon  = e.latlng.lng.toFixed(7);
      this.setState({
        newPoiInfo : updatedLatLonOfNewPoi 
      })
      
    }

    formVerificationAndSubmit = (e) => {
        e.preventDefault();

        if(this.formValidation()){
            this.props.addNewPoi(this.state.newPoiInfo);
        }
        this.deleteInputs();

    }

    handleSelectAmenity = (e) => {
        this.setState(prevState => {
            let newPoiInfo = Object.assign({}, prevState.newPoiInfo);
            newPoiInfo.amenity = e;             
            return { newPoiInfo };                         
        })
    }

    //helper function for delete inputs after push new poi info to database
    deleteInputs = () => {
        this.setState(prevState => {
            let newPoiInfo = Object.assign({}, prevState.newPoiInfo);
            Object.keys(newPoiInfo).forEach((info) => {
                newPoiInfo[info] = "";
            })
            return {newPoiInfo}
        })
    }

    formValidation = () => {
        
        //form validation
        let { name, street, housenumber, lat, lon, amenity } = this.state.newPoiInfo;

        //first remove error class from element
        this.removeErrorClassFromElements();

        if( name === '' || street === '' || housenumber === '' || lat === '' ||  lon === '' || amenity === '') {

            if(name === ''){
                this.setErrorClassOnSpecificElement('nameError')
            }
            if(street === ''){
                this.setErrorClassOnSpecificElement('streetError')
            }
            if(lat === ''){
                this.setErrorClassOnSpecificElement('latError')
            }
            if(lon === ''){
                this.setErrorClassOnSpecificElement('lonError')
            }
            if(amenity === ''){
                this.setErrorClassOnSpecificElement('amenityError')
            }
            if(housenumber === ''){
                this.setErrorClassOnSpecificElement('housenumberError')
            }

            return false;
        }

        //all inputs are valid, return true
        return true;
    }

    updateNewPoiInfo = (e) => {

        let selector = e.target.id;
        let newValue = e.target.value;
        
        this.setState(prevState => {
            let newPoiInfo = Object.assign({}, prevState.newPoiInfo);
            newPoiInfo[selector] = newValue;             
            return { newPoiInfo };                         
        })
    }

    setErrorClassOnSpecificElement = (el) => {
        this.setState(prevState => {
            let errors = Object.assign({}, prevState.errors);
            errors[el] = true;
            return { errors };
        })
    }

    removeErrorClassFromElements = () => {
        this.setState(prevState => {
            let errors = Object.assign({}, prevState.errors);
            Object.keys(errors).forEach((key) => {
                return errors[key] = false;
            })
            return { errors };
        })
    }

    render() { 
        return ( 
            <div>
                <MapComponent 
                    setLatLonOfNewPoi = {this.setLatLonOfNewPoi}
                    newPoiInfo = {this.state.newPoiInfo}
                />
                <NewPoiInput 
                    // setLatLonOfNewPoi = {this.setLatLonOfNewPoi} 
                    // newPoiInfo = {this.state.newPoiInfo}
                    // errors = {this.state.errors}
                    // handleSelectAmenity = {this.handleSelectAmenity}
                    // formVerificationAndSubmit = {this.formVerificationAndSubmit}
                    // updateNewPoiInfo = {this.updateNewPoiInfo}
                />
            </div>
        );
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        addNewPoi: (newPoi) => dispatch(addNewPoi(newPoi))
    }
}
 
export default connect(null, mapDispatchToProps)(MapAndInputContainer);