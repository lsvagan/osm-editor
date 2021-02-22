const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');
const PORT = 5000;

const js2xmlparser = require("js2xmlparser");

const server = express();

//import controllers
const getAllPois = require('./controllers/getAllPois');
const addNewPoi = require('./controllers/addNewPoi');
const removePoi = require('./controllers/removePoi');
const updatePoi = require('./controllers/updatePoi');
const osmChangeXml = require('./controllers/osmChangeXml');

//cors Middleware
server.use(cors());

//Body Parser Middleware
server.use(express.json());

//path Middleware
server.use(express.static(path.join(__dirname, '/frontend_app/build')))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //password: 'your_password',
    supportBigNumbers: true,
    timezone: 'utc',
    database: 'osm-editor-database'
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Mysql connected successfully..')
    }
});

server.get('/map/pois', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend_app/build', 'index.html'));
})

//json API
//gets all pois
server.get('/api/getAllPois', (req, res) => { getAllPois(req, res, db) });

//post new poi
server.post('/api/addPoi', (req, res) => { addNewPoi(req, res, db)});

//set removed atribute in DB to true (1), removing poi from frontend
server.put('/api/removePoi', (req, res) => {removePoi(req, res, db)});

//update poi info, return poi with updated info
server.put('/api/updatePoi', (req, res) => { updatePoi(req, res, db)});

//get XML file for all pois
server.get('/api/osmChangeXml', (req,res) => { osmChangeXml(req, res, db, js2xmlparser) });


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});