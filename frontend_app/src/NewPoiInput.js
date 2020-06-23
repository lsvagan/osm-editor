import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import './NewPoiInput.css';

class NewPoiInput extends Component {
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

    addNewPoi = (e) => {

        e.preventDefault();

        if(this.formValidation()){
            this.pushNewPoiToDatabase(this.state.newPoiInfo);
        }else{
            console.log('all inputs are required')
        }

    }

    pushNewPoiToDatabase = (newPoi) => {
        console.log('poi koji pushujemo: ', newPoi)
        fetch('http://localhost:5000/addPoi', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPoi)
        })
        .then(result => result.json())
        .then(data => {
            this.props.pushNewPoiInState(data[0]);

            //clear all inputs
            this.props.clearLatLonInputs();
            this.deleteInputs();
        });
    }

    //helper function for delete inputs
    deleteInputs = () => {
        let clearState = this.state.newPoiInfo;
        clearState.name= '';
        clearState.street = '';
        clearState.housenumber = '';
        clearState.amenity = '';
        this.setState({newPoiInfo: clearState})
    }

    formValidation = () => {
        //set value for lat i lon
        let newPoiWithAllInfo = this.state.newPoiInfo;
        newPoiWithAllInfo.lat = this.props.newPoiLatLon.lat;
        newPoiWithAllInfo.lon = this.props.newPoiLatLon.lon;
        this.setState({
            newPoiInfo: newPoiWithAllInfo
        })
        
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
        console.log(e.target.value);
        console.log(e.target.id);
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

    render (){
        console.log('form render')
        const amenityList = ['bar', 'cafe', 'restaurant', 'nightclub', 'gambling', 'fast food', 'school', 'university', 'parking', 'bus station','bank', 'post office', 'studio', 'hospital',
                            'cinema', 'marketplace', 'police', 'grave yard'];
        const amenityListOptions = amenityList.map((singleAmenity) => {
            return <option key={singleAmenity}>{singleAmenity}</option>
        })
        return(
                <Form>
                    <Form.Group>
                        <Row>
                            <Col md={2}>
                                <Form.Label>Place name:</Form.Label>
                                <Form.Control
                                    className = {this.state.errors.nameError ? 'inputError' : ''} 
                                    type="text" 
                                    id="name"
                                    placeholder="Place name"
                                    value = {this.state.newPoiInfo.name}
                                    onChange = {this.updateNewPoiInfo} 
                                />
                            </Col>
                            <Col md={2}>
                                <Form.Label>Street:</Form.Label>
                                <Form.Control
                                    className = {this.state.errors.streetError ? 'inputError' : ''}
                                    type="text"
                                    id="street"
                                    placeholder="Street"
                                    value = {this.state.newPoiInfo.street}
                                    onChange = {this.updateNewPoiInfo}
                                />
                            </Col>
                            <Col md={1}>
                                <Form.Label>Number:</Form.Label>
                                <Form.Control
                                    className = {this.state.errors.housenumberError ? 'inputError' : ''}
                                    type="text"
                                    id="housenumber"
                                    placeholder="Num"
                                    value = {this.state.newPoiInfo.housenumber}
                                    onChange = {this.updateNewPoiInfo}
                                />
                            </Col>
                            <Col md={2}>
                                <Form.Label>Latitude:</Form.Label>
                                <Form.Control 
                                className = {this.state.errors.latError ? 'inputError' : ''}
                                type="number" 
                                placeholder="lat"
                                id="inputLat"
                                value={this.props.newPoiLatLon.lat}
                                onChange = {this.props.setLatLonOfNewPoi}
                                />
                            </Col>
                            <Col md={2}>
                                <Form.Label>Longitude:</Form.Label>
                                <Form.Control 
                                className = {this.state.errors.lonError ? 'inputError' : ''}
                                type="number" 
                                placeholder="lon"
                                id="inputLon"
                                value={this.props.newPoiLatLon.lon}
                                onChange = {this.props.setLatLonOfNewPoi} 
                                />
                            </Col>
                            <Col md={2}>
                            <Form.Label>Amenity:</Form.Label>
                                {/* value atribute reset select option if value is empty string, help for clear input after send data to server */}
                                <Form.Control
                                as="select" 
                                custom
                                className = {this.state.errors.amenityError ? 'inputError' : ''} 
                                id="amenity" 
                                value={this.state.newPoiInfo.amenity} 
                                onChange={this.updateNewPoiInfo}>
                                    <option hidden>Select amenity</option>
                                    { amenityListOptions }
                                </Form.Control>
                            </Col>
                            <Col ms={1} className="d-flex  align-items-end">
                                <Button
                                    type = "submit"
                                    onClick = {this.addNewPoi}
                                    variant="primary"
                                >
                                    Add
                                </Button>
                            </Col> 
                        </Row>
                    </Form.Group>
                </Form>
        )
    }
}

export default NewPoiInput;