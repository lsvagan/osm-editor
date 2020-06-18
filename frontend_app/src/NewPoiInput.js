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
                placeName: '',
                street: '',
                lat: '',
                lng: '',
                type: ''
            },
            //show red border if input is empty
            errors: {
                placeNameError: false,
                streetError: false,
                latError: false,
                lngError: false,
                typeError: false
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
            this.props.clearLatLngInputs();
            this.deleteInputs();
        });
    }

    //helper function for delete inputs
    deleteInputs = () => {
        let clearState = this.state.newPoiInfo;
        clearState.placeName= '';
        clearState.street = '';
        clearState.type = '';
        this.setState({newPoiInfo: clearState})
    }

    formValidation = () => {
        //set value for lat i lng
        let newPoiWithAllInfo = this.state.newPoiInfo;
        newPoiWithAllInfo.lat = this.props.newPoiLatLng.lat;
        newPoiWithAllInfo.lng = this.props.newPoiLatLng.lng;
        this.setState({
            newPoiInfo: newPoiWithAllInfo
        })
        
        //form validation
        let { placeName, street, lat, lng, type } = this.state.newPoiInfo;

        //first remove error class from element
        this.removeErrorClassFromElements();

        if( placeName === '' || street === '' || lat === '' ||  lng === '' || type === '') {

            if(placeName === ''){
                this.setErrorClassOnSpecificElement('placeNameError')
            }
            if(street === ''){
                this.setErrorClassOnSpecificElement('streetError')
            }
            if(lat === ''){
                this.setErrorClassOnSpecificElement('latError')
            }
            if(lng === ''){
                this.setErrorClassOnSpecificElement('lngError')
            }
            if(type === ''){
                this.setErrorClassOnSpecificElement('typeError')
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
        return(
                <Form>
                    <Form.Group>
                        <Row>
                            <Col md={2}>
                                <Form.Label>Place name:</Form.Label>
                                <Form.Control
                                    className = {this.state.errors.placeNameError ? 'inputError' : ''} 
                                    type="text" 
                                    id="placeName"
                                    placeholder="Place name"
                                    value = {this.state.newPoiInfo.placeName}
                                    onChange = {this.updateNewPoiInfo} 
                                />
                            </Col>
                            <Col md={3}>
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
                            <Col md={2}>
                                <Form.Label>Latitude:</Form.Label>
                                <Form.Control 
                                className = {this.state.errors.latError ? 'inputError' : ''}
                                type="number" 
                                placeholder="lat"
                                id="inputLat"
                                value={this.props.newPoiLatLng.lat}
                                onChange = {this.props.setLatLngOfNewPoi}
                                />
                            </Col>
                            <Col md={2}>
                                <Form.Label>Longitude:</Form.Label>
                                <Form.Control 
                                className = {this.state.errors.lngError ? 'inputError' : ''}
                                type="number" 
                                placeholder="lng"
                                id="inputLng"
                                value={this.props.newPoiLatLng.lng}
                                onChange = {this.props.setLatLngOfNewPoi} 
                                />
                            </Col>
                            <Col md={2}>
                            <Form.Label>Type:</Form.Label>
                                {/* value atribute reset select option if value is empty string, help for clear input after send data to server */}
                                <Form.Control 
                                as="select" 
                                custom
                                className = {this.state.errors.typeError ? 'inputError' : ''} 
                                id="type" 
                                value={this.state.newPoiInfo.type} 
                                onChange={this.updateNewPoiInfo}>
                                    <option hidden>Select type</option>
                                    <option>Cafe</option>
                                    <option>Restaurant</option>
                                    <option>Hotel</option>
                                    <option>Sport object</option>
                                    <option>Shopping center</option>
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