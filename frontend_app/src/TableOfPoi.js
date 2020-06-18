import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import RemovingDialog from './RemovingDialog'

class TableOfPoi extends Component  {

    removePoiFun = (id) => {
        //console.log(id);
        fetch('http://localhost:5000/removePoi', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id
            })
        })
        .then(result => {
            if(result.status === 200) {
                //console.log('uspesno')
                this.props.removePoiFromState(id);
            }
        })
    }

    render() {
        const {pois, showHidePoi} = this.props;
        const poisList = pois.map((poi) => {
            return (
                <tr key= {poi.id}>
                    <td>{poi.placeName}</td>
                    <td>{poi.street}</td>
                    <td>{poi.type}</td>
                    <td>{poi.lat}</td>
                    <td>{poi.lng}</td>
                    <td>
                        <input type="checkbox" onClick={(e) => showHidePoi(e, poi.id)} />
                    </td>
                    <td>
                        <RemovingDialog 
                            poiPlaceName = {poi.placeName} 
                            poiStreet = {poi.street}
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
                        <th>Type</th>
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