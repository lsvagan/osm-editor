import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import RemovingDialog from './RemovingDialog';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { showHidePoi } from './app_store/actions';

class TableOfPoi extends Component  {

    render() {
        const {pois, showHidePoi} = this.props;
        const poisList = pois.map((poi) => {
            return (
                <tr key= {poi.id}>
                    <td>{poi.name}</td>
                    <td>{`${poi.street} ${poi.housenumber}`}</td>
                    <td>{poi.amenity}</td>
                    <td>{poi.lat.toFixed(7)}</td>
                    <td>{poi.lon.toFixed(7)}</td>
                    <td>
                        <input type="checkbox" onChange={(e) => showHidePoi(e, poi.id)} />
                    </td>
                    <td>
                        <Link to={`/editPoi/${poi.id}`}>
                            <Button size="sm" variant="outline-info">
                                Edit
                            </Button>
                        </Link>
                    </td>
                    <td>
                        <RemovingDialog 
                            poiName = {poi.name} 
                            poiStreet = {poi.street}
                            poiHousenumber = {poi.housenumber}
                            poiId = {poi.id}
                            removePoiFun = { this.removePoiFun }
                        />
                    </td>
                </tr>
            )
        });
    
        return(
            
            <Table responsive striped bordered>
                <thead>
                    <tr>
                        <th>Place name</th>
                        <th>Street</th>
                        <th>Amenity</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Show/hide</th>
                    </tr>
                </thead>
                <tbody>
                    {poisList}
                </tbody>    
            </Table>
            
        )
    }
    
}

const mapStateToProps = ( state ) => {
    return {
        pois: state.poiReducer.pois
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        showHidePoi: (e, poiId) => dispatch(showHidePoi(e, poiId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableOfPoi);