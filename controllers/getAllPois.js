const getAllPois = (req, res, db) => {
    let sql = 'SELECT * FROM poi WHERE removed = 0 ORDER BY id DESC';
    db.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        console.log(result);
        res.json(result);
    })
}

module.exports = getAllPois;