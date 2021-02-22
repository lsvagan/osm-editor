import React, {Component} from 'react';
import TableOfPoi from './TableOfPoi';
import NavigationBar from './NavigationBar';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// import MapAndInputContainer from './MapAndInputContainer';
import MapComponent from './mapComponents/MapComponent';

import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchPois } from './app_store/actions';
import NewPoiInput from './NewPoiInput';
import OverpassMap from './mapComponents/OverpassMap';
import EditExistingPoiInput from './EditExistingPoiInput';

class App extends Component {

  componentDidMount() {
    this.props.fetchPois();
  }
 
  render() {

    return(

      <BrowserRouter>
        <Container>
        <NavigationBar />
        <Route path='/map' component={MapComponent} />
          <Route path='/map/pois' component={() => {
            return (
              <div>
                <TableOfPoi />
                <a href='http://localhost:5000/api/osmChangeXml' target="blank">
                  Osm Change Xml
                </a>
            </div>
            )
          }}
          />

          <Route path='/map/addNewPoi' component={NewPoiInput} />
          {/* <Route path='/editPoi/:poiId' component={EditPoiTest} /> */}
          <Route path='/map/editPoi/:poiId' render={ (props) => <NewPoiInput view="edit"  {...props} /> } />

          <Route path='/overpass/node' component={() => {
            return (
              <div>
                <OverpassMap />
                <EditExistingPoiInput/>
              </div>
            )
          }}
          />

        </Container>
      </BrowserRouter>

    )
    
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchPois: () => dispatch(fetchPois())
  }
};

export default connect(null, mapDispatchToProps)(App);
