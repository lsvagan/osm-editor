import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';
function NavigationBar (props) {

    return (

    <Navbar bg="dark" variant="dark" sticky="top">
        {/* <Navbar.Brand href="#home">OSM editor</Navbar.Brand> */}
        <Nav activeKey={props.location.pathname} className="ml-auto">

            <Nav.Link as={Link} eventKey="/map/pois" to="/map/pois">Home</Nav.Link>
            <Nav.Link as={Link} eventKey="/overpass/node" to="/overpass/node">Edit existing POI</Nav.Link>
            <Nav.Link as={Link} eventKey="/map/addNewPoi" to="/map/addNewPoi">Add new POI</Nav.Link>
            
        </Nav>
    </Navbar>

    )
}

export default withRouter(NavigationBar);
