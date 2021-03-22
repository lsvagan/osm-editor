import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import RemovingDialog from './RemovingDialog';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNodes, showHideOnMap } from './app_store/actions';


class TableOfNode extends Component  {

    componentDidMount () {
        this.props.fetchNodes();
        console.log('mounted')
    }

    render() {
        const { nodes, showHideOnMap } = this.props;

        const nodesList = nodes.map((node) => {
            return (
                <tr key= {node.id}>
                    <td>{node.id}</td>
                    <td>{node.name}</td>
                    <td>{`${node.street} ${node.housenumber}`}</td>
                    <td>{node.lat}</td>
                    <td>{node.lon}</td>
                    <td>
                        <input type="checkbox" onChange = { (e) => showHideOnMap(e, node.id, node.lat, node.lon) } />
                    </td>
                    {/* <td>
                        <Link to={`/map/editPoi/${poi.id}`}>
                            <Button size="sm" variant="outline-info">
                                Edit
                            </Button>
                        </Link>
                    </td> */}
                </tr>
            )
        });
        return(
            
            <Table responsive striped bordered>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Place name</th>
                        <th>Street</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Show/hide</th>
                    </tr>
                </thead>
                <tbody>
                    {nodesList}
                </tbody>
                <a href='http://localhost:5000/api/osmChangeXmlNode' target="blank">
                  Osm Change Xml Nodes
                </a>
            </Table>

        )
       
    }
    
}

const mapStateToProps = (state) => {
    return{
        nodes: state.nodeReducer.nodes
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchNodes: () => { dispatch(fetchNodes()) },
        showHideOnMap: (e, nodeId, nodeLat, nodeLon) => { dispatch(showHideOnMap(e, nodeId, nodeLat, nodeLon)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableOfNode);