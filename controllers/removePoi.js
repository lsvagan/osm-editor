const removePoi = (req, res, db) => {
    let { id } = req.body;

    let sql = 'UPDATE poi SET removed = 1 WHERE id = ?';
    db.query(sql, id, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.status(200).json('success');
        }
    })
}

module.exports = removePoi;