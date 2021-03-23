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

        let xmlResponse = `<osmChange version="0.6" generator="acme osm editor"><modify>${nodesXml}</modify></osmChange>`;

        res.set("Content-Type", "text/xml");
        res.send(xmlResponse);
            
    })

}

module.exports = osmChangeXmlNode;
