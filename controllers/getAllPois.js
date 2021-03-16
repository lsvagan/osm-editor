const getAllPois = (req, res, db) => {
    let sql = 'SELECT id, name, street, housenumber, amenity, lat, lon FROM poi WHERE removed = 0 ORDER BY id DESC';
    db.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        res.json(result);
    })
}

module.exports = getAllPois;