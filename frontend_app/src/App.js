import React, {Component} from 'react';
import TableOfPoi from './TableOfPoi';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import MapAndInputContainer from './MapAndInputContainer';
import MapComponent from './mapComponents/MapComponent';
import EditPoiTest from './EditPoiTest';

import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchPois } from './app_store/actions';
import NewPoiInput from './NewPoiInput';

class App extends Component {

  componentDidMount() {
    this.props.fetchPois();
  }
 
  render() {

    return(

      <BrowserRouter>
        <Container>
        <MapComponent />
          <Route exact path='/' component={() => {
            return (
              <div>
                
                <Row className="justify-content-center">
                  <Button variant="primary">Edit existing POI</Button>
                  <Link to="/addNewPoi">
                    <Button variant="primary">Add new POI</Button>
                  </Link>
                </Row>
                <TableOfPoi />
                <a href='http://localhost:5000/osmChangeXml' target="blank">
                  Osm Change Xml
                </a>
            </div>
            )
          }}
          />

          <Route path='/addNewPoi' component={NewPoiInput} />
          {/* <Route path='/editPoi/:poiId' component={EditPoiTest} /> */}
          <Route path='/editPoi/:poiId' render={ (props) => <NewPoiInput view="edit"  {...props} /> } />

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
