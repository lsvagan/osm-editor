const selectPoiById = (poiId, db, tableName, response) => {
    
    let sql = tableName === 'poi' ? 
    `SELECT id, name, street, housenumber, amenity, lat, lon FROM poi WHERE id = ?`
    :
    `SELECT id, xml, name, street, housenumber, lat, lon FROM node WHERE id = ?`;

    db.query(sql, poiId, (err, result) => {
        if(err){
            console.log(err);
        }
        response.json(result);
    })
}

module.exports = selectPoiById;