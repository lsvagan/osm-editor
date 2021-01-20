import React from 'react';

import { connect } from 'react-redux';

const EditPoiTest = ( props ) => {
    console.log(props);
    return (
        <div>
            Map
            <ul>
                <li>name: {props.selectedPoi.name}</li>
                <li>street: {props.selectedPoi.street}</li>
                <li>lon: {props.selectedPoi.lat}</li>
                <li>lat: {props.selectedPoi.lon}</li>
                <li>amenty: {props.selectedPoi.amenity}</li>
            </ul>
        </div>
    )
}

const mapStateToProps = ( state, ownProps ) => {
    return {
        selectedPoi: state.poiReducer.pois.find(poi => poi.id === parseInt(ownProps.match.params.poiId))
    }
}

export default connect(mapStateToProps)(EditPoiTest);