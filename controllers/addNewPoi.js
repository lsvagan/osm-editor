const addNewPoi = (req, res, db) => {

    let { name, street, lat, lon, amenity } = req.body;
    let post = {
        name: name,
        street: street,
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
        console.log('result of insert action ', result.insertId);
        newestPoiId = result.insertId;
        console.log('newestPoiID: ', newestPoiId)
        selectNewestPoiFromDataBase(newestPoiId, db, res);

    })

}

const selectNewestPoiFromDataBase = (poiId, db, response) => {
    let sql = 'SELECT id, name, street, amenity, lat, lon FROM poi WHERE id = ?';
    db.query(sql, poiId, (err, result) => {
        if(err){
            console.log(err);
        }
        console.log('rezultat selectije novog poia ', result)
        response.json(result);
    })
}

module.exports = addNewPoi;