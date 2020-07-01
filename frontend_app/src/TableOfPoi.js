import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import RemovingDialog from './RemovingDialog'

class TableOfPoi extends Component  {

    removePoiFun = (id) => {
        fetch('http://localhost:5000/removePoi', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id
            })
        })
        .then(result => {
            if(result.status === 200) {
                this.props.removePoiFromState(id);
            }
        })
    }

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
                        <input type="checkbox" onClick={(e) => showHidePoi(e, poi.id)} />
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
                        <th>Show on map</th>
                    </tr>
                </thead>
                <tbody>
                    {poisList}
                </tbody>    
            </Table>
            
        )
    }
    
}

export default TableOfPoi;