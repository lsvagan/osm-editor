const selectPoiById = (poiId, db, response) => {
    let sql = 'SELECT id, name, street, housenumber, amenity, lat, lon FROM poi WHERE id = ?';
    db.query(sql, poiId, (err, result) => {
        if(err){
            console.log(err);
        }
        response.json(result);
    })
}

module.exports = selectPoiById;