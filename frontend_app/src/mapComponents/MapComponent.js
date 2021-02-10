import React, {Component} from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import OpenStreetMapMarker from './OpenStreetMapMarker';
import NewPoiMarker from './NewPoiMarker';
import Search from './MapSearch';
import { connect } from 'react-redux';
import { updateLatLon } from '../app_store/actions';
import L from 'leaflet';

  class MapComponent extends Component {
    constructor(){
      super();
      this.state ={
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "id": "node/3128104638",
                "properties": {
                    "id": "node/3128104638"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4592707,
                        44.8213375
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/3128104640",
                "properties": {
                    "id": "node/3128104640"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4594025,
                        44.8214511
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/3128104641",
                "properties": {
                    "id": "node/3128104641"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4593368,
                        44.8214894
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/3961301693",
                "properties": {
                    "id": "node/3961301693"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4593372,
                        44.8211259
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/3961301698",
                "properties": {
                    "id": "node/3961301698"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4594284,
                        44.8212039
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/3961301701",
                "properties": {
                    "id": "node/3961301701"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4595655,
                        44.8213234
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/3961301703",
                "properties": {
                    "id": "node/3961301703"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4596718,
                        44.8214206
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/3961301705",
                "properties": {
                    "id": "node/3961301705"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4597615,
                        44.8212147
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/3961301707",
                "properties": {
                    "id": "node/3961301707"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4597471,
                        44.8214883
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/6096891385",
                "properties": {
                    "addr:housenumber": "8",
                    "addr:street": "Вишњићева",
                    "brand": "dm",
                    "brand:wikidata": "Q266572",
                    "name": "DM",
                    "shop": "chemist",
                    "website": "https://www.dm.rs/",
                    "id": "node/6096891385"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4597522,
                        44.8214513
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/6833100795",
                "properties": {
                    "amenity": "pharmacy",
                    "id": "node/6833100795"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4596023,
                        44.8213411
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/6833100796",
                "properties": {
                    "addr:housenumber": "6",
                    "addr:street": "Вишњићева",
                    "name": "Пекара Сунце",
                    "name:en": "Sun Bakery",
                    "name:sr": "Пекара Сунце",
                    "name:sr-Latn": "Pekara Sunce",
                    "shop": "bakery",
                    "id": "node/6833100796"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4595224,
                        44.821241
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/8066818221",
                "properties": {
                    "id": "node/8066818221"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4595019,
                        44.821391
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/8066818228",
                "properties": {
                    "id": "node/8066818228"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4591821,
                        44.8212078
                    ]
                }
            },
            {
                "type": "Feature",
                "id": "node/8066818234",
                "properties": {
                    "id": "node/8066818234"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        20.4591936,
                        44.8212073
                    ]
                }
            }
        ]
    }
    }

    onEachNode = (node, layer) => {

      console.log(node, layer);
      layer.bindPopup(node.id);
    
    }

    customMarkerForGeojson = (features, latlng) => {
      const geojsonIcon = L.icon({
        iconUrl: require('./geojsonMarker.png'),
        iconSize: [25, 25],
        // iconAnchor: [10, 36],
        // popupAnchor: [0, -36]
      });
      return L.marker(latlng, {
        icon: geojsonIcon,
        opacity: 0.6
      });
    }
    
    render() {
      
      return (
        <div>
          <Map className="leflet-map"
            center={[44.8110, 20.4625]}
            zoom={13}
            maxZoom={20}
            onClick={this.props.setLatLon}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxNativeZoom={19}
                maxZoom={20}
              />
              <GeoJSON
                // attribution="Capa de Hospitales de ESRI"
                // key='random key'
                data={this.state}
                onEachFeature={this.onEachNode}
                pointToLayer={this.customMarkerForGeojson}
              />
              <OpenStreetMapMarker />
              <NewPoiMarker />
              <Search />

          </Map>
        </div>
      );
    }
  }

const mapDispatchToProps = ( dispatch ) => {
  return {
      setLatLon: (e) => { dispatch(updateLatLon(e.latlng)) }
  }
}
  
  export default connect(null, mapDispatchToProps)(MapComponent);
  