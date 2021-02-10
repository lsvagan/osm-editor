const selectPoiById = require("./reusable_queries/selectPoiById");

const updatePoi = (req, res, db) => {
    
    let { name, street, housenumber, lat, lon, amenity, id } = req.body;
    
    let sql = 'UPDATE poi SET name = ?, street = ?, housenumber = ?, lat = ?, lon = ?, amenity = ? WHERE id = ?';

    db.query(sql, [name, street, housenumber, lat, lon, amenity, id], (err, result) => {
        if(err){
            console.log(err);
        }
        selectPoiById(id, db, res);
    });

}

module.exports = updatePoi;