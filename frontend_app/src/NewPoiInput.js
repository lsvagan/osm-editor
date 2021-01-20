import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import Dropdown from 'react-bootstrap/Dropdown';

import { connect } from 'react-redux';

import './NewPoiInput.css';

class NewPoiInput extends Component {

    render (){

        const amenityList = ['bar', 'cafe', 'restaurant', 'nightclub', 'gambling', 'fast_food', 'school', 'university', 'parking', 'bus_station','bank', 'post_office', 'studio', 'hospital',
                            'cinema', 'marketplace', 'police', 'grave_yard'];
        const amenityListOptions = amenityList.sort().map((singleAmenity) => {
            return <DropdownItem eventKey = {singleAmenity} key={singleAmenity}>{singleAmenity}</DropdownItem>
        })
        
        return(
                <Form>
                    <Form.Group>
                        <Row>
                            <Col md={6} sm={12}>
                                <Form.Label>Place name:</Form.Label>
                                <Form.Control
                                    className = {this.props.errors.nameError ? 'inputError' : ''} 
                                    type="text" 
                                    id="name"
                                    placeholder="Place name"
                                    value = {this.props.newPoiInfo.name}
                                    onChange = {this.props.updateNewPoiInfo} 
                                />
                           
                                <Form.Label>Street:</Form.Label>
                                <Form.Control
                                    className = {this.props.errors.streetError ? 'inputError' : ''}
                                    type="text"
                                    id="street"
                                    placeholder="Street"
                                    value = {this.props.newPoiInfo.street}
                                    onChange = {this.props.updateNewPoiInfo}
                                />
                            
                                <Form.Label>Number:</Form.Label>
                                <Form.Control
                                    className = {this.props.errors.housenumberError ? 'inputError' : ''}
                                    type="text"
                                    id="housenumber"
                                    placeholder="Num"
                                    value = {this.props.newPoiInfo.housenumber}
                                    onChange = {this.props.updateNewPoiInfo}
                                />
                            </Col>
                            <Col md={6} sm={12}>
                                <Form.Label>Latitude:</Form.Label>
                                <Form.Control 
                                className = {this.props.errors.latError ? 'inputError' : ''}
                                type="number" 
                                placeholder="lat"
                                id="inputLat"
                                value={this.props.lat}
                                onChange = {this.props.setLatLonOfNewPoi}
                                />
                            
                                <Form.Label>Longitude:</Form.Label>
                                <Form.Control 
                                className = {this.props.errors.lonError ? 'inputError' : ''}
                                type="number" 
                                placeholder="lon"
                                id="inputLon"
                                value={this.props.lon}
                                onChange = {this.props.setLatLonOfNewPoi} 
                                />
                            
                            <Form.Label>Amenity:</Form.Label> 
                                <div className="d-flex"> 
                                    <Form.Control 
                                    type="text" 
                                    id="amenity"
                                    className= {this.props.errors.amenityError ? 'inputError readOnlyAmenity' : 'readOnlyAmenity'} 
                                    readOnly 
                                    placeholder="Select amenity"
                                    value = {this.props.newPoiInfo.amenity}>
                                    </Form.Control>
                                    <DropdownButton
                                        variant="outline-primary"
                                        alignRight
                                        size="md"
                                        title={""}
                                        onSelect = {this.props.handleSelectAmenity}
                                        >
                                        
                                            { amenityListOptions }
                                            <Dropdown.Divider />
                                            <DropdownItem eventKey = "other">other</DropdownItem>
                                       
                                    </DropdownButton>
                                </div>
                            </Col>
                            <Col ms={1} className="d-flex  align-items-end">
                                <Button
                                    type = "submit"
                                    onClick = {this.props.formVerificationAndSubmit}
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

const mapStateToProps = ( state ) => {
    return {
        lat: state.newPoiReducer.newPoiInfo.lat,
        lon: state.newPoiReducer.newPoiInfo.lon
    }
}

export default connect(mapStateToProps)(NewPoiInput);