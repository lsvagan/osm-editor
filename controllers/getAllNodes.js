const getAllNodes = (req, res, db) => {
    let sql = 'SELECT id, xml, name, street, housenumber, lat, lon FROM node';
    db.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        res.json(result);
    })
}

module.exports = getAllNodes;