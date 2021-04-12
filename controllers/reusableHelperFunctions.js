const convert = require('xml-js');

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

const constructObjFromXmlString = (id, xmlString) => {
    
    let xmlObj = convert.xml2js(xmlString, {compact: true});
    
    let { lat, lon } = xmlObj.node._attributes;

    let { name, street, housenumber } = takeValueFromXmlObj(xmlObj.node.tag);

    let post = {
        id,
        xml: xmlString,
        name,
        street,
        housenumber,
        lat,
        lon
    };

    return post;

}

module.exports = { 
    constructObjFromXmlString
};