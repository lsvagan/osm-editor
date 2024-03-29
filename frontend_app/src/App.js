import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './App.css';

import Container from 'react-bootstrap/Container';

import MapComponent from './mapComponents/MapComponent';

import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchPois } from './app_store/actions';
import NewPoiInput from './NewPoiInput';
import OverpassMap from './mapComponents/OverpassMap';
import EditExistingPoiInput from './EditExistingPoiInput';
import TableTabs from './TableTabs';

class App extends Component {
    componentDidMount() {
        this.props.fetchPois();
    }

    render() {
        return (
            <BrowserRouter>
                <Container>
                    <NavigationBar />
                    <Route path="/map" component={MapComponent} />
                    <Route
                        path="/map/pois"
                        component={() => {
                            return (
                                <div>
                                    {/* <TableOfPoi /> */}
                                    <TableTabs />
                                </div>
                            );
                        }}
                    />

                    <Route path="/map/addNewPoi" component={NewPoiInput} />
                    {/* <Route path='/editPoi/:poiId' component={EditPoiTest} /> */}
                    <Route
                        path="/map/editPoi/:poiId"
                        render={(props) => (
                            <NewPoiInput view="edit" {...props} />
                        )}
                    />

                    <Route
                        path="/overpass/node"
                        component={() => {
                            return (
                                <div>
                                    <OverpassMap />
                                    <EditExistingPoiInput />
                                </div>
                            );
                        }}
                    />

                    <Route
                        path="/overpass/editNode/:nodeId"
                        component={(props) => {
                            return (
                                <div>
                                    <OverpassMap />
                                    <EditExistingPoiInput
                                        view="edit"
                                        {...props}
                                    />
                                </div>
                            );
                        }}
                    />
                </Container>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPois: () => dispatch(fetchPois()),
    };
};

export default connect(null, mapDispatchToProps)(App);
