const reusableHelperFunctions = require('./reusableHelperFunctions');
const selectPoiById = require('./reusable_queries/selectPoiById');

const updateNode = (req, res, db) => {

    let {id, xmlString} = req.body;
    
    let post = reusableHelperFunctions.constructObjFromXmlString(id, xmlString);

    let tableName = 'node';

    let sql = 'UPDATE node SET xml = ?, name = ?, street = ?, housenumber = ?, lat = ?, lon = ? WHERE id = ?';

    db.query(sql, [post.xml, post.name, post.street, post.housenumber, post.lat, post.lon, id], (err, result) => {
        if(err){
            console.log(err);
        }
        selectPoiById(id, db, tableName, res);
    });

}

module.exports = updateNode;
