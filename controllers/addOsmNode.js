const selectPoiById = require('./reusable_queries/selectPoiById');

const addOsmNode = (req, res, db) => {

    console.log('POST NODE: ', req.body);
    let { id, xmlString } = req.body;
    let post = {
        id: id,
        xml: xmlString
    };

    let tableName = 'node';

    let sql = 'INSERT INTO node SET ?';
    
    db.query(sql, post, (err, result) => {
        if(err) {
            console.log(err);
        }
        console.log('result: ', result);
        selectPoiById(id, db, tableName, res);
    })

}

module.exports = addOsmNode;