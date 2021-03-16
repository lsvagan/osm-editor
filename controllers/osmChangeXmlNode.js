const convert = require('xml-js');

const osmChangeXmlNode = (req, res, db) => {

    let sql = 'SELECT xml FROM node';

    db.query(sql, (err, result) => {
        if(err) {
            console.log(err);
        }

        let nodes = result;
        let nodesXml = '';

        nodes.forEach(node => {
            nodesXml = nodesXml + node.xml;
        });

        let finish = convert.xml2js(`<osmChange version="0.6" generator="acme osm editor"><modify>${nodesXml}</modify></osmChange>`);
        console.log(finish);
        let finalFinish = convert.js2xml(finish);
        console.log(finalFinish);

        res.set('Content-Type', 'text/xml');
        res.send(finalFinish);
            
    })

}

module.exports = osmChangeXmlNode;
