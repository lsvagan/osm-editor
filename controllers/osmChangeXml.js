const osmChangeXml = (req, res, db, js2xmlparser) => {
    let sql = 'SELECT id, name, street, housenumber, city, lat, lon, amenity, version, timestamp FROM poi WHERE removed = 0';
    db.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }else{
            
            let pois = result;
            
            let nodePois = pois.map((poi) => {
                let timestampFormat = JSON.stringify(poi.timestamp);
                
                return {
                    "@": {
                        "id": poi.id,
                        "version": poi.version,
                        "timestamp": JSON.parse(timestampFormat),
                        "lat": poi.lat.toFixed(7),
                        "lon": poi.lon.toFixed(7)
                    },
                    "tag": [
                        {
                           "@" :{
                                "k": "name",
                                "v": poi.name
                            }
                        },
                        {
                            "@" :{
                                "k": "addr:city",
                                "v": poi.city
                            }
                        },
                        {
                            "@" :{
                                "k": "addr:housenumber",
                                "v": poi.housenumber
                            }
                        },
                        {
                            "@" :{
                                "k": "addr:street",
                                "v": poi.street
                            }
                        },
                        {
                            "@" :{
                                "k": "amenity",
                                "v": poi.amenity
                            }
                        }
                    ]
                } // end of return node poi
            }) // end of map method

            let xmlConstructor = {
                "@": 
                    { 
                        "version": "0.6",
                        "generator": "acme osm editor"
                    },
                    "create": 
                        { 
                            "node": nodePois
                        } 
            };
            let generatedXml = js2xmlparser.parse('osmChange', xmlConstructor);
            res.set('Content-Type', 'text/xml');
            res.status(200).end(generatedXml);
        } //end of else
    })
    
}

module.exports = osmChangeXml;