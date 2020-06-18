const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const PORT = 5000;

const server = express();

//import controllers
const getAllPois = require('./controllers/getAllPois');
const addNewPoi = require('./controllers/addNewPoi');
const removePoi = require('./controllers/removePoi');

//cors Middleware
server.use(cors());

//Body Parser Middleware
server.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //password: 'your_password',
    database: 'project_database'
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Mysql connect successfully..')
    }
});

//gets all pois
server.get('/', (req, res) => { getAllPois(req, res, db) });

//post new poi
server.post('/addPoi', (req, res) => { addNewPoi(req, res, db)});

//set removed atribute in DB to true (1), removing poi from frontend
server.put('/removePoi', (req, res) => {removePoi(req, res, db)})


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});