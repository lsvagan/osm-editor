import React, {Component} from 'react';
import OpenStreetMap from './OpenStreetMap';
import TableOfPoi from './TableOfPoi';
import './App.css';
import Container from 'react-bootstrap/Container';

class App extends Component {

  constructor() {
    super();
   
    this.state = {
      pois: []
    };
  }

  pushNewPoiInState = (newPoiData) => {
    //add new poi at the beginning of pois arr, because we want all new poi at the top of table

    this.setState(prevState => {
      let pois = [...prevState.pois];
      pois.unshift(newPoiData);
      return { pois }
    })

  }

  removePoiFromState = (id) => {
    this.setState(prevState => {
      let pois = prevState.pois.filter((poi) => {
        return poi.id !== id;
      })
      return { pois }
    })
  }

  showHidePoi = (e, idOfPoi) => {
    let updatedShowMarker = this.state.pois;
    updatedShowMarker.forEach(function(poi){
      if(poi.id === idOfPoi){
        poi.showOnMap = e.target.checked;
      }
    })
    this.setState({
      pois : updatedShowMarker
    })
  }

  componentDidMount(){

    fetch('http://localhost:5000/', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then((result) => result.json())
    .then(data => this.setState({pois: data}))
    
  }
 
  render() {

    return(

      <div>
        <Container>
          <OpenStreetMap
            pois = {this.state.pois}
            pushNewPoiInState = {this.pushNewPoiInState}
          />
          <TableOfPoi 
            pois = { this.state.pois }
            showHidePoi = {this.showHidePoi}
            removePoiFromState = {this.removePoiFromState}
          />
          <a href='http://localhost:5000/osmChangeXml' target="blank">
            Osm Change Xml
          </a> 
        </Container>
      </div>

    )
    
  }
}

export default App;
