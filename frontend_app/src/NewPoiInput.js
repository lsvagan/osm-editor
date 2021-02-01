import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import Dropdown from 'react-bootstrap/Dropdown';

import { connect } from 'react-redux';
import { changePoiInfo, changeAmenity, selectPoiForEdit, clearNewPoiInfoState, addNewPoi } from './app_store/actions';

import './NewPoiInput.css';

class NewPoiInput extends Component {
    constructor() {
        super();
        this.state= {
            //show red border if input is empty
            nameError: false,
            streetError: false,
            housenumberError: false,
            latError: false,
            lonError: false,
            amenityError: false
        }
    };

    handleErrorClass = (e) => {
        e.preventDefault();

        let newErrorObj = {
            nameError: false,
            streetError: false,
            housenumberError: false,
            latError: false,
            lonError: false,
            amenityError: false
        }
        
        for( const key in this.props.newPoiInfo ) {

            if( !this.props.newPoiInfo[key] ) {
                console.log(key);
                    newErrorObj[`${key}Error`] = true;
                
            } else {
                newErrorObj[`${key}Error`] = false
            }

        }

        this.setState( newErrorObj, () => { console.log(this.formVerificationAndSubmit()) } );
    
    };

    formVerificationAndSubmit = () => {
        console.table(this.state)
        for( const key in this.state ) {

            if( this.state[key]===true ) {
                return false;
            }

        }

        //all inputs are correct
        // console.log(this.props.newPoiInfo)
        this.props.addNewPoi(this.props.newPoiInfo);
        
    };

    componentDidMount () {
        if(this.props.view==='edit'){
            console.log(this.props);
            let editPoi = this.props.pois.find(poi => poi.id === parseInt(this.props.match.params.poiId));
            console.log(editPoi);
            this.props.selectPoiForEdit(editPoi);
        }
        
    }

    componentWillUnmount () {
        //here we should dispatch action wich will reset newPoiInfo in reducer
        console.log('NEW POI INPUT UNMOUNTED !!!');
        this.props.clearNewPoiInfoState();
    }

    render (){
        console.log('render called from new poi input');
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
                                    className = {this.state.nameError ? 'inputError' : ''} 
                                    type="text" 
                                    id="name"
                                    placeholder="Place name"
                                    value = {this.props.newPoiInfo.name}
                                    onChange = {this.props.changePoiInfo} 
                                />
                           
                                <Form.Label>Street:</Form.Label>
                                <Form.Control
                                    className = {this.state.streetError ? 'inputError' : ''}
                                    type="text"
                                    id="street"
                                    placeholder="Street"
                                    value = {this.props.newPoiInfo.street}
                                    onChange = {this.props.changePoiInfo}
                                />
                            
                                <Form.Label>Number:</Form.Label>
                                <Form.Control
                                    className = {this.state.housenumberError ? 'inputError' : ''}
                                    type="text"
                                    id="housenumber"
                                    placeholder="Num"
                                    value = {this.props.newPoiInfo.housenumber}
                                    onChange = {this.props.changePoiInfo}
                                />
                            </Col>

                            <Col md={6} sm={12}>
                                <Form.Label>Latitude:</Form.Label>
                                <Form.Control 
                                    className = {this.state.latError ? 'inputError' : ''}
                                    type="number" 
                                    placeholder="lat"
                                    id="lat"
                                    value={this.props.newPoiInfo.lat}
                                    onChange = {this.props.changePoiInfo}
                                />
                            
                                <Form.Label>Longitude:</Form.Label>
                                <Form.Control 
                                    className = {this.state.lonError ? 'inputError' : ''}
                                    type="number" 
                                    placeholder="lon"
                                    id="lon"
                                    value={this.props.newPoiInfo.lon}
                                    onChange = {this.props.changePoiInfo} 
                                />
                            
                                <Form.Label>Amenity:</Form.Label> 
                                <div className="d-flex"> 
                                    <Form.Control 
                                        type="text" 
                                        id="amenity"
                                        className= {this.state.amenityError ? 'inputError readOnlyAmenity' : 'readOnlyAmenity'} 
                                        readOnly 
                                        placeholder="Select amenity"
                                        value = {this.props.newPoiInfo.amenity}
                                    />
                                    <DropdownButton
                                        variant="outline-primary"
                                        alignRight
                                        size="md"
                                        title={""}
                                        onSelect = {this.props.changeAmenity}
                                    >
                                        
                                        { amenityListOptions }
                                        <Dropdown.Divider />
                                        <DropdownItem eventKey = "other">other</DropdownItem>
                                       
                                    </DropdownButton>
                                </div>
                            </Col>

                            <Col ms={1} className="d-flex justify-content-end">
                                <Button
                                    type = "submit"
                                    onClick = {this.handleErrorClass}
                                    variant="primary"
                                    className = "mt-3"
                                >
                                    {this.props.view === "edit" ? "Edit" : "Add"}
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
        newPoiInfo: state.newPoiReducer,
        pois: state.poiReducer.pois
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        changePoiInfo: (e) => { dispatch(changePoiInfo(e)) },
        changeAmenity: ( newAmenity ) => { dispatch(changeAmenity(newAmenity)) },
        selectPoiForEdit: ( poiObj ) => { dispatch(selectPoiForEdit(poiObj)) },
        clearNewPoiInfoState: () => { dispatch(clearNewPoiInfoState()) },
        addNewPoi: (newPoi) => { dispatch(addNewPoi(newPoi)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPoiInput);