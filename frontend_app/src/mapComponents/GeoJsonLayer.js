import React from "react";
import { GeoJSON } from "react-leaflet";
import L from 'leaflet';

import { fetchNodesXmlFromOsm } from '../app_store/actions';
import { connect } from 'react-redux';

class GeoJsonLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  onEachNode = (node, layer) => {

    // console.log(node, layer);
    // layer.setStyle({
    //     weight: 7,
    //     opacity: 0.7
    // })
    layer.bindPopup(node.id);
    
    // layer.on({
    //     click: (event) => {
          
    //         event.target.setStyle({
    //             color: 'blue',
    //             color: 'orange'
    //         });
            
    //     }
    // })

    layer.on({
          click: (event) => {
            
              console.log(event.target.feature.properties.id)
              this.props.fetchNodesXmlFromOsm(event.target.feature.properties.id);
              
          }
      })
    
  }

  customMarkerForGeojson = (features, latlng) => {
    const geojsonIcon = L.icon({
      iconUrl: require('./geojsonMarker.png'),
      iconSize: [25, 25]
    });
    return L.marker(latlng, {
      icon: geojsonIcon,
      opacity: 0.6
    });
  }

  render() {
      
    return this.props.geojsonData ? 
      <GeoJSON
      data={this.props.geojsonData}
      key={this.props.geojsonData.features.length} //You need to set key on the <GeoJSON> element every time you want it to be changed. This will cause the existing layer to be removed from Leaflet and a new GeoJSON layer to be created with the provided data.
      onEachFeature={this.onEachNode}
      pointToLayer={this.customMarkerForGeojson}
      /> 
    : 
      null;

  }

}

const mapStateToProps = (state) => {
  return{
    geojsonData: state.geojsonDataReducer.geojsonData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNodesXmlFromOsm : (id) => { dispatch(fetchNodesXmlFromOsm(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeoJsonLayer);