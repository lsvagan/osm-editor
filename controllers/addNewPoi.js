const addNewPoi = (req, res, db) => {

    let { name, street, housenumber, lat, lon, amenity } = req.body;
    let post = {
        name: name,
        street: street,
        housenumber: housenumber,
        lat: lat,
        lon: lon,
        amenity: amenity
    };

    let sql = 'INSERT INTO poi SET ?';
    let newestPoiId;

    db.query(sql, post, (err, result) => {
        if(err){
            console.log(err);
        }
        newestPoiId = result.insertId;
        selectNewestPoiFromDataBase(newestPoiId, db, res);

    })

}

const selectNewestPoiFromDataBase = (poiId, db, response) => {
    let sql = 'SELECT id, name, street, housenumber, amenity, lat, lon FROM poi WHERE id = ?';
    db.query(sql, poiId, (err, result) => {
        if(err){
            console.log(err);
        }
        response.json(result);
    })
}

module.exports = addNewPoi;