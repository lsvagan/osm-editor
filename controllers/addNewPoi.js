const addNewPoi = (req, res, db) => {

    let { placeName, street, lat, lng, type } = req.body;
    let post = {
        placeName: placeName,
        street: street,
        lat: lat,
        lng: lng,
        type: type
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
    let sql = 'SELECT * FROM poi WHERE id = ?';
    db.query(sql, poiId, (err, result) => {
        if(err){
            console.log(err);
        }
        console.log('rezultat selectije novog poia ', result)
        response.json(result);
    })
}

module.exports = addNewPoi;