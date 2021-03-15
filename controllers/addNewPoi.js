const selectPoiById = require('./reusable_queries/selectPoiById');

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

    let tableName = 'poi';

    let sql = 'INSERT INTO poi SET ?';
    let newestPoiId;

    db.query(sql, post, (err, result) => {
        if(err){
            console.log(err);
        }
        newestPoiId = result.insertId;
        selectPoiById(newestPoiId, db, tableName, res);

    })

}

module.exports = addNewPoi;