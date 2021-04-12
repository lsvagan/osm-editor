const reusableHelperFunctions = require('./reusableHelperFunctions');
const selectPoiById = require('./reusable_queries/selectPoiById');

const addOsmNode = (req, res, db) => {

    let { id, xmlString } = req.body;

    let post = reusableHelperFunctions.constructObjFromXmlString(id, xmlString);

    let tableName = 'node';

    let sql = 'INSERT INTO node SET ?';
    
    db.query(sql, post, (err, result) => {
        if(err) {
            console.log(err);
        }
        selectPoiById(id, db, tableName, res);
    })

}

module.exports = addOsmNode;