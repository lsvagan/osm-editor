import React, {Component} from 'react';
import TableOfPoi from './TableOfPoi';
import './App.css';
import Container from 'react-bootstrap/Container';
import MapAndInputContainer from './MapAndInputContainer';

import { connect } from 'react-redux';
import { fetchPois } from './app_store/actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchPois();
  }
 
  render() {

    return(

      <div>
        <Container>
          <MapAndInputContainer />
          <TableOfPoi />
          <a href='http://localhost:5000/osmChangeXml' target="blank">
            Osm Change Xml
          </a> 
        </Container>
      </div>

    )
    
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchPois: () => dispatch(fetchPois())
  }
};

export default connect(null, mapDispatchToProps)(App);
