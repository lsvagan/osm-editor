const convert = require('xml-js');
const selectPoiById = require('./reusable_queries/selectPoiById');

const takeValueFromXmlObj = (xmlObjTags) => {

    let valuesResult = { 
        name: '',
        street: '',
        housenumber: ''
    };

    if(xmlObjTags && xmlObjTags.length > 0) {

        xmlObjTags.forEach(tag => {
        
            switch(tag._attributes.k){
                
                case "name":
                    valuesResult.name = tag._attributes.v;
                    break;
    
                case "addr:street":
                    valuesResult.street = tag._attributes.v;
                    break;
    
                case "addr:housenumber":
                    valuesResult.housenumber = tag._attributes.v;
                    break;
    
            }
    
        });

    }

    return valuesResult;

}

const addOsmNode = (req, res, db) => {

    console.log('POST NODE: ', req.body);

    let { id, xmlString } = req.body;

    let xmlObj = convert.xml2js(xmlString, {compact: true});
    console.log(xmlObj);
    let { lat, lon } = xmlObj.node._attributes;
    console.log(xmlObj.node.tag)

    let { name, street, housenumber } = takeValueFromXmlObj(xmlObj.node.tag);
    console.log(name, street, housenumber)

    let post = {
        id,
        xml: xmlString,
        name,
        street,
        housenumber,
        lat,
        lon
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