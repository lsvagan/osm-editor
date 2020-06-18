const removePoi = (req, res, db) => {
    let { id } = req.body;
    console.log(id);
    let sql = 'UPDATE poi SET removed = 1 WHERE id = ?';
    db.query(sql, id, (err, result) => {
        if(err){
            console.log(err);
        }else{
            console.log('result of delete/update action ', result)
            res.status(200).json('success');
        }
    })
}

module.exports = removePoi;